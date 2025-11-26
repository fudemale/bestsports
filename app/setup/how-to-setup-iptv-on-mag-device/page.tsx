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
    q: "What is a MAG device?",
    a: "MAG devices are set-top boxes designed specifically for IPTV streaming. Popular models include MAG 254, MAG 256, and MAG 322.",
  },
  {
    q: "Do I need a portal URL for MAG devices?",
    a: "Yes. MAG devices require a portal URL provided by your IPTV service provider to connect to the service.",
  },
  {
    q: "Can I use any IPTV service with a MAG device?",
    a: "MAG devices work with IPTV services that provide portal URLs compatible with the MAG platform. Check with your provider for MAG compatibility.",
  },
  {
    q: "What should I do if the portal URL doesn't work?",
    a: "Double-check the URL format, ensure your device is connected to the internet, and contact your IPTV provider's support for assistance.",
  },
]

const faqItems: FaqItem[] = faqEntries.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}))

const steps = [
  {
    title: "Connect MAG Device to TV and Internet",
    description:
      "Connect your MAG device to your TV using an HDMI cable and ensure it's connected to your home network via Ethernet or Wi-Fi.",
    image: "/setup/mag-step-1.jpg",
    alt: "Connect MAG device to TV and internet",
  },
  {
    title: "Open Settings Menu",
    description:
      "Power on your MAG device and navigate to the Settings menu using the remote control. Look for 'System Settings' or 'Servers' option.",
    image: "/setup/mag-step-2.jpg",
    alt: "Open settings menu on MAG device",
  },
  {
    title: "Enter Portal URL",
    description:
      "In the Settings menu, find the 'Portal' or 'Portal URL' field. Enter the portal URL provided by your IPTV subscription provider.",
    image: "/setup/mag-step-3.jpg",
    alt: "Enter IPTV portal URL on MAG device",
  },
  {
    title: "Save and Reboot",
    description:
      "Save the portal URL settings and reboot your MAG device. The device will automatically connect to your IPTV service after restarting.",
    image: "/setup/mag-step-4.jpg",
    alt: "Save and reboot MAG device",
  },
  {
    title: "Login and Access Channels",
    description:
      "After rebooting, your MAG device should display the IPTV service interface. Enter your login credentials if prompted, then browse and stream channels.",
    image: "/setup/mag-step-5.jpg",
    alt: "Login and access IPTV channels on MAG device",
  },
]

export const metadata: Metadata = {
  title: "How to Set Up IPTV on MAG Device",
  description: "Step-by-step instructions to configure IPTV on MAG devices using portal URL and account details.",
  alternates: { canonical: `${SITE_URL}/setup/how-to-setup-iptv-on-mag-device` },
  openGraph: {
    title: "How to Set Up IPTV on MAG Device",
    description: "Step-by-step instructions to configure IPTV on MAG devices using portal URL and account details.",
    images: [{ url: `${SITE_URL}/og-android.jpg`, alt: "MAG Device IPTV Setup Guide" }],
  },
}

export default function MagDeviceSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">MAG Device Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold">How to Set Up IPTV on MAG Device</h1>
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
            <Link href="/setup/how-to-install-iptv-on-smart-tv" className="text-primary underline underline-offset-4">
              Smart TV
            </Link>
            {" installation guides."}
          </p>
          <p className="text-lg text-muted-foreground">
            This guide explains how to configure IPTV on MAG devices (such as MAG 254, MAG 256, and MAG 322) using a
            portal URL provided by your IPTV subscription service.
          </p>

          <div className="mt-8 mb-10 flex justify-center">
            <div className="relative max-w-3xl w-full">
              <Image
                src="/og-android.jpg"
                alt="MAG Device IPTV Setup Guide"
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
                  "relative w-full rounded-xl overflow-hidden border border-white/10 bg-white/5",
                  index === 0 || index === 3 || index === 4 ? "aspect-[4/3]" : "aspect-video"
                )}
              >
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.alt}
                  fill
                  className={cn(
                    "transition-transform duration-300",
                    index === 0 || index === 3 || index === 4 ? "object-contain" : "object-cover"
                  )}
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Stream with Your MAG Device</h2>
          <p className="text-muted-foreground">
            Once your MAG device is configured with the portal URL, you can access thousands of IPTV channels, movies,
            and live sports. Need a subscription? Choose the plan that fits your needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=setup&utm_campaign=mag-device"
              target="_blank"
              rel="noopener noreferrer"
            >
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>

      <FaqSection id="mag-device-faq" title="MAG Device IPTV Setup FAQ" items={faqItems} />

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
                name: "How to Set Up IPTV on MAG Device",
                item: `${SITE_URL}/setup/how-to-setup-iptv-on-mag-device`,
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
        name="How to Set Up IPTV on MAG Device"
        description="How to configure IPTV portal on MAG devices with your login details."
        url={`${SITE_URL}/setup/how-to-setup-iptv-on-mag-device`}
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageUrl: step.image,
        }))}
      />
    </div>
  )
}

