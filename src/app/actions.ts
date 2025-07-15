"use server";

import { interactiveNpcResponses } from '@/ai/flows/interactive-npc-responses';
import type { InteractiveNpcResponsesInput, InteractiveNpcResponsesOutput } from '@/ai/flows/interactive-npc-responses';

export async function getNpcResponse(input: InteractiveNpcResponsesInput): Promise<InteractiveNpcResponsesOutput> {
  try {
    return await interactiveNpcResponses(input);
  } catch (error) {
    console.error("Error in getNpcResponse:", error);
    return { response: "I seem to be having trouble connecting to the CodeSphere. Please try again later." };
  }
}
