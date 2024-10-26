"use client";

import { TestimonialCard } from "./TestimonialCard";
import { Marquee, MarqueeContent } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Sarah Chen",
    username: "sarahchen",
    content: "AI Music Lab has transformed my creative process. The AI-generated tracks are incredibly inspiring and have helped me overcome writer's block countless times! 🎵✨",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Michael Rodriguez",
    username: "mrodmusic",
    content: "The quality of music generated is mind-blowing. I've used it for background scores, and my clients can't tell the difference. A game-changer for composers! 🎹🚀",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Emily Taylor",
    username: "emilytaylor",
    content: "From creating custom backing tracks to full compositions, AI Music Lab has become an essential part of my production toolkit. Simply amazing! 🎼👌",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "David Kim",
    username: "davidkim",
    content: "The versatility of styles and quality of the output is incredible. Perfect for quick prototyping and inspiration! 🎸✨",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Lisa Wang",
    username: "lisawang",
    content: "As a music producer, this tool has revolutionized my workflow. The AI understands musical patterns incredibly well! 🎧💫",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">What People Are Saying</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of musicians who are already creating amazing music with AI Music Lab
          </p>
        </div>
        
        <div className="relative space-y-8">
          <Marquee pauseOnHover speed={40}>
            <MarqueeContent>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[400px] flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </MarqueeContent>
          </Marquee>
          
          <Marquee pauseOnHover speed={40} direction="right">
            <MarqueeContent>
              {testimonials.map((testimonial, index) => (
                <div key={`reverse-${index}`} className="w-[400px] flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </MarqueeContent>
          </Marquee>
        </div>
      </div>
    </section>
  );
}