const Joi = require('joi');

const customerCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/),
});

const customerUpdateSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/),
});

module.exports = {
  customerCreateSchema,
  customerUpdateSchema
};
