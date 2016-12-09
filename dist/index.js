'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('./lib/server');

var _server2 = _interopRequireDefault(_server);

var _logger = require('./lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || _config2.default.port;

(0, _server2.default)(app).then(function (server) {
    server.listen(port, function () {
        _logger2.default.log('info', 'listening on port ' + port);
    });
}).catch(function (err) {
    _logger2.default.log('error', 'Unable to start server.');
    _logger2.default.log('error', err);
});