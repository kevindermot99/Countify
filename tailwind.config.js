/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "main-color": "#648DE5",
        "body": "#f4f4f9",
      },
    },
  },
  plugins: [],
};
