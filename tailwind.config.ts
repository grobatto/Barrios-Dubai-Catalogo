import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "text-light": "#999999",
        "accent-primary": "#663399",
        "accent-gold": "#C9A961",
        "accent-earth": "#8B7355",
        "hover-overlay": "rgba(102, 51, 153, 0.05)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "35": "8.75rem",
        "125": "31.25rem",
      },
      fontSize: {
        "7xl": "72px",
        "8xl": "96px",
        "9xl": "120px",
      },
    },
  },
  plugins: [],
};

export default config;
