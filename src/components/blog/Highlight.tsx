type HighlightProps = {
  children: React.ReactNode;
  color?: "blue" | "green" | "amber" | "purple" | "pink";
};

export const Highlight = ({ children, color = "blue" }: HighlightProps) => (
  <span className={`
    text-${color}-500 dark:text-${color}-400 
    bg-${color}-500/5 dark:bg-${color}-400/5 
    px-1.5 py-0.5 rounded-md
  `}>
    {children}
  </span>
); 