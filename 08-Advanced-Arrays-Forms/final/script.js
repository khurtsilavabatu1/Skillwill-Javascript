'use strict';

///////////////////////////////////////
// 1. document.write() and alert()
///////////////////////////////////////

// document.write() — writes text directly to the HTML page
// It inserts content where the script is located

document.write('<h2>Hello, JavaScript!</h2>');
document.write('<p>This text was written using document.write()</p>');

// You can also insert HTML tags
document.write('<ul><li>First</li><li>Second</li></ul>');

// Warning: if you call document.write() after the page has loaded
// (e.g. on a button click), it will overwrite the entire page!
// That's why it's rarely used in practice.

// alert() — shows a popup window with a message
// alert('Hello!');

// alert pauses code execution until the user clicks OK
// alert('First message');
// alert('Second message'); // This will only appear after closing the first one

// prompt() — popup where the user can type input
// const name = prompt('Enter your name:');
// alert(`Hello, ${name}!`);

// confirm() — Yes/No popup, returns true or false
// const isAdult = confirm('Are you 18 or older?');
// console.log(isAdult); // true or false

// Summary:
// console.log()    — prints to console (for developers)
// document.write() — writes HTML to the page (rarely used)
// alert()          — popup window (pauses code)
// prompt()         — popup with input field (returns a string)
// confirm()        — popup Yes/No (returns a boolean)


///////////////////////////////////////
// 2. while loop
///////////////////////////////////////

// The while loop runs as long as the condition is true
// Syntax: while (condition) { code }

// Basic example — counter
let counter = 1;
while (counter <= 5) {
  console.log(`while loop: ${counter}`);
  counter++; // This is mandatory! Otherwise it's an infinite loop
}
// Outputs: 1, 2, 3, 4, 5

// while vs for — when to use which?
// for — when you know exactly how many times it should run
// while — when you don't know how many times, it depends on a condition

// Practical example: rolling a dice until you get a 6
let dice = Math.trunc(Math.random() * 6) + 1;
let rollCount = 0;

while (dice !== 6) {
  console.log(`Rolled: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  rollCount++;
}
console.log(`Rolled a 6! It took ${rollCount} rolls`);

// while loop with an array
const colors = ['red', 'blue', 'green', 'yellow'];
let i = 0;
while (i < colors.length) {
  console.log(`Color ${i + 1}: ${colors[i]}`);
  i++;
}

// break — exit the loop early
let num = 0;
while (num < 100) {
  num += Math.trunc(Math.random() * 10) + 1;
  if (num > 50) {
    console.log(`Exceeded 50: ${num}, breaking the loop`);
    break;
  }
  console.log(`Sum: ${num}`);
}

// continue — skip the current iteration
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) continue; // skips even numbers
  console.log(`Odd: ${j}`);
}
// Outputs: 1, 3, 5, 7, 9


///////////////////////////////////////
// 3. do-while loop
///////////////////////////////////////

// do-while loop — first executes the code, then checks the condition
// This means the code always runs at least once!

// Syntax:
// do {
//   code
// } while (condition);

// Basic example
let count = 1;
do {
  console.log(`do-while: ${count}`);
  count++;
} while (count <= 5);
// Outputs: 1, 2, 3, 4, 5

// Key difference from while:
// while — checks first, then executes (may run 0 times)
// do-while — executes first, then checks (always runs at least once)

// Example showing the difference:
let x = 10;

// while — condition is false from the start, won't execute
while (x < 5) {
  console.log('while: this will NOT be printed');
  x++;
}

// do-while — condition is false, but still executes once!
let y = 10;
do {
  console.log('do-while: this WILL be printed once!');
  y++;
} while (y < 5);

// Practical example: menu (simulation)
// This is a good use case for do-while because the menu
// should appear at least once
const menuOptions = ['Pizza', 'Burger', 'Salad', 'Exit'];
let choice = 0; // Simulation — in real life this would be prompt()

do {
  choice = Math.trunc(Math.random() * menuOptions.length);
  console.log(`Selected: ${menuOptions[choice]}`);
} while (menuOptions[choice] !== 'Exit');
console.log('Exited the menu!');

// Example: generate random numbers until you get 7
let randomNum;
let attempts = 0;
do {
  randomNum = Math.trunc(Math.random() * 10) + 1;
  attempts++;
  console.log(`Attempt ${attempts}: ${randomNum}`);
} while (randomNum !== 7);
console.log(`Found 7 after ${attempts} attempts!`);


////////////////////////////////////
// Coding Challenge: do-while
////////////////////////////////////

/*
Create a password generator simulation:

1. Create a function 'generatePassword' that uses do-while to generate
   a random password of a given length using characters from a string
   of allowed characters: 'abcdefghijklmnopqrstuvwxyz0123456789'
2. The function should keep generating passwords (using do-while) until
   it finds one that contains at least one digit AND at least one letter
3. Log each attempt and the final valid password
4. Return the valid password

Test: generatePassword(8)

Hint: Use Math.random() to pick random characters, and use a do-while
because you need at least one generation attempt.
*/

const generatePassword = function (length) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let password;
  let attemptCount = 0;

  do {
    password = '';
    for (let i = 0; i < length; i++) {
      password += chars[Math.trunc(Math.random() * chars.length)];
    }
    attemptCount++;
    console.log(`Attempt ${attemptCount}: ${password}`);
  } while (
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  );

  console.log(`Valid password found: ${password} (after ${attemptCount} attempts)`);
  return password;
};

generatePassword(8);


///////////////////////////////////////
// 4. forEach loop
///////////////////////////////////////

// forEach — an array method that calls a callback function
// for every element in the array

// Syntax: array.forEach(function(element, index, array) { ... })

// Basic example
const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];

fruits.forEach(function (fruit) {
  console.log(`I love ${fruit}`);
});
// Outputs:
// I love Apple
// I love Banana
// I love Orange
// I love Grape

// forEach with index
fruits.forEach(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});
// 1. Apple
// 2. Banana
// 3. Orange
// 4. Grape

// With arrow function (shorter syntax)
fruits.forEach((fruit, i) => console.log(`${i}: ${fruit}`));

// forEach vs for loop — comparison

// With for loop:
for (let i = 0; i < fruits.length; i++) {
  console.log(`for: ${fruits[i]}`);
}

// With forEach (cleaner and more readable):
fruits.forEach(fruit => console.log(`forEach: ${fruit}`));

// Important differences:
// 1. break and continue do NOT work in forEach!
// 2. forEach always iterates through the entire array
// 3. forEach returns nothing (undefined)
// 4. for loop is more flexible, forEach is cleaner

// Practical example — bank transactions
const transactions = [200, -150, 400, -50, 100, -200];

transactions.forEach(function (transaction, index) {
  const type = transaction > 0 ? 'income' : 'expense';
  console.log(
    `Transaction ${index + 1}: ${type} — ${Math.abs(transaction)} USD`
  );
});


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

const studentsForEach = [
  { name: 'Alice', scores: [85, 92, 78] },
  { name: 'Bob', scores: [90, 88, 95] },
  { name: 'Charlie', scores: [70, 65, 80] },
  { name: 'Diana', scores: [95, 98, 100] },
];

let passCount = 0;
let failCount = 0;

studentsForEach.forEach(function (student) {
  let sum = 0;
  for (let i = 0; i < student.scores.length; i++) {
    sum += student.scores[i];
  }
  const avg = sum / student.scores.length;
  const status = avg >= 80 ? 'Passed' : 'Failed';
  if (status === 'Passed') passCount++;
  else failCount++;
  console.log(
    `Student: ${student.name} | Average: ${avg.toFixed(1)} | Status: ${status}`
  );
});

console.log(`Total Passed: ${passCount}, Total Failed: ${failCount}`);


///////////////////////////////////////
// 5. String Methods
///////////////////////////////////////

const airline = 'Georgian Airways';
const plane = 'A320';

// length — string length
console.log(airline.length); // 16
console.log('Hello'.length); // 5

// indexOf / lastIndexOf — position of a character or substring
console.log(airline.indexOf('o')); // 2 (first 'o')
console.log(airline.lastIndexOf('a')); // 14 (last 'a')
console.log(airline.indexOf('Airways')); // 9
console.log(airline.indexOf('xyz')); // -1 (not found)

// slice() — extracts a portion of the string (returns new string, original unchanged)
console.log(airline.slice(9)); // 'Airways' (from index 9 to the end)
console.log(airline.slice(0, 8)); // 'Georgian' (from 0 to 8, 8 not included)
console.log(airline.slice(-7)); // 'Airways' (last 7 characters)
console.log(airline.slice(1, -1)); // 'eorgian Airway' (without first and last)

// toUpperCase / toLowerCase — change case
console.log(airline.toUpperCase()); // 'GEORGIAN AIRWAYS'
console.log(airline.toLowerCase()); // 'georgian airways'

// Practical example: formatting a name
const passenger = '  gEoRgE  ';
const formatted =
  passenger.trim().toLowerCase().slice(0, 1).toUpperCase() +
  passenger.trim().toLowerCase().slice(1);
console.log(formatted); // 'George'

// trim() — removes whitespace from the beginning and end
console.log('  Hello  '.trim()); // 'Hello'
console.log('  Hello  '.trimStart()); // 'Hello  '
console.log('  Hello  '.trimEnd()); // '  Hello'

// replace() — replaces content in a string
const priceGe = '350,99$';
const priceUS = priceGe.replace(',', '.');
console.log(priceUS); // '350.99$'

// replace only changes the first match
const announcement = 'Please exit through gate 23! Gate 23!';
console.log(announcement.replace('gate', 'door'));
// 'Please exit through door 23! Gate 23!' — only the first one changed

// replaceAll — replaces all matches
console.log(announcement.replaceAll('23', '45'));
// 'Please exit through gate 45! Gate 45!'

// includes / startsWith / endsWith — checks (returns boolean)
console.log(airline.includes('Airways')); // true
console.log(airline.includes('xyz')); // false
console.log(airline.startsWith('Geo')); // true
console.log(airline.endsWith('ways')); // true

// Practical example: baggage check
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('weapon')) {
    console.log('You are NOT allowed to board!');
  } else {
    console.log('Welcome aboard! Have a nice flight!');
  }
};

checkBaggage('Laptop, food, book');
checkBaggage('Socks, knife, sunglasses');

// split() — splits a string into an array
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName); // 'Jonas'
console.log(lastName); // 'Schmedtmann'

// join() — joins an array into a string (opposite of split)
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(' - ')); // 'Fire - Air - Water'
console.log(elements.join(', ')); // 'Fire, Air, Water'

// repeat() — repeats a string
console.log('ha '.repeat(3)); // 'ha ha ha '

// Practical example
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(3);
planesInLine(7);

// padStart / padEnd — pads a string to a desired length
const message = 'Hello';
console.log(message.padStart(10, '*')); // '*****Hello'
console.log(message.padEnd(10, '-')); // 'Hello-----'
console.log(message.padStart(10, '*').padEnd(15, '*')); // '*****Hello*****'

// Practical example: masking a credit card number
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4337846386647890)); // '************7890'
console.log(maskCreditCard('3345622289901287')); // '************1287'


////////////////////////////////////
// Coding Challenge: String Methods
////////////////////////////////////

/*
Create a function 'processText' that takes a sentence and performs
the following string transformations:

1. Trim whitespace from both ends
2. Convert to lowercase
3. Replace all occurrences of 'javascript' with 'JS'
4. Capitalize the first letter of the result
5. Add the character count at the end: " (X chars)"
6. Return the final string

Test data:
'  I Love JAVASCRIPT and javascript is Great!  '
→ 'I love JS and JS is great! (27 chars)'

'   JAVASCRIPT   '
→ 'JS (2 chars)'

Hint: Use trim(), toLowerCase(), replaceAll(), slice(), and length
*/

const processText = function (text) {
  const cleaned = text.trim().toLowerCase().replaceAll('javascript', 'JS');
  const capitalized = cleaned[0].toUpperCase() + cleaned.slice(1);
  return `${capitalized} (${capitalized.length} chars)`;
};

console.log(processText('  I Love JAVASCRIPT and javascript is Great!  '));
// 'I love JS and JS is great! (27 chars)'
console.log(processText('   JAVASCRIPT   '));
// 'JS (2 chars)'


///////////////////////////////////////
// 6. Array Method: map()
///////////////////////////////////////

// map() — creates a new array by applying a function to every element
// The original array is NOT modified!

// Syntax: const newArray = array.map(function(element, index, array) { return ... })

// Basic example — doubling numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] — original unchanged!

// With arrow function (short form)
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// Practical example — converting EUR to USD
const eurPrices = [10, 25, 50, 100];
const exchangeRate = 1.1;
const usdPrices = eurPrices.map(price => price * exchangeRate);
console.log(usdPrices); // [11, 27.5, 55, 110]

// map with index
const descriptions = eurPrices.map(
  (price, i) => `Item ${i + 1}: ${price}€ = ${(price * exchangeRate).toFixed(2)}$`
);
console.log(descriptions);

// map vs forEach — main difference:
// map() — returns a new array
// forEach() — returns nothing (undefined), only for side effects

// String transformation
const names = ['george', 'nino', 'david'];
const capitalized = names.map(
  name => name[0].toUpperCase() + name.slice(1)
);
console.log(capitalized); // ['George', 'Nino', 'David']


////////////////////////////////////
// Coding Challenge: map()
////////////////////////////////////

/*
You have an array of temperatures in Celsius:
const celsius = [-10, 0, 15, 25, 37, 100];

1. Use map() to convert each temperature to Fahrenheit
   Formula: F = C * 9/5 + 32
2. Use map() again to create an array of description strings:
   "15°C = 59.0°F — Mild"
   Use these categories:
   < 0°C: "Freezing", 0-15°C: "Cold", 16-25°C: "Mild", 26-35°C: "Warm", > 35°C: "Hot"
3. Log both arrays

Expected Fahrenheit: [14, 32, 59, 77, 98.6, 212]
*/

const celsius = [-10, 0, 15, 25, 37, 100];

const fahrenheit = celsius.map(c => c * 9 / 5 + 32);
console.log(fahrenheit); // [14, 32, 59, 77, 98.6, 212]

const tempDescriptions = celsius.map(c => {
  const f = (c * 9 / 5 + 32).toFixed(1);
  let category;
  if (c < 0) category = 'Freezing';
  else if (c <= 15) category = 'Cold';
  else if (c <= 25) category = 'Mild';
  else if (c <= 35) category = 'Warm';
  else category = 'Hot';
  return `${c}°C = ${f}°F — ${category}`;
});
console.log(tempDescriptions);


///////////////////////////////////////
// 7. Array Method: filter()
///////////////////////////////////////

// filter() — creates a new array with only the elements
// that satisfy a condition

// Syntax: const filtered = array.filter(function(element) { return condition })

// Basic example — filtering even numbers
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Numbers greater than 5
const bigNumbers = allNumbers.filter(num => num > 5);
console.log(bigNumbers); // [6, 7, 8, 9, 10]

// Practical example — bank transactions
const movements = [200, -150, 400, -50, 100, -200, 300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits); // [200, 400, 100, 300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-150, -50, -200]

// Filtering strings
const words = ['hello', 'world', 'hi', 'hey', 'JavaScript', 'code'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ['hello', 'world', 'JavaScript']

// filter + map together (chaining)
// First filter deposits, then convert from GEL to EUR
const depositsInEur = movements
  .filter(mov => mov > 0)
  .map(mov => mov / 2.95);
console.log(depositsInEur);


////////////////////////////////////
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
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Phone', price: 800, inStock: false },
  { name: 'Tablet', price: 450, inStock: true },
  { name: 'Monitor', price: 350, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Headphones', price: 150, inStock: true },
];

const affordableInStock = products.filter(p => p.inStock && p.price < 500);
console.log('In stock & under $500:', affordableInStock.map(p => p.name));

const outOfStock = products.filter(p => !p.inStock);
console.log('Out of stock:', outOfStock.map(p => p.name));

const inStockProducts = products.filter(p => p.inStock);
let mostExpensiveInStock = inStockProducts[0];
inStockProducts.forEach(p => {
  if (p.price > mostExpensiveInStock.price) mostExpensiveInStock = p;
});
console.log('Most expensive in stock:', mostExpensiveInStock.name, `$${mostExpensiveInStock.price}`);


///////////////////////////////////////
// 8. Array Method: find() and indexOf()
///////////////////////////////////////

// find() — returns the first element that satisfies a condition
// indexOf() — returns the index (position) of an element

// indexOf — for primitive values
const arr = [10, 20, 30, 40, 50];
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(99)); // -1 (not found)

// find — first element that satisfies a condition
const firstBig = arr.find(num => num > 25);
console.log(firstBig); // 30 (first one that is > 25)

// find vs filter:
// find() — returns one element (the first match)
// filter() — returns an array with all matching elements

// find in an array of objects (most common use case)
const accounts = [
  { owner: 'George', balance: 5000 },
  { owner: 'Nino', balance: 1200 },
  { owner: 'David', balance: 8500 },
  { owner: 'Mariam', balance: 300 },
];

const david = accounts.find(acc => acc.owner === 'David');
console.log(david); // { owner: 'David', balance: 8500 }

const richAccount = accounts.find(acc => acc.balance > 5000);
console.log(richAccount); // { owner: 'David', balance: 8500 }

// findIndex — element's index by condition (like indexOf but with a callback)
const davidIndex = accounts.findIndex(acc => acc.owner === 'David');
console.log(davidIndex); // 2

// includes vs find vs indexOf:
// includes — boolean: exists or not (true/false)
// indexOf — number: which position (-1 if not found)
// find — element: which element satisfies the condition


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
First active admin: Diana
User with id 3: Charlie
Bob's index: 1
Contains id 6: false
*/

const users = [
  { id: 1, name: 'Alice', role: 'admin', active: true },
  { id: 2, name: 'Bob', role: 'user', active: false },
  { id: 3, name: 'Charlie', role: 'user', active: true },
  { id: 4, name: 'Diana', role: 'admin', active: true },
  { id: 5, name: 'Eve', role: 'user', active: false },
];

const firstActiveAdmin = users.find(u => u.role === 'admin' && u.active);
console.log('First active admin:', firstActiveAdmin.name); // Diana

const userById = users.find(u => u.id === 3);
console.log('User with id 3:', userById.name); // Charlie

const bobIndex = users.findIndex(u => u.name === 'Bob');
console.log("Bob's index:", bobIndex); // 1

const ids = users.map(u => u.id);
console.log('Contains id 6:', ids.indexOf(6) !== -1); // false


///////////////////////////////////////
// 9. Array Method: sort()
///////////////////////////////////////

// sort() — sorts the array in place (mutates the original array!)

// Warning: sort() mutates the original array!

// Sorting strings (alphabetically by default)
const owners = ['David', 'Nino', 'George', 'Ana'];
owners.sort();
console.log(owners); // ['Ana', 'David', 'George', 'Nino']

// Sorting numbers — Warning: default sort doesn't work correctly!
const nums = [3, 1, 100, 25, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 25, 3] — wrong! Compares as strings!

// Correct number sorting — compare function
const numbers2 = [3, 1, 100, 25, 10];

// Ascending order
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 3, 10, 25, 100]

// Descending order
numbers2.sort((a, b) => b - a);
console.log(numbers2); // [100, 25, 10, 3, 1]

// How the compare function works:
// (a, b) => a - b
// If result < 0: a comes first
// If result > 0: b comes first
// If result === 0: order doesn't change

// Sorting objects
const students = [
  { name: 'Ana', grade: 85 },
  { name: 'David', grade: 92 },
  { name: 'Nino', grade: 78 },
  { name: 'George', grade: 95 },
];

// By grade ascending
students.sort((a, b) => a.grade - b.grade);
console.log(students);
// [{Nino, 78}, {Ana, 85}, {David, 92}, {George, 95}]

// By grade descending
students.sort((a, b) => b.grade - a.grade);
console.log(students);
// [{George, 95}, {David, 92}, {Ana, 85}, {Nino, 78}]

// Preserving the original — slice() + sort()
const original = [5, 2, 8, 1];
const sorted = original.slice().sort((a, b) => a - b);
console.log(original); // [5, 2, 8, 1] — unchanged
console.log(sorted); // [1, 2, 5, 8]


////////////////////////////////////
// Coding Challenge: sort()
////////////////////////////////////

/*
You have an array of scores:
const gameScores = [42, 88, 15, 73, 99, 56, 31, 64, 77, 20];

1. Sort the scores in descending order (highest first)
2. Find the top 3 scores
3. Find the bottom 3 scores
4. Log: "Top 3: 99, 88, 77"
5. Log: "Bottom 3: 15, 20, 31"

Important: Don't modify the original array! Use slice() before sort().
*/

const gameScores = [42, 88, 15, 73, 99, 56, 31, 64, 77, 20];

const sortedScores = gameScores.slice().sort((a, b) => b - a);
const top3 = sortedScores.slice(0, 3);
const bottom3 = sortedScores.slice(-3).sort((a, b) => a - b);

console.log(`Top 3: ${top3.join(', ')}`); // Top 3: 99, 88, 77
console.log(`Bottom 3: ${bottom3.join(', ')}`); // Bottom 3: 15, 20, 31
console.log('Original unchanged:', gameScores);


////////////////////////////////////
// Coding Challenge: Object Sorting
////////////////////////////////////

/*
You have an array of employees:
const employees = [
  { name: 'Alice', department: 'Engineering', salary: 95000 },
  { name: 'Bob', department: 'Marketing', salary: 72000 },
  { name: 'Charlie', department: 'Engineering', salary: 110000 },
  { name: 'Diana', department: 'Marketing', salary: 68000 },
  { name: 'Eve', department: 'Engineering', salary: 105000 },
  { name: 'Frank', department: 'HR', salary: 60000 },
];

1. Sort by salary descending (don't mutate the original)
2. Sort by department alphabetically, then by salary descending within each dept
3. Log both results showing name, department, and salary

Expected department+salary sort:
Engineering: Charlie (110000), Eve (105000), Alice (95000)
HR: Frank (60000)
Marketing: Bob (72000), Diana (68000)
*/

const employees = [
  { name: 'Alice', department: 'Engineering', salary: 95000 },
  { name: 'Bob', department: 'Marketing', salary: 72000 },
  { name: 'Charlie', department: 'Engineering', salary: 110000 },
  { name: 'Diana', department: 'Marketing', salary: 68000 },
  { name: 'Eve', department: 'Engineering', salary: 105000 },
  { name: 'Frank', department: 'HR', salary: 60000 },
];

const bySalary = employees.slice().sort((a, b) => b.salary - a.salary);
console.log('By salary:', bySalary.map(e => `${e.name}: $${e.salary}`));

const byDeptAndSalary = employees.slice().sort((a, b) => {
  if (a.department < b.department) return -1;
  if (a.department > b.department) return 1;
  return b.salary - a.salary;
});
console.log('By dept + salary:', byDeptAndSalary.map(e => `${e.department} — ${e.name}: $${e.salary}`));


///////////////////////////////////////
// 10. Array Method: reduce()
///////////////////////////////////////

// reduce() — "reduces" an array to a single value
// (sum, average, maximum, string, object — anything)

// Syntax: array.reduce(function(accumulator, current, index, array) { }, initialValue)

// Basic example — sum
const amounts = [100, 200, 300, 400];
const total = amounts.reduce(function (acc, cur) {
  console.log(`acc: ${acc}, cur: ${cur}`);
  return acc + cur;
}, 0);
console.log(`Total: ${total}`); // 1000

// Step by step:
// acc=0,   cur=100 → return 100
// acc=100, cur=200 → return 300
// acc=300, cur=300 → return 600
// acc=600, cur=400 → return 1000

// With arrow function (short form)
const sum = amounts.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 1000

// Finding the maximum
const values = [23, 11, 64, 18, 45];
const max = values.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  values[0]
);
console.log(`Maximum: ${max}`); // 64

// Finding the minimum
const min = values.reduce(
  (acc, cur) => (cur < acc ? cur : acc),
  values[0]
);
console.log(`Minimum: ${min}`); // 11

// Calculating the average
const grades = [85, 90, 78, 92, 88];
const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
console.log(`Average: ${average}`); // 86.6

// Counting elements
const votes = ['yes', 'no', 'yes', 'yes', 'no', 'yes'];
const voteCounts = votes.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(voteCounts); // { yes: 4, no: 2 }


////////////////////////////////////
// Coding Challenge: reduce()
////////////////////////////////////

/*
You have a shopping cart:
const cart = [
  { item: 'Shirt', price: 29.99, quantity: 2 },
  { item: 'Pants', price: 49.99, quantity: 1 },
  { item: 'Shoes', price: 89.99, quantity: 1 },
  { item: 'Socks', price: 9.99, quantity: 3 },
  { item: 'Hat', price: 19.99, quantity: 1 },
];

1. Use reduce() to calculate the total price (price * quantity for each item)
2. Use reduce() to find the most expensive single item (by price, not total)
3. Use reduce() to create a summary object: { totalItems: X, totalPrice: Y }
4. Log all results

Expected total: 29.99*2 + 49.99 + 89.99 + 9.99*3 + 19.99 = 249.92
*/

const cart = [
  { item: 'Shirt', price: 29.99, quantity: 2 },
  { item: 'Pants', price: 49.99, quantity: 1 },
  { item: 'Shoes', price: 89.99, quantity: 1 },
  { item: 'Socks', price: 9.99, quantity: 3 },
  { item: 'Hat', price: 19.99, quantity: 1 },
];

const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
console.log(`Total price: $${totalPrice.toFixed(2)}`);

const mostExpensive = cart.reduce((acc, cur) => (cur.price > acc.price ? cur : acc));
console.log(`Most expensive item: ${mostExpensive.item} ($${mostExpensive.price})`);

const summary = cart.reduce(
  (acc, cur) => {
    acc.totalItems += cur.quantity;
    acc.totalPrice += cur.price * cur.quantity;
    return acc;
  },
  { totalItems: 0, totalPrice: 0 }
);
console.log(`Summary: ${summary.totalItems} items, $${summary.totalPrice.toFixed(2)}`);


////////////////////////////////////
// Coding Challenge: filter + map + reduce Chaining
////////////////////////////////////

/*
You have an array of orders:
const orders = [
  { customer: 'Alice', items: ['Laptop', 'Mouse'], total: 1250, status: 'completed' },
  { customer: 'Bob', items: ['Phone'], total: 800, status: 'cancelled' },
  { customer: 'Charlie', items: ['Tablet', 'Case', 'Charger'], total: 520, status: 'completed' },
  { customer: 'Diana', items: ['Monitor', 'Keyboard'], total: 450, status: 'completed' },
  { customer: 'Eve', items: ['Headphones'], total: 150, status: 'cancelled' },
  { customer: 'Frank', items: ['Camera', 'Lens', 'Tripod', 'Bag'], total: 2100, status: 'completed' },
];

Using a single chain of filter + map + reduce:
1. Filter only completed orders
2. Map each order to its total with a 10% discount applied
3. Reduce to get the grand total of all discounted completed orders

Log the result: "Total revenue (after 10% discount): $X"

Expected: (1250 + 520 + 450 + 2100) * 0.9 = 3888
*/

const orders = [
  { customer: 'Alice', items: ['Laptop', 'Mouse'], total: 1250, status: 'completed' },
  { customer: 'Bob', items: ['Phone'], total: 800, status: 'cancelled' },
  { customer: 'Charlie', items: ['Tablet', 'Case', 'Charger'], total: 520, status: 'completed' },
  { customer: 'Diana', items: ['Monitor', 'Keyboard'], total: 450, status: 'completed' },
  { customer: 'Eve', items: ['Headphones'], total: 150, status: 'cancelled' },
  { customer: 'Frank', items: ['Camera', 'Lens', 'Tripod', 'Bag'], total: 2100, status: 'completed' },
];

const totalRevenue = orders
  .filter(order => order.status === 'completed')
  .map(order => order.total * 0.9)
  .reduce((acc, cur) => acc + cur, 0);

console.log(`Total revenue (after 10% discount): $${totalRevenue.toFixed(2)}`);


///////////////////////////////////////
// 11. Array Methods: concat() and join()
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

// join() — converts an array to a string with a separator between elements
const letters = ['H', 'e', 'l', 'l', 'o'];
console.log(letters.join('')); // 'Hello'
console.log(letters.join('-')); // 'H-e-l-l-o'
console.log(letters.join(' ')); // 'H e l l o'

// split + join combination — string transformation
const sentence = 'hello world from javascript';
const titleCase = sentence
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(titleCase); // 'Hello World From Javascript'

// Practical example — creating CSV format
const studentData = [
  ['Name', 'Score', 'Status'],
  ['Ana', '95', 'Passed'],
  ['David', '82', 'Passed'],
  ['Nino', '55', 'Failed'],
];

const csvOutput = studentData.map(row => row.join(',')).join('\n');
console.log(csvOutput);
// Name,Score,Status
// Ana,95,Passed
// David,82,Passed
// Nino,55,Failed


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

const classA = ['Alice', 'Bob', 'Charlie'];
const classB = ['Diana', 'Eve'];
const classC = ['Frank', 'George', 'Hannah', 'Ivan'];

const allStudents = classA.concat(classB, classC).sort();
const roster = allStudents.map((name, i) => `${i + 1}. ${name}`).join('\n');
console.log(roster);

const classNames = ['A', 'B', 'C'];
console.log(`Total students: ${allStudents.length} | Classes merged: ${classNames.join(', ')}`);
