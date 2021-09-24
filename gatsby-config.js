const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.resolve(__dirname, 'src/pages'),
        ignore: ['**/sections/*', '**/options/*', '**/elements/*'],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Raleway',
              variants: ['300', '400', '500', '700'],
            },
            {
              family: 'Roboto',
              variants: ['300', '400', '500', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        srcPath: path.resolve(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, `src/assets/images`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /\.svg$/,
      },
    },
  ],
};
