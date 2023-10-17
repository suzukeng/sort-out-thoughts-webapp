
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import UiProvider from './ChakraUiSettings/UiProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SORT out THOUGHTs demo',
  description: '考えや悩みを整理します。demo版',
  authors: [{ name: 'suzuken' }],
  openGraph: {
    title: 'SORT out THOUGHTs img',
    description: 'description',
    //url: url,
    siteName: 'SORT out THOUGHTs!',
    images: {
      url: '/opengraph-image.png',
      width: 1200,
      height: 600,
    },
  }
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
