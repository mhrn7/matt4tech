import Link from "next/link"

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base md:text-lg text-muted-foreground leading-8">{children}</p>
)

const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="scroll-mt-28 font-[var(--font-outfit)] text-2xl md:text-3xl font-black uppercase text-white mt-12 mb-5">
    {children}
  </h2>
)

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-[var(--font-outfit)] text-xl md:text-2xl font-bold text-white mt-8 mb-4">{children}</h3>
)

const BulletList = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="space-y-3 pl-5 list-disc marker:text-primary text-base md:text-lg text-muted-foreground leading-8">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
)

const NumberList = ({ items }: { items: React.ReactNode[] }) => (
  <ol className="space-y-3 pl-5 list-decimal marker:text-primary text-base md:text-lg text-muted-foreground leading-8">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ol>
)

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="border-l-4 border-primary bg-primary/5 p-5 md:p-6 my-8 text-base md:text-lg text-white leading-8">
    {children}
  </div>
)

export const articleToc: Record<string, { id: string; label: string }[]> = {
  "why-google-ads-reject-tech-repair-shop-ads": [
    { id: "why-google-treats-this-industry-differently", label: "Why Google Treats This Industry Differently" },
    { id: "common-reasons", label: "Common Reasons Campaigns Face Problems" },
    { id: "cleaner-campaign-structure", label: "What a Cleaner Campaign Structure Means" },
    { id: "specialized-structure", label: "Why Specialized Campaign Structure Matters" },
    { id: "pre-launch-review", label: "What to Review Before Launching" },
  ],
  "google-ads-for-cell-phone-repair-shops": [
    { id: "why-search-is-valuable", label: "Why Google Search Can Be Valuable" },
    { id: "service-area", label: "Start With the Real Service Area" },
    { id: "campaign-intent", label: "Organize Campaigns Around Intent" },
    { id: "landing-page", label: "Build a Landing Page for Calls" },
    { id: "tracking", label: "Track Calls and Forms" },
    { id: "business-outcomes", label: "Measure Business Outcomes" },
  ],
  "tech-repair-shop-google-ads-budget": [
    { id: "ad-spend-vs-management", label: "Advertising Spend vs. Management" },
    { id: "thirty-dollars", label: "Why $30 Per Day Is Practical" },
    { id: "competition", label: "How Competition Changes the Budget" },
    { id: "break-even", label: "Calculate a Break-Even Point" },
    { id: "testing-period", label: "Use a Testing Period" },
    { id: "budget-framework", label: "A Practical Budget Framework" },
  ],
}

export function ArticleContent({ slug }: { slug: string }) {
  if (slug === "why-google-ads-reject-tech-repair-shop-ads") return <PolicyArticle />
  if (slug === "google-ads-for-cell-phone-repair-shops") return <RepairShopGuide />
  if (slug === "tech-repair-shop-google-ads-budget") return <BudgetGuide />
  return null
}

function PolicyArticle() {
  return (
    <div className="space-y-5">
      <P>
        A legitimate repair shop can have a physical location, real technicians, strong customer reviews and years of experience — and still struggle to advertise on Google.
      </P>
      <P>
        For many owners, this feels contradictory. Customers are actively searching for help, competitors may appear in the results, and the business is real. Yet a new campaign can receive limited delivery, disapproved ads or additional account reviews.
      </P>
      <P>
        The problem is not always the quality of the shop. It is often the level of risk Google associates with the broader third-party consumer technical support category.
      </P>

      <H2 id="why-google-treats-this-industry-differently">Why Google Treats This Industry Differently</H2>
      <P>
        Google applies a specific advertising policy to third-party consumer technical support. Its guidance explicitly discusses repair services, hardware repairs, software installation and technical support in ads and landing pages.
      </P>
      <P>
        Review the official <a href="https://support.google.com/adspolicy/answer/13527027?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Google third-party consumer technical support policy</a>. The policy environment means repair-related campaigns can receive more scrutiny than ordinary local-service campaigns.
      </P>
      <P>
        Automated systems evaluate the relationship between the advertiser, ad copy, search terms, landing page, business identity and user experience. Those systems do not always interpret a trusted local repair shop the same way a human customer would.
      </P>

      <H2 id="common-reasons">Common Reasons Repair Shop Campaigns Face Problems</H2>
      <P>There is rarely one universal cause. Several areas deserve careful review.</P>

      <H3>1. High-Friction Language</H3>
      <P>
        Certain combinations of repair terms, manufacturer names, technical-support language and urgent claims may attract additional review. That does not mean the business should hide what it does. It means every claim should be accurate, focused and free from unsupported affiliation.
      </P>

      <H3>2. Unclear Business Identity</H3>
      <P>A landing page should make it easy to understand:</P>
      <BulletList items={[
        "who operates the business",
        "what services are provided",
        "where the business serves customers",
        "how customers can contact the shop",
        "whether the company is independent",
        "what happens after a call or form submission",
      ]} />
      <P>
        Pages with copied content, contradictory contact details or very little business information create unnecessary trust problems.
      </P>

      <H3>3. Manufacturer Confusion</H3>
      <P>
        Independent shops often service products made by major technology companies. Servicing a device does not automatically mean the shop is authorized by or affiliated with the manufacturer. Ads and landing pages should not imply a relationship that does not exist.
      </P>

      <H3>4. Inconsistent Information</H3>
      <P>
        Different company names, phone numbers, locations or service descriptions across the ad account, website and business profile can create confusion. The wording does not need to be identical everywhere, but the core business identity should be consistent.
      </P>

      <H3>5. Generic Campaign Automation</H3>
      <P>Automated setups can send limited local budgets toward searches for:</P>
      <BulletList items={[
        "DIY repair instructions",
        "repair courses and technician jobs",
        "replacement parts and tools",
        "free troubleshooting",
        "locations outside the service area",
        "products the shop does not service",
      ]} />
      <P>
        Search-term monitoring and negative-keyword control remain important. Read the <Link href="/blog/google-ads-for-cell-phone-repair-shops" className="text-primary underline underline-offset-4">practical Google Ads guide for cell phone repair shops</Link> for a broader view of campaign structure.
      </P>

      <H2 id="cleaner-campaign-structure">What a Cleaner Campaign Structure Means</H2>
      <P>
        A cleaner campaign is not a fake business, hidden identity or misleading landing page. It is a more focused structure that removes unnecessary confusion while representing the shop accurately.
      </P>
      <BulletList items={[
        "accurate business information",
        "a clear independent-shop identity",
        "focused service-area targeting",
        "carefully written advertisements",
        "relevant search themes",
        "transparent landing-page content",
        "clear contact options",
        "conversion tracking",
        "regular search-term reviews",
      ]} />
      <Callout>
        A cleaner, carefully structured campaign reduces unnecessary friction, cuts wasted traffic and creates a stronger foundation for stable delivery and profitable optimization.
      </Callout>

      <H2 id="specialized-structure">Why Specialized Campaign Structure Matters</H2>
      <P>
        Repair campaigns reward precision. Search intent, business identity, landing-page structure, targeting and tracking all need to work together. A specialist who already understands the category can move faster, identify weak points earlier and make stronger optimization decisions with the budget.
      </P>
      <P>
        Budget also matters; the <Link href="/blog/tech-repair-shop-google-ads-budget" className="text-primary underline underline-offset-4">repair shop Google Ads budget guide</Link> explains why enough daily spend gives the campaign better data and more room to optimize.
      </P>

      <H2 id="pre-launch-review">What to Review Before Launching a Campaign</H2>
      <NumberList items={[
        "Is the shop’s business identity clear?",
        "Is the service area accurate?",
        "Does the website work well on mobile?",
        "Can customers quickly find and tap the phone number?",
        "Are calls and forms tracked?",
        "Does the shop answer quickly?",
        "Are services described accurately?",
        "Are manufacturer relationships represented correctly?",
        "Is the budget large enough to collect meaningful data?",
        "Who will review search terms and campaign performance?",
      ]} />

      <H2 id="final-thoughts">Final Thoughts</H2>
      <P>
        Google Ads for tech repair shops rewards specialization and control. The strongest campaigns combine a clear business presentation, focused targeting, cleaner campaign architecture and disciplined optimization.
      </P>
      <P>
        A cleaner, carefully structured campaign reduces unnecessary friction and gives the account a stronger foundation for stable delivery, better traffic quality and profitable optimization over time.
      </P>
    </div>
  )
}

function RepairShopGuide() {
  return (
    <div className="space-y-5">
      <P>
        A person with a damaged device usually wants a solution quickly. They may search for a nearby business, compare reviews, check opening hours and call more than one shop within a few minutes.
      </P>
      <P>
        This makes local search attractive for cell phone repair businesses. The shop can appear while a potential customer is actively looking for help instead of interrupting someone who is not currently interested.
      </P>
      <P>
        But effective advertising requires more than a few keywords. It needs a system connecting search demand, campaign structure, landing-page quality, call tracking and customer service.
      </P>

      <H2 id="why-search-is-valuable">Why Google Search Can Be Valuable for Repair Shops</H2>
      <P>
        Social media is useful for awareness and staying visible. Google Search serves a different moment: the customer may already have a broken display, charging problem, battery issue, water damage or a device that will not turn on.
      </P>
      <P>
        That immediate intent can be valuable, but multiple local businesses may compete for the same customer. The campaign must therefore prioritize relevance and measurement rather than raw traffic volume.
      </P>
      <P>
        Repair advertising also operates inside a more restrictive policy environment. Read <Link href="/blog/why-google-ads-reject-tech-repair-shop-ads" className="text-primary underline underline-offset-4">why Google Ads rejects some tech repair shop ads</Link> before planning a launch.
      </P>

      <H2 id="service-area">Start With the Shop’s Real Service Area</H2>
      <P>A repair shop does not need clicks from an entire state if most customers only travel a few miles. Define:</P>
      <BulletList items={[
        "the physical shop location",
        "cities and neighborhoods normally served",
        "the maximum realistic travel distance",
        "whether mobile service is offered",
        "whether mail-in repairs are available",
        "areas that should be excluded",
      ]} />
      <P>
        Location targeting should reflect actual customer behavior. More traffic is not automatically better traffic.
      </P>

      <H2 id="campaign-intent">Organize Campaigns Around Customer Intent</H2>
      <P>
        A common mistake is placing every service inside one broad campaign. This makes it difficult to see which searches, services and locations generate useful opportunities.
      </P>
      <P>A controlled structure may separate demand by:</P>
      <BulletList items={[
        "general local service intent",
        "device categories",
        "service categories",
        "higher-value opportunities",
        "physical locations",
        "different geographic areas",
      ]} />
      <P>
        The exact structure depends on the business and policy environment. The principle is control: the advertiser should understand where the budget is going and what customer actions are being generated.
      </P>

      <H3>Avoid Paying for the Wrong Searches</H3>
      <P>Repair-related keywords can attract people looking for:</P>
      <BulletList items={[
        "repair jobs and technician salaries",
        "courses and certification",
        "free troubleshooting",
        "parts, tools and wholesale screens",
        "DIY instructions",
        "manufacturer support",
        "services outside the shop’s location",
      ]} />
      <P>
        Negative keywords should be reviewed continuously. New irrelevant searches can appear as the campaign collects data.
      </P>

      <H2 id="landing-page">Build a Landing Page for Calls</H2>
      <P>A useful repair shop landing page should quickly answer:</P>
      <BulletList items={[
        "What does this business do?",
        "Is the shop located near me?",
        "Is it open?",
        "Can I call now?",
        "Can I request a quote?",
        "Why should I trust this shop?",
        "What happens after I contact it?",
      ]} />
      <P>
        Important elements include a clear headline, visible click-to-call button, city and service area, opening hours, map information, real shop photos when available, a short service explanation, fast mobile performance and a simple quote form.
      </P>
      <Callout>
        The landing page should not force a customer with urgent intent to read a long company history before finding the phone number.
      </Callout>

      <H2 id="tracking">Track Calls and Forms Correctly</H2>
      <P>
        Without tracking, an owner may only see clicks and impressions. Those metrics do not show how many customers actually made contact.
      </P>
      <P>A stronger measurement system attempts to track:</P>
      <BulletList items={[
        "calls from advertisements",
        "calls from the landing page",
        "quote-form submissions",
        "booked appointments",
        "completed repair jobs",
        "estimated attributed revenue",
      ]} />
      <P>
        Not every call is qualified. Existing customers, suppliers, job seekers and unsupported-service inquiries should be separated from useful customer opportunities whenever possible.
      </P>

      <H3>Call Handling Can Determine Profitability</H3>
      <P>
        A campaign can generate legitimate demand and still look unsuccessful if calls are not answered. Shops should review callback speed, staff qualification questions, quote follow-up and whether the final outcome is recorded.
      </P>
      <P>
        A missed call may be a customer who immediately contacts the next shop in the search results.
      </P>

      <H3>Use a Budget Large Enough to Learn</H3>
      <P>
        If the campaign only receives a few clicks, it becomes difficult to identify useful searches, locations, times of day and ads. For many shops, approximately $30 per day is a more practical starting point than a very small experimental budget.
      </P>
      <P>
        Competitive markets may require more investment to capture enough search volume. Review the full <Link href="/blog/tech-repair-shop-google-ads-budget" className="text-primary underline underline-offset-4">Google Ads budget framework for tech repair shops</Link>.
      </P>

      <H2 id="business-outcomes">Measure Business Outcomes</H2>
      <P>The complete progression is:</P>
      <NumberList items={[
        "Search",
        "Click",
        "Call or form",
        "Qualified customer",
        "Store visit or appointment",
        "Completed repair",
        "Revenue",
        "Repeat customer or referral",
      ]} />
      <P>
        The most useful question is not “How many clicks did we get?” It is “How many profitable repair opportunities did the campaign help create?”
      </P>

      <H2 id="final-thoughts">Final Thoughts</H2>
      <P>
        Google Ads can help an established repair shop reach customers with immediate local intent. It works best when supported by controlled targeting, useful negative keywords, a conversion-focused landing page, reliable tracking, consistent optimization and strong customer service.
      </P>
      <P>The advertisement is only the beginning. Profitability is created by the full system connecting the search to a completed repair.</P>
    </div>
  )
}

function BudgetGuide() {
  return (
    <div className="space-y-5">
      <P>
        One of the first questions repair shop owners ask is: “How much should I spend on Google Ads?” The honest answer is that there is no universal number.
      </P>
      <P>
        A shop in a major metropolitan area faces a different market from a shop in a smaller city. Competition, population, services, reputation, opening hours and customer value all influence the budget.
      </P>
      <P>There are, however, practical principles that can help an owner choose a realistic starting point.</P>

      <H2 id="ad-spend-vs-management">Separate Advertising Spend From Management</H2>
      <H3>Advertising Spend</H3>
      <P>This is the money paid directly to Google for clicks and campaign traffic.</P>
      <P>
        Campaign strategy, setup, landing-page work, tracking, search-term reviews, optimization and reporting should be evaluated as part of the overall growth plan, separately from the daily amount paid to Google for advertising.
      </P>
      <P>This keeps the decision focused on the advertising budget available for the market. The exact daily budget should match the shop, location and search demand.</P>

      <H2 id="thirty-dollars">Why $30 Per Day Is a Practical Starting Point</H2>
      <P>
        A budget of $30 per day is approximately $900 over a 30-day month. At that level, a campaign begins with enough room to collect meaningful search and conversion data while giving optimization decisions a stronger statistical base.
      </P>
      <P>A campaign needs enough activity to evaluate:</P>
      <BulletList items={[
        "search terms",
        "locations",
        "devices and services",
        "time periods",
        "advertisements",
        "landing-page performance",
        "call quality",
        "conversion trends",
      ]} />
      <P>
        With too little data, one conversion can make the campaign look excellent, while a few irrelevant clicks can make it look terrible. Neither conclusion may be reliable.
      </P>

      <H2 id="competition">How Market Competition Changes the Budget</H2>
      <P>The cost of attracting a customer is influenced by competition from:</P>
      <BulletList items={[
        "independent local stores",
        "regional and national repair chains",
        "electronics retailers",
        "device manufacturers",
        "mobile carriers",
        "lead-generation websites",
      ]} />
      <P>
        A larger city does not automatically produce better economics. It may offer more searches but also more advertisers competing for those searches.
      </P>
      <P>
        A focused campaign structure is important when budget is limited. The <Link href="/blog/google-ads-for-cell-phone-repair-shops" className="text-primary underline underline-offset-4">cell phone repair shop Google Ads guide</Link> explains how service area and customer intent affect campaign design.
      </P>

      <H3>Service Value Matters</H3>
      <P>Not all repairs have the same economic value. Consider:</P>
      <BulletList items={[
        "average repair ticket",
        "gross profit after parts and direct labor",
        "technician time",
        "chance of an upsell",
        "repeat-business potential",
        "referral value",
      ]} />
      <P>
        The correct question is not “How cheap can each lead be?” It is “How much can the shop profitably invest to acquire a completed repair?”
      </P>

      <H2 id="break-even">Calculate a Basic Break-Even Point</H2>
      <P>Assume, only as an illustration:</P>
      <BulletList items={[
        "average repair revenue: $180",
        "gross profit after parts and direct labor: $90",
        "one out of every three qualified leads becomes a completed repair",
      ]} />
      <P>
        In this simplified model, three qualified leads produce approximately $90 in gross profit from one completed job. That suggests a break-even qualified lead cost near $30 before considering overhead, repeat business or referrals.
      </P>
      <Callout>
        This is an example, not an industry benchmark. Every shop should calculate its own numbers using real sales and margin data.
      </Callout>

      <H3>Clicks Are Not Customers</H3>
      <P>A customer still needs to:</P>
      <NumberList items={[
        "search",
        "notice the advertisement",
        "click",
        "trust the landing page",
        "call or submit a form",
        "receive a useful response",
        "accept the price",
        "visit the shop",
        "complete the repair",
      ]} />
      <P>
        Increasing budget will not fix unanswered calls, a slow website, weak reviews, incorrect opening hours or poor follow-up.
      </P>

      <H2 id="testing-period">Use a Testing Period</H2>
      <P>A practical testing process can include:</P>
      <H3>Phase 1 — Initial Data</H3>
      <P>Review search terms, targeting, calls and landing-page behavior.</P>
      <H3>Phase 2 — Traffic Refinement</H3>
      <P>Reduce irrelevant searches, adjust locations and improve advertisements.</P>
      <H3>Phase 3 — Conversion Improvement</H3>
      <P>Improve the landing page, call handling and quote process.</P>
      <H3>Phase 4 — Scaling</H3>
      <P>Increase budget only when the campaign is producing useful opportunities and the shop can handle additional demand.</P>

      <H3>When to Increase the Budget</H3>
      <BulletList items={[
        "the campaign is regularly limited by budget",
        "search terms are relevant",
        "qualified calls are being generated",
        "the shop converts calls into completed repairs",
        "customer-acquisition cost is profitable",
        "tracking is reliable",
      ]} />

      <H3>When to Reduce or Rebuild</H3>
      <BulletList items={[
        "most searches are irrelevant",
        "leads are outside the service area",
        "calls are low quality",
        "tracking is not functioning",
        "the landing page is not converting",
        "the shop does not answer calls",
        "profitability cannot be measured",
      ]} />
      <P>
        Spending more money on a weak system usually makes the problem larger. Policy friction can also affect campaign stability; see <Link href="/blog/why-google-ads-reject-tech-repair-shop-ads" className="text-primary underline underline-offset-4">why legitimate repair shop ads may face disapprovals</Link>.
      </P>

      <H2 id="budget-framework">A Practical Budget Framework</H2>
      <NumberList items={[
        "How much can the shop invest consistently for at least three months?",
        "What is the average gross profit from a completed repair?",
        "What percentage of qualified leads becomes customers?",
        "How many additional repairs can the team handle?",
      ]} />
      <P>
        For an established shop, approximately $30 per day can be a reasonable minimum test budget. More competitive locations may require a higher investment to gather enough data and capture meaningful demand.
      </P>

      <H2 id="final-thoughts">Final Thoughts</H2>
      <P>
        The correct Google Ads budget is not simply the smallest possible number. It is the amount that allows the shop to gather useful data, generate customer opportunities and evaluate profitability without creating financial pressure.
      </P>
      <P>
        Start focused, track completed repairs and use real business outcomes — not clicks alone — to decide whether the budget should increase.
      </P>
    </div>
  )
}
