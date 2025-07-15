"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Code, Cpu, Dna, GraduationCap, Github, Linkedin, Mail, Mic, Projector, Send, User } from "lucide-react";
import Header from "../layout/Header";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getNpcResponse, getVoiceResponse } from "@/app/actions";

const skills = {
  "Frontend Development": ["React.js", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  "Tools & APIs": ["Git & GitHub", "REST APIs", "Relay", "GraphQL"],
  "Soft Skills": ["Problem-solving", "Team collaboration", "Code reviews", "Rapid learning", "Adaptability", "Communication", "Ownership"]
};

const experience = [
  { role: "Software Developer", company: "MikeLegal", period: "Jul 2023 – Present" },
  { role: "Software Developer", company: "Appointy India", period: "Jun 2021 – Jun 2023" },
  { role: "Web Development Intern", company: "Appointy India", period: "Nov 2020 – Jun 2021" },
  { role: "Web Development Intern", company: "FIZ Robotic Solutions", period: "Jul 2019 – Nov 2020" }
];

export default function PortfolioPage() {
  const [npcInput, setNpcInput] = useState("");
  const [npcResponse, setNpcResponse] = useState("Ask me about Rohit's portfolio, skills, or experience.");
  const [isNpcLoading, setIsNpcLoading] = useState(false);
  const [isVoiceLoading, setIsVoiceLoading] = useState(false);
  const [audio, setAudio] = useState<string | null>(null);

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
    <div className="bg-background text-foreground font-body min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">

        {/* Hero Section */}
        <section id="hero" className="grid md:grid-cols-2 items-center gap-12 mb-24 animate-fade-in-up">
          <div className="flex-1">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary">Rohit Singh Pal</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2">Frontend Software Developer</h2>
            <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
              Welcome to my interactive portfolio. I am a passionate developer with over 4 years of experience building robust, user-focused web applications. Explore my world, ask questions, and get to know my work.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-lg border border-primary/20">
             <Image 
              src="https://placehold.co/400x400.png"
              alt="AI NPC"
              width={400}
              height={400}
              data-ai-hint="futuristic hologram"
              className="rounded-lg shadow-2xl shadow-primary/20 animate-float"
            />
            <Card className="w-full mt-4 bg-transparent border-primary/30 animate-subtle-pulse">
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
          </div>
        </section>
        
        {/* Voice Assistant Section */}
        <section className="text-center mb-24 animate-fade-in-up animation-delay-300">
           <h2 className="text-3xl font-headline font-bold mb-4 text-center">Voice Command</h2>
           <p className="text-muted-foreground mb-6">Ask a question and hear a response from the AI assistant.</p>
           <div className="flex justify-center gap-4">
               <Button onClick={() => handleVoiceQuery("Tell me about Rohit's experience")} disabled={isVoiceLoading}>
                <Mic className="mr-2"/> Who is Rohit?
               </Button>
                <Button onClick={() => handleVoiceQuery("What are Rohit's technical skills?")} disabled={isVoiceLoading}>
                <Mic className="mr-2"/> What are his skills?
               </Button>
           </div>
            {audio && <audio className="mt-6 mx-auto" controls autoPlay src={audio} />}
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 p-8 border border-primary/20 rounded-lg bg-secondary/20 animate-fade-in-up animation-delay-500">
           <h2 className="text-3xl font-headline font-bold mb-4 text-center"><User className="inline-block mr-2 h-7 w-7 text-primary" /> About Me</h2>
           <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
             I'm a passionate and dedicated Frontend Software Developer with over 4 years of progressive experience in building robust, user-focused web applications. I specialize in React.js, Redux, and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products. I thrive in fast-paced environments and believe in continuous learning, adaptability, and solving real-world problems through clean and scalable code.
           </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24 animate-fade-in-up animation-delay-700">
          <h2 className="text-3xl font-headline font-bold mb-8 text-center"><Dna className="inline-block mr-2 h-7 w-7 text-primary" />Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-secondary/30 border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillList.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24 animate-fade-in-up animation-delay-900">
          <h2 className="text-3xl font-headline font-bold mb-12 text-center"><Briefcase className="inline-block mr-2 h-7 w-7 text-primary"/>Professional Experience</h2>
          <div className="relative border-l-2 border-primary/20 pl-8">
            {experience.map((job, index) => (
              <div key={index} className="mb-10 transition-all hover:ml-4">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125"></div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                <p className="font-semibold text-foreground/80">{job.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24 animate-fade-in-up animation-delay-1000">
          <h2 className="text-3xl font-headline font-bold mb-8 text-center"><GraduationCap className="inline-block mr-2 h-7 w-7 text-primary" />Education</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-secondary/30 border-primary/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>Bachelor of Technology</CardTitle>
                <CardDescription>ITM Group of Institutions, Computer Science</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary/30 border-primary/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>12th Grade</CardTitle>
                <CardDescription>Delhi Public Academy</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-secondary/30 border-primary/20 transition-all hover:scale-105">
              <CardHeader>
                <CardTitle>10th Grade</CardTitle>
                <CardDescription>No.1 Air force School</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

      </main>

       {/* Footer */}
      <footer className="bg-secondary/50 text-secondary-foreground py-8">
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
}

    