import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js'
import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import Button from '../../button'
import { useStore } from '../../../store/store'
import { useLocalStorage } from '../../util/customHooks'
// import './App.css'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
const baseUrl = `${process.env.SERVER_API_URL}stripe`

export default function StripeCard({ children, handleCheckout, disabled }) {
  const [clientSecret, setClientSecret] = useState('')
  const [amount, setAmount] = useState(0)
  const [bookingState, setBookingState] = useLocalStorage(`booking-state`, {
    name: 'Aiden Faulconer',
    duration: 1,
  })

  useEffect(() => {
    const headers = {
      'sec-fetch-mode': null,
      'sec-fetch-site': null,
      // 'Access-Control-Allow-Methods': null, //important, only the server has the privilege of using these headers
      // 'Access-Control-Allow-Origin': null, //important, only the server has the privilege of using these headers
      'Content-Type': 'application/json',
    }
    const data = JSON.stringify({
      items: [
        {
          id: `consultant-${bookingState.consultant?.name
            ?.toLowerCase()
            ?.replace(' ', '')}`,
          duration: bookingState?.duration,
        },
      ],
    })

    // Create PaymentIntent as soon as the page loads
    axios
      .post(`${baseUrl}/create-payment-intent`, data, {
        // method: 'POST',
        headers,
      })
      .then(({ data: { clientSecret, amount, currency, status } }) => {
        setClientSecret(clientSecret)
        setAmount(amount)
      })
  }, [])

  const appearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#e10505',
    },
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="stripe-checkout">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm
            amount={amount}
            handleCheckout={handleCheckout}
            disabled={disabled}
            bookingData={bookingState}
          />
        </Elements>
      )}
    </div>
  )
}

export const CheckoutForm = ({
  amount = 0,
  handleCheckout,
  disabled,
  bookingData = {},
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [paymentState, setPaymentState] = useLocalStorage(`payment-state`, {
    paymentIntent: '',
    redirectStatus: '',
    paymentIntentClientSecret: '',
  })

  useEffect(() => {
    if (!stripe) return

    const clientSecret = new URLSearchParams(
      typeof window !== 'undefined' && window.location.search,
    ).get('payment_intent_client_secret')

    if (!clientSecret) return

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          const urlParams = new URLSearchParams(
            typeof window !== 'undefined' && window.location.search,
          )
          //prettier-ignore
          const paymentIntentClientSecret = urlParams.get('payment_intent_client_secret')
          const paymentIntent = urlParams.get('payment_intent')
          const redirectStatus = urlParams.get('redirect_status') || 'none'
          setPaymentState({
            paymentIntent,
            redirectStatus,
            paymentIntentClientSecret,
          })
          setMessage('Payment succeeded!')
          break
        case 'processing':
          setMessage('Your payment is processing.')
          break
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.')
          break
        default:
          setMessage('Something went wrong.')
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const redirectUrl =
      process.env.NODE_ENV === 'development'
        ? //prettier-ignore
          `http://localhost:8000/booking/checkout`
        : //prettier-ignore
          `https://${process.env.DOMAIN_NAME}/booking/checkout`

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: redirectUrl,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message)
    } else {
      setMessage('An unexpected error occurred.')
    }

    setIsLoading(false)
  }

  const formatCurrency = React.useCallback(
    (amount) => {
      return (
        '$' + (amount / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      )
    },
    [amount],
  )

  const paymentElementOptions = {
    layout: 'tabs',
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement
        id="payment-element"
        className="gap-6"
        options={paymentElementOptions}
      />

      <div className="border-t border-gray-200 py-6">
        <Button
          onClick={handleSubmit}
          className="w-full rounded-md border border-transparent bg-red-600 py-3 px-4 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          disabled={disabled || isLoading || !stripe || !elements}
          id="submit"
        >
          Confirm Order {formatCurrency(amount)}
          <span id="button-text">
            {isLoading && <div className="spinner" id="spinner"></div>}
          </span>
        </Button>
      </div>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
