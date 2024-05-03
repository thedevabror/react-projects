/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#000000",
        third: "#cdcdcd",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
    },
  },
});
