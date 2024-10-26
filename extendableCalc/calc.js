
function Calculator() {
   
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

      if(isNaN(a) || isNaN(b)) {
        return NaN;
      };
      if(!this.methods[op]) {
        return 'unknown method';
      }

      return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  }
}

let calculator = new Calculator();

console.log(calculator.calculate('2 + 3'));
console.log(calculator.calculate('2 - 3'));
console.log(calculator.calculate('f + 3'));
console.log(calculator.calculate('1 / 3'));


let extCalc = new Calculator();
extCalc.addMethod('*', (a, b) => a * b);
console.log(extCalc.calculate('4 * 4'));