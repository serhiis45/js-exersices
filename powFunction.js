

function pow(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

let x = prompt("Enter first number", "1");
let n = prompt("Enter second number", "1");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}