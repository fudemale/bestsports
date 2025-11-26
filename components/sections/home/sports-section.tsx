import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GLOBAL_CTA_URL } from "@/lib/constants"
import { Flag, Medal } from "lucide-react"

const NbaIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M11.96 22.76c-.26-.4-.42-.87-.46-1.35-.05-.48.06-.96.3-1.38.24-.42.61-.76 1.06-.97.45-.21.95-.28 1.44-.2.49.08.94.31 1.3.66.36.35.6.79.69 1.28.09.49.03.99-.17 1.44l-4.16.52zm10.01-8.48c-.3-.45-.73-.8-1.22-1.01-.5-.21-1.04-.26-1.57-.13-.53.12-1.01.4-1.38.8-.37.4-.61.88-.69 1.42-.08.54.01 1.09.27 1.58l4.59-2.66zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.46 16.36c-.52-.26-1.09-.38-1.67-.35-.58.04-1.13.23-1.61.56l-3.98-2.3c.06-.39.04-.8-.06-1.19-.1-.39-.3-.75-.58-1.06-.29-.31-.64-.55-1.03-.71-.39-.16-.81-.22-1.22-.18-.41.04-.8.19-1.14.42l-2.15-3.73c.54-.21 1.03-.55 1.42-.99.39-.44.65-.95.76-1.52.11-.56.07-1.15-.12-1.69l4.37 2.52c.44.76 1.1 1.35 1.9 1.69.8.34 1.69.41 2.53.19l1.58 2.74c-.48.45-.83 1.03-1.01 1.67-.18.64-.18 1.32.02 1.95l1.99 1.98z" />
  </svg>
)

const UfcIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M10.23 8.38H8.07v3.36h-1.5V8.38H4.4v7.25h2.17v-2.2h1.5v2.2h2.17V8.38zm6.68 0h-4.83v7.25h2.15v-2.4h2.3c1.2 0 1.85-.5 1.85-1.75v-1.3c0-1.3-.65-1.8-1.47-1.8zm-.35 3.13h-2.18v-1.45h2.18v1.45zm5.15-3.13h-2.33c-1.4 0-2.05.53-2.05 1.85v3.55c0 1.32.65 1.85 2.05 1.85h2.33v-1.98h-2.13v-3.3h2.13V8.38z" />
  </svg>
)

const NflIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm-2 12l-1.5 1.5L10 14l2-2 2 2 1.5 1.5L14 14l-2-2-2 2z" />
    <path d="M12 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
  </svg>
)

const PremierLeagueIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M17.36 16.28c-.42.35-.88.65-1.38.88-.5.23-1.04.35-1.61.35-1.08 0-1.98-.42-2.71-1.26-.73-.84-1.09-2.03-1.09-3.57 0-1.56.36-2.76 1.08-3.61.72-.85 1.62-1.27 2.7-1.27.57 0 1.11.11 1.61.34.5.23.96.53 1.38.88l1.43-1.78c-.78-.66-1.66-1.17-2.63-1.52-.97-.35-1.99-.53-3.06-.53-1.29 0-2.46.24-3.51.71-1.05.47-1.93 1.14-2.63 2.01-.7.87-1.23 1.91-1.59 3.12-.36 1.21-.54 2.52-.54 3.93 0 1.39.18 2.69.54 3.89.36 1.2.89 2.24 1.59 3.11.7.87 1.58 1.54 2.63 2.01 1.05.47 2.22.71 3.51.71 1.09 0 2.11-.18 3.08-.53.97-.35 1.84-.86 2.61-1.53l-1.41-1.78z" />
    <path d="M12 12h5v2h-5z" />
  </svg>
)

const leagues = [
  { name: "Premier League", icon: PremierLeagueIcon },
  { name: "NBA", icon: NbaIcon },
  { name: "NFL", icon: NflIcon },
  { name: "UFC", icon: UfcIcon },
  { name: "Formula 1", icon: Flag },
  { name: "Champions League", icon: Medal },
]

export function SportsSection() {
  return (
    <section id="sports" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Live Sports Action</h2>
            <p className="text-muted-foreground max-w-xl">
              Never miss a game. Watch all major leagues and tournaments in crystal clear HD quality.
            </p>
          </div>
          <Button asChild variant="outline" className="border-border bg-transparent hover:bg-muted text-foreground">
            <Link href={GLOBAL_CTA_URL}>View All Sports</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {leagues.map((league) => (
            <div
              key={league.name}
              className="aspect-square glass-card rounded-xl flex flex-col items-center justify-center p-4 hover:bg-muted/50 transition-all cursor-pointer group bg-card/50"
            >
              <div className="w-12 h-12 bg-muted rounded-full mb-3 group-hover:scale-110 transition-transform flex items-center justify-center border border-border/50">
                <league.icon className="h-6 w-6 text-foreground" />
              </div>
              <span className="font-medium text-center text-sm text-foreground">{league.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
