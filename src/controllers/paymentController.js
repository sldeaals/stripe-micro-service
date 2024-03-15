const { createPayment, retrievePayment, cancelPayment, refundPayment } = require('../services/stripeService');

const createPaymentController = async (req, res, next) => {
  try {
    const paymentIntent = await createPayment(req.body.amount);
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
};

const retrievePaymentController = async (req, res, next) => {
  try {
    const payment = await retrievePayment(req.params.paymentId);
    res.json(payment);
  } catch (error) {
    next(error);
  }
};

const cancelPaymentController = async (req, res, next) => {
  try {
    const { paymentId } = req.params;
    const canceledPayment = await cancelPayment(paymentId);
    res.status(200).json(canceledPayment);
  } catch (error) {
    next(error);
  }
};

const refundPaymentController = async (req, res, next) => {
  try {
    const { paymentId } = req.params;
    const { amount } = req.body;
    const refundedPayment = await refundPayment(paymentId, amount);
    res.status(200).json(refundedPayment);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPaymentController,
  retrievePaymentController,
  cancelPaymentController,
  refundPaymentController,
};
