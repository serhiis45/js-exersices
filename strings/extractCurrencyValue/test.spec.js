const assert = require('assert');
const extractCurrencyValue = require('./extractCurrencyValue');

describe("extractCurrencyValue", function() {
  it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });
});
