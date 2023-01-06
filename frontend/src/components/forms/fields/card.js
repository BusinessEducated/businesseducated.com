import React from 'react'
import { Elements, PaymentElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export const CardInput = () => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentElement />
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700">
          Card Details
        </legend>
        <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
          <div>
            <label htmlFor="card-number" className="sr-only">
              Card number
            </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
              placeholder="Card number"
            />
          </div>
          <div className="flex -space-x-px">
            <div className="w-1/2 min-w-0 flex-1">
              <label htmlFor="card-expiration-date" className="sr-only">
                Expiration date
              </label>
              <input
                type="text"
                name="card-expiration-date"
                id="card-expiration-date"
                className="relative block w-full rounded-none rounded-bl-md border-gray-300 bg-transparent focus:z-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="MM / YY"
              />
            </div>
            <div className="min-w-0 flex-1">
              <label htmlFor="card-cvc" className="sr-only">
                CVC
              </label>
              <input
                type="text"
                name="card-cvc"
                id="card-cvc"
                className="relative block w-full rounded-none rounded-br-md border-gray-300 bg-transparent focus:z-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm font-medium text-gray-700">
          Billing address
        </legend>
        <div className="mt-1 -space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="relative block w-full rounded-none rounded-t-md border-gray-300 bg-transparent focus:z-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal-code" className="sr-only">
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="relative block w-full rounded-none rounded-b-md border-gray-300 bg-transparent focus:z-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
              placeholder="ZIP / Postal code"
            />
          </div>
        </div>
      </fieldset>
    </Elements>
  )
}

export default CardInput

// <fieldset className="mt-4">
//   <legend className="sr-only">Payment type</legend>
//   <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
//     {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
//       <div key={paymentMethod.id} className="flex items-center">
//         {paymentMethodIdx === 0 ? (
//           <input
//             id={paymentMethod.id}
//             name="payment-type"
//             type="radio"
//             defaultChecked
//             className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
//           />
//         ) : (
//           <input
//             id={paymentMethod.id}
//             name="payment-type"
//             type="radio"
//             className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-500"
//           />
//         )}

//         <label
//           htmlFor={paymentMethod.id}
//           className="ml-3 block text-sm font-medium text-gray-700"
//         >
//           {paymentMethod.title}
//         </label>
//       </div>
//     ))}
//   </div>
// </fieldset> */}

// {/* <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
//   <div className="col-span-4">
//     <label
//       htmlFor="card-number"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Card number
//     </label>
//     <div className="mt-1">
//       <input
//         type="text"
//         id="card-number"
//         name="card-number"
//         autoComplete="cc-number"
//         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//       />
//     </div>
//   </div>

//   <div className="col-span-4">
//     <label
//       htmlFor="name-on-card"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Name on card
//     </label>
//     <div className="mt-1">
//       <input
//         type="text"
//         id="name-on-card"
//         name="name-on-card"
//         autoComplete="cc-name"
//         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//       />
//     </div>
//   </div>

//   <div className="col-span-3">
//     <label
//       htmlFor="expiration-date"
//       className="block text-sm font-medium text-gray-700"
//     >
//       Expiration date (MM/YY)
//     </label>
//     <div className="mt-1">
//       <input
//         type="text"
//         name="expiration-date"
//         id="expiration-date"
//         autoComplete="cc-exp"
//         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//       />
//     </div>
//   </div>

//   <div>
//     <label
//       htmlFor="cvc"
//       className="block text-sm font-medium text-gray-700"
//     >
//       CVC
//     </label>
//     <div className="mt-1">
//       <input
//         type="text"
//         name="cvc"
//         id="cvc"
//         autoComplete="csc"
//         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//       />
//     </div>
//   </div>
// </div>
