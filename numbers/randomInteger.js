 function randomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
 }


// test of probability
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0
for (let i = 0; i < 10000; i++){
  let value = randomInteger(2, 5);
  if(value === 1) {
    a++;
  } else if(value === 2) {
    b++;
  } else if (value === 3) {
    c++;
  } else if (value === 4) {
    d++;
  } else {
    e++;
  }
}

console.log(a, b, c, d, e);

