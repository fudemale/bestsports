import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GLOBAL_CTA_URL } from "@/lib/constants"

type CallToActionSectionProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaUrl?: string
}

export function CallToActionSection({
  title = "Ready to Start Watching?",
  description = "Join thousands of satisfied customers and experience high-quality IPTV access today.",
  ctaLabel = "View IPTV Plans",
  ctaUrl = GLOBAL_CTA_URL,
}: CallToActionSectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden border-primary/20 bg-card/50">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">{description}</p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-10 shadow-[0_0_25px_rgba(0,225,255,0.4)]"
            >
              <Link href={ctaUrl}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
