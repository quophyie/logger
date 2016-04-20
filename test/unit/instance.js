/* eslint-env mocha */
'use strict'

var expect = require('chai').expect

const Logger = require('../../index')
const Levels = require('../../lib/levels')

var CONFIG = {
  transports: {
    console: {
      level: [Levels.INFO, Levels.DEBUG]
    }
  }
}

describe('Test Logger Instance Configuration', function () {
  it('- non existing constructor CONFIG', function (done) {
    expect(Logger.init.bind(Logger)).to.not.throw(Error)
    done()
  })
  it('- non existing "transports" CONFIG', function (done) {
    expect(Logger.init.bind(Logger, {})).to.throw(Error, 'Logger: No logging transports supplied')
    done()
  })
  it('- valid Logger instance CONFIG', function (done) {
    expect(Logger.init.bind(Logger, CONFIG)).to.not.throw(Error)
    done()
  })
})
