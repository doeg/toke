var assert = require("assert");
var expect = require("chai").expect;
var Toke = require("../../src/toke");

import defaultLexicon from "../../lib/lexicon";
import defaultGrammar from "../../lib/grammar";

describe("Toke", () => {

  describe("instantiation", () => {

    it("uses a default grammar", () => {
      var toke = new Toke();
      expect(toke.grammar).to.eql(defaultGrammar);
    });

    it("uses custom grammars", () => {
      var grammar = {"hodor": "hodor?"};
      var toke = new Toke({ grammar: grammar });
      expect(toke.grammar).to.eql(grammar);
    });

    it("uses a default lexicon", () => {
      var toke = new Toke();
      expect(toke.lexicon).to.eql(defaultLexicon);
    });

    it("uses custom grammars", () => {
      var lexicon = {"hodor": "hodor?"};
      var toke = new Toke({ lexicon: lexicon });
      expect(toke.lexicon).to.eql(lexicon);
    });
  });

  describe("mk", () => {
    it("returns a string", () => {
      var toke = new Toke();
      var result = toke.mk("NP VP");
      expect(result).to.be.a("string");
    });
  });

  describe("compile", () => {
  });

  describe("compile token", () => {

    it("compiles a single token into its constituents", function() {
      var POS = { NP: [["Det", "Adj", "N"]] };
      var toke = new Toke();
      var result  = toke.compileToken("NP", POS);
      expect(result).to.eql(["Det", "Adj", "N"]);
    });

    it("returns an array even for single constituents", function() {
      var POS = { NP: [["NN"]] };
      var toke = new Toke();
      var result  = toke.compileToken("NP", POS);
      expect(result).to.eql(["NN"]);
    });

    it("returns null for terminal constituents", function() {
      var POS = { N: null };
      var toke = new Toke();
      var result  = toke.compileToken("N", POS);
      expect(result).to.equal(null);
    });

    it("throws an error for tokens not in the POS", function() {
      expect(function() {
        var toke = new Toke();
        toke.compileToken("hodor", {});
      }).to.throw("invalid token: hodor");
    });
  });
});
