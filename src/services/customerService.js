const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createCustomer(email, name) {
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      phone,
    });
    return customer;
  } catch (error) {
    throw new Error(`Failed to create customer: ${error.message}`);
  }
}

async function findCustomer(customerId) {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    return customer;
  } catch (error) {
    throw new Error(`Failed to retrieve customer: ${error.message}`);
  }
}

async function updateCustomer(customerId, email, name, phone) {
  try {
    const updatedCustomer = await stripe.customers.update(customerId, {
      email,
      name,
      phone,
    });
    return updatedCustomer;
  } catch (error) {
    throw new Error(`Failed to update customer: ${error.message}`);
  }
}

async function deleteCustomer(customerId) {
  try {
    await stripe.customers.del(customerId);
  } catch (error) {
    throw new Error(`Failed to delete customer: ${error.message}`);
  }
}

module.exports = {
  createCustomer,
  findCustomer,
  updateCustomer,
  deleteCustomer,
};
