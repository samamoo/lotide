//const { join } = require('path');

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else{
      console.assert(false, `🔴 ${inspect(actual)} !=== ${inspect(expected)}` )
  }
};

const cat = {
breed: "tabby", 
hair: "short"
}
const cat2 = {
breed: "tabby", 
hair: "short"
}
assertObjectsEqual(cat, cat2)