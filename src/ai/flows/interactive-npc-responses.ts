
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { skills, experience, education, projects } from '@/data/portfolio-data';

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

export const npcResponseStream = ai.defineFlow(
  {
    name: 'npcResponseStream',
    inputSchema: z.string(),
    outputSchema: z.string(),
    stream: true,
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      stream: true,
      prompt: `You are Rohit's virtual AI assistant integrated into his portfolio.

Your personality is professional yet friendly and helpful. Your goal is to answer questions about Rohit Singh Pal based ONLY on the provided portfolio data below. 

If a question is off-topic or not related to Rohit's professional life, skills, or experience as detailed in the data, you MUST politely decline to answer and steer the conversation back to portfolio-related topics. 

Do not use any external knowledge. Keep your answers concise and to the point.

Here is Rohit's full portfolio data:
${portfolioContext}

Now, please answer the following user's question: "${prompt}"
      `,
    });

    return llmResponse.stream;
  }
);
