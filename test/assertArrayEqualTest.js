const eqArrays = require('../eqArrays.js');
const assertArrayEqual = require('../assertArrayEqual.js');

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);