import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChannelsList } from "@/components/sections/channels/channels-list"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "IPTV Channels List 2025 | UK, US, Spain, Italy, Portugal & Worldwide",
  description:
    "Browse a sample IPTV channels list by country and category. Explore sports, movies, drama and entertainment channels for the UK, US, Spain, Italy, Portugal and more regions. Channel names are examples and availability may vary.",
  alternates: { canonical: `${SITE_URL}/channels` },
  openGraph: {
    title: "IPTV Channels List 2025 | UK, US, Spain, Italy, Portugal & Worldwide",
    description:
      "Browse a sample IPTV channels list by country and category. Explore sports, movies, drama and entertainment channels for the UK, US, Spain, Italy, Portugal and more regions. Channel names are examples and availability may vary.",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Channels List 2025 | UK, US, Spain, Italy, Portugal & Worldwide",
    description:
      "Browse a sample IPTV channels list by country and category. Explore sports, movies, drama and entertainment channels for the UK, US, Spain, Italy, Portugal and more regions. Channel names are examples and availability may vary.",
  },
}

export default function ChannelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            IPTV Channels List for UK, US, Spain, Italy, Portugal & More
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Explore a sample IPTV channels list grouped by country and category. See how live sports, entertainment,
            movies and drama channels can look across regions like the UK, US, Spain, Italy, Portugal and more. This
            page is designed for research and comparison only — actual channel availability may change over time.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            When you are ready to compare plans, visit{" "}
            <a href="/iptv-subscription" className="text-primary underline underline-offset-4">
              IPTV Subscription
            </a>{" "}
            or our{" "}
            <a href="/best-iptv" className="text-primary underline underline-offset-4">
              Best IPTV
            </a>{" "}
            overview pages for more detailed recommendations.
          </p>
        </div>
      </section>

      {/* Channels List Component */}
      <ChannelsList />

      {/* Internal Links Section */}
      <section className="pb-10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-sm md:text-base text-muted-foreground">
          <p>
            Use this channels list as a reference when comparing providers. If you&apos;re deciding which plan to
            choose, our{" "}
            <Link href="/iptv-subscription" className="text-primary underline underline-offset-4">
              IPTV subscription comparison
            </Link>{" "}
            explains pricing, stability and device support in more detail. You can also review{" "}
            <Link href="/best-iptv" className="text-primary underline underline-offset-4">
              the best IPTV providers for 2025
            </Link>{" "}
            or check{" "}
            <Link href="/iptv-uk" className="text-primary underline underline-offset-4">
              IPTV UK options
            </Link>{" "}
            if you mainly watch UK channels and sports.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Ready to Access These Channels?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Once you&apos;ve explored the sample channels list, the next step is choosing a plan. We review stability,
            sports performance and device support so you can pick an IPTV option that fits how you actually watch TV.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/iptv-subscription">Compare IPTV Plans</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/15 hover:border-white/30"
            >
              <Link href="/best-iptv">View Best IPTV Providers</Link>
            </Button>
          </div>
          <p className="mt-4 text-xs md:text-sm text-muted-foreground">
            Channel lineups can change over time. Always check the latest details on the provider&apos;s official
            website before subscribing.
          </p>
        </div>
      </section>
    </div>
  )
}

