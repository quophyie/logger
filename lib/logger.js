'use strict'

const Transporter = require('./transporter')
const Base = require('./base')
const Levels = require('./levels')

function Logger () {}

Logger.prototype.init = function (config) {
  if (config && !config.transports) {
    throw new Error('Logger: No logging transports supplied')
  }

  for (let lvl of Levels.toArray()) {
    this[lvl] = Base.logger(lvl, Transporter.levelTransports(config, lvl))[lvl]
  }
}

Logger.prototype.log = function (lvl, msg) {
  this[lvl](msg)
}

module.exports = new Logger()
