"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCircleNotch } from "@fortawesome/free-solid-svg-icons"

const budgetOptions = [
  "Less than $30/day",
  "$30–$60/day",
  "$60–$100/day",
  "More than $100/day",
  "Not sure yet",
]

const initialState = {
  fullName: "",
  shopName: "",
  website: "",
  cityState: "",
  email: "",
  phone: "",
  triedBefore: "",
  previousResult: "",
  budget: "",
  valueExpectation: "",
  consent: false,
  websiteCheck: "",
}

const inputClass =
  "w-full bg-background border border-border px-4 py-3 text-white text-sm focus:outline-none focus:border-primary transition placeholder:text-muted-foreground/70"
const labelClass = "block text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground mb-2"

export function RequestFormSection() {
  const router = useRouter()
  const [form, setForm] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (field: keyof typeof initialState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.consent) {
      setError("Please agree to be contacted before submitting.")
      return
    }
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const payload = await response.json().catch(() => null)
      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send your request right now.")
      }

      router.push("/thank-you")
    } catch (err) {
      console.error("Contact form submission error:", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please email contact@matt4tech.site or contact us on WhatsApp.")
      setIsSubmitting(false)
    }
  }

  return (
    <section id="request-review" className="py-16 md:py-24 bg-background relative z-10 px-4 scroll-mt-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <p className="font-[var(--font-outfit)] font-bold uppercase tracking-widest text-primary text-xs mb-3">
            Free Campaign Audit
          </p>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-4 text-balance">
            Let&apos;s Find Out if Google Ads Makes Sense for Your Shop.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed text-pretty">
            Request a free audit of your website, local market and current advertising situation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-border p-6 md:p-10 space-y-6" data-aos="fade-up" noValidate>
          <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="websiteCheck">Leave this field empty</label>
            <input
              id="websiteCheck"
              name="websiteCheck"
              tabIndex={-1}
              autoComplete="off"
              value={form.websiteCheck}
              onChange={(e) => update("websiteCheck", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className={labelClass}>Full Name</label>
              <input id="fullName" required className={inputClass} value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="shopName" className={labelClass}>Shop Name</label>
              <input id="shopName" required className={inputClass} value={form.shopName}
                onChange={(e) => update("shopName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="website" className={labelClass}>Business Website</label>
              <input id="website" type="url" placeholder="https://" className={inputClass} value={form.website}
                onChange={(e) => update("website", e.target.value)} />
            </div>
            <div>
              <label htmlFor="cityState" className={labelClass}>City and State</label>
              <input id="cityState" required className={inputClass} value={form.cityState}
                onChange={(e) => update("cityState", e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input id="email" type="email" required className={inputClass} value={form.email}
                onChange={(e) => update("email", e.target.value)} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone or WhatsApp</label>
              <input id="phone" required className={inputClass} value={form.phone}
                onChange={(e) => update("phone", e.target.value)} />
            </div>
          </div>

          <div>
            <label htmlFor="triedBefore" className={labelClass}>Have you tried Google Ads before?</label>
            <select id="triedBefore" required className={`${inputClass} cursor-pointer`} value={form.triedBefore}
              onChange={(e) => update("triedBefore", e.target.value)}>
              <option value="" disabled className="bg-background">Select an option</option>
              <option value="Yes" className="bg-background">Yes</option>
              <option value="No" className="bg-background">No</option>
              <option value="Not sure" className="bg-background">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="previousResult" className={labelClass}>What happened with your previous campaigns?</label>
            <textarea id="previousResult" rows={3} className={inputClass} value={form.previousResult}
              onChange={(e) => update("previousResult", e.target.value)} />
          </div>

          <div>
            <label htmlFor="budget" className={labelClass}>Approximate monthly advertising budget</label>
            <select id="budget" required className={`${inputClass} cursor-pointer`} value={form.budget}
              onChange={(e) => update("budget", e.target.value)}>
              <option value="" disabled className="bg-background">Select a budget range</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-background">{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="valueExpectation" className={labelClass}>What would make this service valuable to you?</label>
            <textarea id="valueExpectation" rows={3} className={inputClass} value={form.valueExpectation}
              onChange={(e) => update("valueExpectation", e.target.value)} />
          </div>

          <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-muted-foreground leading-relaxed">
            <input type="checkbox" required checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              className="accent-primary w-4 h-4 mt-0.5 shrink-0" />
            By submitting this form, you agree to be contacted about your request. Your information will not be sold.
          </label>

          {error && <p role="alert" aria-live="polite" className="text-sm text-destructive">{error}</p>}

          <button type="submit" disabled={isSubmitting}
            className="btn-primary w-full flex items-center justify-center gap-3 py-4 font-[var(--font-outfit)] font-black uppercase tracking-widest text-sm disabled:opacity-60">
            {isSubmitting ? (
              <><FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /> Sending…</>
            ) : (
              <>Request a Free Audit <FontAwesomeIcon icon={faArrowRight} /></>
            )}
          </button>

          <p className="text-center text-[11px] md:text-xs text-muted-foreground">
            Get a clear assessment of your current Google Ads opportunity and the next steps to generate more qualified local demand.
          </p>
        </form>
      </div>
    </section>
  )
}
