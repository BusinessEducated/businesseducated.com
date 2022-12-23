import React, { useEffect, useState } from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import {
  Feature,
  FeatureBreakdown,
  FeatureRow,
  FeatureTwoChoice,
} from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  PlayIcon,
  ReceiptPercentIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import WORK_TOGETHER from '../../static/assets/work-together.png'
import KNOWN from '../../static/assets/known.png'
import STAND_UP from '../../static/assets/stand-up.png'
import { ContactForm } from '../components/forms/contact'
import {
  GridList,
  ImageGrid,
  SmallCardGrid,
  TightGrid,
} from '../components/grid'
import { JoinPodcast } from '../components/forms/join-podcast'
import { ContentThreeRow } from '../components/content'
import { getVideosFromChannelByCategory } from '../services/youtube'
import SubscribeNewsletter from '../components/subscribe-newsletter'
function PodcastPage() {
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
    getVideosFromChannelByCategory('UC82_za_dL6fHUGa30wnW3uQ').then((d) => {
      const res = []
      setVideos(res)
    })
  }, [])

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
              Collective business advice
            </h1>

            <p className="leading-loose text-white max-w-md">
              we discuss a range of topics including leadership, marketing,
              finance, and more. Each episode featuring guests who share their
              experiences and lessons learned in the business world, offering
              valuable insights and advice for listeners. We are powered by the
              collective knowledge and expertise of those who came before us.
              Tune in to learn from the best and gain the knowledge and skills
              you need to succeed.
            </p>

            <div className="flex gap-3">
              <Button>Book Now</Button>

              <p className="my-auto text-white">Play Intro Video</p>
            </div>
          </div>
        </div>

        <img
          className="max-w-[550px] h-[550px] hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover col-span-6"
          src={WORK_TOGETHER}
        />
      </section>

      <section>
        <ContentThreeRow
          headline={{
            title: 'Browse the latest',
            description: ``,
          }}
          categories={videos}
        />
      </section>

      <section className="">
        <FeatureTwoChoice
          headline={{
            title: 'Have a voice, speak on our podcast',
            description: '',
          }}
          features={[
            {
              title: 'Make yourself known',
              description: `Join our Business Educated podcast and share your valuable business insights with our audience. Whether you're an entrepreneur or business leader, we want to give you a platform to share your story and inspire others. Contact us to schedule your appearance and have your voice heard.`,
              imageAlt: 'photo of an individual communicating on the internet',
              imageSrc: KNOWN,
            },
            {
              title: 'Make your ideas known',
              description: `Do you have a great business idea that you want to share with the world? At Business Educated, we believe that everyone has the potential to make an impact and contribute valuable ideas to the business community. That's why we're inviting you to join our YouTube channel and share your ideas with our audience. By appearing on our channel, you'll have the opportunity to showcase your creativity and inspire others to pursue their own business ideas. So if you're ready to make your ideas known and contribute to the business community, contact us today to schedule your appearance on Business Educated. Together, we can educate and inspire the business community and pave the way for success.`,
              imageAlt:
                'a businessman standing on a table surrounded by others',
              imageSrc: STAND_UP,
            },
          ]}
        />
      </section>

      <section className="">
        <JoinPodcast />
      </section>

      <section className="">
        <SubscribeNewsletter />
      </section>
    </Layout>
  )
}

export default PodcastPage

// <section>
//   <div className="h-full w-full absolute right-0 top-0">
//     {/* <img className="w-full h-full object-cover" src={MONEY_PILE} /> */}
//   </div>

//   <div className="col-span-6 h-full w-full">
//     {/* <img className="w-96 h-full object-contain m-auto relative" src={RINGS_OF_POWER} /> */}
//   </div>
// </section>
