type SubHeadingProps = {
  children: React.ReactNode;
  number?: string | number;
};

export const SubHeading = ({ children, number }: SubHeadingProps) => (
  <div className="flex items-center gap-4 mb-6 mt-16">
    {number && (
      <span className="text-blue-500/20 dark:text-blue-400/20 font-monument text-4xl">
        {number}
      </span>
    )}
    <h3 className="font-monument text-2xl text-text-light dark:text-text-dark">
      {children}
    </h3>
  </div>
); 