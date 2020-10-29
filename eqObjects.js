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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);//array of object keys
  let keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length) {
    return false;
  }for (let item of keys1) {
      if(Array.isArray(object1[item]) && Array.isArray(object2[item])){
        eqArrays(object1[item], object2[item]);
        if (!eqArrays(object1[item], object2[item])) {
          return false
        }
      }else{
      if (object1[item] !== object2[item]) {
        return false;
      }
    } 
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));


const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));