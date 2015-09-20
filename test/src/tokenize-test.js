import { expect } from "chai";
import Constants from "../../src/constants";
import Token from "../../src/token";
import tokenize from "../../src/tokenize";

describe("tokenize", function() {

  it("splits a string into tokens", () => {
    var result = tokenize("the {NP} {VP}");
    expect(result).to.eql([
      new Token({ token: "the", type: Constants.TYPES.TEXT }),
      new Token({ token: "NP" , type: Constants.TYPES.POS  }),
      new Token({ token: "VP",  type: Constants.TYPES.POS  }),
    ]);
  });

  it("ignores whitespace", () => {
    var result = tokenize(" the      {NP}   {VP}   ");
    expect(result).to.eql([
      new Token({ token: "the", type: Constants.TYPES.TEXT }),
      new Token({ token: "NP" , type: Constants.TYPES.POS  }),
      new Token({ token: "VP",  type: Constants.TYPES.POS  }),
    ]);
  });
});
