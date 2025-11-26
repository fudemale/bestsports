import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, BRAND_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service | Best Sports IPTV",
  description: "Review the terms and conditions that govern your use of Best Sports IPTV websites and services.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
}

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm opacity-60 mb-8">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the {BRAND_NAME} website located at{" "}
                <Link href={SITE_URL} className="text-primary underline underline-offset-4">
                  {SITE_URL}
                </Link>{" "}
                (the &quot;Website&quot;), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service. We reserve the right to
                modify these terms at any time, and such modifications shall be effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Description</h2>
              <p>
                {BRAND_NAME} is an editorial website that provides information, reviews, and guides about IPTV (Internet
                Protocol Television) services. We do not directly provide IPTV streaming services.
              </p>
              <p>
                IPTV subscriptions are provided by third-party service providers, including but not limited to VWatch
                (vwatch.live). When you click on links to purchase IPTV subscriptions, you will be redirected to the
                third-party provider&apos;s website where transactions are processed.
              </p>
              <p>
                {BRAND_NAME} acts as an informational resource and may receive compensation from IPTV service providers
                when users purchase subscriptions through our referral links.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Account & Security</h2>
              <p>
                Some features of our website may require you to create an account or provide personal information. You
                are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring that the information you provide is accurate and up to date</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptable Use</h2>
              <p>You agree not to use the Website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Payments & Billing</h2>
              <p>
                All IPTV subscription purchases are processed by third-party providers (such as vwatch.live). {BRAND_NAME}{" "}
                is not involved in payment processing, billing, or subscription management.
              </p>
              <p>
                When you purchase an IPTV subscription through a link on our website, you enter into a separate agreement
                with the third-party provider. All payment terms, refund policies, and billing inquiries should be
                directed to the respective IPTV service provider.
              </p>
              <p>
                {BRAND_NAME} is not responsible for any issues related to payments, billing, or subscription services
                provided by third-party IPTV providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability & Disclaimer</h2>
              <p>
                The information on this Website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law,
                {BRAND_NAME} excludes all representations, warranties, conditions, and terms relating to our website
                and the use of this website.
              </p>
              <p>
                We do not guarantee that the Website will be available at all times or that it will be free from errors,
                viruses, or other harmful components. We reserve the right to modify, suspend, or discontinue any aspect
                of the Website at any time.
              </p>
              <p>
                The information provided on this Website is for general informational purposes only. We do not warrant
                the accuracy, completeness, or usefulness of any information on the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p>
                The Website and its original content, features, and functionality are owned by {BRAND_NAME} and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our Website without prior
                written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                In no event shall {BRAND_NAME}, its directors, employees, partners, agents, suppliers, or affiliates be
                liable for any indirect, incidental, special, consequential, or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or inability to use the Website</li>
                <li>Any conduct or content of third parties on the Website</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Website</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Website</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of
                  any content posted, emailed, transmitted, or otherwise made available through the Website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless {BRAND_NAME} and its licensee and licensors, and their
                employees, contractors, agents, officers and directors, from and against any and all claims, damages,
                obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s
                fees).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p>
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Website will cease immediately. All provisions of the Terms
                which by their nature should survive termination shall survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which {BRAND_NAME}
                operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access
                or use our Website after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

