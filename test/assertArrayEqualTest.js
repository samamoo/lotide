const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');


describe("Asserting Arrays", function() {
  it("should return true if array [1,2,3] equals [1,2,3]", function() {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  });
  it("should return false if array [1,2,3] equals [3,2,1]", function() {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true if ['1','2','3'] equals ['1','2','3']", function() {
    assert.strictEqual(eqArrays(['1','2','3'],['1','2','3']), true);
  });
  it ("should return false if ['1','2','3'] equals ['1','2',3]", function() {
    assert.strictEqual(eqArrays(['1','2','3'], ['1','2',3]), false)
  })
})