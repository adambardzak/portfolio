"use client";

import { forwardRef } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm text-text-muted-light dark:text-text-muted-dark">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            "w-full p-3 rounded-lg bg-hover-light dark:bg-hover-dark",
            "border border-border-light dark:border-border-dark",
            "text-text-light dark:text-text-dark",
            "focus:outline-none focus:border-text-light dark:focus:border-text-dark",
            "transition-colors placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark",
            error && "border-red-500 dark:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
