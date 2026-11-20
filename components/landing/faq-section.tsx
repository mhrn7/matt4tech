"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqs = [
  {
    q: "Do I need a new landing page?",
    a: "Not always. We first review your existing website. If it is slow, unclear, difficult to track or poorly suited to the campaign, we may recommend a dedicated landing page.",
  },
  {
    q: "How much should I spend on Google Ads?",
    a: "For most shops, the recommended starting point is at least $30 per day. The appropriate budget depends on the location, competition, services and local search demand.",
  },
  {
    q: "Where is Matt4Tech located?",
    a: "Matt4Tech is a remote, founder-led operation based in Brazil and serving repair shops across the US and UK.",
  },
  {
    q: "Do you work with other industries?",
    a: "The primary specialization is independent tech repair shops in the US and UK.",
  },
  {
    q: "What results should I expect?",
    a: "Our goal is consistent qualified demand from people actively searching for repair services in your market. We continuously refine targeting, search terms, landing pages and conversion tracking to turn Google Search into a predictable acquisition channel.",
  },
  {
    q: "Who manages my campaigns?",
    a: "Matt personally leads the strategy, management and communication for active clients.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-surface border-y border-border relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full" data-aos="fade-up">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-[var(--font-outfit)] font-bold uppercase tracking-wide text-sm md:text-base text-white hover:text-primary hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
