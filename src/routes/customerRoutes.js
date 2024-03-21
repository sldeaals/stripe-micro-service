const express = require('express');
const customerRoutes = express.Router();
const { createCustomerController, findCustomerController, updateCustomerController, deleteCustomerController } = require('../controllers/customerController');

customerRoutes.post('/', createCustomerController);
customerRoutes.get('/:customerId', findCustomerController);
customerRoutes.put('/:customerId', updateCustomerController);
customerRoutes.delete('/:customerId', deleteCustomerController);

module.exports = customerRoutes;
