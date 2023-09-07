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
      'purple-dark': '#4e356e',
      'purple-dark-1' : '#8c4287',
      'rose-light-1' : '#de539e',
      'rose-light' : '#ff70ac',
      'white' : '#ffffff',
      'transparent': 'transparent',
      'gris': '#444444',
      'gris-oscuro': '#1e1c06'
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

