import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import MONEY_PILE from '../../static/assets/money-pile.png'
import { PlayIcon } from '@heroicons/react/24/outline'
import COURSE_JOURNEY from '../../static/assets/course-journey.png'
import { ContactForm } from '../components/forms/contact'
import PageBanner from '../layout/page-banner'
import COURSE_DEFAULT_IMAGE from '../../static/assets/courses.png'

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

      <PageBanner
        headline={{
          pageTitle: 'courses',
          title: 'Skill, people, perspective, thats what we teach you',
          description: `Our courses are designed to teach you valuable skills, connect you with like-minded individuals, and broaden your perspective. Our offerings cover a range of business-related topics and are taught by experienced professionals. Start your journey towards success with one of our courses today.`,
          ctas: [{ title: 'Browse Courses', href: '' }],
          imageSrc: COURSE_JOURNEY,
          imageAlt: 'a man reading our fantastic courses',
        }}
      />

      <section className="">
        <FeatureRow
          headline={{
            title: 'Get setup, get practical',
            description:
              'Our courses offer the details we beleive you need to know to run a business, each course comes with practical projects to ensure you practice what we preach, each course project comes with the opportunity to build up your business while you learn',
          }}
          features={[
            {
              name: 'Psycology Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Psycology Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Software Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Sales Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Power Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Marketing Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
            {
              name: 'Graphic Design Course',
              description: 'Coming Soon! 📚',
              imageSrc: COURSE_DEFAULT_IMAGE,
              imageAlt: '',
              // href: "",
              // tags: [],
            },
          ]}
        />
      </section>

      <section className="">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default IndexPage
