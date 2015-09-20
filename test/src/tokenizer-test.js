"use strict";

import { expect } from "chai";
import Tokenizer from "../../src/tokenizer";

describe("tokenizer", () => {


  describe("instantiation", () => {

    it("throws if the template is not a string", () => {
      expect(() => {
        let tokenizer = new Tokenizer(5);
      }).to.throw("template must be a string");

      expect(() => {
        let tokenizer = new Tokenizer(null);
      }).to.throw("template must be a string");

      expect(() => {
        let tokenizer = new Tokenizer();
      }).to.throw("template must be a string");
    });
  });

  describe("tokenize()", () => {
    it("returns an empty array for empty templates", () => {
      let tokenizer = new Tokenizer("");
      var result = tokenizer.tokenize();
      expect(result).to.eql([]);
    });
  });

});
