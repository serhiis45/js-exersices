function unique(arr) {
  let filteredArr = []; 
  
  arr.forEach(element => {
    if(!filteredArr.includes(element)) {
      filteredArr.push(element)
    }
  });

  return filteredArr;
}


module.exports = unique;
