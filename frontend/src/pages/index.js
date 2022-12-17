import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'
import { Feature, FeatureRow } from '../components/feature'
import { StackedTimeline } from '../components/timeline'
import { Button } from '../components/button'  
import MONEY_PILE from '../../static/assets/money-pile.png'
import { PlayIcon } from '@heroicons/react/24/outline'
import RINGS_OF_POWER from '../../static/assets/rings-of-power.png'

function IndexPage() {
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
              Wealth is Learnt, Be In Business
            </h1>

            <p className="leading-loose text-white max-w-md">
              Join Business Educated and learn how to build wealth through business consultation, podcasting, and YouTube content
            </p>

            <div className="flex gap-3">
              <Button>
                Book Now  
              </Button> 

              <Button> 
                <PlayIcon className='h-7 w-7'/>
              </Button>
              
              <p className='my-auto text-white'>
                 Play Intro Video  
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full absolute right-0 top-0">
          <img className="w-full h-full object-cover" src={MONEY_PILE} />
        </div>

        <div className="col-span-6 h-full w-full">
          <img className="w-96 h-full object-contain m-auto relative" src={RINGS_OF_POWER} />
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
