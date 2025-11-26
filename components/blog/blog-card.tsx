import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-types"
import { format } from "date-fns"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="group">
      <article className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase tracking-wide">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <time dateTime={post.date}>{format(new Date(post.date), "MMM d, yyyy")}</time>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{post.description}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
            <span className="text-sm font-medium">Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}
