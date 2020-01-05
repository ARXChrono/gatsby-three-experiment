/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LetsEat`,
        short_name: `LetsEat`,
        start_url: `/`,
        background_color: `#ff4757`,
        theme_color: `#ff4757`,
        display: `standalone`,
      },
    },
  ],
}
