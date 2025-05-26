'use strict'

const { expect } = require('chai')
const { it, describe, afterEach, beforeEach } = require('mocha')
const sinon = require('sinon')

/** Service */
const Service = require('../../src/services/process')

/** Controller */
const Controller = require('../../src/controllers/process')

/** Mocks */
const { RESPONSE_PROCESS, ERROR } = require('../resources/Mocks/service.mock')

const Event = require('../resources/Mocks/event')

describe('Controller Modules', () => {
  describe('Function process', function () {
    beforeEach(() => {
      sinon.restore()
    })

    it.only('should return object Success', async () => {
      sinon.stub(Service, 'process').returns(RESPONSE_PROCESS)
      const result = await Controller.process(Event)
      expect(result).to.be.an('object')
    })

    it.only('should return error', async () => {
      try {
        sinon.stub(Service, 'process').throws(ERROR)
        await Controller.process(Event)
      } catch (error) {
        expect(error).to.be.an('object')
      }
    })

    afterEach(() => {
      sinon.restore()
    })
  })
})
