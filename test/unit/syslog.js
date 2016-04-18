/* eslint-env mocha */
'use strict'

process.title = 'fnord'

var fs = require('fs')
var path = require('path')
var logger = require('../../index')

const SYSLOG_PATH = path.join(__dirname, '../../syslog.log')

var CONFIG = {
  transports: {
    syslog: {
      level: ['debug', 'info', 'notice', 'warning', 'error', 'crit', 'alert', 'emerg'],
      options: {
        path: SYSLOG_PATH,
        app_name: 'fnord',
        protocol: 'udp4',
        port: 514
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
    logger.crit('debug')
    done()
  })

  after(function (done) {
    done()
  })
})
