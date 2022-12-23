import React from 'react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Button = ({ children, ...props }) => {
  console.info(props)
  return (
    <button 
      {...props}
      type="button"
      className={classNames("inline-flex whitespace-nowrap items-center rounded-full border border-transparent bg-BEred px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-white hover:drop-shadow hover:shadow-BEred hover:text-black ease-in-out transition-all focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer focus:ring-offset-2 z-20")}
    >
      {children}
    </button>
  )
}


export default Button;