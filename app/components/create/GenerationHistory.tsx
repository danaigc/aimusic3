"use client";

import { Button } from "@/components/ui/button";
import { GenerationHistoryCard } from "./GenerationHistoryCard";
import { History } from "lucide-react";
import { useEffect, useState } from "react";

export function GenerationHistory() {
  const items = Array.from({ length: 20 }, (_, index) => index);
  const [maxHeight, setMaxHeight] = useState("100vh");

  useEffect(() => {
    const updateMaxHeight = () => {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      setMaxHeight(`calc(100vh - ${navHeight}px)`);
    };

    updateMaxHeight();
    window.addEventListener('resize', updateMaxHeight);

    return () => window.removeEventListener('resize', updateMaxHeight);
  }, []);

  return (
    <div className="h-full flex flex-col" style={{ maxHeight }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">History</h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto -mx-4">
        <div className="space-y-4 px-4 pb-44 md:pb-6">
          {items.map((index) => (
            <GenerationHistoryCard
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
