import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { ArticleContent, articleToc } from "@/components/blog/article-content"
import { formatDate, getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site"
import { AuditCtaLink } from "@/components/landing/audit-cta-link"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const canonical = `${siteConfig.url}/blog/${post.slug}`

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [{ url: `${siteConfig.url}${post.image}`, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [`${siteConfig.url}${post.image}`],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const posts = getAllPosts()
  const currentIndex = posts.findIndex((item) => item.slug === slug)
  const previous = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
  const related = getRelatedPosts(slug)
  const canonical = `${siteConfig.url}/blog/${post.slug}`

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    mainEntityOfPage: canonical,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-28 pb-20 min-h-screen">
        <article>
          <header className="px-4">
            <div className="container mx-auto max-w-5xl">
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-8">
                <Link href="/" className="hover:text-primary transition">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary transition">Blog</Link>
                <span>/</span>
                <span className="text-white line-clamp-1">{post.title}</span>
              </nav>

              <div className="max-w-4xl">
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-[10px] font-[var(--font-outfit)] font-bold uppercase tracking-widest mb-5">
                  {post.category}
                </span>
                <h1 className="font-[var(--font-outfit)] text-4xl md:text-6xl font-black uppercase leading-[1.02] tracking-tight text-balance mb-5">
                  {post.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground mb-10">
                  <span>By {post.author}</span>
                  <span>Published {formatDate(post.datePublished)}</span>
                  <span>Updated {formatDate(post.dateModified)}</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <div className="relative aspect-[16/8] md:aspect-[16/7] border border-border overflow-hidden">
                <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1200px) 100vw, 1100px" className="object-cover" />
              </div>
            </div>
          </header>

          <div className="px-4 mt-12 md:mt-16">
            <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
              <aside className="lg:sticky lg:top-28 card-border p-5">
                <p className="font-[var(--font-outfit)] text-xs font-bold uppercase tracking-widest text-primary mb-4">Table of Contents</p>
                <nav className="space-y-3 text-sm" aria-label="Article table of contents">
                  {(articleToc[slug] || []).map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block text-muted-foreground hover:text-white transition leading-snug">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="min-w-0">
                <ArticleContent slug={slug} />

                <div className="card-border p-7 md:p-9 mt-12">
                  <p className="font-[var(--font-outfit)] text-xs font-bold uppercase tracking-widest text-primary mb-3">Free Campaign Audit</p>
                  <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black uppercase mb-3">
                    Turn Google Search Into a Stronger Acquisition Channel
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Request a free audit of your current website, local market and previous advertising setup. Get a clear view of the strongest opportunities to generate more qualified local demand.
                  </p>
                  <AuditCtaLink className="btn-primary inline-flex px-7 py-4 font-[var(--font-outfit)] font-bold uppercase tracking-wider text-sm">
                    Request a Free Audit
                  </AuditCtaLink>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="px-4 mt-16">
          <div className="container mx-auto max-w-5xl border-t border-border pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {previous ? (
                <Link href={`/blog/${previous.slug}`} className="card-border p-5 hover:border-primary transition">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground"><FontAwesomeIcon icon={faArrowLeft} /> Previous article</span>
                  <span className="block font-[var(--font-outfit)] font-bold uppercase mt-2">{previous.title}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="card-border p-5 hover:border-primary transition sm:text-right">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Next article <FontAwesomeIcon icon={faArrowRight} /></span>
                  <span className="block font-[var(--font-outfit)] font-bold uppercase mt-2">{next.title}</span>
                </Link>
              ) : <div />}
            </div>

            <h2 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-black uppercase mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="card-border p-6 hover:border-primary transition group">
                  <span className="text-[10px] uppercase tracking-widest text-primary">{item.category}</span>
                  <h3 className="font-[var(--font-outfit)] text-lg font-bold uppercase mt-2 group-hover:text-primary transition">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.excerpt}</p>
                </Link>
              ))}
            </div>

            <Link href="/blog" className="inline-flex items-center gap-2 mt-10 text-sm font-[var(--font-outfit)] font-bold uppercase tracking-widest hover:text-primary transition">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
