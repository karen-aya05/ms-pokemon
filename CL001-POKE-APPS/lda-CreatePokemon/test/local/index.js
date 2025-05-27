'use strict'

const lambda = require('../../index')

const eventApi = {
  resource: '/',
  path: '',
  httpMethod: 'POst',
  body: JSON.stringify({
    name: 'pikachu'
  }),
  isBase64Encoded: false
}

const logger = (log) => {
  const prefix = 'TEST: '
  console.log(prefix, log)
}

const test = async () => {
  try {
    console.time('lambda runtime')
    const response = await lambda.handler(eventApi)
    logger(response)
    console.timeEnd('lambda runtime')
  } catch (e) {
    console.error('ERROR: ', e)
  }
}

test()
