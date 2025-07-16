
"use server";

import { npcResponseStream } from "@/ai/flows/interactive-npc-responses";

export async function askNpc(prompt: string) {
  return await npcResponseStream(prompt);
}
