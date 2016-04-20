'use strict'

const winston = require('winston')
winston.setLevels(winston.config.syslog.levels)

const Utils = require('./utils')

module.exports.logger = function (level, transports) {
  var levels = {}
  levels[level] = Utils.level(level)
  return new winston.Logger({
    levels: levels,
    transports: transports
  })
}
