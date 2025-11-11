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
        // Brand Colors - Luxury Amethyst Theme
        primary: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",  // Main purple
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
        },
        gold: {
          50: "#FFF FEF7",
          100: "#FEFCE8",
          200: "#FEF9C3",
          300: "#FEF08A",
          400: "#FDE047",
          500: "#F59E0B",  // Accent gold
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        background: "#FFFFFF",
        cream: "#FEFEFE",
        "text-primary": "#1F2937",
        "text-secondary": "#4B5563",
        "text-light": "#9CA3AF",
        "border-light": "#F3F4F6",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        "wide": "0.02em",
        "wider": "0.05em",
        "widest": "0.1em",
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.05)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
