"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { mainNav } from "@/lib/site"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={`fixed w-full top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-background/95 border-border backdrop-blur-md" : "bg-background/70 border-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center gap-6">
        <Link
          href="/#top"
          className="font-[var(--font-outfit)] text-xl md:text-2xl font-black tracking-tight text-white uppercase shrink-0"
        >
          Matt<span className="text-primary">4</span>Tech
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AuditCtaLink className="hidden sm:inline-block btn-primary px-5 py-2.5 font-[var(--font-outfit)] font-bold uppercase tracking-wide text-xs md:text-sm">
            Get My Free Audit
          </AuditCtaLink>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-border text-white hover:border-primary hover:text-primary transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1" aria-label="Mobile">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-3 border-b border-border/60 text-sm font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
            <AuditCtaLink
              onNavigate={() => setIsOpen(false)}
              className="btn-primary mt-4 px-6 py-3 text-center font-[var(--font-outfit)] font-bold uppercase tracking-wide text-sm"
            >
              Get My Free Audit
            </AuditCtaLink>
          </nav>
        </div>
      )}
    </header>
  )
}
