"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { BlogPost, categories, formatDate } from "@/lib/blog"

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category
      const haystack = `${post.title} ${post.excerpt} ${post.keywords.join(" ")}`.toLowerCase()
      return matchesCategory && (!normalized || haystack.includes(normalized))
    })
  }, [posts, query, category])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 mb-10">
        <label className="relative block">
          <span className="sr-only">Search articles</span>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by topic or keyword"
            className="w-full bg-surface border border-border pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
          />
        </label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="bg-surface border border-border px-4 py-3 text-sm text-white focus:outline-none focus:border-primary min-w-56"
          aria-label="Filter articles by category"
        >
          <option value="All">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article key={post.slug} className="card-border overflow-hidden group flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block h-48 overflow-hidden relative border-b border-border">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground font-[var(--font-outfit)] font-bold uppercase tracking-widest text-[10px] px-3 py-1">
                  {post.category}
                </span>
              </Link>
              <div className="p-6 flex flex-col grow">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  {formatDate(post.datePublished)} · {post.readingTime}
                </div>
                <h2 className="font-[var(--font-outfit)] text-xl font-black uppercase leading-tight mb-3 group-hover:text-primary transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-flex items-center gap-2 text-xs font-[var(--font-outfit)] font-bold uppercase tracking-widest hover:text-primary transition"
                >
                  Read Article <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card-border p-10 text-center text-muted-foreground">
          No articles match this search.
        </div>
      )}
    </>
  )
}
