/* eslint-disable react/no-unescaped-entities */
import { Link } from 'gatsby'
import React from 'react'
import { SmallBadge } from './badge'

//#region two choice feature
export const FeatureTwoChoice = ({
  headline = {
    title: 'The Fine Details',
    description: `
              Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
              all-day adventures, long shifts at work, and tough travel schedules.`,
  },
  features = [
    {
      title: 'title',
      description: `
                The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                combination of on-the-go treats that your heart desires. Yes, we did the math.`,
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
      imageAlt:
        'Drawstring top with elastic loop closure and textured interior padding.',
    },
  ],
}) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {headline.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              {headline.description}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {features.map(({ description, imageAlt, imageSrc, title }) => (
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg hover:-translate-y-5 translate-y-0 ease-in-out transition-all">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-fill object-center"
                  />
                </div>
                <h3
                  id="details-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-3"
                >
                  {title}
                </h3>
                <p className="mt-8 text-base text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
//#endregion

//#region feature with specs underneath
const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and polycarbonate add-ons.',
  },
  { name: 'Dimensions', description: '15" x 3.75" x .75"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  {
    name: 'Includes',
    description:
      'Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder',
  },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]

export const FeatureSpecs = () => {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day
            long. Procrastinate your work while you meticulously arrange items
            into dedicated trays.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
//#endregion

//#region feature breakdown
const features2 = [
  {
    name: 'Adventure-ready',
    description:
      'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Minimal and clean',
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Organized',
    description:
      'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

export const FeatureBreakdown = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:py-32 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-gray-500">Drawstring Canister</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Use it your way
            </p>
            <p className="mt-4 text-gray-500">
              The Drawstring Canister comes with multiple strap and handle
              options to adapt throughout your day. Shoulder sling it, backpack
              it, or handy carry it.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {features2.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
//#endregion

//#region base
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Feature = ({
  features = [
    {
      name: 'Minimal and thoughtful',
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
      imageAlt:
        'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features3 durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
  ],
  headline = {
    title: 'Protect your device',
    description: `As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
            fabric sleeve that matches in quality and looks.`,
  },
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-6">
          <h2 className="font-bold tracking-tight text-gray-900 sm:text-5xl text-4xl mb-6">
            {headline.title}
          </h2>
          <p className="mt-4 text-gray-500 text-left">{headline.description}</p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map(
            ({ name, description, imageAlt, imageSrc, href }, featureIdx) => (
              <div
                key={name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-1'
                      : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4',
                  )}
                >
                  <h3 className="text-2xl text-gray-900 mb-6 font-bold">
                    {name}
                  </h3>
                  <p className="mt-2 text-gray-500 text-md">{description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? 'lg:col-start-6 xl:col-start-5'
                      : 'lg:col-start-1',
                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8',
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100 shadow-2xl hover:-translate-y-5 translate-y-0 ease-in-out transition-all">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

//#endregion

//#region feature row
export const FeatureRow = ({
  features = [
    {
      name: 'Three card types',
      description:
        'Today, Next, and Someday cards allow you to defer your dreams into the future.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'The perfect mix',
      description:
        'Each refill pack contains plenty of cards to last you a month of procrastination.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'Dot grid backs',
      description:
        'Flip a card over to doodle during meetings when you should be listening.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg',
      imageAlt:
        'Detail of white today card, beige next card, and brown someday card with dot grid.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'Refill packs',
      description:
        'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg',
      imageAlt:
        'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
      href: '',
      tags: [],
      date: '',
    },
  ],
  headline = {
    subTitle: null,
    title: 'Simple productivity',
    description: `Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting
            digital apps and embrace these small, sturdy pieces of paper.`,
  },
}) => {
  return (
    features.length > 0 && (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl">
            {headline.subTitle && (
              <h2 id="features4-heading" className="font-medium text-gray-500">
                Focus
              </h2>
            )}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {headline.title}
            </p>
            <p className="mt-4 text-gray-500">{headline.description}</p>
          </div>

          <div className="mt-11 grid grid-cols-1 items-start gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map(
              ({ href, date, tags, imageAlt, imageSrc, name, description }) => (
                <Link
                  to={href || ''}
                  key={name + imageSrc}
                  className="flex flex-col-reverse"
                >
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-900">
                      {name}
                    </h3>
                    {date && (
                      <time
                        datetime={date}
                        className="mt-2 text-sm text-gray-500"
                      />
                    )}
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
                    {/* {tags?.length > 0 &&
                    tags.forEach((tag) => <SmallBadge>{tag}</SmallBadge>)
                  } */}
                  </div>
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="hover:p-6 p-0 ease-in-out transition-all object-cover shadow-xl object-center"
                    />
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    )
  )
}

//#endregion

//#region custom row/col
export const FeatureRowCol = ({
  row = true,
  features = [
    {
      name: 'Three card types',
      description:
        'Today, Next, and Someday cards allow you to defer your dreams into the future.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-01.jpg',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'The perfect mix',
      description:
        'Each refill pack contains plenty of cards to last you a month of procrastination.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-02.jpg',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'Dot grid backs',
      description:
        'Flip a card over to doodle during meetings when you should be listening.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-03.jpg',
      imageAlt:
        'Detail of white today card, beige next card, and brown someday card with dot grid.',
      href: '',
      tags: [],
      date: '',
    },
    {
      name: 'Refill packs',
      description:
        'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/product-feature-08-detail-04.jpg',
      imageAlt:
        'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
      href: '',
      tags: [],
      date: '',
    },
  ],
  headline = {
    subTitle: null,
    title: 'Simple productivity',
    description: `Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting
            digital apps and embrace these small, sturdy pieces of paper.`,
  },
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl pb-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-wrap gap-4 flex-row items-center  gap-x-6  lg:gap-x-8">
          {features.map(
            ({ href, date, tags, imageAlt, imageSrc, name, description }) => (
              <Link
                to={href || ''}
                key={name + imageSrc}
                className="flex flex-col-reverse"
              >
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900">{name}</h3>
                  {date && (
                    <time
                      datetime={date}
                      className="mt-2 text-sm text-gray-500"
                    />
                  )}
                  <p className="mt-2 text-sm text-gray-500">{description}</p>
                  {/* {tags?.length > 0 &&
                    tags.forEach((tag) => <SmallBadge>{tag}</SmallBadge>)
                  } */}
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="hover:p-6 p-0 ease-in-out transition-all object-cover shadow-xl object-center"
                  />
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

//#endregion
