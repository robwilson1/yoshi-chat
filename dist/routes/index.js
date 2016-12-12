'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = router;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('../controllers/utils.controller');

var _yoti = require('../controllers/yoti.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function router(server) {
    server.get('/api/version', _utils.version);
    server.get('/api/healthcheck', _utils.healthCheck);

    server.get('/api/profile', _yoti.getProfile);

    // Unrecognised routes to index (support for react routes)
    server.get('/*', function (req, res) {
        res.sendFile(_path2.default.join(__dirname, '../../client', 'index.html'));
    });
}