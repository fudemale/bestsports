import { Monitor, PlayCircle, Zap, Globe, Wifi, Headphones } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "15,000+ Channels",
    desc: "Access global channels in 4K, FHD & HD quality without buffering.",
  },
  { icon: PlayCircle, title: "VOD Library", desc: "Over 50,000 movies and TV series updated daily with new releases." },
  { icon: Zap, title: "Anti-Freeze Tech", desc: "99.9% uptime guarantee with our proprietary anti-freeze technology." },
  { icon: Globe, title: "All Devices", desc: "Compatible with Smart TVs, Android, iOS, Mag, FireStick & PC." },
  { icon: Wifi, title: "EPG Guide", desc: "Electronic Program Guide included so you never miss your favorite show." },
  { icon: Headphones, title: "24/7 Support", desc: "Dedicated technical support team available round the clock." },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Best Sports IPTV?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of television with our cutting-edge features designed for the ultimate viewing
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-card p-6 rounded-xl hover:bg-muted/50 transition-colors group bg-card/50"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
