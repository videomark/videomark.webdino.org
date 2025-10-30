# videomark.webdino.org

Web VideoMark プロジェクトのウェブサイトです。

## 初期化

[pnpm](https://pnpm.io/) がインストールされている前提で、

```bash
pnpm install
```

## ローカルサーバーの起動

```bash
pnpm dev
```

ブラウザーで http://localhost:5173/ を開きます。

## ローカルでの CMS の使用

コンテンツは `/src/lib/data/pages` 以下の YAML ファイルで管理されており、[Sveltia CMS](https://github.com/sveltia/sveltia-cms) を使用して編集できます。ローカルで CMS を使用する手順は以下の通りです。

1. ローカルサーバーを起動
1. Chromium ベースのブラウザーで http://localhost:5173/admin/index.html を開く
1. Work with Local Repository をクリックしてプロジェクトのルートディレクトリを選択
1. CMS 上でコンテンツを編集 — 保存すると自動的にローカルの YAML ファイルが更新されます
1. http://localhost:5173 で当該ページを開いて変更点を確認
1. `git diff` か GitHub Desktop などの GUI で差分を確認してコミット・プッシュ

CMS の設定は `/static/admin/config.yml` にあります。VS Code で YAML ファイルを編集する場合は [YAML 拡張機能](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) をインストールすると便利です。

些細な変更であれば CMS を使わずに直接 YAML ファイルを編集しても構いません。
