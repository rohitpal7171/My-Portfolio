"use client";

import { useState, useRef } from 'react';
import { Mic, Waves } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getVoiceResponse } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '../ui/input';

export default function VoiceAssistant() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const handleVoiceCommand = async () => {
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const result = await getVoiceResponse({ query });
      if (result.media) {
        if (audioRef.current) {
          audioRef.current.src = result.media;
          audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
      } else {
        toast({
          variant: "destructive",
          title: "Voice Error",
          description: "Could not generate voice response. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Error",
        description: "Failed to connect to the voice assistant.",
      });
      console.error("Voice assistant error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm hologram-border h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <Waves />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl">AI Voice Assistant</CardTitle>
                <CardDescription>Your auditory guide through the cosmos.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center text-center gap-6">
        <p className="text-foreground/70">
          Input a command or question below and hear our AI assistant respond.
        </p>
        <div className="relative w-full max-w-sm">
            <Mic className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
                placeholder="e.g., 'Tell me about this universe'" 
                className="pl-10 bg-background/80 focus:ring-accent"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleVoiceCommand();
                }}
            />
        </div>
        <Button
          onClick={handleVoiceCommand}
          disabled={isLoading || !query.trim()}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-48 h-16"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-dashed rounded-full animate-spin border-white" />
              Processing...
            </div>
          ) : (
            'Activate Assistant'
          )}
        </Button>
        <audio ref={audioRef} className="hidden" />
      </CardContent>
    </Card>
  );
}
