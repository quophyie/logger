'use strict'

var winston = require('winston')
require('winston-syslog').Syslog

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
          break
        case 'file':
          transportsArray.push(new (winston.transports.File)(options))
          break
        case 'syslog':
          transportsArray.push(new (winston.transports.Syslog)(options))
          break
      }
    }
  }
  return transportsArray
}
