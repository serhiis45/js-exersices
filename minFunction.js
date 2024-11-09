// 1nd implementation
function min1(a, b) {
  return a < b ? a : b;
}

console.log(min1(2, 5) == 2);
console.log(min1(3, -1) == -1);
console.log(min1(1, 1) == 1);
console.log();


// 2nd implementation
function min2 (a, b) {
  if (a < b ) {
    return a;
  } else {
    return b;
  }
}
  
console.log(min2(2, 5) == 2);
console.log(min2(3, -1) == -1);
console.log(min2(1, 1) == 1);
console.log();
