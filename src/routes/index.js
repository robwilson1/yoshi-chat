'use strict'

import path from 'path'
import { version, healthCheck } from '../controllers/utils.controller'
import { getProfile, getAppId } from '../controllers/yoti.controller'

export default function router(server) {
    server.get('/api/version', version)
    server.get('/api/healthcheck', healthCheck)

    server.get('/api/profile', getProfile)
    server.get('/api/appId', getAppId)

    // Unrecognised routes to index (support for react routes)
    server.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client', 'index.html'))
    })
}