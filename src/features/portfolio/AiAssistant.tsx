
"use client";

import { useRef, useEffect } from "react";
import { Bot, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AiAssistantProps {
  handleNpcSubmit: (formData: FormData) => void;
  isNpcLoading: boolean;
  displayedNpcResponse: string;
}

export default function AiAssistant({
  handleNpcSubmit,
  isNpcLoading,
  displayedNpcResponse,
}: AiAssistantProps) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isNpcLoading) {
      formRef.current?.reset();
    }
  }, [isNpcLoading]);

  return (
    <Card className={cn("glass-effect rounded-[20px] shadow-lg w-full")}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Bot className="h-8 w-8 text-primary" />
          <p className="font-semibold text-lg">Ask my AI Assistant</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg min-h-[100px] mb-4 text-foreground/90 font-mono">
          {isNpcLoading && !displayedNpcResponse && <Loader2 className="animate-spin" />}
          {displayedNpcResponse
            ? displayedNpcResponse
            : "Ask me anything about Rohit's skills or experience!"}
          {isNpcLoading && (
            <span className="inline-block w-2 h-4 bg-primary animate-ping ml-1"></span>
          )}
        </div>

        <form
          ref={formRef}
          action={handleNpcSubmit}
          className="flex gap-2"
        >
          <Input
            name="prompt"
            placeholder="e.g., 'What are his top skills?'"
            disabled={isNpcLoading}
            className="text-base"
            required
          />
          <Button type="submit" size="icon" disabled={isNpcLoading}>
            {isNpcLoading ? <Loader2 className="animate-spin" /> : <Send />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
