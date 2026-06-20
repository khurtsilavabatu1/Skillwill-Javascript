'use strict';

////////////////////////////////////
// Functions
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Booking System
// (Default Parameters)

/*
Build a booking system function that uses default parameters
to handle flexible booking scenarios.

1. Create a function 'createBooking' that takes three parameters:
   - flightNum (required)
   - numPassengers (default: 1)
   - price (default: 199 * numPassengers)
2. The function should create a booking object with these three
   properties and push it to a 'bookings' array. Log the object.
3. Call createBooking with only 'LH123'
4. Call createBooking with 'LH123' and 3 passengers
5. Call createBooking with 'LH123', 5 passengers, and price 500
6. Call createBooking with 'LH123', undefined (to skip), and price 1000
   — numPassengers should fall back to its default value of 1
7. Log the bookings array at the end to verify all bookings

TEST DATA:
  Call 1: createBooking('LH123')
  Call 2: createBooking('LH123', 3)
  Call 3: createBooking('LH123', 5, 500)
  Call 4: createBooking('LH123', undefined, 1000)

HINT: Default parameters can use the values of earlier parameters
HINT: Passing undefined triggers the default — null does NOT
HINT: Default values are evaluated left to right

GOOD LUCK 😀
*/

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// // { flightNum: 'LH123', numPassengers: 1, price: 199 }

// createBooking('LH123', 3);
// // { flightNum: 'LH123', numPassengers: 3, price: 597 }

// createBooking('LH123', 5, 500);
// // { flightNum: 'LH123', numPassengers: 5, price: 500 }

// createBooking('LH123', undefined, 1000);
// // { flightNum: 'LH123', numPassengers: 1, price: 1000 }

// console.log('All bookings:', bookings);


////////////////////////////////////
// Practice Challenge #2 - Data Transformer
// (Higher-Order Functions & Callbacks)

/*
Create a data transformer that accepts a string and a callback
function, then applies the transformation.

1. Create a function 'transformer' that takes two arguments:
   - str (a string)
   - fn (a callback function)
   The function should:
   - Log the original string
   - Log the transformed string (result of calling fn(str))
   - Log the name of the callback function (fn.name)
2. Create a callback function 'toUpperFirst' that takes a string,
   splits it into words, uppercases the first word entirely, and
   joins them back. E.g., 'javascript is fun' → 'JAVASCRIPT is fun'
3. Create a callback function 'removeSpaces' that removes all spaces
   from the string. E.g., 'javascript is fun' → 'javascriptisfun'
4. Create a callback function 'countWords' that returns a string
   saying how many words are in the input.
   E.g., 'javascript is fun' → '3 words'
5. Call transformer with the test string and each callback
6. Try calling transformer with an inline anonymous function
   that reverses the string

TEST DATA: 'javascript is absolutely amazing'

HINT: str.split(' ') splits by spaces into an array of words
HINT: str.split('').reverse().join('') reverses a string
HINT: fn.name returns the name of a function
HINT: Functions are just values — you can pass them as arguments

GOOD LUCK 😀
*/

// const toUpperFirst = function (str) {
//   const words = str.split(' ');
//   words[0] = words[0].toUpperCase();
//   return words.join(' ');
// };

// const removeSpaces = function (str) {
//   return str.split(' ').join('');
// };

// const countWords = function (str) {
//   return `${str.split(' ').length} words`;
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
//   console.log('---');
// };

// transformer('javascript is absolutely amazing', toUpperFirst);
// // Original string: javascript is absolutely amazing
// // Transformed string: JAVASCRIPT is absolutely amazing
// // Transformed by: toUpperFirst

// transformer('javascript is absolutely amazing', removeSpaces);
// // Original string: javascript is absolutely amazing
// // Transformed string: javascriptisabsolutelyamazing
// // Transformed by: removeSpaces

// transformer('javascript is absolutely amazing', countWords);
// // Original string: javascript is absolutely amazing
// // Transformed string: 4 words
// // Transformed by: countWords

// transformer('javascript is absolutely amazing', function (str) {
//   return str.split('').reverse().join('');
// });
// // Transformed string: gnizama yletulosba si tpircsavaj


////////////////////////////////////
// Practice Challenge #3 - Greeting Generator
// (Functions Returning Functions)

/*
Create a greeting generator using functions that return functions.

1. Create a function 'makeGreeter' that takes a 'greeting' string
   and returns a NEW function. The returned function takes a 'name'
   parameter and logs '{greeting}, {name}!'
2. Use makeGreeter to create:
   - greeterHello with greeting 'Hello'
   - greeterHey with greeting 'Hey'
   - greeterGoodMorning with greeting 'Good morning'
3. Call each greeter with different names
4. Also try calling makeGreeter directly in one line:
   makeGreeter('Hi')('Jonas')
5. Rewrite makeGreeter as an arrow function version called
   makeGreeterArrow — the entire function should be one line
   using arrow syntax: const makeGreeterArrow = greeting => name => ...
6. Test that makeGreeterArrow works identically to makeGreeter

TEST DATA:
  greeterHello('Jonas'), greeterHello('Sarah')
  greeterHey('Steven'), greeterHey('Anna')
  greeterGoodMorning('Peter')

HINT: A function can return another function (closure)
HINT: The returned function "remembers" the greeting variable
HINT: Arrow function version: greeting => name => console.log(...)
HINT: This pattern is essential for understanding closures

GOOD LUCK 😀
*/

// const makeGreeter = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// };

// const greeterHello = makeGreeter('Hello');
// const greeterHey = makeGreeter('Hey');
// const greeterGoodMorning = makeGreeter('Good morning');

// greeterHello('Jonas');    // Hello, Jonas!
// greeterHello('Sarah');    // Hello, Sarah!
// greeterHey('Steven');     // Hey, Steven!
// greeterHey('Anna');       // Hey, Anna!
// greeterGoodMorning('Peter'); // Good morning, Peter!

// // Calling directly in one line
// makeGreeter('Hi')('Jonas'); // Hi, Jonas!

// // Arrow function version
// const makeGreeterArrow = greeting => name =>
//   console.log(`${greeting}, ${name}!`);

// makeGreeterArrow('Welcome')('Jonas');  // Welcome, Jonas!
// makeGreeterArrow('Welcome')('Sarah');  // Welcome, Sarah!


////////////////////////////////////
// Practice Challenge #4 - Airline Booking
// (call, apply, bind)

/*
Create an airline booking system that demonstrates the use of
call, apply, and bind to control the 'this' keyword.

1. Create an object 'georgianAirways' with:
   - airline: 'Georgian Airways'
   - iataCode: 'A9'
   - bookings: [] (empty array)
   - book: a method that takes flightNum and passengerName, logs
     a message like 'Giorgi booked a seat on Georgian Airways flight A9234',
     and pushes { flight: `${this.iataCode}${flightNum}`, name } to bookings
2. Call the book method normally on georgianAirways:
   book(234, 'Giorgi'), book(635, 'Nino')
3. Create another airline object 'flyTbilisi' with:
   - airline: 'FlyTbilisi'
   - iataCode: 'FT'
   - bookings: []
   (no book method!)
4. Store the book method in a variable: const book = georgianAirways.book
5. Use call to book on flyTbilisi: book.call(flyTbilisi, 23, 'Dato')
6. Use call to book on georgianAirways: book.call(georgianAirways, 777, 'Ana')
7. Use apply to book on flyTbilisi with an array: book.apply(flyTbilisi, [101, 'Luka'])
8. Use bind to create a permanent booking function for flyTbilisi:
   const bookFT = book.bind(flyTbilisi)
   Call bookFT(555, 'Nino')
9. Create a partially applied function with bind:
   const bookA9234 = book.bind(georgianAirways, 234)
   Call bookA9234('Irakli') — only needs the name!
10. Log both airlines' bookings arrays

TEST DATA: See step numbers above for specific flight/name combinations

HINT: Extracting a method loses the 'this' context
HINT: call(thisArg, arg1, arg2) — arguments listed individually
HINT: apply(thisArg, [arg1, arg2]) — arguments in an array
HINT: bind returns a NEW function with 'this' permanently set
HINT: bind can also pre-set arguments (partial application)

GOOD LUCK 😀
*/

// const georgianAirways = {
//   airline: 'Georgian Airways',
//   iataCode: 'A9',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// georgianAirways.book(234, 'Giorgi');
// georgianAirways.book(635, 'Nino');

// const flyTbilisi = {
//   airline: 'FlyTbilisi',
//   iataCode: 'FT',
//   bookings: [],
// };

// const book = georgianAirways.book;

// // Using call
// book.call(flyTbilisi, 23, 'Dato');
// book.call(georgianAirways, 777, 'Ana');

// // Using apply
// book.apply(flyTbilisi, [101, 'Luka']);

// // Using bind
// const bookFT = book.bind(flyTbilisi);
// bookFT(555, 'Nino');

// // Partial application with bind
// const bookA9234 = book.bind(georgianAirways, 234);
// bookA9234('Irakli');
// bookA9234('Mariam');

// console.log('Georgian Airways bookings:', georgianAirways.bookings);
// console.log('FlyTbilisi bookings:', flyTbilisi.bookings);


////////////////////////////////////
// Practice Challenge #5 - Tax Calculator
// (bind & Partial Application)

/*
Create a tax calculation system using bind for partial application,
then solve it alternatively with functions returning functions.

1. Create a function 'addTax' that takes a rate and a value,
   and returns value + value * rate.
   Example: addTax(0.1, 200) → 220
2. Use bind to create a partially applied function 'addVAT' with
   rate pre-set to 0.2 (20% VAT). The first argument of bind is
   null (no 'this' needed), and the second pre-sets the rate.
3. Use bind to create 'addServiceTax' with rate 0.1 (10%)
4. Use bind to create 'addLuxuryTax' with rate 0.35 (35%)
5. Test all tax calculators with values: 100, 200, 500
6. Now solve the same problem using a function returning a function:
   Create 'createTaxCalculator' that takes a rate and returns
   a function that takes a value and returns value + value * rate.
7. Create addVAT2, addServiceTax2, addLuxuryTax2 using createTaxCalculator
8. Verify they produce the same results

TEST DATA:
  addVAT(100)        → 120
  addVAT(200)        → 240
  addServiceTax(500) → 550
  addLuxuryTax(100)  → 135

HINT: bind(null, presetArg) — null because we don't need 'this'
HINT: bind pre-sets arguments from left to right
HINT: The closure approach is often cleaner than bind for this use case
HINT: Both approaches achieve the same result — partial application

GOOD LUCK 😀
*/

// // Approach 1: Using bind for partial application
// const addTax = function (rate, value) {
//   return value + value * rate;
// };

// console.log(addTax(0.1, 200)); // 220

// const addVAT = addTax.bind(null, 0.2);
// const addServiceTax = addTax.bind(null, 0.1);
// const addLuxuryTax = addTax.bind(null, 0.35);

// console.log('--- bind approach ---');
// console.log('VAT on 100:', addVAT(100));           // 120
// console.log('VAT on 200:', addVAT(200));           // 240
// console.log('Service tax on 500:', addServiceTax(500)); // 550
// console.log('Luxury tax on 100:', addLuxuryTax(100));   // 135

// // Approach 2: Functions returning functions
// const createTaxCalculator = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = createTaxCalculator(0.2);
// const addServiceTax2 = createTaxCalculator(0.1);
// const addLuxuryTax2 = createTaxCalculator(0.35);

// console.log('--- closure approach ---');
// console.log('VAT on 100:', addVAT2(100));             // 120
// console.log('VAT on 200:', addVAT2(200));             // 240
// console.log('Service tax on 500:', addServiceTax2(500));   // 550
// console.log('Luxury tax on 100:', addLuxuryTax2(100));     // 135


////////////////////////////////////
// Practice Challenge #6 - Counter Factory
// (IIFE & Closures)

/*
Use an IIFE (Immediately Invoked Function Expression) to create
a private counter that cannot be accessed from outside.

1. Create an IIFE that:
   - Declares a private variable 'count' initialized to 0
   - Returns an object with three methods:
     a) increment: increases count by 1 and logs the new count
     b) decrement: decreases count by 1 and logs the new count
     c) getCount: returns the current count value
2. Store the returned object in a variable 'counter'
3. Call counter.increment() three times
4. Call counter.decrement() once
5. Log counter.getCount() — should be 2
6. Try to access 'count' directly from outside — it should be
   impossible! The variable is private thanks to the IIFE closure.
7. Create a second counter (counter2) using another IIFE.
   Demonstrate that counter and counter2 maintain separate counts.

TEST DATA:
  counter.increment() x3 → count = 3
  counter.decrement() x1 → count = 2
  counter.getCount()      → 2
  counter2 should start at 0 independently

HINT: (function() { ... })() — this is an IIFE
HINT: Variables inside the IIFE are not accessible outside
HINT: The returned methods form a closure over 'count'
HINT: Each IIFE creates its own scope — separate closures

GOOD LUCK 😀
*/

// const counter = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(`Count: ${count}`);
//     },
//     decrement() {
//       count--;
//       console.log(`Count: ${count}`);
//     },
//     getCount() {
//       return count;
//     },
//   };
// })();

// counter.increment(); // Count: 1
// counter.increment(); // Count: 2
// counter.increment(); // Count: 3
// counter.decrement(); // Count: 2
// console.log('Current count:', counter.getCount()); // 2

// // Trying to access count directly — impossible!
// // console.log(count); // ReferenceError: count is not defined

// // Second independent counter
// const counter2 = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(`Counter2 count: ${count}`);
//     },
//     decrement() {
//       count--;
//       console.log(`Counter2 count: ${count}`);
//     },
//     getCount() {
//       return count;
//     },
//   };
// })();

// counter2.increment(); // Counter2 count: 1
// counter2.increment(); // Counter2 count: 2
// console.log('Counter1:', counter.getCount()); // 2 (unchanged)
// console.log('Counter2:', counter2.getCount()); // 2 (independent)


////////////////////////////////////
// Practice Challenge #7 - Secure Password Manager
// (Closures)

/*
Create a password manager that uses closures to store passwords
privately — they should never be directly accessible from outside.

1. Create a function 'createPasswordManager' that:
   - Declares a private object 'passwords' (empty: {})
   - Returns an object with four methods:
     a) addPassword(site, password): stores the password for the site.
        Log 'Password added for {site}'. If the site already exists,
        log 'Password updated for {site}'.
     b) getPassword(site): returns the password for the given site.
        If not found, return 'No password found for {site}'.
     c) removePassword(site): deletes the password for the site.
        Log 'Password removed for {site}'. If not found,
        log 'No password found for {site}'.
     d) listSites(): returns an array of all stored site names.
2. Create a password manager instance: const myPasswords = createPasswordManager()
3. Add passwords for: 'gmail' ('abc123'), 'github' ('securePass!'),
   'facebook' ('myFBpass')
4. Retrieve and log the password for 'gmail'
5. List all sites and log them
6. Remove the password for 'facebook'
7. List all sites again — 'facebook' should be gone
8. Try to access the 'passwords' object directly from outside —
   it should be impossible!
9. Create a second manager (workPasswords) and demonstrate that
   it maintains its own separate password store.

TEST DATA:
  addPassword('gmail', 'abc123')
  addPassword('github', 'securePass!')
  addPassword('facebook', 'myFBpass')
  getPassword('gmail')     → 'abc123'
  getPassword('unknown')   → 'No password found for unknown'
  listSites()              → ['gmail', 'github', 'facebook']

HINT: The passwords object is private — only the returned methods can access it
HINT: Use 'delete obj[key]' to remove a property from an object
HINT: Object.keys(obj) returns an array of the object's keys
HINT: Check if a site exists with: site in passwords or passwords[site]
HINT: This is the Module Pattern — closures for data privacy

GOOD LUCK 😀
*/

// const createPasswordManager = function () {
//   const passwords = {};

//   return {
//     addPassword(site, password) {
//       if (passwords[site]) {
//         console.log(`Password updated for ${site}`);
//       } else {
//         console.log(`Password added for ${site}`);
//       }
//       passwords[site] = password;
//     },

//     getPassword(site) {
//       if (passwords[site]) {
//         return passwords[site];
//       }
//       return `No password found for ${site}`;
//     },

//     removePassword(site) {
//       if (passwords[site]) {
//         delete passwords[site];
//         console.log(`Password removed for ${site}`);
//       } else {
//         console.log(`No password found for ${site}`);
//       }
//     },

//     listSites() {
//       return Object.keys(passwords);
//     },
//   };
// };

// const myPasswords = createPasswordManager();

// myPasswords.addPassword('gmail', 'abc123');
// // Password added for gmail
// myPasswords.addPassword('github', 'securePass!');
// // Password added for github
// myPasswords.addPassword('facebook', 'myFBpass');
// // Password added for facebook

// console.log('Gmail password:', myPasswords.getPassword('gmail'));
// // abc123
// console.log('Unknown:', myPasswords.getPassword('unknown'));
// // No password found for unknown

// console.log('All sites:', myPasswords.listSites());
// // ['gmail', 'github', 'facebook']

// myPasswords.removePassword('facebook');
// // Password removed for facebook

// console.log('After removal:', myPasswords.listSites());
// // ['gmail', 'github']

// // Trying to access passwords directly — impossible!
// // console.log(passwords); // ReferenceError

// // Second independent manager
// const workPasswords = createPasswordManager();
// workPasswords.addPassword('slack', 'workPass1');
// workPasswords.addPassword('jira', 'workPass2');

// console.log('Work sites:', workPasswords.listSites());
// // ['slack', 'jira']
// console.log('Personal sites:', myPasswords.listSites());
// // ['gmail', 'github'] — separate and independent
