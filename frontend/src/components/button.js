import React from 'react';

export const Button = ({children,props}) => {
  return (
      <button
        {...props}
        type="button"
        className="inline-flex whitespace-nowrap items-center rounded-full border border-transparent bg-BEred px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-white hover:drop-shadow hover:shadow-BEred hover:text-black ease-in-out transition-all focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer focus:ring-offset-2"
      >
       {children}
      </button>
  )
}


export default Button;