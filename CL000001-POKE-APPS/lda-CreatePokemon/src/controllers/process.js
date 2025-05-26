'use strict'

const Logger = require('./common/Logger/logger')
const Service = require('../services/process')

const process = async (event) => {
  let result
  try {
    const body = JSON.parse(event.body)
    const { error } = pokemonValidation(body)
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
