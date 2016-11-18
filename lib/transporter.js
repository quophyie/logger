'use strict'

const winston = require('winston')
require('winston-loggly')

const formatter = require('./formatter')

module.exports.levelTransports = function (config, level) {
  var transportsArray = []
  if (!config) return []
  var transports = config.transports
  var keys = Object.keys(transports)

  for (var i = 0; i < keys.length; i++) {
    var transport = keys[i]
    var lvl = transports[transport].level
    var options = transports[transport].options || {}
    options.level = level

    if (lvl.indexOf(level) > -1) {
      switch (transport) {
        case 'console':
          Object.assign(options, formatter)
          options.silent = (options.silent != null) ? options.silent : (process.env.NODE_ENV === 'test')
          transportsArray.push(new (winston.transports.Console)(options))
          break
        case 'loggly':
          transportsArray.push( new (winston.transports.Loggly)( options ) )
          break
      }
    }
  }
  return transportsArray
}
