"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const YEARLY_DISCOUNT = 0.2; // 20% discount for yearly billing

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
    description: "Perfect for getting started with AI music generation",
    features: [
      "5 AI music generations per month",
      "Basic music styles",
      "MP3 export (192kbps)",
      "Community support",
      "Basic editing tools",
    ],
    highlighted: false,
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    description: "Ideal for musicians and content creators",
    features: [
      "100 AI music generations per month",
      "All music styles & fusion genres",
      "MP3 & WAV export (320kbps)",
      "Priority support",
      "Advanced editing tools",
      "Stem separation",
      "Commercial license",
      "No watermark",
    ],
    highlighted: true,
    buttonText: "Start Pro",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    description: "For professional studios and businesses",
    features: [
      "Unlimited AI music generations",
      "Custom AI model training",
      "All export formats & qualities",
      "24/7 dedicated support",
      "API access",
      "Team collaboration tools",
      "Extended commercial license",
      "Custom branding",
      "Priority processing",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const getPrice = (monthlyPrice: number, isYearly: boolean) => {
    if (monthlyPrice === 0) return "0";
    if (isYearly) {
      const discountedMonthly = monthlyPrice * (1 - YEARLY_DISCOUNT);
      return discountedMonthly.toFixed(0);
    }
    return monthlyPrice.toString();
  };

  const getYearlyTotal = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return "0";
    const yearlyPrice = monthlyPrice * 12 * (1 - YEARLY_DISCOUNT);
    return yearlyPrice.toFixed(0);
  };

  return (
    <section className="w-full py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your creative needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
              <span className="ml-1.5 inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative p-8 transition-all duration-200 hover:shadow-xl ${
                tier.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "hover:border-primary/50"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ${getPrice(tier.monthlyPrice, isYearly)}
                  </span>
                  <span className="text-muted-foreground">
                    /month
                  </span>
                  {isYearly && tier.monthlyPrice > 0 && (
                    <div className="text-sm text-muted-foreground mt-1">
                      ${getYearlyTotal(tier.monthlyPrice)} billed annually
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.buttonVariant}
                className="w-full"
                size="lg"
              >
                {tier.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            All plans include:{" "}
            <span className="font-medium text-foreground">
              SSL encryption, 99.9% uptime guarantee, automatic backups
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}