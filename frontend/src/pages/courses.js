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
import PageBanner from "../layout/page-banner"

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

      <PageBanner headline={{
        pageTitle: "courses",
        title:'Skill, people, perspective, thats what we teach you',
        description: `Our courses are designed to teach you valuable skills, connect you with like-minded individuals, and broaden your perspective. Our offerings cover a range of business-related topics and are taught by experienced professionals. Start your journey towards success with one of our courses today.`,
        ctas: [{title:'Browse Courses',href:''}],
        imageSrc: COURSE_JOURNEY,
        imageAlt: 'a man reading our fantastic courses'
      }} />


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
