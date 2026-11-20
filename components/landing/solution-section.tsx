import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

const points = [
  "Campaign structures adapted to repair-shop search behavior",
  "Cleaner and more focused landing pages",
  "Local targeting based on the shop's actual service area",
  "Call and form conversion tracking",
  "Search-term monitoring and negative keyword control",
  "Weekly campaign optimization",
  "Clear monthly performance reporting",
  "Direct communication with the specialist managing the account",
]

export function SolutionSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 relative z-10 bg-surface border-y border-border px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-4 md:mb-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 text-balance">
            <FontAwesomeIcon icon={faGoogle} className="text-google text-3xl md:text-4xl shrink-0" />
            Not Another Generalist Marketing Agency.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Matt4Tech focuses on one market: tech repair shops. That specialization translates into sharper campaign structures, better traffic control, stronger landing pages and decisions based on what actually happens inside repair campaigns.
          </p>
          <p className="mt-6 text-base md:text-lg font-[var(--font-outfit)] font-black uppercase tracking-wide text-white">
            You do not need an agency learning your industry with your money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
          {points.map((point, i) => (
            <div
              key={point}
              className="bg-surface p-6 md:p-8 flex items-start gap-4"
              data-aos="fade-in"
              data-aos-delay={(i % 2) * 100}
            >
              <span className="w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <p className="text-sm md:text-base text-white font-[var(--font-outfit)] font-medium leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
