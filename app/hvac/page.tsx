import type { Metadata } from "next"
import { HvacLanding } from "@/components/hvac/hvac-landing"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Google Ads for HVAC Companies | Matt4Tech",
  description:
    "Google Ads management, HVAC landing pages and lead tracking for US HVAC contractors. Capture high-intent local searches and turn them into qualified calls and service opportunities.",
  alternates: { canonical: `${siteConfig.url}/hvac` },
  keywords: [
    "Google Ads for HVAC companies",
    "HVAC Google Ads",
    "HVAC PPC agency",
    "HVAC lead generation",
    "HVAC marketing agency",
    "Google Ads for HVAC contractors",
    "AC repair leads",
    "HVAC contractor marketing",
  ],
  openGraph: {
    title: "Google Ads for HVAC Companies | Matt4Tech",
    description:
      "A high-intent Google Ads acquisition system for HVAC contractors across the United States.",
    url: `${siteConfig.url}/hvac`,
    siteName: siteConfig.name,
    type: "website",
  },
}

export default function HvacPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Management for HVAC Companies",
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: "HVAC Google Ads Management and Lead Generation",
    url: `${siteConfig.url}/hvac`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <HvacLanding />
    </>
  )
}
