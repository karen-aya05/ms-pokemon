const AWS = require('aws-sdk')
const logger = require('../../common/utils/Logger/logger')
const { POKEMON_DYNAMO_TABLE } = require('../constants')
const { ERRORS } = require('../status-code')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const savePokemon = async (data) => {
  const params = {
    TableName: POKEMON_DYNAMO_TABLE,
    Item: {
      PK: data.id,
      SK: data.name,
      abilities: data.abilities,
      types: data.types,
      order: data.order,
      stats: data.stats,
      imageFront: data.sprites.front_default || data.other.front_default

    }
  }

  try {
    await dynamoDb.put(params).promise()
    logger.info(`Pokemon saved in DynamoDB: ${data.name}`)
    return {
      statusCode: 200,
      message: 'Pokemon successfully saved'
    }
  } catch (error) {
    logger.error('Error saving Pokemon in DynamoDB', error)
    throw ERRORS.POKEMON_DATA_SAVE
  }
}

module.exports = {
  savePokemon
}
