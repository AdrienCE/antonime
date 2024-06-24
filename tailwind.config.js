/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1400px',
        },
      },
      height: {
        '80vh': '80vh',
      },
      colors: {
        'primary-color': '#5981c5',
        'custom-blue': '#769bd5',
        'custom-blue2': '#3e68b6',
        'custom-blue3': '#a8bded',
        'custom-pink': '#eeb1a4',
        'custom-green': '#aad896',
      },
      clipPath: {
        hexagon: 'polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 10  0% 75%, 100% 25%)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-hexagon': {
          'clip-path': 'polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)',
        },
      });
    },
  ],
}
