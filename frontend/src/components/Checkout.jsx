import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Checkout = ({ amount }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    // const response = await fetch('http://localhost:5000/api/checkout', {
    const response = await fetch(`${process.env.REACT_APP_API_KEY}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      4.99
    </button>
  );
};

export default Checkout;
