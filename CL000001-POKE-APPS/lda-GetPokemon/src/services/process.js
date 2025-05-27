'use strict'

const logger = require('../../common/utils/Logger/logger')
const DynamoProvider = require('../../common/providers/dynamo.provider')
const { ERRORS } = require('../../common/status-code')
const { responsePokemon } = require('../../common/utils/response/responsePokemon')

const getPokemons = async (name) => {
  try {
    if (name) {
      const pokemon = await DynamoProvider.getPokemonByName(name)
      if (!pokemon) {
        throw ERRORS.NOT_FOUND_POKEMON
      }
      return  responsePokemon(pokemon)
    }

    const pokemons = await DynamoProvider.getAllPokemons()
    const pokemonsList = pokemons.map(p => responsePokemon(p))
    return pokemonsList
  } catch (error) {
    logger.error('Error in getPokemons service', error)
    throw error
  }
}

module.exports = {
  getPokemons
}
