
import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'
import MONEY_PILE from '../../static/assets/money-pile.png'
import { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, PlayIcon, ReceiptPercentIcon, UsersIcon } from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'
import { SignIn  } from "../components/forms/signin"
import { TightGrid } from '../components/grid'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="">
        <SignIn />
      </section>
    </Layout>
  )
}

export default IndexPage
