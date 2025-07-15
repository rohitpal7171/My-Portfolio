"use client";
import { Bot, Cpu, Github, Linkedin, Rss } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-2">
          <Bot />
          <Link href="/">NexusVerse</Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
          <Link href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experience</Link>
          <Link href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</Link>
          <Link href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</Link>
           <Link href="https://github.com/rohitpal7171" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-foreground/80 hover:text-primary transition-colors"/>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/rohit-singh-pal-5895b0146" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-foreground/80 hover:text-primary transition-colors"/>
             <span className="sr-only">LinkedIn</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
