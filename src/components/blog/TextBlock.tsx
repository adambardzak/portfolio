type TextBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export const TextBlock = ({ children, className = "" }: TextBlockProps) => (
  <div className={`mb-12 ${className}`}>
    {children}
  </div>
); 