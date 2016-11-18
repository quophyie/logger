'use strict'

let Assigner = require('assign.js')
let assigner = new Assigner().primitives(['logger'])
let _ = require('isa.js')

const winston = require('winston')
require('winston-loggly')
require('winston-syslog').Syslog

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
          let lconf = assigner.assign( {}, {
              token: process.env.LOGGLY_TOKEN || options.token,
              subdomain: process.env.LOGGLY_DOMAIN || options.domain,
              level: process.env.LOGGLY_LEVEL || options.level || 'info',
              tags: [ process.env.LOGGLY_PRODUCT_NAME || options.productName, process.env.LOGGLY_SERVICE_NAME || options.serviceName, process.env.LOGGLY_ENV || options.env ],
              json: true,
              stripColors: true
          } )
          console.log('::::', lconf)
          transportsArray.push( new (winston.transports.Loggly)( lconf ) )
          break
      }
    }
  }
  return transportsArray
}
