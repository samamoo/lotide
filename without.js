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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}` );
    return;
  }
  console.assert(false, `🔴 ${array1} !== ${array2}`);
}

const without = function(source, itemsToRemove) {
  let newArray = [];
  if (itemsToRemove.length === 1) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[k]) {
        newArray.push(source[i]);
      }
    }
  }else{ 
    for (let i = 0; i < source.length; i++) {
      if (!itemsToRemove.includes(source[i])) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};


// ["dick", "harry", "sally"], ["sally", "dick"]

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3" ])) // => ["1", "2"]
// console.log(without(["dick", "harry", "sally"], ["sally"])); 
console.log(without(["dick", "harry", "sally"], ["harry", "sally"])); // "dick" 

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);
