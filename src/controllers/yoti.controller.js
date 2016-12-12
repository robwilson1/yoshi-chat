'use strict'

import config from '../config'

export function getAppId(req, res) {
    res.status(200).json({ appId: config.appId })
}

export function getProfile(req, res) {
    let token = req.query.token

    if (!token) {
        return res.status(401).json({
            success: 0,
            message: 'No token provided.'
        })
    }

    yotiClient.getActivityDetails(token)
        .then(details => {
            if (details.getOutcome() === 'SUCCESS') {
                res.status(200).json({
                    success: 1,
                    token: token,
                    userId: details.getUserId(),
                    userProfile: details.getUserProfile()
                })
            }
            else {
                res.status(400).json({
                    success: 0,
                    message: 'Unable to retrieve the users profile.'
                })
            }
        })
        .catch(err => {
            res.status(403).json({
                success: 0,
                message: 'Invalid token provided.'
            })
        })
}