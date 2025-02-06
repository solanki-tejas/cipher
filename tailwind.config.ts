import type { Config } from "tailwindcss";

export default {
  // important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // Smaller text
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // Body text
        base: ["1rem", { lineHeight: "1.5rem" }], // Default
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // Slightly larger
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // Subtitles
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // Titles
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // Large headings
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // Section headings
        "5xl": ["3rem", { lineHeight: "1" }], // Page headings
        "6xl": ["3.75rem", { lineHeight: "1" }], // Hero sections
        "7xl": ["4.5rem", { lineHeight: "1" }], // Display text
      },
    },
  },
  plugins: [],
} satisfies Config;
