import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Monitor, Settings } from "lucide-react"
import FirestickPDFLink from "@/components/setup/FirestickPDFLink"

export const metadata: Metadata = {
  title: "IPTV Setup Guides | FireStick, Android, iOS, Smart TV & MAG",
  description: "Step-by-step IPTV installation guides for all devices. Learn how to install IPTV apps on FireStick, Android, iOS, Smart TV, and MAG devices.",
  alternates: { canonical: "https://bestsportsiptv.com/setup" },
  openGraph: {
    title: "IPTV Setup Guides | FireStick, Android, iOS, Smart TV & MAG",
    description: "Step-by-step IPTV installation guides for all devices. Learn how to install IPTV apps on FireStick, Android, iOS, Smart TV, and MAG devices.",
  },
}

const setupGuides = [
  {
    title: "FireStick Setup",
    description: "Complete guide to installing IPTV apps on Amazon FireStick using the Downloader app. Includes step-by-step instructions for VWatch Smart, Pro, and Q apps.",
    href: "/setup/how-to-install-iptv-on-firestick",
    icon: "📺",
  },
  {
    title: "Android Setup",
    description: "Learn how to install IPTV apps on Android phones, tablets, and Android TV boxes. Works with all Android devices using APK installation.",
    href: "/setup/how-to-install-iptv-on-android",
    icon: "📱",
  },
  {
    title: "iOS Setup",
    description: "Step-by-step guide to installing IPTV apps on iPhone and iPad using the App Store. Includes screenshots and login examples.",
    href: "/setup/how-to-install-iptv-on-ios",
    icon: Smartphone,
  },
  {
    title: "Smart TV Setup",
    description: "Learn how to install IPTV apps on Smart TVs, including Samsung, LG, and other major brands, with clear on-screen examples.",
    href: "/setup/how-to-install-iptv-on-smart-tv",
    icon: Monitor,
  },
  {
    title: "MAG Device Setup",
    description: "Complete walkthrough for configuring IPTV on MAG boxes, including portal URL, reboot, and channel access steps.",
    href: "/setup/how-to-setup-iptv-on-mag-device",
    icon: Settings,
  },
]

export default function SetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Setup Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IPTV Setup Guides</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Choose your device platform below to access step-by-step installation instructions for IPTV apps. Each guide includes download links, screenshots, and troubleshooting tips.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {setupGuides.map((guide) => {
              const IconComponent = typeof guide.icon === "string" ? null : guide.icon
              return (
                <Link key={guide.href} href={guide.href} className="group" aria-label={`${guide.title} - View Guide`}>
                  <div className="glass-card border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl flex-shrink-0">
                        {typeof guide.icon === "string" ? (
                          <span aria-hidden="true">{guide.icon}</span>
                        ) : IconComponent ? (
                          <IconComponent className="h-10 w-10 text-primary" aria-hidden="true" />
                        ) : null}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{guide.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{guide.description}</p>
                        {guide.href === "/setup/how-to-install-iptv-on-firestick" && (
                          <p className="text-xs text-white/60 mt-2">
                            Need an offline version? <FirestickPDFLink />.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                      <span className="font-medium">View Guide</span>
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Need an IPTV Subscription?</h2>
          <p className="text-muted-foreground">
            Once you&apos;ve installed the IPTV app on your device, you&apos;ll need login credentials from a provider. Explore our recommended IPTV plans to get started.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="https://vwatch.live/index.php/store/subscriptions" target="_blank" rel="noopener noreferrer">
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
