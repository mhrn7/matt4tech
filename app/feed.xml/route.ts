import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char] || char)
}

export function GET() {
  const items = getAllPosts().map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid>${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.datePublished + "T12:00:00Z").toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`).join("")

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${siteConfig.name} Blog</title>
      <link>${siteConfig.url}/blog</link>
      <description>${escapeXml(siteConfig.description)}</description>
      <language>en-us</language>
      ${items}
    </channel>
  </rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
