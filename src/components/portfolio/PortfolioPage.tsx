"use client";

import { useState } from "react";
import { getNpcResponse } from "@/app/actions";
import { skills, experience, education, projects } from '@/data/portfolio-data.tsx';

import Header from "../layout/Header";
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
        <HeroSection
          npcInput={npcInput}
          setNpcInput={setNpcInput}
          npcResponse={npcResponse}
          isNpcLoading={isNpcLoading}
          handleNpcSubmit={handleNpcSubmit}
        />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <WorkSection projects={projects} />
      </main>
      <ContactSection />
    </div>
  );
}
