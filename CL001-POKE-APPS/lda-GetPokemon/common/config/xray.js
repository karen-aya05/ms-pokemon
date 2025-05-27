'use strict'

const AWSXRay = require('aws-xray-sdk')

if (process.env.ENVIRONMENT && process.env.ENVIRONMENT !== 'LOCAL') {
  AWSXRay.captureHTTPsGlobal(require('http'))
  AWSXRay.captureHTTPsGlobal(require('https'))
}

module.exports = AWSXRay
