const Joi = require('joi');

const customerAddressSchema = Joi.object({
  line1: Joi.string().required(),
  line2: Joi.string().allow('').optional(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  postal_code: Joi.string().pattern(/^\d{5}(?:[-\s]\d{4})?$/).required(),
  country: Joi.string().length(2).uppercase().required(),
});

const customerCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/),
  address: customerAddressSchema,
});

const customerUpdateSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/),
  address: customerAddressSchema,
});

module.exports = {
  customerCreateSchema,
  customerUpdateSchema,
  customerAddressSchema
};
