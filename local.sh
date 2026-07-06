#!/bin/bash

# 此脚本用于方便本地构建，不走 Github Action，其行为与 Github Action 一致。
# 需要 Node >= 22。翻译需要设置环境变量 OPENAI_API_KEY 和 OPENAI_URL。

rm -rf wordgard

# wordgard 库（提供参考手册源码与 dist 产物）
git clone --depth 1 https://code.haverbeke.berlin/wordgard/wordgard.git wordgard
# website 需检出在库内部 wordgard/website
git clone --depth 1 https://code.haverbeke.berlin/wordgard/website.git wordgard/website

# 先构建库（prepare 产出 dist/），再构建网站到 output/
(cd wordgard && npm install)
(cd wordgard/website && npm install && node src/build.ts)

node index.js
