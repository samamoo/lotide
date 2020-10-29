//ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};
//FIND KEY BY VALUE FUNCTION
const findKeyByValue = function(object, value) {
  for (let thing in object) {
    if (value === object[thing]) {
      return thing;
    }
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "The Grudge",
  romance: "Knocked Up",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log(findKeyByValue(bestTVShowsByGenre, "Knocked Up"), "romance");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);