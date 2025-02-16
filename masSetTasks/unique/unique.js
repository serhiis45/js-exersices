// function unique(arr) {
//     let uniquedSet = new Set(arr);
//     let uniquedArr = [];

//     uniquedSet.forEach(element => {
//         uniquedArr.push(element);
//     });
    
//     return uniquedArr;
// }

function unique(array) {
    return Array.from(new Set(array));
}
  
module.exports = unique;
