"use strict";

import * as utils from "./utils";
import defaultLexicon from "../lib/lexicon";
import defaultGrammar from "../lib/grammar";


/**
 *
 */
export default class {

  /**
   * Instantiates a new Toke object.
   */
  constructor(opts) {
    var opts = opts || {};
    this.grammar = opts.grammar || defaultGrammar;
    this.lexicon = opts.lexicon || defaultLexicon;
  }

  /**
   * Compiles the given template string. Example:
   *
   *    var sentence = token.mk("{NP} {VP}");
   *
   */
  mk(str) {
    return utils.mk(str, this.grammar, this.lexicon);
  }

  compileToken(token, pos) {
    return utils.compileToken(token, pos);
  }

}
