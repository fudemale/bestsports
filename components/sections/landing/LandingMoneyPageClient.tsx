"use client"

import { useEffect } from "react"
import { LandingPageTemplate } from "@/components/sections/landing"
import type { LandingPageContent } from "@/lib/landing-page-configs"

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

type Props = {
  content: LandingPageContent
}

export function LandingMoneyPageClient({ content }: Props) {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17762087158/OxEsCPqYxccbEPbhz5VC",
      })
    }
  }, [])

  return <LandingPageTemplate {...content} />
}

