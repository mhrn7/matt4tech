import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Matt4Tech website visitors and campaign review requests.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 min-h-screen">
        <article className="container mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Legal</p>
          <h1 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-black uppercase mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: August 4, 2026</p>
          <div className="space-y-8 text-muted-foreground leading-8">
            <section><h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2><p>When you submit a review request, Matt4Tech may collect your name, shop name, website, location, email, phone number, advertising history, budget range and other information you voluntarily provide.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">How We Use Information</h2><p>Information is used to evaluate your request, contact you, provide services, improve the website and maintain business records. Matt4Tech does not sell personal information.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Service Providers</h2><p>Website hosting, analytics, email delivery and other technical services may process limited information on our behalf. These providers operate under their own terms and privacy practices.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Data Retention and Security</h2><p>Information is retained only as reasonably necessary for communication, service delivery, legal obligations and legitimate business purposes. Reasonable technical measures are used, but no online system is completely secure.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Your Choices</h2><p>You may request correction or deletion of information by emailing <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Legal or operational requirements may limit some requests.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">International Processing</h2><p>Matt4Tech is operated from Brazil and serves businesses in the United States. Information may therefore be processed across borders.</p></section>
            <section><h2 className="text-xl font-bold text-white mb-3">Contact</h2><p>Questions about this policy can be sent to <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></section>
          </div>
          <Link href="/" className="inline-block mt-12 text-primary font-bold uppercase tracking-widest text-xs">Return Home</Link>
        </article>
      </main>
      <Footer />
    </>
  )
}
