import { Star } from "lucide-react"

type StarRatingProps = {
  count?: number
  className?: string
  size?: "sm" | "md"
}

export function StarRating({ count = 5, className = "", size = "md" }: StarRatingProps) {
  const iconClass = size === "sm" ? "h-4 w-4" : "h-5 w-5"

  return (
    <div className={`flex items-center justify-center gap-1 text-yellow-400 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className={`${iconClass} fill-current`} />
      ))}
    </div>
  )
}
