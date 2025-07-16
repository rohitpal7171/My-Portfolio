
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

export default function PortfolioPage() {
  const [npcInput, setNpcInput] = useState("");
  const [npcResponse, setNpcResponse] = useState("");
  const [isNpcLoading, setIsNpcLoading] = useState(false);
  const { toast } = useToast();

  const handleNpcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!npcInput.trim()) return;

    setIsNpcLoading(true);
    setNpcResponse(""); 

    try {
      const stream = await askNpc(npcInput);
      for await (const chunk of stream) {
        setNpcResponse(chunk);
      }
    } catch (error) {
      console.error("Error asking NPC:", error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "There was an issue communicating with the AI assistant. Please try again later.",
      });
    } finally {
      setIsNpcLoading(false);
      setNpcInput("");
    }
  };

  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-24">
          <HeroSection 
            npcInput={npcInput}
            setNpcInput={setNpcInput}
            handleNpcSubmit={handleNpcSubmit}
            npcResponse={npcResponse}
            isNpcLoading={isNpcLoading}
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
