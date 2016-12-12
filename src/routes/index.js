'use strict'

import path from 'path'
import { version, healthCheck } from '../controllers/utils.controller'
import { getProfile } from '../controllers/yoti.controller'

export default function router(server) {
    server.get('/api/version', version)
    server.get('/api/healthcheck', healthCheck)

    server.get('/api/profile', getProfile)

    // Unrecognised routes to index (support for react routes)
    server.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client', 'index.html'))
    })
}