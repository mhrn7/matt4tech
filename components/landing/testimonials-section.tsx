import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

const stats = [
  { value: "2+ Years", text: "Focused on Google Ads challenges faced by US and UK tech repair shops." },
  { value: "Repair Only", text: "A specialized service rather than generic marketing for multiple unrelated industries." },
  { value: "Weekly", text: "Campaign reviews and optimization based on search behavior and conversion data." },
  { value: "Direct Access", text: "Clients communicate directly with the specialist responsible for the strategy." },
]

const testimonials = [
  {
    name: "Amjad A.",
    company: "Cellphone Express Inc.",
    quote:
      "Matt's reliability and support are excellent. We consistently receive clear reports, attentive follow-up and qualified customers reaching the shop.",
  },
  {
    name: "Belen L.",
    company: "Techy Inc.",
    quote:
      "I like Matt's service because it is transparent and he always helps resolve problems. The results have been consistent and continue to grow.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="proof" className="py-16 md:py-24 bg-surface border-y border-border relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase text-balance">
            Specialization You Can Verify
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
            Direct feedback from active tech repair shop clients working with Matt4Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
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
            Ready to build a more consistent customer acquisition system for your shop?
          </p>
          <AuditCtaLink className="btn-primary inline-flex items-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm md:text-base">
            Request a Free Audit <FontAwesomeIcon icon={faArrowRight} />
          </AuditCtaLink>
        </div>
      </div>
    </section>
  )
}
