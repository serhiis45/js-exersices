const assert = require('assert');
const copySorted = require('./copySorted');

describe('copySorted', function() {
  
  arr = ['HTML', 'JavaScript', 'CSS'];

  it('returns the sorted array', function() {
    assert.deepEqual(copySorted(arr), [ 'CSS', 'HTML', 'JavaScript'])
  });

  it('doesn\'t modify the basic array', function() {
    copySorted(arr);
    assert.deepEqual(arr, ['HTML', 'JavaScript', 'CSS'])
  });

});
