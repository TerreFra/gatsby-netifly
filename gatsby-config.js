/**
 * Configure your Gatsby site with this file. Kattos rules.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootstrap",
    description:"This is the description of our website",
    keywords: "gatsby, gatsbyjs project, gatsby boostrap",
    image: "/static/gatsbyImage.jpg",
    url: "https://www.gatsby.org/"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    { resolve: `gatsby-source-wordpress`, options: {
      baseUrl: `acantranslations.com`,
      protocol: `https`,
      hostingWPCOM: false
    }},
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Bootstrap`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}