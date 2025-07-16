
"use client";

import { useState } from 'react';
import { skills, experience, education, projects } from '@/data/portfolio-data';
import { askNpc } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

import Header from "@/layouts/Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import { useTypewriter } from '@/hooks/use-typewriter';

export default function PortfolioPage() {
  const [npcResponse, setNpcResponse] = useState("");
  const [isNpcLoading, setIsNpcLoading] = useState(false);
  const { toast } = useToast();
  const displayedNpcResponse = useTypewriter(npcResponse);

  const handleNpcSubmit = async (prompt: string) => {
    if (!prompt.trim()) return;

    setIsNpcLoading(true);
    setNpcResponse(""); 
    let accumulatedResponse = "";

    try {
      const stream = await askNpc(prompt);
      for await (const chunk of stream) {
        accumulatedResponse += chunk;
        setNpcResponse(accumulatedResponse);
      }
    } catch (error) {
      console.error("Error asking NPC:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "There was an issue communicating with the AI assistant. Please try again later.",
      });
      setNpcResponse("Sorry, I'm having trouble connecting to my circuits right now.");
    } finally {
      setIsNpcLoading(false);
    }
  };

  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-24">
          <HeroSection 
            handleNpcSubmit={handleNpcSubmit}
            isNpcLoading={isNpcLoading}
            displayedNpcResponse={displayedNpcResponse}
          />
        </div>
        <div className="scroll-mt-20">
          <AboutSection />
          <ExperienceSection experience={experience} />
          <WorkSection projects={projects} />
          <SkillsSection skills={skills} />
          <EducationSection education={education} />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
