import { cn } from "@/lib/utils"

interface BlogTagProps {
  tag: string
  variant?: "default" | "outline"
  className?: string
}

export function BlogTag({ tag, variant = "default", className }: BlogTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors",
        variant === "default"
          ? "bg-primary/20 text-primary"
          : "bg-white/5 text-muted-foreground border border-white/10",
        className
      )}
    >
      {tag}
    </span>
  )
}
