import Link from "next/link"
import { siteConfig } from "@/lib/site"

const footerLinks = [
  { label: "Home", href: "/#top" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Matt", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
]

export function Footer() {
  return (
    <footer className="relative z-10 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/#top" className="font-[var(--font-outfit)] text-2xl font-black uppercase text-white">
              Matt<span className="text-primary">4</span>Tech
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Specialized Google Ads management, landing pages and conversion tracking for legitimate US and UK tech repair shops.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground md:text-right space-y-3">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition">
              {siteConfig.instagramHandle}
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition">
              Facebook
            </a>
            <a href={siteConfig.phoneHref} className="block hover:text-primary transition">
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-primary transition break-all">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-[11px] md:text-xs text-muted-foreground leading-relaxed">
          <p>© 2026 Matt4Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
