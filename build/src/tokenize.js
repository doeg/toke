"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _constants = require("./constants");

var _constants2 = _interopRequireDefault(_constants);

var _token = require("./token");

var _token2 = _interopRequireDefault(_token);

var RE = {
  token: /\{(\w+)\}/
};

exports["default"] = function (template, opts) {

  var tokens = template.trim().split(/\s+/);

  return tokens.map(function (token) {

    // Check if the token is a POS
    var pos = RE.token.exec(token);
    var type;
    var token;

    if (pos && pos.length >= 2) {
      type = _constants2["default"].TYPES.POS;
      token = pos[1];
    } else {
      type = _constants2["default"].TYPES.TEXT;
      token = token;
    }

    return new _token2["default"]({ token: token, type: type });
  });
};

module.exports = exports["default"];
//# sourceMappingURL=tokenize.js.map
