import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { getAllPosts, formatDate } from "@/lib/blog"

export function BlogSection() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section id="blog" className="py-16 md:py-24 bg-surface relative z-10 px-4 border-t border-border scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16 border-b border-border pb-6 gap-4" data-aos="fade-up">
          <div>
            <h2 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-black uppercase text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Practical articles on Google Ads for independent tech repair shops.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex text-primary font-[var(--font-outfit)] font-bold uppercase tracking-widest text-xs items-center gap-2 hover:text-white transition shrink-0"
          >
            View All Articles <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={post.slug} className="card-border p-0 group flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
              <Link href={`/blog/${post.slug}`} className="block h-44 overflow-hidden relative border-b border-border">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-[var(--font-outfit)] font-bold uppercase tracking-widest text-[10px] px-3 py-1">
                  {post.category}
                </span>
              </Link>
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-[var(--font-outfit)] uppercase tracking-widest mb-3">
                  <span>{formatDate(post.datePublished)}</span>
                  <span aria-hidden="true">&bull;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="font-[var(--font-outfit)] text-lg md:text-xl font-black uppercase mb-3 group-hover:text-primary transition leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-white font-[var(--font-outfit)] font-bold uppercase text-xs tracking-widest hover:text-primary transition"
                >
                  Read Article <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
