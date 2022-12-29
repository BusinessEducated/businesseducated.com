import React, { useCallback, useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { FeatureTwoChoice } from '../components/feature'
import { Button } from '../components/button'
import VIDEOS from '../../static/assets/videos.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ContentThreeRow } from '../components/content'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import { useStaticQuery } from 'gatsby'
import PageBanner from '../layout/page-banner'

function IndexPage() {
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
          title: 'Watch and grow',
          description: `
            The world is changing fast, we want to get you in business where
            you can find true financial freedom in life, nothing in this world
            is free, we teach you to provide the value you hold within
          `,
          ctas: [{ title: 'Browse Videos', href: '#videos' }],
          imageSrc: VIDEOS,
          imageAlt: 'a man spreading his voice across the internet abstract',
        }}
      /> 
 

      {/* Sidebar Search */}
      <div className="mt-5 px-3">
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
      </div>

      <section id="#videos">
        <ContentThreeRow
          categories={[]}
          headline={{ title: '', description: '' }}
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

export default IndexPage
