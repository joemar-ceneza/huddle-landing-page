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
      backgroundImage: {
        "section-top-desktop": ["url('../images/bg-section-top-desktop-1.svg')"],
      },
    },
  },
  plugins: [],
}