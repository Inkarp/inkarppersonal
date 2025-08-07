/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        MaxOT: ['MaxOT', 'sans-serif'],
      },
      screens: {
        ink: '710px', // ✅ Your custom breakpoint
      },
    },
  },
  plugins: [],
  
}
