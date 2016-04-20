# Logger

Easy to use (config-based) wrapper around winston logger

## Available Transports

 - Console
 - File
 - SysLog (currently on hold)


## Available log levels

 - `7` -> `debug`
 - `6` -> `info`
 - `5` -> `notice`
 - `4` -> `warning`
 - `3` -> `error`
 - `2` -> `crit`
 - `1` -> `alert`
 - `0` -> `emerg`

## Installation
`npm i @c8/logger`

## Usage

```javascript

// import logger component
var logger = require('logger')

// Define config options
var config = {
  transports: {
    console: {
      level: ['info', 'debug'],
      options: {}
    },
    file: {
      level: ['error', 'crit', 'alert', 'emerg'],
      options: {}
    }
  }
}

// Initialize Logger config
logger.init(config)

// Use logger
logger.debug('This is the debug message')

```

Console logger options: [`console.options`](https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport)
File logger options: [`file.options`](https://github.com/winstonjs/winston/blob/master/docs/transports.md#file-transport)

### Middleware
In order to use the logger as an Express middleware you should add:

```
var loggerMiddleware = logger.middleware.Express
server.use(loggerMiddleware.debug)

// or
 
server.get('/', loggerMiddleware.debug, function (req, res) {
  res.status(200)
}
```

The middleware logger uses the same config you pass in `logger.init(/*config*/)` and depending on the log level method you use the middleware with it will be sent to the transport specified in the config.

The middleware can be used globally before any route `server.use(loggerMiddleware.debug)` or route specific `server.get('/route', loggerMiddleware.debug, function (req, res) {...})`

All error logs are pushed using levels `error`, `crit`, `alert`, `emerg` and should be defined *under* the route declaration:
```
// ^^^ all routes are defined above ^^^

// use 'error' method for error printing
server.use(loggerMiddleware.error)
```

## Tests

Run the following commands:
 - `npm run test` for unit tests
 - `npm run standard` for StandardJS compiling
 - `npm run coverage` for code coverage

## Licence

MIT Licence
© Copyright 2016 C8 MANAGEMENT LIMITED
