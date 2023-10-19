# SORT out THOUGHTs (demo)
## このアプリケーションついて
悩みや考えを整理するメモアプリケーションです。本アプリケーションでできることはブレインストーミングに非常に似ていて、大まかな悩みを細分化し、原因解明や分析、整理を行うことを目的としています。アプリケーションのアイデアとして[ゼロ秒思考 頭がよくなる世界一シンプルなトレーニング](https://amzn.asia/d/cHb8pDo)という本を参考にしました。本アプリケーションにはこの著書で紹介されているメモ書き手法に似たことが行えるようなフォーマットになっており、考えや悩みを整理することができます。
命名についてはthoughtとsortで日本語発音が似ていると思ったこととsort outで整理するという意味であるところから付けました。トップページのイラストもその考えをもとに作成しました。~~ダジャレです。~~

## 動機
アルバイトとインターンを通じてwebフロントエンド技術やそれに関連した技術を学び、興味を持ちました。私はその経験を活かし更なる知見を得るためにウェブページを作成しデプロイまで行いたいと考えていました。また、実際に作って公開するのであれば自分の今後の活動に役立つような機能があったら良いと考え、日頃の悩みを解決できるアプリケーションを作成を目標としました。

## 今後（課題など）について
今後の課題・改善点として以下のものが挙げられます。

 - 入力データの永続化
 - ユーザー認証の追加
 - 派生関係の視覚性
 - ページ内でブラウザバックをするときのダイアログ表示
 - ページの見え方が画面サイズに依存してしまう点
 - ほとんどがクライアントコンポーネント
   - サーバーサイドでも動作するUIに変更 
 - テストの追加


これらの機能追加および改善を目標としています。

## 使用したライブラリ、フレームワーク
### [Next.js](https://nextjs.org/)
アルバイトやインターンをきっかけにNext.jsを勉強したのでそれを使用しwebページを作成しました。
最新の技術に触れてみたかったのもあり、App Routerで作成しました。（が、chakra uiを使用したこととほとんどのページでReact hooksを使用しているため、サーバーコンポーネントがなく強みを活かしきれてないです。）
### [Chakra UI](https://chakra-ui.com/)
[chakra ui](https://chakra-ui.com/)を使用しUIを設定した。選んだ理由は一度使用したことがあることと描画するほとんどのページでReact hooksを使用するため。

### [zod](https://zod.dev/)
入力のバリデーションに使用しました。

### [vercel](https://vercel.com/)
デプロイに使用しました。
## 参考
### アイデア
 - [ゼロ秒思考 頭がよくなる世界一シンプルなトレーニング](https://amzn.asia/d/cHb8pDo)
### このページで使われている画像
 - [SILHOUETTE ILLUST : 頭と脳の白黒シルエット アイコンイラスト](https://www.silhouette-illust.com/illust/20430)
 - [SILHOUETTE ILLUST : インスピレーション・閃きのシルエット02 アイコンイラスト](https://www.silhouette-illust.com/illust/49363)
 - [SILHOUETTE ILLUST : 悩む・もやもやしている人のシルエット アイコンイラスト](https://www.silhouette-illust.com/illust/42374)
   - これらを編集して作成しました。
### トップページ
 - [Zenn : Next.js 13 app directory で記事投稿サイトを作ってみよう](https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial)
   - header,main,footer, chakra-uiの設定について参考にしました。
 - [りーほーブログ : ブラウザバック禁止やリロード、タブを閉じる時に警告をする](https://omkz.net/prohibit-browser-back/)
   - ページ外の遷移時やリロード時にダイアログを表示する機能の実装で参考にしました。
 - [Zenn App RouterのOGP設定方法まとめ [Next.js]](https://zenn.dev/temasaguru/articles/641a10cd5af02a)
   - meta dataとogpを設定するときに参考にしました。
### About ページ
 - [Zenn : 女医が教える本当に気持ちのいい Markdown 変換処理【Next.js編】](https://zenn.dev/yoshiishunichi/articles/667120b3d0c9d2)
   - ローカルのmdファイルとhtmlに変換する際に参考にしました。
 - [MUSCLE CODING : App Router対応！Next.js 13.4 で作るマークダウンブログ](https://musclecoding.com/nextjs-app-router-markdown-blog/)
   - 上記と同様にローカルのmdファイルとhtmlに変換する際に参考にしました。
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
