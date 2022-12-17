import React from 'react';
import { BuildingOfficeIcon, CreditCardIcon, UserIcon, UsersIcon } from '@heroicons/react/20/solid'


//#region tabs type a 
const tabs = [
  { name: 'My Account', href: '#', icon: UserIcon, current: false },
  { name: 'Company', href: '#', icon: BuildingOfficeIcon, current: false },
  { name: 'Team Members', href: '#', icon: UsersIcon, current: true },
  { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
]

function classNames1(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TabA = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames1(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <tab.icon
                  className={classNames1(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

//#endregion

//#region tabs type b
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const tabs2 = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames2(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TabB = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs2.find((tab) => tab.current).name}
        >
          {tabs2.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs2.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames2(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
//#endregion


//#region tabs with underline 
const tabs3 = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

function classNames3(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TabUnerline = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs3.find((tab) => tab.current).name}
        >
          {tabs3.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs3.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames3(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

//#endregion


//#region tabs with badges 
const tabs4 = [
  { name: 'Applied', href: '#', count: '52', current: false },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]

function classNames4(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const TabBadges = () => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs4.find((tab) => tab.current).name}
        >
          {tabs4.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs4.map((tab) => (
              <a
                key={tab.name}
                href="#"
                className={classNames4(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                  'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
                {tab.count ? (
                  <span
                    className={classNames4(
                      tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                      'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                    )}
                  >
                    {tab.count}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

//#endregion 