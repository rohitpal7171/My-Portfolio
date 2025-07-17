
"use client";

import { useRef, useEffect, useState } from "react";
import { useFormState, useFormStatus } from 'react-dom';
import { Bot, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { askNpc } from "@/app/actions";
import { useTypewriter } from "@/hooks/use-typewriter";

const initialState = {
  response: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : <Send />}
    </Button>
  );
}


export default function AiAssistant() {
  const [state, formAction] = useFormState(askNpc, initialState);
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [finalResponse, setFinalResponse] = useState<string | null>(null);

  const displayedNpcResponse = useTypewriter(finalResponse ?? "");

  useEffect(() => {
    if (state.response) {
      setFinalResponse(state.response);
    }
    if (state.error) {
       setFinalResponse(state.error);
    }
  }, [state]);

  useEffect(() => {
    if (!pending) {
      formRef.current?.reset();
    }
  }, [pending]);
  
  return (
    <Card className={cn("glass-effect rounded-[20px] shadow-lg w-full")}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Bot className="h-8 w-8 text-primary" />
          <p className="font-semibold text-lg">Ask my AI Assistant</p>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg min-h-[100px] mb-4 text-foreground/90 font-mono">
          {pending && !displayedNpcResponse ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Thinking...</span>
            </div>
          ) : displayedNpcResponse ? (
            <>
              {displayedNpcResponse}
              {pending && <span className="inline-block w-2 h-4 bg-primary animate-ping ml-1"></span>}
            </>
          ) : (
             "Ask me anything about Rohit's skills or experience!"
          )}
        </div>

        <form
          ref={formRef}
          action={(formData) => {
            setFinalResponse("");
            formAction(formData);
          }}
          className="flex gap-2"
        >
          <Input
            name="prompt"
            placeholder="e.g., 'What are his top skills?'"
            disabled={pending}
            className="text-base"
            required
          />
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
