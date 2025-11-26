import type { FaqItem } from "@/components/sections/home/faq-section"

interface FaqStructuredDataProps {
  faqs: FaqItem[]
  pageUrl: string
}

export function FaqStructuredData({ faqs, pageUrl: _pageUrl }: FaqStructuredDataProps) {
  if (!faqs || faqs.length === 0) {
    return null
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

