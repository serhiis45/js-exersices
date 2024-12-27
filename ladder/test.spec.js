const assert = require('assert');
const ladder = require('./chainedLadder');
const { beforeEach } = require('mocha');

beforeEach(function() {
  ladder.step = 0;
})

describe("ladder", function() {
  it('up() should return this', function() {
    assert.equal(ladder.up(), ladder);
  });

  it('down() should return this', function() {
    assert.equal(ladder.down(), ladder);
  });

  it('down() should decrease step', function() {
    assert.equal(ladder.down().step, -1);
  });

  it('down().up().up().up() ', function() {
    assert.equal(ladder.down().up().up().up().step, 2);
  });

  it('showStep() should return this', function() {
    assert.equal(ladder.showStep(), ladder);
  });

  it('up().up().down().showStep().down().showStep()', function () {
    assert.equal(ladder.up().up().down().showStep().down().showStep().step, 0)
  });

  after(function() {
    ladder.step = 0;
  });
});
