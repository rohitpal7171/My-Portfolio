"use client";

import { useState } from "react";
import { getNpcResponse } from "@/app/actions";
import { skills, experience, education, projects } from '@/data/portfolio-data';

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
  const [npcResponse, setNpcResponse] = useState("Ask me about Rohit's portfolio, skills, or experience.");
  const [isNpcLoading, setIsNpcLoading] = useState(false);

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

  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="scroll-mt-20">
          <HeroSection
            npcInput={npcInput}
            setNpcInput={setNpcInput}
            npcResponse={npcResponse}
            isNpcLoading={isNpcLoading}
            handleNpcSubmit={handleNpcSubmit}
          />
        </div>
        <div id="sections-container" className="scroll-mt-20">
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
