# 画像ファイルについて

vm.webdino.org サイトで利用する画像はこちらに**大きなオリジナルサイズ・非圧縮のファイル**をコミットしてください (但し GitHub ファイルサイズ上限である 10MB を超えないこと)。

Web ページで読み込む際には相対リンクで読み込んでしまうと Netlify (の CDN) がホストしている画像を読み込んでしまいますが、Netlify がホストしたものを自由なサイズに拡大縮小やフォーマットの変換、切り抜き、フィルタ、重ね合わせなどをした画像を Cloudinary で生成・キャッシュ・配信するように設定しています。

## Cloudinary へのアップロード・変換手順

以下の手順で Cloudinary 経由の画像配信を利用してください。Cloudinary サーバーへの画像のアップロードは auto-upload URL mapping によって行いますが、[アップロード前にサイズや形式などの変換後の URL にアクセスすると 40x エラーとなるだけでなくそのエラーがキャッシュされてしまいます](https://support.cloudinary.com/hc/en-us/articles/202520452-I-m-getting-a-404-or-other-40x-erros-for-my-transformed-image-while-other-versions-of-that-image-work)。**必ず変換前の URL に最初にアクセスして自動アップロードをさせてから、変換後の URL にアクセス**するようにしてください。

- オリジナル画像ファイル (ここでは path/image.png) をこのディレクトリにコミット、プッシュする
- Netlify にデプロイが完了し https://vm.webdino.org/images/ 配下でアクセス可能になるのを (数分程度) 待つ
- https://res.cloudinary.com/videomark/ 配下の同一ファイル名でアクセス可能になることを確認
  - 例えば https://res.cloudinary.com/videomark/path/image.png
  - Cloudinary から Netlify のファイルにアクセス可能になるまでは 40x エラーとなります。その場合は暫く待ってからもう一度アクセスしてみてください。
  - 変換の指定の無いオリジナルファイルにアクセスすることで Cloudinary に画像がアップロードされ、以後、サイズや形式の変換を行った画像を生成・読み込み可能になります。
- アクセス可能になったら必要なサイズに変換する指定をする
  - 例えば https://res.cloudinary.com/videomark/w_800/path/image.png で幅 800px に変換された画像となるので、表示する場所やレスポンシブ対応で必要なサイズを指定
  - あるいは https://res.cloudinary.com/videomark/w_800/image.jpg のように JPEG に圧縮変換させることも可能なので縮小版だけ JPEG で拡大したらオリジナルサイズの PNG などという扱いも可能
  - オリジナルファイルそのままで受信する URL で一度アクセスしていないと変換処理を指定した URL へのアクセスは出来ないことに注意してください。特に psd ファイルなどをオリジナルとする場合に注意。
  - サイズ指定以外の様々な画像変換処理については [コンソールの Transformations](https://cloudinary.com/console/transformations) でサンプル URL を作りながら試したり [Cloudinary の解説ページ](https://cloudinary.com/documentation/image_transformations) を参照
  - 誤ってオリジナル画像へのアクセス前に変換後 URL にアクセスして 40x エラーが出続けるようになったがすぐに画像を表示する必要がある場合、オリジナル画像へアクセスして URL mapping でのアップロードをしてから、同じ変換結果になる URL (例えば h_800 の前に c_scale を付与して c_scale,h_800 にするなど) に差し替えてください。30x エラーのキャッシュを消去する手段はないようです。
- 必要な変換処理をした画像が出来たらその URL を HTML/CSS に読み込ませる

## 画像のキャッシュについて

一度 auto-upload URL mapping によって Cloudinary にアップロードされた画像は github から画像を削除した後も残ります。 管理画面などで削除や名前を変更しても cache invalidation しない限り最大 30 日間 CDN にキャッシュが残りアクセス可能になります。

単に Web サイト上に表示させるものを更新したい場合は [差し替えることも可能](https://cloudinary.com/documentation/upload_images#update_already_uploaded_images) ですが、単に別 URL でアップロード・アクセスさせる方が簡単です。

既にアップロード・キャッシュされた画像の削除やキャッシュの消去が必要となってしまった場合は Cloudinary の [Image administration 手順](https://cloudinary.com/documentation/upload_images#image_administration) を参照してください。

## Android デバイス画像の著作権

- Google
  - Android デバイスの画像は [Device Art Generator](https://developer.android.com/distribute/marketing-tools/device-art-generator) によって作成された画像を利用しています。
