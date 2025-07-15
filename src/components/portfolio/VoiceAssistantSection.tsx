"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "../ui/gradient-button";

interface VoiceAssistantSectionProps {
  isVoiceLoading: boolean;
  handleVoiceQuery: (query: string) => void;
  audio: string | null;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


export default function VoiceAssistantSection({
  isVoiceLoading,
  handleVoiceQuery,
  audio,
}: VoiceAssistantSectionProps) {
  return (
    <motion.section
      className="text-center mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-4 text-center">Voice Command</h2>
      <p className="text-muted-foreground mb-6">Ask a question and hear a response from the AI assistant.</p>
      <div className="flex justify-center gap-4">
        <GradientButton onClick={() => handleVoiceQuery("Tell me about Rohit's experience")} disabled={isVoiceLoading}>
          <Mic className="mr-2" /> Who is Rohit?
        </GradientButton>
        <GradientButton onClick={() => handleVoiceQuery("What are Rohit's technical skills?")} disabled={isVoiceLoading}>
          <Mic className="mr-2" /> What are his skills?
        </GradientButton>
      </div>
      {audio && <audio className="mt-6 mx-auto" controls autoPlay src={audio} />}
    </motion.section>
  );
}
