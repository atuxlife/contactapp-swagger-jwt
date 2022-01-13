"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(process.env.SV_PORT || 3000);

console.log('Server listen on port ', process.env.SV_PORT || 3000);