'use strict'

const logger = require('../../common/Logger/logger')
const HttpProvider = require('../../common/providers/http.provider')
const DynamoProvider = require('../../common/providers/dynamo.provider')
const { ERRORS } = require('../../common/status-code')

const createPokemon = async (namePokemon) => {
  try {
    const dataPokemon = await HttpProvider.consultPokemon(namePokemon)
    if (!dataPokemon) {
      throw ERRORS.NOT_FOUND_POKEMON
    }

    await DynamoProvider.savePokemon(dataPokemon)

    const data = {
      name: dataPokemon.nombre,
      abilities: dataPokemon.abilities,
      types: dataPokemon.types,
      order: dataPokemon.order,
      stats: dataPokemon.stats,
      image: dataPokemon.sprites.front_default || dataPokemon.other.front_default
    }

    return data
  } catch (error) {
    logger.error('Error in createPokemon service', error)
    throw error
  }
}

module.exports = {
  createPokemon
}
