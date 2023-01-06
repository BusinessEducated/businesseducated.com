const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')
const fullConfig = resolveConfig(tailwindConfig)

// ========================================================================== //
// Environment variables
// ========================================================================== //
require('dotenv').config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`,
})

// console.log('test ', `${__dirname}/../.env.${process.env.NODE_ENV}`, process.env.YOUTUBE_API_KEY)

// ========================================================================== //
// Strapi configuration
// ========================================================================== //
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    'blog-post',
    'pricing-page',
    'landing-page',
    'booking-page',
    'project-post',
  ],
  singleTypes: [],
  queryLimit: 1000,
}

module.exports = {
  siteMetadata: {
    title: `Busdiness educated`,
    description: `BE successful`,
    author: `aiden faulconer`,
  },
  plugins: [
    // `gatsby-plugin-eslint`,
    // ========================================================================== //
    //     SEO
    // ========================================================================== //
    // `gatsby-plugin-sitemap`,
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
    //     Image compression
    // ========================================================================== //
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        defaults: {
          formats: ['webp', 'auto'],
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    // ========================================================================== //
    //       Consume markdown from netlify
    // ========================================================================== //
    // makes markdown consumable in graphql through gatsbys api
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       // go before gatsby-remark-images
    //       'gatsby-remark-relative-images-v2',
    //       // use code markup in blog posts
    //       {
    //         resolve: 'gatsby-remark-prismjs',
    //         options: {
    //           classPrefix: 'language-',
    //           inlineCodeMarker: null,
    //           aliases: {},
    //           showLineNumbers: false,
    //           noInlineHighlight: false,
    //         },
    //       },
    //       // use emojis in blog posts
    //       // 512 //384 //256 //192 //48 /144
    //       'gatsby-remark-emojis',
    //       // flexible images with embedded image content in blogs
    //       // use images in blog posts **png and jpg only**
    //       // reference: https://www.gatsbyjs.com/plugins/@redocly/gatsby-remark-images/?=remark
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           // backgroundColor:
    //           // quality
    //           // withWebP
    //           // tracedSvgs
    //           withWebp: true,
    //           showCaptions: true,
    //           quality: 50,
    //           maxWidth: 590,
    //           // wrapperStyle: (fluidResult) => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
    //         },
    //       },

    //       // point remark data to public folder
    //       {
    //         resolve: 'gatsby-remark-copy-linked-files',
    //         options: {
    //           destinationDir: `${__dirname}/public`,
    //           // ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
    //         },
    //       },
    //       // proportion and make iframe content responsive in blogs
    //       {
    //         resolve: 'gatsby-remark-responsive-iframe',
    //       },
    //       // make blog content more customizable **not compatible with gatsby-transformer-remark@^4.0.0
    //       // reference: https://www.gatsbyjs.com/plugins/gatsby-remark-custom-blocks/?=remark
    //       // {
    //       //   resolve: 'gatsby-remark-custom-blocks',
    //       //   options: {
    //       //     blocks: {
    //       //       danger: {
    //       //         classes: 'danger',
    //       //       },
    //       //       info: {
    //       //         classes: 'info',
    //       //         title: 'optional',
    //       //       },
    //       //     },
    //       //   },
    //       // },
    //     ],
    //   },
    // },
    // ========================================================================== //
    //     env variables
    // ========================================================================== //
    {
      resolve: 'gatsby-plugin-env-variables',
      options: {
        allowList: [
          `DOMAIN_NAME`,
          `SERVER_PORT`,
          `API_ENDPOINT`,
          `STRIPE_PUBLISHABLE_KEY`,
          `YOUTUBE_CHANNEL_ID,`,
        ],
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
    //     GDPR compliance
    // ========================================================================== //
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: true, // default
        },
        googleTagManager: {
          trackingId: '', //'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
          cookieName: '', //'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: '', //'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', //'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: '', //'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: '', //'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: '', //'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: '', //'YOUR_HOTJAR_ID',
          hjsv: '', //'YOUR_HOTJAR_SNIPPET_VERSION',
          cookieName: '', //'gatsby-gdpr-hotjar', // default
        },
        linkedin: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: '', //'gatsby-gdpr-linked-in', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
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
