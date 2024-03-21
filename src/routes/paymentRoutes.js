const express = require('express');
const paymentRoutes = express.Router();
const { createPaymentController, retrievePaymentController, cancelPaymentController, refundPaymentController } = require('../controllers/paymentController');

paymentRoutes.post('/create-payment', createPaymentController);
paymentRoutes.get('/retrieve-payment/:paymentId', retrievePaymentController);
paymentRoutes.delete('/cancel-payment/:paymentId', cancelPaymentController);
paymentRoutes.post('/refund-payment/:paymentId', refundPaymentController);

module.exports = paymentRoutes;
