"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Loader2, 
  Music2, 
  Wand2, 
  Sparkles,
} from "lucide-react";
import { StyleSelector } from "./MusicGenerationForm/StyleSelector";
import { LyricsInput } from "./MusicGenerationForm/LyricsInput";
import { PromptInput } from "./MusicGenerationForm/PromptInput";

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
          <Wand2 className="h-4 w-4" />
          From Lyrics
        </TabsTrigger>
        <TabsTrigger value="instrumental" className="gap-2">
          <Music2 className="h-4 w-4" />
          Instrumental
        </TabsTrigger>
        <TabsTrigger value="prompt" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Prompt Mode
        </TabsTrigger>
      </TabsList>

      <TabsContent value="lyrics">
        <Card className="p-6">
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
        <Card className="p-6">
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
        <Card className="p-6">
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
                  Crafting Your Music...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate with AI
                </>
              )}
            </Button>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}