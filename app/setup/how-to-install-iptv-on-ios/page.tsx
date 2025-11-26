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
    q: "Do I need to jailbreak my iPhone to install IPTV?",
    a: "No. Modern IPTV apps are available through the App Store or can be installed using TestFlight for beta versions.",
  },
  {
    q: "Which IPTV apps work on iOS?",
    a: "Popular options include GSE Smart IPTV, IPTVX, and other App Store-compatible IPTV players that support M3U playlists.",
  },
  {
    q: "Can I use IPTV on both iPhone and iPad?",
    a: "Yes. Most IPTV apps are universal iOS apps that work on both iPhone and iPad devices.",
  },
  {
    q: "Do I need special credentials for iOS apps?",
    a: "You'll use the same login credentials (username and password) provided by your IPTV subscription service.",
  },
]

const faqItems: FaqItem[] = faqEntries.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}))

const steps = [
  {
    title: "Open the App Store",
    description:
      "On your iPhone or iPad, open the App Store app. Make sure you're signed in with your Apple ID.",
    image: "/setup/ios-step-1.jpg",
    alt: "Open the App Store on your iPhone",
  },
  {
    title: "Search for IPTV App",
    description:
      "Search for a recommended IPTV app such as 'GSE Smart IPTV' or 'IPTVX'. Read reviews and check compatibility with your iOS version.",
    image: "/setup/ios-step-2.jpg",
    alt: "Search for IPTV app in the App Store",
  },
  {
    title: "Install the App",
    description:
      "Tap 'Get' or the price button to download and install the app. Wait for the installation to complete.",
    image: "/setup/ios-step-3.jpg",
    alt: "Install IPTV app on iOS device",
  },
  {
    title: "Enter Login Details",
    description:
      "Open the IPTV app and navigate to the settings or login section. Enter the username and password provided by your IPTV subscription provider.",
    image: "/setup/ios-step-4.jpg",
    alt: "Enter IPTV login details on iOS app",
  },
  {
    title: "Start Streaming",
    description:
      "Once logged in, the app will load your channel list. Browse categories, select channels, and start streaming IPTV content on your iOS device.",
    image: "/setup/ios-step-5.jpg",
    alt: "Start streaming IPTV channels on iPhone",
  },
]

export const metadata: Metadata = {
  title: "How to Install IPTV on iOS (iPhone & iPad)",
  description: "Step-by-step guide to install and set up IPTV on iPhone and iPad using our recommended app.",
  alternates: { canonical: `${SITE_URL}/setup/how-to-install-iptv-on-ios` },
  openGraph: {
    title: "How to Install IPTV on iOS (iPhone & iPad)",
    description: "Step-by-step guide to install and set up IPTV on iPhone and iPad using our recommended app.",
    images: [{ url: `${SITE_URL}/og-android.jpg`, alt: "iOS IPTV Setup Guide" }],
  },
}

export default function IosSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">iOS Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold">How to Install IPTV on iOS (iPhone & iPad)</h1>
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
            <Link href="/setup/how-to-install-iptv-on-smart-tv" className="text-primary underline underline-offset-4">
              Smart TV
            </Link>
            {", or "}
            <Link href="/setup/how-to-setup-iptv-on-mag-device" className="text-primary underline underline-offset-4">
              MAG Device
            </Link>
            {" installation guides."}
          </p>
          <p className="text-lg text-muted-foreground">
            This guide explains how to install and configure IPTV apps on iPhone and iPad devices. The process is
            straightforward and doesn&apos;t require jailbreaking your device.
          </p>

          <div className="mt-8 mb-10 flex justify-center">
            <div className="relative max-w-3xl w-full">
              <Image
                src="/og-android.jpg"
                alt="iOS IPTV Setup Guide"
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
          <h2 className="text-3xl font-bold">Stream on Your iPhone or iPad</h2>
          <p className="text-muted-foreground">
            Once your IPTV app is installed and configured, you can access thousands of channels, movies, and live
            sports directly on your iOS device. Need a subscription? Choose the plan that fits your needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=setup&utm_campaign=ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>

      <FaqSection id="ios-faq" title="iOS IPTV Setup FAQ" items={faqItems} />

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
                name: "How to Install IPTV on iOS (iPhone & iPad)",
                item: `${SITE_URL}/setup/how-to-install-iptv-on-ios`,
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
        name="How to Install IPTV on iOS"
        description="How to set up and log in to IPTV on iPhone or iPad."
        url={`${SITE_URL}/setup/how-to-install-iptv-on-ios`}
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageUrl: step.image,
        }))}
      />
    </div>
  )
}

