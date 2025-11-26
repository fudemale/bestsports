import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { GLOBAL_CTA_URL } from "@/lib/constants"

const basePlanFeatures = [
  "1 Connection",
  "15,000+ Channels",
  "4K & FHD Quality",
  "Anti-Freeze Technology",
  "24/7 Support",
]

const plans = [
  {
    name: "Monthly",
    price: "£14.99",
    oldPrice: null,
    suffix: "/mo",
    highlighted: false,
    features: basePlanFeatures,
    cta: "Choose Plan",
    badge: null,
    blurb: null,
  },
  {
    name: "Annual",
    price: "£64.99",
    oldPrice: "£79.99",
    suffix: "/yr",
    highlighted: true,
    features: ["2 Connections", ...basePlanFeatures.slice(1), "Priority Support", "VOD Library Included"],
    cta: "Get Started",
    badge: "Best Value",
    blurb: "Save 55% compared to monthly",
  },
  {
    name: "Quarterly",
    price: "£24.99",
    oldPrice: "£34.99",
    suffix: "/3mo",
    highlighted: false,
    features: basePlanFeatures,
    cta: "Choose Plan",
    badge: null,
    blurb: null,
  },
]

type PlansSectionProps = {
  ctaUrl?: string
}

export function PlansSection({ ctaUrl = GLOBAL_CTA_URL }: PlansSectionProps) {
  return (
    <section id="plans" className="py-20 relative bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your needs. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card p-8 rounded-2xl flex flex-col border-border hover:border-primary/30 transition-colors bg-card/40 ${
                plan.highlighted
                  ? "border-primary/50 relative bg-gradient-to-b from-primary/5 to-transparent transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,225,255,0.1)]"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-xl font-medium mb-2 ${plan.highlighted ? "text-primary" : "text-muted-foreground"}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                {plan.oldPrice ? (
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-lg text-muted-foreground line-through" aria-label="Old price">
                      {plan.oldPrice}
                    </span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                ) : (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                )}
                <p className="text-sm text-muted-foreground text-center">{plan.suffix}</p>
              </div>
              {plan.blurb && <p className="text-sm text-green-500 mb-6">{plan.blurb}</p>}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,225,255,0.3)]"
                    : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                }`}
              >
                <Link href={ctaUrl}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
