module.exports = {
  plugins: [
    require("tailwindcss")('./tailwind.config.js'),
    require('autoprefixer'),
    // require('@fullhuman/postcss-purgecss')({
      // content: [
      //   './src/components/*',
      //   './src/templates/*',
      //   './src/pages/*',
      //   './src/pages/posts/*',
      // ],
    //   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    // })
  ],
}