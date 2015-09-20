export default class {
  constructor(opts) {
    var opts = opts || {};
    this.lexicon = opts.lexicon || require("./lib/lexicon");
    this.grammar = opts.grammar || require("./lib/grammar");
    console.log(this);
  }
}
