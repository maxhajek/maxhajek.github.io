/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
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
  plugins: [],
};
