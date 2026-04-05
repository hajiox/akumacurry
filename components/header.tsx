import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white py-4 border-b border-neutral-200">
      <div className="container mx-auto px-4 flex justify-center">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="AIZU BRAND HALL"
            width={80}
            height={80}
          />
        </Link>
      </div>
    </header>
  )
}
