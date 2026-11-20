import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppCta } from "@/components/landing/whatsapp-cta"

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
          <h1 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Got It. Your Audit Is on the Way.</h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;ll review your shop and send your audit to the email you provided. Want to speed things up? Send me a
            quick message on WhatsApp with your shop name.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppCta location="thank_you" label="Message Matt on WhatsApp" />
            <Link href="/" className="inline-flex items-center justify-center px-7 py-4 border border-border text-white hover:border-primary hover:text-primary transition font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm">Back to Home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
