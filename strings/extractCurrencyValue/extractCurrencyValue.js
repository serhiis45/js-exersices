
function extractCurrencyValue(str) {
  return +str.replace('$', '');
};


module.exports = extractCurrencyValue;
