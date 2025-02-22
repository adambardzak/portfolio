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
  // Corner style variants
  variants: {
    default: {
      base: "after:rounded-none before:rounded-none",
      hover: "hover:after:rounded-none hover:before:rounded-none",
    },
    rounded: {
      base: "after:rounded-tr-lg before:rounded-bl-lg",
      hover: "hover:after:rounded-lg hover:before:rounded-lg",
    },
    circular: {
      base: "after:rounded-full before:rounded-full",
      hover: "hover:after:rounded-full hover:before:rounded-full",
    },
    diagonal: {
      base: "after:rounded-tr-2xl before:rounded-bl-2xl after:rounded-tl-none before:rounded-br-none",
      hover: "hover:after:rounded-2xl hover:before:rounded-2xl",
    },
    pill: {
      base: "after:rounded-[2rem] before:rounded-[2rem]",
      hover: "hover:after:rounded-[3rem] hover:before:rounded-[3rem]",
    },
    // Logo-specific frame variants
    code: {
      base: `
        after:rounded-tr-md before:rounded-bl-md
        after:border-t-[3px] after:border-r-[3px]
        before:border-b-[3px] before:border-l-[3px]
        after:border-dashed before:border-dashed
      `,
      hover: "hover:after:rounded-lg hover:before:rounded-lg",
    },
    brackets: {
      base: `
        after:rotate-12 before:-rotate-12
        after:border-r-[3px] before:border-l-[3px]
        after:h-[140%] before:h-[140%]
        after:w-2 before:w-2
        after:rounded-full before:rounded-full
      `,
      hover: "hover:after:rotate-0 hover:before:rotate-0",
    },
    terminal: {
      base: `
        after:border-t-[3px] after:border-r-[3px]
        before:border-b-[3px] before:border-l-[3px]
        after:w-6 after:h-6 before:w-6 before:h-6
        after:opacity-75 before:opacity-75
      `,
      hover: `
        hover:after:w-8 hover:after:h-8
        hover:before:w-8 hover:before:h-8
        hover:after:opacity-100 hover:before:opacity-100
      `,
    },
    pixels: {
      base: `
        after:bg-gray-900 after:dark:bg-gray-100
        before:bg-gray-900 before:dark:bg-gray-100
        after:w-1.5 after:h-1.5 before:w-1.5 before:h-1.5
        after:border-none before:border-none
        after:shadow-lg before:shadow-lg
      `,
      hover: "hover:after:scale-150 hover:before:scale-150",
    },
    circuit: {
      base: `
        after:border-t-[2px] after:border-r-[2px]
        before:border-b-[2px] before:border-l-[2px]
        after:w-8 before:w-8 after:h-8 before:h-8
        after:border-dashed before:border-dashed
        after:-translate-x-2 after:-translate-y-2
        before:translate-x-2 before:translate-y-2
      `,
      hover: `
        hover:after:translate-x-0 hover:after:translate-y-0
        hover:before:translate-x-0 hover:before:translate-y-0
      `,
    },
  },

  corners: (
    size: 'sm' | 'md' | 'lg' = 'md', 
    variant: keyof typeof Frame.variants = 'default',
    color = 'border-gray-900 dark:border-gray-100'
  ) => `
    relative
    ${size === 'sm' ? 'after:w-2 after:h-2 before:w-2 before:h-2' : 
      size === 'md' ? 'after:w-3 after:h-3 before:w-3 before:h-3' : 
      'after:w-4 after:h-4 before:w-4 before:h-4'}
    after:absolute after:top-0 after:right-0 after:border-t-2 after:border-r-2
    before:absolute before:bottom-0 before:left-0 before:border-b-2 before:border-l-2
    after:${color}
    before:${color}
    ${Frame.variants[variant].base}
  `,

  animated: (
    size: 'sm' | 'md' | 'lg' = 'md',
    variant: keyof typeof Frame.variants = 'default',
    color = 'border-gray-900 dark:border-gray-100'
  ) => `
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
    ${Frame.variants[variant].base}
    ${Frame.variants[variant].hover}
  `,
}; 