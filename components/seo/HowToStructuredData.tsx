export type HowToStep = {
  title: string
  description: string
  imageUrl?: string
}

interface HowToStructuredDataProps {
  name: string // main how-to title
  description: string // short description
  url: string // canonical URL of the page
  steps: HowToStep[]
}

export function HowToStructuredData({ name, description, url, steps }: HowToStructuredDataProps) {
  if (!steps || steps.length === 0) {
    return null
  }

  // Extract base URL from the page URL
  const baseUrl = url.split("/").slice(0, 3).join("/")

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    step: steps.map((step, index) => {
      const stepData: {
        "@type": "HowToStep"
        position: number
        name: string
        text: string
        image?: string
      } = {
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      }

      if (step.imageUrl) {
        stepData.image = step.imageUrl.startsWith("http") ? step.imageUrl : `${baseUrl}${step.imageUrl}`
      }

      return stepData
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

