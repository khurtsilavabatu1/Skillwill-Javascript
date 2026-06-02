"use strict";

// document.write() და alert()

// document.write("<h2>გამარჯობა, Javascript</h2>");
// document.write("<p>ეს ტექსტი document.write()-ით დაიწერა</p>");

// alert();
// alert("გამარჯობა!");

// const name = prompt("შეიყვანეთ თქვენი სახელი");
// console.log(name);

// const agreesWith = confirm("ეთანხმებით თუ არა?");
// console.log(agreesWith);

// let x = 10;
// while (x < 5) {
//   console.log("while: this will not be logged");
//   x++;
// }

// let y = 10;
// do {
//   console.log("do-while: this will be logged");
//   y++;
// } while (y < 5);

// const menuOptions = ["პიცა", "ბურგერი", "სალათი", "გასვლა"];
// let choice = 0;
// do {
//   choice = Math.trunc(Math.random() * menuOptions.length);
//   console.log(`არჩეული: ${menuOptions[choice]}`);
// } while (menuOptions[choice] !== "გასვლა");
// console.log("მენიუდან გამოსვლა");

// choice = Math.trunc(Math.random() * menuOptions.length);
// while (menuOptions[choice] !== "გასვლა") {
//   console.log(`არჩეული: ${menuOptions[choice]}`);
//   choice = Math.trunc(Math.random() * menuOptions.length);
// }
// console.log(`არჩეული: ${menuOptions[choice]}`);

// const fruits = ["Apple", "Banana", "Orange", "Grape"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`I love ${fruits[i]}`);
// }

// console.log(
//   fruits.forEach(function (fruit) {
//     console.log(`I love ${fruit}`);
//   }),
// );

// fruits.forEach((fruit) => {
//   console.log(`I love ${fruit}`);
// });

// // Practical Example bank transactions
// const transactions = [200, -150, 400, -50, 100, -200];
// console.log(transactions);

// transactions.forEach(function (transaction, index) {
//   const type = transaction > 0 ? "income" : "expense";
//   console.log(
//     `Transaction ${index + 1}: ${type} - ${Math.abs(transaction)} USD`,
//   );
// });

////////////////////////////////////
// Coding Challenge: forEach
////////////////////////////////////

/*
You have an array of student objects:
const students = [
  { name: 'Alice', scores: [85, 92, 78] },
  { name: 'Bob', scores: [90, 88, 95] },
  { name: 'Charlie', scores: [70, 65, 80] },
  { name: 'Diana', scores: [95, 98, 100] },
];

1. Use forEach to iterate over each student
2. For each student, calculate their average score (use a for loop to sum the scores)
3. Determine their status: average >= 80 is "Passed", otherwise "Failed"
4. Log: "Student: Alice | Average: 85.0 | Status: Passed"
5. At the end, log how many students passed and how many failed

Hint: You can use a counter variable outside the forEach to track pass/fail counts.
Use a for loop inside forEach to calculate the sum of scores.
*/

const students = [
  { name: "Alice", scores: [85, 92, 78] },
  { name: "Bob", scores: [90, 88, 95] },
  { name: "Charlie", scores: [70, 65, 80] },
  { name: "Diana", scores: [95, 98, 100] },
];

let passCount = 0;
let failCount = 0;

students.forEach(function (student) {
  let sum = 0;
  for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i];
  }
  const avg = sum / student.scores.length;
  const status = avg >= 80 ? "Passed" : "Failed";
  if (status === "Passed") passCount++;
  else failCount++;
  console.log(
    `Student: ${student.name} | Average: ${avg.toFixed(1)} | Status: ${status}`,
  );
});
// console.log(`Total Passed: ${passCount}, Total Failed: ${failCount}`);

// 5. String Methods
// const airline = "Georgian Airways";
// const plane = "A320";

// // Length
// console.log(airline.length);
// console.log(plane.length);

// // IndexOf / lastIndexOf - Position of a character or substring
// console.log(airline.indexOf("o"));
// console.log(airline.lastIndexOf("a"));
// console.log(airline.indexOf("Airways"));
// console.log(airline.indexOf("xyz"));

// // slice( - extracts a portion of the string (returns new string, original unchanged ))
// console.log(airline.slice(9));
// console.log(airline.slice(0, 8));
// console.log(airline.slice(-7));
// console.log(airline.slice(1, -1));

// // toUpperCase / toLowerCase  - change case
// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// const passenger = "geoRgE";
// console.log(
//   passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase(),
// );

// // trim() - removes whitespace from the beginning and end

// console.log("    Hello   ".trim());
// console.log("    Hello   ".trimStart());
// console.log("    Hello   ".trimEnd());

// // replace

// const priceGe = "350,99$";
// const priceUs = priceGe.replace(",", ".");
// console.log(priceUs);

// const announcement = "Please exit through gate 23! Gate 23!";
// console.log(announcement.replace("gate", "door"));

// // replaceAll
// console.log(announcement.replaceAll("23", "45"));

// // includes / startsWith / endsWith
// console.log(airline.includes("Airways"));
// console.log(airline.includes("xyz"));
// console.log(airline.startsWith("Geo"));
// console.log(airline.endsWith("ways"));

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("weapon")) {
    console.log("You are not allowed to board!");
  } else {
    console.log("Welcome aboard! Have a nice flight");
  }
};

checkBaggage("Laptop, Sood, Sook");
checkBaggage("Socks, Knife, Sunglasses");

// split();

console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(" - "));
console.log(elements.join(", "));

// const obj = {
//   key1: 2,
//   key2: function (strings) {
//     return strings.toLowercase();
//   },
// };

// obj.key2();

// repeat();

console.log("ha ".repeat(3));
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};
planesInLine(3);
planesInLine(7);

// padStart padEnd
const message = "Hello";
console.log(message.padStart(10, "*"));
console.log(message.padEnd(10, "-"));
console.log(message.padStart(10, "*").padEnd(15, "*"));

const maskCreditCard = function (number) {
  const str = String(number); // '123123123123213'
  const last = str.slice(-4); // '3213'
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(123123123123213));
console.log(maskCreditCard(924123129312913));

const processText = function (text) {
  const cleaned = text.trim().toLowerCase().replaceAll("javascript", "JS");
  const capitalized = cleaned[0].toUpperCase() + cleaned.slice(1);
  return `${capitalized} (${capitalized.length} chars)`;
};

console.log(processText("  I Love JAVASCRIPT and javascript is Great!  "));

console.log(processText("      JAVASCRIPT        "));

// Array Methods: map()

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(numbers);
console.log(doubled);

const tripled = numbers.map((num) => num * 3);

// Practical example - converting EUR to USD

const eurPrices = [10, 25, 50, 100];
const exchangeRate = 1.1;
const usdPrices = eurPrices.map((price) =>
  Number((price * exchangeRate).toFixed(1)),
);
console.log(usdPrices);
console.log(eurPrices);
const descriptions = eurPrices.map(function (price, i) {
  return `Item ${i + 1}: ${price}€ = ${(price * exchangeRate).toFixed(2)}$`;
});

// const descriptions = eurPrices.map(
//   (price, i) => `Item ${i + 1}: ${price}€ = ${(price * exchangeRate).toFixed(2)}`,
// );

console.log(descriptions);

const names = ["george", "nino", "david"];
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalized);

const celsius = [-10, 0, 15, 25, 37, 100];

const fahrenheit = celsius.map((c) => (c * 9) / 5 + 32);
console.log(fahrenheit);

const tempDescriptions = celsius.map((c) => {
  const f = ((c * 9) / 5 + 32).toFixed(1);
  let category;
  if (c < 0) category = "Freezing";
  else if (c <= 15) category = "Cold";
  else if (c <= 25) category = "Mild";
  else if (c <= 35) category = "Warm";
  else category = "Hot";
  return `${c}°C = ${f}°F - ${category} `;
});

console.log(tempDescriptions);

// Array Method Filter()

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

const bigNumbers = allNumbers.filter((num) => num > 5);
console.log(bigNumbers);

const movements = [200, -150, 400, -50, 100, -200, 300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log("deposits-", deposits, "withdrawals-", withdrawals);

// Filtering String
const words = ["hello", "world", "hi", "hey", "javascript", "code"];
const longWords = words.filter((word) => word.length > 4);
console.log(longWords);

const depositsInEur = movements
  .filter((mov) => mov > 0)
  .map((mov) => Number((mov / 2.95).toFixed(1)));
console.log(deposits);
console.log(depositsInEur);

// Coding Challenge: filter()
////////////////////////////////////

/*
You have an array of products:
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Phone', price: 800, inStock: false },
  { name: 'Tablet', price: 450, inStock: true },
  { name: 'Monitor', price: 350, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Headphones', price: 150, inStock: true },
];

1. Filter products that are in stock AND cost less than 500
2. Filter products that are out of stock
3. Find the most expensive in-stock product (use filter + forEach)
4. Log the results

Expected in-stock under 500: Tablet, Monitor, Mouse, Headphones
Expected out of stock: Phone, Keyboard
Most expensive in stock: Laptop ($1200)

Hint: Use filter() to get in-stock products, then use forEach to find the max.
*/

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 450, inStock: true },
  { name: "Monitor", price: 350, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Headphones", price: 150, inStock: true },
];

const affordableInStock = products.filter(function (product) {
  return product.inStock && product.price < 500;
});
console.log(affordableInStock);

console.log(
  "In stock and under $500",
  affordableInStock.map((product) => product.name),
);

// const outOfStock = products.filter((product) => product.inStock === false);
const inStockProducts = products.filter((product) => product.inStock);
const outOfStockProducts = products.filter((product) => !product.inStock);
// console.log(outOfStock);
console.log(inStockProducts);

const productsStock = [
  { name: "Tablet", price: 450, inStock: true },
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Monitor", price: 350, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Headphones", price: 150, inStock: true },
];
let mostExpensiveInStock = inStockProducts[0];
inStockProducts.forEach(function (product) {
  if (product.price > mostExpensiveInStock.price)
    mostExpensiveInStock = product;
});

console.log(
  "Most expensive in stock:",
  mostExpensiveInStock.name,
  `$${mostExpensiveInStock.price}`,
);

// Array Method find() and indexOf()

const arr = [10, 20, 30, 40, 50];
console.log(arr.indexOf(30));
console.log(arr.indexOf(99));

const firstBig = arr.find((num) => num > 25);
console.log(firstBig);

const accounts = [
  { owner: "George", balance: 5000 },
  { owner: "Nino", balance: 1200 },
  { owner: "David", balance: 8500 },
  { owner: "Mariam", balance: 300 },
];

const david = accounts.find(function (account) {
  return account.owner === "David";
});

console.log(david);

const richAccount = accounts.find(function (account) {
  return account.balance > 5000;
});

console.log(richAccount);

const davidIndex = accounts.findIndex((account) => account.owner === "David");
console.log(davidIndex);

const users = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "user", active: false },
  { id: 3, name: "Charlie", role: "user", active: true },
  { id: 4, name: "Diana", role: "admin", active: true },
  { id: 5, name: "Eve", role: "user", active: false },
];

const ids = users.map((user) => user.id).indexOf(6);
console.log(ids);

const owners = ["David", "Nino", "George,", "Ana"];
owners.sort();
console.log(owners);

const nums = [3, 1, 100, 25, 10];
nums.sort();
console.log(nums);

const numbers2 = [3, 1, 100, 25, 10];
numbers2.sort((a, b) => a - b);
console.log(numbers2);
numbers2.sort((a, b) => b - a);
console.log(numbers2);

const students1 = [
  { name: "Ana", grade: 85 },
  { name: "David", grade: 92 },
  { name: "Nino", grade: 78 },
  { name: "George", grade: 95 },
];

students1.sort((a, b) => a.grade - b.grade);

// students1.sort();
console.log(students1);
students1.sort((a, b) => b.grade - a.grade);
console.log(students1);

const original = [5, 2, 8, 1];
const sorted = original.slice().sort((a, b) => a - b);
console.log(original);
console.log(sorted);

const gameScores = [42, 88, 15, 73, 99, 56, 31, 64, 77, 20];

const sortedScores = gameScores.slice().sort((a, b) => b - a);
// [99, 88, 77, 73, 64, 56, 42, 31, 20, 15];
const top3 = sortedScores.slice(0, 3);
// [99, 88, 77]
const top4 = sortedScores.slice(3);
// [73, 64, 56, 42, 31, 20, 15];
console.log(top4);
console.log(top3);

const bottom3 = sortedScores.slice(-3).sort((a, b) => a - b);
console.log(sortedScores);
console.log(top3);
console.log(bottom3);

console.log(`Top3: ${top3.join(", ")}`);
console.log(`bottom3: ${bottom3.join(", ")}`);
console.log("Original unchanged,", gameScores);

// Array Method reduce()

const amounts = [100, 200, 300, 400];
const total = amounts.reduce(function (acc, cur) {
  console.log(`acc: ${acc}, cur: ${cur}`);
  return acc + cur;
}, 0);
console.log(`Total: ${total}`);

////////////////////////////////////
// Coding Challenge: reduce()
////////////////////////////////////

/*
You have an array of orders:
const orders = [
  { product: 'Laptop', quantity: 2, price: 999 },
  { product: 'Phone', quantity: 5, price: 699 },
  { product: 'Tablet', quantity: 3, price: 450 },
  { product: 'Mouse', quantity: 10, price: 25 },
  { product: 'Keyboard', quantity: 4, price: 75 },
];

1. Use reduce to calculate the total revenue (quantity * price for each order, then sum)
2. Use reduce to find the order with the highest total value (quantity * price)
3. Use reduce to count the total number of items ordered (sum of all quantities)
4. Log all results

Expected output:
Total revenue: $6942
Most valuable order: Phone ($3495)
Total items ordered: 24

Hint: The accumulator doesn't have to be a number — for task 2,
it can be the "best order so far" (an object).
*/

const orders = [
  { product: "Laptop", quantity: 2, price: 999 },
  { product: "Phone", quantity: 5, price: 699 },
  { product: "Tablet", quantity: 3, price: 450 },
  { product: "Mouse", quantity: 10, price: 25 },
  { product: "Keyboard", quantity: 4, price: 75 },
];

const totalRevenue = orders.reduce((accumulator, order) => {
  return accumulator + order.quantity * order.price;
}, 0);

// const mostValuableOrder = orders.reduce(function (bestOrder, currentOrder) {
//   const currentTotal = currentOrder.quantity * currentOrder.price;
//   const bestTotal = bestOrder.quantity * bestOrder.price;
//   return currentTotal > bestTotal ? currentOrder : bestOrder;
// }, orders[0]);

// const mostValuableOrder = orders.reduce((bestOrder, currentOrder) => {
//   const currentTotal = currentOrder.quantity * currentOrder.price;
//   const bestTotal = bestOrder.quantity * bestOrder.price;
//   return currentTotal > bestTotal ? currentOrder : bestOrder;
// }, orders[0]);

const mostValuableOrder = orders.reduce((acc, curr) => {
  const currentTotal = curr.quantity * curr.price;
  const bestTotal = acc.quantity * acc.price;
  return currentTotal > bestTotal ? curr : acc;
}, orders[0]);

const totalItemsOrdered = orders.reduce((acc, order) => {
  return acc + order.quantity;
}, 0);
