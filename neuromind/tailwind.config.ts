/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A0A0A0", // Silver
        secondary: "#00CED1", // Turquoise
        background: "#000000", // Black
        text: "#CCCCCC", // Light Gray
        accent: "#FF4500", // Orange-Red
      },
    },
  },
  plugins: [],
};