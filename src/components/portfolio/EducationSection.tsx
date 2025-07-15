import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { sectionVariants, itemVariants } from './variants';

interface EducationItem {
  degree: string;
  institution: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <motion.section
      id="education"
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-8 text-center"><GraduationCap className="inline-block mr-2 h-7 w-7 text-primary" />Education</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className={cn("transition-all hover:scale-105 h-full", "glass-effect")}>
              <CardHeader>
                <CardTitle>{item.degree}</CardTitle>
                <CardDescription>{item.institution}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
