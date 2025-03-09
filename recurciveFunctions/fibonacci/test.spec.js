const assert = require('assert');
const fibInit = require('./fib');
const fibRecurcive = require('./fib');

describe('fibInit', function() {
    it('returns 1 for number 1', function() {
        assert.deepEqual(fibInit(1), 1);
    });
    
    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(2), 1);
    });
    
    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(3), 2);
    });

    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(4), 3);
    });

    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(5), 5);
    });

    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(6), 8);
    });

    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(7), 13);
    });

    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibInit(77), 5527939700884757);
    });
})

describe('fibRecurcive', function() {
    it('returns fibonacci number for number', function() {
        assert.deepEqual(fibRecurcive(77), 5527939700884757);
    });
})