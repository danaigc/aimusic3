"use client";

import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import Link from "next/link";
import { WaveAnimation } from "@/components/wave-animation";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      {/* Animated Wave Background - Centered and Larger */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <WaveAnimation />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-blue-500 mb-6 drop-shadow-sm">
          Create Amazing Music with AI
        </h1>
        <p className="text-xl text-foreground/90 mb-8 drop-shadow-sm">
          Transform your ideas into beautiful melodies using the power of artificial intelligence
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/create">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90">
              <Wand2 className="w-4 h-4" />
              Start Creating
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="backdrop-blur-sm">
              Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}