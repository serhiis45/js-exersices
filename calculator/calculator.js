

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
  
  read() {
    this.a = +prompt('Enter first value', '0');
    this.b = +prompt('Enter second value', '0');
  },
};


calculator.read();
alert(calculator.sum());
alert(calculator.mul());