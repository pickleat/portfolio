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
        },
      strokeWidth: {
        '3': '3'
      }
      }
    },
  variants: {},
  plugins: [],
}