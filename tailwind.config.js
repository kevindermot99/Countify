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
        "body-color-light": "#ffffff",
        "body-color-dark": "#121212",
        "border-lines-light": "#e1e1e1",
        "border-lines-dark": "#1D1D1D",
        "dark-text": "#2F333C",
        "light-text": "#7d7d7d",
      },
    },
  },
  plugins: [],
};
