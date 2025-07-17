
"use server";

import { npcResponseFlow } from "@/ai/flows/interactive-npc-responses";
import { AskNpcFormSchema } from "@/ai/schemas";

export async function askNpc(previousState: any, formData: FormData) {
  const rawFormData = {
    prompt: formData.get("prompt"),
    language: formData.get("language"),
  };
  
  const validatedFields = AskNpcFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      response: null,
      error: validatedFields.error.errors.map(e => e.message).join(', '),
    }
  }

  try {
    const response = await npcResponseFlow(validatedFields.data);
    
    return {
      response: response,
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
