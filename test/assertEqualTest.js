const assert = require('chai').assert;

describe("asserting equal values", function() {
  it("should return correct 1 equals 1", function() {
    assert.strictEqual(1, 1);
  });
  it ("should return true", function() {
    assert.strictEqual("Lighthouse", "Lighthouse");
  });
})