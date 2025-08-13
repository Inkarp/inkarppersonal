/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        MaxOT: ['MaxOT'],
      },
      screens: {
        ink: '710px', // ✅ Your custom breakpoint
      },
    },
  },
  plugins: [],
  
}
