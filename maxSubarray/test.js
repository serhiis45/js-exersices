const assert = require('assert');
const { getMaxSubSum, isNegative, isAllNumbersNegative } = require('./maxSubarray');

describe("getMaxSubSum", function() {
  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -9]), 5);
  });

  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([2, -1, 2, 3, -9]), 6);
  });

  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });

  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([-2, -1, 1, 2]), 3);
  });

  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });

  it('should calculate sum of max sum of subarray ', function() {
    assert.strictEqual(getMaxSubSum([1, 2, 3]), 6);
  });

  it('should return zero when all numbers are negative', function() {
    assert.strictEqual(getMaxSubSum([-1, -2, -3]), 0);
  });
});


describe("isNegative", function() {
  it('should return true for negative number', function() {
    assert.strictEqual(isNegative(-100), true);
  });  
  
  it('should return true for negative number', function() {
    assert.strictEqual(isNegative(-1), true);
  });  

  it('should return false for zero number', function() {
    assert.strictEqual(isNegative(0), false);
  });
  
  it('should return false for positive number', function() {
    assert.strictEqual(isNegative(1), false);
  });

  it('should return true for positive number', function() {
    assert.strictEqual(isNegative(123), false);
  });  
});

describe("isAllNumbersNegative", function() {
  it('should return true for all negative numbers in array', function() {
    assert.strictEqual(isAllNumbersNegative([-1, -2]), true);
  });   

  it('should return false if zero is present in array', function() {
    assert.strictEqual(isAllNumbersNegative([-1, -2, 0, -1]), false);
  });

  it('should return false if zero is present in array', function() {
    assert.strictEqual(isAllNumbersNegative([0, -2, -3, -1]), false);
  });

  it('should return false if zero is present in array', function() {
    assert.strictEqual(isAllNumbersNegative([-9, -2, -3, 0]), false);
  });
  
  it('should return false if at least one number is positive', function() {
    assert.strictEqual(isAllNumbersNegative([-1, 2, -4, 1]), false);
  });

  it('should return false if at least one number is positive', function() {
    assert.strictEqual(isAllNumbersNegative([1, -2, -4, -1]), false);
  });

  it('should return false if at least one number is positive', function() {
    assert.strictEqual(isAllNumbersNegative([-1, -2, -4, 1]), false);
  });

  it('should return false if at least one number is positive', function() {
    assert.strictEqual(isAllNumbersNegative([1, 2, 4, 1]), false);
  });
});