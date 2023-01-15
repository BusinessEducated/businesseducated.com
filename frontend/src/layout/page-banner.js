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
    <>
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
              {headline.ctas &&
                headline.ctas.map((cta) => (
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
      <div className="w-full mt-[-1px] mb-24 h-auto">
        <svg
          style={{ height: '100%', width: '100%' }}
          viewBox="0 0 2949 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="true"
        >
          <path
            d="M56.6962 39.0461L0 0.845459L113.392 0.845463L56.6962 39.0461Z"
            fill="black"
          />
          <path
            d="M170.089 39.0461L113.393 0.845459L226.785 0.845463L170.089 39.0461Z"
            fill="black"
          />
          <path
            d="M283.481 39.0461L226.785 0.845459L340.178 0.845463L283.481 39.0461Z"
            fill="black"
          />
          <path
            d="M396.874 39.0461L340.178 0.845459L453.57 0.845463L396.874 39.0461Z"
            fill="black"
          />
          <path
            d="M510.266 39.0461L453.57 0.845459L566.963 0.845463L510.266 39.0461Z"
            fill="black"
          />
          <path
            d="M623.657 39.0461L566.961 0.845459L680.353 0.845463L623.657 39.0461Z"
            fill="black"
          />
          <path
            d="M737.05 39.0461L680.354 0.845459L793.746 0.845463L737.05 39.0461Z"
            fill="black"
          />
          <path
            d="M850.442 39.0461L793.746 0.845459L907.138 0.845463L850.442 39.0461Z"
            fill="black"
          />
          <path
            d="M963.835 39.0461L907.139 0.845459L1020.53 0.845463L963.835 39.0461Z"
            fill="black"
          />
          <path
            d="M1077.23 39.0461L1020.53 0.845459L1133.92 0.845463L1077.23 39.0461Z"
            fill="black"
          />
          <path
            d="M1190.62 39.0461L1133.92 0.845459L1247.32 0.845463L1190.62 39.0461Z"
            fill="black"
          />
          <path
            d="M1304.01 39.0461L1247.32 0.845459L1360.71 0.845463L1304.01 39.0461Z"
            fill="black"
          />
          <path
            d="M1417.41 39.0461L1360.71 0.845459L1474.1 0.845463L1417.41 39.0461Z"
            fill="black"
          />
          <path
            d="M1530.8 39.0461L1474.1 0.845459L1587.49 0.845463L1530.8 39.0461Z"
            fill="black"
          />
          <path
            d="M1644.19 39.0461L1587.49 0.845459L1700.88 0.845463L1644.19 39.0461Z"
            fill="black"
          />
          <path
            d="M1757.58 39.0461L1700.88 0.845459L1814.28 0.845463L1757.58 39.0461Z"
            fill="black"
          />
          <path
            d="M1870.97 39.0461L1814.28 0.845459L1927.67 0.845463L1870.97 39.0461Z"
            fill="black"
          />
          <path
            d="M1984.37 39.0461L1927.67 0.845459L2041.06 0.845463L1984.37 39.0461Z"
            fill="black"
          />
          <path
            d="M2097.76 39.0461L2041.06 0.845459L2154.45 0.845463L2097.76 39.0461Z"
            fill="black"
          />
          <path
            d="M2211.15 39.0461L2154.46 0.845459L2267.85 0.845463L2211.15 39.0461Z"
            fill="black"
          />
          <path
            d="M2324.54 39.0461L2267.85 0.845459L2381.24 0.845463L2324.54 39.0461Z"
            fill="black"
          />
          <path
            d="M2437.93 39.0461L2381.24 0.845459L2494.63 0.845463L2437.93 39.0461Z"
            fill="black"
          />
          <path
            d="M2551.33 39.0461L2494.63 0.845459L2608.02 0.845463L2551.33 39.0461Z"
            fill="black"
          />
          <path
            d="M2664.72 39.0461L2608.02 0.845459L2721.42 0.845463L2664.72 39.0461Z"
            fill="black"
          />
          <path
            d="M2778.11 39.0461L2721.42 0.845459L2834.81 0.845463L2778.11 39.0461Z"
            fill="black"
          />
          <path
            d="M2891.5 39.0461L2834.81 0.845459L2948.2 0.845463L2891.5 39.0461Z"
            fill="black"
          />
          <path
            d="M3004.9 39.0461L2948.2 0.845459L3061.59 0.845463L3004.9 39.0461Z"
            fill="black"
          />
          <path
            d="M3118.29 39.0461L3061.59 0.845459L3174.99 0.845463L3118.29 39.0461Z"
            fill="black"
          />
          <path
            d="M3231.68 39.0461L3174.99 0.845459L3288.38 0.845463L3231.68 39.0461Z"
            fill="black"
          />
          <path
            d="M3345.08 39.0461L3288.38 0.845459L3401.77 0.845463L3345.08 39.0461Z"
            fill="black"
          />
          <path
            d="M3458.47 39.0461L3401.77 0.845459L3515.16 0.845463L3458.47 39.0461Z"
            fill="black"
          />
          <path
            d="M3571.86 39.0461L3515.16 0.845459L3628.55 0.845463L3571.86 39.0461Z"
            fill="black"
          />
          <path
            d="M3685.25 39.0461L3628.55 0.845459L3741.95 0.845463L3685.25 39.0461Z"
            fill="black"
          />
          <path
            d="M3798.64 39.0461L3741.95 0.845459L3855.34 0.845463L3798.64 39.0461Z"
            fill="black"
          />
          <path
            d="M3912.04 39.0461L3855.34 0.845459L3968.73 0.845463L3912.04 39.0461Z"
            fill="black"
          />
          <path
            d="M4025.43 39.0461L3968.73 0.845459L4082.12 0.845463L4025.43 39.0461Z"
            fill="black"
          />
          <path
            d="M4138.82 39.0461L4082.12 0.845459L4195.52 0.845463L4138.82 39.0461Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  )
}

export default PageBanner
