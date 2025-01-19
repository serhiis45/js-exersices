function checkSpam(str){
  let lowerCasedStr = str.toLowerCase();
  return lowerCasedStr.includes('viagra') || lowerCasedStr.includes('xxx');
}

module.exports = checkSpam;