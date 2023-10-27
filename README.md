# Next.js で JSON を取得して表示するサンプル

## 実行方法

まず依存関係をインストールする

```shell
npm i
```

開発用サーバーを立ち上げる

```shell
npm run dev
```

## ページ一覧

- [http://localhost:3000](http://localhost:3000) - トップページ、投稿一覧
- [http://localhost:3000/posts/10](http://localhost:3000/posts/10) - `10`は投稿の ID。ID を指定してそのページに行ける

## データはどこから？

無料で公開されているテスト用の JSON を用いている。  
長さ 500 のコメント一覧の JSON を取得している

- [JSONPlaceholder 公式ページ](https://jsonplaceholder.typicode.com/)
- [comment api の JSON](https://jsonplaceholder.typicode.com/comments)
