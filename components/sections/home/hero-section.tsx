import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Tv, Clapperboard, Trophy, Globe2 } from "lucide-react"
import { GLOBAL_CTA_URL, TRIAL_CTA_URL } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-border mb-6 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-muted-foreground">#1 Rated IPTV Provider 2025</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          Watch Everything. <br />
          <span className="text-primary neon-text">Anywhere.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          High-quality IPTV access with 15,000+ channels in 4K/Full HD. Instant activation, anti-freeze technology, and
          24/7 dedicated support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12 px-8 shadow-[0_0_20px_rgba(0,225,255,0.4)]"
          >
            <Link href={GLOBAL_CTA_URL}>Get IPTV</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-border hover:bg-muted text-lg h-12 px-8 bg-transparent text-foreground"
          >
            <Link href={TRIAL_CTA_URL}>Start Free Test</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-sm text-muted-foreground">
          <span>⭐ 4.9/5 rating from 10,000+ IPTV customers</span>
          <span>🔒 30-day money-back guarantee</span>
          <span>⚡ Instant activation & 24/7 support</span>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 border-t border-border max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">Trusted by 50,000+ customers worldwide</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70 transition-all duration-500">
            <div className="flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full border border-border/50">
              <Tv className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-foreground">Sports HD</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full border border-border/50">
              <Clapperboard className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-medium text-foreground">Movies & Series</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full border border-border/50">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-foreground">PPV Events</span>
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full border border-border/50">
              <Globe2 className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-foreground">Worldwide Access</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground px-4 py-1.5">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              30-Day Money-Back
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
