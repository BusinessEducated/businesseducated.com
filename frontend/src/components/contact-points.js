import React from 'react';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const CompanySupport = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Technical Support</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, repellat error corporis doloribus
                similique, voluptatibus numquam quam, quae officiis facilis.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123 4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const CompanyContactLocations = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Get in touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Collaborate</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Press</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Join our team</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Say hello</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Locations</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Los Angeles</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>4556 Brendan Ferry</p>
                  <p className="mt-1">Los Angeles, CA 90210</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">New York</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>886 Walter Streets</p>
                  <p className="mt-1">New York, NY 12345</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Toronto</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>7363 Cynthia Pass</p>
                  <p className="mt-1">Toronto, ON N3Y 4H8</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Chicago</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>726 Mavis Island</p>
                  <p className="mt-1">Chicago, IL 60601</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default CompanySupport;