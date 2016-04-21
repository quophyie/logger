/* eslint-env mocha */
'use strict'

const Logger = require('../../index')
const Levels = require('../../lib/levels')

let CONFIG = {
  transports: {
    console: {
      level: Levels.toArray(),
      options: {
        silent: true
      }
    }
  }
}

describe('Test Console Logger', function () {
  before(function () {
    Logger.init(CONFIG)
  })

  it('- test debug method', function () {
    Logger.debug('debug')
  })

  it('- test info method', function () {
    Logger.info('info')
  })

  it('- test notice method', function () {
    Logger.notice('notice')
  })

  it('- test warning method', function () {
    Logger.warning('warning')
  })

  it('- test error method', function () {
    Logger.error('error')
  })

  it('- test crit method', function () {
    Logger.crit('crit')
  })

  it('- test alert method', function () {
    Logger.alert('alert')
  })

  it('- test emerg method', function () {
    Logger.emerg('emerg')
  })

  it('- test emerg method', function () {
    Logger.log('emerg', 'log.emerg')
  })
})
