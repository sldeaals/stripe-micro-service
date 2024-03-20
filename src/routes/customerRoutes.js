const express = require('express');
const router = express.Router();
const { createCustomerController, findCustomerController, updateCustomerController, deleteCustomerController } = require('../controllers/customerController');

router.post('/customers', createCustomerController);
router.get('/customers/:customerId', findCustomerController);
router.put('/customers/:customerId', updateCustomerController);
router.delete('/customers/:customerId', deleteCustomerController);

module.exports = router;
