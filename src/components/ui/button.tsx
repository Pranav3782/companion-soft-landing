import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary hover:scale-[1.02] active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground font-semibold hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        "hero-outline": "border-2 border-foreground/20 bg-card text-foreground font-semibold hover:bg-muted hover:border-foreground/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        cta: "bg-primary text-primary-foreground font-semibold px-8 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]",
        soft: "bg-card text-foreground border border-border hover:bg-muted hover:border-primary/30 hover:scale-[1.02] active:scale-[0.98]",
        nav: "bg-primary text-primary-foreground font-medium hover:shadow-soft hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
