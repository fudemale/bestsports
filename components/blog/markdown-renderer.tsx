"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown parser for basic formatting
  // For production, consider using a library like react-markdown or remark

  const processMarkdown = (text: string): React.ReactNode[] => {
    const lines = text.split("\n")
    const elements: React.ReactNode[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []
    let listItems: string[] = []
    let inList = false
    let inFaqSection = false
    let faqItems: Array<{ question: string; answer: string }> = []
    let currentFaqQuestion: string | null = null
    let currentFaqAnswer: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraph = currentParagraph.join(" ")
        elements.push(
          <p key={`p-${elements.length}`} className="text-muted-foreground leading-relaxed mb-4">
            {processInlineMarkdown(paragraph)}
          </p>
        )
        currentParagraph = []
      }
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground ml-4">
            {listItems.map((item, idx) => (
              <li key={idx}>{processInlineMarkdown(item)}</li>
            ))}
          </ul>
        )
        listItems = []
        inList = false
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre
            key={`code-${elements.length}`}
            className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto mb-6"
          >
            <code className="text-sm text-foreground">{codeBlockContent.join("\n")}</code>
          </pre>
        )
        codeBlockContent = []
        inCodeBlock = false
      }
    }

    const flushFaq = () => {
      if (currentFaqQuestion && currentFaqAnswer.length > 0) {
        faqItems.push({
          question: currentFaqQuestion,
          answer: currentFaqAnswer.join(" ").trim(),
        })
        currentFaqQuestion = null
        currentFaqAnswer = []
      }
    }

    const renderFaqSection = () => {
      if (faqItems.length === 0) return null

      return (
        <div key="faq-section" className="my-12 py-12 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none rounded-2xl"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border mb-4">
                <HelpCircle className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-wide text-muted-foreground">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card border border-white/10 rounded-xl px-6 bg-card/30"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {processInlineMarkdown(item.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      // Detect FAQ section start
      if (trimmed.match(/^##\s+(Frequently asked questions|FAQ)/i)) {
        flushParagraph()
        flushList()
        flushCodeBlock()
        if (!inFaqSection) {
          inFaqSection = true
          faqItems = []
        }
        // Render the FAQ heading but don't add it to elements yet
        return
      }

      // Process FAQ items
      if (inFaqSection) {
        // Detect end of FAQ section (next major heading)
        if (trimmed.startsWith("## ") && !trimmed.match(/frequently asked questions|faq/i)) {
          flushFaq()
          inFaqSection = false
          elements.push(renderFaqSection())
          faqItems = []
          // Continue processing the new heading
        } else {
          // Parse Q: and A: patterns
          // Match **Q: question** or Q: question (with or without bold)
          const qMatch = trimmed.match(/^\*\*Q:\s*(.+?)\*\*$/i) || trimmed.match(/^Q:\s*(.+)$/i)
          // Match A: answer
          const aMatch = trimmed.match(/^A:\s*(.+)$/i)

          if (qMatch) {
            flushFaq() // Save previous FAQ item before starting new one
            currentFaqQuestion = qMatch[1].trim()
            currentFaqAnswer = []
          } else if (aMatch && currentFaqQuestion) {
            // Start of answer
            currentFaqAnswer.push(aMatch[1].trim())
          } else if (trimmed && currentFaqQuestion && !trimmed.match(/^Q:/i) && !trimmed.match(/^A:/i)) {
            // Continue answer on next line (if not empty and not a new Q or A)
            if (trimmed.length > 0) {
              currentFaqAnswer.push(trimmed)
            }
          }
          return
        }
      }

      // Code blocks
      if (trimmed.startsWith("```")) {
        if (inCodeBlock) {
          flushCodeBlock()
        } else {
          flushParagraph()
          flushList()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // Headings
      if (trimmed.startsWith("# ")) {
        flushParagraph()
        flushList()
        const headingText = trimmed.slice(2)
        const id = headingText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
        elements.push(
          <h1
            key={`h1-${index}`}
            id={id}
            className="text-3xl md:text-4xl font-bold mb-4 mt-8 scroll-mt-24"
          >
            {headingText}
          </h1>
        )
        return
      }

      if (trimmed.startsWith("## ")) {
        flushParagraph()
        flushList()
        const headingText = trimmed.slice(3)
        const id = headingText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
        elements.push(
          <h2
            key={`h2-${index}`}
            id={id}
            className="text-2xl md:text-3xl font-bold mb-4 mt-8 scroll-mt-24"
          >
            {headingText}
          </h2>
        )
        return
      }

      if (trimmed.startsWith("### ")) {
        flushParagraph()
        flushList()
        const headingText = trimmed.slice(4)
        const id = headingText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
        elements.push(
          <h3
            key={`h3-${index}`}
            id={id}
            className="text-xl md:text-2xl font-semibold mb-3 mt-6 scroll-mt-24"
          >
            {headingText}
          </h3>
        )
        return
      }

      // Lists
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        flushParagraph()
        if (!inList) inList = true
        listItems.push(trimmed.slice(2))
        return
      }

      if (inList && trimmed === "") {
        flushList()
        return
      }

      // Empty lines
      if (trimmed === "") {
        flushParagraph()
        return
      }

      // Regular paragraph content
      currentParagraph.push(trimmed)
    })

    flushParagraph()
    flushList()
    flushCodeBlock()
    flushFaq()

    // If we're still in FAQ section at the end, render it
    if (inFaqSection && faqItems.length > 0) {
      elements.push(renderFaqSection())
    }

    return elements
  }

  const processInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []
    let lastIndex = 0

    // Process links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }

      const linkText = match[1]
      const linkUrl = match[2]
      const isInternal = linkUrl.startsWith("/")

      if (isInternal) {
        parts.push(
          <Link key={`link-${match.index}`} href={linkUrl} className="text-primary underline underline-offset-4 hover:text-primary/80">
            {linkText}
          </Link>
        )
      } else {
        parts.push(
          <a
            key={`link-${match.index}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {linkText}
          </a>
        )
      }

      lastIndex = match.index + match[0].length
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    // Process bold **text**
    const processedParts = parts.map((part, idx) => {
      if (typeof part === "string") {
        const boldRegex = /\*\*([^*]+)\*\*/g
        const boldParts: React.ReactNode[] = []
        let boldLastIndex = 0
        let boldMatch

        while ((boldMatch = boldRegex.exec(part)) !== null) {
          if (boldMatch.index > boldLastIndex) {
            boldParts.push(part.slice(boldLastIndex, boldMatch.index))
          }
          boldParts.push(
            <strong key={`bold-${idx}-${boldMatch.index}`} className="font-semibold text-foreground">
              {boldMatch[1]}
            </strong>
          )
          boldLastIndex = boldMatch.index + boldMatch[0].length
        }

        if (boldLastIndex < part.length) {
          boldParts.push(part.slice(boldLastIndex))
        }

        return boldParts.length > 1 ? <span key={`span-${idx}`}>{boldParts}</span> : boldParts[0] || part
      }
      return part
    })

    return <>{processedParts}</>
  }

  return <div className="prose prose-invert max-w-none">{processMarkdown(content)}</div>
}
