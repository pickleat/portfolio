const { colors, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/components/*.js',
    './src/pages/*.js',
    './src/templates/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#223043',
        'blue': {
          ...colors.blue,
          600: '#3182ce',
          800: '#2c5282'
        }
        },
      strokeWidth: {
        '3': '3'
      }
      }
    },
  variants: {},
  plugins: [],
}