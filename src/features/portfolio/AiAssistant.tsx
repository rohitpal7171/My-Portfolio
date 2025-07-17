
"use client";

import { useRef, useEffect, useState } from "react";
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Bot, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { askNpc } from "@/app/actions";
import { useTypewriter } from "@/hooks/use-typewriter";
import { GradientButton } from "@/components/ui/gradient-button";

interface FormState {
  response: string | null;
  error: string | null;
}

const initialState: FormState = {
  response: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <GradientButton type="submit" disabled={pending} className="px-3 py-2 h-10 w-auto">
      <span className="relative z-10 inline-flex items-center justify-center">
        {pending ? <Loader2 className="animate-spin h-6 w-6" /> : <Send className="h-6 w-6" />}
      </span>
    </GradientButton>
  );
}


export default function AiAssistant() {
  const [state, formAction] = useActionState<FormState, FormData>(askNpc, initialState);
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
              {!pending && displayedNpcResponse === finalResponse && <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1 align-middle"></span>}
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
