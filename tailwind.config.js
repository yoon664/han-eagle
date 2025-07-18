/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'alumni': ['Alumni Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}