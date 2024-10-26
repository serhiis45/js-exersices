
function truncateText(str, maxlength) {
    
    if (str.length <= maxlength) {
      return str;
    } else if (maxlength == 1) {
      return str[0] + "…";
    } else {
      return str.slice(0, maxlength - 1) + "…";
    }

} 

module.exports = truncateText;