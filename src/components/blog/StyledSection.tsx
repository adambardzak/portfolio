import { ReactNode } from "react";

type StyledSectionProps = {
  children: ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "pink";
};

export const StyledSection = ({ children, color = "blue" }: StyledSectionProps) => (
  <div
    className={`
      p-6 bg-${color}-500/5 dark:bg-${color}-400/5 
      border border-${color}-500/10 dark:border-${color}-400/10 
      rounded-xl mb-12
    `}
  >
    {children}
  </div>
); 