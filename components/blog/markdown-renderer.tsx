import Link from "next/link"

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

    lines.forEach((line, index) => {
      const trimmed = line.trim()

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
