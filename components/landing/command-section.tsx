import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { siteConfig } from "@/lib/site"

export function CommandSection() {
  return (
    <section className="py-16 md:py-20 bg-background relative z-10 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center" data-aos="zoom-in">
        <p className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary text-xs mb-3">
          Direct Contact
        </p>
        <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black mb-4 uppercase">
          Speak Directly With Matt
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto font-light leading-relaxed">
          No account-manager handoffs. Use Instagram or WhatsApp to discuss your shop and request an initial review.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 items-center">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-primary transition font-[var(--font-outfit)] uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-lg md:text-xl" /> {siteConfig.instagramHandle}
          </a>
          <span className="hidden sm:block text-border">|</span>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition font-[var(--font-outfit)] uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            Facebook
          </a>
          <span className="hidden sm:block text-border">|</span>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 md:gap-3 text-muted-foreground hover:text-primary transition font-[var(--font-outfit)] uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            <FontAwesomeIcon icon={faPhone} className="text-base md:text-lg" /> {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
