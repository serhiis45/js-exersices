function extractCurrencyValue(str) {
    return +str.slice(1);
}

module.exports = extractCurrencyValue;