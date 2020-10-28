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

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5, 6])); 
