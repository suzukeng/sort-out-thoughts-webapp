
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import UiProvider from './layout/UiProvider'
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
