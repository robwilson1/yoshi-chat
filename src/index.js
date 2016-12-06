'use strict'

import express from 'express'

import serverSetup from './lib/server'
import logger from './lib/logger'
import config from './config'

const app = express()

let port = process.env.PORT || config.port

serverSetup(app)
    .then((server) => {
        server.listen(port, () => {
            logger.log('info', `listening on port ${port}`)
        })
    })
    .catch((err) => {
        logger.log('error', 'Unable to start server.')
        logger.log('error', err)
    })
