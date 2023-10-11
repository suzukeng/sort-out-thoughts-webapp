import AboutUiProvider from '../layout/AboutUiProvider'
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