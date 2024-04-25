/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: [
      'class'
  ],
  content: [
      "./dist/index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'background-color, color, fill',
        'opacity': 'opacity',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-blue': 'rgb(0, 172, 223)',
        'custom-dark-blue': 'rgb(0, 20, 39)',
        'custom-blue-button': 'rgb(25, 43, 60)'
      }
    },
  },
  plugins: [],
}

