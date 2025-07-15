import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GradientButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="secondary"
        className={cn(
          "relative overflow-hidden",
          "glass-effect",
          "before:absolute before:top-0 before:left-0 before:w-1/2 before:h-0.5",
          "before:bg-gradient-to-r before:from-accent before:to-primary",
          "before:animate-top-border-slide",
          className
        )}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </Button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export { GradientButton };
