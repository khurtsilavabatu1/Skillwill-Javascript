////////////////////////////////////
// A Closer Look at Functions
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. DEFAULT PARAMETERS
═══════════════════════════════════════════════════════════════

In ES6+, function parameters can have default values.
If an argument is not provided (or is explicitly undefined),
the default value is used instead.

Defaults can be any expression, and they can even reference
OTHER parameters that were defined BEFORE them in the list.
*/

'use strict';

// Basic default parameters
const reservations = [];

const createReservation = function (
  tourName,
  numGuests = 1,
  pricePerGuest = 50 * numGuests // can use earlier params in expressions
) {
  const reservation = {
    tourName,
    numGuests,
    pricePerGuest,
  };
  console.log(reservation);
  reservations.push(reservation);
};

createReservation('Tbilisi Walking Tour');
// { tourName: 'Tbilisi Walking Tour', numGuests: 1, pricePerGuest: 50 }

createReservation('Batumi Seaside Tour', 4);
// { tourName: 'Batumi Seaside Tour', numGuests: 4, pricePerGuest: 200 }

createReservation('Kazbegi Mountain Hike', 3, 80);
// { tourName: 'Kazbegi Mountain Hike', numGuests: 3, pricePerGuest: 80 }

// Skipping a parameter — pass undefined to use the default
createReservation('Mtskheta Day Trip', undefined, 30);
// { tourName: 'Mtskheta Day Trip', numGuests: 1, pricePerGuest: 30 }


/*
═══════════════════════════════════════════════════════════════
2. HOW PASSING ARGUMENTS WORKS: VALUE vs REFERENCE
═══════════════════════════════════════════════════════════════

When passing arguments to a function:
- PRIMITIVES are copied (pass by value).
  Changing the copy inside the function does NOT affect the original.
- OBJECTS are passed as a reference to the same memory address.
  Changing properties inside the function DOES affect the original.

JavaScript does NOT have true "pass by reference" like C++.
It passes the reference VALUE (the memory address), not the
reference itself. The distinction is subtle but important.
*/

const flightCode = 'TB401';
const passenger = {
  name: 'Giorgi Beridze',
  passport: 98712345678,
};

const checkIn = function (flightNum, traveler) {
  // This changes the LOCAL copy — does NOT affect the original
  flightNum = 'TB999';

  // This DOES affect the original object (same reference)
  traveler.name = 'Mr. ' + traveler.name;

  if (traveler.passport === 98712345678) {
    console.log('Checked in successfully');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flightCode, passenger);
console.log(flightCode); // 'TB401' — unchanged (primitive was copied)
console.log(passenger.name); // 'Mr. Giorgi Beridze' — changed! (object was mutated)

// Danger: multiple functions mutating the same object
const changePassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

changePassport(passenger);
console.log(passenger.passport); // random number — original mutated again!


/*
═══════════════════════════════════════════════════════════════
3. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
═══════════════════════════════════════════════════════════════

FIRST-CLASS FUNCTIONS is a language FEATURE — it means
functions are simply VALUES. They are just another "type"
of object in JavaScript. Because of this, we can:
  - Store functions in variables and object properties
  - Pass functions as arguments to other functions
  - Return functions from functions
  - Call methods on functions (like .bind())

HIGHER-ORDER FUNCTIONS is a PRACTICE enabled by first-class
functions. A higher-order function is a function that either:
  1. Receives another function as an argument (a callback), OR
  2. Returns a new function, OR
  3. Both

First-class functions is a concept (the language has it or not).
Higher-order functions exist in practice because the language
supports first-class functions.
*/

// Functions are values — stored in a variable
const wave = function () {
  console.log('Gamarjoba!');
};

// Passed as a value to another function (addEventListener is the HOF)
// document.body.addEventListener('click', wave);

// Functions have properties and methods, just like objects
console.log(wave.name); // 'wave'


/*
═══════════════════════════════════════════════════════════════
4. FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
═══════════════════════════════════════════════════════════════

Callback functions are functions passed as arguments to
higher-order functions. The higher-order function "calls back"
the function at the right time.

Benefits of callbacks:
1. They allow ABSTRACTION — hiding implementation details
2. They make code more reusable and composable
3. They split code into smaller, focused pieces
*/

// Two simple transformation functions
const removeSpaces = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const capitalizeFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function that accepts a callback
const transformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // fn.name gives the function's name
};

transformer('khinkali is delicious', capitalizeFirstWord);
// Original: khinkali is delicious
// Transformed: KHINKALI is delicious
// Transformed by: capitalizeFirstWord

transformer('khinkali is delicious', removeSpaces);
// Original: khinkali is delicious
// Transformed: khinkaliisdelicious
// Transformed by: removeSpaces

// Callbacks are used everywhere in JavaScript
const sayGamarjoba = function () {
  console.log('Gamarjoba!');
};
['Giorgi', 'Nino', 'Dato'].forEach(sayGamarjoba);


/*
═══════════════════════════════════════════════════════════════
5. FUNCTIONS RETURNING FUNCTIONS
═══════════════════════════════════════════════════════════════

A function can return another function. This is extremely
useful for currying and creating specialized functions.
The returned function "remembers" the variables from its
parent scope — this is a preview of CLOSURES (section 9).
*/

// Function returning a function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

const greetGamarjoba = greet('Gamarjoba');
greetGamarjoba('Giorgi'); // Gamarjoba, Giorgi!
greetGamarjoba('Ana');    // Gamarjoba, Ana!

// Can also call immediately with double parentheses
greet('Gamარjobat')('Dato'); // Gamარjobat, Dato!

// Same thing using only arrow functions (more concise)
const greetArrow = greeting => name => console.log(`${greeting}, ${name}!`);

greetArrow('Salami')('Nino'); // Salami, Nino!


/*
═══════════════════════════════════════════════════════════════
6. THE CALL AND APPLY METHODS
═══════════════════════════════════════════════════════════════

When we extract a method from an object and store it in a
variable, the this keyword becomes undefined (in strict mode).
The call() and apply() methods let us manually set the this
keyword for any function call.

call(thisArg, arg1, arg2, ...)  — arguments listed individually
apply(thisArg, [arg1, arg2])    — arguments as an array

In modern JS, apply() is rarely needed because we can use
call() with the spread operator: call(thisArg, ...array)
*/

const georgianAirways = {
  airline: 'Georgian Airways',
  code: 'A9',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code}${flightNum}`, passengerName });
  },
};

georgianAirways.book(101, 'Giorgi Kapanadze');
georgianAirways.book(205, 'Nino Javakhishvili');

const myWay = {
  airline: 'MyWay Airlines',
  code: 'MW',
  bookings: [],
};

// Extract the method — this is now a regular function, this = undefined
const book = georgianAirways.book;

// Using call() to set this manually
book.call(myWay, 301, 'Ana Dolidze');
console.log(myWay);

book.call(georgianAirways, 102, 'Dato Gelashvili');

// Using apply() with an array of arguments
const flightData = [505, 'Luka Tsulukidze'];
book.apply(myWay, flightData);

// Modern alternative — call with spread (preferred over apply)
book.call(myWay, ...flightData);


/*
═══════════════════════════════════════════════════════════════
7. THE BIND METHOD
═══════════════════════════════════════════════════════════════

bind() works like call(), but instead of immediately calling
the function, it RETURNS a new function where this is permanently
bound to the specified object.

bind() is especially useful for:
1. Creating functions bound to specific objects
2. PARTIAL APPLICATION — pre-setting some arguments
3. Event listeners where this needs to point to an object
*/

// Create bound functions for each airline
const bookMW = book.bind(myWay);
const bookGA = book.bind(georgianAirways);

bookMW(707, 'Mariam Kobiashvili');

// Partial application — pre-set the flight number
const bookMW301 = book.bind(myWay, 301);
bookMW301('Irakli Tsiklauri');   // only need the name
bookMW301('Tamara Mchedlishvili');

// bind() with event listeners
georgianAirways.planes = 25;
georgianAirways.buyPlane = function () {
  this.planes++;
  console.log(`${this.airline} now has ${this.planes} planes`);
};

// In an event listener, this = the DOM element, NOT the object
// .bind(georgianAirways) fixes this:
// document.querySelector('.buy')
//   .addEventListener('click', georgianAirways.buyPlane.bind(georgianAirways));

// Partial application with bind(null, ...)
// When we don't care about this, use null as the first argument
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.18, 200)); // 236

// Pre-set the Georgian VAT rate of 18%
const addGeorgianVAT = addTax.bind(null, 0.18);
// Equivalent to: value => value + value * 0.18

console.log(addGeorgianVAT(100)); // 118
console.log(addGeorgianVAT(500)); // 590

// Same result using a function returning a function (closure approach)
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.18);
console.log(addVAT2(100)); // 118


/*
═══════════════════════════════════════════════════════════════
8. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
═══════════════════════════════════════════════════════════════

An IIFE is a function that is executed immediately after it
is created. It runs once and never again.

Main purposes:
1. DATA PRIVACY — variables inside the IIFE cannot be accessed
   from the outside (they are scoped to the function)
2. Avoiding polluting the global scope
3. Executing setup code that should only run once

In modern JS (ES6+), block scope with let/const achieves the
same data privacy. But IIFEs are still useful for running
code exactly once.
*/

// IIFE with function expression — wrap in parentheses, then call
(function () {
  console.log('This runs once and never again');
  const privateTbilisi = 'Old Town';
  // privateTbilisi is NOT accessible outside
})();

// IIFE with arrow function
(() => console.log('This arrow IIFE also runs only once'))();

// console.log(privateTbilisi); // ReferenceError!

// Modern alternative — block scope achieves data privacy too
{
  const privateData = 'Sioni Cathedral';
  var leakedData = 'Freedom Square'; // var leaks out of blocks!
}
// console.log(privateData);  // ReferenceError!
console.log(leakedData);      // 'Freedom Square' — var is NOT block-scoped


/*
═══════════════════════════════════════════════════════════════
9. CLOSURES
═══════════════════════════════════════════════════════════════

A closure is NOT something we create manually — it happens
automatically in certain situations.

A closure gives a function access to all the variables of its
parent function, even AFTER the parent function has returned.
The function "closes over" its parent scope's variable
environment — it keeps a reference to that environment.

Think of it this way:
- When a function is created, it gets a [[Scope]] property
  that contains a reference to the scope in which it was created.
- Even after the parent execution context is gone from the
  call stack, the returned function still has access to those
  variables through the closure.

A closure has priority over the scope chain. If a variable
exists in both the closure and the global scope, the closure
variable is used.
*/

// Classic closure example
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// secureBooking() has returned. Its execution context is GONE.
// But booker still has access to passengerCount through closure!

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

// Use console.dir to see the [[Scopes]] with closure variables
console.dir(booker);

// Closure example: variable re-assignment
let greetFn;

const createGreeterGeo = function () {
  const language = 'Georgian';
  greetFn = function () {
    console.log(`Gamarjoba! Language: ${language}`);
  };
};

const createGreeterEng = function () {
  const language = 'English';
  greetFn = function () {
    console.log(`Hello! Language: ${language}`);
  };
};

createGreeterGeo();
greetFn(); // Gamarjoba! Language: Georgian
console.dir(greetFn);

// Re-assign — old closure is replaced with a new one
createGreeterEng();
greetFn(); // Hello! Language: English
console.dir(greetFn);

// Closure with timers — a very common real-world pattern
const boardPassengers = function (numPassengers, waitSeconds) {
  const perGroup = numPassengers / 3;

  setTimeout(function () {
    console.log(`Boarding all ${numPassengers} passengers`);
    console.log(`3 groups, each with ${perGroup} passengers`);
  }, waitSeconds * 1000);

  console.log(`Boarding will begin in ${waitSeconds} seconds`);
};

// The setTimeout callback executes AFTER boardPassengers has returned,
// but it still accesses numPassengers and perGroup through the closure.
boardPassengers(180, 3);


/*
═══════════════════════════════════════════════════════════════
10. SUMMARY — COMPARISON TABLE
═══════════════════════════════════════════════════════════════

┌────────────────────────┬─────────────────────────────────────────────┐
│ Concept                │ Key Point                                   │
├────────────────────────┼─────────────────────────────────────────────┤
│ Default Parameters     │ Provide fallback values; can use            │
│                        │ expressions referencing earlier params      │
├────────────────────────┼─────────────────────────────────────────────┤
│ Value vs Reference     │ Primitives are copied; objects share the    │
│                        │ same reference — mutating affects original  │
├────────────────────────┼─────────────────────────────────────────────┤
│ First-Class Functions  │ Language feature: functions ARE values      │
├────────────────────────┼─────────────────────────────────────────────┤
│ Higher-Order Functions │ Practice: receive or return functions       │
├────────────────────────┼─────────────────────────────────────────────┤
│ Callback Functions     │ Passed to HOFs; enable abstraction          │
│                        │ and code reuse                              │
├────────────────────────┼─────────────────────────────────────────────┤
│ Functions Returning    │ Enable currying and specialization;         │
│ Functions              │ rely on closures                            │
├────────────────────────┼─────────────────────────────────────────────┤
│ call()                 │ Calls fn with explicit this; args listed    │
├────────────────────────┼─────────────────────────────────────────────┤
│ apply()                │ Like call() but args as array               │
│                        │ (prefer call + spread in modern JS)         │
├────────────────────────┼─────────────────────────────────────────────┤
│ bind()                 │ Returns NEW function with bound this;       │
│                        │ supports partial application                │
├────────────────────────┼─────────────────────────────────────────────┤
│ IIFE                   │ Runs once immediately; creates private      │
│                        │ scope; modern alternative: block + let      │
├────────────────────────┼─────────────────────────────────────────────┤
│ Closures               │ Function retains access to parent scope     │
│                        │ variables even after parent has returned;   │
│                        │ happens automatically, not created manually │
└────────────────────────┴─────────────────────────────────────────────┘

Key relationships:
- First-class functions ENABLE higher-order functions
- Higher-order functions USE callback functions
- Functions returning functions CREATE closures
- bind() is an alternative to call()/apply() for permanent binding
- IIFE + closures = powerful data privacy pattern
- Closures make setTimeout callbacks, event listeners, and
  factory functions possible
*/
