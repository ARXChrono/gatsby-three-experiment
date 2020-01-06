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
        name: `Get Ramen`,
        short_name: `Get Ramen`,
        description: `Get some fucking ramen!`,
        start_url: `/`,
        background_color: `#ff4757`,
        theme_color: `#ff4757`,
        display: `standalone`,
        icons: [
          {
            src: `android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
