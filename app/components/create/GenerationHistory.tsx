"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GenerationHistoryCard } from "./GenerationHistoryCard";
import { History } from "lucide-react";

export function GenerationHistory() {
  const items = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">History</h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <ScrollArea className="flex-1 -mx-4 px-4">
        <div className="space-y-4 pr-2">
          {items.map((index) => (
            <GenerationHistoryCard
              key={index}
              index={index}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}