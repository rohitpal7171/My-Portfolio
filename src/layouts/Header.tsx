"use client";
import { useState } from 'react';
import { Code, Github, Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
  ];

  const socialLinks = [
     { href: "https://github.com/rohitpal7171", label: "GitHub", Icon: Github },
     { href: "https://www.linkedin.com/in/rohit-singh-pal-5895b0146", label: "LinkedIn", Icon: Linkedin },
  ]

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50", 
      "glass-effect"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="font-headline text-2xl font-bold tracking-wider text-primary flex items-center gap-2">
          <Code />
          <Link href="/" aria-label="Navigate to homepage">CodeSphere By Rohit</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors">{link.label}</Link>
          ))}
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${link.label} profile`}>
                <link.Icon className="h-6 w-6 text-foreground/80 hover:text-primary transition-colors"/>
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden flex items-center">
           <ThemeToggle />
           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open navigation menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

       {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-lg text-foreground/80 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
             <div className="flex gap-4 mt-2">
               {socialLinks.map((link) => (
                <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${link.label} profile`} onClick={() => setIsMenuOpen(false)}>
                    <link.Icon className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors"/>
                </Link>
              ))}
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
