import React from 'react'

// export const Badge = () => {
//   return (
//     <>
//       <span className="inline-flex items-center rounded-full bg-red-100 py-0.5 pl-2 pr-0.5 text-xs font-medium text-red-700">
//         Small
//         <button
//           type="button"
//           className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white focus:outline-none"
//         >
//           <span className="sr-only">Remove small option</span>
//           <svg
//             className="h-2 w-2"
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 8 8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeWidth="1.5"
//               d="M1 1l6 6m0-6L1 7"
//             />
//           </svg>
//         </button>
//       </span>
//       <span className="inline-flex items-center rounded-full bg-red-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-red-700">
//         Large
//         <button
//           type="button"
//           className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white focus:outline-none"
//         >
//           <span className="sr-only">Remove large option</span>
//           <svg
//             className="h-2 w-2"
//             stroke="currentColor"
//             fill="none"
//             viewBox="0 0 8 8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeWidth="1.5"
//               d="M1 1l6 6m0-6L1 7"
//             />
//           </svg>
//         </button>
//       </span>
//     </>
//   )
// }

export const SmallBadge = ({ children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 py-0.5 pl-2 pr-0.5 text-xs font-medium text-red-700">
      {children}
      <button
        type="button"
        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white focus:outline-none"
      >
        {/* <span className="sr-only">Remove small option</span> */}
        {close && (
          <svg
            onClick={onClose}
            className="h-2 w-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        )}
      </button>
    </span>
  )
}
export const LargeBadge = ({ close = false, onClose = () => {}, children }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-red-700">
      {children}
      <button
        type="button"
        className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500 focus:text-white focus:outline-none"
      >
        {/* <span className="sr-only">Remove large option</span> */}
        {close && (
          <svg
            onClick={onClose}
            className="h-2 w-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        )}
      </button>
    </span>
  )
}

// export default Badge
