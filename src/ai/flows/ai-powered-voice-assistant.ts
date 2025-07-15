'use server';
/**
 * @fileOverview Provides an AI-powered voice assistant flow for guiding users with information via voice commands.
 *
 * - aiPoweredVoiceAssistant - A function that handles the voice assistant interaction.
 * - AiPoweredVoiceAssistantInput - The input type for the aiPoweredVoiceAssistant function.
 * - AiPoweredVoiceAssistantOutput - The return type for the aiPoweredVoiceAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const AiPoweredVoiceAssistantInputSchema = z.object({
  query: z.string().describe('The user query to be processed by the voice assistant.'),
});
export type AiPoweredVoiceAssistantInput = z.infer<typeof AiPoweredVoiceAssistantInputSchema>;

const AiPoweredVoiceAssistantOutputSchema = z.object({
  media: z.string().describe('The audio data URI containing the voice assistant response.'),
});
export type AiPoweredVoiceAssistantOutput = z.infer<typeof AiPoweredVoiceAssistantOutputSchema>;

export async function aiPoweredVoiceAssistant(input: AiPoweredVoiceAssistantInput): Promise<AiPoweredVoiceAssistantOutput> {
  return aiPoweredVoiceAssistantFlow(input);
}

const aiPoweredVoiceAssistantPrompt = ai.definePrompt({
  name: 'aiPoweredVoiceAssistantPrompt',
  input: {schema: AiPoweredVoiceAssistantInputSchema},
  prompt: `You are a voice assistant guiding users through CodeSphere. Respond to the following user query:

{{{query}}}`,
});

const aiPoweredVoiceAssistantFlow = ai.defineFlow(
  {
    name: 'aiPoweredVoiceAssistantFlow',
    inputSchema: AiPoweredVoiceAssistantInputSchema,
    outputSchema: AiPoweredVoiceAssistantOutputSchema,
  },
  async (input) => {
    const {text} = await aiPoweredVoiceAssistantPrompt(input);

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: text,
    });

    if (!media) {
      throw new Error('no media returned');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    return {
      media: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
    };
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs = [] as any[];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
