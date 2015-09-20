"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = compile;
exports.compileToken = compileToken;
exports.populate = populate;
exports.mk = mk;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _libGrammar = require("../lib/grammar");

var _libGrammar2 = _interopRequireDefault(_libGrammar);

var _libLexicon = require("../lib/lexicon");

var _libLexicon2 = _interopRequireDefault(_libLexicon);

var _tokenize = require("./tokenize");

var _tokenize2 = _interopRequireDefault(_tokenize);

var LIMIT = 3;

/**
 * Compiles the string down to its base tokens.
 */

function compile(tokens, pos, i) {
  var _this = this;

  var i = i || 0;
  var compiled = [];
  var isDone = true;

  tokens.forEach(function (token) {

    var constituent = _this.compileToken(token, pos);

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

  return isDone ? compiled : this.compile(compiled, pos, i++);
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

function mk(str, opts) {
  var tokens = (0, _tokenize2["default"])(str).map(function (t) {
    return t.token;
  });
  var compiled = this.compile(tokens, _libGrammar2["default"]);
  return this.populate(compiled, _libLexicon2["default"]);
}

;
//# sourceMappingURL=toke.js.map
