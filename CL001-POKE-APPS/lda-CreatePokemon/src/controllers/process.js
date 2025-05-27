'use strict'

const Logger = require('../../common/utils/Logger/logger')
const Service = require('../services/process')
const { pokemonValidation } = require('../../common/utils/validation/paramsValidation')

const process = async (event) => {
  let result
  try {
    const body = JSON.parse(event.body)
    const { error } =await pokemonValidation(body)
    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: error.details[0].message })
      }
    }
    const response = await Service.createPokemon(body)
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
