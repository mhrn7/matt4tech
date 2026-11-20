import Link from "next/link"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faMagnifyingGlassLocation,
  faDiagramProject,
  faWindowMaximize,
  faPhoneVolume,
  faArrowsRotate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"

const steps = [
  { icon: faMagnifyingGlassLocation, label: "Local Search Demand" },
  { icon: faDiagramProject, label: "Campaign Structure" },
  { icon: faWindowMaximize, label: "Landing Page" },
  { icon: faPhoneVolume, label: "Call Tracking" },
  { icon: faArrowsRotate, label: "Weekly Optimization" },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="pt-32 pb-20 md:pb-28 px-4 md:px-6 min-h-[90vh] flex items-center relative z-10 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 z-20" data-aos="fade-right" data-aos-duration="1000">
          <div className="inline-block py-1 px-4 border border-primary text-primary font-[var(--font-outfit)] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-6 md:mb-8">
            Google Ads for US & UK Tech Repair Shops
          </div>
          <h1 className="font-[var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5 md:mb-6 leading-[0.95] uppercase text-balance">
            Turn Google Search Into <br />
            <span className="text-primary">More Repair Jobs.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 font-light leading-relaxed max-w-xl text-pretty">
            Specialized Google Ads systems built exclusively for US and UK tech repair shops — designed to capture high-intent local searches, generate qualified calls and turn ad spend into real repair opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
            <AuditCtaLink className="btn-primary px-8 py-4 text-base md:text-lg font-[var(--font-outfit)] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-3">
              Request a Free Audit <FontAwesomeIcon icon={faArrowRight} />
            </AuditCtaLink>
            <Link
              href="/#how-it-works"
              className="px-8 py-4 text-base md:text-lg font-[var(--font-outfit)] font-bold uppercase tracking-wider text-center border border-border text-white hover:border-primary hover:text-primary transition flex items-center justify-center"
            >
              See How It Works
            </Link>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground font-light">
            For established repair shops ready to invest $30+/day in growth.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-[11px] md:text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary">
            <FontAwesomeIcon icon={faCircleCheck} /> Founder-led specialized service
          </p>
        </div>

        {/* Conceptual Repair Shop Lead System */}
        <div className="w-full lg:w-1/2 z-20 relative" data-aos="fade-left" data-aos-duration="1200">
          <div className="absolute -top-10 -right-6 w-56 h-56 bg-primary/10 blur-[100px] rounded-full z-0" />
          <div className="card-border relative z-10 p-6 md:p-8">
            <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-xs md:text-sm text-white">
                Repair Shop Lead System
              </span>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground">Concept</span>
            </div>

            <ol className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <li key={step.label} className="flex items-center gap-4 bg-background border border-border p-4">
                  <span className="w-9 h-9 shrink-0 flex items-center justify-center bg-primary/10 text-primary">
                    <FontAwesomeIcon icon={step.icon} />
                  </span>
                  <span className="font-[var(--font-outfit)] font-bold uppercase tracking-wide text-sm text-white">
                    {step.label}
                  </span>
                  <span className="ml-auto font-[var(--font-outfit)] font-black text-border text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>
    </section>
  )
}
