import React, { useCallback, useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow, FeatureTwoChoice } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import READ_MORE from '../../static/assets/read-more.png'
import { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, MagnifyingGlassIcon, PlayIcon, ReceiptPercentIcon, UsersIcon } from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import { ContactForm } from "../components/forms/contact"
import { TightGrid } from '../components/grid'
import { ContentThreeRow } from '../components/content'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import { useStaticQuery } from 'gatsby'

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

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const formatResults = useCallback(() => { }, [searchResults])

    useEffect(() => {
    }, [, search])

    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />



      <section className="text-center grid-cols-12 grid relative h-[35rem] bg-black w-full mt-[11vh]">

        <div className="text-left col-span-6 overflow-hidden h-full relative m-auto flex">
          <div className="flex flex-col gap-6 m-auto justify-start align-items-start">
            <h1 className="inline-block text-white mb-1 text-4xl font-bold max-w-xs">
              Read till you succeed
            </h1>

            <p className="leading-loose text-white max-w-md">
              The world is changing fast, we want to get you in business where you can find true financial freedom in life, nothing in this world is free, we teach you to provide the value you hold within
            </p>

            <div className="flex gap-3">
              <Button>
                Book Now
              </Button>

              <p className='my-auto text-white'>
                Play Intro Video
              </p>
            </div>
          </div>
        </div>

        <img className="max-w-[550px] h-[550px] hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover col-span-6" src={READ_MORE} />
      </section>

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
                        <MagnifyingGlassIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
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

            <section>
                <ContentThreeRow categories={[]} headline={{ title: '', description: '' }} />
            </section>

            <section className="">
                <FeatureTwoChoice features={[]} headline={{ title: '', description: '' }} />
            </section>

            <section className="">
                <SubscribeNewsletter />
            </section>

        </Layout >
    )
}

export default IndexPage
