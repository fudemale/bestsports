import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaqSection, type FaqItem } from "@/components/sections/home/faq-section"
import { HowToStructuredData } from "@/components/seo/HowToStructuredData"
import { SITE_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"

const faqEntries = [
  {
    q: "Do all Smart TVs support IPTV apps?",
    a: "Most modern Smart TVs (Samsung, LG, Android TV, Roku) support IPTV apps. Check your TV's app store for available IPTV players.",
  },
  {
    q: "Can I use the same IPTV app on different Smart TV brands?",
    a: "It depends on the app. Some apps are available across platforms, while others are brand-specific. Check compatibility before installing.",
  },
  {
    q: "Do I need to enter a portal URL or playlist?",
    a: "This depends on your IPTV provider. Some apps require a portal URL, while others use M3U playlist files or direct login credentials.",
  },
  {
    q: "What if my Smart TV doesn't have an IPTV app?",
    a: "You can use alternative methods like screen mirroring from a phone/tablet, or connect an external device like FireStick or Android TV box.",
  },
]

const faqItems: FaqItem[] = faqEntries.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}))

const steps = [
  {
    title: "Open Your TV's App Store",
    description:
      "Navigate to your Smart TV's app store (Samsung Smart Hub, LG Content Store, Google Play Store for Android TV, etc.).",
    image: "/setup/smart-1.jpg",
    alt: "Open your Smart TV app store",
  },
  {
    title: "Search for IPTV App",
    description:
      "Search for a compatible IPTV player app. Popular options include Smart IPTV, SS IPTV, or brand-specific IPTV apps available in your TV's store.",
    image: "/setup/smart-2.jpg",
    alt: "Search for IPTV app on Smart TV",
  },
  {
    title: "Install the IPTV App",
    description:
      "Select the app and install it. Wait for the installation to complete, then launch the app from your TV's app menu.",
    image: "/setup/smart-3.jpg",
    alt: "Install IPTV app on Smart TV",
  },
  {
    title: "Enter Playlist or Portal URL",
    description:
      "Depending on your IPTV provider, you may need to enter a portal URL, M3U playlist link, or login credentials. Follow the app's on-screen instructions.",
    image: "/setup/smart-4.jpg",
    alt: "Enter playlist or portal URL on Smart TV",
  },
  {
    title: "Login and Start Streaming",
    description:
      "Enter your IPTV subscription credentials (username and password) if required. Once authenticated, your channel list will load and you can start streaming.",
    image: "/setup/smart-5.jpg",
    alt: "Login and start streaming IPTV on Smart TV",
  },
]

export const metadata: Metadata = {
  title: "How to Install IPTV on Smart TV",
  description: "Learn how to install and configure IPTV apps on Samsung, LG, and Android-based Smart TVs.",
  alternates: { canonical: `${SITE_URL}/setup/how-to-install-iptv-on-smart-tv` },
  openGraph: {
    title: "How to Install IPTV on Smart TV",
    description: "Learn how to install and configure IPTV apps on Samsung, LG, and Android-based Smart TVs.",
    images: [{ url: `${SITE_URL}/og-android.jpg`, alt: "Smart TV IPTV Setup Guide" }],
  },
}

export default function SmartTvSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Smart TV Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold">How to Install IPTV on Smart TV</h1>
          <p className="text-sm opacity-60">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
          </p>
          <p className="text-sm text-muted-foreground">
            Looking for other devices? Check out our{" "}
            <Link href="/setup/how-to-install-iptv-on-android" className="text-primary underline underline-offset-4">
              Android
            </Link>
            {", "}
            <Link href="/setup/how-to-install-iptv-on-firestick" className="text-primary underline underline-offset-4">
              FireStick
            </Link>
            {", "}
            <Link href="/setup/how-to-install-iptv-on-ios" className="text-primary underline underline-offset-4">
              iOS
            </Link>
            {", or "}
            <Link href="/setup/how-to-setup-iptv-on-mag-device" className="text-primary underline underline-offset-4">
              MAG Device
            </Link>
            {" installation guides."}
          </p>
          <p className="text-lg text-muted-foreground">
            This guide explains how to install and configure IPTV apps on various Smart TV platforms, including Samsung,
            LG, and Android-based Smart TVs.
          </p>

          <div className="mt-8 mb-10 flex justify-center">
            <div className="relative max-w-3xl w-full">
              <Image
                src="/og-android.jpg"
                alt="Smart TV IPTV Setup Guide"
                width={1200}
                height={675}
                className="w-full h-auto rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
                priority
              />
            </div>
          </div>

          <p className="text-base text-muted-foreground">
            Looking for the best IPTV services? Explore our reviews:{" "}
            <Link href="/best-sports-iptv" className="text-primary underline underline-offset-4">
              Best Sports IPTV
            </Link>
            ,{" "}
            <Link href="/best-iptv" className="text-primary underline underline-offset-4">
              Best IPTV
            </Link>
            , and{" "}
            <Link href="/iptv-subscription" className="text-primary underline underline-offset-4">
              IPTV Subscription
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-10">
          {steps.map((step, index) => (
            <div key={step.title} className="glass-card border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">Step {index + 1}</p>
                <h2 className="text-2xl font-semibold">{step.title}</h2>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              <div
                className={cn(
                  "relative w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]"
                )}
              >
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.alt}
                  fill
                  className={cn("transition-transform duration-300 object-contain")}
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Stream Directly on Your Smart TV</h2>
          <p className="text-muted-foreground">
            Once your IPTV app is installed and configured, you can enjoy thousands of channels, movies, and live sports
            directly on your Smart TV without additional devices. Need a subscription? Choose the plan that fits your
            needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=setup&utm_campaign=smart-tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>

      <FaqSection id="smart-tv-faq" title="Smart TV IPTV Setup FAQ" items={faqItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Setup Guides",
                item: `${SITE_URL}/setup`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "How to Install IPTV on Smart TV",
                item: `${SITE_URL}/setup/how-to-install-iptv-on-smart-tv`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntries.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <HowToStructuredData
        name="How to Install IPTV on Smart TV"
        description="How to install IPTV apps and log in on Smart TV devices."
        url={`${SITE_URL}/setup/how-to-install-iptv-on-smart-tv`}
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageUrl: step.image,
        }))}
      />
    </div>
  )
}

