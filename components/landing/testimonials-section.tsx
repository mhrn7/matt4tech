import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

const stats = [
  { value: "4X", text: "More quality leads reported by Just Phone after the new campaigns." },
  { value: "Top of Google", text: "Clients see their shop at the top of local searches for their services." },
  { value: "Weekly", text: "Search terms, bids and budget reviewed every week, not once a month." },
  { value: "1 Person", text: "You talk directly to Matt, the person managing your account. No hand-offs." },
]

const testimonials = [
  {
    name: "Just Phone",
    company: "Phone repair shop",
    quote: "Now we can see our shop at the top of Google all the time, and our quality leads have gone up 4X.",
  },
  {
    name: "Amjad A.",
    company: "Cellphone Express",
    quote:
      "What gave me the most peace of mind was Matt's transparency. He is always proactive in solving problems as they come up and keeps our shop at the top of Google.",
  },
  {
    name: "Belen L.",
    company: "Techy Doral",
    quote: "High-quality service. It has truly made a difference for us at Techy.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="proof" className="py-16 md:py-24 bg-surface border-y border-border relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase text-balance">
            Results From Real Repair Shops
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <div key={stat.value} className="card-border p-6 md:p-8" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black text-primary mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12" data-aos="fade-up">
          <h3 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black uppercase mb-3">
            What Current Clients Say
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Feedback shared by active clients when asked how the work is going.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <figure
              key={`${testimonial.name}-${testimonial.company}`}
              className="card-border p-6 md:p-8 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="text-primary text-2xl mb-5 self-start" />
              <blockquote className="text-base md:text-lg text-white/90 leading-relaxed flex-1">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-[var(--font-outfit)] font-bold uppercase text-white">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{testimonial.company}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <p className="text-base md:text-lg text-white font-light mb-6 max-w-xl mx-auto text-pretty">
            Want to know what Google Ads could do for your shop?
          </p>
          <AuditCtaLink className="btn-primary inline-flex items-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm md:text-base">
            Get My Free Audit <FontAwesomeIcon icon={faArrowRight} />
          </AuditCtaLink>
        </div>
      </div>
    </section>
  )
}
