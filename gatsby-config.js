/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "a-mkemp.com",
        protocol: "https",
        hostname: "www.a-mkemp.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `audiolindygirl`,
      },
    },
  ],
}
