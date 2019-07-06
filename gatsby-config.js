
// For future ref: https://www.gatsbyjs.org/docs/gatsby-config/

module.exports = {
  pathPrefix: "/pickleat.github.io",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andy Pickle's personal portfolio site`,
        short_name: `Andy Pickle's Personal Site`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#58b8dd`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
