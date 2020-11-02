const eqArrays = require('./eqArrays.js');

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}` );
    return;
  }
  console.assert(false, `🔴 ${array1} !== ${array2}`);
}

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertArrayEqual([1, 2, 3], [1, 2, 3]);
// assertArrayEqual([1, 2, 3], [3, 2, 1]);
// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);

module.exports = assertArrayEqual;