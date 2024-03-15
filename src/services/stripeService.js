const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPayment = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', // Change currency as needed
      payment_method_types: ['card'],
    });
    return paymentIntent;
  } catch (error) {
    throw new Error(`Failed to create PaymentIntent: ${error.message}`);
  }
};

const retrievePayment = async (paymentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);
    return paymentIntent;
  } catch (error) {
    throw new Error(`Failed to retrieve PaymentIntent: ${error.message}`);
  }
};

const cancelPayment = async (paymentId) => {
  try {
    const paymentIntent = await stripe.paymentIntents.cancel(paymentId);
    return paymentIntent;
  } catch (error) {
    throw new Error(`Failed to cancel PaymentIntent: ${error.message}`);
  }
};

const refundPayment = async (paymentId, amount) => {
  try {
    const refund = await stripe.refunds.create({
      payment_intent: paymentId,
      amount: amount,
    });
    return refund;
  } catch (error) {
    throw new Error(`Failed to refund payment: ${error.message}`);
  }
};

module.exports = {
  createPayment,
  retrievePayment,
  cancelPayment,
  refundPayment,
};
