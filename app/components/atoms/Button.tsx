import { type ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 focus:ring-slate-500",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
