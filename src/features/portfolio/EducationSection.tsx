"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { EducationItem } from "@/data/portfolio-data";

interface EducationSectionProps {
  education: EducationItem[];
}

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

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <motion.section
      id="education"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-8 text-center">
        <GraduationCap className="inline-block mr-2 h-7 w-7 text-primary" />
        Education
      </h2>
      <div className={cn("p-8 rounded-[20px] space-y-4", "glass-effect")}>
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center justify-between p-4 rounded-lg transition-colors hover:bg-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/20 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-lg">{item.degree}</p>
                <p className="text-muted-foreground">{item.institution}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm font-medium">{item.period}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
