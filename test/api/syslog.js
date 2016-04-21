/* eslint-env mocha */
'use strict'

const fs = require('fs')
const path = require('path')

const Logger = require('../../index')
const Levels = require('../../lib/levels')

const SYSLOG_PATH = path.join('syslog.log')

var CONFIG = {
  transports: {
    syslog: {
      level: Levels.toArray(),
      options: {
        path: SYSLOG_PATH,
        app_name: 'c8-Logger'
      }
    }
  }
}

describe.skip('Test Syslog Logger', function () {
  before(function () {
    fs.openSync(SYSLOG_PATH, 'w')
    Logger.init(CONFIG)
  })

  it('- test debug method', function () {
    Logger.emerg('debug')
  })
})
