var expect = require("chai").expect;
var Toke = require("../../toke");

describe("compile", () => {

  it("returns a string", () => {
    var toke = new Toke();
    var result = toke.compile("{NP} {VP}");
    expect(result).to.be.a("string");
  });
});
