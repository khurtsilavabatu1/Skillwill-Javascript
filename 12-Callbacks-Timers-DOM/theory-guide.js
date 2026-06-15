////////////////////////////////////
// Callbacks, Timers & DOM
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. CALLBACK FUNCTIONS
═══════════════════════════════════════════════════════════════

A callback is a function passed as an argument to another
function, to be called back (invoked) later.

In JavaScript, functions are "first-class citizens":
  - They can be stored in variables
  - They can be passed as arguments to other functions
  - They can be returned from other functions

A higher-order function is a function that:
  1) Accepts another function as an argument (a callback), or
  2) Returns a function as its result.
*/

'use strict';

// --- Functions as first-class citizens ---

// Storing a function in a variable
const greet = function (name) {
  return 'Hello, ' + name + '!';
};

// The variable holds the function itself — we can pass it around
console.log(typeof greet); // 'function'
console.log(greet('Nino')); // 'Hello, Nino!'

// --- Passing a function as an argument (callback) ---

const processUser = function (userName, callback) {
  console.log('Processing user...');
  callback(userName);
};

// 'greet' is passed as a callback — not called here, just referenced
processUser('Nino', function (name) {
  console.log('Welcome, ' + name + '!');
});
// 'Processing user...'
// 'Welcome, Nino!'

// --- Higher-order function example ---
// 'calculate' is a higher-order function because it accepts
// a function (operation) as its argument

const calculate = function (a, b, operation) {
  var result = operation(a, b);
  console.log('Result: ' + result);
  return result;
};

const add = function (x, y) {
  return x + y;
};

const multiply = function (x, y) {
  return x * y;
};

calculate(10, 5, add); // 'Result: 15'
calculate(10, 5, multiply); // 'Result: 50'

// --- Anonymous callbacks ---
// Instead of defining a named function first, we can pass
// an anonymous function directly as the argument

calculate(10, 3, function (x, y) {
  return x - y;
}); // 'Result: 7'

// --- Array method callbacks (forEach, map, filter) ---
// The most common use of callbacks in everyday JavaScript

const numbers = [1, 2, 3, 4, 5];

// forEach — calls the callback once for each element
numbers.forEach(function (num) {
  console.log('Number: ' + num);
});
// 'Number: 1'
// 'Number: 2'
// 'Number: 3'
// 'Number: 4'
// 'Number: 5'

// map — calls the callback on each element, returns a NEW array
// with the callback's return values
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// filter — calls the callback on each element, returns a NEW array
// containing only the elements for which the callback returned true
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log('Evens:', evens); // [2, 4]


/*
═══════════════════════════════════════════════════════════════
2. HIGHER-ORDER FUNCTIONS IN PRACTICE
═══════════════════════════════════════════════════════════════

Higher-order functions enable powerful patterns:
  - Transformation pipelines (chain operations)
  - Validation with callbacks
  - Custom iteration logic
*/

// --- Custom higher-order function ---

const applyToAll = function (arr, callback) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    results.push(callback(arr[i]));
  }
  return results;
};

var tripled = applyToAll([2, 4, 6], function (n) {
  return n * 3;
});
console.log('Tripled:', tripled); // [6, 12, 18]

// --- Transformation pipeline ---
// Pass multiple callbacks to transform a value step by step

var transformer = function (value, fn1, fn2) {
  var step1 = fn1(value);
  var step2 = fn2(step1);
  return step2;
};

var toUpperCase = function (str) {
  return str.toUpperCase();
};

var addExclamation = function (str) {
  return str + '!!!';
};

console.log(transformer('hello', toUpperCase, addExclamation));
// 'HELLO!!!'

console.log(transformer('goodbye', toUpperCase, addExclamation));
// 'GOODBYE!!!'

// --- Validation callbacks ---
// Higher-order functions can accept validation logic as callbacks

var processInput = function (input, validator, onSuccess, onError) {
  if (validator(input)) {
    onSuccess(input);
  } else {
    onError(input);
  }
};

var isNotEmpty = function (str) {
  return str.trim().length > 0;
};

processInput(
  'Giorgi',
  isNotEmpty,
  function (val) {
    console.log('Valid input: "' + val + '"');
  },
  function (val) {
    console.log('Invalid input: "' + val + '"');
  }
);
// 'Valid input: "Giorgi"'

processInput(
  '',
  isNotEmpty,
  function (val) {
    console.log('Valid input: "' + val + '"');
  },
  function (val) {
    console.log('Invalid input: "' + val + '"');
  }
);
// 'Invalid input: ""'

// --- Implementing forEach manually ---
// Understanding how forEach works under the hood

var myForEach = function (arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

myForEach(['a', 'b', 'c'], function (item, index) {
  console.log(index + ': ' + item);
});
// '0: a'
// '1: b'
// '2: c'


/*
═══════════════════════════════════════════════════════════════
3. setTimeout — ONE-TIME DELAY
═══════════════════════════════════════════════════════════════

setTimeout schedules a callback to run ONCE after a delay.

Syntax: setTimeout(callback, delayInMs, ...extraArgs)

Key points:
  - delay is in milliseconds (1000ms = 1 second)
  - Returns a numeric timer ID for cancellation
  - clearTimeout(timerId) cancels a pending timeout
  - setTimeout is ASYNCHRONOUS — it does NOT pause execution
  - The next line of code runs immediately, not after the delay
*/

// --- Basic setTimeout ---

var timeoutId = setTimeout(function () {
  console.log('This message appears after 2 seconds');
}, 2000);

// This line runs IMMEDIATELY, before the timeout fires!
console.log('This logs BEFORE the timeout message (async behavior)');
// Output order:
// 'This logs BEFORE the timeout message (async behavior)'
// ... 2 seconds later ...
// 'This message appears after 2 seconds'

// --- Passing extra arguments to the callback ---
// Arguments after the delay are forwarded to the callback function

setTimeout(
  function (greeting, name) {
    console.log(greeting + ', ' + name + '!');
  },
  1500,
  'Hello',
  'Nino'
);
// After 1.5 seconds: 'Hello, Nino!'

// --- clearTimeout — cancelling a pending timeout ---

var cancelableTimeout = setTimeout(function () {
  console.log('You will never see this message!');
}, 5000);

clearTimeout(cancelableTimeout);
console.log('Timeout was cancelled before it fired');
// 'Timeout was cancelled before it fired'
// (the callback never runs)

// --- setTimeout(fn, 0) and async behavior ---
// Even with 0ms delay, the callback runs AFTER the current code finishes.
// It goes to the task queue and waits for the call stack to clear.

console.log('1 - Before setTimeout(fn, 0)');

setTimeout(function () {
  console.log('3 - Inside setTimeout(fn, 0)');
}, 0);

console.log('2 - After setTimeout(fn, 0)');
// Output order: 1, 2, 3
// Even with 0 delay, the callback runs last!

// --- Sequential delayed messages ---
// Each setTimeout is independent — they all start counting from NOW

setTimeout(function () {
  console.log('Step 1 - after 1 second');
}, 1000);

setTimeout(function () {
  console.log('Step 2 - after 2 seconds');
}, 2000);

setTimeout(function () {
  console.log('Step 3 - after 3 seconds');
}, 3000);


/*
═══════════════════════════════════════════════════════════════
4. setInterval AND clearInterval
═══════════════════════════════════════════════════════════════

setInterval schedules a callback to run REPEATEDLY at a
fixed interval.

Syntax: setInterval(callback, intervalInMs)

Key differences from setTimeout:
  - setTimeout: runs the callback ONCE after the delay
  - setInterval: runs the callback REPEATEDLY every interval
  - Both return a numeric ID for cancellation

clearInterval(intervalId) stops a running interval.
*/

// --- Basic counter with setInterval ---

var counter = 0;
var intervalId = setInterval(function () {
  counter++;
  console.log('Interval tick #' + counter);

  // Stop after 5 ticks
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log('Interval stopped after 5 ticks');
  }
}, 1000);
// 'Interval tick #1'  (after 1s)
// 'Interval tick #2'  (after 2s)
// 'Interval tick #3'  (after 3s)
// 'Interval tick #4'  (after 4s)
// 'Interval tick #5'  (after 5s)
// 'Interval stopped after 5 ticks'

// --- Countdown timer pattern ---
// A common pattern: count down from N to 0, then stop

var startCountdown = function (seconds) {
  console.log('Countdown started: ' + seconds);

  var tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log('Time is up!');
      return;
    }
    console.log(seconds + ' seconds remaining...');
    seconds--;
  };

  // Call tick immediately so we don't wait 1 second for the first display
  tick();
  var timer = setInterval(tick, 1000);
  return timer;
};

startCountdown(5);
// 'Countdown started: 5'
// '5 seconds remaining...'   (immediately)
// '4 seconds remaining...'   (after 1s)
// '3 seconds remaining...'   (after 2s)
// '2 seconds remaining...'   (after 3s)
// '1 seconds remaining...'   (after 4s)
// 'Time is up!'              (after 5s)

// --- Console clock using setInterval ---
// Update every 5 seconds, stop after 20 seconds

var consoleClockId = setInterval(function () {
  console.log('Console clock: ' + new Date().toLocaleTimeString());
}, 5000);

// Stop the clock after 20 seconds
setTimeout(function () {
  clearInterval(consoleClockId);
  console.log('Console clock stopped');
}, 20000);


/*
═══════════════════════════════════════════════════════════════
5. DOM — CONCEPT AND TREE STRUCTURE
═══════════════════════════════════════════════════════════════

DOM (Document Object Model) is the browser's object-based
representation of an HTML document.

When the browser loads an HTML file:
  1) It parses the HTML
  2) It creates a DOM tree — a hierarchy of objects
  3) It gives JavaScript access to manipulate this tree

DOM tree structure:

  document
    └── html  (document.documentElement)
          ├── head  (document.head)
          │     ├── meta
          │     ├── title
          │     └── style
          └── body  (document.body)
                ├── header
                ├── div
                │     ├── h2
                │     ├── p
                │     └── button
                └── script

Every HTML element becomes a node in the DOM tree.
Node types:
  - Element node  — an HTML tag (<div>, <p>, <button>)
  - Text node     — the text content inside an element
  - Comment node  — an HTML comment (<!-- ... -->)
  - Document node — the document itself (the root)

IMPORTANT: DOM is NOT part of JavaScript!
DOM is a Web API provided by the browser.
That is why DOM code works in browsers but not in Node.js.
*/

// --- document object — the entry point to the DOM ---

console.log('Document:', document);
console.log('Document type:', typeof document); // 'object'

// --- Accessing top-level elements ---

// document.documentElement — the <html> element
console.log('HTML element:', document.documentElement);

// document.head — the <head> element
console.log('Head:', document.head);

// document.body — the <body> element
console.log('Body:', document.body);

// document.title — the page title (readable and writable)
console.log('Page title:', document.title);
// document.title = 'New Title';  // Changes the browser tab title


/*
═══════════════════════════════════════════════════════════════
6. document.getElementById()
═══════════════════════════════════════════════════════════════

getElementById(id) finds an element by its id attribute.
  - Returns one Element object, or null if not found
  - The id must be unique in the entire HTML document

Key properties of an element:
  .textContent  — the text inside the element (no HTML tags)
  .innerHTML    — the HTML content (including tags)
  .style.prop   — set inline CSS styles
  .classList    — manage CSS classes (add, remove, toggle, contains)
*/

// --- Reading text content ---

var demoText = document.getElementById('demo-text');
console.log('Demo text content:', demoText.textContent);

// --- Writing text content ---

var outputDisplay = document.getElementById('output-display');
outputDisplay.textContent = 'Text changed by JavaScript!';

// --- innerHTML — reading and writing HTML ---
// Unlike textContent, innerHTML parses HTML tags

outputDisplay.innerHTML =
  'This text is <strong>bold</strong> and <em>italic</em>';

// textContent vs innerHTML:
// textContent = 'This text is bold and italic' (plain text only)
// innerHTML   = 'This text is <strong>bold</strong>...' (preserves tags)

// --- Inline CSS with .style ---
// Property names use camelCase (not kebab-case like CSS)
// background-color → backgroundColor
// border-radius    → borderRadius
// font-size        → fontSize

var demoBox = document.getElementById('demo-box');
demoBox.style.backgroundColor = '#1565c0';
demoBox.style.borderRadius = '50%';
demoBox.style.color = 'white';

// --- classList — managing CSS classes ---

// .classList.add('name')      — adds a CSS class
// .classList.remove('name')   — removes a CSS class
// .classList.toggle('name')   — adds if absent, removes if present
// .classList.contains('name') — returns true/false

console.log('Has demo-box class:', demoBox.classList.contains('demo-box'));
// true

demoBox.classList.add('highlight');
console.log('Has highlight class:', demoBox.classList.contains('highlight'));
// true

demoBox.classList.toggle('highlight');
console.log('Has highlight after toggle:', demoBox.classList.contains('highlight'));
// false (toggle removed it)

// --- Showing and hiding elements ---

var statusBadge = document.getElementById('status-badge');
statusBadge.textContent = 'Status: Active';
statusBadge.style.backgroundColor = '#26a69a';
statusBadge.style.color = 'white';

// statusBadge.classList.add('hidden');    // Hides the element
// statusBadge.classList.remove('hidden'); // Shows the element


/*
═══════════════════════════════════════════════════════════════
7. querySelector AND querySelectorAll
═══════════════════════════════════════════════════════════════

querySelector(selector)    — returns the FIRST matching element,
                             or null if no match found.
querySelectorAll(selector) — returns ALL matching elements as
                             a NodeList.

These methods accept any valid CSS selector:
  '#id'             — by id
  '.class'          — by class
  'tag'             — by tag name
  'parent > child'  — direct children
  '[attribute]'     — by attribute
  'tag.class'       — tag with a specific class

querySelector vs getElementById:
  - querySelector is more flexible (any CSS selector)
  - getElementById is simpler and slightly faster for id lookups
*/

// --- querySelector with id selector ---
// Same result as getElementById, but uses CSS # syntax

var demoTextByQuery = document.querySelector('#demo-text');
console.log('querySelector #demo-text:', demoTextByQuery.textContent);

// --- querySelector with class selector ---
// Returns only the FIRST element matching the class

var firstListItem = document.querySelector('.list-item');
console.log('First list item:', firstListItem.textContent);

// --- querySelectorAll — selecting multiple elements ---

var allListItems = document.querySelectorAll('.list-item');
console.log('Total list items:', allListItems.length); // e.g. 5

// Iterating a NodeList with forEach
allListItems.forEach(function (item, index) {
  console.log('Item ' + index + ': ' + item.textContent);
});

// --- NodeList vs Array ---
// NodeList supports forEach, but NOT map, filter, or reduce.
// Use Array.from() to convert a NodeList into a real Array.

var itemTexts = Array.from(allListItems).map(function (item) {
  return item.textContent;
});
console.log('Item texts as array:', itemTexts);

var longItems = Array.from(allListItems).filter(function (item) {
  return item.textContent.length > 3;
});
console.log(
  'Items with 4+ chars:',
  longItems.map(function (el) {
    return el.textContent;
  })
);

// --- Practical selector examples ---

// By tag name
document.querySelectorAll('p'); // All <p> elements
document.querySelector('h2'); // First <h2>

// Direct child selector
document.querySelectorAll('ul > li'); // <li> that are direct children of <ul>
document.querySelector('div > p'); // First <p> directly inside a <div>

// Attribute selector
document.querySelector('[disabled]'); // First disabled element
document.querySelector('[type="text"]'); // First input with type="text"
document.querySelectorAll('[data-role="status"]'); // All data-role="status"

// Tag + class combination
document.querySelectorAll('button.demo-btn'); // All <button> with class "demo-btn"
document.querySelector('div.section-card'); // First <div> with class "section-card"

// Nested (descendant) selector
var sectionTitle = document.querySelector('.section-card h2');
console.log('First section title:', sectionTitle.textContent);

// All section titles
var allTitles = document.querySelectorAll('.section-card h2');
allTitles.forEach(function (title) {
  console.log('Section:', title.textContent);
});


/*
═══════════════════════════════════════════════════════════════
8. EVENT LISTENERS (CALLBACKS + DOM)
═══════════════════════════════════════════════════════════════

addEventListener connects a callback to a DOM event.

Syntax: element.addEventListener(eventType, callback)

When the event occurs, the browser automatically calls the
callback and passes an Event object (e) as the argument.

Event object properties:
  e.target — the element that triggered the event
  e.type   — the event type ('click', 'input', etc.)

Common event types:
  click      — element is clicked
  input      — text field value changes (fires on every keystroke)
  change     — value changes (fires on blur / when selection changes)
  keydown    — a key is pressed down
  keyup      — a key is released
  mouseover  — mouse pointer enters an element
  mouseout   — mouse pointer leaves an element

removeEventListener(eventType, callback)
  - Removes a previously added listener
  - IMPORTANT: you must pass the SAME function reference
  - Anonymous functions cannot be removed!
*/

// --- click event with anonymous callback ---

var btnAlert = document.getElementById('btn-alert');

btnAlert.addEventListener('click', function () {
  console.log('Alert button clicked!');
  outputDisplay.textContent = 'Alert button was clicked!';
});

// --- Named callback for later removal ---

var toggleBox = function () {
  demoBox.classList.toggle('highlight');
  console.log('Box toggled!');
};

var btnToggle = document.getElementById('btn-toggle');
btnToggle.addEventListener('click', toggleBox);

// --- Using the Event object ---
// The callback receives an Event object automatically

btnAlert.addEventListener('click', function (e) {
  console.log('Event type:', e.type); // 'click'
  console.log('Target element:', e.target); // the <button> element
  console.log('Target tag:', e.target.tagName); // 'BUTTON'
});

// --- input event — real-time text monitoring ---
// Fires every time the user types, deletes, or pastes

var textInput = document.getElementById('text-input');
var inputMirror = document.getElementById('input-mirror');

textInput.addEventListener('input', function (e) {
  inputMirror.textContent = e.target.value || 'Your text will appear here';
});

// --- mouseover and mouseout — hover effects with JavaScript ---

var hoverZone = document.getElementById('hover-zone');

hoverZone.addEventListener('mouseover', function () {
  hoverZone.style.backgroundColor = '#00897b';
  hoverZone.style.color = 'white';
  hoverZone.textContent = 'Mouse is over!';
});

hoverZone.addEventListener('mouseout', function () {
  hoverZone.style.backgroundColor = '#e0f2f1';
  hoverZone.style.color = '#263238';
  hoverZone.textContent = 'Hover over me!';
});

// --- removeEventListener — removing a listener ---
// Only works with NAMED functions, not anonymous ones

var oneTimeClick = function () {
  console.log('This handler runs only once, then removes itself!');
  btnAlert.removeEventListener('click', oneTimeClick);
};

btnAlert.addEventListener('click', oneTimeClick);
// After the first click, oneTimeClick removes itself.
// Subsequent clicks will NOT trigger it again.


/*
═══════════════════════════════════════════════════════════════
9. TIMERS + DOM — COMBINING CONCEPTS
═══════════════════════════════════════════════════════════════

When we combine timers, callbacks, and DOM manipulation, we
can build dynamic, interactive features:
  - Live clocks
  - Countdowns with start/stop/reset
  - Auto-resetting counters
  - Typewriter effects
*/

// --- 9.1 Live clock with setInterval + DOM update ---
// Update the clock element every second

var liveClock = document.getElementById('live-clock');

var updateClock = function () {
  liveClock.textContent = new Date().toLocaleTimeString();
};

updateClock(); // Show time immediately
setInterval(updateClock, 1000); // Then update every second

// --- 9.2 Countdown with start/stop/reset ---

var countdownDisplay = document.getElementById('countdown-display');
var btnStartCountdown = document.getElementById('btn-start-countdown');
var btnStopCountdown = document.getElementById('btn-stop-countdown');
var btnResetCountdown = document.getElementById('btn-reset-countdown');

var countdownSeconds = 10;
var countdownTimer = null;

var updateCountdownDisplay = function () {
  countdownDisplay.textContent = countdownSeconds;

  // Add warning style when time is running low
  if (countdownSeconds <= 3 && countdownSeconds > 0) {
    countdownDisplay.classList.add('warning');
  } else {
    countdownDisplay.classList.remove('warning');
  }
};

// Start button — begins the countdown
btnStartCountdown.addEventListener('click', function () {
  if (countdownTimer) return; // Prevent multiple intervals

  var tick = function () {
    if (countdownSeconds === 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      countdownDisplay.textContent = 'Time!';
      countdownDisplay.classList.add('warning');
      return;
    }
    countdownSeconds--;
    updateCountdownDisplay();
  };

  countdownTimer = setInterval(tick, 1000);
});

// Stop button — pauses the countdown
btnStopCountdown.addEventListener('click', function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
});

// Reset button — stops and resets to initial value
btnResetCountdown.addEventListener('click', function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  countdownSeconds = 10;
  updateCountdownDisplay();
});

// --- 9.3 Click counter with auto-reset (setTimeout) ---
// Count clicks, auto-reset to 0 after 3 seconds of inactivity

var btnClickCounter = document.getElementById('btn-click-counter');
var clickCountDisplay = document.getElementById('click-count');
var clickStatus = document.getElementById('click-status');

var clickCount = 0;
var resetTimerId = null;

btnClickCounter.addEventListener('click', function () {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  // Cancel the previous reset timer (if any)
  if (resetTimerId) {
    clearTimeout(resetTimerId);
  }

  clickStatus.textContent = 'Auto-reset in 3 seconds...';

  // Schedule a new reset
  resetTimerId = setTimeout(function () {
    clickCount = 0;
    clickCountDisplay.textContent = '0';
    clickStatus.textContent = 'Counter was reset!';
    resetTimerId = null;

    // Clear the status message after 2 more seconds
    setTimeout(function () {
      clickStatus.textContent = '';
    }, 2000);
  }, 3000);
});

// --- 9.4 Typewriter effect ---
// Display text one character at a time using setInterval

var typewriterOutput = document.getElementById('typewriter-output');
var btnTypewriter = document.getElementById('btn-typewriter');

var typewriterText =
  'JavaScript is the language of the web. It brings web pages to life!';
var typewriterIndex = 0;
var typewriterTimer = null;

btnTypewriter.addEventListener('click', function () {
  // Clear any previous animation
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
  }
  typewriterOutput.textContent = '';
  typewriterIndex = 0;

  typewriterTimer = setInterval(function () {
    // Stop when all characters have been typed
    if (typewriterIndex >= typewriterText.length) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
      return;
    }

    // Add the next character
    typewriterOutput.textContent += typewriterText[typewriterIndex];
    typewriterIndex++;
  }, 50);
});


/*
═══════════════════════════════════════════════════════════════
SUMMARY — CALLBACKS, TIMERS & DOM
═══════════════════════════════════════════════════════════════

CALLBACKS:
- A callback is a function passed as an argument to another function
- Functions are first-class citizens: can be stored in variables,
  passed as arguments, and returned from other functions
- A higher-order function accepts a function as an argument
  or returns a function
- Anonymous callbacks: function passed inline without a name
- Array method callbacks: forEach, map, filter all accept callbacks

HIGHER-ORDER FUNCTIONS IN PRACTICE:
- Custom higher-order functions: applyToAll, transformer, processInput
- Transformation pipelines: chain callbacks to transform values step by step
- Validation callbacks: separate validation logic from processing logic
- myForEach: implementing array iteration from scratch shows
  how callbacks work under the hood

setTimeout:
- setTimeout(callback, delay, ...args) — runs callback ONCE after delay
- delay is in milliseconds (1000 = 1 second)
- Returns a timer ID (number)
- clearTimeout(id) cancels a pending timeout
- setTimeout(fn, 0) still runs asynchronously (after the call stack clears)
- Sequential messages: multiple setTimeout calls all start counting from now

setInterval AND clearInterval:
- setInterval(callback, interval) — runs callback REPEATEDLY
- Returns an interval ID (number)
- clearInterval(id) stops a running interval
- Counter pattern: increment a counter, stop with clearInterval when done
- Countdown pattern: decrement a value, stop at 0

DOM — CONCEPT AND TREE STRUCTURE:
- DOM (Document Object Model): browser's object-based representation of HTML
- DOM tree: document → html → head/body → child elements
- DOM is a Web API, NOT part of JavaScript (works in browsers, not Node.js)
- Node types: Element, Text, Comment, Document
- document is the entry point to the DOM
- document.documentElement = <html>, document.head, document.body

document.getElementById():
- Finds an element by its unique id attribute
- Returns one Element or null
- .textContent — read/write plain text content
- .innerHTML — read/write HTML content (parses tags)
- .style.property — set inline CSS (camelCase: backgroundColor)
- .classList — add(), remove(), toggle(), contains()

querySelector AND querySelectorAll:
- querySelector(selector) — first match or null
- querySelectorAll(selector) — all matches as a NodeList
- CSS selectors: #id, .class, tag, parent > child, [attribute]
- NodeList supports forEach but NOT map/filter
- Array.from(nodeList) converts NodeList to a real Array

EVENT LISTENERS:
- element.addEventListener(eventType, callback)
- Event object: e.target (which element), e.type (which event)
- Common events: click, input, change, keydown, mouseover, mouseout
- Named callbacks can be removed with removeEventListener
- Anonymous callbacks CANNOT be removed

TIMERS + DOM:
- Live clock: setInterval + DOM textContent update every second
- Countdown: setInterval + clearInterval + start/stop/reset buttons
- Click counter with auto-reset: click event + setTimeout to reset
- Typewriter effect: setInterval to add one character at a time
*/
