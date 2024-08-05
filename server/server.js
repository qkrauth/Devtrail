import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import Stripe from 'stripe'
// const Stripe = require('stripe');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const corsOptions ={
  origin:process.env.FRONTEND_URL, 
  credentials:true,       
  optionSuccessStatus:200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/chat', chatRoutes);

// app.post('/makepayment', async (req, res) => {
//   const { amount } = req.body; // payment amount from req.body

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     }); //creates payment intent with USD using Stripe API

//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });

//   } catch (error) {
//     res.status(500).send({ error: error.message });
//   }
// });

app.post('/api/checkout', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'DevTrail Service',
            },
            unit_amount: 499, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('up and running!');
});

app.get('/', (req, res) => {
    res.send('up and running!');
  });

app.listen(port, () => console.log(`Server started on port ${port}`));
