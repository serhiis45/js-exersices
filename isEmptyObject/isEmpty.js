// initial implementation
/* function isEmpty(obj) {
  let checkValue;

  for (key in obj) {
    checkValue = key;
  }

  return checkValue ? false : true;
} */

// final implementation
function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}


module.exports = isEmpty;