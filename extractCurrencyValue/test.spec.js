const assert = require('assert');
const extractCurrencyValue = require('./extractCurrencyValue');

describe("is should extract currency value", function() {
    
    it('should extract currency value', function() {
      assert.strictEqual(extractCurrencyValue('$120'), 120);
    });

    it('should extract currency value', function() {
      assert.strictEqual(extractCurrencyValue('$1'), 1);
    });

    it('should extract currency value', function() {
      assert.strictEqual(extractCurrencyValue('$0'), 0);
    });

})