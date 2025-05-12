import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/ui/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-full h-6 text-xs gap-1.5 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        muted: "bg-muted text-muted-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
        info: "bg-info text-info-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "px-2.5 py-0.5",
        sm: "px-2 py-0.5 text-[0.6875rem]",
        lg: "px-3 py-1 text-sm",
      },
      hasIcon: {
        true: "pl-0 pr-0 w-6 justify-center md:pl-2.5 md:pr-3 md:w-auto md:justify-start",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hasIcon: false,
    },
  }
);

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  className?: string;
  asChild?: boolean;
  icon?: React.ReactNode;
}

export const Badge = ({
  className,
  variant,
  size,
  icon,
  asChild = false,
  ...props
}: BadgeProps) => {
  const hasIcon = Boolean(icon);
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, hasIcon }), className)}
      {...props}
    >
      {icon && <span className="flex items-center justify-center shrink-0 size-4">{icon}</span>}
      <span className={cn(hasIcon && "hidden md:block")}>{props.children}</span>
    </Comp>
  );
};

export { badgeVariants };
