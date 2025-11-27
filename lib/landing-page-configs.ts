import type { Metadata } from "next"
import type { FaqItem } from "@/components/sections/home/faq-section"
import { BRAND_NAME, SITE_URL, buildCampaignCtaUrl } from "./constants"

export type ComparisonTableRow = {
  feature: string
  brand: string | boolean
  competitors: (string | boolean)[]
}

export type ComparisonTableConfig =
  | {
      // Legacy format
      brandLabel?: string
      competitorLabels: string[]
      rows: ComparisonTableRow[]
    }
  | {
      // New format
      columns: string[]
      rows: string[][]
    }

export type RelatedLink = {
  href: string
  label: string
  description?: string
}

export type LandingPageContent = {
  slug: string
  path: string
  title: string
  description: string
  keyword: string
  benefits: string[]
  comparisonTable: ComparisonTableConfig
  faqs: FaqItem[]
  ogImage?: string
  ctaUrl: string
  relatedLinks?: RelatedLink[]
}

const _competitorLabels = ["Cable TV", "Generic IPTV"]

const _defaultRows = (keyword: string): ComparisonTableRow[] => [
  { feature: "Monthly Cost", brand: "$14.99", competitors: ["$110+", "$29+"] },
  { feature: `${keyword} Availability`, brand: "Worldwide", competitors: ["Region-Locked", "Limited"] },
  { feature: "4K / UHD Streams", brand: true, competitors: [false, "Sometimes"] },
  { feature: "Anti-Freeze Tech", brand: true, competitors: [true, false] },
  { feature: "Sports Coverage", brand: "All Major Leagues", competitors: ["Local Only", "Partial"] },
  { feature: "Device Support", brand: "TV, Mobile, Web", competitors: ["Cable Box Only", "Inconsistent"] },
]

const _defaultFaqs = (keyword: string): FaqItem[] => [
  {
    question: `What makes ${keyword} different?`,
    answer: `${BRAND_NAME} delivers ${keyword.toLowerCase()} with 15,000+ live channels, exclusive sports coverage, and instant activation.`,
  },
  {
    question: `Can I watch ${keyword} on multiple devices?`,
    answer: "Yes. Every plan supports Smart TV, Android, iOS, Mag, and browser-based apps without extra hardware.",
  },
  {
    question: `Is there a guarantee for ${keyword}?`,
    answer: "We include a 30-day money-back guarantee plus 24/7 technical support so you can stream with confidence.",
  },
]

const _defaultBenefits = (keyword: string): string[] => [
  `Purpose-built ${keyword.toLowerCase()} streams in 4K and Full HD`,
  "Instant delivery with zero hidden fees or surprise renewals",
  "Priority sports routing for peak match times",
  "24/7 technical support via chat, email, and ticketing",
]

export const landingPageContent: Record<string, LandingPageContent> = {
  "iptv-subscription": {
    slug: "iptv-subscription",
    path: "/iptv-subscription",
    title: "IPTV Subscription | Best IPTV Plans for Sports & Entertainment",
    description:
      "Compare IPTV subscription options for sports and entertainment. Get 15,000+ channels with instant activation and reliable streaming.",
    keyword: "IPTV Subscription",
    benefits: [
      "Clear overview of IPTV subscription types including monthly IPTV subscription and yearly IPTV subscription options.",
      "Helps you compare pricing and performance across providers for sports IPTV subscription.",
      "Updated review structure based on ongoing testing of IPTV subscription for FireStick compatibility.",
      "Information-focused approach compliant with Google Ads.",
      "Editorial insights into stream stability and uptime for IPTV subscription UK users.",
    ],
    comparisonTable: {
      columns: ["Feature", "VWatch (Top Recommendation)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["Stream Stability", "✔✔✔ High", "✔✔✔ High", "✔ Medium"],
        ["4K/HD Availability", "✔✔✔ Wide", "✔✔✔ Wide", "✔ Limited"],
        ["Sports Channels Quality", "✔✔✔ Excellent", "✔✔✔ Excellent", "✔ Good"],
        ["VOD Library Size", "✔ Large", "✔ Large", "✔ Medium"],
        ["Device Compatibility", "✔✔✔ Broad", "✔✔✔ Broad", "✔ Limited"],
        ["Customer Support", "✔ 24/7 Support", "✔ 24/7 Support", "✔ Email Only"],
        ["Overall Rating", "9.5/10", "9.5/10", "7.2/10"],
      ],
    },
    faqs: [
      {
        question: "What is an IPTV subscription?",
        answer:
          "An IPTV subscription provides access to internet-based TV streams that can be viewed on supported devices like FireStick, Android TV, or smartphones. Whether you need a monthly IPTV subscription or yearly IPTV subscription, both offer flexible access to thousands of channels.",
      },
      {
        question: "How do IPTV subscriptions work?",
        answer:
          "They deliver TV content over the internet rather than through cable or satellite, making streaming flexible and device-friendly. A sports IPTV subscription typically includes live sports channels alongside entertainment content.",
      },
      {
        question: "Are IPTV subscriptions easy to set up?",
        answer:
          "Yes. Most apps can be installed within minutes, especially for IPTV subscription for FireStick. The setup process is straightforward and doesn't require technical expertise.",
      },
      {
        question: "Which devices support IPTV apps?",
        answer:
          "Common supported devices include FireStick, Android phones, Android TV, and Smart TVs. IPTV subscription UK users can access content on any of these platforms.",
      },
      {
        question: "What should I look for in a good IPTV subscription?",
        answer:
          "Focus on stream stability, device support, customer service quality, and reliable performance during peak hours. For UK users, look for IPTV subscription UK options that offer low latency.",
      },
    ],
    ogImage: "/og-iptv-subscription.jpg",
    ctaUrl: buildCampaignCtaUrl("iptv-subscription"),
    relatedLinks: [
      {
        href: "/best-iptv",
        label: "Best IPTV Providers 2025",
        description: "See how the top IPTV services compare for uptime, stream quality, and pricing.",
      },
      {
        href: "/channels",
        label: "IPTV Channels List",
        description: "Browse a sample channel list by country for UK, US, Spain, Italy, Portugal and more.",
      },
    ],
  },
  "best-iptv": {
    slug: "best-iptv",
    path: "/best-iptv",
    title: "Best IPTV | Top IPTV Services for 2025",
    description:
      "Compare the best IPTV services for 2025. Find reliable streaming with 15,000+ channels, sports coverage, and instant activation.",
    keyword: "Best IPTV",
    benefits: [
      "Objective comparison of top IPTV services for 2025, identifying the best IPTV provider based on real-world testing.",
      "Performance-tested rankings based on sports and movie streams, helping you find the best IPTV in 2025.",
      "Detailed reliability analysis and reviewer notes for the best IPTV for UK and best IPTV for FireStick users.",
      "Helps readers choose the right IPTV solution for their needs, whether seeking the best IPTV provider for sports or entertainment.",
      "Updated monthly with fresh performance data from the best IPTV services currently available.",
    ],
    comparisonTable: {
      columns: ["Criteria", "VWatch (Top IPTV Pick)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["Uptime (30 days)", "99.4%", "99.4%", "94.2%"],
        ["Sports Performance", "Excellent", "Excellent", "Good"],
        ["4K Channels", "Extensive", "Extensive", "Moderate"],
        ["Delay/Lag", "Very Low", "Very Low", "Moderate"],
        ["Customer Reviews", "4.8/5", "4.8/5", "3.7/5"],
        ["Support Quality", "Responsive", "Responsive", "Email Only"],
        ["Overall Verdict", "Top Pick 2025", "Top Pick 2025", "Average"],
      ],
    },
    faqs: [
      {
        question: "What makes an IPTV service the best?",
        answer:
          "High uptime, reliable stream performance, device support, and responsive customer service are key factors. The best IPTV provider in 2025 combines all these elements consistently.",
      },
      {
        question: "How do you test IPTV providers?",
        answer:
          "We evaluate uptime, sports performance, delay, app compatibility, and user experience. For the best IPTV for UK users, we also test peak-hour performance and local channel availability.",
      },
      {
        question: "Is IPTV legal to use?",
        answer:
          "IPTV legality varies by region and content accessed. Always use services responsibly. The best IPTV for FireStick typically includes proper licensing information.",
      },
      {
        question: "What devices work best with IPTV apps?",
        answer:
          "FireStick, Android TV, Smart TVs, and Android devices offer smooth streaming experiences. The best IPTV provider supports all these platforms with dedicated apps.",
      },
      {
        question: "Do IPTV services offer their own apps?",
        answer:
          "Many providers support modern apps for FireStick, Android TV, and smartphones. The best IPTV in 2025 includes native apps for seamless installation.",
      },
    ],
    ogImage: "/og-best-iptv.jpg",
    ctaUrl: buildCampaignCtaUrl("best-iptv"),
    relatedLinks: [
      {
        href: "/iptv-subscription",
        label: "Compare IPTV Subscription Plans",
        description: "Understand monthly vs yearly IPTV options and what to look for in a stable provider.",
      },
      {
        href: "/channels",
        label: "IPTV Channels List",
        description: "Preview sports, movies and entertainment channels available across key regions.",
      },
    ],
  },
  "best-iptv-subscription": {
    slug: "best-iptv-subscription",
    path: "/best-iptv-subscription",
    title: "Best IPTV Subscription | Top Plans for Sports & Movies",
    description:
      "Find the best IPTV subscription for sports and movies. Compare plans with 4K quality, reliable streams, and instant access.",
    keyword: "Best IPTV Subscription",
    benefits: [
      "Breakdown of the best IPTV subscription options, including best value IPTV subscription plans for different needs.",
      "Updated comparisons based on value, quality, and stability when comparing IPTV subscriptions.",
      "Information that helps users evaluate potential providers for sports IPTV subscription and entertainment packages.",
      "Clear explanations of what each IPTV subscription includes, from channel counts to device compatibility.",
      "Sports-oriented testing and performance insights for the best IPTV subscription focused on live sports.",
    ],
    comparisonTable: {
      columns: ["Metric", "Best Pick (VWatch)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["Subscription Value", "Excellent", "Excellent", "Good"],
        ["Sports Stability", "High", "High", "Medium"],
        ["4K/HD Streams", "Wide Range", "Wide Range", "Limited"],
        ["Device Support", "FireStick/Android/TV", "FireStick/Android/TV", "FireStick Only"],
        ["Channel Variety", "Massive", "Massive", "Moderate"],
        ["Support Response", "Fast", "Fast", "Email Only"],
        ["Overall Score", "9.3/10", "9.3/10", "7.0/10"],
      ],
    },
    faqs: [
      {
        question: "What is the best IPTV subscription?",
        answer:
          "This depends on reliability, device support, and user experience. Our reviews highlight top options for 2025, focusing on the best value IPTV subscription that balances cost and features.",
      },
      {
        question: "Do IPTV subscriptions include sports?",
        answer:
          "Many IPTV services include sports streams, but performance varies among providers. A sports IPTV subscription typically offers dedicated sports channels with better reliability.",
      },
      {
        question: "How do you compare IPTV subscriptions?",
        answer:
          "We analyze stability, stream quality, value for money, customer support responsiveness, and device compatibility. When comparing IPTV subscriptions, these factors determine the best fit.",
      },
      {
        question: "Are IPTV subscriptions easy to install?",
        answer:
          "Yes. FireStick and Android installation typically takes less than five minutes. The best IPTV subscription providers offer step-by-step setup guides.",
      },
      {
        question: "Can I change IPTV providers later?",
        answer:
          "Yes. IPTV subscriptions are flexible and do not lock you into long contracts. You can switch between providers as your needs change.",
      },
    ],
    ogImage: "/og-best-iptv-subscription.jpg",
    ctaUrl: buildCampaignCtaUrl("best-iptv-subscription"),
    relatedLinks: [
      {
        href: "/iptv-subscription",
        label: "IPTV Subscription Guide",
        description: "Dive deeper into how IPTV subscriptions work and which plan fits your streaming habits.",
      },
      {
        href: "/best-iptv",
        label: "Best IPTV Services",
        description: "See our top-tested IPTV providers with performance notes and real-world impressions.",
      },
    ],
  },
  "best-paid-iptv": {
    slug: "best-paid-iptv",
    path: "/best-paid-iptv",
    title: "Best Paid IPTV | Top IPTV Services with Full Access",
    description:
      "Compare the best paid IPTV services with full access. Get reliable streaming, sports coverage, and 4K quality.",
    keyword: "Best Paid IPTV",
    benefits: [
      "Editorial comparison of top paid IPTV providers, helping you understand paid IPTV vs free IPTV differences.",
      "Analysis of pricing, sports performance, and reliability for the best paid IPTV services available.",
      "Designed to help visitors understand full-featured IPTV options, especially for paid IPTV for UK users seeking reliable access.",
      "Breaks down features without aggressive sales language, focusing on reliable paid IPTV access and value.",
      "Focused on transparency, stability insights, and uptime for the best paid IPTV providers in the market.",
    ],
    comparisonTable: {
      columns: ["Category", "Top IPTV Service (VWatch)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["Price vs Value", "Excellent", "Excellent", "Good"],
        ["Premium Sports Quality", "★★★★★", "★★★★★", "★★★★"],
        ["4K Movie Streams", "Wide Selection", "Wide Selection", "Moderate"],
        ["Server Stability", "High", "High", "Medium"],
        ["App Quality", "Multiple Modern Apps", "Multiple Modern Apps", "Basic App"],
        ["Customer Service", "24/7 Live Support", "24/7 Live Support", "Email Only"],
        ["Final Rating", "9.4/10", "9.4/10", "7.5/10"],
      ],
    },
    faqs: [
      {
        question: "What is a paid IPTV service?",
        answer:
          "A paid IPTV service offers subscription-based streaming delivered over the internet. When comparing paid IPTV vs free IPTV, paid services typically provide better reliability and support.",
      },
      {
        question: "Why choose a paid IPTV provider?",
        answer:
          "Paid services often provide more reliable performance, modern apps, and better stream stability. For paid IPTV for UK users, this means consistent access to UK channels and sports.",
      },
      {
        question: "Do paid IPTV services offer higher quality?",
        answer:
          "Typically yes. Many paid options deliver better 4K and HD reliability. Reliable paid IPTV access ensures consistent streaming without interruptions.",
      },
      {
        question: "Is customer support important for IPTV?",
        answer:
          "Yes. Responsive customer support is essential to resolve setup or streaming issues quickly. The best paid IPTV providers offer 24/7 support.",
      },
      {
        question: "Which paid IPTV service is the best?",
        answer:
          "Our reviews compare pricing, performance, reliability, and overall value to highlight top choices. The best paid IPTV balances cost with features and reliability.",
      },
    ],
    ogImage: "/og-best-paid-iptv.jpg",
    ctaUrl: buildCampaignCtaUrl("best-paid-iptv"),
    relatedLinks: [
      {
        href: "/best-iptv",
        label: "Best IPTV Providers",
        description: "Compare premium IPTV services based on uptime, sports performance and app quality.",
      },
      {
        href: "/iptv-subscription",
        label: "IPTV Subscription Explained",
        description: "Learn how paid IPTV subscriptions differ from free apps and what you get for your money.",
      },
    ],
  },
  "best-sports-iptv": {
    slug: "best-sports-iptv",
    path: "/best-sports-iptv",
    title: "Best Sports IPTV | Live Sports Streaming in 4K",
    description:
      "Get the best sports IPTV for live streaming. Access all major leagues in 4K with reliable streams and instant activation.",
    keyword: "Best Sports IPTV",
    benefits: [
      "Performance testing for major sports leagues (EPL, UCL, NFL, NBA), focusing on football IPTV and low-latency sports streaming.",
      "Stability analysis during high-traffic sports events for IPTV for EPL & UCL matches.",
      "Delay, syncing, and HD/4K performance breakdown, including 4K sports IPTV capabilities.",
      "Designed for sports fans looking for reliable streams with the best sports IPTV providers.",
      "Editorial-style ranking based on sports-specific metrics for low-latency sports streaming performance.",
    ],
    comparisonTable: {
      columns: ["Sports Metric", "Top Sports IPTV (VWatch)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["EPL Performance", "Excellent", "Excellent", "Good"],
        ["UCL Delay", "Very Low", "Very Low", "Moderate"],
        ["NBA/NFL Quality", "Consistent", "Consistent", "Okay"],
        ["UFC/PPV Handling", "Stable", "Stable", "Occasional Drops"],
        ["Sports in 4K", "Wide Selection", "Wide Selection", "Few"],
        ["Live Event Stability", "Reliable", "Reliable", "Unstable"],
        ["Overall Sports Score", "9.6/10", "9.6/10", "7.3/10"],
      ],
    },
    faqs: [
      {
        question: "What is a sports IPTV service?",
        answer:
          "A sports IPTV service is optimized for live sports performance, focusing on stability and minimal delay. The best sports IPTV providers specialize in football IPTV and other major leagues.",
      },
      {
        question: "Do sports IPTV services support 4K?",
        answer:
          "Some do, depending on the provider and device compatibility. 4K sports IPTV is becoming more common for major events like EPL and UCL matches.",
      },
      {
        question: "Is delay important for live sports?",
        answer:
          "Yes. Lower delay ensures smoother viewing for fast-paced events. Low-latency sports streaming is crucial for IPTV for EPL & UCL where timing matters.",
      },
      {
        question: "Which devices are best for sports IPTV?",
        answer:
          "FireStick and Android TV are commonly preferred due to performance and app compatibility. The best sports IPTV works seamlessly on these platforms.",
      },
      {
        question: "How do you test sports IPTV?",
        answer:
          "We analyze performance during high-traffic events like EPL, UCL, NBA, NFL, and UFC. This helps identify providers offering reliable low-latency sports streaming.",
      },
    ],
    ogImage: "/og-best-sports-iptv.jpg",
    ctaUrl: buildCampaignCtaUrl("best-sports-iptv"),
    relatedLinks: [
      {
        href: "/best-iptv",
        label: "Overall Best IPTV",
        description: "Not just sports – see how full IPTV providers rank for movies, series and live TV.",
      },
      {
        href: "/channels",
        label: "Sports Channels by Country",
        description: "Preview football, NBA, NFL and fight sports channels across UK, US and European regions.",
      },
    ],
  },
  "iptv-uk": {
    slug: "iptv-uk",
    path: "/iptv-uk",
    title: "IPTV UK | UK IPTV Plans for Sports & Entertainment",
    description:
      "Compare IPTV UK options for Premier League, Champions League, and British channels. Get reliable streaming with instant access.",
    keyword: "IPTV UK",
    benefits: [
      "Overview of IPTV options commonly used in the UK, including best IPTV UK providers and UK channel IPTV services.",
      "Focus on UK-oriented channels and streaming categories, covering Sky Sports IPTV and BT Sport IPTV access.",
      "Information tailored to UK viewers and devices, helping you find the right UK IPTV provider.",
      "Comparative notes on performance at UK peak hours for IPTV UK services.",
      "Updated recommendations based on 2025 testing of best IPTV UK options available.",
    ],
    comparisonTable: {
      columns: ["UK-Focused Feature", "VWatch (Top Pick)", "VWatch (Provider A)", "BuyTopIPTV (Provider B)"],
      rows: [
        ["UK Entertainment", "Excellent", "Excellent", "Good"],
        ["UK Sports", "Excellent", "Excellent", "Moderate"],
        ["Live Stream Delay", "Very Low", "Very Low", "Moderate"],
        ["Local Channels", "Wide Range", "Wide Range", "Some"],
        ["Peak Hour Stability", "High", "High", "Avg"],
        ["Device Support (UK)", "FireStick/Android/TV", "FireStick/Android/TV", "FireStick Only"],
        ["Overall UK Score", "9.2/10", "9.2/10", "7.0/10"],
      ],
    },
    faqs: [
      {
        question: "What makes IPTV suitable for UK viewers?",
        answer:
          "UK-friendly performance during peak hours and compatibility with common UK devices makes IPTV appealing. The best IPTV UK providers offer Sky Sports IPTV and BT Sport IPTV access.",
      },
      {
        question: "Does IPTV require special equipment?",
        answer:
          "No. FireStick and Android TV devices work well for IPTV streaming. A UK IPTV provider typically supports these standard devices without additional hardware.",
      },
      {
        question: "Is IPTV legal in the UK?",
        answer:
          "Legality depends on the content being accessed. Users should always use IPTV responsibly. UK channel IPTV services should be used in compliance with local regulations.",
      },
      {
        question: "What affects UK streaming performance?",
        answer:
          "Internet quality, evening peak-hour congestion, and device type can affect performance. IPTV UK services perform best with stable broadband connections.",
      },
      {
        question: "What devices support IPTV apps in the UK?",
        answer:
          "FireStick, Android TV, Android phones, and Smart TVs are widely supported. Best IPTV UK providers offer apps compatible with all these platforms.",
      },
    ],
    ogImage: "/og-iptv-uk.jpg",
    ctaUrl: buildCampaignCtaUrl("iptv-uk"),
    relatedLinks: [
      {
        href: "/best-iptv",
        label: "Best IPTV for 2025",
        description: "See how UK-friendly IPTV providers compare on reliability, price and stream quality.",
      },
      {
        href: "/iptv-subscription",
        label: "UK IPTV Subscription Options",
        description: "Understand different IPTV subscription terms and what they mean for UK viewers.",
      },
      {
        href: "/channels",
        label: "UK & International Channels List",
        description: "Browse a sample of UK, European and international channels available via IPTV.",
      },
    ],
  },
  landing: {
    slug: "landing",
    path: "/landing",
    title: "Best IPTV Service 2025 | Best Sports IPTV",
    description: "Dedicated landing experience for geo and keyword campaigns promoting Best Sports IPTV coverage.",
    keyword: "Best IPTV Service 2025",
    benefits: [
      "Geo-targeted sports playlists ready for SEO landing funnels",
      "Optimized ad relevance for 2025 sports audiences",
      "High-converting structure for paid traffic",
    ],
    comparisonTable: {
      columns: ["Feature", "Best Sports IPTV", "Cable TV", "Generic IPTV"],
      rows: [
        ["Monthly Cost", "$14.99", "$120+", "$35+"],
        ["4K Match Streams", "✔✔✔ Yes", "✗ No", "Sometimes"],
        ["Global Sports Rights", "Worldwide", "Region-Locked", "Partial"],
        ["Device Support", "TV, Mobile, Web", "Cable Box Only", "Android Only"],
        ["Support", "24/7 Experts", "Business Hours", "Ticket Only"],
      ],
    },
    faqs: [
      {
        question: "Why is Best IPTV Service 2025 better than cable?",
        answer: "You get every major league, PPV, and replay without overpriced bundles or hardware rentals.",
      },
      {
        question: "How fast is activation?",
        answer: "Activation is instant—your credentials arrive by email within minutes of checkout.",
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes. All Best Sports IPTV plans are contract-free with a 30-day money-back guarantee.",
      },
    ],
    ogImage: "/placeholder.jpg",
    ctaUrl: buildCampaignCtaUrl("best-iptv-service-2025"),
  },
}

export function createLandingMetadata(content: LandingPageContent): Metadata {
  const url = `${SITE_URL}${content.path}`
  const title = `${content.keyword} | ${BRAND_NAME}`
  const imagePath = content.ogImage ?? "/placeholder.jpg"
  const imageUrl = imagePath.startsWith("http") ? imagePath : `${SITE_URL}${imagePath}`
  return {
    title,
    description: content.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: content.description,
      url,
      siteName: BRAND_NAME,
      type: "website",
      images: [{ url: imageUrl, alt: `${content.keyword} preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.description,
      images: [imageUrl],
    },
  }
}
