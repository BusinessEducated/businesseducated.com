/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-throw-literal */
/* eslint-disable no-plusplus */
const path = require('path')
const chunk = require('lodash/chunk')
const _ = require('lodash')

const { graphql } = require('gatsby')

const cheerio = require('cheerio')
const { fsync } = require('fs')
const { node } = require('prop-types')
const { date } = require('yup')
// const projectTemplate = require('./src/components/template-components/project-template').default;

// const { dd } = require('dumper.js');
//  dd() will prettily dump to the terminal and kill the process

/**
 * This function creates all the individual blog pages in this site
 */
// ========================================================================== //
// BLOG POST ARCHIVE
// ========================================================================== //
// async function createBlogPostArchive({ edges, gatsbyUtilities }) {
//   const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
//     {
//       wp {
//         readingSettings {
//           postsPerPage
//         }
//       }
//     }
//   `)

//   const { postsPerPage } = graphqlResult.data.wp.readingSettings
//   const postsChunkedIntoArchivePages = chunk(edges, postsPerPage)
//   const totalPages = postsChunkedIntoArchivePages.length

//   return Promise.all(
//     postsChunkedIntoArchivePages.map(async (_posts, index) => {
//       const pageNumber = index + 1

//       const getPagePath = (page) => {
//         if (page > 0 && page <= totalPages) {
//           // Since our homepage is our blog page
//           // we want the first page to be "/" and any additional pages
//           // to be numbered.
//           // "/blog/2" for example
//           return page === 1 ? '/' : `/blog/${page}`
//         }

//         return null
//       }

//       // createPage is an action passed to createPages
//       // See https:www.gatsbyjs.com/docs/actions#createPage for more info
//       await gatsbyUtilities.actions.createPage({
//         data: await graphql(`query WpPosts {
//           allWpPost(sort: { fields: [date], order: DESC }) {
//             edges {

//             }
//           }
//         }`),
//         path: getPagePath(pageNumber),

//         // use the blog post archive template as the page component
//         // component: path.resolve('./src/template/blog-post-archive.jsx'),
//         component: path.resolve('./src/template/project-template.jsx'),

//         // `context` is available in the template as a prop and
//         // as a variable in GraphQL.
//         context: {
//           // the index of our loop is the offset of which posts we want to display
//           // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
//           // etc
//           offset: index * postsPerPage,

//           // We need to tell the template how many posts to display too
//           //  postsPerPage,

//           nextPagePath: getPagePath(pageNumber + 1),
//           previousPagePath: getPagePath(pageNumber - 1),
//         },
//       })
//     }),
//   )
// }

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https:www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
// create blog pages, and regular pages this function is destructuring the gatsby utils passed in
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // function to Get and create blog posts
  async function buildPageFromQuery(
    limit = 1000,
    template,
    categoryRegex,
    id = null,
  ) {
    //prettier-ignore
    // ${typeof categoryRegex !== 'null' && `filter: {post: {category: {eq: ${categoryRegex} } },`}
    // ${typeof id !== 'null' && `id: {eq: ${id} },`}
    const result = await graphql(` 
        query strapiBlogPostsByCategory {
            posts: allStrapiBlogPost (limit: ${limit}, sort: {updatedAt: ASC} ) {
                edges {
                    node {
                        id
                        post {
                            content {
                                data {
                                    content
                                    contentId: id
                                }
                            }
                            date(formatString: "DD/MM/YYYY")
                            tags
                            category
                            thumbnail {
                              localFile {
                                absolutePath
                                url
                              }
                            }
                        }
                        seo {
                            metaTitle
                            metaDescription 
                        }
                    }
                    next {
                        id
                    }
                    previous {
                        id
                    }
                }
            }
        }
    `)

    // Handle errors
    if (result.errors) {
      result.errors.forEach((e) => reporter.error(e.toString()))
      // reporter.panicOnBuild('Error while running GraphQL query.');
      // return Promise.reject(result.errors);//causes errors in node.js
    }
    // Build all the pages
    if (result !== null) {
      const sliceArray = (posts, i, amount) => {
        // calculate the start and end indices for the slice
        const start = i
        const end = (i + amount) % posts.length || posts.length

        // slice the posts array and return the result
        return [
          ...posts.slice(start, end),
          ...posts.slice(0, (i + amount) % posts.length),
        ]
      }
      const posts = result.data.posts.edges
      posts.forEach((edge, i) => {
        const {
          node: { id, post, seo },
          next,
          previous,
        } = edge
        //prettier-ignore
        reporter.warn( `created page ${`/blog/${post.category}/${_.kebabCase( seo[0].metaTitle, )}`} with id ${id}`, )
        createPage({
          path: `/blog/${post.category}/${_.kebabCase(seo[0].metaTitle)}`,
          context: {
            post: post,
            seo,
            //prettier-ignore
            nextPostId: next?.id,
            //prettier-ignore
            previousPostId: previous?.id,
            otherPosts: sliceArray(posts, i, 6),
          },
          //pluginCreatorId
          //matchPath
          //componentChunkName
          //pluginCreator___NODE
          component: template,
        })
      })
    } else {
      reporter.warn(
        `queried data is null! for a page ${JSON.stringify(result, null, 2)}`,
      )
    }
  }

  // Build pages
  await buildPageFromQuery(1000, path.resolve('src/template/blog.js')) // build project pages
}

// webpack configuration
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    devtool:
      process.env.NODE_ENV === 'development'
        ? 'eval' /** 'eval-source-map' */
        : process.env.NODE_ENV === 'production'
        ? 'source-map'
        : 'hidden-source-map', // for debugging processes, production debug with source-map, source-map for most efficient production buildz
    resolve: {
      extensions: [
        '.mjs',
        '.js',
        '.jsx',
        '.json',
        '.gltf',
        '.png',
        '.jpg',
        '.jpeg',
        '.gif',
        '.svg',
        '.otf',
      ],
    },
    module: {
      rules: [
        { test: /\.(glb|gltf)$/i, use: 'file-loader' }, // or gltf-webpack-loader
        { test: /react-hot-loader/, use: [loaders.js()] },
        // {
        //   test: /\.(pdf|gif|svg|json|png|jpg)$/,
        //   use: 'file-loader?name=[path][name].[ext]',
        //   include: path.resolve(__dirname, 'static/assets'),
        // },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
    plugins: [],
    // externals: [ nodeExternals() ],
    // resolve: {
    //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg'],
    //   symlinks: true,
    // },
  })
}
//   const posts = result.data.allMarkdownRemark.edges;
//   posts.forEach(async ({ node }, i) => {
//     // calculate which posts are previous and next
//     const { start, end } = getStartEnd(i, posts.length - 1);

//     await createPage({
//       path: node.frontmatter.path,
//       component: template,
//       context: {
//         otherBlogs: [posts[start], posts[end]], // all other blogs of this catagory (get previous and current one)
//       }, // additional data can be passed via context
//     });
//   });
// }

// now put this all together here

// ========================================================================== //
//   add later
// ========================================================================== //

// const getStartEnd = (i, len) => {
//   let start;
//   let end;
//   if (i === 0) {
//     start = 1;
//     end = len;
//   } else if (i === len) {
//     start = 0;
//     end = len - 1;
//   } else {
//     start = i - 1;
//     end = i + 1;
//   }
//   return { start, end };
// };

// ========================================================================== //
// TABLE OF CONTENTS
// ========================================================================== //
// #region create a table of contents for every post
function UniqueId() {
  const tempMap = {}
  return (el) => {
    if (tempMap[el]) {
      tempMap[el] += 1
      const result = `${el}-${tempMap[el]}`
      tempMap[result] = 1
      return result
    }
    tempMap[el] = 1
    return el
  }
}

function createId($, title) {
  let id = $(title).attr('id')

  if (!id) {
    id = $(title)
      .text()
      .toLowerCase()
      .replace(/[^a-z_0-9]+/gi, '-')
      .replace(/-+/g, '-')
  }

  return id
}

function extendContentField(options, prevFieldConfig) {
  return {
    resolve(source) {
      const $ = cheerio.load(source.content)
      const titles = $('h2,h3,h4,h5')
      const getUniqueId = UniqueId()
      Array.from(titles).forEach((title) => {
        const id = createId($, title)
        $(title).attr('id', getUniqueId(id))
      })

      return $('body').html()
    },
  }
}

function groupHeadings(index, grouping, headings) {
  if (index < headings.length) {
    const nextHeading = headings[index]

    if (grouping.length) {
      const prevHeading = grouping.slice().pop()

      try {
        if (nextHeading.depth > prevHeading.depth) {
          prevHeading.items = prevHeading.items || []
          return groupHeadings(index, prevHeading.items, headings)
        }
        if (nextHeading.depth === prevHeading.depth) {
          grouping.push({ ...nextHeading })
          return groupHeadings(++index, grouping, headings)
        }
        throw { index, heading: nextHeading }
      } catch (higherHeading) {
        if (higherHeading.heading.depth === prevHeading.depth) {
          grouping.push({ ...higherHeading.heading })
          return groupHeadings(++higherHeading.index, grouping, headings)
        }
        throw higherHeading
      }
    } else {
      grouping.push({ ...nextHeading })
      groupHeadings(++index, grouping, headings)
    }
  }

  return grouping
}

async function createTableOfContents(source, args, context, info) {
  const $ = cheerio.load(source.content)
  const titles = $('h1,h2,h3,h4,h5')
  reporter.log('titles', titles)
  const getUniqueId = UniqueId()

  const headings = Array.from(titles).map((title) => {
    const depth = parseInt($(title).prop('tagName').substr(1), 10)
    const id = createId($, title)
    return { url: `#${getUniqueId(id)}`, title: $(title).text(), depth }
  })

  const reduced = groupHeadings(0, [], headings)
  return { items: reduced }
}

// graphql schema customization
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type allStrapiBlogPost implements Node {
      toc: JSON
      post: JSON
    }
  `

  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    strapiBlogPosts: {
      toc: (source, args, context, info) => {
        return createTableOfContents(source, args, context, info)
      },
    },
  }

  createResolvers(resolvers)
}
// #endregion
