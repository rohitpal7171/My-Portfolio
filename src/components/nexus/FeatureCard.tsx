"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn(
      "bg-card/50 backdrop-blur-sm hologram-border transition-all duration-300 transform-gpu hover:scale-105 hover:border-accent/80",
      className
    )}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary p-3 rounded-lg">
            {icon}
          </div>
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-foreground/70">{description}</CardDescription>
        <Button variant="link" className="p-0 h-auto mt-4 text-accent">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
