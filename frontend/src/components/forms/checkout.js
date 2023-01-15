import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  CheckCircleIcon,
  ChevronDownIcon,
  TrashIcon,
} from '@heroicons/react/20/solid'
import Layout from '../../layout/layout'
import SEO from '../../layout/seo'
import { logo, logoText } from '../../../static/svgs'
import { Switch } from '@headlessui/react'
import { Link, graphql, url } from 'gatsby'
import Button from '../button'
import axios from 'axios'
import StripeCheckout, {
  CheckoutForm,
} from '../../components/forms/fields/stripe-card'
import { SmallBadge } from '../badge'
import { useLocalStorage } from '../util/customHooks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Checkout = ({
  action = `${SERVER_API_URL}booking`,
  goBack = () => {},
}) => {
  const [agreed, setAgreed] = useState(false)
  const [bookingState, setBookingState] = useLocalStorage(`booking-state`, {
    consultant: {
      name: 'Aiden Faulconer',
      rate: 150,
      email: 'aidenf09@yshoo.com',
    },
  })
  const [paymentState, setPaymentState] = useLocalStorage(`payment-state`, {
    paymentIntent: '',
    redirectStatus: '',
    paymentIntentClientSecret: '',
  })
  const [checkoutState, setCheckoutState] = useLocalStorage(
    'checkout-state',
    'none',
  )

  //example payment intent from stripe
  //http://localhost:8000/booking/?payment_intent=pi_3MPdNPAZwRfGaddS1VlhSLXf&payment_intent_client_secret=pi_3MPdNPAZwRfGaddS1VlhSLXf_secret_KdL9rDCWo6pIDUj6XtCqJIKHD&redirect_status=succeeded

  //check the checkout status and handle it to show the status of the booking, or the payment page
  useEffect(() => {
    //if no new booking, and a current booking has been made only show the booking state
    if (typeof checkoutState === 'object') {
    }
    //if payment suceeded, process booking
    else if (paymentState.redirectStatus === 'succeeded') {
      setCheckoutState('pending')
      handleCheckout(
        paymentState.paymentIntentClientSecret,
        paymentState.paymentIntent,
      )
    } else {
      setCheckoutState('none')
    }
  }, [, paymentState])

  const handleCheckout = async (paymentIntentClientSecret, paymentIntent) => {
    const headers = {
      'Access-Control-Allow-Methods': null,
      'Access-Control-Allow-Origin': null,
      'Content-Type': 'application/json',
    }
    const body = JSON.stringify({ ...bookingState })

    //process booking
    axios
      .post(
        `${action}?paymentIntentClientSecret=${paymentIntentClientSecret}&paymentIntent=${paymentIntent}`,
        body,
        { headers },
      )
      .then(({ data: { body, statusCode } }) => {
        if (statusCode === 200) {
          //show booking page
          console.log(body)
          setCheckoutState(JSON.parse(body))
        } else if (statuscode === 500) {
          //invalid payment id/invalid payment prompt user to contact us to resolve payment issues
        } else {
          //show error page
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8 mt-6">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>
          {(checkoutState === 'none' && (
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
              <div>
                {/* Payment */}
                <div className="mt-6 sticky">
                  <div className="flex md:gap-12 gap-6 align-center flex-nowrap mb-12">
                    <div
                      className="rounded-md px-3 hover:-translate-y-1 hover:drop-shadow-md hover:cursor-pointer transition-all bg-gray-300 text-white w-auto"
                      onClick={goBack}
                    >
                      Go Back
                    </div>
                    <h2 className="text-lg font-medium text-gray-900">
                      Payment
                    </h2>
                  </div>

                  <StripeCheckout
                    handleCheckout={handleCheckout}
                    disabled={agreed}
                    data={bookingState}
                    consultation={{
                      name: bookingState?.consultant?.name,
                      duration: bookingState.duration,
                    }}
                  />

                  <div className="sm:col-span-2 my-6 flex-nowrap flex">
                    <div className="flex items-start flex-nowrap">
                      <div className="flex-shrink-0">
                        <Switch
                          checked={agreed}
                          onChange={(e) => setAgreed(e?.value)}
                          className={classNames(
                            agreed ? 'bg-red-600' : 'bg-gray-200',
                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
                          )}
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              agreed ? 'translate-x-5' : 'translate-x-0',
                              'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                            )}
                          />
                        </Switch>
                      </div>
                    </div>
                    <div className="ml-3 w-full">
                      <p className="text-base text-gray-500">
                        By selecting this, you agree to the{' '}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          to="/terms-service"
                          className="font-medium text-gray-700 underline"
                        >
                          Terms of service{' '}
                        </Link>
                        and{' '}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          to="/tcs"
                          className="font-medium text-gray-700 underline"
                        >
                          Terms and Conditions{' '}
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order summary */}
              <div className="mt-10 lg:mt-0">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                  <h3 className="sr-only">Items in your cart</h3>
                  <div className="flex py-6 px-4 sm:px-6 w-full">
                    <div className="flex-shrink-0 w-3/4">
                      <div
                        dangerouslySetInnerHTML={{ __html: logo }}
                        className="w-20 rounded-md"
                      />
                    </div>
                  </div>

                  <ul
                    role="list"
                    className="divide-y divide-x divide-gray-200 grid grid-cols-6"
                  >
                    {Object.keys(bookingState).map((key) => (
                      <li
                        key={key}
                        className="flex flex-col py-1 gap-2 justify-between px-2 sm:px-6 col-span-3 items-start"
                        style={{ overflowWrap: 'anywhere' }}
                      >
                        <p className="font-bold text-base">{key}</p>
                        {bookingState[key]?.name ? (
                          <>
                            {bookingState[key].name}
                            <img
                              src={bookingState[key].imageSrc}
                              className="w-8 h-8 inline rounded-full"
                            />
                            {bookingState[key].rate}
                            {/* {bookingState[key].specialties.map((specialty) => (
                              <SmallBadge>specialty</SmallBadge>
                            ))} */}
                          </>
                        ) : bookingState[key]?.value ? (
                          <>{bookingState[key].value}</>
                        ) : (
                          bookingState[key]
                        )}
                        {/* {JSON.stringify(bookingState[key])} */}
                      </li>
                    ))}
                  </ul>
                  <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">Subtotal</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        $ {bookingState.consultant.rate * bookingState.duration}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-sm">GST</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ${' '}
                        {bookingState.consultant.rate *
                          bookingState.duration *
                          0.1}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                      <dt className="text-base font-medium">Total</dt>
                      <dd className="text-base font-medium text-gray-900">
                        {bookingState.consultant.rate *
                          bookingState.duration *
                          0.1 +
                          bookingState.consultant.rate * bookingState.duration}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )) ||
            (checkoutState === 'pending' && (
              <div>
                {/* loading booking */}
                Pending
                <div className="spinner" id="spinner"></div>
              </div>
            )) || (
              <div>
                {/* booking success summary */}
                <div className="mt-10 lg:mt-0">
                  <h2 className="text-lg font-medium text-gray-900">
                    Order summary
                  </h2>

                  <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                    <h3 className="sr-only">Items in your cart</h3>
                    <div className="flex py-6 px-4 sm:px-6 w-full">
                      <div className="flex-shrink-0 w-3/4">
                        <div
                          dangerouslySetInnerHTML={{ __html: logo }}
                          className="w-20 rounded-md"
                        />
                      </div>
                    </div>

                    <ul
                      role="list"
                      className="divide-y divide-x divide-gray-200 grid grid-cols-6"
                    >
                      {Object.keys(checkoutState).map((key) => (
                        <li
                          key={key}
                          className="flex flex-col py-1 gap-2 justify-between px-2 sm:px-6 col-span-3 items-start"
                          style={{ overflowWrap: 'anywhere' }}
                        >
                          <p className="font-bold text-base">{key}</p>
                          {checkoutState[key]?.name ? (
                            <>
                              {checkoutState[key].name}
                              <img
                                src={checkoutState[key].imageSrc}
                                className="w-8 h-8 inline rounded-full"
                              />
                              {checkoutState[key].rate}
                              {/* {checkoutState[key].specialties.map((specialty) => (
                              <SmallBadge>specialty</SmallBadge>
                            ))} */}
                            </>
                          ) : checkoutState[key]?.value ? (
                            <>{checkoutState[key].value}</>
                          ) : (
                            checkoutState[key]
                          )}
                          {/* {JSON.stringify(checkoutState[key])} */}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
        </div>
      </main>
    </>
  )
}

export default Checkout
