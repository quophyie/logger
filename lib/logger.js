'use strict'

var winston = require('winston')
winston.setLevels(winston.config.syslog.levels)

module.exports.debug = function (transports) {
  return new winston.Logger({
    levels: {
      debug: 7
    },
    transports: transports
  })
}

module.exports.info = function (transports) {
  return new winston.Logger({
    levels: {
      info: 6
    },
    transports: transports
  })
}

module.exports.notice = function (transports) {
  return new winston.Logger({
    levels: {
      notice: 5
    },
    transports: transports
  })
}

module.exports.warning = function (transports) {
  return new winston.Logger({
    levels: {
      warning: 4
    },
    transports: transports
  })
}

module.exports.error = function (transports) {
  return new winston.Logger({
    levels: {
      error: 3
    },
    transports: transports
  })
}

module.exports.crit = function (transports) {
  return new winston.Logger({
    levels: {
      crit: 2
    },
    transports: transports
  })
}

module.exports.alert = function (transports) {
  return new winston.Logger({
    levels: {
      alert: 1
    },
    transports: transports
  })
}

module.exports.emerg = function (transports) {
  return new winston.Logger({
    levels: {
      emerg: 0
    },
    transports: transports
  })
}
