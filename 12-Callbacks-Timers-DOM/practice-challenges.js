'use strict';

////////////////////////////////////
// Callbacks, Timers & DOM
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Array Processor
// (Callbacks)

/*
Build a mini data processing library using callbacks to transform,
filter, and reduce arrays.

1. Create a function 'processArray' that takes an array and a callback,
   applies the callback to each element, and returns a new array with
   the results
2. Create a function 'filterArray' that takes an array and a predicate
   callback, returns a new array containing only the elements where
   the predicate returns true
3. Create a function 'reduceArray' that takes an array, a callback
   with two parameters (accumulator, current), and an initialValue.
   It should iterate through the array, passing the accumulator and
   each element to the callback, and return a single value
4. Create these callback functions:
   - 'double': takes a number, returns n * 2
   - 'isPositive': takes a number, returns true if n > 0
   - 'sumReducer': takes (acc, curr), returns acc + curr
5. Demonstrate all functions with the test data:
   - processArray with double
   - filterArray with isPositive
   - reduceArray with sumReducer (initialValue: 0)
   - Chain them: filter positives, then double them, then sum
6. BONUS: Create a function 'compose' that takes two functions (f, g)
   and returns a new function that applies them right to left:
   compose(f, g)(x) => f(g(x))

TEST DATA: [3, -1, 4, -5, 2, -3, 6]

HINT: processArray is similar to Array.prototype.map
HINT: filterArray is similar to Array.prototype.filter
HINT: reduceArray is similar to Array.prototype.reduce
HINT: compose(double, isPositive) would not make sense — compose functions
      that have compatible input/output types

GOOD LUCK 😀
*/

// const processArray = function (arr, callback) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// const filterArray = function (arr, predicate) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (predicate(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// const reduceArray = function (arr, callback, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i]);
//   }
//   return accumulator;
// };

// // Callback functions
// const double = function (n) {
//   return n * 2;
// };

// const isPositive = function (n) {
//   return n > 0;
// };

// const sumReducer = function (acc, curr) {
//   return acc + curr;
// };

// // Demonstration
// const testData = [3, -1, 4, -5, 2, -3, 6];
// console.log('--- Original Data ---');
// console.log(testData);

// const doubled = processArray(testData, double);
// console.log('\n--- processArray with double ---');
// console.log(doubled); // [6, -2, 8, -10, 4, -6, 12]

// const positives = filterArray(testData, isPositive);
// console.log('\n--- filterArray with isPositive ---');
// console.log(positives); // [3, 4, 2, 6]

// const sum = reduceArray(testData, sumReducer, 0);
// console.log('\n--- reduceArray with sumReducer ---');
// console.log(sum); // 6

// // Chained: filter positives, double them, then sum
// const chained = reduceArray(
//   processArray(filterArray(testData, isPositive), double),
//   sumReducer,
//   0
// );
// console.log('\n--- Chained: filter → double → sum ---');
// console.log(chained); // 30

// // BONUS: compose
// const compose = function (f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// };

// const doubleThenAddTen = compose(
//   function (n) { return n + 10; },
//   double
// );
// console.log('\n--- BONUS: compose(addTen, double)(3) ---');
// console.log(doubleThenAddTen(3)); // 16 (double(3)=6, then 6+10=16)


////////////////////////////////////
// Practice Challenge #2 - Delayed Logger
// (setTimeout)

/*
Build a messaging system with delayed notifications using setTimeout.

1. Create a function 'delayedLog' that takes a message and a delay (ms),
   logs the message after the delay using setTimeout, and returns the
   timer ID
2. Create a function 'cancelableDelay' that takes a message and a delay,
   and returns an object with:
   - timerId: the timer ID from setTimeout
   - cancel(): a method that calls clearTimeout to cancel the delay
3. Create a function 'sequentialMessages' that takes an array of messages
   and a gap (ms). It should log each message one after another with the
   given gap between them. Use setTimeout with increasing delays
   (first message at gap*1, second at gap*2, etc.)
4. Create a function 'delayedCallback' that takes a callback, an args
   array, and a delay (ms). It calls the callback with the args after
   the delay using setTimeout
5. Demonstrate all functions:
   - delayedLog with a 1000ms delay
   - cancelableDelay: create one and cancel it before it fires
   - sequentialMessages with the test data
   - delayedCallback with a function that sums two numbers
6. BONUS: Create a function 'debounce' that takes a function and a delay,
   and returns a new function that only executes after the specified delay
   has passed since the last call. If called again before the delay,
   the previous timer resets

TEST DATA: Messages: ['Hello!', 'How are you?', 'Goodbye!'], Gap: 1500ms

HINT: setTimeout returns a numeric timer ID
HINT: clearTimeout(timerId) cancels a pending setTimeout
HINT: For sequentialMessages, the i-th message fires at delay = gap * (i + 1)
HINT: For debounce, store the timer ID in a closure variable

GOOD LUCK 😀
*/

// const delayedLog = function (message, delay) {
//   const timerId = setTimeout(function () {
//     console.log(message);
//   }, delay);
//   return timerId;
// };

// const cancelableDelay = function (message, delay) {
//   const timerId = setTimeout(function () {
//     console.log(message);
//   }, delay);
//   return {
//     timerId: timerId,
//     cancel: function () {
//       clearTimeout(timerId);
//       console.log(`Canceled message: "${message}"`);
//     },
//   };
// };

// const sequentialMessages = function (messages, gap) {
//   for (let i = 0; i < messages.length; i++) {
//     setTimeout(function () {
//       console.log(`Message ${i + 1}: ${messages[i]}`);
//     }, gap * (i + 1));
//   }
// };

// const delayedCallback = function (callback, args, delay) {
//   setTimeout(function () {
//     const result = callback.apply(null, args);
//     console.log('Delayed callback result:', result);
//   }, delay);
// };

// // Demonstration
// console.log('--- delayedLog ---');
// const timer1 = delayedLog('This appears after 1 second!', 1000);
// console.log('Timer ID:', timer1);

// console.log('\n--- cancelableDelay ---');
// const cancelable = cancelableDelay('You will never see this!', 3000);
// console.log('Created cancelable timer:', cancelable.timerId);
// cancelable.cancel(); // Cancel it immediately

// console.log('\n--- sequentialMessages ---');
// sequentialMessages(['Hello!', 'How are you?', 'Goodbye!'], 1500);

// console.log('\n--- delayedCallback ---');
// const addNumbers = function (a, b) {
//   return a + b;
// };
// delayedCallback(addNumbers, [5, 3], 2000);

// // BONUS: debounce
// const debounce = function (fn, delay) {
//   let timerId = null;
//   return function () {
//     const args = arguments;
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     timerId = setTimeout(function () {
//       fn.apply(null, args);
//       timerId = null;
//     }, delay);
//   };
// };

// const debouncedLog = debounce(function (msg) {
//   console.log('Debounced:', msg);
// }, 1000);

// console.log('\n--- BONUS: debounce ---');
// debouncedLog('first');  // This will be canceled
// debouncedLog('second'); // This will be canceled
// debouncedLog('third');  // Only this one fires after 1 second


////////////////////////////////////
// Practice Challenge #3 - Repeating Counter
// (setInterval)

/*
Build a configurable counter system using setInterval for repeated
execution at fixed time intervals.

1. Create a function 'createCounter' that takes start, end, step, and
   intervalMs. It should:
   - Start counting from 'start', incrementing by 'step' at each interval
   - Log each value as it counts
   - When the value reaches or exceeds 'end', stop the interval and
     log "Counter finished!"
   - Return the interval ID
2. Create a function 'countdown' that takes a number of seconds and a
   callback. It should:
   - Log each second as it counts down from 'seconds' to 0
   - When it reaches 0, call the callback and log "Done!"
   - Return the interval ID
3. Create a function 'repeater' that takes a callback and intervalMs.
   It should:
   - Call the callback repeatedly at the given interval
   - Return an object with a stop() method that clears the interval
4. Demonstrate all functions:
   - createCounter: count from 1 to 10 by 2, every 800ms
   - countdown: from 5 seconds, callback logs "Countdown complete!"
   - repeater: log the current time every 2000ms, stop after 6 seconds
     using setTimeout to call stop()

TEST DATA: Counter: start=1, end=10, step=2, interval=800ms
           Countdown: 5 seconds

HINT: setInterval returns an interval ID that can be passed to clearInterval
HINT: Inside createCounter, use a variable to track the current value
HINT: For the repeater demo, use setTimeout to call stop() after 6 seconds
HINT: new Date().toLocaleTimeString() gives a readable current time

GOOD LUCK 😀
*/

// const createCounter = function (start, end, step, intervalMs) {
//   let current = start;
//   console.log(`Counter started: ${start} → ${end} (step: ${step})`);
//   console.log(`Value: ${current}`);
//
//   const intervalId = setInterval(function () {
//     current += step;
//     if (current >= end) {
//       console.log(`Value: ${end}`);
//       console.log('Counter finished!');
//       clearInterval(intervalId);
//     } else {
//       console.log(`Value: ${current}`);
//     }
//   }, intervalMs);
//
//   return intervalId;
// };

// const countdown = function (seconds, callback) {
//   let remaining = seconds;
//   console.log(`Countdown: ${remaining}`);
//
//   const intervalId = setInterval(function () {
//     remaining--;
//     if (remaining <= 0) {
//       console.log('Countdown: 0');
//       console.log('Done!');
//       clearInterval(intervalId);
//       callback();
//     } else {
//       console.log(`Countdown: ${remaining}`);
//     }
//   }, 1000);
//
//   return intervalId;
// };

// const repeater = function (callback, intervalMs) {
//   const intervalId = setInterval(callback, intervalMs);
//   return {
//     stop: function () {
//       clearInterval(intervalId);
//       console.log('Repeater stopped.');
//     },
//   };
// };

// // Demonstration
// console.log('--- createCounter: 1 to 10 by 2 ---');
// createCounter(1, 10, 2, 800);

// // Countdown (starts after a delay so it doesn't overlap)
// setTimeout(function () {
//   console.log('\n--- countdown: 5 seconds ---');
//   countdown(5, function () {
//     console.log('Countdown complete!');
//   });
// }, 5000);

// // Repeater (starts after a delay so it doesn't overlap)
// setTimeout(function () {
//   console.log('\n--- repeater: current time every 2s ---');
//   const timeRepeater = repeater(function () {
//     console.log('Current time: ' + new Date().toLocaleTimeString());
//   }, 2000);
//
//   // Stop after 6 seconds
//   setTimeout(function () {
//     timeRepeater.stop();
//   }, 6000);
// }, 11000);


////////////////////////////////////
// Practice Challenge #4 - DOM Explorer
// (DOM Selection & Manipulation)

/*
NOTE: This challenge requires running in the browser with an HTML page.

Explore and manipulate the DOM using various selection and modification
methods.

1. Use document.getElementById to get an element by its ID and log
   its textContent
2. Use document.querySelector with a CSS class selector (e.g. '.item')
   to find the first matching element and change its style:
   - Set backgroundColor to '#e0f7fa'
   - Set color to '#006064'
3. Use document.querySelectorAll to get all elements with a certain
   class (e.g. '.item'). Log how many elements were found. Iterate
   through them with forEach and log each element's textContent
4. Convert the NodeList from querySelectorAll to an Array using
   Array.from(). Then use filter() to keep only elements whose
   textContent length is greater than 10. Log the filtered results
5. Use classList on an element:
   - Toggle a class (e.g. 'highlight') using classList.toggle()
   - Check if the class was added using classList.contains()
   - Log the result: "Class 'highlight' is present: true/false"
6. Change an element's innerHTML to include formatted HTML content,
   for example: '<strong>Updated!</strong> <em>This was changed via JS</em>'

TEST DATA: Use elements from the page's HTML

HINT: getElementById does NOT use a '#' prefix — just the ID string
HINT: querySelector uses CSS selector syntax: '.class', '#id', 'tag'
HINT: querySelectorAll returns a NodeList, not an Array
HINT: Array.from(nodeList) converts a NodeList to a real Array
HINT: classList.toggle returns a boolean indicating the final state

GOOD LUCK 😀
*/

// // 1. getElementById
// const heading = document.getElementById('main-heading');
// console.log('--- getElementById ---');
// console.log('Heading text:', heading.textContent);

// // 2. querySelector - first matching element
// const firstItem = document.querySelector('.item');
// console.log('\n--- querySelector ---');
// console.log('First item:', firstItem.textContent);
// firstItem.style.backgroundColor = '#e0f7fa';
// firstItem.style.color = '#006064';
// console.log('Styled the first .item element');

// // 3. querySelectorAll - all matching elements
// const allItems = document.querySelectorAll('.item');
// console.log('\n--- querySelectorAll ---');
// console.log(`Found ${allItems.length} elements with class "item"`);
// allItems.forEach(function (item, index) {
//   console.log(`  Item ${index + 1}: ${item.textContent}`);
// });

// // 4. Convert NodeList to Array and filter
// const itemsArray = Array.from(allItems);
// const longItems = itemsArray.filter(function (item) {
//   return item.textContent.length > 10;
// });
// console.log('\n--- Array.from + filter ---');
// console.log(`Items with textContent longer than 10 chars: ${longItems.length}`);
// longItems.forEach(function (item) {
//   console.log(`  "${item.textContent}" (length: ${item.textContent.length})`);
// });

// // 5. classList toggle and contains
// console.log('\n--- classList ---');
// const isAdded = heading.classList.toggle('highlight');
// const hasClass = heading.classList.contains('highlight');
// console.log(`Class 'highlight' is present: ${hasClass}`);

// // 6. innerHTML
// const infoBox = document.getElementById('info-box');
// if (infoBox) {
//   infoBox.innerHTML =
//     '<strong>Updated!</strong> <em>This was changed via JS</em>';
//   console.log('\n--- innerHTML ---');
//   console.log('Updated info-box innerHTML');
// }


////////////////////////////////////
// Practice Challenge #5 - Interactive Timer
// (Callbacks + Timers + DOM)

/*
NOTE: This challenge requires running in the browser with an HTML page.

Build an interactive stopwatch with start, stop, and reset controls
that combines callbacks, timers, and DOM manipulation.

1. Select the display element, start button, stop button, and reset
   button using document.getElementById. Use IDs: 'display', 'startBtn',
   'stopBtn', 'resetBtn'
2. Create variables:
   - elapsedSeconds: starts at 0 (tracks total seconds)
   - timerInterval: starts as null (stores the interval ID)
3. Create a function 'formatTime' that takes total seconds and returns
   a string in "MM:SS" format. Use Math.floor for minutes (seconds / 60)
   and remainder for seconds (seconds % 60). Pad with leading zeros
   using String(n).padStart(2, '0')
4. Create a function 'updateDisplay' that calls formatTime with
   elapsedSeconds and sets the display element's textContent to the result
5. Add a click event listener on the start button:
   - If timerInterval is null (not already running), start a setInterval
     that increments elapsedSeconds by 1 every 1000ms and calls updateDisplay
   - Store the interval ID in timerInterval
6. Add a click event listener on the stop button:
   - Call clearInterval(timerInterval) to stop the timer
   - Set timerInterval to null
7. Add a click event listener on the reset button:
   - Stop the timer (clearInterval + set to null)
   - Reset elapsedSeconds to 0
   - Call updateDisplay to show "00:00"
8. BONUS: Add a "Lap" button (ID: 'lapBtn') that, when clicked, creates
   a new <li> element with the current formatted time and appends it
   to a <ul> element (ID: 'lapList')

TEST DATA: Run the stopwatch, click start/stop/reset, verify the
           time display updates correctly

HINT: setInterval returns an ID — store it so you can clearInterval later
HINT: Check if timerInterval is null before starting to prevent multiple intervals
HINT: String(5).padStart(2, '0') returns '05'
HINT: document.createElement('li') creates a new list item element
HINT: parentElement.appendChild(childElement) adds an element to the DOM

GOOD LUCK 😀
*/

// // 1. Select elements
// const display = document.getElementById('display');
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');

// // 2. Variables
// let elapsedSeconds = 0;
// let timerInterval = null;

// // 3. Format time as MM:SS
// const formatTime = function (totalSeconds) {
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;
//   return String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
// };

// // 4. Update display
// const updateDisplay = function () {
//   display.textContent = formatTime(elapsedSeconds);
// };

// // 5. Start button
// startBtn.addEventListener('click', function () {
//   if (timerInterval === null) {
//     timerInterval = setInterval(function () {
//       elapsedSeconds++;
//       updateDisplay();
//     }, 1000);
//     console.log('Timer started');
//   }
// });

// // 6. Stop button
// stopBtn.addEventListener('click', function () {
//   clearInterval(timerInterval);
//   timerInterval = null;
//   console.log('Timer stopped');
// });

// // 7. Reset button
// resetBtn.addEventListener('click', function () {
//   clearInterval(timerInterval);
//   timerInterval = null;
//   elapsedSeconds = 0;
//   updateDisplay();
//   console.log('Timer reset');
// });

// // Initialize display
// updateDisplay();

// // BONUS: Lap button
// const lapBtn = document.getElementById('lapBtn');
// const lapList = document.getElementById('lapList');

// if (lapBtn && lapList) {
//   lapBtn.addEventListener('click', function () {
//     const lapItem = document.createElement('li');
//     lapItem.textContent = 'Lap: ' + formatTime(elapsedSeconds);
//     lapList.appendChild(lapItem);
//     console.log('Lap recorded:', formatTime(elapsedSeconds));
//   });
// }
