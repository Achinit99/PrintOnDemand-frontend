/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shirt: '#6fb2bb',
        'shirt-light': '#8ecdd9',
        'text-custom': '#c75353',
        'text-custom-dark': '#a63c3c',
      },
    },
  },
  plugins: [],
}