"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqs = [
  {
    q: "My ads were disapproved or my account was suspended before. Can you help?",
    a: "That is the most common situation I see with repair shops. I review your ads, keywords and landing page against Google's policies and rebuild what is causing the problem. Nobody can honestly guarantee Google's decisions, but working inside the rules is exactly what I specialize in.",
  },
  {
    q: "How much does it cost?",
    a: "Management starts at $399/month. Your ad budget is separate and paid directly to Google. I recommend at least $30/day so the campaign has enough data to optimize.",
  },
  {
    q: "What do I get in the free audit?",
    a: "A short written review of your website, your main local competitors and your current Google Ads (if you have any), with the changes I would make first. It is free and there is no obligation to hire me.",
  },
  {
    q: "Do I need a new website?",
    a: "Not always. If your current site is fast, clear and safe for Google's policies, we use it. If it is slow, confusing or likely to cause disapprovals, I recommend a dedicated landing page.",
  },
  {
    q: "How will I know if it's working?",
    a: "Calls and quote requests are tracked, and you get a simple monthly report showing what your budget brought in. You can also message me any time to ask about your numbers.",
  },
  {
    q: "Who will manage my account?",
    a: "I do, personally. Matt4Tech is a founder-led remote operation based in Brazil, and you talk directly to the person managing your campaigns by WhatsApp or email.",
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
