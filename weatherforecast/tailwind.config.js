/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#737373',
        orange: '#db1c00'
      },
      spacing: {
        0.5: '0.12rem'
      },
      transitionDuration: {
        DEFAULT: '400ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      }
    },
  },
  plugins: [],
}
