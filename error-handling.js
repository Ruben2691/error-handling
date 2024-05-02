// // 1.
// function sum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// let res = sum(null);
// // console.log(res);

// //tests
// try {
//   sum(null);
// } catch (error) {
//   throw`Sorry, but null is not an array`;
// }

// 2.

function sayName(string) {
  if (typeof string !== "string") {
    throw TypeError;
  }
  return string;
}
// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log(`Invalid name! Must be a string!`);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}
