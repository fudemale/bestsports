import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL, BRAND_NAME } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Refund Policy | Best Sports IPTV",
  description:
    "Understand how refunds and cancellations are handled for IPTV subscriptions purchased via our recommended provider.",
  alternates: { canonical: `${SITE_URL}/refund-policy` },
}

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
          <p className="text-sm opacity-60 mb-8">
            Last updated: {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p>
                {BRAND_NAME} is an editorial website that provides information and reviews about IPTV services. We do not
                directly process payments or manage subscriptions for IPTV services.
              </p>
              <p>
                IPTV subscriptions are provided by third-party service providers, including but not limited to VWatch
                (vwatch.live). All refund requests, cancellations, and billing inquiries must be directed to the
                respective IPTV service provider from whom you purchased your subscription.
              </p>
              <p>
                This policy outlines general information about refunds for IPTV subscriptions purchased through links on
                our website. Specific refund terms may vary by provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Eligibility for Refunds</h2>
              <p>
                Many IPTV service providers offer a 30-day money-back guarantee for new subscriptions. Refund eligibility
                typically depends on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Time Period:</strong> Refund requests must usually be made within 30 days of the original
                  purchase date.
                </li>
                <li>
                  <strong>Service Issues:</strong> Refunds may be available if you experience significant technical
                  problems that prevent you from using the service, and the provider is unable to resolve these issues.
                </li>
                <li>
                  <strong>Billing Errors:</strong> Refunds may be issued for duplicate charges, incorrect amounts, or
                  unauthorized transactions.
                </li>
                <li>
                  <strong>Provider Policies:</strong> Each IPTV provider has its own refund policy. Please review the
                  provider&apos;s terms before purchasing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Non-Refundable Situations</h2>
              <p>Refunds are typically not available in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Expired Refund Period:</strong> Requests made after the provider&apos;s specified refund period
                  (typically 30 days from purchase).
                </li>
                <li>
                  <strong>Service Usage:</strong> If you have used a significant portion of your subscription period
                  and the service has been functioning as expected.
                </li>
                <li>
                  <strong>Violation of Terms:</strong> If your account was terminated due to violation of the provider&apos;s
                  terms of service.
                </li>
                <li>
                  <strong>Change of Mind:</strong> Simply changing your mind about the service after the refund period
                  has expired.
                </li>
                <li>
                  <strong>Third-Party Issues:</strong> Issues related to your internet connection, device compatibility,
                  or other factors outside the provider&apos;s control.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How to Request a Refund</h2>
              <p>To request a refund for an IPTV subscription:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Contact the Provider:</strong> Reach out directly to the IPTV service provider from whom you
                  purchased your subscription. This is typically done through their support email, support ticket system,
                  or customer service portal.
                </li>
                <li>
                  <strong>Provide Order Details:</strong> Include your order number, purchase date, email address used
                  for the purchase, and a clear explanation of why you are requesting a refund.
                </li>
                <li>
                  <strong>Be Patient:</strong> Allow the provider reasonable time to process your request. Response
                  times may vary depending on the provider.
                </li>
                <li>
                  <strong>Follow Up:</strong> If you don&apos;t receive a response within a few business days, follow up
                  with the provider.
                </li>
              </ol>
              <p>
                <strong>Important:</strong> {BRAND_NAME} cannot process refund requests on behalf of IPTV providers. All
                refund requests must be submitted directly to the service provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Processing Time</h2>
              <p>
                Refund processing times vary by provider and payment method. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Approval:</strong> Refund requests are typically reviewed within 3-7 business days.
                </li>
                <li>
                  <strong>Processing:</strong> Once approved, refunds may take 5-10 business days to appear in your
                  account, depending on your payment method and financial institution.
                </li>
                <li>
                  <strong>Payment Methods:</strong> Refunds are typically issued to the original payment method used for
                  the purchase.
                </li>
              </ul>
              <p>
                If you have questions about the status of your refund, contact the IPTV service provider directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellations</h2>
              <p>
                Most IPTV subscriptions are prepaid for a specific period (monthly, quarterly, or annual). Cancellation
                typically means that your subscription will not renew automatically at the end of the current billing
                period.
              </p>
              <p>
                Cancellation does not automatically entitle you to a refund for the remaining period of your current
                subscription, unless otherwise stated in the provider&apos;s refund policy.
              </p>
              <p>
                To cancel your subscription, contact the IPTV service provider directly using the contact information
                provided in your account or on their website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disputes and Chargebacks</h2>
              <p>
                If you are unable to resolve a refund issue directly with the IPTV provider, you may consider:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contacting Your Bank:</strong> If you paid by credit card, you may be able to dispute the
                  charge with your bank or credit card company. However, we recommend first attempting to resolve the
                  issue directly with the provider.
                </li>
                <li>
                  <strong>Documentation:</strong> Keep records of all communications, order confirmations, and receipts
                  related to your purchase and refund request.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Role</h2>
              <p>
                {BRAND_NAME} provides information and reviews about IPTV services. We are not involved in:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processing or billing</li>
                <li>Subscription management</li>
                <li>Refund processing</li>
                <li>Customer support for IPTV services</li>
              </ul>
              <p>
                We cannot guarantee refunds or intervene in disputes between customers and IPTV service providers. All
                refund requests, cancellations, and billing inquiries must be directed to the respective IPTV service
                provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update this Refund Policy from time to time. We will notify you of any changes by posting the new
                Refund Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p>
                You are advised to review this Refund Policy periodically for any changes. Changes to this Refund Policy
                are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <p>
                If you have questions about this Refund Policy, please contact us at:
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
              <p className="mt-4">
                <strong>Note:</strong> For refund requests related to IPTV subscriptions, please contact the IPTV service
                provider directly using the contact information provided in your account or on their website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

