const express = require('express');
const router = express.Router();

const paymentRoutes = require('./paymentRoutes');
const customerRoutes = require('./customerRoutes');

router.use('/payments', paymentRoutes);
router.use('/customers', customerRoutes);

module.exports = router;
