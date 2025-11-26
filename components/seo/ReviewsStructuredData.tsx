import { BRAND_NAME } from "@/lib/constants"

interface ReviewsStructuredDataProps {
  url: string
  ratingValue: number
  ratingCount: number
}

export function ReviewsStructuredData({ url, ratingValue, ratingCount }: ReviewsStructuredDataProps) {
  if (!url || !ratingValue || ratingCount === 0) {
    return null
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: BRAND_NAME,
    url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toString(),
      reviewCount: ratingCount,
      bestRating: "5",
      worstRating: "1",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

