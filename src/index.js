class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.initialValue = initialValue.toString();
  }
  add(number) {
    // your implementation
      this.initialValue = this.initialValue.concat(`+${number}`);
      return this;
  }
  
  subtract(number) {
    // your implementation
      this.initialValue = this.initialValue.concat(`-${number}`);
      return this;
  }

  multiply(number) {
    // your implementation
    this.initialValue = this.initialValue.concat(`*${number}`);
    return this;

  }

  devide(number) {
    // your implementation
    this.initialValue = this.initialValue.concat(`/${number}`);
    return this;
  }

  pow(number) {
    // your implementation
    this.initialValue = this.initialValue.concat(`**${number}`);
    return this;
  }

  valueOf() {
    return eval(this.initialValue);
  }
}

module.exports = SmartCalculator;
