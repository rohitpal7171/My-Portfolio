"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface HexagonProps {
  title: string;
  Icon: LucideIcon;
  children: ReactNode;
}

const hexagonClipPath = "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

export function Hexagon({ title, Icon, children }: HexagonProps) {
  return (
    <div className="group relative w-48 h-56 flex items-center justify-center">
      {/* Hexagon shape */}
      <div
        className={cn(
          "absolute w-full h-full bg-secondary/30 transition-all duration-300 ease-in-out group-hover:bg-primary/20",
          "animate-subtle-pulse",
          hexagonClipPath
        )}
      />
      {/* Glowing border effect */}
      <div
        className={cn(
          "absolute w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
          "bg-primary/50 blur-lg",
          hexagonClipPath
        )}
      />
       {/* Inner content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4">
        {/* Static content visible by default */}
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <Icon className="w-12 h-12 mx-auto text-primary" />
          <h3 className="mt-4 font-headline text-lg font-bold">{title}</h3>
        </div>
        
        {/* Hover content, revealed on hover */}
        <div className="absolute inset-0 p-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {children}
        </div>
      </div>
    </div>
  );
}
