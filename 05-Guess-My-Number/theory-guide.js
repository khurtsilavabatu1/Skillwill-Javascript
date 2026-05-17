////////////////////////////////////
// DOM and Guess My Number Game
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. WHAT IS THE DOM? (Document Object Model)
═══════════════════════════════════════════════════════════════

The DOM is a structured representation of an HTML document that
the browser creates when it loads a page. It allows JavaScript
to access, modify, and interact with the HTML content.

Think of the DOM as a tree of objects. Each HTML element becomes
a "node" in this tree, and JavaScript can read or change any node.

   document
      |
    <html>
    /    \
 <head>  <body>
   |      /    \
 <title> <h1>  <p>

The 'document' object is the entry point to the DOM. It is
automatically available in any browser JavaScript code.

IMPORTANT: The DOM is NOT part of the JavaScript language.
It is a Web API provided by the browser. JavaScript simply
uses this API to interact with the webpage.
*/

'use strict';


/*
═══════════════════════════════════════════════════════════════
2. SELECTING ELEMENTS WITH querySelector
═══════════════════════════════════════════════════════════════

To interact with an element on the page, we first need to
SELECT it. The most common method is document.querySelector().

It takes a CSS selector string and returns the FIRST matching
element.
*/

// Selecting by class name (with a dot, just like CSS)
document.querySelector('.message');
// Selects: <p class="message">Start guessing...</p>

document.querySelector('.score');
// Selects: <span class="score">20</span>

document.querySelector('.number');
// Selects: <div class="number">?</div>

// Selecting by element/tag name (no prefix)
document.querySelector('body');
// Selects: the <body> element

// Selecting by ID (with a hash, just like CSS)
// document.querySelector('#myId');

// The selector works exactly like CSS selectors:
// '.className'   -> class
// '#idName'      -> id
// 'tagName'      -> HTML tag
// '.parent .child' -> nested elements

// If no element matches, querySelector returns null
const noElement = document.querySelector('.nonexistent');
console.log(noElement); // null

// REMEMBER: querySelector returns only the FIRST match.
// Use querySelectorAll() to get ALL matching elements (returns a NodeList).


/*
═══════════════════════════════════════════════════════════════
3. READING AND CHANGING CONTENT
═══════════════════════════════════════════════════════════════

Once we select an element, we can read or change its content
using properties like textContent and value.
*/

// ---- textContent ----
// Used for most HTML elements (p, span, div, h1, etc.)

// READING content from the page
console.log(document.querySelector('.message').textContent);
// Output: "Start guessing..."

// CHANGING (setting) content on the page
document.querySelector('.message').textContent = 'Correct Number!';
// The text on the page changes immediately!

document.querySelector('.number').textContent = 13;
// The "?" box now shows 13

document.querySelector('.score').textContent = 10;
// The score display updates to 10

// ---- value ----
// Used specifically for INPUT elements (<input>, <textarea>, <select>)

// READING the value from an input field
console.log(document.querySelector('.guess').value);
// Returns whatever the user typed in the input

// SETTING the value of an input field
document.querySelector('.guess').value = 23;
// The input field now shows 23

// KEY DIFFERENCE:
// textContent -> for displaying text in regular elements (p, div, span)
// value -> for reading/setting input field values


/*
═══════════════════════════════════════════════════════════════
4. EVENT LISTENERS
═══════════════════════════════════════════════════════════════

An event is something that happens on the page (click, keypress,
mouse move, etc.). An event listener waits for an event and then
runs a function when that event occurs.

addEventListener(eventType, handlerFunction)
- eventType: a string like 'click', 'keydown', 'mouseover'
- handlerFunction: a function that runs when the event fires
  (also called a "callback function")
*/

// Basic structure of an event listener
document.querySelector('.check').addEventListener('click', function () {
  console.log('Button was clicked!');
});

// What happens step by step:
// 1. querySelector('.check') selects the "Check!" button
// 2. addEventListener('click', ...) attaches a listener for click events
// 3. When the button is clicked, the anonymous function runs
// 4. The function is called a "callback" because WE don't call it —
//    the browser calls it for us when the event happens

// Another example: the "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  console.log('Game reset!');
});

// You can also pass a named function as the handler:
const handleClick = function () {
  console.log('Check button clicked!');
};
document.querySelector('.check').addEventListener('click', handleClick);

// Common event types:
// 'click'     -> user clicks an element
// 'keydown'   -> user presses a key
// 'keyup'     -> user releases a key
// 'mouseover' -> mouse pointer enters an element
// 'submit'    -> form is submitted


/*
═══════════════════════════════════════════════════════════════
5. MANIPULATING CSS STYLES WITH JAVASCRIPT
═══════════════════════════════════════════════════════════════

We can change any CSS property of an element using JavaScript.
This sets INLINE styles on the element (highest priority in CSS).

Syntax: element.style.propertyName = 'value';

Note: CSS property names in JavaScript use camelCase instead
of kebab-case:
  CSS: background-color  ->  JS: backgroundColor
  CSS: font-size         ->  JS: fontSize
  CSS: border-radius     ->  JS: borderRadius
*/

// Changing background color of the whole page
document.querySelector('body').style.backgroundColor = '#60b347';
// The page turns green (when the player wins)

// Changing the width of the number display
document.querySelector('.number').style.width = '30rem';
// The "?" box gets wider (reveals the number)

// Resetting styles back to original
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

// IMPORTANT NOTES:
// 1. Values must be strings (with units for sizes): '30rem', '#60b347'
// 2. These are INLINE styles, so they override CSS file styles
// 3. Use camelCase for multi-word properties

// Reading computed styles (what's actually displayed):
// const bgColor = getComputedStyle(document.querySelector('body')).backgroundColor;
// console.log(bgColor); // "rgb(34, 34, 34)"


/*
═══════════════════════════════════════════════════════════════
6. RANDOM NUMBERS
═══════════════════════════════════════════════════════════════

The Math object provides mathematical functions. For the
Guess My Number game, we need Math.random() to generate a
secret number.
*/

// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g., 0.7253462891...

// To get a number in a range, multiply by the range:
console.log(Math.random() * 20); // 0 to 19.999...

// Math.trunc() removes the decimal part (does NOT round)
console.log(Math.trunc(4.7));    // 4
console.log(Math.trunc(0.999));  // 0

// GENERATING A RANDOM INTEGER FROM 1 TO 20:
// Step by step:
// 1. Math.random()           -> 0 to 0.999...
// 2. Math.random() * 20      -> 0 to 19.999...
// 3. Math.trunc(...)         -> 0 to 19 (integer)
// 4. ... + 1                 -> 1 to 20 (integer)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber); // Random number between 1 and 20

// General formula for random integer from MIN to MAX:
// Math.trunc(Math.random() * (MAX - MIN + 1)) + MIN

// Examples:
// 1 to 6 (dice):  Math.trunc(Math.random() * 6) + 1
// 1 to 100:       Math.trunc(Math.random() * 100) + 1
// 5 to 10:        Math.trunc(Math.random() * 6) + 5


/*
═══════════════════════════════════════════════════════════════
7. GAME STATE MANAGEMENT
═══════════════════════════════════════════════════════════════

In a game (or any interactive app), we need to keep track of
the current state — scores, secret values, whether the game
is won or lost, etc.

These state variables are defined OUTSIDE of event handlers
so they persist across multiple button clicks.
*/

// State variables for the Guess My Number game:
// These are declared at the top level of the script

// The secret number the player needs to guess
let gameSecretNumber = Math.trunc(Math.random() * 20) + 1;

// The player's current score (starts at 20, decreases with wrong guesses)
let score = 20;

// The highest score achieved across multiple games
let highscore = 0;

// WHY do we store state in variables (not just in the DOM)?
// Because the DOM is just the visual representation.
// Our code logic needs its own data to make decisions.
// Example: we need to compare the guess with secretNumber,
// and we can only do that if secretNumber is in a variable.

// Event handler uses these state variables
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Game logic uses the state variables
  if (guess === gameSecretNumber) {
    // Player wins!
    if (score > highscore) {
      highscore = score; // Update highscore state
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    score--; // Decrease score state
    document.querySelector('.score').textContent = score;
  }
});

// Resetting state when "Again!" is clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score
  gameSecretNumber = Math.trunc(Math.random() * 20) + 1; // New secret number

  // Update the DOM to reflect the reset state
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// KEY CONCEPT: State variables act as the "single source of truth"
// for your application. The DOM just displays what the state says.


/*
═══════════════════════════════════════════════════════════════
8. REFACTORING - THE DRY PRINCIPLE
═══════════════════════════════════════════════════════════════

DRY = Don't Repeat Yourself

When you find yourself writing the same code multiple times,
it's a sign that you should extract it into a function.

In the Guess My Number game, we update the message text in
many places. Instead of writing querySelector every time,
we create a helper function.
*/

// BEFORE refactoring (repetitive):
// document.querySelector('.message').textContent = 'No number!';
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.message').textContent = 'Too high!';
// document.querySelector('.message').textContent = 'Too low!';
// document.querySelector('.message').textContent = 'You lost the game!';
// document.querySelector('.message').textContent = 'Start guessing...';

// AFTER refactoring (DRY):
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Now we can use the helper function everywhere:
displayMessage('No number!');
displayMessage('Correct Number!');
displayMessage('Too high!');
displayMessage('Too low!');
displayMessage('You lost the game!');
displayMessage('Start guessing...');

// Benefits of refactoring:
// 1. Less code to write and maintain
// 2. If the selector changes (.message -> .msg), fix in ONE place
// 3. Code is easier to read and understand
// 4. Reduces the chance of typos and bugs

// Another refactoring example from the game:
// BEFORE (two separate blocks for too high and too low):
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost!';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

// AFTER (combined into one block with ternary):
// } else if (guess !== secretNumber) {
//   if (score > 1) {
//     displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage('You lost the game!');
//     document.querySelector('.score').textContent = 0;
//   }
// }

// The ternary operator (condition ? valueIfTrue : valueIfFalse)
// helps us avoid duplicating the entire block for high/low cases.


/*
═══════════════════════════════════════════════════════════════
SUMMARY - DOM AND GUESS MY NUMBER GAME
═══════════════════════════════════════════════════════════════

THE DOM:
- A tree representation of HTML created by the browser
- 'document' is the entry point object
- JavaScript uses Web APIs (not language features) to interact with it

SELECTING ELEMENTS:
- document.querySelector('.class') -> by class
- document.querySelector('#id')    -> by id
- document.querySelector('tag')    -> by tag name
- Returns the FIRST match, or null if no match

READING & CHANGING CONTENT:
- textContent: for regular elements (p, div, span, h1, etc.)
- value: for input fields (input, textarea, select)

EVENT LISTENERS:
- element.addEventListener('eventType', callbackFunction)
- The callback runs when the event occurs
- Common events: 'click', 'keydown', 'mouseover'

CSS MANIPULATION:
- element.style.propertyName = 'value'
- Use camelCase for CSS property names
- Values must be strings (with units)
- Sets inline styles (highest CSS priority)

RANDOM NUMBERS:
- Math.random(): 0 to 0.999...
- Math.trunc(): removes decimal part
- Range 1 to N: Math.trunc(Math.random() * N) + 1

GAME STATE:
- Define state variables outside event handlers
- State = the data your program needs to make decisions
- DOM displays what the state says

DRY PRINCIPLE:
- Don't Repeat Yourself
- Extract repeated code into reusable functions
- Makes code shorter, cleaner, and easier to maintain
*/
