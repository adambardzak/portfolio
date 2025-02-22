import { Frame } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative px-6 py-2.5 font-medium transition-colors",
        Frame.animated(size),
        variant === "primary" && "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
        variant === "secondary" && "text-gray-900 dark:text-gray-100",
        variant === "text" && "text-gray-600 dark:text-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 