"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const musicStyles = [
  "Pop",
  "Rock",
  "Jazz",
  "Classical",
  "Electronic",
  "Hip Hop",
  "R&B",
  "Country",
  "Folk",
  "Ambient",
];

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (value: string) => void;
}

export function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label className="text-sm font-medium">Music Style</label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Choose a base style for your music</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Select value={selectedStyle} onValueChange={onStyleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a style" />
        </SelectTrigger>
        <SelectContent>
          {musicStyles.map((style) => (
            <SelectItem key={style} value={style.toLowerCase()}>
              {style}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}