import type { Metadata } from "next"
import { LandingPageTemplate } from "@/components/sections/landing"
import { BRAND_NAME, buildCampaignCtaUrl, SITE_URL } from "@/lib/constants"

const keyword = "Best IPTV Service 2025"
const slug = "best-iptv-service-2025"
const ctaUrl = buildCampaignCtaUrl(slug)

export const metadata: Metadata = {
  title: `${keyword} | ${BRAND_NAME}`,
  description: "Dedicated landing experience for geo and keyword campaigns promoting Best Sports IPTV coverage.",
  alternates: {
    canonical: `${SITE_URL}/landing`,
  },
  openGraph: {
    title: `${keyword} | ${BRAND_NAME}`,
    description: "Dedicated landing experience for geo and keyword campaigns promoting Best Sports IPTV coverage.",
    url: `${SITE_URL}/landing`,
    siteName: BRAND_NAME,
    images: [`${SITE_URL}/placeholder.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: `${keyword} | ${BRAND_NAME}`,
    description: "Dedicated landing experience for geo and keyword campaigns promoting Best Sports IPTV coverage.",
    images: [`${SITE_URL}/placeholder.jpg`],
  },
}

const comparisonTable = {
  brandLabel: BRAND_NAME,
  competitorLabels: ["Cable TV", "Generic IPTV"],
  rows: [
    { feature: "Monthly Cost", brand: "$14.99", competitors: ["$120+", "$35+"] },
    { feature: "4K Match Streams", brand: true, competitors: [false, "Sometimes"] },
    { feature: "Global Sports Rights", brand: "Worldwide", competitors: ["Region-Locked", "Partial"] },
    { feature: "Device Support", brand: "TV, Mobile, Web", competitors: ["Cable Box Only", "Android Only"] },
    { feature: "Support", brand: "24/7 Experts", competitors: ["Business Hours", "Ticket Only"] },
  ],
}

const faqs = [
  {
    question: `Why is ${keyword} better than cable?`,
    answer: "You get every major league, PPV, and replay without overpriced bundles or hardware rentals.",
  },
  {
    question: "How fast is activation?",
    answer: "Activation is instant—your credentials arrive by email within minutes of checkout.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. All Best Sports IPTV plans are contract-free with a 30-day money-back guarantee.",
  },
]

export default function LandingPage() {
  return (
    <LandingPageTemplate
      title="Targeted Sports Campaign"
      description="Build authority for geo and PPC campaigns promoting the Best IPTV Service for 2025 sports fans."
      keyword={keyword}
      benefits={[
        "Geo-targeted sports playlists ready for SEO landing funnels",
        "Optimized ad relevance for 2025 sports audiences",
        "High-converting structure for paid traffic",
      ]}
      comparisonTable={comparisonTable}
      faqs={faqs}
      ctaUrl={ctaUrl}
      ogImage="/placeholder.jpg"
    />
  )
}
