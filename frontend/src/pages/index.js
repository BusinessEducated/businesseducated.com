import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import MONEY_PILE from '../../static/assets/money-pile.png'
import { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, PlayIcon, ReceiptPercentIcon, UsersIcon } from '@heroicons/react/24/outline'
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

        <div className="text-left col-span-6 overflow-hidden h-full relative m-auto flex">
          <div className="flex flex-col gap-6 m-auto justify-start align-items-start">
            <h1 className="inline-block text-white mb-1 text-4xl font-bold max-w-xs">
              Wealth is Learnt, Be In Business
            </h1>

            <p className="leading-loose text-white max-w-md">
              Join Business Educated and learn how to build wealth through business consultation, podcasting, and YouTube content
            </p>

            <div className="flex gap-3">
              <Button>
                Book Now
              </Button>

              <Button>
                <PlayIcon className='h-7 w-7' />
              </Button>

              <p className='my-auto text-white'>
                Play Intro Video
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full absolute right-0 top-0">
          <img className="w-full h-full object-cover" src={MONEY_PILE} />
        </div>

        <div className="col-span-6 h-full w-full">
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
            title: 'Request time off',
            href: '#',
            icon: ClockIcon,
            iconForeground: 'text-teal-700',
            iconBackground: 'bg-teal-50',
          },
          {
            title: 'Benefits',
            href: '#',
            icon: CheckBadgeIcon,
            iconForeground: 'text-purple-700',
            iconBackground: 'bg-purple-50',
          },
          {
            title: 'Schedule a one-on-one',
            href: '#',
            icon: UsersIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
          },
          {
            title: 'Payroll',
            href: '#',
            icon: BanknotesIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
          },
          {
            title: 'Submit an expense',
            href: '#',
            icon: ReceiptPercentIcon,
            iconForeground: 'text-rose-700',
            iconBackground: 'bg-rose-50',
          },
          {
            title: 'Training',
            href: '#',
            icon: AcademicCapIcon,
            iconForeground: 'text-red-700',
            iconBackground: 'bg-red-50',
          },
        ]} />
      </section>

      <section>
        <FeatureRow features={[]} headline={{title: "Blog", description: ""}}/>
        <FeatureRow features={[]} headline={{title: "Blog", description: ""}}/>
      </section>

      <section className="">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default IndexPage
