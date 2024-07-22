/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "6rem",
          "2xl": "8rem"
        },
        screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xl': '100%',
          '2xl': '1440px'
        }
      },
      height: {
        '80vh': '80vh',
      },
      colors: {
        'custom-white': '#F4F4F4',
        'custom-red': '#7E0000',
        'custom-blue2': '#3e68b6',
        'custom-blue-dark' : '#1C4F90',
        'custom-blue-light' : '#E7F1F7',
        'custom-pink': '#DB97E6',
        'custom-salmon': '#eeb1a4',
        'custom-green': '#aad896',
      },
      clipPath: {
        hexagon: 'polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)',
      },
      fontFamily: {
        'headline': ['Hobby Headline', 'sans-serif'],
        'shantell': ['ShantellSans-Variable', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-hexagon': {
          'clip-path': 'polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)',
        },
      });
    },
  ],
}
