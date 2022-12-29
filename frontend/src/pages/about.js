import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { GridList, HorizontalLinkCards } from '../components/grid'
import { Button } from '../components/button'
import ENLIGHTENMENT from '../../static/assets/enlighten.png'
// import dogIllustration from "../images/dog-illustration.svg";
import AIDEN from '../../static/assets/aiden.png'
import HENRY from '../../static/assets/henry.png'
import JAMES from '../../static/assets/james.png'
import PageBanner from '../layout/page-banner'

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <PageBanner
        headline={{
          pageTitle: 'About us',
          title: 'We enlighten the next generation of business',
          description: `The world is changing fast, we want to get you in business where you can find true financial freedom in life, nothing in this world is free, we teach you to provide the value you hold within`,
          ctas: [{ title: 'Book now', href: '/booking' }],
          imageSrc: ENLIGHTENMENT,
          imageAlt: 'abstract reading man',
        }}
      />

      <section className="mx-auto max-w-5xl flex flex-col mb-6 mt-24 items-center md:flex-row w-full">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Thomas Nagel
          </cite>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto w-full text-center">
            <h2 className="font-bold tracking-tight text-gray-900 sm:text-5xl text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-500 whitespace-pre-line text-left">
              Our mission at Business Educated is to empower individuals by
              providing comprehensive business education and support through our
              podcast, YouTube channel, and personalized business consultation
              services. We believe in offering a wide range of courses and
              resources to help individuals start and maintain their own
              successful businesses. Our core values are empowering individuals,
              providing high-quality education and support, and fostering a
              community of like-minded entrepreneurs. We started Business
              Educated to give individuals the knowledge and tools they need to
              succeed in the world of business, and we are motivated by seeing
              people use our resources and advice to grow their own businesses.
              Our business golden circle is to provide comprehensive business
              education and support to individuals looking to start their own
              businesses, through our podcast, YouTube channel, and personalized
              business consultation services, in order to empower individuals
              and help them achieve their entrepreneurial goals.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-2xl py-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-bold tracking-tight text-gray-900 sm:text-5xl text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-gray-500 text-left">
              With a combined experience of 10 years in modern business, we
              combine opposite realms of business from high tech digital
              business to on the ground trades business, our team provides you
              information on you how to setup a business, profit from it,
              identify your value, and create strategies to get you clients
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl">
        <GridList
          people={[
            {
              name: 'Aiden Faulconer',
              description: `Senior software developer, long time independent digital contractor, expert in all that is digital`,
              email: 'aidenf09@yahoo.com',
              roles: ['business consultant', 'engineer', 'founder'],
              imageUrl: AIDEN,
            },
            {
              name: 'James Boon',
              description: `Senior business consultant, founder of boon gardenscapes, services industry expert`,
              email: '',
              roles: ['business consultant', 'trades expert', 'co-founder'],
              imageUrl: JAMES,
            },
            {
              name: 'Henry Streets',
              description: 'Creative, free-willed, odd-job world explorer',
              email: '',
              roles: ['intern', 'video editor'],
              imageUrl: HENRY,
            },
          ]}
        />
      </section>
    </Layout>
  )
}

export default AboutPage
