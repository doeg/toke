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

  tokenize() {
    return [];
  }
}
