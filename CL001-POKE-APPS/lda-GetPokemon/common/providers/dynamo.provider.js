const AWS = require('aws-sdk')
const logger = require('../utils/Logger/logger')
const { POKEMON_DYNAMO_TABLE } = require('../constants')
const { ERRORS } = require('../status-code')

const dynamoDb = new AWS.DynamoDB.DocumentClient()

const getPokemonByName = async (name) => {
  try {
    const params = {
      TableName: POKEMON_DYNAMO_TABLE,
      KeyConditionExpression: "PK = :pk AND SK = :name",
      ExpressionAttributeValues: {
        ":pk": "POKEMON",
        ":name": name.toLowerCase()
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

const getAllPokemons = async () => {
  const params = {
    TableName: POKEMON_DYNAMO_TABLE,
    ExpressionAttributeNames: { '#PK': 'PK' },
    ExpressionAttributeValues: { ':PK': 'POKEMON' },
    KeyConditionExpression: '#PK = :PK'
  };

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
