"use client";

import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tech: string[];
}

interface WorkSectionProps {
  projects: Project[];
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

export default function WorkSection({ projects }: WorkSectionProps) {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-headline font-bold mb-12 text-center">
        <FolderGit2 className="inline-block mr-2 h-7 w-7 text-primary" />
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card
              className={cn(
                "h-full flex flex-col rounded-[20px] overflow-hidden transition-all hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2",
                "glass-effect"
              )}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
