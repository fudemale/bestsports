import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { PlansSection } from "@/components/sections/home/plans-section"
import { FaqSection, type FaqItem } from "@/components/sections/home/faq-section"
import { CallToActionSection } from "@/components/sections/home/call-to-action-section"
import type { ComparisonTableConfig, RelatedLink } from "@/lib/landing-page-configs"

type LandingPageTemplateProps = {
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

function renderValue(value: string | boolean): string {
  if (typeof value === "boolean") {
    return value ? "✓" : "✗"
  }
  return value
}

export function LandingPageTemplate({
  title: _title,
  description,
  keyword,
  benefits,
  comparisonTable,
  faqs,
  ogImage,
  ctaUrl,
  relatedLinks,
}: LandingPageTemplateProps) {
  const isNewFormat = "columns" in comparisonTable && "rows" in comparisonTable
  const brandLabel = isNewFormat ? comparisonTable.columns[1] : comparisonTable.brandLabel || "Best Sports IPTV"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">{keyword}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">{description}</p>

          {/* Trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 bg-white/5">
              <span>⭐</span>
              <span>4.9/5 average rating</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 bg-white/5">
              10,000+ IPTV customers
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 bg-white/5">
              30-day money-back guarantee
            </span>
          </div>

          {ogImage && ogImage !== "/placeholder.jpg" && (
            <div className="mt-8 mb-10 flex justify-center">
              <div className="relative max-w-3xl w-full">
                <Image
                  src={ogImage || "/placeholder.svg"}
                  alt={`${keyword} - ${description}`}
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <article className="glass-card rounded-2xl p-6 md:p-8 text-base text-muted-foreground leading-relaxed space-y-4">
            <p>
              Looking for a reliable {keyword.toLowerCase()}? Our platform is the go-to choice for sports fans who need
              stable, 4K-ready IPTV streams with instant activation. We combine extensive channel lineups, anti-freeze
              delivery, and 24/7 technical support to keep every match, fight, and tournament online without the usual
              buffering issues.
            </p>
            <p>
              Every {keyword.toLowerCase()} includes access to global leagues, on-demand sports replays, and device
              compatibility across Smart TV, Android, iOS, and more—so you can enjoy your {keyword.toLowerCase()} at
              home or on the go.
            </p>
          </article>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of {keyword}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why {keyword.toLowerCase()} is the preferred choice for sports streaming enthusiasts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Us vs. Competitors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how {keyword.toLowerCase()} compares to other options in the market.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="glass-card rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    {isNewFormat ? (
                      comparisonTable.columns.map((col, idx) => (
                        <th key={idx} className="text-left p-4 font-semibold">
                          {col}
                        </th>
                      ))
                    ) : (
                      <>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-left p-4 font-semibold">{brandLabel}</th>
                        {comparisonTable.competitorLabels.map((label, idx) => (
                          <th key={idx} className="text-left p-4 font-semibold">
                            {label}
                          </th>
                        ))}
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {isNewFormat
                    ? comparisonTable.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className="p-4 text-sm text-muted-foreground">
                              {renderValue(cell)}
                            </td>
                          ))}
                        </tr>
                      ))
                    : comparisonTable.rows.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-primary">{renderValue(row.brand)}</td>
                          {row.competitors.map((comp, compIdx) => (
                            <td key={compIdx} className="p-4 text-muted-foreground">
                              {renderValue(comp)}
                            </td>
                          ))}
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <PlansSection ctaUrl={ctaUrl} />

      {/* FAQ Section */}
      <FaqSection items={faqs} />

      {/* Related Links Section */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section aria-label="Related IPTV guides" className="mt-16 border-t border-white/5 pt-10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Related IPTV guides</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl">
              If you&apos;re still comparing providers or looking for more detail on plans and channels, these guides are a
              helpful next step.
            </p>

            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-xl border border-white/5 bg-white/0 hover:bg-white/[0.02] hover:border-white/15 transition-colors p-4 md:p-5 flex flex-col gap-1"
                >
                  <span className="text-sm font-medium md:text-base flex items-center gap-2">
                    <span>{link.label}</span>
                    <span className="text-primary group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                  {link.description && (
                    <span className="text-xs md:text-sm text-muted-foreground">{link.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CallToActionSection ctaUrl={ctaUrl} />
    </div>
  )
}
