
"use server";

import { npcResponseStream } from "@/ai/flows/interactive-npc-responses";
import { z } from 'zod';

const promptSchema = z.string().min(1, { message: "Prompt cannot be empty." });

export async function askNpc(previousState: any, formData: FormData) {
  const prompt = formData.get("prompt");
  
  const validatedPrompt = promptSchema.safeParse(prompt);

  if (!validatedPrompt.success) {
    return {
      response: null,
      error: validatedPrompt.error.errors.map(e => e.message).join(', '),
    }
  }

  try {
    const stream = await npcResponseStream(validatedPrompt.data);
    
    let fullResponse = "";
    for await (const chunk of stream) {
      fullResponse += chunk;
    }
    
    return {
      response: fullResponse,
      error: null
    };

  } catch (error) {
    console.error("Error in askNpc action:", error);
    return {
      response: null,
      error: "Sorry, I'm having trouble connecting to my circuits right now."
    }
  }
}
