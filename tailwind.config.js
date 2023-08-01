/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit' : ['Outfit', 'sans-serif'],
      },
      colors: {
        cyan : {
          soft: '#00FFF8',
        },
        blue : {
          soft: '#8BACD9',
          primary : '#0D192C',
          line : '#2E405A',
          card : '#15263F'
        }
      }
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.heading-1' : {
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: 'normal',
        }
      })
    })
  ],
}

