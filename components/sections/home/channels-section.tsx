import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ChannelsSection() {
  // Get preview channels from key regions
  const previewChannels = [
    { name: "Sky Sports Premier League", region: "UK", category: "Sports" },
    { name: "ESPN", region: "US", category: "Sports" },
    { name: "Cinema Italia HD", region: "Italy", category: "Movies & Drama" },
    { name: "Spanish Series HD", region: "Spain", category: "Movies & Drama" },
    { name: "Cinema Portugal HD", region: "Portugal", category: "Movies & Drama" },
    { name: "HBO", region: "US", category: "Movies & Drama" },
  ]

  return (
    <section id="channels" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Explore Channels by Country</h2>
            <p className="text-muted-foreground max-w-xl">
              View a sample channel list for UK, US, Spain, Italy, Portugal and more. Browse sports, movies, drama,
              and entertainment channels available through IPTV services.
            </p>
          </div>
          <Button asChild variant="outline" className="border-border bg-transparent hover:bg-muted text-foreground">
            <Link href="/channels">View Full Channels List</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {previewChannels.map((channel, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-4 hover:bg-muted/50 transition-all cursor-pointer group bg-card/50 border border-white/10 hover:border-primary/30"
            >
              <div className="mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-1">
                  {channel.region}
                </span>
              </div>
              <h3 className="font-medium text-sm text-foreground mb-1 line-clamp-2">{channel.name}</h3>
              <p className="text-xs text-muted-foreground">{channel.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

