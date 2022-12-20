import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import MONEY_PILE from '../../static/assets/money-pile.png'
import { AcademicCapIcon, BanknotesIcon, BookOpenIcon, CheckBadgeIcon, ClockIcon, MicrophoneIcon, PlayIcon, ReceiptPercentIcon, UserGroupIcon, UsersIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import { ContactForm } from "../components/forms/contact"
import { TightGrid } from '../components/grid'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center grid-cols-12 grid relative h-[35rem] bg-black w-full mt-[11vh]">

        <div className="text-left md:col-span-6 col-span-12 overflow-hidden h-full relative flex z-30">
          <div className="flex flex-col gap-6 m-auto md:justify-start md:align-items-start align-items-center justify-center">
            {/* <h3 className="inline-block text-gray-500 text-sm font-bold max-w-xs">
              Printing you money faster than the FDA!
            </h3> */}
            <h1 className="inline-block text-white mb-1 md:text-6xl text-4xl font-bold md:max-w-lg md:pt-0 md:px-0 md:text-left px-4 pt-16 text-center">
              Wealth is <div className='underline-offset-4 bg-red-300 bg-opacity-30 italic  w-auto rounded-full px-5 py-2 inline-block text-white'>Learnt</div>.
              Be In Business
            </h1>

            <p className="leading-loose text-white max-w-md md:text-left text-center md:text-lg text-md">
              Join Business Educated and learn how to build wealth through business consultation, podcasting, and YouTube content
            </p>

            <div className="flex gap-3">
              <Button>
                Book Now
              </Button>

              <Button>
                <PlayIcon className='h-7 w-7' />
              </Button>

              <p className='my-auto text-white md:text-lg text-xs'>
                Play Intro Video
              </p>
            </div>
          </div>
        </div>

          <div className="h-full w-full absolute right-0 top-0 md:rotate-0 md:translate-y-0 md:translate-x-0 md:scale-100 -translate-y-[260px] translate-x-[-50px] -rotate-90 scale-125 z-10">
            <img className="w-full h-full object-cover" src={MONEY_PILE} />
          </div>

        <div className="col-span-6 h-full w-full hidden md:block z-20">
          <img className="w-96 h-full object-contain m-auto relative" src={RINGS_OF_POWER} />
        </div>
      </section>


      <section className="">
        <Feature features={[
          {
            name: 'Minimal and thoughtful',
            description:
              'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
            imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
          },
          {
            name: 'Refined details',
            description:
              'We design every detail with the best materials and finishes. This laptop sleeve features3 durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
            imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
          },
        ]} headline={{
          title: "",
          description: "",
        }} />
      </section>

      <section className="border-gray-100 border-t-2 border-b-2">
        <TightGrid actions={[
          {
            title: 'Consultation',
            href: '/booking',
            icon: UserGroupIcon,
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
          },
          {
            title: 'Podcast',
            href: '/podcast',
            icon: MicrophoneIcon,
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
          },
          {
            title: 'Shorts',
            href: '/shorts',
            icon: VideoCameraIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
          },
          {
            title: 'Courses',
            href: '/courses',
            icon: AcademicCapIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
          },
          {
            title: 'Events',
            href: '/events',
            icon: ReceiptPercentIcon,
            iconForeground: 'text-rose-700',
            iconBackground: 'bg-rose-50',
          },
          {
            title: 'Blog',
            href: '/blog',
            icon: BookOpenIcon,
            iconForeground: 'text-red-700',
            iconBackground: 'bg-red-50',
          },
        ]} />
      </section>

      <section>
        <FeatureRow features={[]} headline={{ title: "Blog", description: "" }} />
        <FeatureRow features={[]} headline={{ title: "Blog", description: "" }} />
      </section>

      <section className="">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default IndexPage
