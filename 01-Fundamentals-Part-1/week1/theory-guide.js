////////////////////////////////////
// JavaScript Fundamentals - Part 1
// Comprehensive Theory Guide with Examples
////////////////////////////////////

/*
═══════════════════════════════════════════════════════════════
1. VALUES AND VARIABLES
═══════════════════════════════════════════════════════════════

Variables are containers that store data values. They allow us to
label and reuse data throughout our program.
*/

// Declaring and using variables
let firstName = "Sarah";
let age = 25;
let isStudent = true;

console.log(firstName); // Output: Sarah
console.log(age); // Output: 25

// Variable naming conventions and rules:
// ✅ GOOD:
let myFirstJob = "Programmer";    // camelCase (recommended for variables)
let my_first_job = "Programmer";  // snake_case (valid but not common in JS)
let $price = 19.99;               // Can start with $
let _private = "data";            // Can start with _
let PI = 3.14159;                 // ALL_CAPS for constants

// ❌ BAD / INVALID:
// let 3years = 3;                // Cannot start with number
// let my-job = "teacher";        // Cannot use hyphens
// let class = "Math";            // Cannot use reserved keywords
// let function = 5;              // Cannot use reserved keywords


/*
═══════════════════════════════════════════════════════════════
2. DATA TYPES
═══════════════════════════════════════════════════════════════

JavaScript has 7 primitive data types:
1. Number - for decimals and integers
2. String - for text
3. Boolean - for true/false values
4. Undefined - value taken by a variable that is not yet defined
5. Null - empty value
6. Symbol - unique and immutable (ES6)
7. BigInt - for integers too large for Number type (ES2020)
*/

// NUMBER - all numbers are floating point
let integer = 23;
let decimal = 23.5;
let negative = -15;

console.log(typeof integer);  // "number"
console.log(typeof decimal);  // "number"

// STRING - sequence of characters
let name1 = "Jonas";
let name2 = 'Sarah';
let message = `Hello ${name1}!`; // Template literal

console.log(typeof name1);    // "string"

// BOOLEAN - logical type (true/false)
let isAdult = true;
let hasLicense = false;

console.log(typeof isAdult);  // "boolean"

// UNDEFINED - variable declared but not assigned
let children;
console.log(children);        // undefined
console.log(typeof children); // "undefined"

// NULL - intentionally empty value
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a bug in JS!)

// DYNAMIC TYPING - variables can change type
let x = 23;           // x is number
console.log(typeof x); // "number"
x = "hello";          // now x is string
console.log(typeof x); // "string"


/*
═══════════════════════════════════════════════════════════════
3. LET, CONST, and VAR
═══════════════════════════════════════════════════════════════

Three ways to declare variables, each with different characteristics.
*/

// LET - for variables that will change (block-scoped, ES6)
let currentAge = 30;
currentAge = 31;      // ✅ Can reassign
console.log(currentAge); // 31

// CONST - for variables that won't change (block-scoped, ES6)
const birthYear = 1991;
// birthYear = 1990;  // ❌ ERROR! Cannot reassign const
// const job;         // ❌ ERROR! Must initialize const

const GRAVITY = 9.81; // Use const for constants
const API_KEY = "abc123";

// VAR - old way (function-scoped, avoid using)
var oldWay = "programmer";
oldWay = "teacher";   // Can reassign

// Best practices:
// - Use CONST by default
// - Use LET only when you need to reassign
// - Avoid VAR in modern JavaScript


/*
═══════════════════════════════════════════════════════════════
4. BASIC OPERATORS
═══════════════════════════════════════════════════════════════
*/

// MATH OPERATORS
console.log(10 + 5);    // 15 (addition)
console.log(10 - 5);    // 5  (subtraction)
console.log(10 * 5);    // 50 (multiplication)
console.log(10 / 5);    // 2  (division)
console.log(10 % 3);    // 1  (remainder/modulo)
console.log(2 ** 3);    // 8  (exponentiation: 2^3)

// String concatenation
const firstName2 = "John";
const lastName2 = "Doe";
console.log(firstName2 + " " + lastName2); // "John Doe"

// ASSIGNMENT OPERATORS
let points = 10;
points += 5;    // points = points + 5  (15)
points -= 3;    // points = points - 3  (12)
points *= 2;    // points = points * 2  (24)
points /= 4;    // points = points / 4  (6)
points++;       // points = points + 1  (7)
points--;       // points = points - 1  (6)

// COMPARISON OPERATORS (return boolean)
console.log(5 > 3);     // true  (greater than)
console.log(5 < 3);     // false (less than)
console.log(5 >= 5);    // true  (greater than or equal)
console.log(5 <= 4);    // false (less than or equal)
console.log(5 == 5);    // true  (equal - loose)
console.log(5 === 5);   // true  (equal - strict)
console.log(5 != 3);    // true  (not equal - loose)
console.log(5 !== 3);   // true  (not equal - strict)


/*
═══════════════════════════════════════════════════════════════
5. OPERATOR PRECEDENCE
═══════════════════════════════════════════════════════════════

Operators are executed in a specific order. Higher precedence =
executed first.
*/

// Example 1: Math operators
const result1 = 2 + 3 * 4;  // Multiplication first: 2 + 12 = 14
console.log(result1);       // 14

const result2 = (2 + 3) * 4; // Parentheses first: 5 * 4 = 20
console.log(result2);        // 20

// Example 2: Assignment
let a, b;
a = b = 10 + 5;  // Assignment is right-to-left
console.log(a, b); // 15, 15
// Execution: 10 + 5 = 15, b = 15, a = 15

// Example 3: Comparison and math
const ageJohn = 30;
const ageSarah = 25;
console.log(2040 - ageJohn > 2040 - ageSarah);
// Subtraction happens first: 2010 > 2015 = false


/*
═══════════════════════════════════════════════════════════════
6. STRINGS AND TEMPLATE LITERALS
═══════════════════════════════════════════════════════════════
*/

// Old way - String concatenation
const person = "Alice";
const job2 = "developer";
const birthYear2 = 1995;
const year2 = 2026;

const intro1 = "I'm " + person + ", a " + (year2 - birthYear2) +
               " year old " + job2 + "!";
console.log(intro1);

// Modern way - Template literals (ES6) - RECOMMENDED
const intro2 = `I'm ${person}, a ${year2 - birthYear2} year old ${job2}!`;
console.log(intro2);

// Regular strings can also use backticks
const simple = `Just a regular string`;

// Multi-line strings - Old way
console.log("Line 1\n\
Line 2\n\
Line 3");

// Multi-line strings - Modern way
console.log(`Line 1
Line 2
Line 3`);


/*
═══════════════════════════════════════════════════════════════
7. IF / ELSE STATEMENTS
═══════════════════════════════════════════════════════════════

Used for making decisions in code based on conditions.
*/

// Basic if/else
const userAge = 16;

if (userAge >= 18) {
  console.log("You can vote! 🗳️");
} else {
  console.log("Too young to vote");
}

// if/else with variable declaration
const birthYear3 = 1995;
let century;

if (birthYear3 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Born in the ${century}th century`);

// Multiple conditions with else if
const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}


/*
═══════════════════════════════════════════════════════════════
8. TYPE CONVERSION AND COERCION
═══════════════════════════════════════════════════════════════
*/

// TYPE CONVERSION (Manual) - we explicitly convert types
const inputYear = "1991";
console.log(Number(inputYear));      // 1991 (number)
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Hello"));   // NaN (Not a Number)
console.log(typeof NaN);        // "number" (NaN is a number type!)

console.log(String(23));        // "23" (string)
console.log(Boolean(0));        // false

// TYPE COERCION (Automatic) - JS automatically converts types
console.log("I am " + 23 + " years old");  // "I am 23 years old"
// Number 23 is coerced to string "23"

console.log("23" - "10" - 3);   // 10 (strings coerced to numbers)
console.log("23" * "2");        // 46 (strings coerced to numbers)
console.log("23" / "2");        // 11.5

// Tricky example
let n = "1" + 1;    // "11" (string concatenation)
n = n - 1;          // 10 (string "11" coerced to number)
console.log(n);     // 10


/*
═══════════════════════════════════════════════════════════════
9. TRUTHY AND FALSY VALUES
═══════════════════════════════════════════════════════════════

Falsy values: values that become false when converted to boolean
Only 5 falsy values: 0, "", undefined, null, NaN
Everything else is truthy!
*/

// Testing falsy values
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false (empty string)
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false

// Testing truthy values
console.log(Boolean("Hello"));    // true (any non-empty string)
console.log(Boolean(20));         // true (any non-zero number)
console.log(Boolean({}));         // true (any object)
console.log(Boolean([]));         // true (any array)

// Practical use in if statements
const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!"); // This runs (0 is falsy)
}

// Common bug: checking for 0
let height = 0;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is UNDEFINED"); // Bug! 0 is a valid height
}


/*
═══════════════════════════════════════════════════════════════
10. EQUALITY OPERATORS: == vs ===
═══════════════════════════════════════════════════════════════
*/

// STRICT EQUALITY (===) - Does NOT perform type coercion
// Both value AND type must be the same
console.log(18 === 18);      // true
console.log(18 === "18");    // false (different types)
console.log(18 === 19);      // false (different values)

// LOOSE EQUALITY (==) - Performs type coercion
// Only value needs to match (types are converted)
console.log(18 == 18);       // true
console.log(18 == "18");     // true (string "18" coerced to 18)
console.log(18 == 19);       // false

// Best practice: Always use === (strict) to avoid bugs
const favNumber = 23;

if (favNumber === 23) {
  console.log("23 is an amazing number!");
}

// Strict not-equal (!==) vs Loose not-equal (!=)
console.log(18 !== 19);      // true
console.log(18 !== "18");    // true (different types)
console.log(18 != "18");     // false (loose comparison)

// Practical example with user input
// const favorite = Number(prompt("What's your favorite number?"));
// if (favorite === 7) {
//   console.log("7 is a lucky number!");
// } else if (favorite === 23) {
//   console.log("23 is cool!");
// }


/*
═══════════════════════════════════════════════════════════════
11. LOGICAL OPERATORS
═══════════════════════════════════════════════════════════════

Used to combine multiple boolean conditions
*/

// AND (&&) - true only if ALL conditions are true
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

// OR (||) - true if AT LEAST ONE condition is true
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

// NOT (!) - inverts boolean value
console.log(!true);             // false
console.log(!false);            // true

// Practical example
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

// All conditions must be true
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive! ✅");
} else {
  console.log("Someone else should drive");
}

// At least one condition must be true
const hasCar = false;
const hasBike = true;

if (hasCar || hasBike) {
  console.log("Can commute to work");
}

// Complex conditions
const age3 = 20;
const hasTicket = true;

if (age3 >= 18 && hasTicket) {
  console.log("Can enter the concert");
} else if (age3 >= 18 && !hasTicket) {
  console.log("Need to buy a ticket");
} else {
  console.log("Too young to enter");
}


/*
═══════════════════════════════════════════════════════════════
12. SWITCH STATEMENT
═══════════════════════════════════════════════════════════════

Alternative to multiple if/else statements when checking one value
against multiple possibilities.
*/

const day = "monday";

switch (day) {
  case "monday":  // day === "monday"
    console.log("Plan the week");
    console.log("Go to meeting");
    break;  // Without break, execution continues!
  case "tuesday":
    console.log("Prepare presentation");
    break;
  case "wednesday":
  case "thursday":  // Multiple cases can share code
    console.log("Write code");
    break;
  case "friday":
    console.log("Review pull requests");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:  // Like else in if/else
    console.log("Not a valid day");
}

// Equivalent if/else
if (day === "monday") {
  console.log("Plan the week");
  console.log("Go to meeting");
} else if (day === "tuesday") {
  console.log("Prepare presentation");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code");
} else if (day === "friday") {
  console.log("Review pull requests");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day");
}


/*
═══════════════════════════════════════════════════════════════
13. STATEMENTS VS EXPRESSIONS
═══════════════════════════════════════════════════════════════
*/

// EXPRESSION - produces a value
3 + 4              // Expression (produces 7)
2026              // Expression (produces 2026)
true && false     // Expression (produces false)

// STATEMENT - performs an action (doesn't produce a value)
if (23 > 10) {
  const str = "23 is bigger";  // Statement
}

// You can use expressions inside template literals
const myAge = 30;
console.log(`I'm ${2026 - 1996} years old`);  // Expression inside ${}

// But you CANNOT use statements in template literals
// console.log(`I'm ${if (myAge >= 18) { "adult" }}`);  // ❌ ERROR!


/*
═══════════════════════════════════════════════════════════════
14. TERNARY (CONDITIONAL) OPERATOR
═══════════════════════════════════════════════════════════════

A shorthand for if/else that returns a value (it's an expression!)
Syntax: condition ? valueIfTrue : valueIfFalse
*/

// Basic example
const userAge2 = 23;
const beverage = userAge2 >= 18 ? "wine 🍷" : "water 💧";
console.log(beverage);  // "wine 🍷"

// Equivalent if/else
let beverage2;
if (userAge2 >= 18) {
  beverage2 = "wine 🍷";
} else {
  beverage2 = "water 💧";
}

// Can be used in template literals (because it's an expression!)
console.log(`I like to drink ${userAge2 >= 18 ? "wine 🍷" : "water 💧"}`);

// Practical example - calculate tip
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`Bill: $${bill}, Tip: $${tip}, Total: $${bill + tip}`);

// Can be nested (but be careful, can get hard to read!)
const temperature = 25;
const weather = temperature > 30 ? "hot" :
                temperature > 20 ? "warm" :
                temperature > 10 ? "cool" : "cold";
console.log(weather);  // "warm"


/*
═══════════════════════════════════════════════════════════════
SUMMARY - WHEN TO USE WHAT
═══════════════════════════════════════════════════════════════

VARIABLES:
- Use CONST by default
- Use LET when you need to reassign
- Never use VAR

STRINGS:
- Use template literals (`...`) instead of concatenation

EQUALITY:
- Always use === and !== (strict)
- Avoid == and != (loose)

CONDITIONS:
- Simple true/false assignment → Ternary operator
- Complex logic or multiple statements → if/else
- Checking one value against many options → switch

TYPE CHECKING:
- Use typeof to check types
- Remember: typeof null is "object" (bug!)
- Remember: typeof NaN is "number"

CONVERSIONS:
- Number() for string → number
- String() for anything → string
- Boolean() to check truthy/falsy
- Or rely on coercion where safe
*/
