import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import type { BlogCategory } from "@/lib/blog-types"

interface BlogBreadcrumbsProps {
  category?: BlogCategory
  postTitle?: string
  categoryDisplayName?: string
}

export function BlogBreadcrumbs({ category, postTitle, categoryDisplayName }: BlogBreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
      <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/blog" className="hover:text-primary transition-colors">
        Blog
      </Link>
      {category && (
        <>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/blog/${category}`} className="hover:text-primary transition-colors">
            {categoryDisplayName || category}
          </Link>
        </>
      )}
      {postTitle && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{postTitle}</span>
        </>
      )}
    </nav>
  )
}
