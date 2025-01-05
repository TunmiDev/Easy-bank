/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#31d35c",
        secondary: "#2bb7da",
      },
      fontFamily: {
        sans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
