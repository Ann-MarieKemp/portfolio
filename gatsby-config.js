/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const YoutubeKey = require("./secrets.js")
const siteMetadata = {
  title: "Ann-Marie Kemp Portfolio Site",
  description: "This is Ann-Marie's portfolio",
}
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: path.join(__dirname, `src`, `posts`),
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
    {
      resolve: "gatsby-source-imgur-gallery-albums",
      options: {
        clientId: "17779bb10391106",
        albumHashes: [],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UCHkIwY62iG1y23oWiPL9PQA"],
        apiKey: YoutubeKey,
        maxVideos: 50, // Defaults to 50
      },
    },
  ],
}
