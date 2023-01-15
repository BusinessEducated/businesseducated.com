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
import { Link, graphql } from 'gatsby'

import {
  getVideosFromChannel,
  getVideosFromChannelByCategory,
} from '../services/youtube'
import SubscribeNewsletter from '../components/subscribe-newsletter'
import Confetti from '../components/confetti'
// import WordFinder from '../components/forms/fields/scrabble-solver'
import { reShapeData, extractVideos } from '../components/util/data'

// import INTRODUCTION_VIDEO from '../../static/videos/landing-page.mp4'

function IndexPage({ data }) {
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
  useEffect(() => {
    console.info('test ', data)
    setBlogs(reShapeData(data.posts.edges))
  }, [, data])

  const [blogs, setBlogs] = useState([])

  const playVideo = (e) => {
    setVideoPlaying((prev) => !prev)
  }

  // useEffect(async () => {
  //   process.env.YOUTUBE_CHANNEL_ID
  //   const d = await getVideosFromChannel(
  //     // 'UCNlfGuzOAKM1sycPuM_QTHg',
  //     'UC82_za_dL6fHUGa30wnW3uQ',
  //     10,
  //     // 'cLa-YH5H0YA&list=PLi8MopF2A5_V9DRUz8TstIKXCraJ5WzJ_',
  //   )
  //   const data = extractVideos(d.body)
  //   console.info('test ', data)
  //   setVideos(data)
  // }, [])

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

            <h1 className="inline-block text-white mt-8 mb-0 lg:text-6xl md:text-5xl text-4xl font-bold md:max-w-lg md:px-0 md:text-left text-center">
              Wealth is <div className="italic inline-block">Learnt</div>. Be In
              Business
            </h1>

            <p className="inline-block leading-loose text-white max-w-md md:text-lg md:m-0 m-auto text-md md:pr-8 pr-0 md:text-left text-center">
              Join Business Educated and learn how to build wealth through
              business consultation, podcasting, and YouTube content
            </p>

            <div className="flex gap-3 md:m-0 items-center md:justify-start justify-center md:w-auto w-full">
              <Link to="/booking" replace>
                <Button large={true}>Book Now</Button>
              </Link>

              <Button large={true} onClick={playVideo} className="gap-4">
                <PlayIcon className="h-6 w-6" />
                Play video
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile graphic */}
        <div
          className="md:pr-0 pr-12 h-full w-full absolute right-0 top-0 md:hidden md:rotate-0 opacity-60 md:scale-100 md:translate-y-[0px] md:translate-x-0 -translate-y-[230px] translate-x-[-40px] -rotate-90 scale-125 z-10"
          onClick={playVideo}
        >
          <img className="w-full h-full object-cover" src={MONEY_PILE} />
        </div>

        {/* desktop graphic / video player */}
        {(!videoPlaying && (
          <div className="col-span-6 relative bg-black h-full w-full hidden md:block z-20 md:pr-0 pr-12">
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
              className="anim-hover w-full h-3/5 top-32 z-[11] hover:top-28 hover:cursor-pointer ease-in-out transition-all object-contain mx-auto absolute "
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
      <div className="w-full mt-[-1px] mb-24 h-auto">
        <svg
          style={{ height: '100%', width: '100%' }}
          viewBox="0 0 2949 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="true"
        >
          <path
            d="M56.6962 39.0461L0 0.845459L113.392 0.845463L56.6962 39.0461Z"
            fill="black"
          />
          <path
            d="M170.089 39.0461L113.393 0.845459L226.785 0.845463L170.089 39.0461Z"
            fill="black"
          />
          <path
            d="M283.481 39.0461L226.785 0.845459L340.178 0.845463L283.481 39.0461Z"
            fill="black"
          />
          <path
            d="M396.874 39.0461L340.178 0.845459L453.57 0.845463L396.874 39.0461Z"
            fill="black"
          />
          <path
            d="M510.266 39.0461L453.57 0.845459L566.963 0.845463L510.266 39.0461Z"
            fill="black"
          />
          <path
            d="M623.657 39.0461L566.961 0.845459L680.353 0.845463L623.657 39.0461Z"
            fill="black"
          />
          <path
            d="M737.05 39.0461L680.354 0.845459L793.746 0.845463L737.05 39.0461Z"
            fill="black"
          />
          <path
            d="M850.442 39.0461L793.746 0.845459L907.138 0.845463L850.442 39.0461Z"
            fill="black"
          />
          <path
            d="M963.835 39.0461L907.139 0.845459L1020.53 0.845463L963.835 39.0461Z"
            fill="black"
          />
          <path
            d="M1077.23 39.0461L1020.53 0.845459L1133.92 0.845463L1077.23 39.0461Z"
            fill="black"
          />
          <path
            d="M1190.62 39.0461L1133.92 0.845459L1247.32 0.845463L1190.62 39.0461Z"
            fill="black"
          />
          <path
            d="M1304.01 39.0461L1247.32 0.845459L1360.71 0.845463L1304.01 39.0461Z"
            fill="black"
          />
          <path
            d="M1417.41 39.0461L1360.71 0.845459L1474.1 0.845463L1417.41 39.0461Z"
            fill="black"
          />
          <path
            d="M1530.8 39.0461L1474.1 0.845459L1587.49 0.845463L1530.8 39.0461Z"
            fill="black"
          />
          <path
            d="M1644.19 39.0461L1587.49 0.845459L1700.88 0.845463L1644.19 39.0461Z"
            fill="black"
          />
          <path
            d="M1757.58 39.0461L1700.88 0.845459L1814.28 0.845463L1757.58 39.0461Z"
            fill="black"
          />
          <path
            d="M1870.97 39.0461L1814.28 0.845459L1927.67 0.845463L1870.97 39.0461Z"
            fill="black"
          />
          <path
            d="M1984.37 39.0461L1927.67 0.845459L2041.06 0.845463L1984.37 39.0461Z"
            fill="black"
          />
          <path
            d="M2097.76 39.0461L2041.06 0.845459L2154.45 0.845463L2097.76 39.0461Z"
            fill="black"
          />
          <path
            d="M2211.15 39.0461L2154.46 0.845459L2267.85 0.845463L2211.15 39.0461Z"
            fill="black"
          />
          <path
            d="M2324.54 39.0461L2267.85 0.845459L2381.24 0.845463L2324.54 39.0461Z"
            fill="black"
          />
          <path
            d="M2437.93 39.0461L2381.24 0.845459L2494.63 0.845463L2437.93 39.0461Z"
            fill="black"
          />
          <path
            d="M2551.33 39.0461L2494.63 0.845459L2608.02 0.845463L2551.33 39.0461Z"
            fill="black"
          />
          <path
            d="M2664.72 39.0461L2608.02 0.845459L2721.42 0.845463L2664.72 39.0461Z"
            fill="black"
          />
          <path
            d="M2778.11 39.0461L2721.42 0.845459L2834.81 0.845463L2778.11 39.0461Z"
            fill="black"
          />
          <path
            d="M2891.5 39.0461L2834.81 0.845459L2948.2 0.845463L2891.5 39.0461Z"
            fill="black"
          />
          <path
            d="M3004.9 39.0461L2948.2 0.845459L3061.59 0.845463L3004.9 39.0461Z"
            fill="black"
          />
          <path
            d="M3118.29 39.0461L3061.59 0.845459L3174.99 0.845463L3118.29 39.0461Z"
            fill="black"
          />
          <path
            d="M3231.68 39.0461L3174.99 0.845459L3288.38 0.845463L3231.68 39.0461Z"
            fill="black"
          />
          <path
            d="M3345.08 39.0461L3288.38 0.845459L3401.77 0.845463L3345.08 39.0461Z"
            fill="black"
          />
          <path
            d="M3458.47 39.0461L3401.77 0.845459L3515.16 0.845463L3458.47 39.0461Z"
            fill="black"
          />
          <path
            d="M3571.86 39.0461L3515.16 0.845459L3628.55 0.845463L3571.86 39.0461Z"
            fill="black"
          />
          <path
            d="M3685.25 39.0461L3628.55 0.845459L3741.95 0.845463L3685.25 39.0461Z"
            fill="black"
          />
          <path
            d="M3798.64 39.0461L3741.95 0.845459L3855.34 0.845463L3798.64 39.0461Z"
            fill="black"
          />
          <path
            d="M3912.04 39.0461L3855.34 0.845459L3968.73 0.845463L3912.04 39.0461Z"
            fill="black"
          />
          <path
            d="M4025.43 39.0461L3968.73 0.845459L4082.12 0.845463L4025.43 39.0461Z"
            fill="black"
          />
          <path
            d="M4138.82 39.0461L4082.12 0.845459L4195.52 0.845463L4138.82 39.0461Z"
            fill="black"
          />
        </svg>
      </div>

      <section>
        <div className="mx-6">
          <div className="max-w-5xl mx-auto h-full rounded-3xl bg-red-700 shadow-xl">
            <div className="mx-auto max-w-3xl text-left py-12 px-12">
              <h2 className="font-bold tracking-tight text-white sm:text-5xl text-4xl mb-6">
                Welcome to Business Educated 🎯
              </h2>
              <p className="mt-4 text-white text-left">
                there has never been so much access to information in the world
                than rights now, the challenges the world faces currently leave
                many skilled and valuable people without effective compensation,
                capitalism rewards the bold, so why not explore the wealth of
                business related courses, podcasts with people not unlike
                yourself who are making an active effort to make their dreams a
                reality, its not all rainbows and ponies, but in a world of
                chaos education is our best weapon to compete in an ever
                evolving landscape, \n to provide a plethora of free information
                is our main focus, to help equip learners with the practical
                fundamental basics of building and maintaining a business \n
                here we want to show than anybody can do it, with the right
                tools every individual has the power to take control of their
                destiny
              </p>
            </div>
          </div>
        </div>

        <Feature
          features={[
            {
              name: 'Start your business now',
              description: `the first step is always the most certainly difficult, in the packages provided by BE we offer optional additional information for those who are committed to taking control of their living opportunity \n Our team of experienced business consultants has helped countless entrepreneurs just like you get their businesses off the ground. Whether you need help with business planning, marketing, or financial management, we have the resources and expertise to guide you every step of the way.`,
              imageSrc: START_BUSINESS,
              imageAlt:
                'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
            },
            {
              name: 'Refine your business',
              description: `navigating business is one of the toughest challenges a person can go through, developing yourself along with improving your business go hand in hand and without one, the other will always be disrupted and out of sync, \n We offer a range of services to help you assess your current business strategy and identify areas for improvement. From marketing and sales to financial management and operations, we can help you optimize your business for maximum efficiency and profitability \n while also aiming to connect you to ideas in philosophy, science and taking influence from powerful figures throughout human history to most take advantage of your potential to add value to the world, change always begins on the individual level`,
              imageSrc: REFINE_BUSINESS,
              imageAlt:
                'Detail of zipper pull with tan leather and silver rivet.',
            },
          ]}
          // headline={{
          //   title: 'Welcome to Business Educated',
          //   description: `there has never been so much access to information in the world than rights now, the challenges the world faces currently leave many skilled and valuable people without effective compensation, capitalism rewards the bold, so why not explore the wealth of business related courses, podcasts with people not unlike yourself who are making an active effort to make their dreams a reality, its not all rainbows and ponies, but in a world of chaos education is our best weapon to compete in an ever evolving landscape,  \n to provide a plethora of free information is our main focus, to help equip learners with the practical fundamental basics of building and maintaining a business \n here we want to show than anybody can do it, with the right tools every individual has the power to take control of their destiny`,
          // }}
        />
      </section>

      <section className="rounded-md mx-auto max-w-2xl my-12 md:max-w-7xl px-6 text-">
        <TightGrid
          dark={false}
          actions={[
            {
              title: 'Consultation',
              href: '/booking',
              icon: UserGroupIcon,
              description: ``,
              iconForeground: 'text-teal-700',
              iconBackground: 'bg-teal-50',
            },
            {
              title: 'Podcast',
              href: '/podcast',
              icon: MicrophoneIcon,
              description: ``,
              iconForeground: 'text-purple-700',
              iconBackground: 'bg-purple-50',
            },
            {
              title: 'Shorts',
              href: '/shorts',
              icon: VideoCameraIcon,
              description: ``,
              iconForeground: 'text-sky-700',
              iconBackground: 'bg-sky-50',
            },
            {
              title: 'Courses',
              href: '/courses',
              icon: AcademicCapIcon,
              description: ``,
              iconForeground: 'text-yellow-700',
              iconBackground: 'bg-yellow-50',
            },
            {
              title: 'Events',
              href: '/events',
              icon: ReceiptPercentIcon,
              description: ``,
              iconForeground: 'text-rose-700',
              iconBackground: 'bg-rose-50',
            },
            {
              title: 'Blog',
              href: '/blog',
              icon: BookOpenIcon,
              description: ``,
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

export const query = graphql`
  query {
    posts: allStrapiBlogPost(sort: { updatedAt: ASC }, limit: 6) {
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
