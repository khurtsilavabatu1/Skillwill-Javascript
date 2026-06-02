"use strict";

///////////////////////////////////////
// 1. concat() — Merging Arrays
///////////////////////////////////////

// concat() — merges two or more arrays into a new array
// (original arrays are NOT modified)

// Basic example
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3] — unchanged

// Merging multiple arrays
const arr3 = [7, 8, 9];
const all = arr1.concat(arr2, arr3);
console.log(all); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Same result with spread operator (modern approach)
const combined2 = [...arr1, ...arr2, ...arr3];
console.log(combined2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread — expands an array into individual elements
const original = [1, 2, 3];
const copy = [...original, 4, 5];
console.log(copy); // [1, 2, 3, 4, 5]

// Spread in function calls
const maxNum = Math.max(...original);
console.log(maxNum); // 3

// Rest operator — collects remaining elements into an array
// (looks the same as spread: ... but used on the LEFT side)
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// Rest in functions — collects all arguments into an array
const sumAll = function (...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
};
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// Spread vs Rest — key difference:
// Spread (RIGHT side) — unpacks: [...arr]   → expands elements
// Rest   (LEFT side)  — packs:   [...rest]  → collects elements

// concat with different types
const mixed = [1, 2].concat(["a", "b"], [true, false]);
console.log(mixed); // [1, 2, 'a', 'b', true, false]

// Practical example — merging data from different sources
const morningOrders = ["Espresso", "Latte", "Cappuccino"];
const afternoonOrders = ["Americano", "Mocha"];
const eveningOrders = ["Tea", "Hot Chocolate"];

const allOrders = morningOrders.concat(afternoonOrders, eveningOrders);
console.log("All orders:", allOrders);
console.log(`Total orders today: ${allOrders.length}`);

///////////////////////////////////////
// 2. join() — Array to String
///////////////////////////////////////

// join() — converts an array to a string with a separator between elements

const letters = ["H", "e", "l", "l", "o"];
console.log(letters.join("")); // 'Hello'
console.log(letters.join("-")); // 'H-e-l-l-o'
console.log(letters.join(" ")); // 'H e l l o'

// Default separator is comma
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join()); // 'Apple,Banana,Orange'
console.log(fruits.join(", ")); // 'Apple, Banana, Orange'
console.log(fruits.join(" & ")); // 'Apple & Banana & Orange'

// split + join combination — string transformation
const sentence = "hello world from javascript";
const titleCase = sentence
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase); // 'Hello World From Javascript'

// Practical example — creating CSV format
const studentData = [
  ["Name", "Score", "Status"],
  ["Ana", "95", "Passed"],
  ["David", "82", "Passed"],
  ["Nino", "55", "Failed"],
];

const csvOutput = studentData.map((row) => row.join(",")).join("\n");
console.log(csvOutput);
// Name,Score,Status
// Ana,95,Passed
// David,82,Passed
// Nino,55,Failed

// Practical example — building a URL path
const pathParts = ["https:", "", "example.com", "api", "users", "123"];
const url = pathParts.join("/");
console.log(url); // 'https://example.com/api/users/123'

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

const classA = ["Alice", "Bob", "Charlie"];
const classB = ["Diana", "Eve"];
const classC = ["Frank", "George", "Hannah", "Ivan"];

const allStudents = classA.concat(classB, classC).sort();
const roster = allStudents.map((name, i) => `${i + 1}. ${name}`).join("\n");
console.log(roster);

const classNames = ["A", "B", "C"];
console.log(
  `Total students: ${allStudents.length} | Classes merged: ${classNames.join(", ")}`,
);

///////////////////////////////////////
// 3. find() — Finding Elements
///////////////////////////////////////

// find() — returns the first element that satisfies a condition
// Returns undefined if no element is found

// Basic example
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find((num) => num > 10);
console.log(found); // 12 (first one that is > 10)

const notFound = numbers.find((num) => num > 200);
console.log(notFound); // undefined

// find vs filter:
// find() — returns one element (the first match)
// filter() — returns an array with all matching elements
const allBig = numbers.filter((num) => num > 10);
console.log(allBig); // [12, 130, 44] — array of all matches

// find in an array of objects (most common use case)
const accounts = [
  { owner: "George", balance: 5000 },
  { owner: "Nino", balance: 1200 },
  { owner: "David", balance: 8500 },
  { owner: "Mariam", balance: 300 },
];

const david = accounts.find((acc) => acc.owner === "David");
console.log(david); // { owner: 'David', balance: 8500 }

const richAccount = accounts.find((acc) => acc.balance > 5000);
console.log(richAccount); // { owner: 'David', balance: 8500 }

// findIndex — element's index by condition
const davidIndex = accounts.findIndex((acc) => acc.owner === "David");
console.log(davidIndex); // 2

// findLast — finds from the end
const lastBig = numbers.findLast((num) => num > 10);
console.log(lastBig); // 44 (last one that is > 10)

///////////////////////////////////////
// 4. indexOf() — Finding Positions
///////////////////////////////////////

// indexOf() — returns the index (position) of an element
// Returns -1 if not found

// For primitive values
const arr = [10, 20, 30, 40, 50];
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(99)); // -1 (not found)

// indexOf with fromIndex (start searching from a specific position)
const repeating = [1, 2, 3, 1, 2, 3];
console.log(repeating.indexOf(2)); // 1 (first occurrence)
console.log(repeating.indexOf(2, 2)); // 4 (searching from index 2)

// lastIndexOf — searches from the end
console.log(repeating.lastIndexOf(2)); // 4

// includes — boolean: exists or not (true/false)
console.log(arr.includes(30)); // true
console.log(arr.includes(99)); // false

// includes vs find vs indexOf:
// includes — boolean: exists or not (true/false)
// indexOf — number: which position (-1 if not found)
// find — element: which element satisfies the condition

// Practical example — checking for duplicates
const checkDuplicates = function (array) {
  const duplicates = [];
  array.forEach((item, index) => {
    if (array.indexOf(item) !== index && !duplicates.includes(item)) {
      duplicates.push(item);
    }
  });
  return duplicates;
};

console.log(checkDuplicates([1, 2, 3, 2, 4, 3, 5])); // [2, 3]
console.log(checkDuplicates([1, 2, 3, 4, 5])); // []

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

const users = [
  { id: 1, name: "Alice", role: "admin", active: true },
  { id: 2, name: "Bob", role: "user", active: false },
  { id: 3, name: "Charlie", role: "user", active: true },
  { id: 4, name: "Diana", role: "admin", active: true },
  { id: 5, name: "Eve", role: "user", active: false },
];

const firstActiveAdmin = users.find((u) => u.role === "admin" && u.active);
console.log("First active admin:", firstActiveAdmin.name); // Alice

const userById = users.find((u) => u.id === 3);
console.log("User with id 3:", userById.name); // Charlie

const bobIndex = users.findIndex((u) => u.name === "Bob");
console.log("Bob's index:", bobIndex); // 1

const ids = users.map((u) => u.id);
console.log("Contains id 6:", ids.indexOf(6) !== -1); // false

///////////////////////////////////////
// 5. Solving Tasks with Arrays
///////////////////////////////////////

// This section demonstrates real-world problems solved with arrays
// using everything we've learned so far

// --- Problem 1: Remove duplicates from an array ---

const removeDuplicates = function (arr) {
  const unique = [];
  arr.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // ['a', 'b', 'c']

// Modern approach with Set
const uniqueSet = [...new Set([1, 2, 2, 3, 3, 3, 4])];
console.log(uniqueSet); // [1, 2, 3, 4]

// --- Problem 2: Flatten nested arrays (one level) ---

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = [].concat(...nestedArrays);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Using flat()
const deepNested = [1, [2, 3], [4, [5, 6]]];
console.log(deepNested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(deepNested.flat(2)); // [1, 2, 3, 4, 5, 6]

// --- Problem 3: Group items by category ---

const expenses = [
  { category: "food", amount: 50 },
  { category: "transport", amount: 30 },
  { category: "food", amount: 25 },
  { category: "entertainment", amount: 100 },
  { category: "transport", amount: 20 },
  { category: "food", amount: 35 },
];

const groupByCategory = function (items) {
  return items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item.amount);
    return groups;
  }, {});
};

const grouped = groupByCategory(expenses);
console.log(grouped);
// { food: [50, 25, 35], transport: [30, 20], entertainment: [100] }

// --- Problem 4: Find intersection of two arrays ---

const intersection = function (arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
};

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(intersection(["a", "b", "c"], ["b", "c", "d"])); // ['b', 'c']

// --- Problem 5: Chunk an array into smaller arrays ---

const chunkArray = function (arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// [[1, 2, 3], [4, 5, 6], [7]]

console.log(chunkArray(["a", "b", "c", "d", "e"], 2));
// [['a', 'b'], ['c', 'd'], ['e']]

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

const studentRecords = [
  { name: "Ana", grades: [90, 85, 92, 88] },
  { name: "David", grades: [75, 80, 68, 72] },
  { name: "Nino", grades: [95, 92, 98, 100] },
  { name: "George", grades: [60, 55, 70, 65] },
  { name: "Mariam", grades: [88, 91, 85, 90] },
];

const withAverages = studentRecords.map((s) => ({
  name: s.name,
  average: s.grades.reduce((sum, g) => sum + g, 0) / s.grades.length,
}));

const sorted = withAverages.slice().sort((a, b) => b.average - a.average);

const topStudent = sorted.reduce((best, cur) =>
  cur.average > best.average ? cur : best,
);

const aboveEighty = sorted.filter((s) => s.average >= 80);

const leaderboard = sorted
  .map((s, i) => `${i + 1}. ${s.name} — ${s.average.toFixed(1)}`)
  .join("\n");

console.log("=== Leaderboard ===");
console.log(leaderboard);
console.log(`\nTop student: ${topStudent.name} (${topStudent.average.toFixed(1)})`);
console.log(
  `Students above 80: ${aboveEighty.map((s) => s.name).join(", ")}`,
);

///////////////////////////////////////
// 6. Array-Based Data Structures
///////////////////////////////////////

// Arrays can be used to model many different data structures.
// Here we'll look at practical patterns you'll encounter often.

// --- 6.1 Stack (Last In, First Out — LIFO) ---
// push() adds to the end, pop() removes from the end

console.log("=== Stack ===");
const stack = [];

stack.push("Page 1"); // navigate to page 1
stack.push("Page 2"); // navigate to page 2
stack.push("Page 3"); // navigate to page 3
console.log("Stack:", stack); // ['Page 1', 'Page 2', 'Page 3']

const lastPage = stack.pop(); // go back
console.log("Went back from:", lastPage); // 'Page 3'
console.log("Stack now:", stack); // ['Page 1', 'Page 2']

// Practical example — undo history
const undoHistory = [];
const currentDocument = [];

const addText = function (text) {
  undoHistory.push([...currentDocument]);
  currentDocument.push(text);
  console.log("Document:", currentDocument.join(" "));
};

const undo = function () {
  if (undoHistory.length > 0) {
    const previous = undoHistory.pop();
    currentDocument.length = 0;
    previous.forEach((item) => currentDocument.push(item));
    console.log("After undo:", currentDocument.join(" ") || "(empty)");
  } else {
    console.log("Nothing to undo!");
  }
};

addText("Hello"); // Document: Hello
addText("World"); // Document: Hello World
addText("!"); // Document: Hello World !
undo(); // After undo: Hello World
undo(); // After undo: Hello

// --- 6.2 Queue (First In, First Out — FIFO) ---
// push() adds to the end, shift() removes from the beginning

console.log("\n=== Queue ===");
const printQueue = [];

printQueue.push("Document 1");
printQueue.push("Document 2");
printQueue.push("Document 3");
console.log("Queue:", printQueue); // ['Document 1', 'Document 2', 'Document 3']

const nextPrint = printQueue.shift(); // process first in line
console.log("Printing:", nextPrint); // 'Document 1'
console.log("Queue now:", printQueue); // ['Document 2', 'Document 3']

// Practical example — task queue
const taskQueue = [];

const addTask = function (task, priority) {
  taskQueue.push({ task, priority, addedAt: new Date().toLocaleTimeString() });
  console.log(`Added task: "${task}" (priority: ${priority})`);
};

const processNextTask = function () {
  if (taskQueue.length > 0) {
    const next = taskQueue.shift();
    console.log(`Processing: "${next.task}" (added at ${next.addedAt})`);
    return next;
  }
  console.log("No tasks in queue!");
  return null;
};

addTask("Send email", "high");
addTask("Update database", "medium");
addTask("Generate report", "low");
processNextTask(); // Processing: "Send email"
processNextTask(); // Processing: "Update database"

// --- 6.3 Lookup Table (Object from Arrays) ---

console.log("\n=== Lookup Table ===");

const countryCapitals = [
  ["Georgia", "Tbilisi"],
  ["France", "Paris"],
  ["Germany", "Berlin"],
  ["Japan", "Tokyo"],
];

// Convert array of pairs to a lookup object using reduce
const capitalLookup = countryCapitals.reduce((obj, [country, capital]) => {
  obj[country] = capital;
  return obj;
}, {});

console.log(capitalLookup);
// { Georgia: 'Tbilisi', France: 'Paris', Germany: 'Berlin', Japan: 'Tokyo' }
console.log("Capital of Georgia:", capitalLookup["Georgia"]); // Tbilisi

// --- 6.4 Matrix (2D Array) ---

console.log("\n=== Matrix ===");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing elements: matrix[row][column]
console.log(matrix[0][0]); // 1 (top-left)
console.log(matrix[1][1]); // 5 (center)
console.log(matrix[2][2]); // 9 (bottom-right)

// Iterating over a matrix
for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
  }
}

// Sum all elements in a matrix
const matrixSum = matrix.reduce(
  (total, row) => total + row.reduce((rowSum, val) => rowSum + val, 0),
  0,
);
console.log("Matrix sum:", matrixSum); // 45

// Practical example — seating chart
const cinema = [
  ["X", "O", "O", "X", "O"],
  ["O", "O", "X", "O", "O"],
  ["O", "X", "O", "O", "X"],
];
// X = taken, O = available

const availableSeats = cinema.reduce((count, row, rowIndex) => {
  row.forEach((seat, colIndex) => {
    if (seat === "O") {
      count++;
    }
  });
  return count;
}, 0);

console.log(`Available seats: ${availableSeats}`); // 10

// --- 6.5 Frequency Counter ---

console.log("\n=== Frequency Counter ===");

const text = "hello world hello javascript hello world";
const wordFrequency = text.split(" ").reduce((freq, word) => {
  freq[word] = (freq[word] || 0) + 1;
  return freq;
}, {});

console.log(wordFrequency);
// { hello: 3, world: 2, javascript: 1 }

// Find the most frequent word
const mostFrequent = Object.entries(wordFrequency).reduce((max, current) =>
  current[1] > max[1] ? current : max,
);
console.log(`Most frequent: "${mostFrequent[0]}" (${mostFrequent[1]} times)`);

// Character frequency
const charFrequency = function (str) {
  return str
    .toLowerCase()
    .split("")
    .filter((ch) => ch !== " ")
    .reduce((freq, ch) => {
      freq[ch] = (freq[ch] || 0) + 1;
      return freq;
    }, {});
};

console.log(charFrequency("JavaScript")); // { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

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

const inventory = [];

const addProduct = function (name, quantity, price) {
  inventory.push({ name, quantity, price });
  console.log(`Added: ${name} (${quantity} units @ $${price})`);
};

const removeProduct = function (name) {
  const index = inventory.findIndex((p) => p.name === name);
  if (index !== -1) {
    const removed = inventory.splice(index, 1)[0];
    console.log(`Removed: ${removed.name}`);
  } else {
    console.log(`Product "${name}" not found!`);
  }
};

const updateQuantity = function (name, amount) {
  const product = inventory.find((p) => p.name === name);
  if (product) {
    product.quantity = Math.max(0, product.quantity + amount);
    console.log(`Updated ${name}: now ${product.quantity} units`);
  } else {
    console.log(`Product "${name}" not found!`);
  }
};

const getInventoryValue = function () {
  return inventory.reduce((total, p) => total + p.price * p.quantity, 0);
};

const getLowStock = function (threshold) {
  return inventory.filter((p) => p.quantity < threshold);
};

const getInventoryReport = function () {
  const lines = inventory.map(
    (p) =>
      `${p.name}: ${p.quantity} units @ $${p.price.toFixed(2)} = $${(p.price * p.quantity).toFixed(2)}`,
  );
  const total = getInventoryValue();
  return (
    "=== Inventory Report ===\n" +
    lines.join("\n") +
    `\nTotal value: $${total.toFixed(2)}`
  );
};

addProduct("Laptop", 5, 999.99);
addProduct("Mouse", 50, 29.99);
addProduct("Keyboard", 3, 79.99);
addProduct("Monitor", 8, 499.99);
removeProduct("Keyboard");
updateQuantity("Mouse", -10);

console.log("\nLow stock (< 10):", getLowStock(10));
console.log("\n" + getInventoryReport());

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

const salesData = [
  { month: "Jan", product: "Phone", quantity: 120, unitPrice: 699 },
  { month: "Jan", product: "Laptop", quantity: 45, unitPrice: 1299 },
  { month: "Feb", product: "Phone", quantity: 98, unitPrice: 699 },
  { month: "Feb", product: "Laptop", quantity: 52, unitPrice: 1299 },
  { month: "Mar", product: "Phone", quantity: 150, unitPrice: 699 },
  { month: "Mar", product: "Laptop", quantity: 38, unitPrice: 1299 },
  { month: "Jan", product: "Tablet", quantity: 80, unitPrice: 449 },
  { month: "Feb", product: "Tablet", quantity: 65, unitPrice: 449 },
  { month: "Mar", product: "Tablet", quantity: 90, unitPrice: 449 },
];

// 1. Revenue by product
const revenueByProduct = salesData.reduce((acc, sale) => {
  acc[sale.product] = (acc[sale.product] || 0) + sale.quantity * sale.unitPrice;
  return acc;
}, {});

// 2. Best seller by quantity
const quantityByProduct = salesData.reduce((acc, sale) => {
  acc[sale.product] = (acc[sale.product] || 0) + sale.quantity;
  return acc;
}, {});

const bestSeller = Object.entries(quantityByProduct).reduce((max, cur) =>
  cur[1] > max[1] ? cur : max,
);

// 3. Best month
const revenueByMonth = salesData.reduce((acc, sale) => {
  acc[sale.month] = (acc[sale.month] || 0) + sale.quantity * sale.unitPrice;
  return acc;
}, {});

const bestMonth = Object.entries(revenueByMonth).reduce((max, cur) =>
  cur[1] > max[1] ? cur : max,
);

// 4. Grand total
const grandTotal = Object.values(revenueByProduct).reduce(
  (sum, val) => sum + val,
  0,
);

// 5. Formatted report
const productLines = Object.entries(revenueByProduct)
  .map(([product, revenue]) => `- ${product}: $${revenue.toLocaleString()}`)
  .join("\n");

const report = [
  "=== Sales Analytics ===",
  "Product Revenue:",
  productLines,
  "",
  `Best seller: ${bestSeller[0]} (${bestSeller[1]} total units)`,
  `Best month: ${bestMonth[0]} ($${bestMonth[1].toLocaleString()})`,
  `Grand total: $${grandTotal.toLocaleString()}`,
].join("\n");

console.log(report);
