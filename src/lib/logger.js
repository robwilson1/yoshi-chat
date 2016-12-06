'use strict'

import winston from 'winston'
import logConfig from '../config/log-config'

let logger = new (winston.Logger)( {
    transports: [
        new (winston.transports.Console)(logConfig.console),
        new (winston.transports.File)(logConfig.file)
    ]
})

export default logger