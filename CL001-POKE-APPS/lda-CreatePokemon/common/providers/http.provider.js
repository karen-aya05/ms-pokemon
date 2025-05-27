'use strict'

const axios = require('axios')
const Logger = require('../utils/Logger/logger')
const { ERRORS } = require('../status-code')
const { ENDPOINT } = require('../constants')

const consultPokemon = async (namePokemon) => {
  try {
    const url = `${ENDPOINT.POKEMON_BASE_URL}/api/v2/pokemon/${namePokemon}`
    console.log(url)
    const response = await axios.get(url, { timeout: 3000 })
    Logger.info('Provider consultPokemon response', response.data)

    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      Logger.error("Pokemon not found", error)
      throw ERRORS.NOT_FOUND_POKEMON
    }

    Logger.error('Error consult Pokemon data', error)
    throw ERRORS.GET_POKEMON
  }
}

module.exports = {
  consultPokemon
}
