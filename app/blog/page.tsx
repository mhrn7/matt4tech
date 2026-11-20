import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BlogIndex } from "@/components/blog/blog-index"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

export const metadata: Metadata = {
  title: "Google Ads Insights for Tech Repair Shop Owners",
  description:
    "Practical articles about Google Ads, lead generation, landing pages, tracking and advertising challenges for independent tech repair shops.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Google Ads Insights for Tech Repair Shop Owners",
    description:
      "Practical articles about Google Ads, lead generation, landing pages and tracking for independent tech repair shops.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 min-h-screen">
        <section className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary text-xs mb-3">Matt4Tech Blog</p>
            <h1 className="font-[var(--font-outfit)] text-4xl md:text-6xl font-black uppercase tracking-tight mb-5 text-balance">
              Google Ads Insights for Tech Repair Shop Owners
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Practical articles about Google Ads, lead generation, landing pages, tracking and the advertising challenges faced by independent repair businesses.
            </p>
          </div>

          <BlogIndex posts={posts} />

          <div className="card-border p-8 md:p-10 mt-14 text-center">
            <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black uppercase mb-3">
              Need a Free Audit of Your Shop?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Request a free audit of your website, local market and previous Google Ads experience.
            </p>
            <AuditCtaLink className="btn-primary inline-flex px-7 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm">
              Request a Free Audit
            </AuditCtaLink>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
