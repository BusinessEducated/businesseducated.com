import React from 'react'
import { Button } from '../components/button'
import { Link } from 'gatsby'
function PageBanner({
  headline = {
    pageTitle: 'Courses',
    title: 'Skill, people, perspective, thats what we teach you',
    description: `Our courses are designed to teach you valuable skills, connect you with like-minded individuals, and broaden your perspective. Our offerings cover a range of business-related topics and are taught by experienced professionals. Start your journey towards success with one of our courses today.`,
    imageSrc: '',
    imageAlt: 'image alt',
    ctas: [{ title: 'button', to: '/' }],
  },
}) {
  return (
    <section className="text-center grid-cols-12 grid relative md:h-[35rem] h-full bg-black w-full mt-[11vh]">
      <div className="text-left md:col-span-6 col-span-12 overflow-hidden h-full relative m-auto flex z-20 md:p-0 p-8">
        <div className="flex flex-col gap-6 m-auto justify-start align-items-start md:m-auto mt-20 mb-8">

          <h2 className="inline-block text-white mb-1 text-1xl font-bold max-w-xs opacity-60">
            {headline.pageTitle}
          </h2>

          <h1 className="inline-block text-white mb-1 text-4xl font-bold max-w-xs">
            {headline.title}
          </h1>

          <p className="leading-loose text-white max-w-md">
            {headline.description}
          </p>

          <div className="flex gap-3">
            {headline.ctas.map((cta) => (
              <Link to={cta.to}>
                <Button>{cta.title}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <img
        className="md:max-w-[550px] max-w-[250px] z-10 md:relative md:opacity-100 opacity-50 absolute top-0 right-0 hover:mt-6 transition-all ease-in-out rounded-md shadow-2xl mt-12 object-cover md:col-span-6 col-span-12"
        src={headline.imageSrc}
        alt={headline.imageAlt}
      />
    </section>
  )
}

export default PageBanner
