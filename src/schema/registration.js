// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

const registrationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = registrationSchema;
