import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/site"
import "./globals.css"
import { GoogleTag } from "@/components/google-tag"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["500", "700", "900"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Google Ads for Repair Shops in the US | Matt4Tech",
    template: "%s | Matt4Tech",
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  icons: { icon: "/favicon.jpg", apple: "/favicon.jpg" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Google Ads for Repair Shops in the US | Matt4Tech",
    description: siteConfig.description,
    images: [{ url: "/blog/local-lead-generation.png", alt: "Matt4Tech local lead generation system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads for Repair Shops in the US | Matt4Tech",
    description: siteConfig.description,
    images: ["/blog/local-lead-generation.png"],
  },
}

export const viewport: Viewport = { themeColor: "#050505" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth bg-background`}>
      <body className="font-sans antialiased bg-grid">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
        <GoogleTag />
      </body>
    </html>
  )
}
