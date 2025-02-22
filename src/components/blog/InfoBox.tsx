import { ReactNode } from "react";

type InfoBoxProps = {
  title: string;
  children: ReactNode;
  icon?: string;
  color?: "blue" | "green" | "amber" | "purple" | "pink";
};

export const InfoBox = ({ title, children, icon, color = "blue" }: InfoBoxProps) => (
  <div
    className={`
      p-6 bg-${color}-500/5 dark:bg-${color}-400/5 
      border border-${color}-500/10 dark:border-${color}-400/10 
      rounded-xl my-8
    `}
  >
    <h3 className={`text-${color}-500 dark:text-${color}-400 flex items-center gap-2 mt-0`}>
      {icon} {title}
    </h3>
    {children}
  </div>
); 