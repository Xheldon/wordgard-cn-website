const assert = require('node:assert/strict');
const { test } = require('node:test');
const childProcess = require('node:child_process');
const { EventEmitter } = require('node:events');
const { PassThrough } = require('node:stream');
const fs = require('node:fs');
const path = require('node:path');
const { translate } = require('../utils');

const original = 'The set object that the current value points at, if any.';
const translated = '当前值所指向的集合对象（如果有）。';
const completion = (content = translated, finish_reason = 'stop') => ({
  choices: [{ message: { content }, finish_reason }],
});
const busy = { code: 50508, message: 'System is too busy now. Please try again later.', data: null };

// Every request, timer and error-file write is mocked. No credentials or network are used.
const setup = (t, responses) => {
  const calls = [];
  const errors = [];
  const delays = [];
  const previousEnv = { key: process.env.OPENAI_API_KEY, url: process.env.OPENAI_URL };
  process.env.OPENAI_API_KEY = 'test-only-key';
  process.env.OPENAI_URL = 'https://unused.invalid/chat/completions';
  t.after(() => {
    for (const [name, value] of Object.entries({ OPENAI_API_KEY: previousEnv.key, OPENAI_URL: previousEnv.url })) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  });
  t.mock.method(console, 'error', () => {});
  t.mock.method(fs, 'appendFileSync', (file, data) => {
    assert.equal(file, path.resolve(__dirname, '../error.txt'));
    errors.push(data);
  });
  t.mock.method(global, 'setTimeout', (callback, delay) => {
    delays.push(delay);
    queueMicrotask(callback);
  });
  t.mock.method(childProcess, 'spawn', (command, args) => {
    assert.equal(command, 'curl');
    calls.push(args);
    const response = responses[calls.length - 1];
    assert.ok(response, 'unexpected extra request');
    const res = new EventEmitter();
    res.stdout = new PassThrough();
    res.stderr = new PassThrough();
    queueMicrotask(() => {
      if (response.error) {
        res.emit('error', response.error);
      } else {
        const body = response.body ?? JSON.stringify(response.json ?? completion());
        const output = Buffer.from(`${body}\n${response.status ?? 200}`);
        // Split even in the middle of multibyte Chinese characters.
        for (let i = 0; i < output.length; i++) res.stdout.write(output.subarray(i, i + 1));
      }
      if (response.stderr) res.stderr.write(response.stderr);
      res.stdout.end();
      res.stderr.end();
      res.emit('close', Object.hasOwn(response, 'exitCode') ? response.exitCode : (response.error ? -2 : 0), response.signal);
    });
    return res;
  });
  return { calls, errors, delays };
};

test('normal translation preserves the model, prompt, HTML and timeouts', async (t) => {
  const state = setup(t, [{ json: completion('<b>集合</b>') }]);
  assert.equal(await translate('<b>Set</b>'), '<b>集合</b>');
  const args = state.calls[0];
  assert.equal(args[0], '--disable');
  assert.equal(args.includes('--retry'), false);
  assert.equal(args[args.indexOf('--connect-timeout') + 1], '15');
  assert.equal(args[args.indexOf('--max-time') + 1], '120');
  assert.equal(args[args.indexOf('--write-out') + 1], '\n%{http_code}');
  const payload = JSON.parse(args[args.indexOf('-d') + 1]);
  assert.equal(payload.model, 'Qwen/Qwen3.5-27B');
  assert.equal(payload.enable_thinking, false);
  assert.equal(payload.max_tokens, 4096);
  assert.equal(payload.messages[0].role, 'system');
  assert.match(payload.messages[0].content[0].text, /Preserve ALL HTML tags/);
  assert.equal(payload.messages[1].content[0].text, '<b>Set</b>');
  assert.deepEqual(state.errors, []);
  assert.deepEqual(state.delays, []);
});

test('a busy HTTP response followed by success uses isolated buffers', async (t) => {
  const state = setup(t, [{ status: 503, json: busy }, { json: completion() }]);
  assert.equal(await translate(original), translated);
  assert.equal(state.calls.length, 2);
  assert.deepEqual(state.delays, [3000]);
  assert.deepEqual(state.errors, []);
});

test('busy business error 50508 also retries under HTTP 200', async (t) => {
  const state = setup(t, [{ json: busy }, { json: completion() }]);
  assert.equal(await translate(original), translated);
  assert.equal(state.calls.length, 2);
  assert.deepEqual(state.errors, []);
});

test('concurrent translations keep their responses and retries separate', async (t) => {
  const state = setup(t, [
    { status: 503, json: busy },
    { json: completion('第二条译文') },
    { json: completion() },
  ]);
  assert.deepEqual(await Promise.all([translate(original), translate('Second text')]), [translated, '第二条译文']);
  assert.equal(state.calls.length, 3);
  assert.deepEqual(state.errors, []);
});

for (const status of [408, 429, 500, 502, 504]) {
  test(`HTTP ${status} retries without trusting completion-shaped error bodies`, async (t) => {
    const state = setup(t, [{ status, json: completion('不可接受') }, { json: completion() }]);
    assert.equal(await translate(original), translated);
    assert.equal(state.calls.length, 2);
    assert.deepEqual(state.errors, []);
  });
}

for (const body of ['', '<html>Bad gateway</html>', '{"choices":', JSON.stringify(busy) + JSON.stringify(completion())]) {
  test(`invalid body is retried as a whole: ${body.slice(0, 40) || '(empty)'}`, async (t) => {
    const state = setup(t, [{ body }, { json: completion() }]);
    assert.equal(await translate(original), translated);
    assert.equal(state.calls.length, 2);
    assert.deepEqual(state.errors, []);
  });
}

for (const content of ['', ' \n\t', 42, { text: translated }, null]) {
  test(`invalid translation content cannot be accepted: ${JSON.stringify(content)}`, async (t) => {
    const state = setup(t, [{ json: completion(content) }, { json: completion() }]);
    assert.equal(await translate(original), translated);
    assert.equal(state.calls.length, 2);
    assert.deepEqual(state.errors, []);
  });
}

for (const json of [null, [], {}, { choices: [] }]) {
  test(`missing completion is retried: ${JSON.stringify(json)}`, async (t) => {
    const state = setup(t, [{ body: JSON.stringify(json) }, { json: completion() }]);
    assert.equal(await translate(original), translated);
    assert.equal(state.calls.length, 2);
  });
}

for (const finish of ['length', 'content_filter', 'tool_calls', null, undefined]) {
  test(`partial or unconfirmed completion is rejected: ${finish}`, async (t) => {
    const json = completion(translated, finish);
    if (finish === undefined) delete json.choices[0].finish_reason;
    const state = setup(t, [{ json }]);
    await assert.rejects(translate(original), /未完成译文/);
    assert.equal(state.calls.length, 1);
    assert.equal(state.errors.length, 1);
  });
}

for (const status of [301, 400, 401, 403, 404]) {
  test(`permanent HTTP ${status} fails once even if the body contains a completion`, async (t) => {
    const state = setup(t, [{ status, json: completion() }]);
    await assert.rejects(translate(original), new RegExp(`HTTP ${status}`));
    assert.equal(state.calls.length, 1);
    assert.equal(state.errors.length, 1);
    assert.deepEqual(state.delays, []);
  });
}

test('a permanent business error overrides a completion in the same JSON', async (t) => {
  const state = setup(t, [{ json: { ...completion(), error: { code: 'invalid_api_key', message: 'Invalid key' } } }]);
  await assert.rejects(translate(original), /业务错误 invalid_api_key/);
  assert.equal(state.calls.length, 1);
  assert.equal(state.errors.length, 1);
});

for (const exitCode of [5, 6, 7, 18, 28, 52, 55, 56]) {
  test(`curl transport failure ${exitCode} discards all received content before retry`, async (t) => {
    const state = setup(t, [{ exitCode, json: completion('部分响应'), stderr: 'transport failure' }, { json: completion() }]);
    assert.equal(await translate(original), translated);
    assert.equal(state.calls.length, 2);
    assert.deepEqual(state.errors, []);
  });
}

test('exhausted retries reject and record exactly one contextual error', async (t) => {
  const state = setup(t, Array.from({ length: 4 }, () => ({ json: busy })));
  await assert.rejects(translate(original, { key: 'Set', file: 'docs/ref/index.html' }), /50508/);
  assert.equal(state.calls.length, 4);
  assert.deepEqual(state.delays, [3000, 3000, 3000]);
  assert.equal(state.errors.length, 1);
  assert.match(state.errors[0], /^\[docs\/ref\/index.html-Set\]: The set object/);
  assert.match(state.errors[0], /50508/);
});

for (const response of [{ status: 503 }, { body: '' }, { exitCode: 28, stderr: 'timeout' }]) {
  test(`persistent transient failure is bounded: ${JSON.stringify(response)}`, async (t) => {
    const state = setup(t, Array.from({ length: 4 }, () => response));
    await assert.rejects(translate(original));
    assert.equal(state.calls.length, 4);
    assert.deepEqual(state.delays, [3000, 3000, 3000]);
    assert.equal(state.errors.length, 1);
  });
}

test('a curl startup error followed by close records only one error', async (t) => {
  const state = setup(t, [{ error: Object.assign(new Error('spawn curl ENOENT'), { code: 'ENOENT' }) }]);
  await assert.rejects(translate(original), /curl 启动失败/);
  assert.equal(state.calls.length, 1);
  assert.equal(state.errors.length, 1);
});

for (const response of [{ exitCode: 60 }, { exitCode: null, signal: 'SIGTERM' }]) {
  test(`non-transient curl failures do not retry: ${JSON.stringify(response)}`, async (t) => {
    const state = setup(t, [response]);
    await assert.rejects(translate(original), /curl 退出码/);
    assert.equal(state.calls.length, 1);
    assert.equal(state.errors.length, 1);
  });
}

test('missing API configuration fails before invoking curl', async (t) => {
  const state = setup(t, []);
  delete process.env.OPENAI_API_KEY;
  await assert.rejects(translate(original), /缺少 OPENAI_API_KEY/);
  assert.equal(state.calls.length, 0);
  assert.equal(state.errors.length, 1);
});
