
"use client";

import { User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { experience } from "@/data/portfolio-data";

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
  const startDate = new Date("2020-07-01"); // Start date of the first relevant job
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  return years;
}


export default function AboutSection() {
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
        <h2 className="text-3xl font-headline font-bold mb-4 text-center"><User className="inline-block mr-2 h-7 w-7 text-primary" /> About Me</h2>
        <p className="text-lg text-muted-foreground text-justify">
          I’m a passionate and innovative Frontend Developer with over {yearsOfExperience} years of experience crafting modern, high-performance web applications. I specialize in React.js, Redux, and cutting-edge frontend ecosystems, building clean, scalable, and user-centric interfaces that power enterprise-grade products.  With a strong grasp of design systems, responsive UI/UX, and state-of-the-art tools like Tailwind CSS, GraphQL, and REST APIs, I thrive in fast-paced environments where technology meets creativity. In this new era of AI-driven development, I constantly adapt, automate, and optimize workflows to stay ahead of the curve—delivering solutions that are not just functional, but future-ready.
        </p>
      </div>
    </motion.section>
  );
}
