# 读研杂货铺

一个永久免费的个人博客，用来记录日常。没有服务器、没有数据库、没有年费，写完保存就会自动发布。

- 网址：<https://gangqinpian.github.io>
- 后台：<https://app.pagescms.org>
- 代码仓库：`gangqinpian/gangqinpian.github.io`（公开）

---

## 文件夹结构

```
博客/
├─ app/              网站本体（页面、文章、图片、依赖）
│  ├─ src/           页面和文章
│  ├─ public/images/ 图片
│  ├─ package.json   依赖配置
│  └─ astro.config.mjs
├─ .github/          自动部署配置（别动）
├─ .pages.yml        网页后台配置
└─ README.md         本说明
```

平时你只需要在网页后台写文章，这些文件都不用碰。只有本地预览时才需要进入 `app/` 文件夹执行命令。

---

## 怎么发一篇文章（不用碰代码）

1. 打开 <https://app.pagescms.org>，用 GitHub 账号登录。
2. 选择仓库 `gangqinpian/gangqinpian.github.io`。
3. 左侧点「文章」，再点右上角的新建按钮。
4. 填写：
   - **标题**：文章名字。
   - **日期**：默认今天，可以改。
   - **摘要**：一句话，会显示在文章列表里（可不填）。
   - **标签**：输入后按回车，可以加多个，例如「生活」「读书」。
   - **封面图**：可选，不选也能发。
   - **存为草稿**：勾上就只在仓库里保存，线上不显示；想发布时取消勾选再保存。
   - **正文**：像写文档一样写，可以直接把图片拖进来。
5. 点保存。
6. 等 1～3 分钟，刷新网站就能看到新文章。GitHub 需要一点时间重新生成页面。

> 手机浏览器也能操作，后台页面会自动适配。

## 发图片的小建议

- 图片会存进仓库，仓库免费空间有限，**发之前建议压缩一下**。
- 宽度 1600 像素左右就够看，一张控制在 100～400 KB，格式用 JPG 或 WebP。
- iPhone 拍的照片（HEIC 格式）请先导出成 JPG 再上传，浏览器对 HEIC 支持不好。
- 后台里图片会自动存到 `app/public/images/`，文章里引用成 `/images/文件名`，不用手动改路径。

## 修改「关于」页面

后台左侧点「关于」，改完保存即可。那里写自我介绍、联系方式等。

## 修改网站名字

网站名字写在几个页面文件里（`app/src/components/Header.astro`、`app/src/pages/index.astro`、`app/src/layouts/BaseLayout.astro` 等）。直接告诉 Claude“把网站名改成 XXX”，让它统一改，避免漏掉浏览器标签标题。

## 在电脑上预览（可选，平时不需要）

需要先安装 Node.js。然后打开终端，**先进入 `app` 文件夹**：

```powershell
cd D:\杂\博客\app
npm install
npm run dev
```

浏览器打开 <http://localhost:4321/>，按 `Ctrl+C` 停止。改文件时页面会自动刷新。

正式构建（同样在 `app` 文件夹里）：

```powershell
npm run build
npm run preview
```

## 它是怎么工作的（简单说）

1. 文章是 `app/src/content/posts/` 下的 Markdown 文件，图片在 `app/public/images/`。
2. 你在 Pages CMS 后台保存 → 自动提交到 GitHub 仓库。
3. GitHub Actions 自动运行 Astro，把网站生成为静态页面并发布到 GitHub Pages。
4. 全程免费，公开仓库的 Actions 额度不限。

## 注意事项

- **仓库是公开的**：所有文字和上传的图片都能被任何人看到。不要上传身份证、住址、他人隐私或敏感照片。
- **国内访问 `github.io` 有时慢**：多刷新几次或换网络。如果长期不可用，可以把同一仓库接到 Cloudflare Pages（免费），需要时再处理。
- **免费额度的边界**：仓库建议不超过 1 GB，单张图片不超过 100 MB。正常记录生活远远用不完。
- **别删除 `.github/workflows/deploy.yml`**：删了网站就不会自动更新。
- **别删除 `app/package-lock.json`**：部署时靠它安装依赖。

## 遇到问题

| 现象 | 处理 |
| --- | --- |
| 保存后网站没变化 | 等 2～5 分钟，按 `Ctrl+F5` 强制刷新。去仓库 Actions 页看是否变绿。 |
| 后台看不到仓库 | GitHub 右上角头像 → Settings → Applications → Pages CMS → Configure → 勾选该仓库。 |
| Actions 显示红色叉 | 点开失败的那一步看日志，把报错发给 Claude。 |
| 网站样式错乱 | 先强制刷新；仍不对就把页面截图发给 Claude。 |
