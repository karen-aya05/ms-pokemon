'use strict'

const axios = require('axios')
const Logger = require('../utils/Logger')
const { ERRORS } = require('../status-code')
const { ENDPOINT } = require('../constants')

const consultPokemon = async (namePokemon) => {
  try {
    const url = `${ENDPOINT.POKEMON_BASE_URL}/api/v2/pokemon/${namePokemon.toLowerCase()}`
    const response = await axios.get(url, { timeout: 5000 })
    Logger.trace('Provider consultPokemon response', response.data)

    return response.data
  } catch (error) {
    Logger.error('Error fetching Pokemon data', error)
    throw ERRORS.GET_POKEMON
  }
}

module.exports = {
  consultPokemon
}
