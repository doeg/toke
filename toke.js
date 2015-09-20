import POS from "./lib/pos";
import LEX from "./lib/lexicon";
import tokenize from "./src/tokenize";

const LIMIT = 3;

/**
 * Compiles the string down to its base tokens.
 */
export function compile(tokens, pos, i) {
  var i = i || 0;
  var compiled = [];
  var isDone = true;

  tokens.forEach(token => {

    var constituent = this.compileToken(token, pos);

    // Terminal tokens get compiled to null, meaning that the token is
    // its own constituent and needs no further recursion.
    if (constituent === null) {
      isDone = isDone && true;
      compiled.push(token)
    }

    // Otherwise, if the token is not terminal, push its compiled constituents
    // onto the final phrase grammar and indicate that at least one more
    // recursive step is needed
    else {
      isDone = isDone && false;
      compiled = compiled.concat(constituent);
    }
  });

  return isDone ? compiled : this.compile(compiled, pos, i++);
};

/**
 * For a single token ("NP"), returns a randomly-chosen constituent phrase
 * (["Det", "N"]), as given by the rules in pos. If the token is already
 * terminal, null is returned.
 */
export function compileToken(token, pos) {

  if (!(token in pos)) {
    throw new Error("invalid token: " + token);
  }

  var constituents = pos[token];

  if (constituents === null) {
    return null;
  } else {
    var sub = constituents[Math.floor(Math.random()*constituents.length)];
    if (!Array.isArray(sub)) sub = [sub];
    return sub;
  }
};

/**
 * Populates an array of base tokens with actual words.
 * TODO: this can probably be combined with compile() for simplicity.
 */
export function populate(tokens, lexicon) {
  var str = [];
  for (var i = 0; i < tokens.length; i++) {

    var token = tokens[i];
    if (!(token in lexicon)) {
      throw new Error("token '" + token + "' not known in lexicon");
    }

    var words = lexicon[token];
    var word = words[Math.floor(Math.random()*words.length)];
    str.push(word);
  }
  return str.join(" ");
};

export function mk(str, opts) {
  var tokens = tokenize(str).map(t => t.token);
  var compiled = this.compile(tokens, POS);
  return this.populate(compiled, LEX);
};

