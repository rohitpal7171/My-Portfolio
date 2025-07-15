"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className={cn("mb-24 p-8 rounded-[20px]", "glass-effect")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-4 text-left"><User className="inline-block mr-2 h-7 w-7 text-primary" /> About Me</h2>
      <p className="text-lg text-muted-foreground text-left md:text-justify">
        I'm a passionate and dedicated Frontend Software Developer with over 4 years of progressive experience in building robust, user-focused web applications. I specialize in React.js, Redux, and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products. I thrive in fast-paced environments and believe in continuous learning, adaptability, and solving real-world problems through clean and scalable code.
      </p>
    </motion.section>
  );
}
