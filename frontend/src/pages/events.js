import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import EVENTS from '../../static/assets/events.png'
import { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, PlayIcon, ReceiptPercentIcon, UsersIcon } from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import { ContactForm } from "../components/forms/contact"
import { TightGrid } from '../components/grid'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import { CalenderMonth } from '../components/calenders'

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
              Get involved, attend
            </h1>

            <p className="leading-loose text-white max-w-md">
              we host workshops, open discussions, and broadcast live, know when we go live and don't miss out.
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

        <img className="max-w-[550px] h-[550px] hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover col-span-6" src={EVENTS} />
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
        ]} headline={{
          title: "",
          description: "",
        }} />
      </section>

      <CalenderMonth dates={ [
  { date: '2021-12-27', events: [] },
  { date: '2021-12-28', events: [] },
  { date: '2021-12-29', events: [] },
  { date: '2021-12-30', events: [] },
  { date: '2021-12-31', events: [] },
  { date: '2022-01-01', isCurrentMonth: true, events: [] },
  { date: '2022-01-02', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-03',
    isCurrentMonth: true,
    events: [],
  },
  { date: '2022-01-04', isCurrentMonth: true, events: [] },
  { date: '2022-01-05', isCurrentMonth: true, events: [] },
  { date: '2022-01-06', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-07',
    isCurrentMonth: true,
    events: [],
  },
  { date: '2022-01-08', isCurrentMonth: true, events: [] },
  { date: '2022-01-09', isCurrentMonth: true, events: [] },
  { date: '2022-01-10', isCurrentMonth: true, events: [] },
  { date: '2022-01-11', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-12',
    isCurrentMonth: true,
    isToday: true,
    events: [],
    // { id: 6, name: "Sam's birthday party", time: '2PM', datetime: '2022-01-25T14:00', href: '#' }
  },
  { date: '2022-01-13', isCurrentMonth: true, events: [] },
  { date: '2022-01-14', isCurrentMonth: true, events: [] },
  { date: '2022-01-15', isCurrentMonth: true, events: [] },
  { date: '2022-01-16', isCurrentMonth: true, events: [] },
  { date: '2022-01-17', isCurrentMonth: true, events: [] },
  { date: '2022-01-18', isCurrentMonth: true, events: [] },
  { date: '2022-01-19', isCurrentMonth: true, events: [] },
  { date: '2022-01-20', isCurrentMonth: true, events: [] },
  { date: '2022-01-21', isCurrentMonth: true, events: [] },
  {
    date: '2022-01-22',
    isCurrentMonth: true,
    isSelected: true,
    events: [],
  },
  { date: '2022-01-23', isCurrentMonth: true, events: [] },
  { date: '2022-01-24', isCurrentMonth: true, events: [] },
  { date: '2022-01-25', isCurrentMonth: true, events: [] },
  { date: '2022-01-26', isCurrentMonth: true, events: [] },
  { date: '2022-01-27', isCurrentMonth: true, events: [] },
  { date: '2022-01-28', isCurrentMonth: true, events: [] },
  { date: '2022-01-29', isCurrentMonth: true, events: [] },
  { date: '2022-01-30', isCurrentMonth: true, events: [] },
  { date: '2022-01-31', isCurrentMonth: true, events: [] },
  { date: '2022-02-01', events: [] },
  { date: '2022-02-02', events: [] },
  {
    date: '2022-02-03',
    events: [],
  },
  { date: '2022-02-04', events: [] },
  { date: '2022-02-05', events: [] },
  { date: '2022-02-06', events: [] },
] } />

      <section className="">
        <SubscribeNewsletter />
      </section>
    </Layout>
  )
}

export default IndexPage
