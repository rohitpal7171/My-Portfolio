import { z } from 'zod';

// Schema for the main NPC response flow input
export const NpcResponseInputSchema = z.object({
  prompt: z.string(),
  language: z.string().default('English'),
});
export type NpcResponseInput = z.infer<typeof NpcResponseInputSchema>;


// Schema for the translation flow input
export const TranslateTextInputSchema = z.object({
  text: z.string(),
  targetLanguage: z.string(),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;


// Schema for the form validation in server actions
export const AskNpcFormSchema = z.object({
  prompt: z.string().min(1, { message: "Prompt cannot be empty." }),
  language: z.string(),
});
