import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
