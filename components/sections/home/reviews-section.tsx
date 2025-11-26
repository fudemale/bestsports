import { Star } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "James R.",
    location: "UK",
    text: "Streams stay smooth even during big Premier League games. No buffering, no drama — just football.",
    rating: 5,
  },
  {
    name: "Aisha N.",
    location: "VWatch subscriber",
    text: "We cancelled cable and watch everything through VWatch now — movies, kids' channels, and sports in one place.",
    rating: 5,
  },
  {
    name: "Daniel P.",
    location: "FireStick user",
    text: "Setup took less than five minutes on FireStick and support replied in under 2 minutes when I had a question.",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-muted-foreground mb-3">
            Trusted by thousands of IPTV viewers for reliability, picture quality, and support.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What Our Customers Say</h2>

          {/* Rating row */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <span className="text-base">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-sm md:text-base text-muted-foreground">
              Rated 4.8/5 from active VWatch subscribers
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="glass-card p-6 rounded-xl bg-card/40 border border-border">
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < review.rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400/30"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>

              {/* Name and location */}
              <div className="flex items-center gap-3">
                <Image src="/placeholder-user.jpg" width={32} height={32} className="rounded-full" alt={review.name} />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground text-sm">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
