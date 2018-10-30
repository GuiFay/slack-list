module.exports = {
  siteMetadata: {
    title: 'Slack List',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'slack-list',
        short_name: 'slack-list',
        start_url: '/',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
