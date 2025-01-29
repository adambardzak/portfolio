import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        light: "#f5f5f3",
        dark: "#0f0f0f",

        // Text colors
        "text-light": "#232323",
        "text-dark": "#f5f5f3",

        // Muted text colors
        "text-muted-light": "rgb(35 35 35 / 0.6)", // #232323 with 60% opacity
        "text-muted-dark": "rgb(245 245 243 / 0.6)", // #f5f5f3 with 60% opacity

        // Border colors
        "border-light": "rgb(35 35 35 / 0.12)", // #232323 with 12% opacity
        "border-dark": "rgb(245 245 243 / 0.12)", // #f5f5f3 with 12% opacity

        // Hover background colors
        "hover-light": "rgb(35 35 35 / 0.03)", // #232323 with 3% opacity
        "hover-dark": "rgb(245 245 243 / 0.03)", // #f5f5f3 with 3% opacity

        // Progress bar colors
        "progress-light": "rgb(35 35 35 / 0.08)", // #232323 with 8% opacity
        "progress-dark": "rgb(245 245 243 / 0.08)", // #f5f5f3 with 8% opacity

        // Active progress colors
        "progress-active-light": "rgb(35 35 35 / 0.15)", // #232323 with 15% opacity
        "progress-active-dark": "rgb(245 245 243 / 0.15)", // #f5f5f3 with 15% opacity
      },
    },
  },
  fontFamily: {
    space: ["var(--font-space-grotesk)"],
    monument: ["var(--font-monument)"],
  },
  plugins: [],
};

export default config;
