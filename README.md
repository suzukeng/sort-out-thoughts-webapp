# SORT out THOUGHTs (demo)
## このアプリケーションついて
悩みや考えを整理するメモアプリケーションです。本アプリケーションでできることはブレインストーミングに非常に似ていて、大まかな悩みを細分化し、原因解明や分析、整理を行うことを目的としています。なるべくシンプルな実装で機能を実現することを心がけました。

<br>
命名についてはthoughtとsortで日本語発音が似ていると思ったこととsort outで整理するという意味であるところから付けました。トップページのイラストもその考えをもとに作成しました。

## 動機
アルバイトとインターンを通じてウェブフロントエンド技術について学び、それを活かし更なる知見を得るためにウェブページを作成したいと思い本アプリケーションを作成しました。
アプリケーションのアイデアとして[ゼロ秒思考 頭がよくなる世界一シンプルなトレーニング](https://amzn.asia/d/cHb8pDo)という本を参考にしました。この著書で紹介されているメモ書き手法をアプリケーション内でフォーマットを作成し実行することを目指しました。

## 使用したライブラリ、フレームワーク
### next js
アルバイトやインターンをきっかけにnext jsを勉強したのでそれを使用しwebページを作成しました。
最新の技術に触れてみたかったのもあり、App Routerで作成しました。（が、chakra uiを使用したこととほとんどのページでReact hooksを使用しているため、サーバーコンポーネントがなく強みを活かしきれてないです。）
### Chakra UI
[chakra ui](https://chakra-ui.com/)を使用しUIを設定した。選んだ理由は一度使用したことがあることと描画するほとんどのページでReact hooksを使用するため。
## 参考にしたページ

## 今後（課題など）について
本アプリケーションには以下の問題点があります。

 - データベースによる永続化が行われていない
   - ユーザー認証の追加やサーバーを借りる必要があるほかページ構成が複雑化するため、今回はそこまでの実装を行わなかった
 - サーバーサイドコンポーネントとクライアントサイドコンポーネントの使い分け
   - サーバーサイドでも使えるcss in jsの使用など
 - 派生関係の視覚性など

これらを改善することが今後の課題です。

<br>

# about web
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).





## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
