# videomark.webdino.org

Web VideoMark プロジェクトのウェブサイトです。

## 初期化

[pnpm](https://pnpm.io/) がインストールされている前提で、

```bash
pnpm install
```

## ローカルサーバーの起動

```bash
pnpm run dev
```

ブラウザーで http://localhost:5173/ を開きます。

## ローカルでの CMS の使用

ローカルサーバーを起動した後、新しいターミナルを開き、

```bash
pnpm run cms
```

ブラウザーで http://localhost:5173/admin/index.html を開いてログインします。変更点を保存したらコミットします。
