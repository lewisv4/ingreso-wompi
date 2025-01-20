const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe('your_stripe_secret_key');
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; 
  if (!amount) {
    return res.status(400).json({ error: 'Missing required param: amount' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // O la moneda que estés utilizando
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).send({ error: 'Failed to create payment intent' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
