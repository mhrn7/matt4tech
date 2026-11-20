import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

const goodFit = [
  "You operate a legitimate repair business in the US or UK",
  "You understand the value of local Google searches",
  "You can invest at least $30 per day in advertising",
  "Your team consistently answers calls and quote requests",
  "You want specialized campaign management",
  "You want Google Search to become a serious customer acquisition channel for your shop",
]

const notFit = [
  "You see marketing as a cost instead of an investment",
  "You want high-level results without the budget, follow-up or operational commitment required to grow",
  "Your business does not consistently answer incoming calls",
  "You want misleading ads or unsupported claims",
  "You are searching only for the cheapest possible provider",
]

export function WhoItsForSection() {
  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-surface border-y border-border relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase text-balance">
            Is Matt4Tech Right for Your Shop?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-border p-6 md:p-8" data-aos="fade-right">
            <h3 className="font-[var(--font-outfit)] text-xl md:text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-primary">
              <FontAwesomeIcon icon={faCheck} /> Good Fit
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/90">
                  <span className="text-primary mt-1 shrink-0">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-border p-6 md:p-8" data-aos="fade-left">
            <h3 className="font-[var(--font-outfit)] text-xl md:text-2xl font-bold uppercase mb-6 flex items-center gap-3 text-muted-foreground">
              <FontAwesomeIcon icon={faXmark} /> Probably Not a Fit
            </h3>
            <ul className="space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                  <span className="mt-1 shrink-0">
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
