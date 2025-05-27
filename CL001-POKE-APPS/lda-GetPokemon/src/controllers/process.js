'use strict'

const Logger = require('../../common/utils/Logger/logger')
const { pokemonValidation } = require('../../common/validation/paramsValidation')

const Service = require('../services/process')

const process = async (event) => {
  let result
  try {
    const name = event.queryStringParameters ? event.queryStringParameters.name : null

    if (name) {
      const { error } = await pokemonValidation({ name })
      if (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: error.details[0].message })
        }
      }
    }

    const response = await Service.getPokemons(name)
    result = {
      statusCode: 200,
      body: response
    }
  } catch (error) {
    Logger.error('Error Service Process', error)
    throw error
  }
  return result
}

module.exports = {
  process
}
