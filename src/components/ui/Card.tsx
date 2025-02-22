import { Frame } from "@/lib/brand";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Card = ({
  children,
  className,
  size = "md",
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 bg-white dark:bg-gray-900",
        Frame.corners(size),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 