import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/home/hero-section"
import { FeaturesSection } from "@/components/sections/home/features-section"
import { PlansSection } from "@/components/sections/home/plans-section"
import { SportsSection } from "@/components/sections/home/sports-section"
import { ChannelsSection } from "@/components/sections/home/channels-section"
import { DevicesSection } from "@/components/sections/home/devices-section"
import { ReviewsSection } from "@/components/sections/home/reviews-section"
import { FaqSection } from "@/components/sections/home/faq-section"
import { CallToActionSection } from "@/components/sections/home/call-to-action-section"
import { ReviewStructuredData } from "@/components/seo/ReviewStructuredData"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Best IPTV | IPTV Subscription for Sports & Entertainment",
  description:
    "Get the best IPTV access with 15,000+ sports channels, anti-freeze tech, and instant activation. Compare IPTV plans for sports and entertainment.",
  keywords: ["IPTV Subscription", "Best IPTV", "Best Sports IPTV", "Best IPTV Subscription", "Best Paid IPTV", "IPTV UK"],
}

export default function Home() {
  const url = `${SITE_URL}/`

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PlansSection />
        <SportsSection />
        <ChannelsSection />
        <DevicesSection />
        <ReviewsSection />
        <FaqSection />
        <CallToActionSection />
      </div>
      <ReviewStructuredData url={url} />
    </>
  )
}
