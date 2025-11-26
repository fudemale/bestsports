"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  id?: string
  title?: string
  items?: FaqItem[]
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is IPTV?",
    answer:
      "IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cable or satellite. It offers more flexibility, better quality, and often lower costs.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Our IPTV service works on Smart TVs, Android devices, iOS, FireStick, Android TV boxes, and computers. Most modern devices are compatible.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free test period so you can try our service before committing. Contact our support team to get started.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K content. Higher speeds provide better stability.",
  },
  {
    question: "Can I watch on multiple devices?",
    answer:
      "Yes, depending on your plan. Our annual plan includes 2 simultaneous connections, allowing you to watch on different devices at the same time.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes, we provide 24/7 technical support to help with setup, troubleshooting, and any questions you may have about the service.",
  },
]

export function FaqSection({ id = "faq", title = "Frequently Asked Questions", items = defaultFaqs }: FaqSectionProps) {
  return (
    <section id={id} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-wide text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our IPTV service, setup, and features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-border rounded-xl px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
