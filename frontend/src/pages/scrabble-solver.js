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
import ScrabbleSolver from '../components/scabble-solver'

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <PageBanner
        headline={{
          pageTitle: 'Scrabble Solver',
          title: 'Beat the competition in scrabble on your phone',
          description: `A convenient scrabble solving algorithm that shows you all the words you can create given a set of letters`,
          ctas: [{ title: 'Book now', href: '/booking' }],
          imageSrc: ENLIGHTENMENT,
          imageAlt: 'abstract reading man',
        }}
      />

      <ScrabbleSolver />
    </Layout>
  )
}

export default AboutPage
