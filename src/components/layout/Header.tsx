"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-start px-4">
        <div className="font-headline text-2xl font-bold tracking-wider text-glow">
          NexusVerse
        </div>
      </div>
    </header>
  );
}
