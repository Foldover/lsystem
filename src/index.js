'use strict';

class LSystem {
  constructor(alphabet, axiom) {
    this.axiom = axiom.slice(0);
    this._alphabet = alphabet;
    this._rules = {};
    this._alphabet.split('')
      .forEach(letter => {
        this._rules[letter] = letter;
    });
  }

  set axiom (axiom) {
    this._axiom = axiom.slice(0);
  }

  get axiom () {
    return this._axiom;
  }

  set rules (rules) {
    this._rules = rules;
  }

  produce(N) {
    let result = this._axiom.slice(0);
    for (let n = 0; n < N; n++) {
      result = result.split('').map(a => this._rules[a]).join('');
    }
    return result;
  }

  addRule(predecessor, successor) {
    this._rules[predecessor] = successor;
  }
}

module.exports = LSystem;
