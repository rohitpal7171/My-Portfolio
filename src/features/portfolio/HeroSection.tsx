
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { useLanguage } from "@/hooks/use-language";
import AiAssistant from "./AiAssistant";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const getYearsOfExperience = () => {
  const startDate = new Date("2021-06-01"); // Start date updated to June 2021
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  return years;
};

interface HeroSectionProps {
  language: string;
  setLanguage: (language: string) => void;
}

export default function HeroSection({ language, setLanguage }: HeroSectionProps) {
  const { t } = useLanguage();
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitle = t('hero.subtitle');
  const yearsOfExperience = getYearsOfExperience();
  
  useEffect(() => {
    setTypedSubtitle(fullSubtitle.charAt(0));
    let subtitleIndex = 1;

    const interval = setInterval(() => {
      if (subtitleIndex < fullSubtitle.length) {
        setTypedSubtitle((prev) => prev + fullSubtitle.charAt(subtitleIndex));
        subtitleIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullSubtitle]);

  return (
    <motion.section
      id="hero"
      className="grid lg:grid-cols-2 items-center gap-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="flex flex-col gap-8 order-2 lg:order-1">
        <motion.div variants={itemVariants}>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">{t('hero.name')}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2 min-h-[40px]">
            {typedSubtitle}
            <span className="inline-block w-1 h-8 bg-primary animate-ping ml-1"></span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
            {t('hero.description', { years: yearsOfExperience })}
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <a href="/my_resume.pdf" download="Rohit_Singh_Pal_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <GradientButton>
                <Download size={18} />
                {t('hero.downloadResume')}
            </GradientButton>
          </a>
        </motion.div>
      </div>
      
      <motion.div variants={itemVariants} className="order-1 lg:order-2 flex flex-col items-center justify-center gap-8 p-4 rounded-lg">
        <Image
          src="/assets/3d_profile.png"
          alt="3D avatar of Rohit Singh Pal, a frontend software developer"
          width={400}
          height={400}
          priority
          className="rounded-lg shadow-2xl shadow-primary/20 animate-float object-cover aspect-square"
          data-ai-hint="avatar man"
        />
        <div className="w-full max-w-md">
          <AiAssistant language={language} setLanguage={setLanguage} />
        </div>
      </motion.div>
    </motion.section>
  );
}
