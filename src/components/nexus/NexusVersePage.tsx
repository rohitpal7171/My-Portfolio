"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTimeOfDay } from '@/hooks/useTimeOfDay';
import Header from '@/components/layout/Header';
import FeatureCard from '@/components/nexus/FeatureCard';
import InteractiveNPC from '@/components/nexus/InteractiveNPC';
import VoiceAssistant from '@/components/nexus/VoiceAssistant';
import { Camera, Layers, View } from 'lucide-react';

export default function NexusVersePage() {
  const timeOfDay = useTimeOfDay();

  if (!timeOfDay) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
  }

  return (
    <div className={cn(timeOfDay === 'night' ? 'dark' : '')}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]">
        <div
          className={cn(
            'absolute inset-0 -z-10 transition-opacity duration-1000',
            timeOfDay === 'day'
              ? 'bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.15),transparent)] opacity-100'
              : 'bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.25),transparent)] opacity-0',
          )}
        />
        <div
          className={cn(
            'absolute inset-0 -z-10 transition-opacity duration-1000',
             timeOfDay === 'night'
              ? 'bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.25),transparent)] opacity-100'
              : 'bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.15),transparent)] opacity-0'
          )}
        />
      </div>

      <Header />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <section className="relative text-center">
            <Image 
                src="https://placehold.co/1200x800.png" 
                alt="Futuristic landscape"
                width={1200}
                height={800}
                data-ai-hint="planet space"
                className="absolute -top-1/2 left-1/2 -translate-x-1/2 -z-10 w-full max-w-5xl mx-auto opacity-20 dark:opacity-30 object-cover blur-sm"
            />
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-glow tracking-tighter">
            Welcome to the NexusVerse
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto font-body">
            An immersive digital universe blending 3D worlds, AI-driven characters, and next-generation web experiences.
          </p>
        </section>

        <section id="features" className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                    icon={<Camera />}
                    title="Integrated AR Experience"
                    description="Place 3D objects in your world. Scan QR codes to bring digital creations to life right before your eyes."
                />
                <FeatureCard
                    icon={<View />}
                    title="Full VR Support"
                    description="Step inside our universe. Explore vast digital showrooms and sci-fi landscapes in full virtual reality."
                />
                <FeatureCard
                    icon={<Layers />}
                    title="Dynamic 3D UI"
                    description="Interact with a new dimension of interface design. Holographic panels and 3D transitions await."
                />
            </div>
        </section>

        <section id="ai-interaction" className="mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                    <InteractiveNPC />
                </div>
                <div className="lg:col-span-2">
                    <VoiceAssistant />
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
