export const brand = {
  colors: {
    primary: {
      light: "#4F46E5", // indigo-600
      dark: "#6366F1", // indigo-500
    },
    secondary: {
      light: "#0EA5E9", // sky-500
      dark: "#38BDF8", // sky-400
    },
    accent: {
      light: "#06B6D4", // cyan-500
      dark: "#22D3EE", // cyan-400
    },
  },
  gradients: {
    primary: "from-indigo-500 via-blue-500 to-cyan-500",
    secondary: "from-blue-500 via-cyan-500 to-teal-500",
    accent: "from-cyan-500 via-teal-500 to-emerald-500",
  },
  shadows: {
    primary: "0 0 30px -10px rgba(79, 70, 229, 0.2)",
    hover: "0 10px 40px -10px rgba(79, 70, 229, 0.3)",
  },
  fonts: {
    heading: "var(--font-monument)",
    body: "Space_Grotesk, sans-serif",
  },
  spacing: {
    section: "py-32",
    container: "max-w-7xl mx-auto px-8 lg:px-16",
  },
  animations: {
    easing: [0.16, 1, 0.3, 1],
    duration: 0.8,
  },
  borderRadius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
  },
};

export const Frame = {
  corners: (size: 'sm' | 'md' | 'lg' = 'md', color = 'border-gray-900 dark:border-gray-100') => `
    relative
    ${size === 'sm' ? 'after:w-2 after:h-2 before:w-2 before:h-2' : 
      size === 'md' ? 'after:w-3 after:h-3 before:w-3 before:h-3' : 
      'after:w-4 after:h-4 before:w-4 before:h-4'}
    after:absolute after:top-0 after:right-0 after:border-t-2 after:border-r-2
    before:absolute before:bottom-0 before:left-0 before:border-b-2 before:border-l-2
    after:${color}
    before:${color}
  `,
  animated: (size: 'sm' | 'md' | 'lg' = 'md', color = 'border-gray-900 dark:border-gray-100') => `
    relative
    ${size === 'sm' ? 'after:w-2 after:h-2 before:w-2 before:h-2' : 
      size === 'md' ? 'after:w-3 after:h-3 before:w-3 before:h-3' : 
      'after:w-4 after:h-4 before:w-4 before:h-4'}
    after:absolute after:top-0 after:right-0 after:border-t-2 after:border-r-2
    before:absolute before:bottom-0 before:left-0 before:border-b-2 before:border-l-2
    after:${color}
    before:${color}
    after:transition-all after:duration-200
    before:transition-all before:duration-200
    hover:after:w-6 hover:after:h-6
    hover:before:w-6 hover:before:h-6
  `,
}; 