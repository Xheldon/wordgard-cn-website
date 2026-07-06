// Note: 读取 wordgard/website/output 下构建出的各个 html，解析出其中的可翻译内容，
// 查字典替换为中文，未命中则调用 AI 翻译并写回字典与 html。
// 整体流程与 prosemirror-cn-website 一致，仅适配 wordgard 的构建产物结构。

const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const glob = require('glob');
const { Semaphore } = require('async-mutex');

const { translate } = require('./utils');

// Note: 首次全量翻译时并发 4 在硅基流动侧触发了限流（约 1.3% 失败），调回 2 更稳；
// 后续都是小增量（仅补译新增/上次失败的少量字符串），并发影响不大。
const MAX_CONCURRENT = 2;

// Note: wordgard 的构建产物目录（CI 中会把 website 检出到 wordgard/website 内构建）
const BUILD_DIR = path.resolve(__dirname, 'wordgard/website/output');
const DICT_DIR = path.resolve(__dirname, 'dict');
const REPO_BLOB = 'https://github.com/Xheldon/wordgard-cn-website/blob/main/dict';
const SITE = 'https://wordgard.xheldon.com';

// Note: 谷歌统计 / 广告 ID —— 请替换为 wordgard 中文站【新建】的 ID。
// 留空则不注入对应脚本（避免用无效 ID 拉起统计/广告）。
const GA_MEASUREMENT_ID = 'G-2VX7Y13EBT'; // Google Analytics 衡量 ID
const ADSENSE_CLIENT = 'ca-pub-5486286026923411'; // Google AdSense 发布商 ID

// Note: 默认翻译配置：导航链接 + 正文的段落/列表项/标题/代码注释
const defaultConfig = () => [
  { container: 'header', selector: '.navlinks a' },
  {
    container: 'article',
    selector: 'p, li, h1, h2, h3, h4, pre span.tok-comment',
  },
];

// Note: 接口参考手册特殊处理：只翻译正文 p/li/代码注释与手册标题 h1，
// 跳过 h2/h3（它们是 wordgard/doc 这类 API 标识符，不应翻译）。
const config = {
  'docs/ref/index.html': [
    { container: 'header', selector: '.navlinks a' },
    { container: 'article', selector: 'p, li, pre span.tok-comment, h1' },
  ],
};

// Note: 覆盖 head 中的 og 分享信息为中文
const propertyMap = {
  'og:title': 'Wordgard 中文',
  'og:url': SITE,
  'og:image': `${SITE}/style/logo.svg`,
  'og:description': '基于浏览器的富文本编辑器',
};

// Note: 悬浮显示原文等样式。wordgard 首页不走模板，故统一由脚本注入每个页面的 head，
// 而非像 prosemirror 那样在构建前拼接到模板里。
const EXTRA_HEAD = fs.readFileSync(
  path.resolve(__dirname, 'append-head.html'),
  'utf8'
);

const semaphore = new Semaphore(MAX_CONCURRENT);

const files = glob.sync(path.resolve(BUILD_DIR, '**/*.html'));

Promise.all(
  files.map((file) => {
    return new Promise((rootResolve) => {
      const rawString = fs.readFileSync(file, 'utf8');
      if (!rawString) {
        console.error(`${file} 内容为空，跳过`);
        rootResolve();
        return;
      }
      // Note: 相对构建目录的路径，如 docs/guide/index.html
      const rel = path.relative(BUILD_DIR, file);
      // Note: 站内路径，如 /docs/guide/
      const p = '/' + rel.replace(/index\.html$/, '');
      const dom = new JSDOM(rawString);
      const document = dom.window.document;

      // Note: 【先采集待翻译的原始节点，再做注入】，避免把注入的中文内容
      // （导航里的“译者”链接、译者前言里的 li 等）也当成原文送去翻译。
      const list = (config[rel] || defaultConfig())
        .map((c) => {
          const container = document.querySelector(c.container);
          if (!container) {
            console.log(`${file} 未找到 ${c.container} 容器`);
            return [];
          }
          return [...container.querySelectorAll(c.selector)];
        })
        .flat()
        .filter(Boolean);
      if (!list.length) {
        console.log(`${file} 无可翻译内容，跳过`);
        rootResolve();
        return;
      }

      // Note: 修改 html lang 与 head 的 meta 信息
      document.querySelector('html')?.setAttribute('lang', 'zh-CN');
      const head = document.querySelector('head');
      if (head) {
        // Note: 注入悬浮显示原文/译者注等样式
        head.insertAdjacentHTML('beforeend', EXTRA_HEAD);
        head.querySelectorAll('meta').forEach((meta) => {
          const property = meta.getAttribute('property');
          if (property && propertyMap[property]) {
            meta.setAttribute('content', propertyMap[property]);
          }
        });
        // Note: 谷歌统计（填入 GA_MEASUREMENT_ID 后才注入）
        if (GA_MEASUREMENT_ID) {
          const script = document.createElement('script');
          script.async = true;
          script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
          head.appendChild(script);
          const script2 = document.createElement('script');
          script2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}')`;
          head.appendChild(script2);
        }
        // Note: 谷歌广告（填入 ADSENSE_CLIENT 后才注入）
        if (ADSENSE_CLIENT) {
          const script3 = document.createElement('script');
          script3.async = true;
          script3.crossorigin = 'anonymous';
          script3.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
          head.appendChild(script3);
        }
      }

      // Note: 导航栏增加译者博客地址
      const nav = document.querySelector('header .navlinks');
      if (nav) {
        const a = document.createElement('a');
        a.href = 'https://www.xheldon.com';
        a.target = '_blank';
        a.textContent = '译者';
        nav.appendChild(a);
      }

      // Note: 整站顶部通知条（不放原文外链，hover 中文即可显示原文）
      const banner = document.createElement('div');
      banner.id = 'banner-info';
      banner.innerHTML = `本文档为 Qwen3.5 + 人工翻译，hover 可以显示原文。翻译有问题？<a style="cursor: pointer;" href="${REPO_BLOB}${p}index.json" target="_blank">我来翻译！</a>`;
      const header = document.querySelector('header');
      if (header) {
        header.parentNode.insertBefore(banner, header);
      }

      // Note: 指南和接口手册增加译者前言
      if (rel === 'docs/guide/index.html' || rel === 'docs/ref/index.html') {
        const add = document.createElement('div');
        add.id = 'add-info';
        add.innerHTML = `<blockquote>
  本手册/文档采用 Qwen3.5 + 人工方式翻译。每周检查一次原仓库或手动更新，<a href="https://github.com/Xheldon/wordgard-cn-website" target="_blank">欢迎 Star 和 PR</a>。
  </blockquote>
  <b>译者前言：</b>
  <ol>
  <li><b>鼠标悬浮在中文上会出现英文原文，方便读者在觉得翻译质量不行的时候直接查看原文（欢迎 PR 更好的翻译）。</b></li>
  <li><b>因为有些接口需要上下文，因此译者增加了注释以对此进行额外的说明，以灰色背景块显示出来，代表了译者对某个接口的理解。</b></li>
  <li><b>如果你觉得我的工作有帮助，可以 <a href="https://www.xheldon.com/donate/" target="_blank">赏杯咖啡钱</a> 。</b></li>
  <li><b>欢迎关注我的技术/生活公众号「开二度魔法」，id：CoderXheldon </b></li>
  </ol>
  <hr>`;
        const article = document.querySelector('article');
        if (article) {
          article.insertBefore(add, article.firstChild);
        }
      }

      // Note: 页脚补一句，呼应上游的 “Contains 0% AI”
      const footerContent = document.querySelector('footer .footer-content');
      if (footerContent) {
        footerContent.insertAdjacentHTML('beforeend', '<br>翻译包含 100% AI');
      }

      // Note: 字典文件路径，如 dict/docs/guide/index.json
      const dictPath = path.resolve(DICT_DIR, rel.replace(/\.html$/, '.json'));
      if (!fs.existsSync(dictPath)) {
        fs.mkdirSync(path.dirname(dictPath), { recursive: true });
        fs.writeFileSync(dictPath, '{}');
      }
      let dict = {};
      try {
        dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
      } catch (error) {
        console.error(`${dictPath} 解析失败，跳过`);
        rootResolve();
        return;
      }

      Promise.all(
        Array.from(list).map((item) => {
          return new Promise((resolve) => {
            const text = item.innerHTML.trim();
            const pureText = item.textContent.trim().replace(/\s+/gm, ' ');
            if (!pureText) {
              resolve();
              return;
            }
            if (dict[pureText]) {
              if (dict[pureText]._translate) {
                item.innerHTML = dict[pureText]._translate;
                // Note: hover 显示原文（仅段落与列表项加，和样式表对应）
                if (item.tagName === 'P' || item.tagName === 'LI') {
                  item.setAttribute('data-x-en', pureText);
                }
              }
              if (dict[pureText]._note) {
                const note = document.createElement('div');
                note.setAttribute('type', 'comment');
                note.innerHTML = dict[pureText]._note;
                if (item.parentNode.tagName === 'A') {
                  item.parentNode?.parentNode?.insertBefore(
                    note,
                    item.parentNode?.nextSibling
                  );
                } else {
                  item.parentNode.insertBefore(note, item.nextSibling);
                }
              }
              resolve();
            } else {
              return semaphore.acquire().then(([, release]) => {
                return translate(text, { key: file })
                  .then((translated) => {
                    dict[pureText] = { _translate: translated, _note: '' };
                    console.log('AI 翻译:', `${pureText} -> ${translated}`);
                    item.innerHTML = translated;
                    if (item.tagName === 'P' || item.tagName === 'LI') {
                      item.setAttribute('data-x-en', pureText);
                    }
                  })
                  .catch((e) => {
                    // Note: 翻译失败保留原文，且不写入字典，避免固化错误、便于下次重试
                    console.error(
                      `翻译失败，保留原文: ${pureText} (${e && e.message})`
                    );
                  })
                  .finally(() => {
                    // Note: 随机延迟，缓解接口限流
                    setTimeout(() => {
                      release();
                      resolve();
                    }, Math.random() * 5000);
                  });
              });
            }
          });
        })
      ).finally(() => {
        console.log(`${file} 翻译完成`);
        fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2));
        fs.writeFileSync(file, dom.serialize());
        rootResolve();
      });
    });
  })
).finally(() => {
  console.log('全部文件翻译完成');
});
