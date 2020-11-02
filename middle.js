const eqArrays = require('./eqArrays.js');
const assertArrayEqual = require('./assertArrayEqual.js');

//MIDDLE
const middle = function(array) {
  let middleValue = []; 
  if (array.length % 2 === 0) { //EVEN
    middleValue.push(array[(array.length/2)-1])
    middleValue.push(array[array.length/2])
    return middleValue;
  }else{ //ODD
    middleValue.push(array[(array.length/2) - 0.5]);
    return middleValue
  }
};

// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5, 6])); 
// assertArrayEqual(middle([1, 2, 3]), [2])
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

module.exports = middle;