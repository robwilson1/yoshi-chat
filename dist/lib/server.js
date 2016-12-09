'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = serverSetup;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _yotiNodeSdk = require('yoti-node-sdk');

var _yotiNodeSdk2 = _interopRequireDefault(_yotiNodeSdk);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PEM = _fs2.default.readFileSync(__dirname + '/keys/yoti-login.pem');
var SDK_ID = _config2.default.sdkId;

function serverSetup(server) {

    var promise = new Promise(function (resolve, reject) {
        try {
            server.use((0, _methodOverride2.default)(function (req, res) {
                if (req.body && _typeof(req.body) === 'object' && '_method' in req.body) {
                    var method = req.body._method;
                    delete req.body._method;
                    return method;
                }
            }));

            server.use(_bodyParser2.default.json());
            server.use(_bodyParser2.default.urlencoded({
                extended: true
            }));

            server.use((0, _helmet2.default)({
                noSniff: true
            }));

            server.use((0, _cors2.default)());

            server.use((0, _expressSession2.default)({
                secret: _config2.default.sessionSecret,
                saveUninitialized: true,
                resave: false
            }));

            server.use(_express2.default.static(_path2.default.join(__dirname, '../../client')));

            global.yotiClient = new _yotiNodeSdk2.default(SDK_ID, PEM);

            (0, _routes2.default)(server);

            resolve(server);
        } catch (error) {
            reject(error);
        }
    });

    return promise;
}