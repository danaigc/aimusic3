"use client";

import { useState } from "react";
import { MusicGenerationForm } from "../components/create/MusicGenerationForm";
import { GenerationHistory } from "../components/create/GenerationHistory";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";

export default function CreatePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-muted/30">
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Create Your Music
            </h1>
            
            {/* Mobile History Button */}
            <div className="lg:hidden">
              <Sheet open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="rounded-full">
                    <History className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] p-4">
                  <SheetTitle className="text-xl font-semibold mb-4">Generation History</SheetTitle>
                  <div className="h-[calc(100%-3rem)]">
                    <GenerationHistory />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          <div className="bg-background rounded-2xl shadow-lg p-4 lg:p-8">
            <MusicGenerationForm
              isGenerating={isGenerating}
              selectedStyle={selectedStyle}
              lyrics={lyrics}
              prompt={prompt}
              onStyleChange={setSelectedStyle}
              onLyricsChange={(e) => setLyrics(e.target.value)}
              onPromptChange={(e) => setPrompt(e.target.value)}
              onGenerate={handleGenerate}
            />
          </div>
        </div>
      </div>

      {/* Desktop History Panel */}
      <div className="hidden lg:block w-[400px] bg-background border-l p-6 overflow-auto">
        <GenerationHistory />
      </div>
    </div>
  );
}