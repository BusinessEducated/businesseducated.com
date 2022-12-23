const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;

const app = require('express')();
const Stripe = require('stripe')(keySecret);

const express = require('express');
const router = express.Router();

app.post(
  "/create-payment-intent",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { currency, paymentMethodType, paymentMethodOptions }: { currency: string, paymentMethodType: string, paymentMethodOptions?: object  } = req.body;
    // Create a PaymentIntent with the order amount and currency.
    const params: Stripe.PaymentIntentCreateParams = {
      amount: 5999,
      currency,
      payment_method_types: [paymentMethodType],
    };

    // If this is for an ACSS payment, we add payment_method_options to create
    // the Mandate.
    if (paymentMethodType === "acss_debit") {
      params.payment_method_options = {
        acss_debit: {
          mandate_options: {
            payment_schedule: "sporadic",
            transaction_type: "personal",
          },
        },
      };
    } else if (paymentMethodType === 'customer_balance') {
      params.payment_method_data = {
        type: 'customer_balance',
      } as any
      params.confirm = true
      params.customer = req.body.customerId || await stripe.customers.create().then(data => data.id)
    }

    /**
     * If API given this data, we can overwride it
     */
    if (paymentMethodOptions) {
      params.payment_method_options = paymentMethodOptions
    }

    try {
      const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create(
        params
      );

      // Send publishable key and PaymentIntent client_secret to client.
      res.send({
        clientSecret: paymentIntent.client_secret,
        nextAction: paymentIntent.next_action,
      });
    } catch (e) {
      res.status(400).send({
        error: {
          message: e.message,
        }
      });
    }
  }
);

// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard:
// https://dashboard.stripe.com/test/webhooks
app.post(
  "/webhook",
  // Use body-parser to retrieve the raw body as a buffer.
  bodyParser.raw({ type: "application/json" }),
  async (req: express.Request, res: express.Response): Promise<void> => {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers["stripe-signature"],
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      res.sendStatus(400);
      return;
    }

    // Extract the data from the event.
    const data: Stripe.Event.Data = event.data;
    const eventType: string = event.type;

    if (eventType === "payment_intent.succeeded") {
      // Cast the event into a PaymentIntent to make use of the types.
      const pi: Stripe.PaymentIntent = data.object as Stripe.PaymentIntent;
      // Funds have been captured
      // Fulfill any orders, e-mail receipts, etc
      // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds).
      console.log(`🔔  Webhook received: ${pi.object} ${pi.status}!`);
      console.log("💰 Payment captured!");
    } else if (eventType === "payment_intent.payment_failed") {
      // Cast the event into a PaymentIntent to make use of the types.
      const pi: Stripe.PaymentIntent = data.object as Stripe.PaymentIntent;
      console.log(`🔔  Webhook received: ${pi.object} ${pi.status}!`);
      console.log("❌ Payment failed.");
    }
    res.sendStatus(200);
  }
);

//export router so the server can find this controller
module.exports = router;