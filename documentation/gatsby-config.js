module.exports = {
  pathPrefix: `/elements`,
  siteMetadata: {
    title: `Allthings Elements`,
    siteUrl: `https://allthings.github.io/elements/`,
    description: `Elements is a set of carefully crafted, high quality React UI components, that Allthings uses to build their mobile app.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
