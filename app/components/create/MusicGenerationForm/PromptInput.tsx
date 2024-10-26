"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface PromptInputProps {
  prompt: string;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function PromptInput({ prompt, onPromptChange }: PromptInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Advanced Prompt</label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Use natural language to describe your desired music in detail</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
          View Examples
        </Button>
      </div>
      <Textarea
        placeholder="Describe your desired music in detail. Example: Create an upbeat electronic track with a driving bassline at 128 BPM, featuring atmospheric pads and a melodic lead synth. Include a breakdown in the middle with ambient textures..."
        value={prompt}
        onChange={onPromptChange}
        className="h-40 resize-none font-mono text-sm"
      />
      <p className="mt-2 text-sm text-muted-foreground">
        Use natural language to describe musical elements, emotions, instruments, structure, and any specific requirements.
      </p>
    </div>
  );
}