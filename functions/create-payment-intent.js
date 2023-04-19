// domain/.netlify/functions/create-payment-intent

exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, totalAmount, shippingFee } = JSON.parse(event.body);

    console.log(cart);
    return {
      statusCode: 200,
      body: "payment",
    };
  } else {
    return {
      statusCode: 200,
      body: "payment",
    };
  }
};
