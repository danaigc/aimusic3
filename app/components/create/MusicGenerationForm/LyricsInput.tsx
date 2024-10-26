"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Sliders } from "lucide-react";

interface LyricsInputProps {
  lyrics: string;
  onLyricsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function LyricsInput({ lyrics, onLyricsChange }: LyricsInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Your Lyrics</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enter your lyrics to generate matching music</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button variant="ghost" size="sm" className="gap-2">
          <Sliders className="h-4 w-4" />
          Advanced Options
        </Button>
      </div>
      <Textarea
        placeholder="Enter your lyrics here..."
        value={lyrics}
        onChange={onLyricsChange}
        className="h-40 resize-none"
      />
    </div>
  );
}