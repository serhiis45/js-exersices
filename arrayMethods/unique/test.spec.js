const assert = require('assert');
const unique = require('./unique');

describe ('unique', function() {

  it('removes non-unique elements', function() {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    assert.deepEqual(unique(strings), ['Hare', 'Krishna', ':-O']);
  });

  it('does not modify the source array', function() {
    let source = ['Harry', 'Maggie', 'Harry'];
    unique(source);
    assert.deepEqual(source, ['Harry', 'Maggie', 'Harry'])
  })
})