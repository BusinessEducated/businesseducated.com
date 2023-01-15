import React from 'react'
import Layout from '../../layout/layout'
import SEO from '../../layout/seo'
import { ArrowStepper } from '../../components/forms/stepper'
import * as Yup from 'yup'

import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftIcon,
  CheckIcon,
  MapIcon,
} from '@heroicons/react/20/solid'
import {
  Bars3CenterLeftIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HandRaisedIcon,
  PhoneIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import Checkout from '../../components/forms/checkout'
import { navigate } from 'gatsby'
import { useStore } from '../../store/store'

function CheckoutPage({ location }) {
  //TODO: dont use three sources of bookingData, we only need one
  const urlParams = new URLSearchParams(window.location.search)
  const bookingData =
    location?.state?.bookingData || JSON.parse(urlParams.get('bookingData'))
  const bookingForm = useStore((state) => state.bookingForm.form)
  //localhost:8000/booking/checkout/?bookingData&payment_intent=pi_3MPjxYAZwRfGaddS0NovQbwi&payment_intent_client_secret=pi_3MPjxYAZwRfGaddS0NovQbwi_secret_brWKqMOIpjrzajckkL0HBFNlQ&
  // http: redirect_status = succeeded
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="mt-24">
        <Checkout
          bookingData={bookingData || bookingForm}
          goBack={() => navigate('/booking', { state: bookingData })}
          key={`booking-checkout`}
        />
      </section>
    </Layout>
  )
}

export default CheckoutPage
