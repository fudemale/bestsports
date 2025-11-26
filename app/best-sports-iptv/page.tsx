import type { Metadata } from "next"
import { LandingPageTemplate } from "@/components/sections/landing"
import { FaqStructuredData } from "@/components/seo/FaqStructuredData"
import { createLandingMetadata, landingPageContent } from "@/lib/landing-page-configs"
import { SITE_URL } from "@/lib/constants"

const slug = "best-sports-iptv"
const content = landingPageContent[slug]

export const metadata: Metadata = createLandingMetadata(content)

export default function Page() {
  const pageUrl = `${SITE_URL}${content.path}`
  return (
    <>
      <LandingPageTemplate {...content} />
      <FaqStructuredData faqs={content.faqs} pageUrl={pageUrl} />
    </>
  )
}
