
function camelize(str) {
  return str
  .split('-')
  .map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join('');
};

//2nd impementation via if-else
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => {
//       if (index == 0) {
//         return word;
//       } else {
//         return word[0].toUpperCase() + word.slice(1);
//       }
//     })
//     .join('');
// }

console.log(camelize('background-color'));

module.exports = camelize;
