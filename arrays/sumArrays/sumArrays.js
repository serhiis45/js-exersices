
function sumInput() {
  
  let numbers = [];
  while(true){  
    let number = prompt('Enter a number: ', '');
    
    if(number === '' || number === null || !isFinite(number)) break;
    
    numbers.push(number);
  }

  let sum = 0;
  for (let number of numbers ) {
    sum += number;
  }  

  return sum;
}

