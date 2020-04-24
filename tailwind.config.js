const { colors, fontFamily } = require('tailwindcss/defaultTheme')
console.log('fontFamily', fontFamily)
module.exports = {
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