/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
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
          'primary-color': '#EA516F',
          'secondary-color': '#022D45',
        },
      },
    },
  plugins: [],
}

