
module.exports = Object.freeze({
  APPID: 'CL000001-POKE-APPS',
  ENV: process.env.ENVIRONMENT || 'DEV',
  HTTP: {
    TIME_OUT: process.env.TIME_OUT || 90000
  },
  ENDPOINT: {
    POKEMON_DYNAMO_TABLE: process.env.POKEMON_DYNAMO_TABLE,
    POKEMON_BASE_URL: process.env.POKEMON_BASE_URL
  },
  POKEMON_DYNAMO_TABLE: process.env.POKEMON_DYNAMO_TABLE
})
