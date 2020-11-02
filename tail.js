// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.assert(false, `🔴 ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require("./assertEqual");

const tail = function(array) {
  let chopped = [];
  chopped = array.slice(1);
  return chopped;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const animals = ["frog", "skunk", "badger", "quokka"]
// console.log(tail(words));
// console.log(tail(animals))

// assertEqual(tail(words).length, 2);
// assertEqual(tail(animals).length, 3)
module.exports = tail;