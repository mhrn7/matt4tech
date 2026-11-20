import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const recipient = "contact.elevaimkt@gmail.com"
const sender = "Matt4Tech <onboarding@resend.dev>"

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function clean(value: unknown, maxLength = 3000): string {
  return String(value ?? "").trim().slice(0, maxLength)
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: "Matt4Tech contact form",
      apiKeyConfigured: Boolean(process.env.RESEND_API_KEY),
    },
    { headers: { "Cache-Control": "no-store" } },
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: bots commonly fill hidden fields.
    if (clean(body.websiteCheck, 100)) {
      return NextResponse.json({ success: true })
    }

    const industry = clean(body.industry, 80) || "Tech Repair"
    const fullName = clean(body.fullName, 120)
    const shopName = clean(body.shopName, 160)
    const website = clean(body.website, 500)
    const cityState = clean(body.cityState, 160)
    const email = clean(body.email, 254).toLowerCase()
    const phone = clean(body.phone, 80)
    const triedBefore = clean(body.triedBefore, 80)
    const previousResult = clean(body.previousResult)
    const budget = clean(body.budget, 120)
    const valueExpectation = clean(body.valueExpectation)
    const consent = body.consent === true

    if (!fullName || !shopName || !cityState || !email || !phone || !triedBefore || !budget || !consent) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      // Same sender and destination used by the original working landing page.
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `[Matt4Tech][${industry}] New audit request — ${shopName}`,
      text: [
        "New Matt4Tech Audit Request",
        "",
        `Market: ${industry}`,
        `Full name: ${fullName}`,
        `Shop: ${shopName}`,
        `Website: ${website || "Not provided"}`,
        `City / State: ${cityState}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone}`,
        `Google Ads history: ${triedBefore}`,
        `Previous result: ${previousResult || "Not provided"}`,
        `Daily ad budget: ${budget}`,
        `Expected value: ${valueExpectation || "Not provided"}`,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#111827">
          <h1 style="font-size:24px;border-bottom:3px solid #c7ff00;padding-bottom:12px">New Matt4Tech Audit Request</h1>
          <p style="font-size:14px"><strong>Market:</strong> ${escapeHtml(industry)}</p>
          <table style="width:100%;border-collapse:collapse">
            <tbody>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Full name</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(fullName)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Shop</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(shopName)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Website</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(website || "Not provided")}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>City / State</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(cityState)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Email</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(email)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Phone / WhatsApp</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(phone)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Google Ads history</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(triedBefore)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Previous result</strong></td><td style="padding:9px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(previousResult || "Not provided")}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Daily ad budget</strong></td><td style="padding:9px;border-bottom:1px solid #ddd">${escapeHtml(budget)}</td></tr>
              <tr><td style="padding:9px;border-bottom:1px solid #ddd"><strong>Expected value</strong></td><td style="padding:9px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(valueExpectation || "Not provided")}</td></tr>
            </tbody>
          </table>
          <p style="margin-top:20px;color:#6b7280;font-size:12px">Reply to this email to contact the lead directly.</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Unable to send your request right now." }, { status: 502 })
    }

    console.info("Matt4Tech form email accepted:", data?.id)
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Internal server error." }, { status: 500 })
  }
}
