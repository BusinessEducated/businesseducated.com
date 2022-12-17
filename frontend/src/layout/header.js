/* eslint-disable no-unused-vars */
import { graphql, useStaticQuery, Link } from 'gatsby'
import React, { useState, Fragment } from 'react'

import { Popover, Transition } from '@headlessui/react'
import logoSvg from "../../static/svgs/Frame 1000002265.svg"
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Header = () => {
  // const [isExpanded, toggleExpansion] = useState(false)
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return (
    <Popover className="w-[100vw] z-50 bg-white fixed">
      {/* NAV */}
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
                <img className="h-20 w-auto" src={logoSvg}/>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-BEred-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex"> 

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Podcast
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Booking
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-BEred-500 focus:ring-offset-2',
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500',
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-BEred-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-gray-500">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="truncate text-base"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-BEred-600 hover:text-BEred-500"
                            >
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium bg-BEred rounded-full text-white px-5 shadow-lg py-2 rotate-[-15deg] hover:rotate-[0deg] transition-all">
              Book Now
            </a> 
          </div>
        </div>
      </div>

      {/* MENU */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                    <div className="h-14 w-auto">
                    <svg  height="100%" viewBox="0 0 501 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M166.049 455.793L77.9298 479.49V230.633L166.049 214.736V455.793Z" fill="white" fillOpacity="0.5"/>
                      <path d="M166.049 455.793L77.9298 479.49V230.633L166.049 214.736V455.793Z" fill="white" fillOpacity="0.9"/>
                      <path d="M166.049 455.793L77.9298 479.49V230.633L166.049 214.736V455.793Z" stroke="#000064" strokeWidth="7.04224"/>
                      <path d="M147.421 0.70166C227.719 0.70166 249.618 29.9982 249.618 29.9982V132.543L118.222 73.9496L2.01416 118.964C2.01416 1.76969 147.421 0.70166 147.421 0.70166Z" fill="#000064"/>
                      <path d="M351.371 0.70166C271.073 0.70166 249.174 29.9982 249.174 29.9982V132.543L380.57 73.9496L496.778 118.964C496.778 1.76969 351.371 0.70166 351.371 0.70166Z" fill="#000064"/>
                      <path d="M330.912 157.113L424.213 166.65L435.474 162.836V65.5551H330.912V157.113Z" fill="#000064"/>
                      <path d="M330.926 311.62L422.18 334.51L437.381 324.972V262.026L332.827 263.934L330.926 311.62Z" fill="#000064"/>
                      <path d="M74.4105 484.081L0.12793 458.092V128.505C0.12793 11.3201 118.209 15.3356 118.209 15.3356C249.606 22.6604 249.606 103.226 249.606 147.171V549.997L162.008 517.626V324.955C162.008 281.01 74.4105 252.941 74.4105 298.738L74.4105 484.081Z" fill="#000064"/>
                      <path d="M329.012 204.801L471.604 227.691L329.012 258.21V204.801Z" fill="#000064"/>
                      <path d="M74.4043 132.528C74.4043 88.5831 162.002 103.231 162.002 147.182V249.714L74.4043 227.742V132.528Z" fill="white" fillOpacity="0.5"/>
                      <path d="M74.4043 132.528C74.4043 88.5831 162.002 103.231 162.002 147.182V249.714L74.4043 227.742V132.528Z" fill="white" fillOpacity="0.9"/>
                      <path d="M74.4043 132.528C74.4043 88.5831 162.002 103.231 162.002 147.182V249.714L74.4043 227.742V132.528Z" stroke="white" strokeOpacity="0.5" strokeWidth="7.04224"/>
                      <path d="M74.4043 132.528C74.4043 88.5831 162.002 103.231 162.002 147.182V249.714L74.4043 227.742V132.528Z" stroke="white" strokeOpacity="0.9" strokeWidth="7.04224"/>
                      <path d="M162.535 250.062L74.4043 227.741V132.527C74.4043 89.6362 162.535 99.1662 162.535 143.641V250.062Z" fill="white" fillOpacity="0.5"/>
                      <path d="M162.535 250.062L74.4043 227.741V132.527C74.4043 89.6362 162.535 99.1662 162.535 143.641V250.062Z" fill="white" fillOpacity="0.9"/>
                      <path d="M162.535 250.062L74.4043 227.741V132.527C74.4043 89.6362 162.535 99.1662 162.535 143.641V250.062Z" stroke="white" strokeOpacity="0.5" strokeWidth="7.04224"/>
                      <path d="M162.535 250.062L74.4043 227.741V132.527C74.4043 89.6362 162.535 99.1662 162.535 143.641V250.062Z" stroke="white" strokeOpacity="0.9" strokeWidth="7.04224"/>
                      <path d="M71.7276 226.136L71.5255 233.018L164.68 255.908L169.042 256.98V252.489V212.432V208.203L164.882 208.969L71.7276 226.136Z" fill="white" fillOpacity="0.5"/>
                      <path d="M71.7276 226.136L71.5255 233.018L164.68 255.908L169.042 256.98V252.489V212.432V208.203L164.882 208.969L71.7276 226.136Z" fill="white" fillOpacity="0.9"/>
                      <path d="M71.7276 226.136L71.5255 233.018L164.68 255.908L169.042 256.98V252.489V212.432V208.203L164.882 208.969L71.7276 226.136Z" stroke="#000064" strokeWidth="7.04224"/>
                      <path d="M333.681 244.857V248.857L337.648 248.35L468.085 231.689V318.459L425.691 329.91V294.451C425.691 289.74 424.021 285.743 421.076 282.632C418.192 279.584 414.242 277.542 409.845 276.308C401.084 273.85 389.778 274.371 378.734 277.471C356.795 283.627 333.681 300.741 333.681 328.786L333.681 518.159L253.125 545.1L253.126 534.484L253.126 493.229C253.127 458.897 253.127 412.664 253.128 365.058C253.129 269.845 253.129 169.139 253.125 147.168C253.122 125.077 253.197 94.951 269.023 69.3701C284.651 44.109 316.213 22.4886 381.087 18.8476C381.136 18.8481 381.205 18.8488 381.292 18.8502C381.503 18.8533 381.824 18.8595 382.246 18.8718C383.091 18.8962 384.343 18.9446 385.945 19.0404C389.148 19.2321 393.741 19.6132 399.258 20.3699C410.309 21.8859 424.972 24.8976 439.558 30.8592C454.15 36.8235 468.504 45.6742 479.146 58.778C489.738 71.8206 496.814 89.2717 496.602 112.802L496.602 112.818V112.834V148.507L427.592 162.354V130.41C427.592 119.692 421.095 111.757 412.177 106.918C403.314 102.109 391.739 100.117 380.337 101.09C368.919 102.065 357.309 106.045 348.484 113.606C339.568 121.245 333.681 132.397 333.681 147.169L333.681 244.857Z" fill="white" fillOpacity="0.5"/>
                      <path d="M333.681 244.857V248.857L337.648 248.35L468.085 231.689V318.459L425.691 329.91V294.451C425.691 289.74 424.021 285.743 421.076 282.632C418.192 279.584 414.242 277.542 409.845 276.308C401.084 273.85 389.778 274.371 378.734 277.471C356.795 283.627 333.681 300.741 333.681 328.786L333.681 518.159L253.125 545.1L253.126 534.484L253.126 493.229C253.127 458.897 253.127 412.664 253.128 365.058C253.129 269.845 253.129 169.139 253.125 147.168C253.122 125.077 253.197 94.951 269.023 69.3701C284.651 44.109 316.213 22.4886 381.087 18.8476C381.136 18.8481 381.205 18.8488 381.292 18.8502C381.503 18.8533 381.824 18.8595 382.246 18.8718C383.091 18.8962 384.343 18.9446 385.945 19.0404C389.148 19.2321 393.741 19.6132 399.258 20.3699C410.309 21.8859 424.972 24.8976 439.558 30.8592C454.15 36.8235 468.504 45.6742 479.146 58.778C489.738 71.8206 496.814 89.2717 496.602 112.802L496.602 112.818V112.834V148.507L427.592 162.354V130.41C427.592 119.692 421.095 111.757 412.177 106.918C403.314 102.109 391.739 100.117 380.337 101.09C368.919 102.065 357.309 106.045 348.484 113.606C339.568 121.245 333.681 132.397 333.681 147.169L333.681 244.857Z" fill="white" fillOpacity="0.9"/>
                      <path d="M333.681 244.857V248.857L337.648 248.35L468.085 231.689V318.459L425.691 329.91V294.451C425.691 289.74 424.021 285.743 421.076 282.632C418.192 279.584 414.242 277.542 409.845 276.308C401.084 273.85 389.778 274.371 378.734 277.471C356.795 283.627 333.681 300.741 333.681 328.786L333.681 518.159L253.125 545.1L253.126 534.484L253.126 493.229C253.127 458.897 253.127 412.664 253.128 365.058C253.129 269.845 253.129 169.139 253.125 147.168C253.122 125.077 253.197 94.951 269.023 69.3701C284.651 44.109 316.213 22.4886 381.087 18.8476C381.136 18.8481 381.205 18.8488 381.292 18.8502C381.503 18.8533 381.824 18.8595 382.246 18.8718C383.091 18.8962 384.343 18.9446 385.945 19.0404C389.148 19.2321 393.741 19.6132 399.258 20.3699C410.309 21.8859 424.972 24.8976 439.558 30.8592C454.15 36.8235 468.504 45.6742 479.146 58.778C489.738 71.8206 496.814 89.2717 496.602 112.802L496.602 112.818V112.834V148.507L427.592 162.354V130.41C427.592 119.692 421.095 111.757 412.177 106.918C403.314 102.109 391.739 100.117 380.337 101.09C368.919 102.065 357.309 106.045 348.484 113.606C339.568 121.245 333.681 132.397 333.681 147.169L333.681 244.857Z" stroke="#000064" strokeWidth="7.04224"/>
                    </svg> 
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-BEred-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-BEred-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-BEred px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-BEred-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-BEred-600 hover:text-BEred-500">
                    Book
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
