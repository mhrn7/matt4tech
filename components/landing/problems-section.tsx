import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation, faFilterCircleXmark, faChartLine } from "@fortawesome/free-solid-svg-icons"

const cards = [
  {
    icon: faTriangleExclamation,
    title: "Campaign Structure",
    text: "Built around the realities of the repair industry instead of generic agency templates.",
  },
  {
    icon: faFilterCircleXmark,
    title: "High-Intent Traffic",
    text: "Focus the budget on searches that signal real local repair demand, not meaningless clicks.",
  },
  {
    icon: faChartLine,
    title: "Real Tracking",
    text: "Know which campaigns, searches and customer actions are actually generating repair opportunities.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-background relative z-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-2/5 md:sticky top-32" data-aos="fade-right">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-black uppercase mb-4 text-balance">
              Repair Shop Google Ads Is a Different Game.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Generic agencies treat repair shops like any other local business. That is exactly where campaigns break down. Matt4Tech was built around this industry — its search behavior, its advertising challenges and the customers that actually turn into profitable repair jobs.
            </p>
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-1 gap-4 md:gap-6">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="card-border p-6 md:p-8 hover:border-primary/50 transition-colors"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-primary text-xl md:text-2xl mb-4">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3 className="font-[var(--font-outfit)] text-xl md:text-2xl font-bold mb-2 uppercase">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
