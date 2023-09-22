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
      'orange': '#ff7018',
      'yellow': '#ffce1e',
      'white' : '#ffffff',
      'transparent': 'transparent',
      'gris': '#464648',
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

