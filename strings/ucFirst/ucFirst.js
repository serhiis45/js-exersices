
function ucFirst(str) {
  if (str === '') return '';
  return str[0].toUpperCase() + str.slice(1);
};

// 2nd implementation
// function ucFirst(str) {
//   if (str.length === 0) return '';
//   return str[0].toUpperCase() + str.slice(1);
// };

//3rd implementation
// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// };


module.exports = ucFirst;
