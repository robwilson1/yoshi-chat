'use strict'

import packageJson from '../../package'

export function version(req, res) {
    res.status(200).json({ version: packageJson.version })
}

export function healthCheck(req, res) {
    res.status(200).json({ result: 'OK' })
}