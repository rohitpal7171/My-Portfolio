
"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

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

const getYearsOfExperience = () => {
  const startDate = new Date("2021-06-01"); // Start date updated to June 2021
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  return years;
}

export default function AboutSection() {
  const { t } = useLanguage();
  const yearsOfExperience = getYearsOfExperience();

  return (
    <motion.section
      id="about"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className={cn("p-8 rounded-[20px]", "glass-effect")}>
        <h2 className="text-3xl font-headline font-bold mb-4 text-center">
          <User className="inline-block mr-2 h-7 w-7 text-primary" /> {t('about.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-justify">
          {t('about.description', { years: yearsOfExperience })}
        </p>
      </div>
    </motion.section>
  );
}
