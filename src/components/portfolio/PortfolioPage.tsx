"use client";

import { Briefcase, Code, GraduationCap, Github, Linkedin, Mail, Projector } from "lucide-react";
import Header from "../layout/Header";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";

const skills = {
  "Frontend Development": ["React.js", "Redux", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"],
  "Tools & APIs": ["Git & GitHub", "REST APIs", "Relay", "GraphQL"],
  "Soft Skills": ["Problem-solving", "Team collaboration", "Code reviews", "Rapid learning", "Adaptability", "Communication", "Ownership"]
};

const experience = [
  {
    role: "Software Developer",
    company: "MikeLegal",
    period: "Jul 2023 – Present",
    location: "Remote (Gurugram, India)",
    description: "Spearheading frontend development in a fast-paced legal-tech team, building scalable components using ReactJS, Redux, and TypeScript to enhance user experiences for legal domain clients."
  },
  {
    role: "Software Developer",
    company: "Appointy India",
    period: "Jun 2021 – Jun 2023",
    location: "On-site (Bhopal, India)",
    description: "Designed and developed intuitive UIs for enterprise products. Maintained complex codebases, ensured performance optimization, and contributed to a stable, modular frontend architecture."
  },
  {
    role: "Web Development Intern",
    company: "Appointy India",
    period: "Nov 2020 – Jun 2021",
    location: "Remote",
    description: "Gained hands-on experience fixing real-world issues and bugs, exploring advanced technologies like GraphQL and Relay while working on live systems."
  },
    {
    role: "Web Development Intern",
    company: "FIZ Robotic Solutions",
    period: "Jul 2019 – Nov 2020",
    location: "On-site (Gwalior, India)",
    description: "Collaborated with UI/UX and backend teams to deliver secure, responsive websites. Focused on cross-browser compatibility, web standards, and frontend performance."
  }
];

const projects = [
  {
    title: "Project One",
    description: "A brief description of a cool project you built. What was the tech stack? What problem did it solve?",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
   {
    title: "Project Two",
    description: "Another awesome project. Highlight your role and the key features you implemented.",
    image: "https://placehold.co/600x400.png",
    tags: ["Next.js", "GraphQL", "ShadCN UI"],
    liveUrl: "#",
    githubUrl: "#"
  }
]


export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground font-body">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-16">
        
        {/* Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24">
          <div className="flex-1">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold text-primary">Rohit Singh Pal</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mt-2">Frontend Software Developer</h2>
            <p className="mt-6 text-lg max-w-2xl text-muted-foreground">
              Passionate developer with over 4 years of experience building robust, user-focused web applications. I specialize in React.js and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="mailto:rohitpal7171@gmail.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                <Mail className="h-5 w-5" /> Contact Me
              </Link>
            </div>
          </div>
           <div className="flex-shrink-0">
            <Image 
              src="https://placehold.co/300x300.png"
              alt="Rohit Singh Pal"
              width={300}
              height={300}
              data-ai-hint="male professional"
              className="rounded-full border-4 border-primary/50 shadow-lg"
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-24">
          <h2 className="text-3xl font-headline font-bold mb-8 text-center"><Code className="inline-block mr-2 h-7 w-7 text-primary" />Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {skillList.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <h2 className="text-3xl font-headline font-bold mb-12 text-center"><Briefcase className="inline-block mr-2 h-7 w-7 text-primary"/>Professional Experience</h2>
          <div className="relative border-l-2 border-primary/20 pl-8">
            {experience.map((job, index) => (
              <div key={index} className="mb-10">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background"></div>
                <p className="text-sm text-muted-foreground">{job.period}</p>
                <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                <p className="font-semibold text-foreground/80">{job.company} - <span className="text-sm font-normal">{job.location}</span></p>
                <p className="mt-2 text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-headline font-bold mb-8 text-center"><Projector className="inline-block mr-2 h-7 w-7 text-primary" />Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint="technology abstract" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                   <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex gap-4">
                     <Link href={project.liveUrl} target="_blank" className="text-primary hover:underline">View Live</Link>
                     <Link href={project.githubUrl} target="_blank" className="text-primary hover:underline">View Code</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
           </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-24">
          <h2 className="text-3xl font-headline font-bold mb-8 text-center"><GraduationCap className="inline-block mr-2 h-7 w-7 text-primary" />Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Bachelor of Technology (B.Tech), Computer Science</CardTitle>
                <CardDescription>ITM Group of Institutions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

      </main>

       {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Let&apos;s Connect</p>
          <div className="flex justify-center gap-6 mb-4">
             <Link href="https://github.com/rohitpal7171" target="_blank" rel="noopener noreferrer">
              <Github className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors"/>
            </Link>
            <Link href="https://www.linkedin.com/in/rohit-singh-pal-5895b0146" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors"/>
            </Link>
             <Link href="mailto:rohitpal7171@gmail.com">
              <Mail className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors"/>
            </Link>
          </div>
           <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rohit Singh Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
