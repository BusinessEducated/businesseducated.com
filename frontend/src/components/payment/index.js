import React from 'react';
import ReactDOM from 'react-dom'; 
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

export const StripeWrapper = async ({children}) => {
  const {publishableKey} = await fetch('/config').then((r) => r.json());
  const stripePromise = loadStripe(publishableKey);

  return (
      <Elements stripe={stripePromise}>
        {children}
      </Elements> 
  ); 
}

export default StripeWrapper;