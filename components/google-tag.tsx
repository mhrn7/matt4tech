import Script from "next/script"
import { siteConfig } from "@/lib/site"

/** Loads the Google tag (gtag.js) for GA4 and Google Ads. Renders nothing if no ID is set. */
export function GoogleTag() {
  const ids = [siteConfig.gaMeasurementId, siteConfig.googleAdsId].filter(Boolean)
  if (ids.length === 0) return null

  const config = ids.map((id) => `gtag('config', '${id}');`).join("\n")

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${config}`}
      </Script>
    </>
  )
}
