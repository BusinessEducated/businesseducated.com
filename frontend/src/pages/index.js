import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'  

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center grid-cols-12 grid relative h-96">
        <div className="py-9 px-4 text-left col-span-6 rounded-tl-full rounded-tr-full border-white border-8 overflow-hidden h-full bg-SOGlightGreen">
          <div className="m-auto">
            <h1 className="inline-block p-3 mb-4 text-2xl font-bold bg-blue-600-400">
              Seeing the change your garden needs
            </h1>

            <p className="leading-loose">
              This is a barebones starter for Gatsby styled using{` `}
            </p>
            <Button /> 
            <button className="rounded-full"> &gt </button>
          </div>
        </div>

        <div className=" col-span-6 rounded-tl-full rounded-tr-full border-white border-8 overflow-hidden h-full">
          <img className="w-full h-full object-cover bg-black" src="" />
        </div>
      </section>

      <section className="">
        <Feature />
      </section>

      <section className="">
        <StackedTimeline />
      </section>

      <section className="">
        <FeatureRow />
      </section>
    </Layout>
  )
}

export default IndexPage
