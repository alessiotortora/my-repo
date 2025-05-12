"use client";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        muted: "bg-muted text-muted-foreground shadow-xs hover:bg-muted/80",
        link: "text-primary underline font-normal decoration-dashed decoration-muted-foreground underline-offset-4 !px-0 hover:text-primary/80",
      },
      size: {
        default: "h-8 px-4 py-2 has-[>svg]:px-3",
        sm: "h-7 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-9 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  className,
  variant,
  size,
  asChild = false,
  icon,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      type={asChild ? undefined : "button"}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {icon && <span className="flex items-center justify-center shrink-0">{icon}</span>}
    </Comp>
  );
}

export { buttonVariants };
