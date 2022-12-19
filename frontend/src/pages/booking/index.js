import React from 'react'
import Layout from '../../layout/layout'
import SEO from '../../layout/seo'
import { ArrowStepper } from '../../components/forms/stepper'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="mt-24">
          <ArrowStepper/>
      </section>
    </Layout>
  )
}

export default IndexPage
