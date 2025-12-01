import { User } from "lucide-react"
import { safeDate } from "@/lib/utils"

interface BlogAuthorBoxProps {
  author: string
  date: string
}

export function BlogAuthorBox({ author, date }: BlogAuthorBoxProps) {
  const publishedDate = safeDate(date)
  const formattedDate = publishedDate
    ? publishedDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : null

  return (
    <div className="glass-card rounded-xl p-6 border border-white/10 flex items-center gap-4">
      <div className="p-3 rounded-full bg-primary/20 text-primary">
        <User className="h-6 w-6" />
      </div>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        {formattedDate && (
          <div className="text-sm text-muted-foreground">Published on {formattedDate}</div>
        )}
      </div>
    </div>
  )
}
