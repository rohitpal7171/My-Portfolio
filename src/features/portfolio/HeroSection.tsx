
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Bot, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import profileImage from "@/components/avatar/3d_profile.png";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/hooks/use-typewriter";

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

interface HeroSectionProps {
  npcInput: string;
  setNpcInput: (value: string) => void;
  handleNpcSubmit: (e: React.FormEvent) => void;
  npcResponse: string;
  isNpcLoading: boolean;
}

export default function HeroSection({
  npcInput,
  setNpcInput,
  handleNpcSubmit,
  npcResponse,
  isNpcLoading,
}: HeroSectionProps) {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitle = "Frontend Software Developer.";
  
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
  }, []);

  const displayedNpcResponse = useTypewriter(npcResponse);

  return (
    <motion.section
      id="hero"
      className="grid md:grid-cols-2 items-center gap-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="flex flex-col gap-8">
        <motion.div variants={itemVariants}>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Rohit Singh Pal</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2 min-h-[40px]">
            {typedSubtitle}
            <span className="inline-block w-1 h-8 bg-primary animate-ping ml-1"></span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
            Welcome to my interactive portfolio. I am a passionate developer with over 4 years of experience building robust, user-focused web applications. Explore my world and get to know my work.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <a href="/my_resume.pdf" download="Rohit_Singh_Pal_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <GradientButton>
                <Download size={18} />
                Download Resume
            </GradientButton>
          </a>
        </motion.div>
      </div>
      
      <motion.div variants={itemVariants} className="flex-shrink-0 flex flex-col items-center justify-center gap-8 p-4 rounded-lg sticky top-32">
        <Image
          src={profileImage}
          alt="3D avatar of Rohit Singh Pal, a frontend software developer"
          width={400}
          height={400}
          priority
          className="rounded-lg shadow-2xl shadow-primary/20 animate-float object-cover aspect-square"
          data-ai-hint="avatar man"
        />
        <Card className={cn("glass-effect rounded-[20px] shadow-lg w-full")}>
            <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
                <Bot className="h-8 w-8 text-primary"/>
                <p className="font-semibold text-lg">Ask my AI Assistant</p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg min-h-[100px] mb-4 text-foreground/90 font-mono">
                {isNpcLoading && !npcResponse && <Loader2 className="animate-spin" />}
                {displayedNpcResponse ? displayedNpcResponse : "Ask me anything about Rohit's skills or experience!"}
                {isNpcLoading && <span className="inline-block w-2 h-4 bg-primary animate-ping ml-1"></span>}
            </div>

            <form onSubmit={handleNpcSubmit} className="flex gap-2">
                <Input 
                placeholder="e.g., 'What are his top skills?'" 
                value={npcInput}
                onChange={(e) => setNpcInput(e.target.value)}
                disabled={isNpcLoading}
                className="text-base"
                />
                <GradientButton type="submit" size="icon" disabled={isNpcLoading || !npcInput} className="rounded-md w-10 h-10 p-0">
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[5px]">
                        {isNpcLoading ? <Loader2 className="animate-spin" /> : <Send />}
                    </span>
                </GradientButton>
            </form>
            </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
