const express = require('express')
const router = express.Router()

require('dotenv').config({
  path: `${__dirname}/../../../.env.${process.env.NODE_ENV}`,
})

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//'be-p-id-694263'
// const product = await stripe.products.create({ name: 'consultation' })
// const multiCurrencyPrice = await stripe.prices.retrieve('be-p-id-1269', {
//   expand: ['usd', 'aud', 'eur'],
// })
// const price = await stripe.prices.create({
//   nickname: 'consultation',
//   product: 'be-p-id-694263',
//   unit_amount: 180,
//   currency: 'aud',
// })

//go to https://dashboard.stripe.com/apikeys to learn more
//https://stripe.com/docs/products-prices/pricing-models#multicurrency
router.post('/create-checkout-session', async (req, res) => {
  const { rate, hours } = req.body
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell, we define ids of products/prices because the client cannot manipulate this easily
        price: 'be-p-id-1269',
        quantity: hours,
      },
    ],
    mode: 'payment',
    success_url: `https://${process.env.DOMAIN_NAME}/payment/success.html`,
    cancel_url: `https://${process.env.DOMAIN_NAME}/payment/cancel.html`,
    automatic_tax: { enabled: true },
  })

  res.redirect(303, session.url)
})

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 16000 //160$
}

router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'aud',
    automatic_payment_methods: {
      enabled: true,
    },
  })

  console.log(paymentIntent)

  res.send({
    status: 200,
    clientSecret: paymentIntent.client_secret,
  })
})

router.post('/validate-payment', async (req, res) => {
  // Retrieve the PaymentIntent with the specified ID
  const paymentIntent = await stripe.paymentIntents.retrieve(
    req.body.paymentIntentId,
  )

  // Check the PaymentIntent's status
  if (paymentIntent.status === 'succeeded') {
    // Payment was successful
    res.send({ success: true })
  } else {
    // Payment was not successful
    res.send({ success: false })
  }
})

const endpointSecret = 'we_1MLcARAZwRfGaddSHTpYYC2q'
// 'whsec_b54805899022ea533016e9a48534dce65b01d5f30ee36e787f15658b793caafe'

router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  (request, response) => {
    const sig = request.headers['stripe-signature']

    let event

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret)
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`)
      return
    }

    // Handle the event
    console.log(`Unhandled event type ${event.type}`)

    // Return a 200 response to acknowledge receipt of the event
    response.send()
  },
)

module.exports = router
