const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;