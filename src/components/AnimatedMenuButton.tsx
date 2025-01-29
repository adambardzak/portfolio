type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

export default function AnimatedMenuButton({
  isOpen,
  setIsOpen,
  className = "",
}: Props) {
  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center h-10 w-10 md:hidden z-50 ${className}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-all duration-500 relative z-50 ${
            isOpen
              ? "stroke-light dark:stroke-dark"
              : "stroke-dark dark:stroke-light"
          }`}
        >
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            className={`transition-all duration-200 origin-center ${
              isOpen ? "rotate-45 translate-y-0" : "translate-y-[-5px] rotate-0"
            }`}
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            className={`transition-all duration-200 origin-center ${
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-[5px] rotate-0"
            }`}
          />
        </svg>
        <div
          className={`absolute inset-0 rounded-full  transition-transform duration-300 ${
            isOpen
              ? "scale-100 opacity-100 bg-dark dark:bg-light"
              : "scale-0 opacity-0 bg-light dark:bg-dark"
          }`}
          style={{
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
      </button>
    </>
  );
}
