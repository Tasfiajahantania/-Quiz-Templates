/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // adding xs to the rest
      xs: "350px",
      // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}