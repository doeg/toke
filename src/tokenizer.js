"use strict";

import Token from "./token";


/**
 *
 */
export default class {

  /**
   * Instantiates a new Tokenizer to operate on the given template.
   *
   * @param {string} template
   */
  constructor(template) {
    if (typeof template === "string") {
      this.template = template;
    } else throw new Error("template must be a string");
  }

  /**
   * Tokenizes the template string into an array of tokens.
   *
   * @returns {[Token]}
   */
  tokenize() {

    if (!this.template) return [];

    var words = this.template.split(/\s+/);
    return words.map(word => {
      return new Token(word);
    });
  }
}
