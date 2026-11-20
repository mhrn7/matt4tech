"use client"

import type { MouseEvent, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AuditCtaLinkProps {
  className?: string
  children?: ReactNode
  onNavigate?: () => void
}

const FORM_ID = "request-review"

function scrollToAuditForm() {
  const target = document.getElementById(FORM_ID)

  if (!target) {
    window.location.assign(`/#${FORM_ID}`)
    return
  }

  const header = document.querySelector("header")
  const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80
  const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12

  window.history.replaceState(null, "", `#${FORM_ID}`)
  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  })
}

export function AuditCtaLink({ className, children = "Get My Free Audit", onNavigate }: AuditCtaLinkProps) {
  const pathname = usePathname()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.()

    if (pathname !== "/") {
      event.preventDefault()
      window.location.assign(`/#${FORM_ID}`)
      return
    }

    event.preventDefault()

    // The mobile menu locks body scrolling. Clear it before scrolling to the form.
    document.body.style.overflow = ""

    window.requestAnimationFrame(() => {
      window.setTimeout(scrollToAuditForm, 60)
    })
  }

  return (
    <Link href={`/#${FORM_ID}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}
