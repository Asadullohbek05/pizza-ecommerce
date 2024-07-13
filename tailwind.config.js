/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Open Sans', 'serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

