"use strict";

////////////////////////////////////
// 1. Callback ფუნქციები — თეორია
////////////////////////////////////

// Callback ფუნქცია — ეს არის ფუნქცია, რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა
// და მოგვიანებით (ან პირობის შესრულებისას) გამოიძახება.
//
// JavaScript-ში ფუნქციები "პირველი კლასის მოქალაქეები" არიან (first-class citizens),
// ანუ ფუნქცია შეგვიძლია ცვლადში შევინახოთ, სხვა ფუნქციას გადავცეთ,
// ან ფუნქციიდან დავაბრუნოთ.
//
// Higher-order function (მაღალი რიგის ფუნქცია) — ფუნქცია, რომელიც:
//   1) სხვა ფუნქციას იღებს არგუმენტად (callback), ან
//   2) ფუნქციას აბრუნებს შედეგად.

// მაგალითი 1: მარტივი callback
const greet = function (name) {
  // TODO: console.log-ით დაბეჭდეთ მისალმება, მაგ: "Hello, Nino!"
};

const processUser = function (userName, callback) {
  console.log("Processing user...");
  // TODO: გამოიძახეთ callback ფუნქცია userName არგუმენტით
};

// processUser('Nino', greet);

// მაგალითი 2: მასივის მეთოდები — callback-ის ყველაზე გავრცელებული გამოყენება
const numbers = [1, 2, 3, 4, 5];

// TODO: forEach-ით დაბეჭდეთ ყოველი ელემენტი
// numbers.forEach(function(num) { ... });

// TODO: map-ით შექმენით ახალი მასივი, სადაც ყოველი რიცხვი გაორმაგებულია
// const doubled = numbers.map(function(num) { ... });

// TODO: filter-ით შეარჩიეთ მხოლოდ ლუწი რიცხვები
// const evens = numbers.filter(function(num) { ... });

// მაგალითი 3: Custom higher-order function
const calculate = function (a, b, operation) {
  // TODO: გამოიძახეთ operation ფუნქცია a და b არგუმენტებით
  // შედეგი console.log-ით დაბეჭდეთ და დააბრუნეთ
};

// TODO: შექმენით add და multiply ფუნქციები
// const add = function(x, y) { ... };
// const multiply = function(x, y) { ... };

// calculate(10, 5, add);
// calculate(10, 5, multiply);

////////////////////////////////////
// 2. Callback პრაქტიკული მაგალითები
////////////////////////////////////

// Callback-ები JavaScript-ის event-driven მოდელის საფუძველია.
// ყოველი event listener, ყოველი ტაიმერი, ყოველი მასივის მეთოდი callback-ს იყენებს.

// მაგალითი 1: ტრანსფორმაციის pipeline
const transformer = function (value, fn1, fn2) {
  // TODO: გამოიძახეთ fn1 value-ზე, შემდეგ fn2 შედეგზე
  // საბოლოო შედეგი დააბრუნეთ
};

const toUpperCase = function (str) {
  return str.toUpperCase();
};

const addExclamation = function (str) {
  return str + "!!!";
};

// console.log(transformer('hello', toUpperCase, addExclamation));
// უნდა დაბეჭდოს: 'HELLO!!!'

// მაგალითი 2: ვალიდაციის callback
const processInput = function (input, validator, onSuccess, onError) {
  // TODO: თუ validator(input) true-ს აბრუნებს, გამოიძახეთ onSuccess(input)
  // წინააღმდეგ შემთხვევაში გამოიძახეთ onError(input)
};

const isNotEmpty = function (str) {
  return str.trim().length > 0;
};

// processInput('Skillwill', isNotEmpty,
//   function(val) { console.log('Valid input: "' + val + '"'); },
//   function(val) { console.log('Invalid input: "' + val + '"'); }
// );

// მაგალითი 3: forEach-ის ხელით იმპლემენტაცია
const myForEach = function (arr, callback) {
  // TODO: for ციკლით გაიარეთ მასივი და ყოველ ელემენტზე
  // გამოიძახეთ callback(arr[i], i, arr)
};

// myForEach(['a', 'b', 'c'], function(item, index) {
//   console.log(index + ': ' + item);
// });

////////////////////////////////////
// Coding Challenge #1: Callbacks
////////////////////////////////////

/*
1. Create a function 'processArray' that takes an array and a callback.
   It should call the callback on each element and return a new array
   with the results.

2. Create three callback functions:
   - 'double' that returns a number multiplied by 2
   - 'square' that returns a number squared
   - 'isEven' that returns true if even, false if odd

3. Use processArray with each callback on [1, 2, 3, 4, 5] and log the results.

4. BONUS: Create a function 'pipeline' that takes an initial value and
   any number of callback functions. It should apply each function to the
   result of the previous one and return the final value.
   Example: pipeline(5, double, square) should return 100 (5*2=10, 10*10=100)

TEST DATA: [1, 2, 3, 4, 5]

HINT: processArray is essentially a simplified version of Array.map()
HINT: For pipeline, use a loop or reduce to chain the functions

GOOD LUCK :)
*/

// TODO: თქვენი ამოხსნა აქ

////////////////////////////////////
// 3. setTimeout — ერთჯერადი დაყოვნება
////////////////////////////////////

// setTimeout(callback, delay, ...args)
// - callback: ფუნქცია, რომელიც delay-ის შემდეგ ერთხელ გამოიძახება
// - delay: დაყოვნება მილიწამებში (1000ms = 1 წამი)
// - ...args: დამატებითი არგუმენტები, რომლებიც callback-ს გადაეცემა
//
// setTimeout აბრუნებს timer ID-ს (რიცხვს), რომლითაც clearTimeout-ს გამოვიძახებთ.
//
// მნიშვნელოვანი: setTimeout ასინქრონულია — კოდის შესრულება არ ჩერდება
// delay-ის განმავლობაში. შემდეგი სტრიქონი მაშინვე სრულდება.

// მაგალითი 1: მარტივი setTimeout
// TODO: setTimeout-ით 2 წამის შემდეგ დაბეჭდეთ შეტყობინება
// hint: setTimeout(function() { console.log('...'); }, 2000);

// მაგალითი 2: დამატებითი არგუმენტების გადაცემა
// TODO: setTimeout-ს გადაეცით callback, რომელიც ორ არგუმენტს იღებს (greeting, name)
// hint: setTimeout(function(greeting, name) { ... }, 1500, 'Gamarjoba', 'Nino');

// მაგალითი 3: clearTimeout
// TODO: შექმენით setTimeout, შეინახეთ id ცვლადში, შემდეგ გააუქმეთ clearTimeout-ით
// hint: const id = setTimeout(...); clearTimeout(id);

// მაგალითი 4: setTimeout(fn, 0) — ასინქრონული ქცევა
// TODO: დაბეჭდეთ "1", შემდეგ setTimeout(fn, 0)-ით "3", შემდეგ "2"
// რომელი თანმიმდევრობით დაიბეჭდება? გაუშვით და ნახეთ!
// console.log('1');
// setTimeout(function() { console.log('3'); }, 0);
// console.log('2');

////////////////////////////////////
// 4. setInterval და clearInterval
////////////////////////////////////

// setInterval(callback, interval)
// - callback ფუნქციას განმეორებით ასრულებს ფიქსირებული ინტერვალით
// - აბრუნებს interval ID-ს clearInterval-ისთვის
//
// clearInterval(id) — ინტერვალს აჩერებს
//
// setInterval vs setTimeout:
// - setTimeout: ერთხელ სრულდება delay-ის შემდეგ
// - setInterval: განმეორებით სრულდება ყოველ interval-ზე

// მაგალითი 1: მარტივი counter
// TODO: setInterval-ით შექმენით counter, რომელიც ყოველ წამს იზრდება
// 5-ზე მიღწევისას გააჩერეთ clearInterval-ით
// hint: let counter = 0;
//       const id = setInterval(function() { counter++; ... if(counter >= 5) clearInterval(id); }, 1000);

// მაგალითი 2: Countdown ტაიმერი (კონსოლის ვერსია)
// TODO: შექმენით startCountdown ფუნქცია, რომელიც seconds-დან 0-მდე
// ითვლის ყოველ წამს და ბოლოს "Time is up!" ბეჭდავს
// hint: tick ფუნქცია, setInterval, clearInterval

// მაგალითი 3: Recursive setTimeout
// TODO: შექმენით recursiveCounter(count, max) ფუნქცია
// რომელიც setTimeout-ით თავის თავს იძახებს count > max-მდე
// hint: setTimeout(function() { recursiveCounter(count + 1, max); }, 1000);

////////////////////////////////////
// Coding Challenge #2: Timers
////////////////////////////////////

/*
1. Create a function 'repeatNTimes' that takes three arguments:
   - callback: a function to call
   - n: how many times to call it
   - intervalMs: delay between calls in milliseconds
   The function should call the callback n times at the given interval,
   passing the current iteration number (1-based) to the callback,
   and then automatically stop.

2. Test it: repeatNTimes(function(i) { console.log('Tick ' + i); }, 5, 1000)
   Should log "Tick 1" through "Tick 5" at 1-second intervals.

3. BONUS: Create a simplified 'debounce' function that takes a function
   and a delay. It returns a NEW function that, when called, waits 'delay'
   milliseconds before executing. If called again before the delay is up,
   it resets the timer.

TEST DATA: Use the examples above

HINT: repeatNTimes needs a counter variable and clearInterval when counter reaches n
HINT: debounce uses setTimeout internally and clearTimeout to reset

GOOD LUCK :)
*/

// TODO: თქვენი ამოხსნა აქ

////////////////////////////////////
// 5. DOM — კონცეფცია და ხის სტრუქტურა
////////////////////////////////////

// DOM (Document Object Model) — ბრაუზერის მიერ HTML დოკუმენტის ობიექტური წარმოდგენა.
//
// როცა ბრაუზერი HTML ფაილს იტვირთავს:
//   1) HTML-ს აანალიზებს (parses)
//   2) ქმნის DOM ხეს (tree) — ობიექტების იერარქიას
//   3) JavaScript-ს ამ ხის მანიპულაციის საშუალებას აძლევს
//
// DOM ხის სტრუქტურა:
//
//   document
//     └── html
//           ├── head
//           │     ├── meta
//           │     ├── title
//           │     └── style
//           └── body
//                 ├── header
//                 ├── div.section-card
//                 │     ├── h2
//                 │     ├── p#demo-text
//                 │     └── ...
//                 └── script
//
// ყოველი HTML ელემენტი არის DOM-ის კვანძი (node).
// კვანძების ტიპები: Element, Text, Comment, Document და სხვა.
//
// მნიშვნელოვანი: DOM არ არის JavaScript-ის ნაწილი!
// DOM არის Web API, რომელსაც ბრაუზერი უზრუნველყოფს.
// ამიტომ DOM-ის კოდი მხოლოდ ბრაუზერში მუშაობს, Node.js-ში არა.

// TODO: console.log-ით დაბეჭდეთ document ობიექტი
// console.log(document);

// TODO: დაბეჭდეთ document.documentElement, document.head, document.body
// console.log(document.documentElement);

// TODO: წაიკითხეთ და დაბეჭდეთ document.title
// console.log('Page title:', document.title);

////////////////////////////////////
// 6. document.getElementById()
////////////////////////////////////

// getElementById(id) — ელემენტის მოძებნა id ატრიბუტით.
// - აბრუნებს ერთ Element ობიექტს, ან null-ს თუ ვერ იპოვა.
// - id უნიკალური უნდა იყოს მთელ HTML დოკუმენტში.
//
// ელემენტის property-ები:
//   .textContent  — ელემენტის ტექსტური შიგთავსი (HTML ტეგების გარეშე)
//   .innerHTML     — ელემენტის HTML შიგთავსი (ტეგების ჩათვლით)
//   .style.prop    — inline CSS სტილის შეცვლა
//   .classList      — CSS კლასების მართვა (.add, .remove, .toggle, .contains)

// TODO: getElementById-ით წაიკითხეთ 'demo-text' ელემენტის ტექსტი
// hint: const demoText = document.getElementById('demo-text');
//       console.log(demoText.textContent);

// TODO: შეცვალეთ 'output-display' ელემენტის textContent
// hint: document.getElementById('output-display').textContent = 'New text!';

// TODO: innerHTML-ით ჩასვით bold და italic ტექსტი output-display-ში
// hint: el.innerHTML = 'This is <strong>bold</strong>';

// TODO: შეცვალეთ 'demo-box' ელემენტის ფერი style.backgroundColor-ით
// hint: document.getElementById('demo-box').style.backgroundColor = '#1565c0';

// TODO: classList.toggle-ით გადართეთ 'highlight' კლასი demo-box-ზე
// hint: demoBox.classList.toggle('highlight');

// TODO: შეცვალეთ status-badge ელემენტის ტექსტი და ფერი
// hint: document.getElementById('status-badge').textContent = '...';

////////////////////////////////////
// 7. querySelector და querySelectorAll
////////////////////////////////////

// querySelector(selector) — CSS სელექტორით პირველი შესაბამისი ელემენტის მოძებნა.
// querySelectorAll(selector) — ყველა შესაბამისი ელემენტის NodeList-ის დაბრუნება.
//
// CSS სელექტორები:
//   '#id'            — id-ით
//   '.class'         — კლასით
//   'tag'            — ტეგით
//   'parent > child' — პირდაპირი შვილი
//   '[attribute]'    — ატრიბუტით
//   'tag.class'      — ტეგი + კლასი
//
// querySelector vs getElementById:
//   - querySelector უფრო მოქნილია (CSS selectors)
//   - getElementById მარტივი და ოდნავ სწრაფია
//
// NodeList vs Array:
//   - NodeList-ს აქვს forEach, მაგრამ არ აქვს map/filter
//   - Array.from(nodeList) — NodeList-ის მასივად გადაქცევა

// TODO: querySelector-ით მოძებნეთ #demo-text ელემენტი
// hint: document.querySelector('#demo-text');

// TODO: querySelector-ით მოძებნეთ პირველი .list-item ელემენტი
// hint: document.querySelector('.list-item');

// TODO: querySelectorAll-ით მოძებნეთ ყველა .list-item ელემენტი
// დაბეჭდეთ რაოდენობა (.length) და forEach-ით ყოველი ელემენტის ტექსტი
// hint: const items = document.querySelectorAll('.list-item');
//       items.forEach(function(item, i) { ... });

// TODO: NodeList-ის Array-ად გადაქცევა და map-ის გამოყენება
// hint: Array.from(items).map(function(item) { return item.textContent; });

// TODO: ატრიბუტის სელექტორით მოძებნეთ [data-role="status"] ელემენტი
// hint: document.querySelector('[data-role="status"]');

////////////////////////////////////
// Coding Challenge #3: DOM Selection
////////////////////////////////////

/*
1. Use getElementById to get the element with id "countdown-display"
   and log its current text content.

2. Use querySelectorAll to select ALL elements with class "demo-btn".
   Log how many buttons there are.
   Then iterate through them with forEach and log each button's text.

3. Use querySelector to find the element with data-role="status".
   Change its textContent to "Status: Challenge Complete"
   and change its style.backgroundColor to "#4caf50" (green).

4. Use querySelectorAll to get all ".list-item" elements.
   Convert the NodeList to an Array using Array.from().
   Use .filter() to keep only items whose textContent length is > 3.
   Log the filtered items' text.

TEST DATA: Use the elements already in index.html

HINT: document.querySelectorAll('.demo-btn').length gives the count
HINT: Array.from(nodeList) converts NodeList to a real Array

GOOD LUCK :)
*/

// TODO: თქვენი ამოხსნა აქ

////////////////////////////////////
// 8. Callbacks DOM-თან — Event Listeners
////////////////////////////////////

// addEventListener(eventType, callback)
// - ელემენტზე მოვლენის მსმენელის (event listener) დამატება
// - callback ფუნქცია მოვლენის მოხდენისას ავტომატურად გამოიძახება
// - callback-ს ავტომატურად გადაეცემა Event ობიექტი (e)
//
// Event ობიექტის მნიშვნელოვანი property-ები:
//   e.target — ელემენტი, რომელზეც მოვლენა მოხდა
//   e.type   — მოვლენის ტიპი ('click', 'input', 'keydown' და ა.შ.)
//
// ხშირი მოვლენები: click, input, change, keydown, keyup, mouseover, mouseout
//
// removeEventListener(eventType, callback)
// - მსმენელის მოხსნა (callback სახელით უნდა იყოს განსაზღვრული, არა ანონიმური)

// მაგალითი 1: click მოვლენა — Alert ღილაკი
// TODO: getElementById-ით მიიღეთ 'btn-alert' ღილაკი
// addEventListener('click', ...) -ით დაამატეთ click მსმენელი
// callback-ში დაბეჭდეთ "Alert button clicked!" და
// შეცვალეთ output-display ელემენტის ტექსტი
// hint: const btnAlert = document.getElementById('btn-alert');
//       btnAlert.addEventListener('click', function() { ... });

// მაგალითი 2: ღილაკით demo-box-ის კლასის გადართვა
// TODO: getElementById-ით მიიღეთ 'btn-toggle'
// addEventListener-ით დაამატეთ click მსმენელი
// callback-ში classList.toggle('highlight') გამოიძახეთ demo-box-ზე
// hint: const demoBox = document.getElementById('demo-box');
//       btnToggle.addEventListener('click', function() { demoBox.classList.toggle('highlight'); });

// მაგალითი 3: input მოვლენა — ტექსტის ველი
// TODO: getElementById-ით მიიღეთ 'text-input' და 'input-mirror'
// 'input' event-ის მსმენელით, რეალურ დროში აკოპირეთ ტექსტი input-mirror-ში
// hint: textInput.addEventListener('input', function(e) {
//         inputMirror.textContent = e.target.value;
//       });

// მაგალითი 4: mouseover/mouseout — hover ეფექტი
// TODO: getElementById-ით მიიღეთ 'hover-zone'
// mouseover-ზე შეცვალეთ ფერი და ტექსტი
// mouseout-ზე დააბრუნეთ თავდაპირველი მდგომარეობა
// hint: hoverZone.addEventListener('mouseover', function() { ... });
//       hoverZone.addEventListener('mouseout', function() { ... });

////////////////////////////////////
// 9. ტაიმერები + DOM — ინტერაქტიული მაგალითები
////////////////////////////////////

// ტაიმერების, callback-ებისა და DOM-ის კომბინაცია
// საშუალებას გვაძლევს ინტერაქტიული, დინამიური ფუნქციონალი შევქმნათ.

// --- 9.1 Live Clock ---
// TODO: getElementById-ით მიიღეთ 'live-clock' ელემენტი
// setInterval-ით ყოველ წამს განაახლეთ ტექსტი: new Date().toLocaleTimeString()
// hint: const liveClock = document.getElementById('live-clock');
//       setInterval(function() { liveClock.textContent = new Date().toLocaleTimeString(); }, 1000);

// --- 9.2 Countdown Timer with UI ---
// TODO: მიიღეთ 'countdown-display', 'btn-start-countdown', 'btn-stop-countdown', 'btn-reset-countdown'
// Start ღილაკზე: setInterval-ით ყოველ წამს შეამცირეთ counter და განაახლეთ display
// 0-ზე მიღწევისას clearInterval და "Time!" ტექსტი
// 3-ზე ნაკლებ წამებზე დაამატეთ 'warning' კლასი (წითელი ფერი)
// Stop ღილაკზე: clearInterval
// Reset ღილაკზე: clearInterval, counter = 10, display განახლება
// hint: let countdownTimer = null; let countdownSeconds = 10;
//       btnStart.addEventListener('click', function() { ... setInterval(tick, 1000); });

// --- 9.3 Click Counter with Auto-Reset ---
// TODO: მიიღეთ 'btn-click-counter', 'click-count', 'click-status'
// ყოველ click-ზე counter++ და display განახლება
// setTimeout-ით 3 წამში counter-ის 0-ზე დაბრუნება
// ყოველ click-ზე clearTimeout წინა ტაიმერის და ახლის დაწყება
// hint: let clickCount = 0; let resetTimerId = null;
//       btnClickCounter.addEventListener('click', function() {
//         clickCount++;
//         clearTimeout(resetTimerId);
//         resetTimerId = setTimeout(function() { clickCount = 0; ... }, 3000);
//       });

// --- 9.4 Traffic Light Simulator ---
// TODO: მიიღეთ 'traffic-light' და 'traffic-label'
// lightSequence მასივი: [{color: '#e53935', label: 'Red', duration: 4000}, ...]
// setTimeout-ით ციკლურად შეცვალეთ ფერი
// hint: const lightSequence = [
//         {color: '#e53935', label: 'Red', duration: 4000},
//         {color: '#fdd835', label: 'Yellow', duration: 1500},
//         {color: '#43a047', label: 'Green', duration: 3000}
//       ];
//       let currentLight = 0;
//       const changeLight = function() {
//         const light = lightSequence[currentLight];
//         trafficLight.style.backgroundColor = light.color;
//         currentLight = (currentLight + 1) % lightSequence.length;
//         setTimeout(changeLight, light.duration);
//       };
//       changeLight();

// --- 9.5 Typewriter Effect ---
// TODO: მიიღეთ 'typewriter-output' და 'btn-typewriter'
// ღილაკზე click-ით: setInterval-ით ყოველ 50ms-ში ერთი სიმბოლოს დამატება
// ტექსტის ბოლოს clearInterval
// hint: const text = 'JavaScript is the language of the web!';
//       let index = 0;
//       btnTypewriter.addEventListener('click', function() {
//         typewriterOutput.textContent = '';
//         index = 0;
//         const timer = setInterval(function() {
//           if (index >= text.length) { clearInterval(timer); return; }
//           typewriterOutput.textContent += text[index];
//           index++;
//         }, 50);
//       });

////////////////////////////////////
// Coding Challenge #4: Final Challenge
// Reaction Time Game
////////////////////////////////////

/*
Build a "Reaction Time Game" that combines all the topics from this chapter:
DOM selection, event listeners (callbacks), and timers.

1. Select the game area element (#game-area), start button (#btn-start-game),
   and result display (#reaction-result) using getElementById or querySelector.

2. When the "Start Game" button is clicked:
   a. Change the game area text to "Wait for green..." and add the "waiting"
      CSS class (remove "ready" and "too-early" classes first).
   b. Set a random delay between 2000 and 5000 milliseconds.
   c. Use setTimeout with that random delay. When it fires:
      - Change the game area text to "CLICK NOW!"
      - Remove the "waiting" class and add the "ready" class.
      - Record the current time using Date.now() as the start time.

3. When the game area is clicked:
   a. If the area has the "ready" class (green), calculate the reaction time
      as Date.now() minus the start time. Display it in the result element
      as "XXX ms". Remove the "ready" class.
   b. If the area has the "waiting" class (orange/yellow), the user clicked
      too early! Change text to "Too early! Click Start to try again."
      Add the "too-early" class, remove "waiting", and clear the pending timeout.
   c. Otherwise, do nothing (game hasn't started).

4. Make sure clicking "Start Game" again resets everything properly.

TEST DATA: Your own reaction speed!

HINT: Math.random() * 3000 + 2000 gives a random number between 2000-5000
HINT: Date.now() returns the current timestamp in milliseconds
HINT: Use classList.add/remove/contains to manage game states

GOOD LUCK :)
*/

// TODO: თქვენი ამოხსნა აქ
