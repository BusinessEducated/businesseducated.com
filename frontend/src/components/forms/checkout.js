import React, { Fragment, useState } from 'react'
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
import { useStore } from '../../store/store'
import { logo, logoText } from '../../../static/svgs'
import { Switch } from '@headlessui/react'
import { Link } from 'gatsby'
import Button from '../button'

import StripeCheckout, {
  CheckoutForm,
} from '../../components/forms/fields/stripe-card'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const deliveryMethods = [
  {
    id: 1,
    title: 'Standard',
    turnaround: '4–10 business days',
    price: '$5.00',
  },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Checkout = ({
  action = `http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}${process.env.API_ENDPOINT}booking`,
  goBack = () => {},
}) => {
  const [open, setOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0],
  )
  const bookingForm = useStore((state) => state.bookingForm.form)

  const handleCheckout = async (e) => {
    if (agreed) {
      const headers = {
        // 'sec-fetch-mode': null,
        // 'sec-fetch-site': null,
        // 'referrerPolicy': null,
        // 'Access-Control-Allow-Origin': `http://${process.env.DOMAIN_NAME}:${process.env.SERVER_PORT}, *`,
        'Access-Control-Allow-Methods': null, //important, only the server has the privaledge of using these headers
        'Access-Control-Allow-Origin': null, //important, only the server has the privaledge of using these headers
        'Content-Type': 'application/json',
      }

      const body = JSON.stringify({ ...bookingForm })

      axios
        .post(action, body, { headers })
        .then((d) => {
          console.log(d)
          debugger
          // Set the formDisabled state variable to true for the next 24 hours
          // Save the current time in local storage as the expiration time for the form
          // setFormExpiry(Date.now())
          // setFormDisabled(true)
        })
        .catch((err) => console.error(err))
    }
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

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
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
                  <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                </div>

                <StripeCheckout
                  handleCheckout={handleCheckout}
                  disabled={!agreed}
                />

                <div className="sm:col-span-2 my-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
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
                  <div className="ml-3">
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
                  {Object.keys(bookingForm).map((key) => (
                    <li
                      key={key}
                      className="flex flex-wrap py-1 gap-2 justify-between px-2 sm:px-6 col-span-3 items-center"
                    >
                      <p className="font-bold text-lg">{key}:</p>
                      {bookingForm[key]?.name ? (
                        <>
                          {bookingForm[key].name}
                          <img
                            src={bookingForm[key].imageSrc}
                            className="w-8 h-8 inline rounded-full"
                          />
                        </>
                      ) : bookingForm[key]?.value ? (
                        <>{bookingForm[key].value}</>
                      ) : (
                        bookingForm[key]
                      )}
                      {JSON.stringify(bookingForm[key])}
                    </li>
                  ))}
                </ul>
                <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      $ {bookingForm.consultant.rate * bookingForm.duration}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">GST</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${' '}
                      {bookingForm.consultant.rate * bookingForm.duration * 0.1}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                      {bookingForm.consultant.rate *
                        bookingForm.duration *
                        0.1 +
                        bookingForm.consultant.rate * bookingForm.duration}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Checkout
