//ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};

//COUNTONLY FUNCTION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) { //pulls out the value of the key whereas if(item) is the key
      for (let i = 0; i < firstNames.length; i++) {
        if (item === firstNames[i]) {
          output[firstNames[i]] = (output[firstNames[i]] + 1) || 1;
        }
      }
    }
  }
  return output;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);