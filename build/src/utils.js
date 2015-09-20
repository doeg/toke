"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = compile;
exports.compileToken = compileToken;
exports.populate = populate;
exports.mk = mk;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _tokenize = require("./tokenize");

var _tokenize2 = _interopRequireDefault(_tokenize);

/**
 * Compiles the string down to its base tokens.
 */

function compile(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var tokens = _x,
        pos = _x2,
        i = _x3;
    i = compiled = isDone = undefined;
    _again = false;

    var i = i || 0;
    var compiled = [];
    var isDone = true;

    tokens.forEach(function (token) {

      var constituent = compileToken(token, pos);

      // Terminal tokens get compiled to null, meaning that the token is
      // its own constituent and needs no further recursion.
      if (constituent === null) {
        isDone = isDone && true;
        compiled.push(token);
      }

      // Otherwise, if the token is not terminal, push its compiled constituents
      // onto the final phrase grammar and indicate that at least one more
      // recursive step is needed
      else {
          isDone = isDone && false;
          compiled = compiled.concat(constituent);
        }
    });

    if (isDone) {
      return compiled;
    } else {
      _x = compiled;
      _x2 = pos;
      _x3 = i++;
      _again = true;
      continue _function;
    }
  }
}

;

/**
 * For a single token ("NP"), returns a randomly-chosen constituent phrase
 * (["Det", "N"]), as given by the rules in pos. If the token is already
 * terminal, null is returned.
 */

function compileToken(token, pos) {

  if (!(token in pos)) {
    throw new Error("invalid token: " + token);
  }

  var constituents = pos[token];

  if (constituents === null) {
    return null;
  } else {
    var sub = constituents[Math.floor(Math.random() * constituents.length)];
    if (!Array.isArray(sub)) sub = [sub];
    return sub;
  }
}

;

/**
 * Populates an array of base tokens with actual words.
 * TODO: this can probably be combined with compile() for simplicity.
 */

function populate(tokens, lexicon) {
  var str = [];
  for (var i = 0; i < tokens.length; i++) {

    var token = tokens[i];
    if (!(token in lexicon)) {
      throw new Error("token '" + token + "' not known in lexicon");
    }

    var words = lexicon[token];
    var word = words[Math.floor(Math.random() * words.length)];
    str.push(word);
  }
  return str.join(" ");
}

;

function mk(str, grammar, lexicon, opts) {
  var tokens = (0, _tokenize2["default"])(str).map(function (t) {
    return t.token;
  });
  var compiled = this.compile(tokens, grammar);
  return this.populate(compiled, lexicon);
}

;
//# sourceMappingURL=utils.js.map
