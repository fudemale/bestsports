import type { Metadata } from "next"
import { LandingPageTemplate } from "@/components/sections/landing"
import { FaqStructuredData } from "@/components/seo/FaqStructuredData"
import { ReviewsStructuredData } from "@/components/seo/ReviewsStructuredData"
import { createLandingMetadata, landingPageContent } from "@/lib/landing-page-configs"
import { SITE_URL } from "@/lib/constants"

const slug = "iptv-subscription"
const content = landingPageContent[slug]

export const metadata: Metadata = createLandingMetadata(content)

export default function Page() {
  const pageUrl = `${SITE_URL}${content.path}`
  return (
    <>
      <LandingPageTemplate {...content} />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl mt-8">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs md:text-sm text-muted-foreground">
          <span className="text-base">⭐️⭐️⭐️⭐️⭐️</span>
          <span>Average rating 4.8/5 from subscribers who use VWatch for their main IPTV subscription.</span>
        </div>
      </div>
      <FaqStructuredData faqs={content.faqs} pageUrl={pageUrl} />
      <ReviewsStructuredData url={pageUrl} ratingValue={4.9} ratingCount={10000} />
    </>
  )
}
