'use strict'

const { expect } = require('chai')
const sinon = require('sinon')
const { describe, beforeEach, it } = require('mocha')

/** Controller */
const Controller = require('../src/controllers/process')

/** Mocks */
const { SUCCESS_PROCESS } = require('./resources/Mocks/controller.mock')

/** Event & Function Lambda */
const Event = require('./resources/Mocks/event')

const FunctionLambda = require('../index')

describe('Function Index Handler', () => {
  beforeEach(() => {
    sinon.restore()
  })

  it.only('should return success', async () => {
    sinon.stub(Controller, 'process').returns(SUCCESS_PROCESS)
    const result = await FunctionLambda.handler(Event)
    expect(result).to.be.an('object')
  })
})
