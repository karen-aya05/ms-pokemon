'use strict'

const logger = require('../../common/utils/Logger/logger')
const HttpProvider = require('../../common/providers/http.provider')
const DynamoProvider = require('../../common/providers/dynamo.provider')
const { ERRORS } = require('../../common/status-code')

const createPokemon = async (body) => {
  try {
    const name = body.name
    const existsPokemon = await DynamoProvider.getPokemonByName(name)
    if (!existsPokemon) {
      const dataPokemon = await HttpProvider.consultPokemon(name)
      await DynamoProvider.savePokemon(dataPokemon)
      const response = { message: `Pokémon '${dataPokemon.name}' created successfully` };
      return response
    } else {
      return ERRORS.EXISTING_POKEMON
    }

  } catch (error) {
    logger.error('Error in createPokemon service', error)
    throw error
  }
}

module.exports = {
  createPokemon
}
