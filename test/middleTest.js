const eqArrays = require('../eqArrays.js');
const assertArrayEqual = require('../assertArrayEqual.js');
const middle = require('../middle.js')

assertArrayEqual(middle([1, 2, 3]), [2])
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])