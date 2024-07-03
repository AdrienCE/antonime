/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "6rem",
          "2xl": "8rem"
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px'
        },
      },
      textShadow: {
        'custom': '0 2px 14px rgba(0, 0, 0, 0.5)',
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
        hexagon: 'polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)',
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
