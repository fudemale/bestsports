"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

type BlogFaqSectionProps = {
  content: string
}

export function BlogFaqSection({ content }: BlogFaqSectionProps) {
  // Parse FAQs from markdown content
  // Look for FAQ section with Q: and A: format
  // Pattern matches: **Q: question** followed by A: answer
  const faqSectionMatch = content.match(/##\s+Frequently asked questions.*?(?=##|$)/is)
  
  if (!faqSectionMatch) {
    return null
  }

  const faqSection = faqSectionMatch[0]
  const faqRegex = /\*\*Q:\s*(.+?)\*\*\s*\n\s*A:\s*(.+?)(?=\n\s*\*\*Q:|##|$)/gs
  const faqs: Array<{ question: string; answer: string }> = []

  let match
  while ((match = faqRegex.exec(faqSection)) !== null) {
    faqs.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    })
  }

  // If no FAQs found, return null
  if (faqs.length === 0) {
    return null
  }

  return (
    <section className="py-12 mt-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-wide text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about IPTV UK services, legal considerations, and setup.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-border rounded-xl px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

