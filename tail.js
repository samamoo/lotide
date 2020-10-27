const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let chopped = [];
  chopped = array.slice(1);
  return chopped;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);