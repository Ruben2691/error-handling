// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// since this isn't being passed an array as an argument
let res = sum(null);
// console.log(res);

//tests
try {
  //  since this evaluates to its return it'll naturally throw an error
  sum(null);
} catch (error) {
  // since this catches errors it'll catch it and print this message
  throw`Sorry, but null is not an array`;
}

2.

function sayName(string) {
  // this checks checks if the argument is passed is a string
  if (typeof string !== "string") {
    // if it isn't a string it will throw an error
    throw TypeError;
  }
  return string;
}
// tests
try {
  sayName("Alex");
  sayName(1);
  // this is looking for an error to be thrown
} catch (error) {
  // when an error is thrown this message will print
  console.log(`Invalid name! Must be a string!`);
}

// 3.
function greet(greeting) {
  // since greeting throws an error it will be false
  if (!greeting) {
    // because it is false it will throw an error
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try {
  greet()
} catch (error) {
  // then when the error is thrown it will console log this string
console.log(`Hello World!`)
}
