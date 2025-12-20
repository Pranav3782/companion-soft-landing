import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic features",
    features: [
      "Post 3 moments per week",
      "Join unlimited activities",
      "Basic matching",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
    color: "bg-card",
  },
  {
    name: "Companion Plus",
    price: "$9.99",
    period: "per month",
    description: "Unlock the full experience",
    features: [
      "Unlimited moments",
      "Priority matching",
      "Advanced filters",
      "See who viewed your profile",
      "Ad-free experience",
    ],
    cta: "Get Started",
    popular: true,
    color: "bg-mint",
  },
  {
    name: "Companion Pro",
    price: "$19.99",
    period: "per month",
    description: "For power connectors",
    features: [
      "Everything in Plus",
      "Verified badge",
      "Host group events",
      "Business networking tools",
      "Analytics dashboard",
      "Early access to features",
    ],
    cta: "Get Started",
    popular: false,
    color: "bg-card",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-card">
      <div className="container px-4 lg:px-8">
        {/* Header */}
        <AnimateOnScroll animation="fade-up" className="text-center mb-16">
          <span className="inline-block text-sage font-semibold mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Start for free, upgrade when you're ready
          </p>
        </AnimateOnScroll>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimateOnScroll
              key={plan.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                className={`relative rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 h-full flex flex-col ${
                  plan.popular
                    ? "bg-mint -translate-y-2 hover:-translate-y-3"
                    : "bg-background hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-sage text-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-soft">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-sage/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "hero" : "soft"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
