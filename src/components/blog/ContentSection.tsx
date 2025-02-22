type ContentSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const ContentSection = ({ children, className = "" }: ContentSectionProps) => (
  <div className={`
    relative p-8 lg:p-12 
    bg-white dark:bg-[#161616] 
    rounded-2xl border border-gray-200 dark:border-gray-800
    ${className}
  `}>
    {children}
  </div>
); 