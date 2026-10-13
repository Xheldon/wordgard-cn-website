const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const ERROR_PATH = path.resolve(__dirname, 'error.txt');
const MAX_ATTEMPTS = 4;
const RETRY_DELAY_MS = 3000;
const RETRYABLE_CURL_CODES = new Set([5, 6, 7, 18, 28, 52, 55, 56]);

class TranslationError extends Error {
  constructor(message, retryable = false) {
    super(message);
    this.retryable = retryable;
  }
}

const parseResponse = (result) => {
  // Note: --write-out 只在响应末尾追加状态码，正文必须完整地解析为一个 JSON。
  const status = result.match(/\n([1-5]\d{2})$/);
  if (!status) {
    throw new TranslationError('接口未返回有效 HTTP 状态码', true);
  }
  const statusCode = Number(status[1]);
  if (statusCode < 200 || statusCode >= 300) {
    throw new TranslationError(
      `接口 HTTP ${statusCode}`,
      statusCode === 408 || statusCode === 429 || statusCode >= 500
    );
  }
  let json;
  try {
    json = JSON.parse(result.slice(0, status.index));
  } catch {
    throw new TranslationError('接口返回空响应或畸形 JSON', true);
  }
  // Note: 硅基流动的忙碌错误也可能通过 HTTP 200 返回，不能只看 HTTP 状态。
  if (json?.error || (json?.code != null && Number(json.code) !== 0)) {
    const code = json.error?.code ?? json.code;
    const message = json.error?.message ?? json.message ?? '未知业务错误';
    throw new TranslationError(`接口业务错误 ${code ?? ''}: ${message}`, Number(code) === 50508);
  }
  const choice = json?.choices?.[0];
  const translated = choice?.message?.content;
  if (typeof translated !== 'string' || !translated.trim()) {
    throw new TranslationError('接口未返回有效译文', true);
  }
  // Note: 达到 token 上限等情况下，content 可能只是部分译文，不能写入字典。
  if (choice.finish_reason !== 'stop') {
    throw new TranslationError(`接口返回未完成译文: ${choice.finish_reason ?? '(无 finish_reason)'}`);
  }
  return translated;
};

const requestOnce = (url, apiKey, payload) => new Promise((resolve, reject) => {
  // Note: 每次仅发一次请求，禁用 curl 配置文件以免其隐式开启重试。
  // 应用层重试会创建全新的进程和缓冲，避免失败响应与成功响应拼接。
  const res = childProcess.spawn('curl', [
    '--disable',
    '--request', 'POST',
    '--url', url,
    '-sS',
    '--connect-timeout', '15',
    '--max-time', '120',
    '--write-out', '\n%{http_code}',
    '-H', 'Content-Type: application/json',
    '-H', `Authorization: Bearer ${apiKey}`,
    '-d', payload,
  ]);
  const chunks = [];
  let stderr = '';
  res.stdout.on('data', (data) => chunks.push(data));
  res.stderr.setEncoding('utf8');
  res.stderr.on('data', (data) => { stderr += data; });
  res.once('error', (err) => {
    reject(new TranslationError(`curl 启动失败: ${err.message}`));
  });
  res.once('close', (code, signal) => {
    if (code !== 0) {
      reject(new TranslationError(
        `curl 退出码 ${code}${signal ? ` (${signal})` : ''}: ${stderr.trim() || '(无 stderr)'}`,
        RETRYABLE_CURL_CODES.has(code)
      ));
      return;
    }
    try {
      // Note: 在所有数据收齐后解码，避免 UTF-8 中文跨 chunk 时被破坏。
      resolve(parseResponse(Buffer.concat(chunks).toString('utf8')));
    } catch (err) {
      reject(err);
    }
  });
});

// Note: 记录一条翻译错误到 error.txt，供 CI 判定本次是否存在错误
const recordError = (message) => {
  try {
    fs.appendFileSync(ERROR_PATH, `${message}\n`);
  } catch (e) {
    console.error('写入 error.txt 失败:', e && e.message);
  }
};

// Note: 返回翻译后的字符串；失败时 reject（由调用方决定保留原文、不写入字典），
// 并把错误写入 error.txt。不再返回占位符，避免占位符被固化进字典。
exports.translate = async (text, { key, file } = {}) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    const url = process.env.OPENAI_URL;
    // Note: 缺少必要的环境变量时直接失败，而不是拿着空配置去请求
    if (!apiKey || !url) {
      throw new TranslationError('缺少 OPENAI_API_KEY 或 OPENAI_URL 环境变量');
    }
    const payload = JSON.stringify({
      model: 'Qwen/Qwen3.5-27B',
      messages: [
        {
          role: 'system',
          content: [
            {
              type: 'text',
              // Note: 指令全部放在 system，user 只放纯待译文本。此前把指令和文本拼在
              // 同一句 user 消息里，遇到很短的文本（如 Docs/Try）时模型会把指令一起译出来。
              text: 'You are a professional, authentic machine translation engine. Translate the text provided by the user into Simplified Chinese. Output ONLY the translated text, with no additional commentary, notes, quotes, or explanation. Preserve ALL HTML tags and attributes exactly as-is; translate only the human-readable text content, never tag names, attribute values, or code. If the text is a single word or short phrase, translate just that word or phrase.',
            },
          ],
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: text,
            },
          ],
        },
      ],
      temperature: 0,
      top_p: 0.95,
      max_tokens: 4096,
      // Note: Qwen3 系列默认开启"思考模式"，会先长时间推理再输出，批量翻译时
      // 极易触发超时（实测开启时单条请求 90s 都无响应）。翻译任务不需要思考，
      // 必须关闭以保证速度和稳定。
      enable_thinking: false,
    });
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        return await requestOnce(url, apiKey, payload);
      } catch (err) {
        if (!err.retryable || attempt === MAX_ATTEMPTS) throw err;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      }
    }
  } catch (err) {
    // Note: 仅在最终失败时记一条错误；重试恢复成功不应使 CI 失败。
    console.error(`ai 翻译失败: [${text}] -> [${err.message}]`);
    recordError(`[${file}-${key}]: ${text} -> ${err.message}`);
    throw err;
  }
};
