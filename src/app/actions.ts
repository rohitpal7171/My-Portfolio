
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
    
    // Since we can't return a stream directly to useFormState, we'll handle streaming on the client
    // For now, this action will just confirm the call was successful and the client will handle the stream.
    // A more advanced implementation might use a separate mechanism to push stream data to the client.
    // For this architecture, we will return the full response.
    
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
