"use client";

import { useState } from "react";
import { skills, experience, education, projects } from '@/data/portfolio-data.tsx';

import Header from "@/layouts/Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";

export default function PortfolioPage() {
  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-24">
          <HeroSection />
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
