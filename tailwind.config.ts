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
          50: "#F8F5F9",
          100: "#F0EAF3",
          200: "#E1D5E7",
          300: "#D2C0DB",
          400: "#B396C3",
          500: "#946CAB",
          600: "#7C4988",  // Main purple - NEW BRAND COLOR
          700: "#653A6E",
          800: "#4E2C54",
          900: "#371E3A",
        },
        gold: {
          50: "#FAF9F7",
          100: "#F5F3EF",
          200: "#EBE7DF",
          300: "#E1DBCF",
          400: "#CDC3AF",
          500: "#B9AB8F",
          600: "#B79E6A",  // Accent gold - NEW BRAND COLOR
          700: "#8F7D52",
          800: "#6A5D3E",
          900: "#453D2A",
        },
        background: "#F7F5F5",  // Off-white - NEW BRAND COLOR
        cream: "#FEFEFE",
        "off-white": "#F7F5F5",  // NEW: Off-white background
        "text-primary": "#1F2937",
        "text-secondary": "#4B5563",
        "text-light": "#9CA3AF",
        "border-light": "#F3F4F6",
        "accent-primary": "#7C4988",  // NEW: Primary accent
        "accent-gold": "#B79E6A",  // NEW: Gold accent
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
