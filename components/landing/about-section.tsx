import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComments, faScrewdriverWrench, faGlobe } from "@fortawesome/free-solid-svg-icons"

const bullets = [
  { icon: faComments, text: "Direct founder communication" },
  { icon: faScrewdriverWrench, text: "Repair-shop-specific experience" },
  { icon: faGlobe, text: "Transparent remote operation" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-2" data-aos="fade-right">
          <div className="card-border aspect-square max-w-sm mx-auto lg:mx-0 relative overflow-hidden bg-surface">
            <Image
              src="/matt-neves.webp"
              alt="Matt, founder of Matt4Tech and Google Ads specialist for US and UK tech repair shops"
              fill
              sizes="(max-width: 1024px) 384px, 40vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="lg:col-span-3" data-aos="fade-left">
          <p className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary text-xs mb-3">
            About Matt
          </p>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-6">Meet Matt</h2>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            <p>
              Matt is a Google Ads specialist focused on the US and UK tech repair markets. For approximately two years, he has
              worked directly with independent repair shops, studying the search behavior, campaign challenges and
              operational realities of this market.
            </p>
            <p>
              Matt4Tech is a founder-led remote operation based in Brazil and serving legitimate repair businesses across
              the US and UK. Clients communicate directly with Matt instead of being passed between account
              managers.
            </p>
            <p>
              The objective is straightforward: build a cleaner, more measurable and more focused customer acquisition
              system for each shop.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bullets.map((bullet) => (
              <li key={bullet.text} className="flex items-center gap-3 border border-border p-4 bg-surface">
                <span className="text-primary text-lg shrink-0">
                  <FontAwesomeIcon icon={bullet.icon} />
                </span>
                <span className="text-xs md:text-sm text-white font-[var(--font-outfit)] font-medium leading-tight">
                  {bullet.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
