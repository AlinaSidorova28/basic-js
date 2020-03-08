const chainMaker = {
  step: [],
  getLength() {
    this.step.length;
    return this;
  },
  addLink(value) {
    if(value === undefined)
      value = "( )";
    else
      value = "( " + value + " )";
    this.step.push(value);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.step.length || typeof position !== "number" || position !== parseInt(position))
    {
      this.step = [];
      throw Error;
    }
    this.step.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.step.reverse();
    return this;
  },
  finishChain() {
    let result = this.step.join("~~");
    this.step = [];
    return result;
  }
};

module.exports = chainMaker;
