import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-100 overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex flex-col items-center gap-6 py-6 max-w-5xl mx-auto w-[95%] md:w-[80%]">
        {/* Hero Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%82%AA%E9%AD%94BUTA%E3%82%AB%E3%83%AC%E3%83%BC%EF%BC%88%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%EF%BC%89-P9Vvo3TdIrLeAZRwdM889lcUrhVHRd.jpg"
            alt="悪魔のBUTAカレー - 二郎インスパイア+カレー ニンニクアブラ増し増し！理性を崩壊させる悪魔的背徳感"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
            priority
          />
        </section>

        {/* Meat Appeal Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/02%E8%82%89%E8%A8%B4%E6%B1%82-foSu0SmyrGhFvWHGUbxVHCB83Vrwz4.jpg"
            alt="伝説の極厚神豚使用"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Secret Recipe Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%E7%BE%8E%E5%91%B3%E3%81%97%E3%81%84%E7%90%86%E7%94%B1-XoJw9MMQXcpfkqhfITzK1fsyDLNjJX.jpg"
            alt="中毒の秘密 - にんにく・背脂・スパイスの黄金比"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Easy Cooking Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04%E7%B0%A1%E5%8D%98%E8%AA%BF%E7%90%86-qwmBqqDepJdNirGZqTmFkCX0h20h36.jpg"
            alt="熱湯8分で悪魔降臨"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* Storage Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/05%E4%BD%BF%E3%81%84%E5%8B%9D%E6%89%8B-k9WxnEuyP66uHEzoy53OpOym0uje95.jpg"
            alt="常温保存で18ヶ月"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
          />
        </section>

        {/* CTA Section */}
        <section className="w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06%E9%99%90%E5%AE%9A%E8%B2%A9%E5%A3%B2-ZaN8o2MhDQfC2tHa36BpR7NcjfLev8.jpg"
            alt="限定販売"
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}
