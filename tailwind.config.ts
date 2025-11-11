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
        "border-light": "#E5E5E5",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        "wide": "0.02em",
        "wider": "0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
