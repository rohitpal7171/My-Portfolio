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
import { skills, experience, education, projects } from '@/data/portfolio-data';

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

const promptInputSchema = InteractiveNpcResponsesInputSchema.extend({
  portfolioContext: z.string(),
});

const interactiveNpcResponsesPrompt = ai.definePrompt({
  name: 'interactiveNpcResponsesPrompt',
  input: {schema: promptInputSchema},
  output: {schema: InteractiveNpcResponsesOutputSchema},
  prompt: `You are an AI assistant for Rohit Singh Pal's portfolio website. Your personality is helpful and professional.

Your ONLY purpose is to answer questions about Rohit's skills, experience, and projects based on the portfolio content provided below.

If the user asks a question that is NOT related to Rohit's portfolio, you MUST politely decline. For example, if they ask about the weather, a random fact, or to write code, you should say something like: "I can only answer questions about Rohit's portfolio. How can I help you with that?"

=== Portfolio Context ===
{{{portfolioContext}}}
=== End Portfolio Context ===

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
    // Format the portfolio data to be injected into the prompt
    const skillsContext = skills.map(category => 
      `${category.category}:\n- ${category.list.map(skill => skill.name).join('\n- ')}`
    ).join('\n\n');

    const experienceContext = experience.map(job => 
      `Role: ${job.role} at ${job.company} (${job.period})\n- ${job.description.join('\n- ')}`
    ).join('\n\n');

    const educationContext = education.map(edu => 
      `${edu.degree} from ${edu.institution} (${edu.period})`
    ).join('\n');

    const projectsContext = projects.map(project => 
      `Project: ${project.title}\n- ${project.description.join('\n- ')}\nTech Stack: ${project.tech.join(', ')}`
    ).join('\n\n');

    const portfolioContext = `
## About Rohit
A passionate and dedicated Frontend Software Developer with over 4 years of progressive experience in building robust, user-focused web applications. He specializes in React.js, Redux, and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products. He thrives in fast-paced environments and believes in continuous learning, adaptability, and solving real-world problems through clean and scalable code.

## Skills
${skillsContext}

## Professional Experience
${experienceContext}

## Highlighted Projects
${projectsContext}

## Education
${educationContext}
    `;

    const {output} = await interactiveNpcResponsesPrompt({ 
      query: input.query,
      portfolioContext,
    });
    return output!;
  }
);
