'use server';

/**
 * @fileOverview Implements the AI-powered NPC interaction flow for the CodeSphere website.
 *
 * This file defines a Genkit flow that allows users to interact with 3D NPCs who respond to their queries.
 * The flow takes a user query as input and returns the NPC's response.
 *
 * @interface InteractiveNpcResponsesInput - The input type for the interactiveNpcResponses function.
 * @interface InteractiveNpcResponsesOutput - The output type for the interactiveNpcResponses function.
 * @function interactiveNpcResponses - The main function to interact with the NPC.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveNpcResponsesInputSchema = z.object({
  query: z.string().describe('The user query to the NPC.'),
});
export type InteractiveNpcResponsesInput = z.infer<typeof InteractiveNpcResponsesInputSchema>;

const InteractiveNpcResponsesOutputSchema = z.object({
  response: z.string().describe('The NPC response to the user query.'),
});
export type InteractiveNpcResponsesOutput = z.infer<typeof InteractiveNpcResponsesOutputSchema>;

export async function interactiveNpcResponses(input: InteractiveNpcResponsesInput): Promise<InteractiveNpcResponsesOutput> {
  return interactiveNpcResponsesFlow(input);
}

const interactiveNpcResponsesPrompt = ai.definePrompt({
  name: 'interactiveNpcResponsesPrompt',
  input: {schema: InteractiveNpcResponsesInputSchema},
  output: {schema: InteractiveNpcResponsesOutputSchema},
  prompt: `You are an AI assistant for Rohit Singh Pal's portfolio website. Your personality is helpful and professional.

Your ONLY purpose is to answer questions about Rohit's skills, experience, and projects based on the portfolio content.

If the user asks a question that is NOT related to Rohit's portfolio, you MUST politely decline. For example, if they ask about the weather, a random fact, or to write code, you should say something like: "I can only answer questions about Rohit's portfolio. How can I help you with that?"

User Query: {{{query}}}

Your Response:`,
});

const interactiveNpcResponsesFlow = ai.defineFlow(
  {
    name: 'interactiveNpcResponsesFlow',
    inputSchema: InteractiveNpcResponsesInputSchema,
    outputSchema: InteractiveNpcResponsesOutputSchema,
  },
  async input => {
    const {output} = await interactiveNpcResponsesPrompt(input);
    return output!;
  }
);
