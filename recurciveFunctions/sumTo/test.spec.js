const assert = require('assert');
const sumToLoop = require('./sumTo');
const sumToRecurcive = require('./sumTo');
const sumToArithmeticProgression = require('./sumTo');

describe('sumToLoop', function() {
    it('calculates the sum of number 100', function() {
        assert.strictEqual(sumToLoop(100), 5050);
    });

    it('calculates the sum of number 1', function() {
        assert.strictEqual(sumToLoop(1), 1);
    });

    it('returns the sum for number 100000', function() {
        assert.strictEqual(sumToLoop(100000),5000050000);
    });
});

describe('sumToRecurcive', function() {
    it('calculates the sum of number 100', function() {
        assert.strictEqual(sumToRecurcive(100), 5050);
    });

    it('calculates the sum of number 1', function() {
        assert.strictEqual(sumToRecurcive(1), 1);
    });

    it('returns the sum for number 100000', function() {
        assert.strictEqual(sumToRecurcive(100000),5000050000);
    });
});

describe('sumToArithmeticProgression', function() {
    it('calculates the sum of number 100', function() {
        assert.strictEqual(sumToArithmeticProgression(100), 5050);
    });

    it('calculates the sum of number 1', function() {
        assert.strictEqual(sumToArithmeticProgression(1), 1);
    });

    it('returns the sum for number 100000', function() {
        assert.strictEqual(sumToArithmeticProgression(100000),5000050000);
    });
})