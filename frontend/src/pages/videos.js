import React, { useCallback, useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { FeatureRow, FeatureTwoChoice } from '../components/feature'
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

  const [videos, setVideos] = useState([
    {
      title: '',
      description: '',
      categories: [],
      imageSrc: '',
      imageAlt: '',
      videoSrc: '',
      href: '',
      embed: <></>,
    },
  ])

  useEffect(async () => {
    // process.env.YOUTUBE_CHANNEL_ID
    const d = await getVideosFromChannel(
      // 'UCNlfGuzOAKM1sycPuM_QTHg',
      'UC82_za_dL6fHUGa30wnW3uQ',
      10,
      // 'cLa-YH5H0YA&list=PLi8MopF2A5_V9DRUz8TstIKXCraJ5WzJ_',
    )
    const data = extractVideos(d.body)
    console.info('test ', data)
    setVideos(data)
  }, [])

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

      <section id="#videos">
        <FeatureRow
          features={videos}
          headline={{
            title: 'Shorts',
            description: 'Short form goodies',
          }}
        />
        <FeatureRow
          features={videos}
          headline={{
            title: 'Tutorials',
            description: 'Teaching what you want for your business',
          }}
        />
        <FeatureRow
          features={videos}
          headline={{
            title: 'News',
            description: 'Important business news',
          }}
        />
      </section>

      <section className="">
        <FeatureTwoChoice
          features={[
            {
              title: 'Feedback',
              description:
                'We do this for you, we do our best to provide what you want, and we will do even better with you involved, fill out the form below and know we will get your feedback and it will make a difference',
              imageSrc: '',
              imageAlt: '',
            },
            {
              title: 'Becoming Self Reliant',
              description:
                'We dont want you to rely on others, we want you to become fully capable so you can be the example others want to follow with in business, we teach you only what you actually need to become self sufficient in business from accounting, software, marketting, and sales, todays technology enables you to do great things that once where too much work for one person to handle alone',
              imageSrc: '',
              imageAlt: '',
            },
          ]}
          headline={{
            title: 'All About building your success',
            description:
              'We genuinely want to see everyone succeed the way we know works, if we can help cover topics you dont see covered, or teach you skills you want to learn, we have you covered, send us a message, like our videos, lets help build the business community together',
          }}
        />
      </section>

      <section className="">
        <SubscribeNewsletter />
      </section>
    </Layout>
  )
}

export default IndexPage
