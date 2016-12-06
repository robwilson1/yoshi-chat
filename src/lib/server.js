'use strict'

import fs from 'fs'
import path from 'path'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import session from 'express-session'
import YotiClient from 'yoti-node-sdk'
import router from '../routes'
import config from '../config'

const PEM = fs.readFileSync(__dirname + '/keys/yoti-login.pem')
const SDK_ID = config.sdkId

export default function serverSetup(server) {

    let promise = new Promise((resolve, reject) => {
        try {
            server.set('views', path.resolve(__dirname + '/../views'))
            server.set('view engine', 'ejs')

            server.use(methodOverride((req, res) => {
                if (req.body && typeof req.body === 'object' && '_method' in req.body) {
                    let method = req.body._method
                    delete req.body._method
                    return method
                }
            }))

            server.use(bodyParser.json())
            server.use(bodyParser.urlencoded({
                extended: true
            }))

            server.use(helmet())

            server.use(cors())

            server.use(session({
                secret: config.sessionSecret,
                saveUninitialized: true,
                resave: false
            }))

            global.yotiClient = new YotiClient(SDK_ID, PEM)

            router(server)

            resolve(server)
        } catch (error) {
            reject(error)
        }
    })

    return promise
}