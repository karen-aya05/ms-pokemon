const AWS = require('aws-sdk')
const logger = require('../utils/Logger/logger')
const { POKEMON_DYNAMO_TABLE } = require('../constants')
const { ERRORS } = require('../status-code')

const dynamoDb = new AWS.DynamoDB.DocumentClient()

const getPokemonByName = async (name) => {
  const params = {
    TableName: POKEMON_DYNAMO_TABLE,
    KeyConditionExpression: 'PK = :name',
    ExpressionAttributeValues: {
      ':name': name.toLowerCase()
    }
  }

  try {
    const result = await dynamoDb.query(params).promise()
    if (result.Items.length === 0) {
      return null
    }
    return result.Items[0]
  } catch (error) {
    logger.error('Error getPokemonByName', error)
    throw ERRORS.POKEMON_DATA
  }
}

const getAllPokemons = async () => {
  const params = {
    TableName: POKEMON_DYNAMO_TABLE,
    KeyConditionExpression: 'PK = :pk',
    ExpressionAttributeValues: {
      ':pk': 'POKEMON'
    }
  }

  try {
    const result = await dynamoDb.query(params).promise()
    return result.Items || []
  } catch (error) {
    logger.error('Error getAllPokemons', error)
    throw ERRORS.GET_ALL_POKEMONS
  }
}

module.exports = {
  getPokemonByName,
  getAllPokemons
}
