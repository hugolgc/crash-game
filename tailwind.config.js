/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        load: 'bar 10s linear',
      },
      keyframes: {
        bar: {
          "0%": { width: "100%" },
          "100%": { width: "0%" },
        }
      }
    },
  },
  plugins: [],
}
