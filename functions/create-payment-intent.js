// domain/.netlify/functions/create-payment-intent
require("dotenv").config();

const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, totalAmount, shippingFee } = JSON.parse(event.body);

    const calculateOrderTotal = () => {
      // From the Stripe docs - normally we would connect with our backend here and properly calculate the amount by iterating over the cart and getting the correct monetary values

      // Calculate the order total on the server to prevent
      // people from directly manipulating the amount on the client

      return totalAmount + shippingFee;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderTotal(),
        currency: "gbp",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: "payment",
    };
  }
};
