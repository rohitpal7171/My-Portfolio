
"use client";

import { useState } from 'react';
import { skills, experience, education, projects } from '@/data/portfolio-data';
import Header from "@/layouts/Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import { LanguageProvider } from '@/hooks/use-language';
import AiAssistant from './AiAssistant';

export default function PortfolioPage() {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageProvider language={language}>
      <div className="bg-transparent text-foreground font-body min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <div className="mb-24">
            <HeroSection />
          </div>
          <div className="grid md:grid-cols-2 gap-x-12">
            <div className="flex-shrink-0 flex flex-col items-center justify-center gap-8 p-4 rounded-lg sticky top-32 h-fit">
              <AiAssistant language={language} setLanguage={setLanguage} />
            </div>
            <div className="scroll-mt-20">
              <AboutSection />
              <ExperienceSection experience={experience} />
              <WorkSection projects={projects} />
              <SkillsSection skills={skills} />
              <EducationSection education={education} />
            </div>
          </div>
        </main>
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
