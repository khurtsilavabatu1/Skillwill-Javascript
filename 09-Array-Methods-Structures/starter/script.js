"use strict";

///////////////////////////////////////
// 1. concat() — Merging Arrays
///////////////////////////////////////

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = arr1.concat(arr2);
// console.log(combined);
// console.log(arr1);

// // Merging multiple arrays
// const arr3 = [7, 8, 9];
// const all = arr1.concat(arr2, arr3);
// console.log(all);

// // Spread operator (modern approach)
// const combined2 = [...arr1, ...arr2, ...arr3];
// console.log(combined2);

// // Practical example — merging orders
// const morningOrders = ["Espresso", "Latte", "Cappuccino"];
// const afternoonOrders = ["Americano", "Mocha"];
// const eveningOrders = ["Tea", "Hot Chocolate"];

// const allOrders = morningOrders.concat(afternoonOrders, eveningOrders);
// console.log("All orders:", allOrders);
// console.log(`Total orders today: ${allOrders.length}`);

///////////////////////////////////////
// 2. join() — Array to String
///////////////////////////////////////

// const letters = ["H", "e", "l", "l", "o"];
// console.log(letters.join(""));
// console.log(letters.join("-"));
// console.log(letters.join(" "));

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits.join());
// console.log(fruits.join(", "));
// console.log(fruits.join(" & "));

// // split + join — string transformation
// const sentence = "hello world from javascript";
// const titleCase = sentence
//   .split(" ")
//   .map((word) => word[0].toUpperCase() + word.slice(1))
//   .join(" ");
// console.log(titleCase);

// // CSV format
// const studentData = [
//   ["Name", "Score", "Status"],
//   ["Ana", "95", "Passed"],
//   ["David", "82", "Passed"],
//   ["Nino", "55", "Failed"],
// ];

// const csvOutput = studentData.map((row) => row.join(",")).join("\n");
// console.log(csvOutput);

////////////////////////////////////
// Coding Challenge: concat() and join()
////////////////////////////////////

/*
You have data from three different classes:

const classA = ['Alice', 'Bob', 'Charlie'];
const classB = ['Diana', 'Eve'];
const classC = ['Frank', 'George', 'Hannah', 'Ivan'];

1. Use concat() to merge all three classes into one array
2. Sort the combined array alphabetically
3. Use map() to add a student number: "1. Alice"
4. Use join('\n') to create a formatted roster
5. Log the roster
6. Also create a summary line: "Total students: 9 | Classes merged: A, B, C"
   using concat and join

Expected output:
1. Alice
2. Bob
3. Charlie
4. Diana
5. Eve
6. Frank
7. George
8. Hannah
9. Ivan
Total students: 9 | Classes merged: A, B, C
*/

///////////////////////////////////////
// 3. find() — Finding Elements
///////////////////////////////////////

// const numbers = [5, 12, 8, 130, 44];
// const found = numbers.find((num) => num > 10);
// console.log(found);

// const notFound = numbers.find((num) => num > 200);
// console.log(notFound);

// // find vs filter
// const allBig = numbers.filter((num) => num > 10);
// console.log(allBig);

// // find in an array of objects
// const accounts = [
//   { owner: "George", balance: 5000 },
//   { owner: "Nino", balance: 1200 },
//   { owner: "David", balance: 8500 },
//   { owner: "Mariam", balance: 300 },
// ];

// const david = accounts.find((acc) => acc.owner === "David");
// console.log(david);

// const richAccount = accounts.find((acc) => acc.balance > 5000);
// console.log(richAccount);

// // findIndex
// const davidIndex = accounts.findIndex((acc) => acc.owner === "David");
// console.log(davidIndex);

///////////////////////////////////////
// 4. indexOf() — Finding Positions
///////////////////////////////////////

// const arr = [10, 20, 30, 40, 50];
// console.log(arr.indexOf(30));
// console.log(arr.indexOf(99));

// // indexOf with fromIndex
// const repeating = [1, 2, 3, 1, 2, 3];
// console.log(repeating.indexOf(2));
// console.log(repeating.indexOf(2, 2));

// // lastIndexOf
// console.log(repeating.lastIndexOf(2));

// // includes
// console.log(arr.includes(30));
// console.log(arr.includes(99));

// // Practical example — checking for duplicates
// const checkDuplicates = function (array) {
//   const duplicates = [];
//   array.forEach((item, index) => {
//     if (array.indexOf(item) !== index && !duplicates.includes(item)) {
//       duplicates.push(item);
//     }
//   });
//   return duplicates;
// };

// console.log(checkDuplicates([1, 2, 3, 2, 4, 3, 5]));
// console.log(checkDuplicates([1, 2, 3, 4, 5]));

////////////////////////////////////
// Coding Challenge: find() and indexOf()
////////////////////////////////////

/*
You have an array of users:
const users = [
  { id: 1, name: 'Alice', role: 'admin', active: true },
  { id: 2, name: 'Bob', role: 'user', active: false },
  { id: 3, name: 'Charlie', role: 'user', active: true },
  { id: 4, name: 'Diana', role: 'admin', active: true },
  { id: 5, name: 'Eve', role: 'user', active: false },
];

1. Use find() to locate the first active admin
2. Use find() to locate the user with id 3
3. Use findIndex() to find the index of 'Bob'
4. Use indexOf to check if the ids array [1,2,3,4,5] contains id 6
5. Log all results

Expected:
First active admin: Alice
User with id 3: Charlie
Bob's index: 1
Contains id 6: false
*/

///////////////////////////////////////
// 5. Solving Tasks with Arrays
///////////////////////////////////////

// --- Problem 1: Remove duplicates ---

// const removeDuplicates = function (arr) {
//   const unique = [];
//   arr.forEach((item) => {
//     if (!unique.includes(item)) {
//       unique.push(item);
//     }
//   });
//   return unique;
// };

// console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));
// console.log(removeDuplicates(["a", "b", "a", "c", "b"]));

// // Modern approach with Set
// const uniqueSet = [...new Set([1, 2, 2, 3, 3, 3, 4])];
// console.log(uniqueSet);

// --- Problem 2: Flatten nested arrays ---

// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const flattened = [].concat(...nestedArrays);
// console.log(flattened);

// const deepNested = [1, [2, 3], [4, [5, 6]]];
// console.log(deepNested.flat());
// console.log(deepNested.flat(2));

// --- Problem 3: Group items by category ---

// const expenses = [
//   { category: "food", amount: 50 },
//   { category: "transport", amount: 30 },
//   { category: "food", amount: 25 },
//   { category: "entertainment", amount: 100 },
//   { category: "transport", amount: 20 },
//   { category: "food", amount: 35 },
// ];

// const groupByCategory = function (items) {
//   return items.reduce((groups, item) => {
//     if (!groups[item.category]) {
//       groups[item.category] = [];
//     }
//     groups[item.category].push(item.amount);
//     return groups;
//   }, {});
// };

// console.log(groupByCategory(expenses));

// --- Problem 4: Find intersection ---

// const intersection = function (arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// };

// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));

// --- Problem 5: Chunk an array ---

// const chunkArray = function (arr, size) {
//   const chunks = [];
//   for (let i = 0; i < arr.length; i += size) {
//     chunks.push(arr.slice(i, i + size));
//   }
//   return chunks;
// };

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

////////////////////////////////////
// Coding Challenge: Array Problem Solving
////////////////////////////////////

/*
You are building a simple grade management system.

Given student data:
const studentRecords = [
  { name: 'Ana', grades: [90, 85, 92, 88] },
  { name: 'David', grades: [75, 80, 68, 72] },
  { name: 'Nino', grades: [95, 92, 98, 100] },
  { name: 'George', grades: [60, 55, 70, 65] },
  { name: 'Mariam', grades: [88, 91, 85, 90] },
];

1. Calculate the average for each student using reduce()
2. Sort students by average (highest first), don't mutate original
3. Find the student with the highest average using reduce()
4. Find all students whose average is above 80 using filter()
5. Create a formatted leaderboard using map() + join():
   "1. Nino — 96.3"
   "2. Ana — 88.8"
   ...
6. Log the leaderboard and the top student

Hint: Chain methods where possible!
*/

///////////////////////////////////////
// 6. Array-Based Data Structures
///////////////////////////////////////

// --- 6.1 Stack (LIFO) ---
// push() + pop()

// console.log("=== Stack ===");
// const stack = [];

// stack.push("Page 1");
// stack.push("Page 2");
// stack.push("Page 3");
// console.log("Stack:", stack);

// const lastPage = stack.pop();
// console.log("Went back from:", lastPage);
// console.log("Stack now:", stack);

// --- 6.2 Queue (FIFO) ---
// push() + shift()

// console.log("\n=== Queue ===");
// const printQueue = [];

// printQueue.push("Document 1");
// printQueue.push("Document 2");
// printQueue.push("Document 3");
// console.log("Queue:", printQueue);

// const nextPrint = printQueue.shift();
// console.log("Printing:", nextPrint);
// console.log("Queue now:", printQueue);

// --- 6.3 Lookup Table ---

// const countryCapitals = [
//   ["Georgia", "Tbilisi"],
//   ["France", "Paris"],
//   ["Germany", "Berlin"],
//   ["Japan", "Tokyo"],
// ];

// const capitalLookup = countryCapitals.reduce((obj, [country, capital]) => {
//   obj[country] = capital;
//   return obj;
// }, {});

// console.log(capitalLookup);
// console.log("Capital of Georgia:", capitalLookup["Georgia"]);

// --- 6.4 Matrix (2D Array) ---

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]);
// console.log(matrix[1][1]);
// console.log(matrix[2][2]);

// for (let row = 0; row < matrix.length; row++) {
//   for (let col = 0; col < matrix[row].length; col++) {
//     console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
//   }
// }

// // Cinema seating
// const cinema = [
//   ["X", "O", "O", "X", "O"],
//   ["O", "O", "X", "O", "O"],
//   ["O", "X", "O", "O", "X"],
// ];

// const availableSeats = cinema.reduce((count, row) => {
//   row.forEach((seat) => {
//     if (seat === "O") count++;
//   });
//   return count;
// }, 0);

// console.log(`Available seats: ${availableSeats}`);

// --- 6.5 Frequency Counter ---

// const text = "hello world hello javascript hello world";
// const wordFrequency = text.split(" ").reduce((freq, word) => {
//   freq[word] = (freq[word] || 0) + 1;
//   return freq;
// }, {});

// console.log(wordFrequency);

// const mostFrequent = Object.entries(wordFrequency).reduce((max, current) =>
//   current[1] > max[1] ? current : max,
// );
// console.log(`Most frequent: "${mostFrequent[0]}" (${mostFrequent[1]} times)`);

////////////////////////////////////
// Coding Challenge: Array-Based Structures
////////////////////////////////////

/*
Build a simple inventory management system using arrays:

const inventory = [];

Create these functions:

1. addProduct(name, quantity, price) — adds a product object to inventory
2. removeProduct(name) — removes a product by name (use findIndex + splice)
3. updateQuantity(name, amount) — finds a product and updates its quantity
   (positive = add stock, negative = remove stock, don't go below 0)
4. getInventoryValue() — returns total value (price * quantity for each)
   using reduce()
5. getLowStock(threshold) — returns products where quantity < threshold
   using filter()
6. getInventoryReport() — returns a formatted string using map() + join():
   "=== Inventory Report ===
    Laptop: 5 units @ $999.99 = $4999.95
    Mouse: 50 units @ $29.99 = $1499.50
    Total value: $6499.45"

Test:
addProduct('Laptop', 5, 999.99);
addProduct('Mouse', 50, 29.99);
addProduct('Keyboard', 3, 79.99);
addProduct('Monitor', 8, 499.99);
removeProduct('Keyboard');
updateQuantity('Mouse', -10);
console.log(getLowStock(10));
console.log(getInventoryReport());
*/

////////////////////////////////////
// Coding Challenge: Final Challenge
////////////////////////////////////

/*
Build a mini analytics engine!

Given this data:
const salesData = [
  { month: 'Jan', product: 'Phone', quantity: 120, unitPrice: 699 },
  { month: 'Jan', product: 'Laptop', quantity: 45, unitPrice: 1299 },
  { month: 'Feb', product: 'Phone', quantity: 98, unitPrice: 699 },
  { month: 'Feb', product: 'Laptop', quantity: 52, unitPrice: 1299 },
  { month: 'Mar', product: 'Phone', quantity: 150, unitPrice: 699 },
  { month: 'Mar', product: 'Laptop', quantity: 38, unitPrice: 1299 },
  { month: 'Jan', product: 'Tablet', quantity: 80, unitPrice: 449 },
  { month: 'Feb', product: 'Tablet', quantity: 65, unitPrice: 449 },
  { month: 'Mar', product: 'Tablet', quantity: 90, unitPrice: 449 },
];

Using concat, join, find, indexOf, and all other array methods:

1. Calculate total revenue for each product (use reduce to group by product)
2. Find the best-selling product by total quantity (reduce)
3. Find which month had the highest total revenue (reduce + grouping)
4. Create a formatted report using map + join:

"=== Sales Analytics ===
Product Revenue:
- Phone: $257,322
- Laptop: $175,365
- Tablet: $105,525

Best seller: Phone (368 total units)
Best month: Jan ($154,835)
Grand total: $538,212"

Hint: Use reduce to group data, then Object.entries to iterate the groups.
*/
