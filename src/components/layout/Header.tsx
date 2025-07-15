"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="font-headline text-2xl font-bold tracking-wider text-glow">
          NexusVerse
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
