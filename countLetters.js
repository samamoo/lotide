//ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};

// COUNT LETTERS FUNCTION
const countLetters = function(string) {
  let output = {}
  for (let letter of string) {
    if (letter === " ") {
    } else {
    output[letter] = (output[letter] + 1) || 1;
    }
  }
  return output;
}
console.log(countLetters("I love you"))