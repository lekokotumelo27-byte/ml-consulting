import type { Config } from "tailwindcss";

const config: Config = {
  // Tells Tailwind where to look for our styling classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Defining our premium Blue & White color system
      colors: {
        background: "#FFFFFF", // Pure white canvas
        foreground: "#0F172A", // Deep slate for high-readability text
        brand: {
          blue: "#2563EB",         // Logic Blue (Primary button & links)
          blueLight: "#60A5FA",    // Subtle blue accents
          blueDeep: "#1E3A8A",     // Deep Navy for dominant titles
          ice: "#F8FAFC",          // Slate-Ice background tint for structural sections
          border: "#E2E8F0",       // Hairline borders between layout pieces
        },
      },
    },
  },
  plugins: [],
};

export default config;