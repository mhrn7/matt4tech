import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date("2026-08-04"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/hvac`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date("2026-08-04"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/privacy-policy`, lastModified: new Date("2026-08-04"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/terms-of-service`, lastModified: new Date("2026-08-04"), changeFrequency: "yearly", priority: 0.2 },
  ]

  const articlePages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
