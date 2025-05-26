const winston = require('winston')

const baseLogger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
      )
    })
  ]
})

const Logger = {
  debug: (msg, meta) => baseLogger.debug(msg, meta),
  info: (msg, meta) => baseLogger.info(msg, meta),
  warn: (msg, meta) => baseLogger.warn(msg, meta),
  error: (msg, meta) => baseLogger.error(msg, meta),
  fatal: (msg, meta) => baseLogger.error(msg, meta)
}

module.exports = Logger
