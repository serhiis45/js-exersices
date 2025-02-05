const assert = require('assert');
const filterRange = require('./filterRange');

describe("filterRange", function() {
  it("returns the filtered values", function() {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4); 
    assert.deepEqual(filtered, [3, 1]);
  });

  it("returns the filtered values  when neative numbers are present", function() {
    let arr = [5, 3, 8, 1, -2, -4];
    let filtered = filterRange(arr, -5, 0); 
    assert.deepEqual(filtered, [-2, -4]);
  });

  it("returns the filtered values with zero range", function() {
    let arr = [5, 3, 8, 0, 1, -2, -4];
    let filtered = filterRange(arr, 0, 0); 
    assert.deepEqual(filtered, [0]);
  });

  it("returns an empty array when filter is out of range", function() {
    let arr = [5, 3, 8, 0, 1, -2, -4];
    let filtered = filterRange(arr, 10, 20); 
    assert.deepEqual(filtered, []);
  });

  it("returns an empty array when given array is empty", function() {
    let arr = [];
    let filtered = filterRange(arr, 10, 20); 
    assert.deepEqual(filtered, []);
  });

  it("doesn't change the array", function() {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4); 
    assert.deepEqual(arr, [5,3,8,1]);
  });
});
