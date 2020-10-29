//EQ ARRAYS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
//ASSERT EQ ARRAYS
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}` );
    return;
  }
  console.assert(false, `🔴 ${array1} !== ${array2}`);
}

//MAP CODE 1
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

//CODE 1
const results1 = map(words, word => word[0]);
//CODE 2
const results2 = map(words, word => word + "nay");
//CODE 3
const results3 = map(words, word => word += word);
//console.log(results1)
//console.log(results2)
//console.log(results3)

assertArrayEqual(results1,["g","c","t","m","t"]);
assertArrayEqual(results2,["groundnay","controlnay","tonay","majornay","tomnay"]);
assertArrayEqual(results3,["groundground", "controlcontrol", "toto", "majormajor", "tomtom"])