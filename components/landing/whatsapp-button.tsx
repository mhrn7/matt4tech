"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { siteConfig } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/track"

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Matt on WhatsApp"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform z-40 rounded-full border border-white/20"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  )
}
