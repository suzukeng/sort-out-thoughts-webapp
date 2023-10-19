
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import UiProvider from './ChakraUiSettings/UiProvider'
import type { Metadata } from 'next'
const title = 'SORT out THOUGHTs! demo'
const description = '考えや悩みを整理します。demo版'
export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: 'suzuken' }],
  openGraph: {
    title,
    description,
    url: 'https://sort-out-thoughts-webapp.vercel.app/',
    siteName: title,
    images: {
      url: '/opengraph-image.png',
      width: 1000,
      height: 700,
    },
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    site: '@suzuken_s',
    creator: '@suzuken_s',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <UiProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </UiProvider>
      </body>
    </html>
  )
}
