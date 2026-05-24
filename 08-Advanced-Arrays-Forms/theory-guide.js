////////////////////////////////////
// Advanced Arrays & Forms
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. BROWSER I/O METHODS
   (document.write, alert, prompt, confirm)
═══════════════════════════════════════════════════════════════

JavaScript provides several built-in methods for interacting
with the user through the browser:

- document.write() — writes HTML content directly to the page
- alert() — shows a popup message
- prompt() — shows a popup that asks for user input
- confirm() — shows a popup with OK/Cancel buttons

These are mostly used for learning and debugging.
In real applications, we use the DOM instead.
*/

// document.write — writes directly to the HTML page
// document.write("<h2>Hello, JavaScript!</h2>");
// document.write("<p>This text was written by document.write()</p>");

// alert — shows a message popup
// alert("Hello!");
// alert("This is an alert box");

// prompt — asks user for input, returns the entered string (or null if cancelled)
// const name = prompt("Enter your name:");
// console.log(name); // whatever the user typed

// confirm — asks a yes/no question, returns true (OK) or false (Cancel)
// const agreed = confirm("Do you agree?");
// console.log(agreed); // true or false


/*
═══════════════════════════════════════════════════════════════
2. WHILE LOOP
═══════════════════════════════════════════════════════════════

The while loop executes a block of code as long as
a specified condition is true.

Syntax:
  while (condition) {
    // code to execute
  }

The condition is checked BEFORE each iteration.
If the condition is false from the start, the loop body
never executes.
*/

// Basic while loop
let counter = 1;
while (counter <= 5) {
  console.log(`Count: ${counter}`);
  counter++;
}
// Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// While loop that doesn't execute (condition is false from the start)
let x = 10;
while (x < 5) {
  console.log("This will never be logged");
  x++;
}


/*
═══════════════════════════════════════════════════════════════
3. DO-WHILE LOOP
═══════════════════════════════════════════════════════════════

The do-while loop is similar to while, but the condition
is checked AFTER each iteration. This means the code block
always executes at least once.

Syntax:
  do {
    // code to execute
  } while (condition);
*/

// do-while always runs at least once, even if condition is false
let y = 10;
do {
  console.log("do-while: this will be logged once");
  y++;
} while (y < 5);

// Practical example: random menu selection
const menuOptions = ["Pizza", "Burger", "Salad", "Exit"];
let choice;
do {
  choice = Math.trunc(Math.random() * menuOptions.length);
  console.log(`Selected: ${menuOptions[choice]}`);
} while (menuOptions[choice] !== "Exit");
console.log("Exited the menu");


/*
═══════════════════════════════════════════════════════════════
4. FOR LOOP (Iterating Over Arrays)
═══════════════════════════════════════════════════════════════

The for loop is the most common loop for iterating
over arrays. It uses a counter variable (usually i)
that starts at 0 and increments until it reaches the
array's length.

Syntax:
  for (let i = 0; i < array.length; i++) {
    // use array[i] to access each element
  }
*/

const fruits = ["Apple", "Banana", "Orange", "Grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
// 1. Apple, 2. Banana, 3. Orange, 4. Grape


/*
═══════════════════════════════════════════════════════════════
5. forEach() METHOD
═══════════════════════════════════════════════════════════════

forEach() is an array method that calls a function
once for each element in the array.

Syntax:
  array.forEach(function(element, index, array) {
    // code for each element
  });

Parameters:
  - element: the current element
  - index: the current index (optional)
  - array: the original array (optional, rarely used)

forEach does NOT return a new array (unlike map).
It's used when you want to DO something with each element
(like logging), not when you want to CREATE a new array.
*/

// Basic forEach
const colors = ["Red", "Green", "Blue"];
colors.forEach(function (color) {
  console.log(color);
});

// forEach with arrow function
colors.forEach((color) => console.log(color));

// forEach with index
colors.forEach((color, i) => {
  console.log(`${i + 1}. ${color}`);
});

// Practical example: bank transactions
const transactions = [200, -150, 400, -50, 100, -200];
transactions.forEach(function (transaction, index) {
  const type = transaction > 0 ? "income" : "expense";
  console.log(
    `Transaction ${index + 1}: ${type} - ${Math.abs(transaction)} USD`
  );
});


/*
═══════════════════════════════════════════════════════════════
6. STRING METHODS
═══════════════════════════════════════════════════════════════

Strings have many built-in methods for manipulation.
Important: strings are IMMUTABLE — methods return a new
string, they do NOT change the original.
*/

const airline = "Georgian Airways";

// --- length ---
console.log(airline.length); // 16

// --- indexOf / lastIndexOf ---
console.log(airline.indexOf("o"));      // 2 (first occurrence)
console.log(airline.lastIndexOf("a"));  // 13 (last occurrence)
console.log(airline.indexOf("Airways")); // 9
console.log(airline.indexOf("xyz"));    // -1 (not found)

// --- slice(start, end) ---
console.log(airline.slice(9));     // "Airways" (from index 9 to end)
console.log(airline.slice(0, 8));  // "Georgian" (from 0 to 7)
console.log(airline.slice(-7));    // "Airways" (last 7 characters)

// --- toUpperCase / toLowerCase ---
console.log(airline.toUpperCase()); // "GEORGIAN AIRWAYS"
console.log(airline.toLowerCase()); // "georgian airways"

// Capitalize first letter
const passenger = "geoRgE";
const fixed = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(fixed); // "George"

// --- trim / trimStart / trimEnd ---
console.log("   Hello   ".trim());      // "Hello"
console.log("   Hello   ".trimStart()); // "Hello   "
console.log("   Hello   ".trimEnd());   // "   Hello"

// --- replace / replaceAll ---
const price = "350,99$";
console.log(price.replace(",", ".")); // "350.99$"

const text = "Gate 23! Gate 23!";
console.log(text.replace("Gate", "Door"));    // "Door 23! Gate 23!" (first only)
console.log(text.replaceAll("Gate", "Door")); // "Door 23! Door 23!" (all)

// --- includes / startsWith / endsWith ---
console.log(airline.includes("Airways")); // true
console.log(airline.startsWith("Geo"));   // true
console.log(airline.endsWith("ways"));    // true

// --- split / join ---
console.log("a+b+c".split("+"));         // ["a", "b", "c"]
console.log("Jonas Schmedtmann".split(" ")); // ["Jonas", "Schmedtmann"]

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(" - ")); // "Fire - Air - Water"
console.log(elements.join(", ")); // "Fire, Air, Water"

// --- repeat ---
console.log("ha ".repeat(3)); // "ha ha ha "

// --- padStart / padEnd ---
const msg = "Hello";
console.log(msg.padStart(10, "*")); // "*****Hello"
console.log(msg.padEnd(10, "-"));   // "Hello-----"

// Practical: mask credit card number
const maskCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCard(4337846386429012)); // "************9012"


/*
═══════════════════════════════════════════════════════════════
7. ARRAY.MAP()
═══════════════════════════════════════════════════════════════

map() creates a NEW array by calling a function on
every element of the original array.

Syntax:
  const newArr = arr.map(function(element, index) {
    return transformedElement;
  });

Key points:
  - map() ALWAYS returns a new array of the same length
  - The original array is NOT changed
  - You MUST use return inside the callback
  - Use map when you want to TRANSFORM each element
*/

// Double each number
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] — original unchanged

// Arrow function version
const tripled = numbers.map((num) => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// Practical: EUR to USD conversion
const eurPrices = [10, 25, 50, 100];
const rate = 1.1;
const usdPrices = eurPrices.map((price) =>
  Number((price * rate).toFixed(2))
);
console.log(usdPrices); // [11, 27.5, 55, 110]

// Capitalize names
const names = ["george", "nino", "david"];
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalized); // ["George", "Nino", "David"]

// Celsius to Fahrenheit
const celsius = [0, 15, 25, 100];
const fahrenheit = celsius.map((c) => (c * 9) / 5 + 32);
console.log(fahrenheit); // [32, 59, 77, 212]


/*
═══════════════════════════════════════════════════════════════
8. ARRAY.FILTER()
═══════════════════════════════════════════════════════════════

filter() creates a NEW array with only the elements
that pass a test (return true from the callback).

Syntax:
  const filtered = arr.filter(function(element) {
    return condition; // true = keep, false = skip
  });

Key points:
  - Returns a new array (can be shorter or empty)
  - Original array is NOT changed
  - The callback must return true or false
  - Use filter when you want to SELECT certain elements
*/

// Filter even numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Filter objects
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 450, inStock: true },
];
const inStock = products.filter((p) => p.inStock);
console.log(inStock); // [{name: "Laptop"...}, {name: "Tablet"...}]

// Chaining filter + map
const movements = [200, -150, 400, -50, 100, -200];
const depositsInEur = movements
  .filter((mov) => mov > 0)
  .map((mov) => Number((mov / 2.95).toFixed(1)));
console.log(depositsInEur); // deposits converted to EUR


/*
═══════════════════════════════════════════════════════════════
9. ARRAY.FIND() AND findIndex() / indexOf()
═══════════════════════════════════════════════════════════════

find() returns the FIRST element that satisfies the condition.
findIndex() returns the INDEX of the first matching element.
indexOf() returns the index of a specific VALUE.

Key differences:
  - find() returns the element itself (or undefined)
  - findIndex() returns the index (or -1)
  - indexOf() searches by exact value (no callback)
  - filter() returns ALL matches, find() returns only the FIRST
*/

// find — returns the first match
const arr = [10, 20, 30, 40, 50];
const firstBig = arr.find((num) => num > 25);
console.log(firstBig); // 30

// indexOf — find index by exact value
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(99)); // -1 (not found)

// find with objects
const accounts = [
  { owner: "George", balance: 5000 },
  { owner: "Nino", balance: 1200 },
  { owner: "David", balance: 8500 },
];
const david = accounts.find((acc) => acc.owner === "David");
console.log(david); // { owner: "David", balance: 8500 }

// findIndex — returns the index of the first match
const davidIndex = accounts.findIndex((acc) => acc.owner === "David");
console.log(davidIndex); // 2


/*
═══════════════════════════════════════════════════════════════
10. ARRAY.SORT()
═══════════════════════════════════════════════════════════════

sort() sorts the elements of an array IN PLACE (mutates
the original array).

Without a comparator, sort converts elements to strings
and sorts alphabetically (by Unicode). This causes problems
with numbers: [3, 1, 100] sorts as [1, 100, 3] because
"100" < "3" as strings.

To sort numbers correctly, use a comparator function:
  arr.sort((a, b) => a - b)  // ascending
  arr.sort((a, b) => b - a)  // descending

How the comparator works:
  - return negative: a comes first
  - return positive: b comes first
  - return 0: order stays the same
*/

// Sorting strings — works fine without comparator
const owners = ["David", "Nino", "George", "Ana"];
owners.sort();
console.log(owners); // ["Ana", "David", "George", "Nino"]

// Sorting numbers — WRONG without comparator
const nums = [3, 1, 100, 25, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 25, 3] — WRONG!

// Sorting numbers — CORRECT with comparator
const numbers2 = [3, 1, 100, 25, 10];
numbers2.sort((a, b) => a - b); // ascending
console.log(numbers2); // [1, 3, 10, 25, 100]

numbers2.sort((a, b) => b - a); // descending
console.log(numbers2); // [100, 25, 10, 3, 1]

// Sorting objects by property
const students = [
  { name: "Ana", grade: 85 },
  { name: "David", grade: 92 },
  { name: "Nino", grade: 78 },
  { name: "George", grade: 95 },
];
students.sort((a, b) => a.grade - b.grade); // sort by grade ascending
console.log(students);

// Non-mutating sort — use slice() to copy first
const original = [5, 2, 8, 1];
const sorted = original.slice().sort((a, b) => a - b);
console.log(original); // [5, 2, 8, 1] — unchanged
console.log(sorted);   // [1, 2, 5, 8]


/*
═══════════════════════════════════════════════════════════════
11. ARRAY.REDUCE()
═══════════════════════════════════════════════════════════════

reduce() "reduces" an entire array down to a single value.
It processes each element and accumulates a result.

Syntax:
  arr.reduce(function(accumulator, currentValue) {
    return updatedAccumulator;
  }, initialValue);

Parameters:
  - accumulator (acc): the running total / result so far
  - currentValue (cur): the current element being processed
  - initialValue: the starting value for the accumulator
    (if omitted, the first element is used as the initial value)

Common uses:
  - Sum of all elements
  - Finding max/min
  - Counting occurrences
  - Building objects from arrays
*/

// Sum all elements
const amounts = [100, 200, 300, 400];
const total = amounts.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 1000

// How it works step by step:
// acc = 0,   cur = 100 → return 100
// acc = 100, cur = 200 → return 300
// acc = 300, cur = 300 → return 600
// acc = 600, cur = 400 → return 1000

// Find maximum value
const scores = [42, 88, 15, 73, 99, 56];
const maxScore = scores.reduce((max, cur) => (cur > max ? cur : max), scores[0]);
console.log(maxScore); // 99

// Without initial value (first element becomes the accumulator)
const total2 = amounts.reduce((acc, cur) => acc + cur);
console.log(total2); // 1000 (same result)


/*
═══════════════════════════════════════════════════════════════
SUMMARY
═══════════════════════════════════════════════════════════════

• Browser I/O: document.write(), alert(), prompt(), confirm()
  — simple ways to interact with the user

• Loops:
  - while: checks condition BEFORE each iteration
  - do-while: checks condition AFTER (runs at least once)
  - for: classic counter-based iteration

• forEach(): iterate over array elements (no new array returned)

• String Methods: trim, slice, toUpperCase, toLowerCase,
  replace, includes, split, join, repeat, padStart, padEnd

• map(): transform each element → returns new array (same length)
• filter(): select elements by condition → returns new array (shorter)
• find(): get first matching element → returns single element or undefined
• findIndex(): get index of first match → returns number or -1
• sort(): sort in place (mutates!) — use comparator for numbers
• reduce(): combine all elements into a single value

Key rule: map, filter, find do NOT mutate the original.
sort DOES mutate — use slice() first to preserve the original.
*/
