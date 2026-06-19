/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens:{
      "xs": "475px",
      ...defaultTheme.screens,        
    },
    extend: {
      fontFamily: {
        "openSans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        night: {
          DEFAULT: "#0b1020",
          soft: "#0e1426",
          panel: "#141b33",
        },
        brand: {
          DEFAULT: "#7c5cff",
          indigo: "#6366f1",
          fuchsia: "#d946ef",
          cyan: "#22d3ee",
        },
        muted: "#94a3b8",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)",
        "brand-text": "linear-gradient(135deg, #818cf8 0%, #e879f9 50%, #22d3ee 100%)",
      },
      boxShadow: {
        glow: "0 24px 70px -24px rgba(124, 92, 255, 0.65)",
        glass: "0 12px 44px -18px rgba(0, 0, 0, 0.55)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
}