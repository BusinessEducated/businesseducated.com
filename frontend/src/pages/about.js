import React from "react";

import Layout from "../layout/layout";
import SEO from "../layout/seo";
import { GridList, HorizontalLinkCards } from "../components/grid";
import { Button } from "../components/button"
// import dogIllustration from "../images/dog-illustration.svg";


function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
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

              <p className='my-auto text-white'>
                Play Intro Video
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full absolute right-0 top-0">
          {/* <img className="w-full h-full object-cover" src={MONEY_PILE} /> */}
        </div>

        <div className="col-span-6 h-full w-full">
          {/* <img className="w-96 h-full object-contain m-auto relative" src={RINGS_OF_POWER} /> */}
        </div>
      </section>

      <section className="mx-auto max-w-5xl flex flex-col my-24 items-center md:flex-row w-full">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Thomas Nagel
          </cite>
        </div>

        {/* <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure> */}
      </section>

      <section className="relative mx-auto max-w-5xl">
        <GridList people={[
          { name: "Aiden Faulconer", email: "aidenf09@yahoo.com", role: "business consultant", imageUrl: "" },
          { name: "James Boon", email: "", role: "business consultatn", imageUrl: "" },
          { name: "Henry Streets", email: "", role: "intern", imageUrl: "" },
        ]} />
      </section>
    </Layout>
  );
}

export default AboutPage;
