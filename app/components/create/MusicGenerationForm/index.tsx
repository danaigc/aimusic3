"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Loader2, 
  Music2, 
  Wand2, 
  Sparkles
} from "lucide-react";
import { StyleSelector } from "./StyleSelector";
import { LyricsInput } from "./LyricsInput";
import { PromptInput } from "./PromptInput";

interface MusicGenerationFormProps {
  isGenerating: boolean;
  selectedStyle: string;
  lyrics: string;
  prompt: string;
  onStyleChange: (value: string) => void;
  onLyricsChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPromptChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGenerate: () => void;
}

export function MusicGenerationForm({
  isGenerating,
  selectedStyle,
  lyrics,
  prompt,
  onStyleChange,
  onLyricsChange,
  onPromptChange,
  onGenerate,
}: MusicGenerationFormProps) {
  return (
    <Tabs defaultValue="lyrics" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="lyrics" className="gap-2">
          {/*<Waveform className="h-4 w-4" />*/}
          <span className="hidden sm:inline">From Lyrics</span>
          <span className="sm:hidden">Lyrics</span>
        </TabsTrigger>
        <TabsTrigger value="instrumental" className="gap-2">
          <Music2 className="h-4 w-4" />
          <span className="hidden sm:inline">Instrumental</span>
          <span className="sm:hidden">Music</span>
        </TabsTrigger>
        <TabsTrigger value="prompt" className="gap-2">
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">Prompt Mode</span>
          <span className="sm:hidden">Prompt</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lyrics">
        <Card className="p-4 sm:p-6">
          <div className="space-y-6">
            <StyleSelector 
              selectedStyle={selectedStyle}
              onStyleChange={onStyleChange}
            />
            <LyricsInput 
              lyrics={lyrics}
              onLyricsChange={onLyricsChange}
            />
            <Button 
              onClick={onGenerate} 
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate Music
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="instrumental">
        <Card className="p-4 sm:p-6">
          <div className="space-y-6">
            <StyleSelector 
              selectedStyle={selectedStyle}
              onStyleChange={onStyleChange}
            />
            <Button 
              onClick={onGenerate} 
              className="w-full"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Music2 className="mr-2 h-4 w-4" />
                  Generate Instrumental
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="prompt">
        <Card className="p-4 sm:p-6">
          <div className="space-y-6">
            <PromptInput 
              prompt={prompt}
              onPromptChange={onPromptChange}
            />
            <Button 
              onClick={onGenerate} 
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="hidden sm:inline">Crafting Your Music...</span>
                  <span className="sm:hidden">Generating...</span>
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Generate with AI</span>
                  <span className="sm:hidden">Generate</span>
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}