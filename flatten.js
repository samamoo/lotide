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
//ASSERT EQUAL ARRAY
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}` );
    return;
  }
  console.assert(false, `🔴 ${array1} !== ${array2}`);
}

const flatten = function(array) {
  let newArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      for (let item2 of item) {
        newArray.push(item2)
      }
    }else{
      newArray.push(item)
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]