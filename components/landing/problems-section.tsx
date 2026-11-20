import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBan, faMoneyBillWave, faChartLine, faUserSlash } from "@fortawesome/free-solid-svg-icons"

const cards = [
  {
    icon: faBan,
    title: "Ads Disapproved or Suspended",
    text: "Repair ads trip Google's policies easily. One wrong word on the ad or the website and your campaign stops, often with no clear reason.",
  },
  {
    icon: faMoneyBillWave,
    title: "Paying for the Wrong Clicks",
    text: "Budget goes to people looking for a new phone, a part to buy or a job, not to someone who needs a device fixed today.",
  },
  {
    icon: faChartLine,
    title: "No Idea What Brings Calls",
    text: "Without call and form tracking you can't tell which ads make money and which ones just burn it.",
  },
  {
    icon: faUserSlash,
    title: "The Agency Disappears",
    text: "Many agencies launch a campaign, send a generic report and stop answering. You never know who is actually managing your money.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-background relative z-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-2/5 md:sticky top-32" data-aos="fade-right">
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-black uppercase mb-4 text-balance">
              Why Most Repair Shops Give Up on Google Ads
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Google Ads works for repair shops, but this industry plays by stricter rules than most local businesses. Generic agencies run the same template they use for a plumber or a dentist, and that is where campaigns break. Sound familiar?
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
