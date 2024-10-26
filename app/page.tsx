"use client";

import { HeroSection } from "./components/HeroSection";
import { MusicShowcase } from "./components/MusicShowcase";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <MusicShowcase />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}