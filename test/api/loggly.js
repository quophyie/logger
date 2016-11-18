/* eslint-env mocha */
'use strict'

const Logger = require('../../index')
const Levels = require('../../lib/levels')

let CONFIG = {
  transports: {
      loggly: {
          level: Levels.toArray(),
          options: {
              token: 'c627e174-89ef-4743-a949-28616c69c682',
              subdomain: 'c8management',
              tags: ['mocha', 'logger'],
              json: true,
              stripColors: true
          }
      }
  }
}

describe.only('Test Loggly Logger', function () {
  before(function () {
    Logger.init(CONFIG)
  })

  it('- test debug method', function (done) {
    Logger.debug('DEBUG')
    setTimeout(() => done(), 1000)
  })

  it('- test info method', function (done) {
    Logger.info('info')
    setTimeout(() => done(), 1000)
  })

  it('- test notice method', function (done) {
    Logger.notice('notice')
    setTimeout(() => done(), 1000)
  })

  it('- test warning method', function (done) {
    Logger.warning('warning')
    setTimeout(() => done(), 1000)
  })

  it('- test error method', function (done) {
    Logger.error('error')
    setTimeout(() => done(), 1000)
  })

  it('- test crit method', function (done) {
    Logger.crit('crit')
    setTimeout(() => done(), 1000)
  })

  it('- test alert method', function (done) {
    Logger.alert('alert')
    setTimeout(() => done(), 1000)
  })

  it('- test emerg method', function (done) {
    Logger.emerg('emerg')
    setTimeout(() => done(), 1000)
  })

  it('- test emerg method', function (done) {
    Logger.log('emerg', 'log.emerg')
    setTimeout(() => done(), 1000)
  })

  it('- test EvalError', (done) => {
    Logger.error('Eval Error Test', new EvalError('My Eval Error'))
    setTimeout(() => done(), 1000)
  })

  it('- test SyntaxError', (done) => {
    Logger.error('Syntax Error Test', new SyntaxError('My Syntax Error'))
    setTimeout(() => done(), 1000)
  })

  it('- test RangeError', (done) => {
    Logger.error('Range Error Test', new RangeError('My Range Error'))
    setTimeout(() => done(), 1000)
  })

  it('- test ReferenceError', (done) => {
    Logger.error('Reference Error Test', new ReferenceError('My Reference Error'))
    setTimeout(() => done(), 1000)
  })

  it('- test TypeError', (done) => {
    Logger.error('Type Error Test', new TypeError('My Type Error'))
    setTimeout(() => done(), 1000)
  })

  it('- test URIError', (done) => {
    Logger.error('URI Error Test', new URIError('My URI Error'))
    setTimeout(() => done(), 1000)
  })
})
