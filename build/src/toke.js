"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _utils = require("./utils");

var utils = _interopRequireWildcard(_utils);

var _libLexicon = require("../lib/lexicon");

var _libLexicon2 = _interopRequireDefault(_libLexicon);

var _libGrammar = require("../lib/grammar");

var _libGrammar2 = _interopRequireDefault(_libGrammar);

/**
 *
 */

var _default = (function () {

  /**
   * Instantiates a new Toke object.
   */

  function _default(opts) {
    _classCallCheck(this, _default);

    var opts = opts || {};
    this.grammar = opts.grammar || _libGrammar2["default"];
    this.lexicon = opts.lexicon || _libLexicon2["default"];
  }

  /**
   * Compiles the given template string. Example:
   *
   *    var sentence = token.mk("{NP} {VP}");
   *
   */

  _createClass(_default, [{
    key: "mk",
    value: function mk(str) {
      return utils.mk(str, this.grammar, this.lexicon);
    }
  }, {
    key: "compileToken",
    value: function compileToken(token, pos) {
      return utils.compileToken(token, pos);
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];
//# sourceMappingURL=toke.js.map
