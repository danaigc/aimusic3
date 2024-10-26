"use client";

import { PricingSection } from "../components/PricingSection";
import { MusicShowcase } from "../components/MusicShowcase";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      <div className="relative z-10 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          选择您的计划
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          开始使用我们灵活的定价选项创作令人惊叹的音乐
        </p>
        <PricingSection />
      </div>

      <div className="border-t relative z-10">
        <div className="py-12 md:py-24">
          <MusicShowcase />
        </div>
      </div>
    </div>
  );
}
