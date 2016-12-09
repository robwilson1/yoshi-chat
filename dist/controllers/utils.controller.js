'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.version = version;
exports.healthCheck = healthCheck;

var _package = require('../../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(req, res) {
    res.status(200).json({ version: _package2.default.version });
}

function healthCheck(req, res) {
    res.status(200).json({ result: 'OK' });
}