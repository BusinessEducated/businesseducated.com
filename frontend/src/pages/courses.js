import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'  
import MONEY_PILE from '../../static/assets/money-pile.png'
import { PlayIcon } from '@heroicons/react/24/outline'
import COURSE_JOURNEY from '../../static/assets/course-journey.png'
import {ContactForm} from "../components/forms/contact"

function IndexPage() {

  // const { site } = useStaticQuery(graphql`
  //   query DefaultSEOQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         author
  //       }
  //     }
  //   }
  // `);

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
              Skill, people, perspective, thats what we teach you
            </h1>

            <p className="leading-loose text-white max-w-md">
              Our courses are designed to teach you valuable skills, connect you with like-minded individuals, and broaden your perspective. Our offerings cover a range of business-related topics and are taught by experienced professionals. Start your journey towards success with one of our courses today.
            </p>

            <div className="flex gap-3">
              <Button>
                Browse Courses
              </Button> 
            </div>
          </div>
        </div>

        <img className="max-w-[550px] hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover col-span-6" src={COURSE_JOURNEY} />
      </section>


      <section className="">
        <Feature headline={{}} features={[
          {},
          {},
        ]} />
      </section>

      <section className="">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default IndexPage
