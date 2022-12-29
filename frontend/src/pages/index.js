import React, { useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import MONEY_PILE from '../../static/assets/money-pile.png'
import START_BUSINESS from '../../static/assets/start-business.png'
import REFINE_BUSINESS from '../../static/assets/refine-business.png'
import {
  AcademicCapIcon,
  BanknotesIcon,
  BookOpenIcon,
  CheckBadgeIcon,
  ClockIcon,
  MicrophoneIcon,
  PlayIcon,
  ReceiptPercentIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import HOVER_MAN from '../../static/assets/hover-man.png'
import { ContactForm } from '../components/forms/contact'
import { TightGrid } from '../components/grid'
import { Link } from 'gatsby'

import {
  getVideosFromChannel,
  getVideosFromChannelByCategory,
} from '../services/youtube'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import Confetti from '../components/confetti'
// import INTRODUCTION_VIDEO from '../../static/videos/landing-page.mp4'

function IndexPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)
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
  const [blogs, setBlogs] = useState([
    {
      title: '',
      description: '',
      categories: [],
      imageSrc: '',
      imageAlt: '',
      href: '',
    },
  ])

  const playVideo = (e) => {
    setVideoPlaying((prev) => !prev)
  }

  const extractVideos = (json) => {
    const items = json.items
    const videos = []
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const video = {
        // id: item.id.videoId,
        // publishedAt: item.snippet.publishedAt,
        name: item.snippet.title,
        description: item.snippet.description,
        imageSrc: item.snippet.thumbnails.default.url,
        // channelId: item.snippet.channelId,
        // channelTitle: item.snippet.channelTitle,
      }
      videos.push(video)
    }
    return videos
  }

  useEffect(async () => {
    // "UC82_za_dL6fHUGa30wnW3uQ"
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

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className=" grid-cols-12 grid relative bg-black w-full mt-[11vh]">
        <div
          className={`${
            videoPlaying && 'opacity-60 transition-opacity'
          } opacity-100 text-left md:col-span-6 col-span-12 overflow-hidden flex z-30 justify-center items-center`}
        >
          <div className="flex flex-col gap-6 md:justify-start md:align-items-start align-items-center justify-center p-8">
            {/* <h3 className="inline-block text-gray-500 text-sm font-bold max-w-xs">
              Printing you money faster than the FDA!
            </h3> */}

            <h1 className="inline-block text-white my-8 md:text-6xl text-4xl font-bold md:max-w-lg md:px-0 md:text-left">
              Wealth is <div className="italic inline-block">Learnt</div>. Be In
              Business
            </h1>

            <p className="leading-loose text-white max-w-md md:text-left md:text-lg text-md pr-8">
              Join Business Educated and learn how to build wealth through
              business consultation, podcasting, and YouTube content
            </p>

            <div className="flex gap-3 md:m-0 items-center">
              <Link to="/booking" replace>
                <Button>Book Now</Button>
              </Link>

              <Button onClick={playVideo}>
                <PlayIcon className="h-7 w-7" />
              </Button>

              <p
                className="my-auto text-white md:text-lg text-xs cursor-pointer"
                onClick={playVideo}
              >
                Play Intro Video
              </p>
            </div>
          </div>
        </div>

        {/* Mobile graphic */}
        <div
          className="pr-12 h-full w-full absolute right-0 top-0 md:hidden md:rotate-0 opacity-60 md:scale-100 md:translate-y-[0px] md:translate-x-0 -translate-y-[200px] translate-x-[-20px] -rotate-90 scale-125 z-10"
          onClick={playVideo}
        >
          <img className="w-full h-full object-cover" src={MONEY_PILE} />
        </div>

        {/* desktop graphic / video player */}
        {(!videoPlaying && (
          <div className="col-span-6 relative h-full w-full hidden md:block z-20 pr-12">
            {/* <Confetti
              colors={[
                '#4caf50',
              ]}
              velocity={.75}
              opacity={0.2}
              height={1000}
              className="absolute top-0 left-0 w-full h-full min-h-[600px] z-20"
            /> */}
            <img
              className="w-full h-3/5 top-32 z-[11] hover:top-28 hover:cursor-pointer ease-in-out transition-all object-contain mx-auto absolute pr-12"
              src={HOVER_MAN}
            />
            <img
              className="md:max-w-[550px] w-full z-10 top-[-100px] h-full object-contain mx-auto relative "
              src={RINGS_OF_POWER}
            />
          </div>
        )) || (
          <div className="left-0 top-0 absolute h-full w-full md:block z-20 m-6 rounded-md overflow-hidden">
            <video className="md:max-w-[550px] md:min-h-[475px] max-w-[225px] min-h-[232px] z-10 h-full object-contain mx-auto absolute top-0 left-0" />
          </div>
        )}
      </section>

      <section className="bg-red">
        <Feature
          features={[
            {
              name: 'Start your business now',
              description: `If you're ready to turn your business idea into a reality, we're here to help. Our team of experienced business consultants has helped countless entrepreneurs just like you get their businesses off the ground. Whether you need help with business planning, marketing, or financial management, we have the resources and expertise to guide you every step of the way.`,
              imageSrc: START_BUSINESS,
              imageAlt:
                'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
            },
            {
              name: 'Refined your business',
              description: `If you're looking to take your business to the next level, our team of experienced consultants is here to help. We offer a range of services to help you assess your current business strategy and identify areas for improvement. From marketing and sales to financial management and operations, we can help you optimize your business for maximum efficiency and profitability.`,
              imageSrc: REFINE_BUSINESS,
              imageAlt:
                'Detail of zipper pull with tan leather and silver rivet.',
            },
          ]}
          headline={{
            title: 'Welcome to Business Educated',
            description: `
         Welcome to Business Educated, where we believe that starting and growing a business is the path to creating the freedom you desire. Our team of experienced consultants and access to industry experts is here to help you turn your business idea into a reality and achieve your goals. We offer a range of consulting services and educational resources to guide you every step of the way. Explore our podcast, YouTube channel, and blog for valuable insights and tips on creating a successful and fulfilling business. Don't wait any longer to start living the life you want. Contact us today and let us help you create your freedom through business.
          `,
          }}
        />
      </section>

      <section className="border-gray-100 border-t-2 rounded-md border-b-2 mx-auto max-w-2xl my-12 md:max-w-7xl">
        <TightGrid
          actions={[
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
          ]}
        />
      </section>

      <section>
        <FeatureRow
          features={videos}
          headline={{
            title: 'Videos',
            description: 'Watch our content, succeed',
          }}
        />
        <FeatureRow
          features={blogs}
          headline={{ title: 'Blog', description: 'Read our content, succeed' }}
        />
      </section>

      <ContactForm />

      <section className="">
        <SubscribeNewsletter />
      </section>
    </Layout>
  )
}

export default IndexPage
