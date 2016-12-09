'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProfile = getProfile;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProfile(req, res) {
    var token = req.query.token;

    if (!token) {
        return res.status(401).json({
            success: 0,
            message: 'No token provided.'
        });
    }

    yotiClient.getActivityDetails(token).then(function (details) {
        if (details.getOutcome() === 'SUCCESS') {
            res.status(200).json({
                success: 1,
                token: token,
                userId: details.getUserId(),
                userProfile: details.getUserProfile()
            });
        } else {
            res.status(400).json({
                success: 0,
                message: 'Unable to retrieve the users profile.'
            });
        }
    }).catch(function (err) {
        res.status(403).json({
            success: 0,
            message: 'Invalid token provided.'
        });
    });
}