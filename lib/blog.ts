export type BlogCategory = "Google Ads" | "Repair Shop Marketing" | "Lead Generation" | "Campaign Strategy"

export interface BlogPost {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  excerpt: string
  category: BlogCategory
  author: string
  datePublished: string
  dateModified: string
  readingTime: string
  image: string
  imageAlt: string
  keywords: string[]
  related: string[]
}

export const categories: BlogCategory[] = [
  "Google Ads",
  "Repair Shop Marketing",
  "Lead Generation",
  "Campaign Strategy",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "why-google-ads-reject-tech-repair-shop-ads",
    title: "Why Google Ads Rejects Tech Repair Shop Ads",
    seoTitle: "Why Google Ads Rejects Tech Repair Shop Ads",
    metaDescription:
      "Learn why legitimate tech repair shop ads face Google Ads disapprovals and how cleaner campaign structures can reduce unnecessary friction.",
    excerpt:
      "Legitimate repair shops often face confusing Google Ads rejections. Understand why this happens and which parts of the campaign deserve attention.",
    category: "Google Ads",
    author: "Matt Neves",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    readingTime: "8 min read",
    image: "/blog/google-ads-policy-friction.png",
    imageAlt: "Abstract illustration of an advertising policy review scanning campaign cards",
    keywords: [
      "Google Ads rejected tech repair shop",
      "Google Ads repair shop disapproved",
      "third-party consumer technical support Google Ads",
      "tech repair shop advertising",
      "Google Ads for repair shops",
    ],
    related: ["google-ads-for-cell-phone-repair-shops", "tech-repair-shop-google-ads-budget"],
  },
  {
    slug: "google-ads-for-cell-phone-repair-shops",
    title: "Google Ads for Cell Phone Repair Shops: A Practical Guide",
    seoTitle: "Google Ads for Cell Phone Repair Shops: Full Guide",
    metaDescription:
      "Learn how cell phone repair shops can use Google Ads, landing pages and call tracking to generate more qualified local customer opportunities.",
    excerpt:
      "A practical guide to building a measurable Google Ads customer acquisition system for an independent cell phone repair shop.",
    category: "Lead Generation",
    author: "Matt Neves",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    readingTime: "10 min read",
    image: "/blog/local-lead-generation.png",
    imageAlt: "Abstract illustration of local search demand converging into qualified calls",
    keywords: [
      "Google Ads for cell phone repair shops",
      "cell phone repair advertising",
      "phone repair shop marketing",
      "repair shop lead generation",
      "Google Ads repair shop",
      "local marketing for phone repair shops",
    ],
    related: ["why-google-ads-reject-tech-repair-shop-ads", "tech-repair-shop-google-ads-budget"],
  },
  {
    slug: "tech-repair-shop-google-ads-budget",
    title: "How Much Should a Tech Repair Shop Spend on Google Ads?",
    seoTitle: "How Much Should Repair Shops Spend on Google Ads?",
    metaDescription:
      "Understand how to set a practical Google Ads budget for a tech repair shop and evaluate costs using calls, booked jobs and repair revenue.",
    excerpt:
      "Learn how market size, competition, repair value and call handling affect the right Google Ads budget for your shop.",
    category: "Campaign Strategy",
    author: "Matt Neves",
    datePublished: "2026-08-04",
    dateModified: "2026-08-04",
    readingTime: "9 min read",
    image: "/blog/ads-budget-strategy.png",
    imageAlt: "Abstract illustration of an ascending bar chart and budget gauge",
    keywords: [
      "Google Ads budget for repair shop",
      "cell phone repair advertising cost",
      "tech repair shop marketing budget",
      "Google Ads cost for phone repair",
      "repair shop cost per lead",
      "how much to spend on Google Ads repair shop",
    ],
    related: ["google-ads-for-cell-phone-repair-shops", "why-google-ads-reject-tech-repair-shop-ads"],
  },
]

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string): BlogPost[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  return post.related
    .map((relatedSlug) => getPostBySlug(relatedSlug))
    .filter((p): p is BlogPost => Boolean(p))
}

export function formatDate(dateString: string): string {
  return new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
