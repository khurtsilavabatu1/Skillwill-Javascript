////////////////////////////////////
// JavaScript Fundamentals - Part 2
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. STRICT MODE
═══════════════════════════════════════════════════════════════

Strict mode is a special mode that we can activate in JavaScript.
It makes it easier to write secure code by:
- Forbidding certain actions that are otherwise "silent"
- Throwing visible errors for some common coding mistakes
- Reserving certain keywords for future JavaScript features

Always put 'use strict'; at the very top of your script file.
*/

'use strict';

// Example 1: Catches misspelled variable names
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Without strict mode, a typo like
// hasDriverLicense = true; would silently create a new variable
// With strict mode, it throws a ReferenceError

if (hasDriversLicense) console.log("I can drive :D");

// Example 2: Reserved keywords
// const interface = "Audio";  // ERROR in strict mode! Reserved for future use
// const private = 534;        // ERROR in strict mode! Reserved for future use
// const if = 23;              // ERROR! Already a keyword

// Why use strict mode?
// - Catches common bugs that would otherwise be silent
// - Prevents accidental creation of global variables
// - Helps you write cleaner, more predictable code
// - Always use it!


/*
═══════════════════════════════════════════════════════════════
2. FUNCTIONS
═══════════════════════════════════════════════════════════════

A function is a reusable piece of code. Think of it like a machine:
you give it input (arguments), it processes the data, and it can
give back output (return value).
*/

// Simple function - no parameters, no return
function logger() {
  console.log("My name is Jonas");
}

// Calling / running / invoking the function
logger(); // "My name is Jonas"
logger(); // "My name is Jonas"
logger(); // "My name is Jonas"

// Function with parameters and return value
function fruitProcessor(apples, oranges) {
  // apples and oranges are PARAMETERS (placeholders)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // Send the result back to where the function was called
}

// 5 and 0 are ARGUMENTS (actual values passed to parameters)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // "Juice with 5 apples and 0 oranges."

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // "Juice with 2 apples and 4 oranges."

// Key concepts:
// PARAMETERS = placeholders in the function definition (apples, oranges)
// ARGUMENTS = actual values passed when calling the function (5, 0)
// RETURN = sends a value back and exits the function
// Without return, a function returns undefined

// Built-in functions work the same way
const num = Number("23"); // Number() is a built-in function


/*
═══════════════════════════════════════════════════════════════
3. FUNCTION DECLARATIONS VS EXPRESSIONS
═══════════════════════════════════════════════════════════════

Two different ways to write functions, with one key difference:
function declarations can be called BEFORE they are defined in
the code (hoisting). Function expressions cannot.
*/

// FUNCTION DECLARATION - uses the function keyword with a name
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1); // 46

// FUNCTION EXPRESSION - function stored in a variable
// The function itself has no name (anonymous function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); // 46

// KEY DIFFERENCE: Hoisting
// Declarations can be called BEFORE they appear in the code:

// greet("Jonas"); // This would work! (hoisting)
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// But expressions CANNOT be called before they are defined:
// sayHello("Jonas"); // ERROR! Cannot access before initialization
// const sayHello = function(name) {
//   console.log(`Hello, ${name}!`);
// };

// Both produce the same result - it's a matter of personal preference
console.log(age1, age2); // 46 46


/*
═══════════════════════════════════════════════════════════════
4. ARROW FUNCTIONS
═══════════════════════════════════════════════════════════════

Arrow functions are a shorter syntax for writing function
expressions, introduced in ES6. Great for simple one-line
functions.
*/

// ONE-LINER: no curly braces needed, return is implicit
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46

// Compare all three forms:
// Declaration:  function calcAge(birthYear) { return 2037 - birthYear; }
// Expression:   const calcAge = function(birthYear) { return 2037 - birthYear; };
// Arrow:        const calcAge = birthYear => 2037 - birthYear;

// MULTIPLE PARAMETERS: need parentheses around parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
// "Jonas retires in 19 years"
console.log(yearsUntilRetirement(1980, "Bob"));
// "Bob retires in -8 years"

// Arrow function rules:
// - One parameter: parentheses optional     birthYear => ...
// - Zero parameters: need empty parens      () => ...
// - Multiple parameters: need parens        (a, b) => ...
// - One-line body: no {} or return needed    x => x * 2
// - Multi-line body: need {} and return      (x) => { ... return ...; }

// IMPORTANT: Arrow functions do NOT get their own 'this' keyword
// (this will matter later when we learn about objects and methods)


/*
═══════════════════════════════════════════════════════════════
5. FUNCTIONS CALLING OTHER FUNCTIONS
═══════════════════════════════════════════════════════════════

Functions can call other functions inside their body. This is
very common and helps keep code modular and reusable.
*/

// A helper function that cuts fruit into pieces
function cutFruitPieces(fruit) {
  return fruit * 4; // Each fruit is cut into 4 pieces
}

// Main function that uses the helper function
function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);   // Call helper
  const orangePieces = cutFruitPieces(oranges);  // Call helper

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor2(2, 3));
// "Juice with 8 pieces of apple and 12 pieces of orange."

// Data flow:
// 1. fruitProcessor2(2, 3) is called
// 2. Inside, cutFruitPieces(2) is called -> returns 8
// 3. Then cutFruitPieces(3) is called -> returns 12
// 4. fruitProcessor2 builds the string and returns it

// Another example
function convertCtoF(celsius) {
  return celsius * 9 / 5 + 32;
}

function printTemperature(celsius) {
  const fahrenheit = convertCtoF(celsius); // Call another function
  console.log(`${celsius}C is ${fahrenheit}F`);
}

printTemperature(0);   // "0C is 32F"
printTemperature(100); // "100C is 212F"


/*
═══════════════════════════════════════════════════════════════
6. REVIEWING FUNCTIONS
═══════════════════════════════════════════════════════════════

Let's review all the concepts by looking at a more complete
example with multiple return points and function calls.
*/

// Function anatomy
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear); // Calling another function
  const retirement = 65 - age;

  // Multiple return points with if/else
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement; // Function exits here if retirement > 0
  } else {
    console.log(`${firstName} has already retired`);
    return -1; // Function exits here otherwise
  }
};

console.log(yearsUntilRetirement2(1991, "Jonas")); // 19
console.log(yearsUntilRetirement2(1950, "Mike"));  // -1

// Function anatomy summary:
//
// function functionName(parameter1, parameter2) {  <-- function name & parameters
//   // Function body - code that gets executed       <-- body
//   const result = parameter1 + parameter2;
//   return result;                                   <-- return value
// }
//
// const output = functionName(arg1, arg2);           <-- calling with arguments

// Three types of functions:
// 1. Function Declaration: function name(params) { ... }
//    - Can be called before declaration (hoisted)
//
// 2. Function Expression: const name = function(params) { ... };
//    - Stored in a variable, not hoisted
//
// 3. Arrow Function: const name = (params) => { ... };
//    - Short syntax, no own 'this' keyword


/*
═══════════════════════════════════════════════════════════════
7. INTRODUCTION TO ARRAYS
═══════════════════════════════════════════════════════════════

Arrays are data structures that let us store multiple values
in a single variable. Elements are ordered and accessed by
their index (starting from 0).
*/

// Without arrays - messy!
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// With arrays - much better!
// Method 1: Array literal (most common)
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ["Michael", "Steven", "Peter"]

// Method 2: Using new Array() constructor
const years = new Array(1991, 1984, 2008, 2020);

// Accessing elements with index (0-based!)
console.log(friends[0]); // "Michael" (first element)
console.log(friends[1]); // "Steven"  (second element)
console.log(friends[2]); // "Peter"   (third element)

// .length property - number of elements
console.log(friends.length); // 3

// Getting the last element
console.log(friends[friends.length - 1]); // "Peter"

// MUTATING arrays (even with const!)
friends[2] = "Jay"; // Replace third element
console.log(friends); // ["Michael", "Steven", "Jay"]

// Why can we mutate a const array?
// Because const only prevents reassigning the entire variable,
// not changing its contents. Arrays are objects (reference types).
// friends = ["Bob", "Alice"]; // ERROR! Can't reassign const

// Arrays can hold MIXED types
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
// ["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Steven", "Jay"]]

// Using functions with arrays
const calcAgeArr = function (birthYear) {
  return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

const ageFirst = calcAgeArr(birthYears[0]);           // 47
const ageSecond = calcAgeArr(birthYears[1]);           // 70
const ageLast = calcAgeArr(birthYears[birthYears.length - 1]); // 19

const ages = [
  calcAgeArr(birthYears[0]),
  calcAgeArr(birthYears[1]),
  calcAgeArr(birthYears[birthYears.length - 1]),
];
console.log(ages); // [47, 70, 19]


/*
═══════════════════════════════════════════════════════════════
8. BASIC ARRAY OPERATIONS (METHODS)
═══════════════════════════════════════════════════════════════

Methods are built-in functions that we can call on arrays to
manipulate their contents.
*/

const myFriends = ["Michael", "Steven", "Peter"];

// ---- ADDING ELEMENTS ----

// push() - adds element to the END, returns new length
const newLength = myFriends.push("Jay");
console.log(myFriends);   // ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength);   // 4

// unshift() - adds element to the BEGINNING, returns new length
myFriends.unshift("John");
console.log(myFriends);   // ["John", "Michael", "Steven", "Peter", "Jay"]

// ---- REMOVING ELEMENTS ----

// pop() - removes the LAST element, returns the removed element
const removedLast = myFriends.pop();
console.log(removedLast);  // "Jay"
console.log(myFriends);    // ["John", "Michael", "Steven", "Peter"]

// shift() - removes the FIRST element, returns the removed element
const removedFirst = myFriends.shift();
console.log(removedFirst); // "John"
console.log(myFriends);    // ["Michael", "Steven", "Peter"]

// ---- FINDING ELEMENTS ----

// indexOf() - returns the index of the element (-1 if not found)
console.log(myFriends.indexOf("Steven")); // 1
console.log(myFriends.indexOf("Bob"));    // -1 (not found)

// includes() - returns true/false if element exists (ES6)
// Uses STRICT equality (===)
console.log(myFriends.includes("Steven")); // true
console.log(myFriends.includes("Bob"));    // false

myFriends.push(23);
console.log(myFriends.includes("23")); // false (strict: "23" !== 23)
console.log(myFriends.includes(23));   // true

// Practical example: conditional check with includes
if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// SUMMARY TABLE:
// Method      | Where          | Returns              | Mutates array?
// ------------|----------------|----------------------|---------------
// push()      | End (add)      | New length           | Yes
// unshift()   | Beginning (add)| New length           | Yes
// pop()       | End (remove)   | Removed element      | Yes
// shift()     | Beginning (rem)| Removed element      | Yes
// indexOf()   | Search         | Index or -1          | No
// includes()  | Search         | true/false           | No


/*
╔══════════════════════════════════════════════════════════════╗
║  ADVANCED SECTION - NOT YET COVERED                         ║
║  The topics below have not been studied yet.                 ║
║  They are included here for future reference only.           ║
║  You are NOT expected to know this material right now.        ║
║                                                              ║
║  ADVANCED SECTION - NOT YET COVERED (Georgian):              ║
║  ქვემოთ მოცემული თემები ჯერ არ შესწავლილა.                   ║
║  ისინი ჩართულია მხოლოდ სამომავლო მითითებისთვის.              ║
║  ამ მასალის ცოდნა ამ ეტაპზე არ მოეთხოვებათ.                  ║
╚══════════════════════════════════════════════════════════════╝
*/


/*
═══════════════════════════════════════════════════════════════
9. INTRODUCTION TO OBJECTS
═══════════════════════════════════════════════════════════════

Objects let us store data in key-value pairs instead of an
ordered list. Each piece of data has a name (key/property).

The difference from arrays:
- Arrays: ordered, accessed by index number
- Objects: unordered, accessed by property name
*/

// Representing data as an array (ordered, no labels)
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Same data as an object (with named properties)
const jonasObj = {
  firstName: "Jonas",        // key: value
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Object literal syntax: { key: value, key: value }
// Keys are also called PROPERTIES
// The order of properties does NOT matter

// When to use arrays vs objects:
// - Arrays: for ordered lists of similar items
// - Objects: for grouping related data with descriptive names


/*
═══════════════════════════════════════════════════════════════
10. DOT VS BRACKET NOTATION
═══════════════════════════════════════════════════════════════

Two ways to access and modify object properties.
*/

const person = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// DOT NOTATION - use when you know the exact property name
console.log(person.lastName);    // "Schmedtmann"
console.log(person.age);        // 46

// BRACKET NOTATION - use with computed/dynamic property names
console.log(person["lastName"]); // "Schmedtmann"

// The power of brackets: computed property names
const nameKey = "Name";
console.log(person["first" + nameKey]); // "Jonas" (computed: "firstName")
console.log(person["last" + nameKey]);  // "Schmedtmann" (computed: "lastName")

// This would NOT work with dot notation:
// console.log(person."first" + nameKey); // ERROR!

// Dynamic property access (e.g., from user input)
// const interestedIn = prompt("What do you want to know? firstName, lastName, age, job, friends");
// if (person[interestedIn]) {
//   console.log(person[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

// Adding new properties
person.location = "Portugal";
person["twitter"] = "@jonasschmedtman";
console.log(person);

// Challenge example
console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`
);
// "Jonas has 3 friends, and his best friend is called Michael"

// When to use which:
// DOT notation: simple, clean, when you know the property name
// BRACKET notation: when property name is computed/dynamic


/*
═══════════════════════════════════════════════════════════════
11. OBJECT METHODS
═══════════════════════════════════════════════════════════════

Objects can also hold functions as properties. These functions
are called METHODS. Inside a method, the 'this' keyword refers
to the object the method belongs to.
*/

const student = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Method: a function as a property value
  calcAge: function () {
    // 'this' refers to the object calling the method (student)
    this.age = 2037 - this.birthYear; // Store result as a new property
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// Calling methods
console.log(student.calcAge());  // 46

// After calling calcAge(), the age property now exists on the object
console.log(student.age); // 46 (stored property, no recalculation)
console.log(student.age); // 46 (efficient - calculated once, used many times)

// Using getSummary
console.log(student.getSummary());
// "Jonas is a 46-year old teacher, and he has a driver's license."

// Why use 'this' instead of the object name?
// - 'this' is dynamic: works even if the variable name changes
// - student.birthYear works but is fragile (hardcoded name)
// - this.birthYear is flexible and self-referencing

// NOTE: Arrow functions do NOT get their own 'this' keyword
// So do NOT use arrow functions as object methods!


/*
═══════════════════════════════════════════════════════════════
12. THE FOR LOOP
═══════════════════════════════════════════════════════════════

Loops allow us to repeat code without writing it over and over.
The for loop is used when we know how many times we want to repeat.

Syntax: for (counter; condition; increment) { code }
*/

// Without a loop - repetitive!
// console.log("Lifting weights rep 1");
// console.log("Lifting weights rep 2");
// ... 10 more times

// With a for loop - clean and scalable!
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// How it works:
// 1. COUNTER: let rep = 1        -> Initialize counter
// 2. CONDITION: rep <= 10        -> Check BEFORE each iteration
// 3. BODY: console.log(...)      -> Execute if condition is true
// 4. INCREMENT: rep++            -> Update counter AFTER each iteration
// 5. Go back to step 2

// Execution flow:
// rep = 1 -> 1 <= 10? YES -> log "...rep 1" -> rep becomes 2
// rep = 2 -> 2 <= 10? YES -> log "...rep 2" -> rep becomes 3
// ...
// rep = 10 -> 10 <= 10? YES -> log "...rep 10" -> rep becomes 11
// rep = 11 -> 11 <= 10? NO -> LOOP ENDS

// Different loop examples
// Counting from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

// Counting by 2s
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}


/*
═══════════════════════════════════════════════════════════════
13. LOOPING ARRAYS, BREAK AND CONTINUE
═══════════════════════════════════════════════════════════════

One of the most common uses of for loops is iterating through
arrays to read or process each element.
*/

const jonasInfo = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// Looping through an array
const types = [];

for (let i = 0; i < jonasInfo.length; i++) {
  // Reading from the array
  console.log(jonasInfo[i], typeof jonasInfo[i]);

  // Building a new array based on the original
  types.push(typeof jonasInfo[i]);
}
console.log(types);
// ["string", "string", "number", "string", "object", "boolean"]

// Practical example: calculating ages from birth years
const birthYearsArr = [1991, 2007, 1969, 2020];
const agesArr = [];

for (let i = 0; i < birthYearsArr.length; i++) {
  agesArr.push(2037 - birthYearsArr[i]);
}
console.log(agesArr); // [46, 30, 68, 17]

// ---- CONTINUE ----
// Skips the current iteration and moves to the next one

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasInfo.length; i++) {
  if (typeof jonasInfo[i] !== "string") continue; // Skip non-strings

  console.log(jonasInfo[i], typeof jonasInfo[i]);
}
// Only prints: "Jonas", "Schmedtmann", "teacher"

// ---- BREAK ----
// Completely exits the loop

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasInfo.length; i++) {
  if (typeof jonasInfo[i] === "number") break; // Stop at first number

  console.log(jonasInfo[i], typeof jonasInfo[i]);
}
// Only prints: "Jonas", "Schmedtmann" (stops before the number 46)


/*
═══════════════════════════════════════════════════════════════
14. LOOPING BACKWARDS AND NESTED LOOPS
═══════════════════════════════════════════════════════════════
*/

const jonasData = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// ---- LOOPING BACKWARDS ----
// Start from the last index, decrement the counter

for (let i = jonasData.length - 1; i >= 0; i--) {
  console.log(i, jonasData[i]);
}
// 5 true
// 4 ["Michael", "Peter", "Steven"]
// 3 "teacher"
// 2 46
// 1 "Schmedtmann"
// 0 "Jonas"

// ---- NESTED LOOPS (Loop inside a loop) ----
// The inner loop runs completely for each iteration of the outer loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
// Exercise 1: reps 1-5
// Exercise 2: reps 1-5
// Exercise 3: reps 1-5
// Total iterations of inner loop: 3 * 5 = 15

// Another example: multiplication table
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}


/*
═══════════════════════════════════════════════════════════════
15. THE WHILE LOOP
═══════════════════════════════════════════════════════════════

The while loop is more flexible than for. Use it when you don't
know how many iterations you need - just a condition to check.

Syntax: while (condition) { code }
*/

// Same as for loop but with while
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

// When to use while vs for:
// - for: when you know how many iterations (counter-based)
// - while: when you only have a condition, not a counter

// Example: Roll a dice until you get a 6
// This is a perfect use case for while - we don't know
// how many rolls it will take!

let dice = Math.trunc(Math.random() * 6) + 1;
// Math.random() gives 0 to 0.999...
// * 6 gives 0 to 5.999...
// Math.trunc() removes decimals: 0 to 5
// + 1 gives 1 to 6

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// The loop might run 0 times (if first roll is 6)
// or it might run 100 times - we don't know!

// Another while example: countdown
let countdown = 5;
while (countdown > 0) {
  console.log(`${countdown}...`);
  countdown--;
}
console.log("Liftoff!");

// IMPORTANT: Always make sure the condition will eventually
// become false, otherwise you create an INFINITE LOOP!
// let x = 1;
// while (x > 0) { x++; } // INFINITE LOOP! x will never be <= 0


/*
═══════════════════════════════════════════════════════════════
SUMMARY - JAVASCRIPT FUNDAMENTALS PART 2
═══════════════════════════════════════════════════════════════

STRICT MODE:
- Always use 'use strict'; at the top of your files
- Catches silent errors and reserves future keywords

FUNCTIONS:
- Reusable blocks of code
- Parameters (placeholders) vs Arguments (actual values)
- return sends a value back and exits the function
- Three types: Declaration, Expression, Arrow

FUNCTION TYPES:
- Declaration: function name(params) { }  -> hoisted
- Expression: const name = function(params) { }  -> not hoisted
- Arrow: const name = (params) => { }  -> short syntax, no 'this'

ARRAYS:
- Ordered collection: [item1, item2, item3]
- 0-based indexing: arr[0] is first element
- .length gives the number of elements
- Mutable even with const (reference type)
- push/pop (end), unshift/shift (beginning)
- indexOf (find position), includes (check existence)

OBJECTS (future reference):
- Key-value pairs: { key: value }
- Dot notation: obj.key
- Bracket notation: obj["key"] (for computed names)
- Methods: functions as properties, use 'this'

LOOPS:
- for: when you know the count -> for (let i = 0; i < n; i++)
- while: when you only have a condition -> while (cond) { }
- continue: skip current iteration
- break: exit loop entirely
*/
