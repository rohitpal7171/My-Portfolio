"use client";

import { FolderGit2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  links: {
    label: string;
    href: string;
  }[];
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className={cn("h-full flex flex-col rounded-[20px] overflow-hidden", "glass-effect")}>
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-[3/2]"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                {project.links.map((link, linkIndex) => (
                  <Button key={linkIndex} asChild variant="secondary" className="mr-2 glass-effect hover:bg-primary/20">
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label} <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
