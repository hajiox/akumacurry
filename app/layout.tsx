import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp"
});

const siteUrl = 'https://akumacurry.aizu-syokubura.com'
const siteName = '悪魔のBUTAカレー | 会津ブランド館'
const siteTitle = '悪魔のBUTAカレー | 二郎インスパイア×極厚神豚カレー【送料無料】会津ブランド館'
const siteDescription = '【2個セット1,690円送料無料】ニンニク・アブラ増々！理性を破壊する悪魔的背徳感。認定グルメ「至高」評価の伝説の極厚神豚使用。スプーンで切れる柔らかさの超厚切りザブトンチャーシューが主役の悪魔のカレー。常温保存18ヶ月で備蓄食にも最適。'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  generator: 'v0.app',
  keywords: ['悪魔のBUTAカレー', '二郎インスパイア', 'カレー', '極厚チャーシュー', '神豚', 'レトルトカレー', '会津ブランド館', '送料無料', '備蓄食'],
  authors: [{ name: '会津ブランド館' }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: '/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: '悪魔のBUTAカレー - 二郎インスパイア×極厚神豚カレー',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/ogp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QF0C5C17LW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QF0C5C17LW');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3741108852688541');
            fbq('track', 'PageView');
            fbq('track', 'ViewContent', {
              content_name: 'butacurry',
              content_category: 'product_lp'
            });
          `}
        </Script>
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
