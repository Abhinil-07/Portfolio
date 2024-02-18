/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // default mobile breakpoint
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "375px": "375px", // custom breakpoint for 375px
    },
  },
  plugins: [],
};
