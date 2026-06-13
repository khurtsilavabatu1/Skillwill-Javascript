"use strict";
// const greet = function (name) {
//   console.log(`Hello, ${name}!`);
// };

// const processUser = function (userName, callback) {
//   console.log("Processing user...");
//   callback(userName);
//   return "David leave me alone";
// };

// processUser("Nino", greet);
// // 'Processing user...'
// // 'Hello, Nino!'

// // ანონიმური ფუნქციის გადაცემა callback-ად
// processUser("Giorgi", function (name) {
//   console.log(`Welcome aboard, ${name}!`);
// });

// console.log(
//   processUser("Giorgi", function (name) {
//     console.log(`Welcome aboard, ${name}!`);
//   }),
// );

// function processArray(arr, callback) {
//   const result = [];

//   for (const item of arr) {
//     result.push(callback(item));
//   }

//   return result;
// }
// ///////////////////////////////////////////
// function double(num) {
//   return num * 2;
// }

// function square(num) {
//   return num * num;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }
// ////////////////////////////////////////////
// const data = [1, 2, 3, 4, 5];

// console.log(processArray(data, double));
// console.log(processArray(data, square));
// console.log(processArray(data, isEven));

// /////////////////////////////////////////////
// // BONUS

// function pipeline(initialValue) {
//   let result = initialValue;

//   for (let i = 1; i < arguments.length; i++) {
//     result = arguments[i](result);
//   }
//   console.log(result);

//   return result;
// }

// pipeline(5, double, square, double, square);

// const timeoutId = setTimeout(function () {
//   console.log("This message appears after 2 seconds");
// }, 2000);

// console.log(timeoutId);

// console.log("This logs BEFORE the timeout message (async behavior)");

// const timeoutId2 = setTimeout(
//   function (greeting, name) {
//     console.log(`${greeting}, ${name}!`);
//   },
//   1500,
//   "Gamarjoba",
//   "Nino",
// );

// console.log(timeoutId2);

// const cancelableTimeout = setTimeout(function () {
//   console.log("You will never see this message!");
// }, 5000);

// clearTimeout(cancelableTimeout);
// console.log("Timeout was cancelled before it fired");

// მაინც ასინქრონულია! callback მხოლოდ call stack-ის გასუფთავების შემდეგ სრულდება.
console.log("1 - Before setTimeout(fn, 0)");
setTimeout(function () {
  console.log("3 - Inside setTimeout(fn, 0)");
}, 0);
console.log("2 - After setTimeout(fn, 0)");
// თანმიმდევრობა: 1, 2, 3
