"use client";

import { useState } from "react";
import { getNpcResponse, getVoiceResponse } from "@/app/actions";
import { skills, experience, education } from '@/data/portfolio-data';

import Header from "../layout/Header";
import HeroSection from "./HeroSection";
import VoiceAssistantSection from "./VoiceAssistantSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

export default function PortfolioPage() {
  const [npcInput, setNpcInput] = useState("");
  const [npcResponse, setNpcResponse] = useState("Ask me about Rohit's portfolio, skills, or experience.");
  const [isNpcLoading, setIsNpcLoading] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [audio, setAudio] = useState<string | null>(null);

  const handleNpcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!npcInput) return;
    setIsNpcLoading(true);
    setNpcResponse("");
    const { response } = await getNpcResponse({ query: npcInput });
    setNpcResponse(response);
    setIsNpcLoading(false);
    setNpcInput("");
  };

  const handleVoiceQuery = async (query: string) => {
    setIsVoiceLoading(true);
    setAudio(null);
    const { media } = await getVoiceResponse({ query });
    if (media) {
      setAudio(media);
    }
    setIsVoiceLoading(false);
  };

  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <HeroSection
          npcInput={npcInput}
          setNpcInput={setNpcInput}
          npcResponse={npcResponse}
          isNpcLoading={isNpcLoading}
          handleNpcSubmit={handleNpcSubmit}
        />
        <VoiceAssistantSection
          isVoiceLoading={isVoiceLoading}
          handleVoiceQuery={handleVoiceQuery}
          audio={audio}
        />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
      </main>
      <ContactSection />
    </div>
  );
}
