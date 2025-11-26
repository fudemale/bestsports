import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaqSection, type FaqItem } from "@/components/sections/home/faq-section"
import { HowToStructuredData } from "@/components/seo/HowToStructuredData"
import { SITE_URL } from "@/lib/constants"

const faqEntries = [
  {
    q: "Do I need a computer to install IPTV on FireStick?",
    a: "No. Everything can be done directly on the FireStick using the Downloader app.",
  },
  { q: "Is this method safe?", a: "Yes. All apps are installed manually using your chosen app download links." },
  { q: "Can I install multiple IPTV apps?", a: "Yes. FireStick supports installing more than one IPTV application." },
  { q: "Does it work on FireStick 4K and 4K Max?", a: "Yes. All Fire TV models are supported." },
]

const faqItems: FaqItem[] = faqEntries.map((faq) => ({
  question: faq.q,
  answer: faq.a,
}))

const steps = [
  {
    title: "Enable Apps from Unknown Sources",
    description: "Open Settings → My Fire TV → Developer Options → Enable “Apps from Unknown Sources”.",
    image: "/setup/firestick-step1.jpg",
    alt: "Enable Apps from Unknown Sources on Fire TV",
  },
  {
    title: "Install Downloader from Appstore",
    description: "Search for “Downloader” in the FireStick App Store and install it.",
    image: "/setup/firestick-step2.jpg",
    alt: "Downloader app highlighted in Amazon Fire TV Appstore",
  },
  {
    title: "Enter Download Code / URL in Downloader",
    description:
      "Launch Downloader and enter one of the IPTV app codes below to download the installer for your preferred VWatch application.",
    image: "/setup/firestick-step3.jpg",
    alt: "Downloader app showing URL or code input field",
  },
  {
    title: "Install the IPTV App",
    description: "Follow the on-screen prompts in Downloader and press “Install” when the Fire TV installer appears.",
    image: "/setup/firestick-step4.jpg",
    alt: "Install screen for the IPTV app on Fire TV",
  },
  {
    title: "Login to the IPTV App",
    description: "Launch the IPTV app you installed and enter the login details provided by your IPTV provider.",
    image: "/setup/firestick-step5.jpg",
    alt: "Login screen of the IPTV app with email and password fields",
  },
]

const downloadLinks = [
  { name: "VWatch Smart App", code: "2976062", url: "http://aftv.news/2976062" },
  { name: "VWatch Pro App", code: "6985178", url: "http://aftv.news/6985178" },
  { name: "VWatch Q App", code: "657517", url: "http://aftv.news/657517" },
]

export const metadata: Metadata = {
  title: "How to Install IPTV on FireStick (2025 Guide)",
  description:
    "Step-by-step FireStick IPTV installation guide. Learn how to install IPTV apps like VWatch Smart, Pro, and Q on Amazon FireStick.",
  alternates: { canonical: "https://bestsportsiptv.com/setup/how-to-install-iptv-on-firestick" },
  openGraph: {
    title: "How to Install IPTV on FireStick (2025 Guide)",
    description:
      "Step-by-step FireStick IPTV installation guide. Learn how to install IPTV apps like VWatch Smart, Pro, and Q on Amazon FireStick.",
    images: [{ url: `${SITE_URL}/og/og-firestick.jpg`, alt: "FireStick IPTV Setup Guide" }],
  },
}

export default function FirestickSetupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">FireStick Setup</p>
          <h1 className="text-4xl md:text-5xl font-bold">How to Install IPTV on FireStick (2025 Guide)</h1>
          <p className="text-sm opacity-60">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", year: "numeric" })}
          </p>
          <p className="text-sm text-muted-foreground">
            Looking for other devices? Check out our{" "}
            <Link href="/setup/how-to-install-iptv-on-android" className="text-primary underline underline-offset-4">
              Android
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
            A complete, easy-to-follow tutorial showing how to install IPTV apps on Amazon FireStick. This guide uses
            the VWatch Smart, VWatch Pro, and VWatch Q apps as examples. Updated for 2025.
          </p>
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

          {/* PDF Download Section */}
          {/* NOTE: File must exist at public/setup/firestick-setup-guide.pdf */}
          <section className="mt-8 mb-10 rounded-xl border border-white/10 bg-white/5 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Prefer a PDF Guide?</h2>
            <p className="text-sm md:text-base text-white/70 mb-4">
              You can download our complete FireStick IPTV setup guide as a PDF. This is the same guide we send
              customers — clean, easy to follow, and perfect for keeping open on your phone while setting up.
            </p>

            <Button asChild size="lg" className="mt-4">
              <a
                href="/setup/firestick-setup-guide.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download FireStick Setup PDF
              </a>
            </Button>
          </section>

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
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              </div>
              {index === 2 && (
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
          <h2 className="text-3xl font-bold">Stream-Ready in Minutes</h2>
          <p className="text-muted-foreground">
            Once your chosen IPTV app is installed, enter the credentials from your provider and explore thousands of
            channels, movies, and live sports. Need a subscription? Choose a plan that fits your needs.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link
              href="https://vwatch.live/index.php/store/subscriptions?utm_source=bestsportsiptv&utm_medium=setup&utm_campaign=firestick"
              target="_blank"
              rel="noopener noreferrer"
            >
              View IPTV Plans
            </Link>
          </Button>
        </div>
      </section>

      <FaqSection id="firestick-faq" title="FireStick IPTV Setup FAQ" items={faqItems} />

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
                name: "How to Install IPTV on FireStick (2025 Guide)",
                item: "https://bestsportsiptv.com/setup/how-to-install-iptv-on-firestick",
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
        name="How to Install IPTV on FireStick"
        description="Step-by-step guide to install IPTV on your Amazon FireStick."
        url={`${SITE_URL}/setup/how-to-install-iptv-on-firestick`}
        steps={steps.map((step) => ({
          title: step.title,
          description: step.description,
          imageUrl: step.image,
        }))}
      />
    </div>
  )
}
