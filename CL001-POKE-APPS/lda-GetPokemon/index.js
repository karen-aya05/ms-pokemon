'use strict'

const logger = require('./common/utils/Logger/logger') 
const Controller = require('./src/controllers/process')

const handler = async (event, context) => {
  try {
    logger.info('Handler invoked', { event })
    const response = await Controller.process(event)
    logger.info('Process completed successfully', { response })
    return response
  } catch (error) {
    logger.error('Error in handler', error)
    return {
      statusCode: error.status || 500,
      body: JSON.stringify({
        detail: error.detail || '',
        level: 'error',
        title: error.title || 'Internal Server Error'
      })
    }
  }
}

exports.handler = handler
