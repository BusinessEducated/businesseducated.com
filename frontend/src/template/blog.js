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
      href: '#',
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
      href: '#',
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
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: '',
      href: '#',
      icon: (props) => {},
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
        title={seo?.metaTitle || ''}
        keywords={seo?.keywords || []}
        description={seo?.metaDescription || 'loreum ipsum'}
      />
      <div className="flex space-x-6 md:order-2 mt-32 w-full px-4 sm:px-6 lg:px-8 justify-end">
        {/* <ContentAudioPlayer content={parsedContent} /> */}
        {/* {post.tags.map((tag) => ( */}
        <LargeBadge>{post.tags}</LargeBadge>
        {/* ))} */}
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

      <article className="grid grid-cols-10 sm:divide-x xs:divide-none divide-gray-500 mt-12">
        <section className="md:col-span-8 col-span-12 px-4 sm:px-6 lg:px-8 border-t border-gray-500">
          {parsedContent.map((htmlBlock) => (
            <div
              className="relative mb-12"
              dangerouslySetInnerHTML={{ __html: htmlBlock }}
            />
          ))}
        </section>

        <section className="md:col-span-4 col-span-12 px-4 sm:px-6 lg:px-8 border-t border-gray-500">
          <h4 className="font-bold tracking-tight text-gray-700 text-left">
            More from business educated
          </h4>
          <FeatureRowCol features={blogPosts} />
        </section>

        <section className="col-span-12  border-none">
          <article className="border-t border-gray-500">
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
