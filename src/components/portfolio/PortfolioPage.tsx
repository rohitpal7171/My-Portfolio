"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, Code, Cpu, Dna, GraduationCap, Github, Linkedin, Mail, Mic, Send, User, 
  CodeXml, GitBranch, BrainCircuit, Bot, Lightbulb, Users, GitCommit, Link2, 
  Type, Braces, Rocket, ShieldCheck, Component, ArrowRight, BookOpen, Network, Languages, FileCode, Gem
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Header from "../layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getNpcResponse, getVoiceResponse } from "@/app/actions";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const skills: {
  category: string;
  icon: LucideIcon;
  list: { name: string; icon: LucideIcon }[];
}[] = [
  {
    category: "Frontend Development",
    icon: CodeXml,
    list: [
      { name: "React.js", icon: Braces },
      { name: "Redux", icon: Network },
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Type },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Gem },
      { name: "Bootstrap", icon: Component },
    ],
  },
  {
    category: "Tools & APIs",
    icon: GitCommit,
    list: [
      { name: "Git & GitHub", icon: Github },
      { name: "REST APIs", icon: Link2 },
      { name: "Relay", icon: Rocket },
      { name: "GraphQL", icon: GitBranch },
    ],
  },
  {
    category: "Soft Skills",
    icon: BrainCircuit,
    list: [
      { name: "Problem-solving", icon: Lightbulb },
      { name: "Team collaboration", icon: Users },
      { name: "Code reviews", icon: ShieldCheck },
      { name: "Rapid learning", icon: Rocket },
      { name: "Adaptability", icon: ArrowRight },
      { name: "Communication", icon: Mic },
      { name: "Ownership", icon: BookOpen },
    ],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "MikeLegal",
    period: "Jul 2023 – Present",
    location: "Remote (Gurugram, India)",
    isCurrent: true,
    description: [
      "Spearheading frontend development in a fast-paced legal-tech team.",
      "Building scalable, maintainable components using ReactJS, Redux, TypeScript, and JavaScript.",
      "Collaborating cross-functionally to enhance user experiences for clients in the legal domain.",
    ],
    icon: <Briefcase />
  },
  {
    role: "Software Developer",
    company: "Appointy India",
    period: "Jun 2021 – Jun 2023",
    location: "On-site (Bhopal, India)",
    description: [
      "Designed and developed intuitive UIs for enterprise products.",
      "Maintained complex codebases, ensured performance optimization, and adhered to industry best practices.",
      "Contributed to a stable and modular frontend architecture using React, Redux, and modern tooling.",
    ],
    icon: <Briefcase />
  },
  {
    role: "Web Development Intern",
    company: "Appointy India",
    period: "Nov 2020 – Jun 2021",
    location: "Remote",
    description: [
      "Gained hands-on experience fixing real-world issues and bugs.",
      "Explored advanced technologies like GraphQL and Relay while working on live systems.",
    ],
    icon: <Briefcase />
  },
  {
    role: "Web Development Intern",
    company: "FIZ Robotic Solutions",
    period: "Jul 2019 – Nov 2020",
    location: "On-site (Gwalior, India)",
    description: [
      "Collaborated with UI/UX and backend teams to deliver secure, responsive websites.",
      "Focused on cross-browser compatibility, web standards, and frontend performance.",
    ],
    icon: <Briefcase />
  }
];


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function PortfolioPage() {
  const [npcInput, setNpcInput] = useState("");
  const [npcResponse, setNpcResponse] = useState("Ask me about Rohit's portfolio, skills, or experience.");
  const [isNpcLoading, setIsNpcLoading] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [audio, setAudio] = useState<string | null>(null);
  const [typedSubtitle, setTypedSubtitle] = useState('');

  const fullSubtitle = "Frontend Software Developer";

  useEffect(() => {
    let subtitleIndex = 0;
    setTypedSubtitle('');
  
    const interval = setInterval(() => {
      if (subtitleIndex < fullSubtitle.length) {
        setTypedSubtitle((prev) => prev + fullSubtitle.charAt(subtitleIndex));
        subtitleIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  
    return () => clearInterval(interval);
  }, []);

  const handleNpcSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!npcInput) return;
    setIsNpcLoading(true);
    setNpcResponse("");
    const { response } = await getNpcResponse({ query: npcInput });
    setNpcResponse(response);
    setIsNpcLoading(false);
    setNpcInput("");
  };
  
  const handleVoiceQuery = async (query: string) => {
    setIsVoiceLoading(true);
    setAudio(null);
    const { media } = await getVoiceResponse({ query });
    if (media) {
      setAudio(media);
    }
    setIsVoiceLoading(false);
  };

  return (
    <div className="bg-transparent text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">

        {/* Hero Section */}
        <motion.section 
          id="hero" 
          className="grid md:grid-cols-2 items-center gap-12 mb-24"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary">Rohit Singh Pal</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2 min-h-[40px]">{typedSubtitle}<span className="inline-block w-1 h-8 bg-primary animate-ping ml-1"></span></h2>
            <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
              Welcome to my interactive portfolio. I am a passionate developer with over 4 years of experience building robust, user-focused web applications. Explore my world, ask questions, and get to know my work.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-lg">
             <Image 
              src="https://placehold.co/400x400.png"
              alt="Rohit Singh Pal"
              width={400}
              height={400}
              data-ai-hint="professional man"
              className="rounded-lg shadow-2xl shadow-primary/20 animate-float object-cover aspect-square"
            />
            <Card className={cn("w-full mt-4 animate-subtle-pulse", "glass-effect")}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Cpu size={20} className="text-primary"/> AI Assistant</CardTitle>
                <CardDescription>{isNpcLoading ? "Thinking..." : npcResponse}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNpcSubmit} className="flex gap-2">
                  <Input 
                    value={npcInput}
                    onChange={(e) => setNpcInput(e.target.value)}
                    placeholder="Type your question..."
                    disabled={isNpcLoading}
                  />
                  <Button type="submit" size="icon" disabled={isNpcLoading}>
                    <Send size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
        
        {/* Voice Assistant Section */}
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
              <Button onClick={() => handleVoiceQuery("Tell me about Rohit's experience")} disabled={isVoiceLoading} className="gradient-border-button">
                <span>
                  <Mic className="mr-2"/> Who is Rohit?
                </span>
               </Button>
                <Button onClick={() => handleVoiceQuery("What are Rohit's technical skills?")} disabled={isVoiceLoading} className="gradient-border-button">
                  <span>
                    <Mic className="mr-2"/> What are his skills?
                  </span>
               </Button>
           </div>
            {audio && <audio className="mt-6 mx-auto" controls autoPlay src={audio} />}
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className={cn("mb-24 p-8 rounded-lg", "glass-effect")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
           <h2 className="text-3xl font-headline font-bold mb-4 text-center"><User className="inline-block mr-2 h-7 w-7 text-primary" /> About Me</h2>
           <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
             I'm a passionate and dedicated Frontend Software Developer with over 4 years of progressive experience in building robust, user-focused web applications. I specialize in React.js, Redux, and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products. I thrive in fast-paced environments and believe in continuous learning, adaptability, and solving real-world problems through clean and scalable code.
           </p>
        </motion.section>

        {/* Skills Section */}
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


        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-headline font-bold mb-12 text-center"><Briefcase className="inline-block mr-2 h-7 w-7 text-primary"/>Professional Experience</h2>
          <div className="relative pl-6">
            <div className="absolute left-[31px] -translate-x-1/2 top-0 h-full w-0.5 bg-primary/20"></div>
            {experience.map((job, index) => (
              <motion.div key={index} className="relative pl-8 pb-12" variants={itemVariants}>
                <div className="absolute left-0 top-0 ml-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-background border-2 border-primary text-primary">
                    {job.icon}
                  </div>
                </div>
                
                <div className={cn("p-6 rounded-lg ml-12", "glass-effect")}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                    {job.isCurrent && (
                      <Badge variant="outline" className="border-accent bg-accent/20 text-foreground dark:text-background">Current</Badge>
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

        {/* Education Section */}
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
            <motion.div variants={itemVariants}>
              <Card className={cn("transition-all hover:scale-105 h-full", "glass-effect")}>
                <CardHeader>
                  <CardTitle>Bachelor of Technology</CardTitle>
                  <CardDescription>ITM Group of Institutions, Computer Science</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
             <motion.div variants={itemVariants}>
              <Card className={cn("transition-all hover:scale-105 h-full", "glass-effect")}>
                <CardHeader>
                  <CardTitle>12th Grade</CardTitle>
                  <CardDescription>Delhi Public Academy</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
             <motion.div variants={itemVariants}>
              <Card className={cn("transition-all hover:scale-105 h-full", "glass-effect")}>
                <CardHeader>
                  <CardTitle>10th Grade</CardTitle>
                  <CardDescription>No.1 Air force School</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </motion.section>

      </main>

       {/* Footer */}
      <footer className="glass-effect text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-lg font-headline text-primary">Let&apos;s Connect</p>
          <div className="flex justify-center gap-6 mb-4">
             <Link href="https://github.com/rohitpal7171" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors hover:scale-125"/>
            </Link>
            <Link href="https://www.linkedin.com/in/rohit-singh-pal-5895b0146" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors hover:scale-125"/>
            </Link>
             <Link href="mailto:rohitpal7171@gmail.com">
              <Mail className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors hover:scale-125"/>
            </Link>
          </div>
           <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rohit Singh Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

    

