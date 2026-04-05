import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp"
});

export const metadata: Metadata = {
  title: '悪魔のBUTAカレー | 二郎インスパイア×カレーの究極コラボ【会津ブランド館】',
  description: 'ニンニク・アブラ増々！理性を破壊する悪魔的背徳感。認定グルメ「至高」評価の伝説の極厚神豚を使用した、スプーンで切れる柔らかさの超厚切りザブトンチャーシューが主役の悪魔のカレー。',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
