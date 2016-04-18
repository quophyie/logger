# C8-Logger

Easy to use (config-based) wrapper around winston logger

# Available Transports

 - Console
 - File
 - SysLog (currently on hold)
 
 
# Available log levels

 - `7` -> `debug`
 - `6` -> `info`
 - `5` -> `notice`
 - `4` -> `warning`
 - `3` -> `error`
 - `2` -> `crit`
 - `1` -> `alert`
 - `0` -> `emerg`
 
# Usage

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

# Tests

Run the following commands:
 - `npm run test` for unit tests
 - `npm run standard` for StandardJS compiling
 - `npm run coverage` for code coverage
  
# Licence

MIT Licence
© Copyright 2016 C8 MANAGEMENT LIMITED
