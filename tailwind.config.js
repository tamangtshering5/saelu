/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'saelu-blue': '#123f8f',
        'saelu-thin-blue': '#0b78d5',
        'pacific-blue': '#169eb7',
        'sweet-corn': '#ffe785',
        'mountain-mist': '#909195',
        'ship-grey': '#3d3d47',
      },
      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'Helvetica', 'Nimbus Sans L', 'sans-serif'],
        'open-sans':['"Open Sans"', 'Arial', 'Helvetica', 'Nimbus Sans L', 'sans-serif'],
        'nunito':['Nunito', 'Arial', 'Helvetica', 'Nimbus Sans L', 'sans-serif'],
      }
    }
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
}

