const assert = require('node:assert/strict');
const { test } = require('node:test');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const root = path.resolve(__dirname, '..');
const original = 'The set object that the current value points at, if any.';
const translated = '当前值所指向的集合对象（如果有）。';
const busy = { code: 50508, message: 'System is too busy now. Please try again later.', data: null };
const completion = { choices: [{ message: { content: translated }, finish_reason: 'stop' }] };

const runTranslation = (t, responses) => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'wordgard-translation-test-'));
  t.after(() => fs.rmSync(fixture, { recursive: true, force: true }));
  for (const file of ['index.js', 'utils.js', 'append-head.html']) {
    fs.copyFileSync(path.join(root, file), path.join(fixture, file));
  }
  const outputDir = path.join(fixture, 'wordgard/website/output');
  const dictDir = path.join(fixture, 'dict');
  const binDir = path.join(fixture, 'bin');
  for (const dir of [outputDir, dictDir, binDir]) fs.mkdirSync(dir, { recursive: true });
  const cached = { _translate: '已有译文', _note: '已有注释' };
  fs.writeFileSync(path.join(dictDir, 'index.json'), JSON.stringify({ Cached: cached }));
  fs.writeFileSync(path.join(outputDir, 'index.html'), `<html><head></head><body>
    <header><div class="navlinks"></div></header>
    <article><p>Cached</p><p>${original}</p></article></body></html>`);
  fs.writeFileSync(path.join(fixture, 'responses.json'), JSON.stringify(responses));
  // A fake curl executable returns fixtures only. It cannot make network requests.
  fs.writeFileSync(path.join(binDir, 'curl'), `#!/usr/bin/env node
const fs = require('node:fs');
const responses = JSON.parse(fs.readFileSync('responses.json', 'utf8'));
const count = fs.existsSync('calls.txt') ? Number(fs.readFileSync('calls.txt', 'utf8')) : 0;
fs.writeFileSync('calls.txt', String(count + 1));
const response = responses[count];
if (!response) process.exit(2);
process.stdout.write(JSON.stringify(response.json) + '\\n' + (response.status || 200));
`, { mode: 0o755 });
  // Accelerate retry/caller delays in this subprocess, leaving production bounds intact.
  execFileSync(process.execPath, ['-e', 'global.setTimeout = callback => setImmediate(callback); require("./index.js");'], {
    cwd: fixture,
    env: {
      ...process.env,
      NODE_PATH: path.join(root, 'node_modules'),
      PATH: `${binDir}${path.delimiter}${path.dirname(process.execPath)}${path.delimiter}${process.env.PATH}`,
      OPENAI_API_KEY: 'test-only-key',
      OPENAI_URL: 'https://unused.invalid/chat/completions',
    },
    timeout: 15000,
    stdio: 'pipe',
  });
  const dict = JSON.parse(fs.readFileSync(path.join(dictDir, 'index.json'), 'utf8'));
  const html = fs.readFileSync(path.join(outputDir, 'index.html'), 'utf8');
  const dom = new JSDOM(html);
  t.after(() => dom.window.close());
  assert.deepEqual(dict.Cached, cached);
  assert.equal(dom.window.document.querySelectorAll('article p')[0].textContent, cached._translate);
  const errorFile = path.join(fixture, 'error.txt');
  return {
    dict,
    paragraph: dom.window.document.querySelectorAll('article p')[1],
    errors: fs.existsSync(errorFile) ? fs.readFileSync(errorFile, 'utf8') : '',
    calls: Number(fs.readFileSync(path.join(fixture, 'calls.txt'), 'utf8')),
  };
};

test('recovered retry writes only the successful translation and no error', (t) => {
  const result = runTranslation(t, [{ status: 503, json: busy }, { json: completion }]);
  assert.equal(result.calls, 2);
  assert.equal(result.paragraph.textContent, translated);
  assert.equal(result.paragraph.getAttribute('data-x-en'), original);
  assert.deepEqual(result.dict[original], { _translate: translated, _note: '' });
  assert.equal(result.errors, '');
});

test('exhausted retries preserve the source, leave the dictionary untouched and record an error', (t) => {
  const result = runTranslation(t, Array.from({ length: 4 }, () => ({ json: busy })));
  assert.equal(result.calls, 4);
  assert.equal(result.paragraph.textContent, original);
  assert.equal(Object.hasOwn(result.dict, original), false);
  assert.equal(result.errors.trim().split('\n').length, 1);
  assert.ok(result.errors.includes(original));
  assert.match(result.errors, /50508/);
});

test('partial translations never enter the dictionary or replace the source', (t) => {
  const result = runTranslation(t, [{ json: { choices: [{ message: { content: translated }, finish_reason: 'length' }] } }]);
  assert.equal(result.calls, 1);
  assert.equal(result.paragraph.textContent, original);
  assert.equal(Object.hasOwn(result.dict, original), false);
  assert.match(result.errors, /未完成译文/);
});
