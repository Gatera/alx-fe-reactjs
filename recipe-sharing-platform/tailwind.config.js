/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path matches your file structure
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        red: colors.rose
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}