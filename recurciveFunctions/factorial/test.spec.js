const assert = require('assert');
const factorial = require ('./factorial');

describe('factorial', function() {
    it('returns factorial of 1', function() {
        assert.strictEqual(factorial(1), 1);
    });
    
    it('returns factorial of 5', function() {
        assert.strictEqual(factorial(5), 120);
    });
})
