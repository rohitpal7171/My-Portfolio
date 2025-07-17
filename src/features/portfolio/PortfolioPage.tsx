
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

export default function PortfolioPage() {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageProvider language={language}>
      <div className="bg-transparent text-foreground font-body min-h-screen">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-16 space-y-24">
          <HeroSection language={language} setLanguage={setLanguage} />
          <AboutSection />
          <ExperienceSection experience={experience} />
          <WorkSection projects={projects} />
          <SkillsSection skills={skills} />
          <EducationSection education={education} />
        </main>
        <ContactSection />
      </div>
    </LanguageProvider>
  );
}
