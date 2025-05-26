'use strict'

const { expect } = require('chai')
const { it, describe, afterEach, beforeEach } = require('mocha')
const sinon = require('sinon')

/** Service */

const DriveService = require('../../../src/services/drive.service')

/** Provider */
const DriveProvider = require('../../../common/providers/drive.provider')

/** Mocks */
const { ERROR } = require('../../resources/Mocks/service.mock')
const { PARAMS_FILES } = require('../../resources/Mocks/provider.mock')

describe('Service Modules', () => {
  describe('Function processDrivefile', function () {
    beforeEach(() => {
      sinon.restore()
    })

    it.only('should return object Success', async () => {
      sinon.stub(DriveProvider, 'downloadFile').returns('')
      const result = await DriveService.processDrivefile(PARAMS_FILES.idFile, PARAMS_FILES.nameFile)
      expect(result).to.be.an('object')
    })

    it.only('should return error', async () => {
      try {
        sinon.stub(DriveService, 'processDrivefile').throws(ERROR)
        await DriveService.processDrivefile(PARAMS_FILES.idFile, PARAMS_FILES.nameFile)
      } catch (error) {
        expect(error).to.be.an('object')
      }
    })

    afterEach(() => {
      sinon.restore()
    })
  })
})
