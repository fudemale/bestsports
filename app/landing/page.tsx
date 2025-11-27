import type { Metadata } from "next"
import { LandingMoneyPageClient } from "@/components/sections/landing/LandingMoneyPageClient"
import { FaqStructuredData } from "@/components/seo/FaqStructuredData"
import { createLandingMetadata, landingPageContent } from "@/lib/landing-page-configs"
import { SITE_URL } from "@/lib/constants"

const slug = "landing"
const content = landingPageContent[slug]

export const metadata: Metadata = createLandingMetadata(content)

export default function Page() {
  const pageUrl = `${SITE_URL}${content.path}`
  return (
    <>
      <LandingMoneyPageClient content={content} />
      <FaqStructuredData faqs={content.faqs} pageUrl={pageUrl} />
    </>
  )
}
