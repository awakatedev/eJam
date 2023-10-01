/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      "1/5": "1fr 5fr",
      screens: {
        sp: { min: "410px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        baseFont: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        Base: "#FFFFFF",
        Title: "#000000",
        Text: "#4D5254",
        SoftGrey: "#FAFAFA",
        DarkGrey: "#252F3D",
        Green: "#59AE43",
        Blue: "#2C7EF8",
        SoftBlue: "#EDF3FD",
      },
    },
  },
  plugins: [],
};