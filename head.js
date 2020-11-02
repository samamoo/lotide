// const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
//   } else {
//     console.assert(false, `🔴 ${actual} !== ${expected}`);
//   }
// };

const head = function(array) {
  let first = "";
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      first = array[i];
      return first;
    }
  }
}
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
module.exports = head;