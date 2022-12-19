import React from 'react';

export const Button = ({children,props}) => {
  return (
      <button
        {...props}
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-BEred px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
       {children}
      </button>
  )
}


export default Button;