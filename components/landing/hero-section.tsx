import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCircleCheck, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"
import { siteConfig } from "@/lib/site"

const trustPoints = [
  "Policy-aware campaigns for repair shops",
  "Call and form tracking from day one",
  `Management from $${siteConfig.managementFrom}/month`,
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="pt-32 pb-20 md:pb-28 px-4 md:px-6 min-h-[90vh] flex items-center relative z-10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-[55%] z-20" data-aos="fade-right" data-aos-duration="1000">
          <div className="inline-block py-1 px-4 border border-primary text-primary font-[var(--font-outfit)] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">
            Google Ads for Independent Repair Shops
          </div>
          <h1 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5 md:mb-6 leading-[0.95] uppercase text-balance">
            Tired of Disapproved Ads? <br />
            <span className="text-primary">Get Your Shop to the Top of Google.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 font-light leading-relaxed max-w-xl text-pretty">
            Repair shop ads get flagged by Google more than almost any other local business. I build campaigns that
            respect Google&apos;s policies, put your shop in front of people searching nearby and turn those searches
            into calls and quote requests you can actually track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
            <AuditCtaLink className="btn-primary px-8 py-4 text-base md:text-lg font-[var(--font-outfit)] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-3">
              Get My Free Audit <FontAwesomeIcon icon={faArrowRight} />
            </AuditCtaLink>
            <Link
              href="/#proof"
              className="px-8 py-4 text-base md:text-lg font-[var(--font-outfit)] font-bold uppercase tracking-wider text-center border border-border text-white hover:border-primary hover:text-primary transition flex items-center justify-center"
            >
              See Client Results
            </Link>
          </div>

          <ul className="flex flex-col gap-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                <FontAwesomeIcon icon={faCircleCheck} className="text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Real client proof */}
        <div className="w-full lg:w-[45%] z-20 relative" data-aos="fade-left" data-aos-duration="1200">
          <div className="absolute -top-10 -right-6 w-56 h-56 bg-primary/10 blur-[100px] rounded-full z-0" />
          <figure className="card-border relative z-10 p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-xs md:text-sm text-white">
                Real Client Result
              </span>
            </div>
            <div className="font-[var(--font-outfit)] text-6xl md:text-7xl font-black text-primary leading-none mb-2">4X</div>
            <p className="font-[var(--font-outfit)] font-bold uppercase tracking-wide text-white mb-6">
              More quality leads
            </p>
            <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-xl mb-3" />
            <blockquote className="text-base md:text-lg text-white/90 leading-relaxed">
              Now we can see our shop at the top of Google all the time, and our quality leads have gone up 4X.
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-border">
              <p className="font-[var(--font-outfit)] font-bold uppercase text-white">Just Phone</p>
              <p className="text-sm text-muted-foreground mt-1">Active client, phone repair shop</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
