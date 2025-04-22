import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script' // Import the Script component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <Footer />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  )
}
