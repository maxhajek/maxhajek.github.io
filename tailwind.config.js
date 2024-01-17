/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
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
