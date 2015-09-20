var assert = require("assert");
var expect = require("chai").expect;
var toke = require("../toke");

describe("toke", () => {
  it("returns a string", () => {
    var result = toke.mk("NP VP");
    expect(result).to.be.a("string");
  });
});

describe("compile", () => {
});

describe("compile token", () => {

  it("compiles a single token into its constituents", function() {
    var POS = { NP: [["Det", "Adj", "N"]] };
    var result  = toke.compileToken("NP", POS);
    expect(result).to.eql(["Det", "Adj", "N"]);
  });

  it("returns an array even for single constituents", function() {
    var POS = { NP: [["NN"]] };
    var result  = toke.compileToken("NP", POS);
    expect(result).to.eql(["NN"]);
  });

  it("returns null for terminal constituents", function() {
    var POS = { N: null };
    var result  = toke.compileToken("N", POS);
    expect(result).to.equal(null);
  });

  it("throws an error for tokens not in the POS", function() {
    expect(function() {
      toke.compileToken("hodor", {});
    }).to.throw("invalid token: hodor");
  });
});
