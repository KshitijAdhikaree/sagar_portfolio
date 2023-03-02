/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "616161",
        secondary: "#d85c27",
        tertiary: "#2f5c8f",
        khaki: "#ffffff",
        fourth: "#14356d",
        fifth:"#005995",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },
    },
  },
  plugins: [],
};


