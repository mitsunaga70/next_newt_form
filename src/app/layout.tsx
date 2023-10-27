import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './assets/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  openGraph: {
    title: 'サイトのタイトル',
    description: 'サイトの説明',
    url: 'https://example.com',
    siteName: 'サイトのタイトル',
    images: [
      {
        url: 'https://example.com/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://example.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: '代替テキスト',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">

      <body className={inter.className}>{children}</body>
    </html>

  )
}
