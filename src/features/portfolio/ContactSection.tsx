
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function ContactSection() {
  const { t } = useLanguage();
  const socialLinks = [
    { href: "https://github.com/rohitpal7171", label: "GitHub", Icon: Github },
    { href: "https://www.linkedin.com/in/rohit-singh-pal-5895b0146", label: "LinkedIn", Icon: Linkedin },
    { href: "mailto:rohit.pal7171@gmail.com", label: "Email", Icon: Mail },
  ];

  return (
    <footer className="glass-effect text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-lg font-headline text-primary">{t('contact.title')}</p>
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Contact via ${link.label}`}>
              <link.Icon className="h-8 w-8 text-foreground/80 hover:text-primary transition-colors hover:scale-125" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{t('contact.copyright', { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
