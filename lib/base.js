'use strict'

var winston = require('winston')
winston.setLevels(winston.config.syslog.levels)

module.exports.level = function (level) {
  if (isNaN(level)) {
    switch (level) {
      case 'debug':
        return 7
      case 'info':
        return 6
      case 'notice':
        return 5
      case 'warning':
        return 4
      case 'error':
        return 3
      case 'crit':
        return 2
      case 'alert':
        return 1
      case 'emerg':
        return 0
      default:
        throw new Error(
          'Logger: The level number should be [\'debug\', \'info\', \'notice\', \'warning\', \'error\', \'crit\', \'alert\', ' +
          '\'debug\', emerg] but got ' + level)
    }
  } else {
    switch (parseInt(level, 10)) {
      case 7:
        return 'debug'
      case 6:
        return 'info'
      case 5:
        return 'notice'
      case 4:
        return 'warning'
      case 3:
        return 'error'
      case 2:
        return 'crit'
      case 1:
        return 'alert'
      case 0:
        return 'emerg'
      default:
        throw new Error('Logger: The level number should be [7..0] but got ' + level)
    }
  }
}

module.exports.logger = function (level, transports) {
  var levels = {}
  levels[level] = this.level(level)
  return new winston.Logger({
    levels: levels,
    transports: transports
  })
}
