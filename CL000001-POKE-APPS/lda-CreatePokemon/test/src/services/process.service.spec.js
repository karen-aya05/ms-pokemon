'use strict'

const { expect } = require('chai')
const { it, describe, afterEach, beforeEach } = require('mocha')
const sinon = require('sinon')

/** Service */
const Service = require('../../../src/services/process')
const DriveService = require('../../../src/services/drive.service')

/** Provider */
const DriveProvider = require('../../../common/providers/drive.provider')
const NotificationProvider = require('../../../common/providers/sendEmail.provider')
const HttpProvider = require('../../../common/providers/http.provider')

/** Mocks */
const { PARAMS } = require('../../resources/Mocks/service.mock')
const { RESPONSE_DRIVE, RESPONSE_CLIENT, RESPONSE_EMAIL, ERROR, RESPONSE_FILE_DRIVE } = require('../../resources/Mocks/provider.mock')

describe('Service Modules', () => {
  describe('Function process', function () {
    beforeEach(() => {
      sinon.restore()
    })

    it.only('should return object Success', async () => {
      sinon.stub(DriveService, 'processDrivefile').returns(RESPONSE_DRIVE)
      sinon.stub(HttpProvider, 'getClient').returns(RESPONSE_CLIENT)
      sinon.stub(NotificationProvider, 'sendNotification').returns(RESPONSE_EMAIL)
      sinon.stub(DriveProvider, 'moveDriveFile').returns(RESPONSE_FILE_DRIVE)
      const result = await Service.process(PARAMS)
      expect(result).to.be.an('object')
    })

    it.only('should return error', async () => {
      try {
        sinon.stub(DriveService, 'processDrivefile').throws(ERROR)
        sinon.stub(HttpProvider, 'getClient').throws(ERROR)
        sinon.stub(NotificationProvider, 'sendNotification').throws(ERROR)
        sinon.stub(DriveProvider, 'moveDriveFile').throws(ERROR)
        await Service.process(PARAMS)
      } catch (error) {
        expect(error).to.be.an('object')
      }
    })

    afterEach(() => {
      sinon.restore()
    })
  })
})
