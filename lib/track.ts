import { siteConfig } from "@/lib/site"

type GtagParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

/** Lead = audit form sent. Fires GA4 generate_lead and the Google Ads conversion (if configured). */
export function trackLead(params: GtagParams = {}) {
  trackEvent("generate_lead", { form_name: "free_audit", ...params })
  if (siteConfig.googleAdsId && siteConfig.googleAdsLeadLabel) {
    trackEvent("conversion", { send_to: `${siteConfig.googleAdsId}/${siteConfig.googleAdsLeadLabel}` })
  }
}

export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { click_location: location })
}
