import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website and service terms for Matt4Tech.",
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 min-h-screen">
        <article className="container mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Legal</p>
          <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-black uppercase mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: August 4, 2026</p>
          <div className="space-y-8 text-muted-foreground leading-8">
            <section><h2 className="text-xl font-bold text-white mb-3">Website Information</h2><p>The information on this website is provided for general business and educational purposes. It is not a guarantee of advertising approval, campaign performance, revenue or profitability.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Independent Service</h2><p>Matt4Tech is an independent advertising management service. It is not affiliated with or endorsed by Google, Apple, Samsung, Microsoft or any device manufacturer.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Advertising Decisions</h2><p>Advertising platforms make their own approval, restriction and suspension decisions. Matt4Tech may structure and manage campaigns carefully but cannot guarantee approval, uninterrupted delivery or a specific result.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Client Responsibilities</h2><p>Clients are responsible for providing accurate business information, maintaining legitimate operations, answering customer inquiries, paying advertising platforms directly and complying with applicable laws and platform requirements.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Service Agreements</h2><p>Specific scope, fees, payment terms, ownership, cancellation and responsibilities are defined in a separate written agreement before paid services begin.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Limitation of Liability</h2><p>To the extent permitted by law, Matt4Tech is not liable for indirect losses, platform decisions, missed calls, lost profits or business outcomes outside the agreed service scope.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Contact</h2><p>Questions can be sent to <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></section>
          </div>
          <Link href="/" className="inline-block mt-12 text-primary font-bold uppercase tracking-widest text-xs">Return Home</Link>
        </article>
      </main>
      <Footer />
    </>
  )
}
