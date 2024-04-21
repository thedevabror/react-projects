/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8991D",
        secondary: "#000000",
        third: "#f5f5f7",
      },
      fontFamily: {
        custom: ["Creattion", "cursive"],
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
