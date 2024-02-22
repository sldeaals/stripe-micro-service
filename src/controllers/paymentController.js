const stripeService = require('../services/stripeService');

exports.createPayment = async (req, res, next) => {
  try {
    const paymentIntent = await stripeService.createPaymentIntent(req.body.amount);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

exports.retrievePayment = async (req, res, next) => {
  try {
    const payment = await stripeService.retrievePayment(req.params.paymentId);
    res.json(payment);
  } catch (error) {
    next(error);
  }
};
