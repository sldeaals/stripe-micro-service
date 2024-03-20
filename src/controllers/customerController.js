const { createCustomer, findCustomer, updateCustomer, deleteCustomer }  = require('../services/customerService');
const { customerCreateSchema, customerUpdateSchema } = require('../models/customerSchema');

async function createCustomerController(req, res, next) {
  try {
    const { error } = customerCreateSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, name, phone } = req.body;
    const customer = await createCustomer(email, name, phone);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
}

async function findCustomerController(req, res, next) {
  try {
    const { customerId } = req.params;
    const customer = await findCustomer(customerId);
    res.json(customer);
  } catch (error) {
    next(error);
  }
}

async function updateCustomerController(req, res, next) {
    try {
      const { customerId } = req.params;
      
      const { error } = customerUpdateSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      
      const { email, name, phone } = req.body;
      const updatedCustomer = await updateCustomer(customerId, email, name, phone);
      res.json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  }

async function deleteCustomerController(req, res, next) {
  try {
    const { customerId } = req.params;
    await deleteCustomer(customerId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCustomerController,
  findCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
