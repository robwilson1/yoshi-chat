'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _logConfig = require('../config/log-config');

var _logConfig2 = _interopRequireDefault(_logConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new _winston2.default.Logger({
    transports: [new _winston2.default.transports.Console(_logConfig2.default.console), new _winston2.default.transports.File(_logConfig2.default.file)]
});

exports.default = logger;