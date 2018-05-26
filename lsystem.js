'use strict';

class LSystem {
  constructor() {
    this.state = undefined;
    this.axiom = undefined;
    this.rules = new Map();
  }

  static produce(state, rules) {
    return state.split('').map(a => rules.get(a)).join('');
  }

  setAxiom(axiom) {
    this.axiom = axiom;
    this.state = this.axiom.slice();
  }

  addRule(predecessor, successor) {
    this.rules.set(predecessor, successor);
  }

  setRules(rulesMap) {
    this.rules = new Map(rulesMap);
  }

  reset() {
    this.state = this.axiom.slice();
  }

  * producer(N) {
    if (N != null) {
      for (let n = 0; n < N; n++) {
        this.state = LSystem.produce(this.state, this.rules);
        yield this.state;
      }
    } else {
      while (true) {
        this.state = LSystem.produce(this.state, this.rules);
        yield this.state;
      }
    }
  }
}
