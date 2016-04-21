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
  it('- non existing constructor CONFIG', function () {
    expect(Logger.init.bind(Logger)).to.not.throw(Error)
  })
  it('- non existing "transports" CONFIG', function () {
    expect(Logger.init.bind(Logger, {})).to.throw(Error, 'Logger: No logging transports supplied')
  })
  it('- valid Logger instance CONFIG', function () {
    expect(Logger.init.bind(Logger, CONFIG)).to.not.throw(Error)
  })
})
