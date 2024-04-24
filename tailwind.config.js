/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./dist/index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#00acdf',
      }
    },
  },
  plugins: [],
}

