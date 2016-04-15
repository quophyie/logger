/* eslint-env mocha */
'use strict'

var fs = require('fs')
var path = require('path')
var logger = require('../../index')

const SYSLOG_PATH = path.join('syslog.log')

var CONFIG = {
  transports: {
    syslog: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        path: SYSLOG_PATH,
        app_name: 'c8-logger'
      }
    }
  }
}

describe('Test Syslog Logger', function () {
  before(function (done) {
    fs.openSync(SYSLOG_PATH, 'w')
    logger.init(CONFIG)
    done()
  })

  it('- test debug method', function (done) {
    logger.emerg('debug')
    done()
  })

  after(function (done) {
    done()
  })
})
