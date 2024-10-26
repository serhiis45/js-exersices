
function checkSpam(srt) {
  let lowerCaseStr = srt.toLowerCase();

  return lowerCaseStr.includes('viagra') || lowerCaseStr.includes('xxx');
}

module.exports = checkSpam;

