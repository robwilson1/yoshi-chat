'use strict'

import { version, healthCheck } from '../controllers/utils.controller'
import { getProfile } from '../controllers/yoti.controller'

export default function router(server) {
    server.get('/version', version)
    server.get('/healthcheck', healthCheck)

    server.get('/profile', getProfile)
}