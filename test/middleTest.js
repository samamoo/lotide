const assert = require('chai').assert;
const middle = require('../middle.js')

// assertArrayEqual(middle([1, 2, 3]), [2])
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

describe("#middle", function() {
  // it("should return middle array [2]", function() {
  //   assert(middle([1, 2, 3]), [2]);    //THIS CAN WORK TOO.
  // });
  it("should return true when comparing middle values", function() {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it("should return [3,4] when given array", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
})