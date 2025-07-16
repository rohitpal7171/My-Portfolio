
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { skills, experience, education, projects } from '@/data/portfolio-data';

const portfolioContext = `
  Skills: ${JSON.stringify(skills, null, 2)}
  Experience: ${JSON.stringify(experience, null, 2)}
  Education: ${JSON.stringify(education, null, 2)}
  Projects: ${JSON.stringify(projects, null, 2)}
`;

export const npcResponseStream = ai.defineFlow(
  {
    name: 'npcResponseStream',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (prompt) => {
    const llmResponse = await ai.generate({
      prompt: `You are Rohit's virtual AI assistant integrated into his portfolio. 
      Your personality is professional yet friendly and helpful. 
      Your goal is to answer questions about Rohit Singh Pal based on the provided portfolio data.
      If a question is off-topic or not related to Rohit's professional life, skills, or experience, politely decline to answer and steer the conversation back to portfolio-related topics.
      Keep your answers concise and to the point.
      
      Here is Rohit's portfolio data:
      ${portfolioContext}
      
      User's question: "${prompt}"
      `,
      stream: true,
    });

    return llmResponse.stream;
  }
);
