//ASSERTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}` );
  } else {
    console.assert(false, `🔴 ${actual} !== ${expected}`);
  }
};

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

//ASSERT ARRAY EQUAL
const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}` );
    return;
  }
  console.assert(false, `🔴 ${array1} !== ${array2}`);
}

// LETTER POSITIONS FUNCTION
const letterPositions = function(string) {
  let output = {}
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === " ") {
    } else {
      if (output[letter]) {
        output[letter].push(i);
      }else{
        let array = [i]
        output[letter] = array;
      }
    }
  }
  return output;
}

console.log(letterPositions("hello"))
assertArrayEqual(letterPositions("hello").e, [1]);