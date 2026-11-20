import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

const steps = [
  {
    number: "01",
    title: "Free Audit",
    text: "I review your website, your local competitors and your current ads (if you have any) and send you a clear written plan. No cost, no commitment.",
  },
  {
    number: "02",
    title: "Policy-Safe Campaign Setup",
    text: "Campaigns, ads and keywords written to respect Google's rules for repair businesses and focused on people who need a fix near your shop.",
  },
  {
    number: "03",
    title: "Landing Page That Converts",
    text: "If your site is slow, confusing or risky for Google's policies, I build or adjust a clean page with your location, services and a clear reason to call.",
  },
  {
    number: "04",
    title: "Call and Form Tracking",
    text: "Every call and quote request is tracked, so you know exactly what your ad budget is bringing in.",
  },
  {
    number: "05",
    title: "Weekly Optimization and Reports",
    text: "Every week I cut bad searches, adjust bids and budget, and you get a simple report with your numbers. You talk directly to me.",
  },
]

export function ProtocolSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <p className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary text-xs mb-3">
            How It Works
          </p>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase text-balance">
            From Free Audit to a Ringing Phone
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="card-border p-6 flex flex-col" data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="text-3xl md:text-4xl font-[var(--font-outfit)] font-black text-primary mb-4">
                {step.number}
              </div>
              <h3 className="font-[var(--font-outfit)] font-bold text-base md:text-lg mb-2 uppercase text-white">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <AuditCtaLink className="btn-primary inline-flex items-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm md:text-base">
            Get My Free Audit <FontAwesomeIcon icon={faArrowRight} />
          </AuditCtaLink>
        </div>
      </div>
    </section>
  )
}
