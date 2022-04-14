// có nghĩa khi trỏ về http://localhost:8888/.netlify/functions/create-payment-intent---> xuất hiện hello
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    console.log(event);
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body);
    console.log(cart);
    const calculateOrderAmount = () => {
      return total_amount + shipping_fee;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: e.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: "Create payment intent",
  };
};
