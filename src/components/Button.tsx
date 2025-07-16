import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 hover:scale-105",
        {
          "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25":
            variant === "primary",
          "bg-white/10 text-gray-900 dark:text-white hover:bg-white/20 border border-gray-300 dark:border-white/20 backdrop-blur-sm":
            variant === "secondary",
          "border border-blue-500/50 bg-transparent text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 hover:border-blue-400":
            variant === "outline",
        },
        {
          "px-2.5 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
