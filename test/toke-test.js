var expect = require("chai").expect;
var Toke = require("../../toke");

describe("toke", () => {
  it("does anything", () => {
    var t = new Toke({ lex: "hi" });
    expect(true).to.eql(true);
  });

});
