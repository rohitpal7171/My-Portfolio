"use client";
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="font-headline text-2xl font-bold tracking-wider">
          <Link href="/">RSP</Link>
        </div>
        <nav className="flex items-center gap-4">
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
