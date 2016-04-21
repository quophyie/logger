/* eslint-env mocha */
'use strict'

var expect = require('code').expect

const Utils = require('../../lib/utils')

describe('Test Logger string levels', function () {
  it('- debug level', function () {
    var out = Utils.level('debug')
    expect(out).to.be.equal(7)
  })

  it('- info level', function () {
    var out = Utils.level('info')
    expect(out).to.be.equal(6)
  })

  it('- notice level', function () {
    var out = Utils.level('notice')
    expect(out).to.be.equal(5)
  })

  it('- warning level', function () {
    var out = Utils.level('warning')
    expect(out).to.be.equal(4)
  })

  it('- error level', function () {
    var out = Utils.level('error')
    expect(out).to.be.equal(3)
  })

  it('- crit level', function () {
    var out = Utils.level('crit')
    expect(out).to.be.equal(2)
  })

  it('- alert level', function () {
    var out = Utils.level('alert')
    expect(out).to.be.equal(1)
  })

  it('- emerg level', function () {
    var out = Utils.level('emerg')
    expect(out).to.be.equal(0)
  })
})

describe('Test Logger number levels', function () {
  it('- debug level', function () {
    var out = Utils.level(7)
    expect(out).to.be.equal('debug')
  })

  it('- info level', function () {
    var out = Utils.level(6)
    expect(out).to.be.equal('info')
  })

  it('- notice level', function () {
    var out = Utils.level(5)
    expect(out).to.be.equal('notice')
  })

  it('- warning level', function () {
    var out = Utils.level(4)
    expect(out).to.be.equal('warning')
  })

  it('- error level', function () {
    var out = Utils.level(3)
    expect(out).to.be.equal('error')
  })

  it('- crit level', function () {
    var out = Utils.level(2)
    expect(out).to.be.equal('crit')
  })

  it('- alert level', function () {
    var out = Utils.level(1)
    expect(out).to.be.equal('alert')
  })

  it('- emerg level', function () {
    var out = Utils.level(0)
    expect(out).to.be.equal('emerg')
  })
})

describe('Test non valid log levels', function () {
  it('- non valid string level', function () {
    expect(Utils.level.bind(Utils, 'badumtssss')).to.throw(Error)
  })

  it('- non valid number level', function () {
    expect(Utils.level.bind(Utils, 999999999)).to.throw(Error)
  })
})
