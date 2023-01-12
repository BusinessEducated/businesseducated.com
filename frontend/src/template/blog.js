import React, { useEffect, useState } from 'react'
import Layout from '../layout/layout'
import SEO from '../layout/seo'
import _ from 'lodash'
import { FeatureRow, FeatureRowCol } from '../components/feature'
import { graphql, useStaticQuery } from 'gatsby'
import { reShapeData } from '../components/util/data'
import editorJsHTML from 'editorjs-html'
import { LargeBadge, SmallBadge } from '../components/badge'
import ContentAudioPlayer from '../components/audio-player'

export const breadcrumbs = () => (
  <nav
    className="flex border-b border-gray-200 bg-white"
    aria-label="Breadcrumb"
  >
    <ol
      role="list"
      className="mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8"
    >
      <li className="flex">
        <div className="flex items-center">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </a>
        </div>
      </li>
      {pages.map((page) => (
        <li key={page.name} className="flex">
          <div className="flex items-center">
            <svg
              className="h-full w-6 flex-shrink-0 text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <a
              href={page.href}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current={page.current ? 'page' : undefined}
            >
              {page.name}
            </a>
          </div>
        </li>
      ))}
    </ol>
  </nav>
)

// Table of contents
const renderTableOfContentItems = (items /** array */) => (
  <ol styles={{}}>
    {items.map(({ url, title, items }) => (
      <li key={url}>
        <a href={url}>{title}</a>
        {items && items.length && renderTableOfContentItems(items)}
      </li>
    ))}
  </ol>
)

function TableOfContent({ toc, className }) {
  return (
    <Box sx={{}}>
      <h2>Table of contents</h2>
      {renderTableOfContentItems(toc.items)}
    </Box>
  )
}

export const BlogTemplate = ({
  pageContext: { post, seo, nextPostId, previousPostId, otherPosts },
  data: { nextPost, previousPost },
  location,
  ...props
}) => {
  const socials = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/businesseducated',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/businesseducated/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/company/businesseducated',
      icon: (props) => (
        <svg
          fill="currentColor"
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      ),
    },
  ]
  console.log(post)
  const parsedContent = editorJsHTML().parse(
    JSON.parse(post.content.data.content),
  )

  const [blogPosts, setBlogPosts] = useState([])
  const [nextPrevPosts, setNextPrevPosts] = useState([])

  useEffect(() => {
    setNextPrevPosts([
      ...reShapeData(nextPost?.edges || [{}]),
      ...reShapeData(previousPost?.edges || [{}]),
    ])
    setBlogPosts(reShapeData(otherPosts))
  }, [nextPost, previousPost, otherPosts])

  return (
    <Layout>
      <SEO
        title={seo[0]?.metaTitle || ''}
        keywords={seo[0]?.keywords || []}
        description={seo[0]?.metaDescription || 'loreum ipsum'}
      />
      <br className="mt-14" />
      <article className="grid grid-cols-10 sm:divide-x xs:divide-none divide-gray-300">
        <section className="md:col-span-8 col-span-12 px-4 sm:px-6 lg:px-8 border-t border-gray-300">
          <div className="flex flex-start gap-6 flex-col flex-nowrap my-4 border-b border-gray-300 py-6">
            {/* post thumbnail */}
            <img
              src={post.thumbnail.localFile.url}
              className="w-auto object-contain aspect-1 md:max-h-[600px] max-h-[500px] md:order-0 order-1"
            />
            {/* post meta */}
            <div className="md:order-1 order-0 relative">
              <h1 className="text-xl">{seo[0]?.metaTitle}</h1>
              <p>{seo[0]?.metaDescription}</p>
            </div>
            {/* tags */}
            <div>
              {/* {post.tags.map((tag) => ( */}
              <LargeBadge>{post.tags}</LargeBadge>
              {/* ))} */}
            </div>
          </div>
          {parsedContent.map((htmlBlock) => (
            <div
              className="relative mb-12"
              dangerouslySetInnerHTML={{ __html: htmlBlock }}
            />
          ))}
        </section>

        <section className="md:col-span-4 col-span-12  border-t border-gray-300 items-center">
          {/* socials */}
          <div className="flex space-x-6 md:order-2 mt-20 w-full justify-start border-b border-gray-300 p-6">
            {/* <ContentAudioPlayer content={parsedContent} /> */}
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="px-4 sm:px-6 lg:px-8">
            {/* more posts */}
            <h4 className="font-bold tracking-tight text-gray-700 text-left my-6">
              More from business educated
            </h4>
            <FeatureRowCol features={blogPosts} />
          </div>
        </section>

        <section className="col-span-12  border-none">
          <article className="border-t border-gray-300">
            <FeatureRow
              features={nextPrevPosts}
              headline={{
                title: 'Read More',

                // description: ''
              }}
            />
          </article>
        </section>
      </article>
    </Layout>
  )
}

export const templatePageQuery = graphql`
  query blogTemplateQuery(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $nextPostId: String
    $previousPostId: String
  ) {
    nextPost: allStrapiBlogPost(filter: { id: { eq: $nextPostId } }) {
      edges {
        node {
          id
          post {
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
      }
    }
    previousPost: allStrapiBlogPost(filter: { id: { eq: $previousPostId } }) {
      edges {
        node {
          id
          post {
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
      }
    }
  }
`

export default BlogTemplate
