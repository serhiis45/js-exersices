// first implemnentation

// function readNumber() {
//   while(true) {
//     let number = prompt("Enter the number", '');
    
//     if(number === null || number === '') {
//       return null;
//     } else if (!Number.isFinite(+number)) {
//       continue;
//     }

//     return +number;
//   } 
// }


//final implementation
function readNumber() {
  let num;

  do {
    num = prompt('Provide number', '');
  } while (!isFinite(num));

  if (num === '' || num === null){
    return null;
  }

  return +num;
}