const Joi = require('joi')

const pokemonValidationSchema = Joi.object({
  name: Joi.string()
    .min(4)
    .max(25)
    .required()
    .messages({
      'string.base': 'Name must be a string',
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 4 characters',
      'string.max': 'Name must be at most 25 characters',
      'any.required': 'Name is required'
    })
})

const pokemonValidation = (data) => pokemonValidationSchema.validate(data)

module.exports = { pokemonValidation }
