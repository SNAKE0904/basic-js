const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === 'undefined') {
      this.chain.push('')
    };
    if (value === null) {
      this.chain.push('null');
    }
    else {
      this.chain.push(value);
    }
    return this;

  },
  removeLink(position) {
    if (this.chain.length < position || position < 1) {
      this.chain = [];
      throw new Error('THROWN')
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this
  },
  finishChain() {
    const chahn = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = []
    return chahn;
  }
};

module.exports = chainMaker;
