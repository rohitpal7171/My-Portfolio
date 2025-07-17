
"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Experience } from "@/data/portfolio-data.tsx";
import { useLanguage } from "@/hooks/use-language";

interface ExperienceSectionProps {
  experience: Experience[];
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

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const { t } = useLanguage();
  return (
    <motion.section
      id="experience"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-12 text-center">
        <Briefcase className="inline-block mr-2 h-7 w-7 text-primary" />
        {t('experience.title')}
      </h2>
      <div className="relative pl-6">
        <div className="absolute left-[31px] -translate-x-1/2 top-0 h-full w-0.5 bg-primary/20"></div>
        {experience.map((job, index) => (
          <motion.div key={`${job.role}-${job.company}`} className="relative pl-8 pb-12" variants={itemVariants}>
            <div className="absolute left-0 top-0 ml-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-background border-2 border-primary text-primary">
                <job.icon />
              </div>
            </div>

            <div className={cn("p-6 rounded-[10px] ml-12", "glass-effect")}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                {job.isCurrent && (
                  <Badge variant="outline" className="border-accent bg-accent/20 text-foreground dark:text-foreground">
                    {t('experience.current')}
                  </Badge>
                )}
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                <span>{job.company}</span> &bull; <span>{job.period}</span> &bull; <span>{job.location}</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {index < experience.length - 1 && (
              <div className="absolute left-[31px] -translate-x-1/2 h-full w-0.5 bg-primary/20 top-12"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
