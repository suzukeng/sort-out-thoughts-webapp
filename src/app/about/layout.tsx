import AboutUiProvider from '../ChakraUiSettings/AboutUiProvider'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'SORT out THOUGHTs について',
    description: 'このアプリケーションについて',
    authors: [{ name: 'suzuken' }],
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AboutUiProvider>
            {children}
        </AboutUiProvider>
    )
}