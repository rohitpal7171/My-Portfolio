
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import profileImage from "@/components/avatar/3d_profile.png";

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

export default function HeroSection() {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitle = "Frontend Software Developer.";
  
  useEffect(() => {
    // Start with the first character already in place to avoid race conditions
    setTypedSubtitle(fullSubtitle.charAt(0));
    let subtitleIndex = 1; // Start typing from the second character

    const interval = setInterval(() => {
      if (subtitleIndex < fullSubtitle.length) {
        setTypedSubtitle((prev) => prev + fullSubtitle.charAt(subtitleIndex));
        subtitleIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="grid md:grid-cols-2 items-center gap-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Rohit Singh Pal</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2 min-h-[40px]">
          {typedSubtitle}
          <span className="inline-block w-1 h-8 bg-primary animate-ping ml-1"></span>
        </h2>
        <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
          Welcome to my interactive portfolio. I am a passionate developer with over 4 years of experience building robust, user-focused web applications. Explore my world and get to know my work.
        </p>
        <motion.div variants={itemVariants} className="mt-8">
          <a href="/my_resume.pdf" download={"Rohit_Singh_Pal_Resume.pdf"} target="_blank" rel="noopener noreferrer">
            <GradientButton>
                <Download size={18} />
                Download Resume
            </GradientButton>
          </a>
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-lg">
        <Image
          src={profileImage}
          alt="3D avatar of Rohit Singh Pal, a frontend software developer"
          width={400}
          height={400}
          priority
          className="rounded-lg shadow-2xl shadow-primary/20 animate-float object-cover aspect-square"
          data-ai-hint="avatar man"
        />
      </motion.div>
    </motion.section>
  );
}
