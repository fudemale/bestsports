import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, BRAND_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy | Best Sports IPTV",
  description:
    "Read how Best Sports IPTV collects, uses, and protects your personal data when you visit our site or purchase IPTV services.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm opacity-60 mb-8">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                {BRAND_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
                <Link href={SITE_URL} className="text-primary underline underline-offset-4">
                  {SITE_URL}
                </Link>{" "}
                or use our services.
              </p>
              <p>
                By using our website, you agree to the collection and use of information in accordance with this Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> When you contact us or subscribe to our newsletter, we may
                  collect your name, email address, and any other information you voluntarily provide.
                </li>
                <li>
                  <strong>Usage Data:</strong> We automatically collect information about how you interact with our
                  website, including your IP address, browser type, pages visited, time spent on pages, and referring
                  URLs.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar
                  technologies to track activity on our website and store certain information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our website and services</li>
                <li>To respond to your inquiries, comments, or requests</li>
                <li>To send you newsletters, marketing communications, and updates (with your consent)</li>
                <li>To analyze website usage and trends to enhance user experience</li>
                <li>To detect, prevent, and address technical issues and security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies & Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier.
              </p>
              <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              <p>
                We may use third-party analytics services (such as Google Analytics) to help analyze how users use our
                website. These services use cookies to collect information such as how often users visit our website
                and what pages they visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention</h2>
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined
                in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                When we no longer need your personal information, we will securely delete or anonymize it in accordance
                with our data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p>We may use third-party services that collect, monitor, and analyze data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Analytics Services:</strong> We use analytics services to understand website usage and
                  improve our services.
                </li>
                <li>
                  <strong>Payment Processors:</strong> When you purchase IPTV subscriptions through our recommended
                  provider (vwatch.live), payment processing is handled by third-party payment processors. We do not
                  store or process payment card information.
                </li>
                <li>
                  <strong>Hosting and Infrastructure:</strong> Our website is hosted on third-party servers, which may
                  process your data as part of their services.
                </li>
              </ul>
              <p>
                These third parties have access to your information only to perform specific tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> You have the right to request copies of your personal data.
                </li>
                <li>
                  <strong>Rectification:</strong> You have the right to request that we correct any information you
                  believe is inaccurate or complete information you believe is incomplete.
                </li>
                <li>
                  <strong>Erasure:</strong> You have the right to request that we erase your personal data under certain
                  conditions.
                </li>
                <li>
                  <strong>Restrict Processing:</strong> You have the right to request that we restrict the processing
                  of your personal data under certain conditions.
                </li>
                <li>
                  <strong>Object to Processing:</strong> You have the right to object to our processing of your
                  personal data under certain conditions.
                </li>
                <li>
                  <strong>Data Portability:</strong> You have the right to request that we transfer the data we have
                  collected to another organization or directly to you under certain conditions.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:support@bestsportsiptv.com" className="text-primary underline underline-offset-4">
                  support@bestsportsiptv.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your personal information, we cannot guarantee
                its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under the age of 18. We do not knowingly collect personal
                information from children under 18. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email:{" "}
                <a href="mailto:support@bestsportsiptv.com" className="text-primary underline underline-offset-4">
                  support@bestsportsiptv.com
                </a>
              </p>
              <p>
                Website:{" "}
                <Link href={SITE_URL} className="text-primary underline underline-offset-4">
                  {SITE_URL}
                </Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

