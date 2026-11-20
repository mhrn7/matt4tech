"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { siteConfig } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/track"

export function WhatsAppCta({ location, label }: { location: string; label: string }) {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      className="btn-primary inline-flex items-center justify-center gap-3 px-7 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-lg" /> {label}
    </a>
  )
}
