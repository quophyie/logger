/* eslint-env mocha */
'use strict'

var fs = require('fs')
var expect = require('code').expect
var logger = require('../../index')

const FILENAME = 'logger.log'

var CONFIG = {
  transports: {
    file: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        filename: FILENAME
      }
    }
  }
}

describe('Test File Logger', function () {
  before(function (done) {
    fs.openSync(FILENAME, 'w')
    logger.init(CONFIG)
    done()
  })

  it('- test debug method', function (done) {
    logger.debug('debug')
    fs.readFile(FILENAME, 'utf8', function (err, data) {
      data = JSON.parse(data)
      expect(err).to.not.exist()
      expect(data).to.deep.include({message: 'debug'})
    })
    done()
  })

  afterEach(function (done) {
    fs.unlinkSync(FILENAME)
    done()
  })
})