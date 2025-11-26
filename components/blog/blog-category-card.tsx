import type React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Star } from "lucide-react"
import type { BlogCategory } from "@/lib/blog-types"

interface BlogCategoryCardProps {
  category: BlogCategory
  postCount: number
  displayName: string
  description: string
}

const categoryIcons: Record<BlogCategory, React.ReactNode> = {
  guides: <BookOpen className="h-6 w-6" />,
  tutorials: <GraduationCap className="h-6 w-6" />,
  reviews: <Star className="h-6 w-6" />,
}

export function BlogCategoryCard({ category, postCount, displayName, description }: BlogCategoryCardProps) {
  return (
    <Link href={`/blog/${category}`} className="group">
      <div className="glass-card rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-primary/20 text-primary">{categoryIcons[category]}</div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{displayName}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
            <div className="text-xs text-muted-foreground mb-4">{postCount} articles</div>
          </div>
        </div>
        <div className="mt-auto pt-4 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
          <span className="font-medium">Explore {displayName}</span>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  )
}
