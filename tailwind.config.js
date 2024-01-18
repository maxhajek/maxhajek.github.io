/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "var(--tw-shadow-color) 0 2px",
      },
      fontFamily: {
        lexend: ["Lexend\\ Mega", "Inter", "sans-serif"],
        rubik: ["Rubik", "Inter", "sans-serif"],
      },
      boxShadow: {
        "neo-md": "3px 3px 0 0",
        "neo-lg": "6px 6px 0 0",
      },
      transitionProperty: {
        "shadow-transform": "box-shadow, transform",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(.645,.045,.355,1)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
