const express = require('express');
const router = express.Router();
const { createPaymentController, retrievePaymentController, cancelPaymentController, refundPaymentController } = require('../controllers/paymentController');

router.post('/create-payment', createPaymentController);
router.get('/retrieve-payment/:paymentId', retrievePaymentController);
router.delete('/cancel-payment/:paymentId', cancelPaymentController);
router.post('/refund-payment/:paymentId', refundPaymentController);

module.exports = router;
