import React, { useCallback, useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow, FeatureTwoChoice } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import READ_MORE from '../../static/assets/read-more.png'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ReceiptPercentIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import { ContactForm } from '../components/forms/contact'
import { TightGrid } from '../components/grid'
import { ContentThreeRow } from '../components/content'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import { graphql, useStaticQuery } from 'gatsby'
import PageBanner from '../layout/page-banner'
import { reShapeData } from '../components/util/data'

function IndexPage({ data }) {
  //     const { site } = useStaticQuery(graphql`
  //     query DefaultBlogsQuery {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `);
  useEffect(() => {
    console.info('test ', data)
    setBlogs(reShapeData(data.posts.edges))
  }, [, data])

  const [blogs, setBlogs] = useState([])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const formatResults = useCallback(() => {}, [searchResults])

  useEffect(() => {}, [, search])

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <PageBanner
        headline={{
          pageTitle: 'Blog',
          title: 'Read till you succeed',
          description: `The world is changing fast, we want to get you in business where you can find true financial freedom in life, nothing in this world is free, we teach you to provide the value you hold within`,
          ctas: [{ title: 'Browse Courses', href: '#courses' }],
          imageSrc: READ_MORE,
          imageAlt: 'abstract reading man',
        }}
      />

      {/* Sidebar Search */}
      {/* <div className="mt-5 px-3">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden="true"
          >
            <MagnifyingGlassIcon
              className="mr-3 h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            onInput={(e) => setSearch(e.target)}
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 pl-9 focus:border-red-500 focus:ring-red-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div> */}

      <section id="#courses">
        <FeatureRow
          features={blogs}
          headline={{ title: 'Blog', description: 'Read our content, succeed' }}
        />
      </section>

      <section className="">
        <FeatureTwoChoice
          features={[]}
          headline={{ title: '', description: '' }}
        />
      </section>

      <section className="">
        <SubscribeNewsletter />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allStrapiBlogPost(sort: { updatedAt: ASC }, limit: 20) {
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

export default IndexPage
