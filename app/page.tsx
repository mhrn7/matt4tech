"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemsSection } from "@/components/landing/problems-section"
import { ProtocolSection } from "@/components/landing/protocol-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { AboutSection } from "@/components/landing/about-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection } from "@/components/landing/faq-section"
import { RequestFormSection } from "@/components/landing/request-form-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { siteConfig } from "@/lib/site"

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, offset: 50, duration: 650 })

    try {
      if (!window.sessionStorage.getItem("m4t_attr")) {
        const p = new URLSearchParams(window.location.search)
        window.sessionStorage.setItem(
          "m4t_attr",
          JSON.stringify({
            utm_source: p.get("utm_source") || "",
            utm_medium: p.get("utm_medium") || "",
            utm_campaign: p.get("utm_campaign") || "",
            gclid: p.get("gclid") || "",
            referrer: document.referrer || "",
            landing_page: window.location.pathname,
          }),
        )
      }
    } catch {}

    const scrollToRequestedSection = () => {
      if (window.location.hash !== "#request-review") return

      const target = document.getElementById("request-review")
      if (!target) return

      const header = document.querySelector("header")
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12

      window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" })
    }

    const timer = window.setTimeout(scrollToRequestedSection, 180)
    window.addEventListener("hashchange", scrollToRequestedSection)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("hashchange", scrollToRequestedSection)
    }
  }, [])

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    areaServed: { "@type": "Country", name: "United States" },
    priceRange: "From $399/month",
    sameAs: [siteConfig.instagram, siteConfig.facebook],
    founder: { "@type": "Person", name: siteConfig.author },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ProtocolSection />
        <TestimonialsSection />
        <AboutSection />
        <PricingSection />
        <FaqSection />
        <RequestFormSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
