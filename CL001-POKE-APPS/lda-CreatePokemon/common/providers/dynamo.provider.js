const AWS = require('aws-sdk')
const logger = require('../../common/utils/Logger/logger')
const { POKEMON_DYNAMO_TABLE } = require('../constants')
const { ERRORS } = require('../status-code')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const savePokemon = async (data) => {
  const params = {
    TableName: POKEMON_DYNAMO_TABLE,
    Item: {
      PK: "POKEMON",
      SK: data.name,
      id: data.id,
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


const getPokemonByName = async (name) => {
  try {
    const params = {
      TableName: POKEMON_DYNAMO_TABLE,
      IndexName: 'GS1',
      KeyConditionExpression: 'SK = :name',
      ExpressionAttributeValues: {
        ':name': name.toLowerCase()
      }
    }
    const result = await dynamoDb.query(params).promise()
    logger.info("Get Pokemon By Name: ", result)
    return result.Items.length > 0 ? result.Items[0] : null;
  } catch (error) {
    logger.error('Error getPokemonByName', error)
    throw ERRORS.POKEMON_DATA
  }
}


module.exports = {
  savePokemon,
  getPokemonByName
}
