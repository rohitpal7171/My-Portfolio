import { useState, useEffect } from "react";
import Image from "next/image";
import { Cpu, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { sectionVariants, itemVariants } from './variants';

interface HeroSectionProps {
  npcInput: string;
  setNpcInput: (value: string) => void;
  npcResponse: string;
  isNpcLoading: boolean;
  handleNpcSubmit: (e: React.FormEvent) => void;
}

export default function HeroSection({
  npcInput,
  setNpcInput,
  npcResponse,
  isNpcLoading,
  handleNpcSubmit,
}: HeroSectionProps) {
  const [typedSubtitle, setTypedSubtitle] = useState('');
  const fullSubtitle = "Frontend Software Developer";

  useEffect(() => {
    let subtitleIndex = 0;
    setTypedSubtitle('');

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
      className="grid md:grid-cols-2 items-center gap-12 mb-24"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary">Rohit Singh Pal</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2 min-h-[40px]">{typedSubtitle}<span className="inline-block w-1 h-8 bg-primary animate-ping ml-1"></span></h2>
        <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
          Welcome to my interactive portfolio. I am a passionate developer with over 4 years of experience building robust, user-focused web applications. Explore my world, ask questions, and get to know my work.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-lg">
        <Image
          src="https://placehold.co/400x400.png"
          alt="Rohit Singh Pal"
          width={400}
          height={400}
          data-ai-hint="professional man"
          className="rounded-lg shadow-2xl shadow-primary/20 animate-float object-cover aspect-square"
        />
        <Card className={cn("w-full mt-4 animate-subtle-pulse", "glass-effect")}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Cpu size={20} className="text-primary" /> AI Assistant</CardTitle>
            <CardDescription>{isNpcLoading ? "Thinking..." : npcResponse}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNpcSubmit} className="flex gap-2">
              <Input
                value={npcInput}
                onChange={(e) => setNpcInput(e.target.value)}
                placeholder="Type your question..."
                disabled={isNpcLoading}
              />
              <Button type="submit" size="icon" disabled={isNpcLoading}>
                <Send size={18} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
