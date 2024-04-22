/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8991D",
        secondary: "#000000",
        third: "#cdcdcd",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
