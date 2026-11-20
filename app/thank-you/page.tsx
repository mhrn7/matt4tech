import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[75vh] pt-32 pb-20 px-4 flex items-center">
        <section className="container mx-auto max-w-2xl card-border p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Request Received</p>
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Your Information Has Been Sent.</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">Matt will review the information and contact you using the details provided.</p>
          <Link href="/" className="btn-primary inline-flex px-7 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm">Return to Home</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
