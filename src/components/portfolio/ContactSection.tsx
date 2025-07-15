import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    { href: "https://github.com/rohitpal7171", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/rohit-singh-pal-5895b0146", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:rohit.pal7171@gmail.com", label: "Email", Icon: Mail },
  ];

  return (
    <footer className="glass-effect text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-headline text-primary">Let's Connect</p>
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Contact via ${link.label}`}>
              <link.Icon className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors hover:scale-125" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rohit Singh Pal. All rights reserved.</p>
      </div>
    </footer>
  );
}
