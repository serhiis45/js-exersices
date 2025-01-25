module.exports = getMaxSubSum;

// slow version
// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixed = 0;
//     for (let j = i; j < arr.length; j++){
//       sumFixed += arr[j];
//       maxSum = Math.max(maxSum, sumFixed);
//     }
//   }

//   return maxSum;
// };

// fast version
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}