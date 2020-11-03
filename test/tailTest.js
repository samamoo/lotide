const assert = require('chai').assert;
const tail = require("../tail.js");


describe("tail of an array", function() {
  it("should return length of the remaining array to be 2", function() {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it("should return length of the remaining array to be 3", function() {
    assert.strictEqual(tail(["frog", "skunk", "badger", "quokka"]).length, 3);
  });
})