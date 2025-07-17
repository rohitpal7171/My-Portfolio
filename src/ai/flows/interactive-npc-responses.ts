
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { skills, experience, education, projects } from '@/data/portfolio-data';
import { translateText } from './translation-flow';
import { NpcResponseInput, NpcResponseInputSchema } from '@/ai/schemas';

// Format portfolio context once to avoid bloating prompt at runtime
const portfolioContext = `
Skills:
${JSON.stringify(skills, null, 2)}

Experience:
${JSON.stringify(experience, null, 2)}

Education:
${JSON.stringify(education, null, 2)}

Projects:
${JSON.stringify(projects, null, 2)}
`;


const npcResponseFlowInternal = ai.defineFlow(
  {
    name: 'npcResponseFlowInternal',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      prompt: `You are Rohit's virtual AI assistant integrated into his portfolio.

Your personality is professional yet friendly and helpful. Your goal is to answer questions about Rohit Singh Pal based ONLY on the provided portfolio data below. 

If a question is off-topic or not related to Rohit's professional life, skills, or experience as detailed in the data, you MUST politely decline to answer and steer the conversation back to portfolio-related topics. 

Do not use any external knowledge. Keep your answers concise and to the point.

Here is Rohit's full portfolio data:
${portfolioContext}

Now, please answer the following user's question: "${prompt}"
      `,
    });

    return llmResponse.text;
  }
);


export async function npcResponseFlow(input: NpcResponseInput): Promise<string> {
  const { prompt, language } = input;
  // 1. Translate user's prompt to English to query the main model
  const englishPrompt = await translateText({ text: prompt, targetLanguage: 'English' });

  // 2. Get the response in English
  const englishResponse = await npcResponseFlowInternal(englishPrompt);

  // 3. If the original language was not English, translate the response back
  if (language !== 'English') {
    const translatedResponse = await translateText({ text: englishResponse, targetLanguage: language });
    return translatedResponse;
  }
  
  return englishResponse;
}
