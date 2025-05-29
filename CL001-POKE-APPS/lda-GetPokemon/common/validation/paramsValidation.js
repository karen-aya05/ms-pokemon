const Joi = require('joi')

const pokemonValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z0-9-]+$/)
    .min(4)
    .max(25)
    .required()
    .messages({
      'string.pattern.base': 'Name must only contain letters',
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters',
      'string.max': 'Name must be at most 25 characters',
      'any.required': 'Name is required'
    })
})

const pokemonValidation = (data) => pokemonValidationSchema.validate(data)

module.exports = { pokemonValidation }
