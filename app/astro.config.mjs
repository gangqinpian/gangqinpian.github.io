import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gangqinpian.github.io',
  markdown: {
    // 安静的代码块，不额外加载高亮样式
    syntaxHighlight: false,
  },
});
