import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const faqData = [
  {
    q: "このカレーは激辛ですか？",
    a: "激辛ではありません。にんにくや背脂のパンチはしっかりありますが、辛さは「程よい中辛」です。辛すぎて味が分からなくなるタイプではなく、旨味とコクをしっかり楽しめる仕上がりです。"
  },
  {
    q: "どんな味わいですか？",
    a: "豚の旨味をベースに、にんにくと背脂のコクが重なった濃厚な味わいです。見た目のインパクトは強いですが、ただ重いだけではなく、スプーンが進むやみつき感のあるバランスに仕上げています。"
  },
  {
    q: "チャーシューはどんな特徴がありますか？",
    a: "主役は極厚ざぶとんチャーシューです。\"リュウジのバズレシピ\"さんでも絶賛された神豚を使用しており、しっかり厚みがありながら、湯煎することでやわらかくトロトロの食感を楽しめます。食べごたえも満足感もしっかりある一品です。"
  },
  {
    q: "調理は簡単ですか？",
    a: "はい、とても簡単です。袋のまま熱湯で約8分温めるだけでお召し上がりいただけます。忙しい日でも手軽に、濃厚で満足感のある一皿を楽しめます。"
  },
  {
    q: "保存はどのくらいできますか？",
    a: "常温で保存可能で、賞味期限は18ヶ月です。普段の食事用はもちろん、ストック用や備蓄用としても便利です。食べたい時にすぐ使えるのも魅力です。"
  },
  {
    q: "どこで購入できますか？",
    a: "Yahoo!ショッピング限定で販売しています。ここでしか手に入らない限定商品です。さらに、14時までのご注文で即日発送対応なので、早めに受け取りたい方にもおすすめです。"
  }
]

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800 mb-8">
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-neutral-200 pb-4">
                <h3 className="font-bold text-neutral-800 mb-2 flex items-start gap-2">
                  <span className="text-red-600 font-bold shrink-0">Q{index + 1}.</span>
                  {item.q}
                </h3>
                <p className="text-neutral-600 leading-relaxed pl-8">
                  <span className="text-blue-600 font-bold">A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shipping Banners */}
      <div className="bg-neutral-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 max-w-4xl mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-PhnhVvGXkQzW1RzCQdynjPz1ltcS9j.jpg"
              alt="送料無料 沖縄・離島地域除く"
              width={400}
              height={200}
              className="w-1/2 max-w-md h-auto"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-hC94YzlWr1WPkPIH4C8hMPTSEBXYI8.jpg"
              alt="14時までのご注文で即日発送"
              width={400}
              height={200}
              className="w-1/2 max-w-md h-auto"
            />
          </div>
        </div>
      </div>

      {/* 価格 */}
      <div className="bg-neutral-900 py-6">
        <p className="text-center text-white text-2xl md:text-3xl font-bold tracking-wide">
          {"2個セット "}<span className="text-4xl md:text-5xl mx-2">1,690</span>{"円（税込・送料込）"}
        </p>
      </div>

      {/* Yahoo Shopping Banner */}
      <div className="bg-pink-100 py-6">
        <div className="container mx-auto px-4 flex justify-center">
          <a 
            href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635230.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div className="bg-white rounded-xl shadow-md p-4 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-2bEjqVCDZWoWGVWQ79ohFPMm0piAef.png"
                alt="Yahoo!ショッピングで購入"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <p className="font-bold text-neutral-800 mb-1">Yahoo!ショッピング</p>
            <p className="text-sm text-neutral-600 mb-2">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            <p className="text-sm text-red-500 font-bold">初めて当店をご利用のお客様に300円クーポン進呈中！</p>
          </a>
        </div>
      </div>

      {/* 店舗案内セクション */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-xl font-bold text-neutral-800 mb-10">
          この商品は「会津ブランド館」が製造・販売・発送を行っています。
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          {/* 店舗写真 */}
          <div>
            <Image
              src="/images/brandkan.jpg"
              alt="会津ブランド館 店舗外観"
              width={500}
              height={375}
              className="w-full h-auto rounded"
            />
          </div>

          {/* 店舗情報 */}
          <div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">店舗案内</h3>
            <div className="space-y-2 text-neutral-700">
              <p className="font-bold">会津ブランド館</p>
              <p>〒965-0044</p>
              <p>福島県会津若松市七日町6-15</p>
              <p>TEL: 0242-25-4141</p>
              <p className="text-orange-500">営業時間: 11時〜16時</p>
              <p className="text-orange-500">定休日: 12月31日・1月1日</p>
              <p className="text-orange-400 text-sm">（発送もお休みさせて頂きます）</p>
            </div>
          </div>
        </div>

        {/* Googleマップ */}
        <div className="mt-8 max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.5!2d139.9267!3d37.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a9!2z5Lya5rSl44OW44Op44Oz44OJ6aSo!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          />
        </div>
      </div>

      {/* SNSアイコン */}
      <div className="bg-white py-6">
        <div className="flex justify-center gap-8">
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Facebook className="w-8 h-8" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <XIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Youtube className="w-8 h-8" />
          </Link>
        </div>
      </div>

      {/* コピーライト */}
      <div className="bg-neutral-700 py-4">
        <p className="text-center text-white text-sm">
          © 2026 AIZU BRAND HALL. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
