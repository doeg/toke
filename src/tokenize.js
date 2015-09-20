"use strict";

import Constants from "./constants";
import Token from "./token";

const RE = {
  token: /\{(\w+)\}/,
};

export default function(template, opts) {

  var tokens = template.trim().split(/\s+/);

  return tokens.map(token => {

    // Check if the token is a POS
    var pos = RE.token.exec(token);
    var type;
    var token;

    if (pos && pos.length >= 2) {
      type = Constants.TYPES.POS;
      token = pos[1];
    }

    else {
      type = Constants.TYPES.TEXT;
      token = token;
    }

    return new Token({ token: token, type: type });
  });
}
