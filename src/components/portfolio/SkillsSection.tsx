import { Dna } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { sectionVariants, itemVariants } from './variants';
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  list: Skill[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-12 text-center"><Dna className="inline-block mr-2 h-7 w-7 text-primary" />Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
          <motion.div key={skillCategory.category} variants={itemVariants}>
            <Card className={cn("h-full transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2", "glass-effect")}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <skillCategory.icon className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-headline">{skillCategory.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {skillCategory.list.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-3 p-2 rounded-md transition-colors hover:bg-primary/10">
                      <skill.icon className="h-5 w-5 text-accent" />
                      <span className="font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
