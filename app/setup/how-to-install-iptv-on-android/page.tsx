import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaqSection, type FaqItem } from "@/components/sections/home/faq-section"
import { HowToStructuredData } from "@/components/seo/HowToStructuredData"
import { SITE_URL } from "@/lib/constants"

const faqEntries = [
  { q: "Do I need the Play Store for IPTV apps?", a: "No. Apps can be installed directly using APK download links." },
  {
    q: "Is the installation process the same on Android TV?",
    a: "Yes. The steps are nearly identical for Android TV boxes.",
  },
  { q: "Can I install more than one IPTV app?", a: "Yes. Android devices support multiple IPTV apps without issues." },
  {
    q: "Do these steps work on tablets and phones?",
    a: "Yes. The process is compatible with Android phones, tablets, and TV boxes.",
  },
]

const faqItems: FaqItem[] = faqEntries.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}))

const steps = [
  {
    title: "Enable “Install Unknown Apps”",
    description:
      "Settings → Apps → Special Access → Install Unknown Apps → Allow for Chrome or your preferred browser.",
    image: "/setup/android-step1.webp",
  },
  {
    title: "Open Browser & Enter Download Link",
    description: "Use Chrome or another browser to open one of the official download links for the VWatch IPTV apps.",
    image: "/setup/android-step2.png",
  },
  {
    title: "Download & Install Prompt",
    description:
      "After the file downloads, you will see a prompt to install the application. Tap 'Install' to proceed.",
    image: "/setup/android-step3.png",
  },
  {
    title: "Complete Installation",
    description: "Follow the on-screen instructions to finish installing the VWatch app on your device.",
    image: "/setup/android-step4.jpg",
  },
  {
    title: "Open the App & Enter Login Details",
    description: "Launch the IPTV app and enter the username/password provided by your IPTV subscription.",
    image: "/setup/android-step5.png",
  },
]

const downloadLinks = [
  { name: "VWatch Smart App", code: "2976062", url: "http://aftv.news/2976062" },
  { name: "VWatch Pro App", code: "6985178", url: "http://aftv.news/6985178" },
  { name: "VWatch Q App", code: "657517", url: "http://aftv.news/657517" },
]

export const metadata: Metadata = {
  title: "How to Install IPTV on Android (Phones, Tablets & TV Boxes)",
  description:
    "Learn how to install IPTV apps on Android phones, tablets, and Android TV boxes using VWatch Smart, Pro, and Q apps.",
  alternates: { canonical: "https://bestsportsiptv.com/setup/how-to-install-iptv-on-android" },
  openGraph: {
    title: "How to Install IPTV on Android (Phones, Tablets & TV Boxes)",
    description:
      "Learn how to install IPTV apps on Android phones, tablets, and Android TV boxes using VWatch Smart, Pro, and Q apps.",
    images: [{ url: `${SITE_URL}/og/og-android.jpg`, alt: "Android IPTV Setup Guide" }],
  },
}

export default function AndroidSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Android Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            How to Install IPTV on Android (Phones, Tablets & TV Boxes)
          </h1>
          <p className="text-sm opacity-60">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
          </p>
          <p className="text-sm text-muted-foreground">
            Looking for other devices? Check out our{" "}
            <Link href="/setup/how-to-install-iptv-on-firestick" className="text-primary underline underline-offset-4">
              FireStick
            </Link>
            {", "}
            <Link href="/setup/how-to-install-iptv-on-ios" className="text-primary underline underline-offset-4">
              iOS
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
            This guide explains how to install IPTV apps on any Android device, including smartphones, tablets, and
            Android TV boxes.
          </p>

          <div className="mt-8 mb-10 flex justify-center">
            <div className="relative max-w-3xl w-full">
              <Image
                src="/og-android.jpg"
                alt="Android IPTV Setup Guide"
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
          <div className="flex flex-wrap gap-3 text-sm">
            {downloadLinks.map((link) => (
              <div
                key={link.code}
                className="glass-card border border-white/10 rounded-lg px-4 py-3 flex flex-col md:flex-row md:items-center gap-2"
              >
                <div className="font-semibold">{link.name}</div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Short Code: {link.code}</div>
                <Link
                  href={link.url}
                  className="text-primary underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.url}
                </Link>
              </div>
            ))}
          </div>
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
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
              {index === 1 && (
                <div className="grid gap-4 md:grid-cols-3">
                  {downloadLinks.map((link) => (
                    <div key={link.code} className="border border-white/10 rounded-xl p-4 bg-white/5 space-y-2">
                      <p className="text-sm text-muted-foreground">{link.name}</p>
                      <p className="text-xl font-semibold">Code: {link.code}</p>
                      <Link
                        href={link.url}
                        className="text-primary underline underline-offset-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.url}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Install, Log In, Stream</h2>
          <p className="text-muted-foreground">
            After installation, simply enter your IPTV credentials and start watching on any Android device. Need
            access? Choose the plan that matches your household.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=setup&utm_campaign=android"
              target="_blank"
              rel="noopener noreferrer"
            >
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>

      <FaqSection id="android-faq" title="Android IPTV Setup FAQ" items={faqItems} />

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
                item: "https://bestsportsiptv.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Setup Guides",
                item: "https://bestsportsiptv.com/setup",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "How to Install IPTV on Android (Phones, Tablets & TV Boxes)",
                item: "https://bestsportsiptv.com/setup/how-to-install-iptv-on-android",
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
        name="How to Install IPTV on Android"
        description="How to install and configure IPTV on Android phones and Android TV."
        url={`${SITE_URL}/setup/how-to-install-iptv-on-android`}
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageUrl: step.image,
        }))}
      />
    </div>
  )
}
