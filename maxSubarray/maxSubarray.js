
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
      partialSum += item;
      maxSum = Math.max(maxSum, partialSum);
      if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
  
}
  
function isAllNumbersNegative(array) {
  for (let number of array) {
    if (!isNegative(number)) {
      return false;
    }
  }
  return true;
}

function isNegative(number) {
    if (Math.sign(number) == -1) {
        return true;
    } else return false;
}  




module.exports = {getMaxSubSum, isNegative, isAllNumbersNegative};

  
  

