import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5276] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#1A5276] text-white hover:bg-[#154360] shadow-md hover:shadow-lg":
              variant === "primary",
            "bg-[#2E86C1] text-white hover:bg-[#1A5276]": variant === "secondary",
            "border-2 border-[#C0765A] text-[#C0765A] hover:bg-[#C0765A] hover:text-white":
              variant === "outline",
            "text-[#1A5276] hover:bg-[#F0F6FB]": variant === "ghost",
          },
          {
            "h-10 px-6 text-sm": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
