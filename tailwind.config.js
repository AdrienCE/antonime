/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
    theme: {
      extend: {
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

