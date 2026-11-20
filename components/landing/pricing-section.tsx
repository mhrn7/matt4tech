import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

const includes = [
  "Campaign strategy and management",
  "Landing page review or development",
  "Conversion tracking setup",
  "Weekly optimization",
  "Monthly performance reporting",
  "Direct support",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-4xl">
        <div className="card-border p-8 md:p-12" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-black uppercase mb-4 text-balance">
            Recommended Daily Advertising Budget: <span className="text-primary">$30+/Day</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
            Advertising spend is paid directly by the client. A minimum daily budget of approximately $30 is recommended
            to give campaigns enough room to generate meaningful search and conversion data.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-8">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm md:text-base text-white/90">
                <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-primary text-primary-foreground text-[10px]">
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <p className="text-xs md:text-sm text-muted-foreground max-w-md leading-relaxed">
              Initial setup requirements may vary depending on the condition of the existing website, tracking and
              advertising account.
            </p>
            <AuditCtaLink className="btn-primary inline-flex shrink-0 items-center justify-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm">
              Request a Free Audit <FontAwesomeIcon icon={faArrowRight} />
            </AuditCtaLink>
          </div>
        </div>
      </div>
    </section>
  )
}
