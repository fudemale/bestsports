import { User } from "lucide-react"

interface BlogAuthorBoxProps {
  author: string
  date: string
}

export function BlogAuthorBox({ author, date }: BlogAuthorBoxProps) {
  return (
    <div className="glass-card rounded-xl p-6 border border-white/10 flex items-center gap-4">
      <div className="p-3 rounded-full bg-primary/20 text-primary">
        <User className="h-6 w-6" />
      </div>
      <div>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">
          Published on {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </div>
    </div>
  )
}
