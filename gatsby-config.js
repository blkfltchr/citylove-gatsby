var dotenv = require("dotenv");
dotenv.config();

const { spaceId, accessToken, snipcart, googleAnalytics } = process.env;

module.exports = {
  siteMetadata: {
    title: `City Love Supply Co.`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@blkfltchr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `We're a Toronto based apparel company, celebrating and elevating the work of the creative class. Our mission is to support the energy of creativity in Toronto, by highlighting and championing artists and craftspeople of all kinds.`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/citylove-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: snipcart,
        autopop: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalytics,
        head: true,
      },
    },
  ],
}
