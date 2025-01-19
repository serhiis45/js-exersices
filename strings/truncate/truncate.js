function truncate(str, maxlength) {
  if (maxlength >= str.length) return str;
  return str.replace(str.slice(maxlength - 1), '…');
}

// 2nd implementation
// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }


module.exports = truncate;
