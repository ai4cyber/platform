module.exports = {
  siteMetadata: {
    title: 'AI4Cyber Platform - Hospitals',
    description: 'AI4Cyber Platform - Hospitals',
    keywords: 'iu,kelley,mcm,carbon',
  },
  plugins: ['gatsby-theme-carbon',
  'gatsby-transformer-json',

{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'data',
    path: './src/data'
  },
  resolve: 'gatsby-theme-carbon',
  options: {
    iconPath: './src/images/custom-icon-512.png',
    isSearchEnabled: true,
    repository: {
      baseUrl:
        'https://www.github.com/ai4cyber/platform',
      subDirectory: '/',
    },
  },
}
],
pathPrefix: "/platform",
};
