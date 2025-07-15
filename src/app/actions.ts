"use server";

import { aiPoweredVoiceAssistant } from '@/ai/flows/ai-powered-voice-assistant';
import { interactiveNpcResponses } from '@/ai/flows/interactive-npc-responses';
import type { AiPoweredVoiceAssistantInput, AiPoweredVoiceAssistantOutput } from '@/ai/flows/ai-powered-voice-assistant';
import type { InteractiveNpcResponsesInput, InteractiveNpcResponsesOutput } from '@/ai/flows/interactive-npc-responses';

export async function getNpcResponse(input: InteractiveNpcResponsesInput): Promise<InteractiveNpcResponsesOutput> {
  try {
    return await interactiveNpcResponses(input);
  } catch (error) {
    console.error("Error in getNpcResponse:", error);
    return { response: "I seem to be having trouble connecting to the CodeSphere. Please try again later." };
  }
}

export async function getVoiceResponse(input: AiPoweredVoiceAssistantInput): Promise<AiPoweredVoiceAssistantOutput> {
  try {
    return await aiPoweredVoiceAssistant(input);
  } catch (error) {
    console.error("Error in getVoiceResponse:", error);
    // Provide a fallback audio or an error message
    // For simplicity, returning an empty media string, which the client should handle.
    return { media: "" };
  }
}
