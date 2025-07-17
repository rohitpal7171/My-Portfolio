import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="secondary"
        className={cn("relative p-[0.5px] overflow-hidden rounded-[10px] glass-effect group", className)}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[border-spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#fd594a_25%,transparent_75%,transparent_100%)]" />
        <span className="relative z-10 inline-flex h-full w-full items-center justify-center gap-2 rounded-[9.5px] bg-background/95 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-3xl group-hover:bg-background/90 transition-colors">
          {children}
        </span>
      </Button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
