import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"
import { siteConfig } from "@/lib/site"

const includes = [
  "Policy-aware campaign setup and management",
  "Landing page review or a new page when needed",
  "Call and form conversion tracking",
  "Weekly optimization of searches, bids and budget",
  "Simple monthly performance report",
  "Direct WhatsApp and email support with Matt",
]

const goodFit = [
  "Independent phone or electronics repair shop in the US",
  "Ready to invest at least $30/day in ads",
  "Someone answers calls and quote requests during business hours",
]

const notFit = [
  "Looking for results without a real ad budget",
  "Wants misleading ads or promises Google won't allow",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="card-border p-8 md:p-12" data-aos="fade-up">
          <p className="text-primary font-[var(--font-outfit)] font-bold uppercase tracking-widest text-xs mb-3">
            Simple Pricing
          </p>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-4 text-balance">
            Management From <span className="text-primary">${siteConfig.managementFrom}/Month</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
            The final package depends on your market and the number of services or locations. Your ad budget is paid
            directly to Google, not to me, and I recommend starting at $30/day or more so the campaign has enough data
            to work with.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-10">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-white/90">
                <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-primary text-primary-foreground text-[10px]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div id="who-its-for" className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-border pt-8 mb-10 scroll-mt-24">
            <div>
              <h3 className="font-[var(--font-outfit)] font-bold uppercase tracking-wide text-white mb-4">Good fit</h3>
              <ul className="flex flex-col gap-3">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <FontAwesomeIcon icon={faCheck} className="text-primary mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[var(--font-outfit)] font-bold uppercase tracking-wide text-white mb-4">Not a fit</h3>
              <ul className="flex flex-col gap-3">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <FontAwesomeIcon icon={faXmark} className="text-destructive mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <AuditCtaLink className="btn-primary inline-flex items-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm md:text-base">
            Get My Free Audit <FontAwesomeIcon icon={faArrowRight} />
          </AuditCtaLink>
        </div>
      </div>
    </section>
  )
}
