
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { TranslateTextInput, TranslateTextInputSchema } from '@/ai/schemas';

const translationFlow = ai.defineFlow(
  {
    name: 'translationFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: z.string(),
  },
  async ({ text, targetLanguage }) => {
    if (targetLanguage === 'English' || !text) {
      return text;
    }

    const llmResponse = await ai.generate({
        model: 'googleai/gemini-1.5-flash-latest',
        prompt: `Translate the following text to ${targetLanguage}. Return only the translated text, with no preamble or explanation.

        Text to translate:
        "${text}"`,
    });
    
    return llmResponse.text;
  }
);

export async function translateText(input: TranslateTextInput): Promise<string> {
  return await translationFlow(input);
}
