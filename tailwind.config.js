const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // https://mybrandnewlogo.com/es/generador-de-paleta-de-colores
  ],
  theme: {
    colors: {
      'blue-dark': '#124050',
      'blue-dark-1' : '#146e87',
      'blue-light-1' : '#1da9ca',
      'blue-light' : '#20dad8',
      'white' : '#ffffff',
      'transparent': 'transparent',
      'gris': '#444444'
    },
    extend: {
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      addComponents({
        '.card': {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })
  ],
}

