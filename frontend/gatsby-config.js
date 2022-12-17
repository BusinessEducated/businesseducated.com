const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

// ========================================================================== //
// Environment variables
// ========================================================================== //
require('dotenv').config({ path: `${__dirname}/../.env.${process.env.NODE_ENV}`});

console.log('test ',`${__dirname}/../.env.${process.env.NODE_ENV}`, process.env.STRAPI_API_URL)

// ========================================================================== //
// Strapi configuration
// ========================================================================== //
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['blog-post', 'pricing', 'project-post'],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-eslint`,

    // ========================================================================== //
    //     SEO
    // ========================================================================== //
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green['500'],
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    }, 
    // ========================================================================== //
    //     Offline capabilities
    // ========================================================================== //
    'gatsby-plugin-offline',
    'gatsby-plugin-remove-trailing-slashes', // remove pesky /'s at the end of routes ie: localhost/x/

    // ========================================================================== //
    //     analytics
    // ========================================================================== //
    {
      // The property ID; the tracking code won't be generated without it. replace with yours
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    // ========================================================================== //
    //     Preload fonts for performance
    // ========================================================================== //
    {
      resolve: 'gatsby-plugin-preload-fonts',
      options: {
        crossOrigin: 'use-credentials',
      },
    },
    // ========================================================================== //
    // strapi CMS
    // ========================================================================== //
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
    // ========================================================================== //
    //     Optimization
    // ========================================================================== //
    process.env.NODE_ENV === 'development' && {
      resolve: 'gatsby-plugin-perf-budgets',
      options: {},
    },
    // process.env.NODE_ENV === 'development' && {
    //   resolve: 'gatsby-plugin-webpack-size',
    //   options: {
    //     development: true,
    //   },
    // },
    process.env.NODE_ENV === 'development' && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'server',
        analyzerPort: 8001,
        devMode: true,
        // defaultSizes: 'gzip',
        openAnalyzer: true,
      },
    },
    // ========================================================================== //
    //     Compression
    // ========================================================================== //
    process.env.NODE_ENV === 'production' && {
      // prefer this to gzip
      resolve: 'gatsby-plugin-brotli', // was zopfli
      options: {
        // verbose: true,
        extensions: [
          'css',
          'html',
          'js',
          'svg',
          'gltf',
          'glb',
          'png',
          'jpg',
          'jpeg',
          'html',
          'jsx',
        ],
        // level: 4,//default is highest level, dont change it
        // compression: {
        //   numiterations: 25,
        // },
      },
    },
    // ========================================================================== //
    //     Css / Tailwind
    // ========================================================================== //
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
  ].filter(Boolean),
}
