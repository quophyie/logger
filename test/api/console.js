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
  before(function (done) {
    Logger.init(CONFIG)
    done()
  })

  it('- test debug method', function (done) {
    Logger.debug('debug')
    done()
  })

  it('- test info method', function (done) {
    Logger.info('info')
    done()
  })

  it('- test notice method', function (done) {
    Logger.notice('notice')
    done()
  })

  it('- test warning method', function (done) {
    Logger.warning('warning')
    done()
  })

  it('- test error method', function (done) {
    Logger.error('error')
    done()
  })

  it('- test crit method', function (done) {
    Logger.crit('crit')
    done()
  })

  it('- test alert method', function (done) {
    Logger.alert('alert')
    done()
  })

  it('- test emerg method', function (done) {
    Logger.emerg('emerg')
    done()
  })

  it('- test emerg method', function (done) {
    Logger.log('emerg', 'log.emerg')
    done()
  })

  after(function (done) {
    done()
  })
})
