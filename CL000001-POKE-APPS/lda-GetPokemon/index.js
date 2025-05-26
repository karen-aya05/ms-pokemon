'use strict'

const logger = require('./common/utils/Logger/logger') // la ruta donde guardaste logger.js
const Controller = require('./src/controllers/process')

const handler = async (event, context) => {
  try {
    logger.info('Handler invoked', { event })
    const response = await Controller.process(event)
    logger.info('Process completed successfully', { response })
    return response
  } catch (error) {
    logger.error('Error in handler', error)
    throw error
  }
}

exports.handler = handler
