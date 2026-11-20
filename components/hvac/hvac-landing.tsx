"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AOS from "aos"
import "aos/dist/aos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowRight,
  faBars,
  faBolt,
  faBullseye,
  faChartLine,
  faCheck,
  faCircleNotch,
  faClock,
  faFilterCircleDollar,
  faFireFlameCurved,
  faGaugeHigh,
  faLocationDot,
  faPhone,
  faSearch,
  faSnowflake,
  faTemperatureArrowUp,
  faWrench,
  faXmark,
} from "@fortawesome/free-solid-svg-icons"
import { siteConfig } from "@/lib/site"

const heroImage = "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&dpr=1&h=750&w=1260"
const detailImage = "https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?auto=compress&dpr=1&h=750&w=1260"

const budgetOptions = [
  "Less than $900/month",
  "$30–$60/day",
  "$1,500–$3,000/month",
  "$3,000–$5,000/month",
  "More than $5,000/month",
  "Not sure yet",
]

const initialForm = {
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
const labelClass =
  "block text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground mb-2"

function HvacHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const nav = [
    ["How It Works", "#how-it-works"],
    ["Services", "#hvac-services"],
    ["Who It's For", "#who-its-for"],
    ["About Matt", "#about-hvac"],
  ]

  return (
    <header className={`fixed top-0 z-50 w-full border-b transition ${scrolled ? "bg-background/95 border-border backdrop-blur-md" : "bg-background/75 border-transparent backdrop-blur-sm"}`}>
      <div className="container mx-auto flex items-center justify-between gap-5 px-4 py-4 md:px-6">
        <Link href="/hvac#top" className="font-[var(--font-outfit)] text-xl md:text-2xl font-black uppercase tracking-tight text-white">
          Matt<span className="text-primary">4</span>Tech <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground align-middle">HVAC</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="HVAC primary navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#hvac-audit" className="hidden sm:inline-flex btn-primary px-5 py-2.5 font-[var(--font-outfit)] font-bold uppercase tracking-wide text-xs md:text-sm">
            Request a Free Audit
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} className="lg:hidden w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="Toggle menu">
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-background/98 border-t border-border px-4 py-5 flex flex-col" aria-label="HVAC mobile navigation">
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 border-b border-border/60 text-sm font-[var(--font-outfit)] font-bold uppercase tracking-widest text-muted-foreground">
              {label}
            </a>
          ))}
          <a href="#hvac-audit" onClick={() => setOpen(false)} className="btn-primary mt-4 px-6 py-3 text-center font-[var(--font-outfit)] font-black uppercase tracking-wide text-sm">
            Request a Free Audit
          </a>
        </nav>
      )}
    </header>
  )
}

function HvacForm() {
  const router = useRouter()
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (field: keyof typeof initialForm, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!form.consent) {
      setError("Please agree to be contacted before submitting.")
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, industry: "HVAC" }),
      })
      const payload = await response.json().catch(() => null)
      if (!response.ok) throw new Error(payload?.error || "Unable to send your request right now.")
      router.push("/thank-you?source=hvac")
    } catch (err) {
      console.error("HVAC form submission error:", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please contact us directly.")
      setSubmitting(false)
    }
  }

  return (
    <section id="hvac-audit" className="relative z-10 scroll-mt-24 bg-background px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14" data-aos="fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary mb-3">Free HVAC Google Ads Audit</p>
          <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase text-balance mb-4">
            Find the Leaks in Your Lead Generation.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Send your company details. We&apos;ll review your local market, current website and Google Ads opportunity.
          </p>
        </div>

        <form onSubmit={submit} className="card-border p-6 md:p-10 space-y-6" data-aos="fade-up" noValidate>
          <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="hvacWebsiteCheck">Leave this field empty</label>
            <input id="hvacWebsiteCheck" tabIndex={-1} autoComplete="off" value={form.websiteCheck} onChange={(e) => update("websiteCheck", e.target.value)} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hvacFullName" className={labelClass}>Full Name</label>
              <input id="hvacFullName" required className={inputClass} value={form.fullName} onChange={(e) => update("fullName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="hvacCompany" className={labelClass}>HVAC Company Name</label>
              <input id="hvacCompany" required className={inputClass} value={form.shopName} onChange={(e) => update("shopName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="hvacWebsite" className={labelClass}>Business Website</label>
              <input id="hvacWebsite" type="url" placeholder="https://" className={inputClass} value={form.website} onChange={(e) => update("website", e.target.value)} />
            </div>
            <div>
              <label htmlFor="hvacCityState" className={labelClass}>City and State</label>
              <input id="hvacCityState" required className={inputClass} value={form.cityState} onChange={(e) => update("cityState", e.target.value)} />
            </div>
            <div>
              <label htmlFor="hvacEmail" className={labelClass}>Email</label>
              <input id="hvacEmail" type="email" required className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
            </div>
            <div>
              <label htmlFor="hvacPhone" className={labelClass}>Phone</label>
              <input id="hvacPhone" required className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
          </div>

          <div>
            <label htmlFor="hvacTried" className={labelClass}>Have you tried Google Ads before?</label>
            <select id="hvacTried" required className={`${inputClass} cursor-pointer`} value={form.triedBefore} onChange={(e) => update("triedBefore", e.target.value)}>
              <option value="" disabled className="bg-background">Select an option</option>
              <option value="Yes" className="bg-background">Yes</option>
              <option value="No" className="bg-background">No</option>
              <option value="Not sure" className="bg-background">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="hvacPrevious" className={labelClass}>What happened with your previous campaigns?</label>
            <textarea id="hvacPrevious" rows={3} className={inputClass} placeholder="High CPL, junk leads, no tracking, inconsistent calls..." value={form.previousResult} onChange={(e) => update("previousResult", e.target.value)} />
          </div>

          <div>
            <label htmlFor="hvacBudget" className={labelClass}>Approximate monthly advertising budget</label>
            <select id="hvacBudget" required className={`${inputClass} cursor-pointer`} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
              <option value="" disabled className="bg-background">Select a budget range</option>
              {budgetOptions.map((option) => <option key={option} value={option} className="bg-background">{option}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="hvacGoal" className={labelClass}>Which HVAC services do you want more calls for?</label>
            <textarea id="hvacGoal" rows={3} className={inputClass} placeholder="AC repair, replacement, furnace, heat pumps, maintenance, emergency calls..." value={form.valueExpectation} onChange={(e) => update("valueExpectation", e.target.value)} />
          </div>

          <label className="flex items-start gap-3 cursor-pointer text-xs md:text-sm text-muted-foreground leading-relaxed">
            <input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="accent-primary w-4 h-4 mt-0.5 shrink-0" />
            By submitting this form, you agree to be contacted about your request. Your information will not be sold.
          </label>

          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}

          <button type="submit" disabled={submitting} className="btn-primary w-full flex items-center justify-center gap-3 py-4 font-[var(--font-outfit)] font-black uppercase tracking-widest text-sm disabled:opacity-60">
            {submitting ? <><FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /> Sending…</> : <>Request a Free Audit <FontAwesomeIcon icon={faArrowRight} /></>}
          </button>
        </form>
      </div>
    </section>
  )
}

export function HvacLanding() {
  useEffect(() => {
    AOS.init({ once: true, offset: 45, duration: 650 })
  }, [])

  const services = [
    [faSnowflake, "AC Repair", "Capture urgent cooling demand when homeowners are actively searching for a solution."],
    [faTemperatureArrowUp, "Heating & Furnace", "Reach homeowners looking for heating repair, furnace service and seasonal help."],
    [faBolt, "Emergency HVAC", "Build campaigns around the searches where speed and immediate availability matter most."],
    [faWrench, "Install & Replacement", "Prioritize higher-value opportunities for system replacement and new installations."],
    [faGaugeHigh, "Heat Pumps", "Target growing demand for heat pump service, replacement and installation."],
    [faClock, "Maintenance", "Generate recurring service opportunities and keep your technicians’ schedules fuller."],
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HvacHeader />

      <main>
        <section id="top" className="relative min-h-[92vh] pt-28 md:pt-32 flex items-center overflow-hidden bg-grid border-b border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(212,255,0,0.10),transparent_32%)]" />
          <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
            <div className="grid lg:grid-cols-[1.02fr_.98fr] gap-12 lg:gap-16 items-center">
              <div data-aos="fade-up">
                <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/5 px-3 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em] text-primary mb-6">
                  <FontAwesomeIcon icon={faLocationDot} /> Google Ads for US HVAC Contractors
                </div>
                <h1 className="font-[var(--font-outfit)] text-5xl sm:text-6xl lg:text-7xl xl:text-[5.2rem] leading-[0.92] font-black uppercase tracking-tight mb-7 text-balance">
                  Turn Google Searches Into <span className="text-primary">HVAC Calls.</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  Search campaigns, conversion-focused landing pages and lead tracking built to capture homeowners already looking for AC repair, heating service, replacements and emergency HVAC help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a href="#hvac-audit" className="btn-primary inline-flex items-center justify-center gap-3 px-7 py-4 font-[var(--font-outfit)] font-black uppercase tracking-wider text-sm">
                    Request a Free Audit <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a href="#how-it-works" className="inline-flex items-center justify-center border border-border px-7 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition">
                    See How It Works
                  </a>
                </div>
                <p className="text-xs text-muted-foreground">For established HVAC companies • Recommended ad spend from $30/day</p>
              </div>

              <div className="relative" data-aos="fade-left">
                <div className="absolute -inset-5 bg-primary/5 blur-3xl" />
                <div className="relative border border-border bg-surface p-2">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={heroImage} alt="HVAC technician servicing an outdoor air conditioning system" className="h-full w-full object-cover grayscale-[25%] contrast-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
                      {[[faSearch, "High Intent"], [faPhone, "Qualified Calls"], [faChartLine, "Measured Growth"]].map(([icon, label]) => (
                        <div key={String(label)} className="bg-black/85 backdrop-blur px-3 py-3 border border-white/10 text-center">
                          <FontAwesomeIcon icon={icon as any} className="text-primary mb-1" />
                          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">{String(label)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-3xl mb-12" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">The Opportunity</p>
              <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Your Next HVAC Customer Is Already Searching.</h2>
              <p className="text-muted-foreground leading-relaxed">Google Search puts your company in front of homeowners at the exact moment the AC stops cooling, the furnace fails, or replacement becomes urgent. The job is not to create demand. It is to capture it before a competitor does.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                [faBullseye, "High-Intent Demand", "Build around searches that signal real service intent instead of broad awareness traffic."],
                [faFilterCircleDollar, "Budget Control", "Cut waste from weak search terms, bad locations and traffic that never turns into a phone call."],
                [faPhone, "Call-Focused Conversion", "Make calling, booking and requesting service the easiest next step on every landing page."],
              ].map(([icon, title, body]) => (
                <div key={String(title)} className="card-border p-6 md:p-7" data-aos="fade-up">
                  <FontAwesomeIcon icon={icon as any} className="text-primary text-xl mb-5" />
                  <h3 className="font-[var(--font-outfit)] font-black uppercase text-lg mb-3">{String(title)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{String(body)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-24 bg-surface/30 border-b border-border scroll-mt-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative" data-aos="fade-right">
                <div className="border border-border p-2 bg-background">
                  <img src={detailImage} loading="lazy" alt="HVAC technician checking an air conditioning component during service" className="w-full aspect-[4/3] object-cover grayscale-[20%]" />
                </div>
              </div>
              <div data-aos="fade-up">
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">The Acquisition System</p>
                <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-8">Built to Turn Search Intent Into Booked Opportunities.</h2>
                <div className="space-y-5">
                  {[
                    ["01", "Market & Demand Review", "We map your service area, strongest services, competitors and current search opportunity."],
                    ["02", "Campaign Architecture", "We build focused Search campaigns around the services and local intent that matter most."],
                    ["03", "Landing Page", "A fast, conversion-focused page makes your offer, service area and call action immediately clear."],
                    ["04", "Lead Tracking", "Calls and forms are measured so optimization is based on actual customer actions, not vanity metrics."],
                    ["05", "Weekly Optimization", "Search terms, locations, ads, budget and conversion quality are continuously refined."],
                  ].map(([number, title, body]) => (
                    <div key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-border pb-5">
                      <span className="font-[var(--font-outfit)] text-primary font-black text-xl">{number}</span>
                      <div>
                        <h3 className="font-[var(--font-outfit)] font-black uppercase mb-1">{title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#hvac-audit" className="btn-primary inline-flex items-center gap-3 mt-8 px-7 py-4 font-[var(--font-outfit)] font-black uppercase tracking-wide text-sm">
                  Request a Free Audit <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="hvac-services" className="py-16 md:py-24 border-b border-border scroll-mt-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">HVAC Search Demand</p>
              <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-4">Put More of Your Best Services in Front of Ready-to-Call Customers.</h2>
              <p className="text-muted-foreground">The structure is adapted to your market, margins, seasonality and actual service capacity.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map(([icon, title, text]) => (
                <div key={title} className="card-border p-6" data-aos="fade-up">
                  <FontAwesomeIcon icon={icon} className="text-primary text-xl mb-4" />
                  <h3 className="font-[var(--font-outfit)] font-black uppercase text-lg mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-surface/30 border-b border-border">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
              <div data-aos="fade-up">
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">What We Optimize For</p>
                <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Lead Quality. Call Volume. Revenue Opportunity.</h2>
                <p className="text-muted-foreground leading-relaxed">Clicks are useful only when they move the business toward a real service call. The system is built around actions your dispatch team can actually turn into jobs.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Searches with strong local service intent",
                  "Calls and quote requests from your service area",
                  "High-value repair and replacement opportunities",
                  "Cleaner search-term quality and less wasted spend",
                  "Mobile landing-page conversion",
                  "Clear reporting tied to lead actions",
                ].map((item) => (
                  <div key={item} className="card-border p-5 flex gap-3 items-start" data-aos="fade-up">
                    <span className="w-6 h-6 shrink-0 bg-primary text-black flex items-center justify-center"><FontAwesomeIcon icon={faCheck} className="text-xs" /></span>
                    <p className="text-sm font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="who-its-for" className="py-16 md:py-24 border-b border-border scroll-mt-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">Fit</p>
              <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase">Built for HVAC Companies Ready to Grow.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="card-border p-7" data-aos="fade-right">
                <p className="text-primary font-black uppercase tracking-widest text-sm mb-6">Good Fit</p>
                <div className="space-y-4">
                  {["You operate a legitimate HVAC service company in the United States", "You want more repair, replacement or installation opportunities from Google Search", "You can invest at least $30 per day in advertising", "Your team consistently answers calls and follows up on leads", "You want a specialist to manage the system instead of doing it yourself"].map((item) => (
                    <div key={item} className="flex gap-3 text-sm"><FontAwesomeIcon icon={faCheck} className="text-primary mt-1" /><span>{item}</span></div>
                  ))}
                </div>
              </div>
              <div className="card-border p-7" data-aos="fade-left">
                <p className="text-muted-foreground font-black uppercase tracking-widest text-sm mb-6">Probably Not a Fit</p>
                <div className="space-y-4 text-sm text-muted-foreground">
                  {["You see marketing only as a cost instead of a growth investment", "You want high-level results without consistent budget, follow-up or operational effort", "Your company regularly misses incoming sales calls", "You are only looking for the cheapest possible marketing provider", "You do not have the capacity to take on additional service demand"].map((item) => (
                    <div key={item} className="flex gap-3"><span className="text-white/40">×</span><span>{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about-hvac" className="py-16 md:py-24 bg-surface/30 border-b border-border scroll-mt-24">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid md:grid-cols-[.72fr_1.28fr] gap-10 lg:gap-16 items-center">
              <div className="border border-border p-2 bg-background" data-aos="fade-right">
                <img src="/matt-neves.webp" alt="Matt Neves, Google Ads specialist" className="w-full aspect-square object-cover" />
              </div>
              <div data-aos="fade-up">
                <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">Founder-Led Management</p>
                <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Meet Matt.</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Matt is a Google Ads specialist focused on high-intent local customer acquisition in the United States. The operation is founder-led, which means clients communicate directly with the person responsible for strategy, landing pages, tracking and optimization.</p>
                <p className="text-muted-foreground leading-relaxed mb-7">The HVAC offer applies the same direct-response principles used in demanding local service campaigns: capture strong search intent, remove wasted traffic, make the call action obvious and optimize around real lead behavior.</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {["Direct communication", "Weekly optimization", "Clear reporting"].map((item) => <div key={item} className="border border-border p-4 text-xs font-black uppercase tracking-wide">{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center" data-aos="fade-up">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">Management</p>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase mb-5">Recommended Daily Advertising Budget: $30+/Day.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">Campaign strategy, management, landing-page work, conversion tracking, weekly optimization and performance reporting. Advertising spend is paid directly by the client. A daily budget of at least $30 is recommended.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left mb-8">
              {["Google Search campaign management", "HVAC conversion landing page", "Call & form tracking", "Search-term optimization", "Local targeting", "Monthly performance reporting"].map((item) => (
                <div key={item} className="card-border p-4 flex gap-3 items-center text-sm"><FontAwesomeIcon icon={faCheck} className="text-primary" />{item}</div>
              ))}
            </div>
            <a href="#hvac-audit" className="btn-primary inline-flex items-center gap-3 px-8 py-4 font-[var(--font-outfit)] font-black uppercase tracking-wide text-sm">Request a Free Audit <FontAwesomeIcon icon={faArrowRight} /></a>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-surface/30 border-b border-border">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <div className="text-center mb-10" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-bold mb-3">FAQ</p>
              <h2 className="font-[var(--font-outfit)] text-3xl md:text-5xl font-black uppercase">Straight Answers.</h2>
            </div>
            <div className="space-y-3">
              {[
                ["How much should an HVAC company spend on Google Ads?", "The recommended starting point is at least $30 per day. Competitive markets, larger service areas and replacement-focused campaigns can justify a higher budget."],
                ["Which HVAC services can you advertise?", "Campaigns can be structured around AC repair, heating and furnace service, heat pumps, maintenance, replacements, installations, emergency service and other services your company actually provides."],
                ["Do I need a new website?", "Not necessarily. We review your current site first. When it creates friction or is difficult to track, a focused landing page can give paid search traffic a clearer path to call or request service."],
                ["What do you track?", "The focus is on meaningful lead actions such as calls and forms, then using those signals to improve traffic quality, locations, ads and budget allocation."],
                ["Who manages the campaigns?", "Matt directly leads strategy, management, landing-page decisions, tracking and client communication."],
              ].map(([q, a]) => (
                <details key={q} className="card-border group p-5 md:p-6" data-aos="fade-up">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-[var(--font-outfit)] font-black uppercase text-sm md:text-base">
                    {q}<span className="text-primary text-xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-4 pr-8">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <HvacForm />
      </main>

      <footer className="bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <Link href="/hvac#top" className="font-[var(--font-outfit)] text-2xl font-black uppercase">Matt<span className="text-primary">4</span>Tech</Link>
              <p className="text-sm text-muted-foreground mt-3 max-w-sm">Google Ads management, landing pages and lead tracking for US HVAC service providers.</p>
            </div>
            <div className="text-sm space-y-2">
              <a href="#how-it-works" className="block text-muted-foreground hover:text-primary">How It Works</a>
              <a href="#hvac-services" className="block text-muted-foreground hover:text-primary">HVAC Services</a>
              <a href="#hvac-audit" className="block text-muted-foreground hover:text-primary">Free Audit</a>
              <Link href="/" className="block text-muted-foreground hover:text-primary">Tech Repair Google Ads</Link>
            </div>
            <div className="text-sm md:text-right space-y-2 text-muted-foreground">
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-primary">{siteConfig.email}</a>
              <a href={siteConfig.phoneHref} className="block hover:text-primary">{siteConfig.phone}</a>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">{siteConfig.instagramHandle}</a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-primary">Facebook</a>
            </div>
          </div>
          <div className="mt-9 pt-7 border-t border-border text-xs text-muted-foreground">© 2026 Matt4Tech. All rights reserved.</div>
        </div>
      </footer>

      <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact Matt4Tech on WhatsApp" className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 w-12 h-12 bg-primary text-black flex items-center justify-center shadow-lg hover:scale-105 transition">
        <FontAwesomeIcon icon={faPhone} />
      </a>
    </div>
  )
}
