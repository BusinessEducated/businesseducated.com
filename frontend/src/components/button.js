import React from 'react';

import { EnvelopeIcon } from '@heroicons/react/20/solid'

export const Button = ({children,props}) => {
  return (
    <>
      {/* <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Button text
        <EnvelopeIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Button text
        <EnvelopeIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Button text
        <EnvelopeIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
      </button> */}
      <button
        {...props}
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-BEred px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
       {children}
      </button>
    </>
  )
}


export default Button;