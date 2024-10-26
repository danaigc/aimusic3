"use client";

import { MusicCard } from "./MusicCard";

// Define the plan type as a union of literal types
type Plan = "Free" | "Pro" | "Enterprise";

// Define the track interface
interface Track {
  title: string;
  style: string;
  duration: string;
  height: string;
  image: string;
  plan: Plan;  // Use the Plan type here
}

// Define the featured music array with the correct type
const featuredMusic: Track[] = [
  {
    title: "Summer Vibes",
    style: "Pop",
    duration: "3:24",
    height: "h-[400px]",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    plan: "Pro" as Plan
  },
  {
    title: "Night Jazz",
    style: "Jazz",
    duration: "4:15",
    height: "h-[500px]",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    plan: "Enterprise" as Plan
  },
  {
    title: "Electronic Dreams",
    style: "Electronic",
    duration: "2:58",
    height: "h-[450px]",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    plan: "Free" as Plan
  },
  {
    title: "Classical Symphony",
    style: "Classical",
    duration: "5:30",
    height: "h-[380px]",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    plan: "Pro" as Plan
  },
  {
    title: "Hip Hop Beats",
    style: "Hip Hop",
    duration: "3:45",
    height: "h-[520px]",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
    plan: "Enterprise" as Plan
  },
  {
    title: "Rock Anthem",
    style: "Rock",
    duration: "4:02",
    height: "h-[420px]",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80",
    plan: "Pro" as Plan
  },
];

export function MusicShowcase() {
  return (
    <section className="w-full px-4">
      <div className="text-center mb-12 mt-12">
        <h2 className="text-3xl font-bold mb-4">Featured Creations</h2>
        <p className="text-muted-foreground">Listen to what others have created with AI Music Lab</p>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-[2000px] mx-auto">
        {featuredMusic.map((track, index) => (
          <div key={index} className="break-inside-avoid mb-6">
            <MusicCard {...track} />
          </div>
        ))}
      </div>
    </section>
  );
}