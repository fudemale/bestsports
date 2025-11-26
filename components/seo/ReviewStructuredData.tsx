interface ReviewStructuredDataProps {
  url: string
}

export function ReviewStructuredData({ url }: ReviewStructuredDataProps) {
  if (!url) {
    return null
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VWatch IPTV Subscription",
    url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James W.",
        },
        reviewBody: "I finally stopped switching IPTV providers every few months. VWatch has been rock-solid for Premier League and UCL.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Maria L.",
        },
        reviewBody: "Movies, series, live sports – everything just works. Setup on FireStick took less than five minutes.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ahmed R.",
        },
        reviewBody: "Streams stay stable even during big games. Support replied in minutes when I needed help with my app.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

