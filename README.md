# Wordgard 中文文档

Wordgard（ProseMirror 作者 Marijn 的新一代编辑器框架）中文文档 + 注释，
使用 Qwen3.5（硅基流动）+ 人工监督的方式翻译，欢迎 PR。

## 说明

1. 基于 Qwen3.5（硅基流动）+ 人工修正翻译，注释部分为人工添加。
2. 上游为 `code.haverbeke.berlin/wordgard/website`（网站）与
   `code.haverbeke.berlin/wordgard/wordgard`（库，参考手册由其源码生成）。

## PR 说明

1. 只需要维护 `dict` 目录下各个 `index.json` 即可，如果感觉翻译得不对，欢迎提交 PR。
2. 修改 `index.json` 中的 `_translate` 即可。
3. `_translate` 是翻译内容，`_note` 是你对内容的理解注释，`_note` 支持 HTML，
   会直接渲染到原文下方。

## CI 步骤

1. 克隆上游 wordgard 库与 website（website 检出在 `wordgard/website`），
   用两个仓库 HEAD 的组合与 `last-commit.txt` 对比，有更新才继续，否则中断。
2. `cd wordgard && npm install`（触发 prepare 构建 `dist/`），再
   `cd website && npm install && node src/build.ts`，产出 `output/` 下各页面。
3. 根目录 `npm ci` 后运行 `index.js`，按 `dict` 字典替换中文，未命中则 AI 翻译并更新字典。
4. 将 `output` 复制到 `public`，推送到 `main`，触发 Cloudflare Pages 构建更新。

## 本地构建说明

1. 需要 Node >= 22。
2. 设置环境变量 `OPENAI_API_KEY` 与 `OPENAI_URL`（硅基流动的接口地址与 token）。
3. 执行 `./local.sh`（需要执行权限）。
4. 检查 `wordgard/website/output` 下各页面是否正常。

## 需要配置的项（首次接入时）

1. GitHub Secrets：`OPENAI_API_KEY`、`OPENAI_URL`、`GIT_TOKEN`。
2. `index.js` 顶部的 `GA_MEASUREMENT_ID` 与 `ADSENSE_CLIENT`（谷歌统计/广告 ID，留空则不注入）。
3. Cloudflare Pages 指向本仓库，构建输出目录设为 `public`，并绑定域名。

## 备注

1. 本项目 CI 有两种触发方式：手动触发和每周检查一次。
2. CI 可能会修改 `dict` 目录中的文件，以及新产生页面覆盖 `public` 中的同名文件。
3. CI 会将修改再次提交到本仓库，以触发 Cloudflare Pages 的更新，因此本仓库不能通过 Merge 触发。
4. 翻译模型为 `Qwen/Qwen3.5-27B`，请求时关闭了 Qwen3 的思考模式（`enable_thinking: false`）以保证速度。
