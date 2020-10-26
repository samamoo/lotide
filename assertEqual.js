const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.assert(false, "🔴 " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
