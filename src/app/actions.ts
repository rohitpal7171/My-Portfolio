
"use server";

import { npcResponseStream } from "@/ai/flows/interactive-npc-responses";

export async function askNpc(prompt: string) {
  if (!prompt) {
    throw new Error("Prompt cannot be empty.");
  }
  return await npcResponseStream(prompt);
}
