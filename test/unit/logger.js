/* eslint-env mocha */
'use strict'

var logger = require('../../index')
var fs = require('fs')

var CONFIG = {
  transports: {
    console: {
      level: ['info', 'debug']
    },
    file: {
      level: ['error', 'debug', 'info'],
      options: {
        filename: 'log.log'
      }
    },
    syslog: {
      level: ['error', 'debug', 'warning']
    }
  }
}

describe('Test Logger Methods', function () {
  before(function (done) {
    fs.openSync('logger.log', 'w')
    logger.init(CONFIG)
    done()
  })

  logger.init(CONFIG)

  it('- test info method', function (done) {
    logger.debug('test')
    done()
  })
  it('- test info method', function (done) {
    logger.error('test')
    done()
  })
  it('- test info method', function (done) {
    logger.info('test')
    done()
  })

  after(function (done) {
    fs.unlinkSync('logger.log')
    done()
  })
})
