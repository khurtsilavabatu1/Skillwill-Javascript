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
  console.log(`Hello, ${name}!`);
};

const processUser = function (userName, callback) {
  console.log("Processing user...");
  callback(userName);
};

processUser("Nino", greet);
// 'Processing user...'
// 'Hello, Nino!'

// ანონიმური ფუნქციის გადაცემა callback-ად
processUser("Giorgi", function (name) {
  console.log(`Welcome aboard, ${name}!`);
});

// მაგალითი 2: მასივის მეთოდები — ყველაზე გავრცელებული callback-ის გამოყენება
const numbers = [1, 2, 3, 4, 5];

// forEach — callback ყოველ ელემენტზე გამოიძახება
numbers.forEach(function (num) {
  console.log(`Number: ${num}`);
});

// map — callback-ის შედეგით ახალი მასივი იქმნება
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter — callback-ით შერჩეული ელემენტების მასივი
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Evens:", evens); // [2, 4]

// მაგალითი 3: Custom higher-order function
const calculate = function (a, b, operation) {
  const result = operation(a, b);
  console.log(`Result: ${result}`);
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

// ანონიმური callback-ით
calculate(10, 3, function (x, y) {
  return x - y;
}); // 'Result: 7'

////////////////////////////////////
// 2. Callback პრაქტიკული მაგალითები
////////////////////////////////////

// Callback-ები JavaScript-ის event-driven მოდელის საფუძველია.
// ყოველი event listener, ყოველი ტაიმერი, ყოველი მასივის მეთოდი callback-ს იყენებს.

// მაგალითი 1: ტრანსფორმაციის pipeline
const transformer = function (value, fn1, fn2) {
  const step1 = fn1(value);
  const step2 = fn2(step1);
  return step2;
};

const toUpperCase = function (str) {
  return str.toUpperCase();
};

const addExclamation = function (str) {
  return str + "!!!";
};

console.log(transformer("hello", toUpperCase, addExclamation));
// 'HELLO!!!'

// მაგალითი 2: ვალიდაციის callback
const processInput = function (input, validator, onSuccess, onError) {
  if (validator(input)) {
    onSuccess(input);
  } else {
    onError(input);
  }
};

const isNotEmpty = function (str) {
  return str.trim().length > 0;
};

processInput(
  "",
  isNotEmpty,
  function (val) {
    console.log(`Valid input: "${val}"`);
  },
  function (val) {
    console.log(`Invalid input: "${val}"`);
  },
);

// მაგალითი 3: forEach-ის ხელით იმპლემენტაცია
const myForEach = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

myForEach(["a", "b", "c"], function (item, index) {
  console.log(`${index}: ${item}`);
});

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

const processArray = function (arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
};

const double = function (n) {
  return n * 2;
};
const square = function (n) {
  return n * n;
};
const isEven = function (n) {
  return n % 2 === 0;
};

console.log("Doubled:", processArray([1, 2, 3, 4, 5], double));
// [2, 4, 6, 8, 10]
console.log("Squared:", processArray([1, 2, 3, 4, 5], square));
// [1, 4, 9, 16, 25]
console.log("Is even:", processArray([1, 2, 3, 4, 5], isEven));
// [false, true, false, true, false]

const pipeline = function (initialValue) {
  let result = initialValue;
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
};

console.log("Pipeline (5, double, square):", pipeline(5, double, square));
// 100
console.log("Pipeline (3, square, double):", pipeline(3, square, double));
// 18

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
const timeoutId = setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

// ეს სტრიქონი setTimeout-ის წინ დაიბეჭდება!
console.log("This logs BEFORE the timeout message (async behavior)");

// მაგალითი 2: დამატებითი არგუმენტების გადაცემა callback-ისთვის
setTimeout(
  function (greeting, name) {
    console.log(`${greeting}, ${name}!`);
  },
  1500,
  "Gamarjoba",
  "Nino",
);

// მაგალითი 3: clearTimeout — მომლოდინე timeout-ის გაუქმება
const cancelableTimeout = setTimeout(function () {
  console.log("You will never see this message!");
}, 5000);

clearTimeout(cancelableTimeout);
console.log("Timeout was cancelled before it fired");

// მაგალითი 4: setTimeout(fn, 0) — მინიმალური დაყოვნება
// მაინც ასინქრონულია! callback მხოლოდ call stack-ის გასუფთავების შემდეგ სრულდება.
console.log("1 - Before setTimeout(fn, 0)");
setTimeout(function () {
  console.log("3 - Inside setTimeout(fn, 0)");
}, 0);
console.log("2 - After setTimeout(fn, 0)");
// თანმიმდევრობა: 1, 2, 3

// მაგალითი 5: თანმიმდევრული შეტყობინებები
setTimeout(function () {
  console.log("Step 1 - after 1 second");
}, 1000);
setTimeout(function () {
  console.log("Step 2 - after 2 seconds");
}, 2000);
setTimeout(function () {
  console.log("Step 3 - after 3 seconds");
}, 3000);

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

// მაგალითი 1: მარტივი counter (კონსოლში)
let counter = 0;
const intervalId = setInterval(function () {
  counter++;
  console.log(`Interval tick #${counter}`);
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log("Interval stopped after 5 ticks");
  }
}, 1000);

// მაგალითი 2: Countdown ტაიმერი (კონსოლის ვერსია)
const startCountdown = function (seconds) {
  console.log(`Countdown started: ${seconds}`);

  const tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log("Time is up!");
      return;
    }
    console.log(`${seconds} seconds remaining...`);
    seconds--;
  };

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// კომენტარი მოხსენით სატესტოდ:
startCountdown(5);

// მაგალითი 4: კონსოლში ციფრული საათი
const consoleClockId = setInterval(function () {
  console.log("Console clock:", new Date().toLocaleTimeString());
}, 5000);

// 20 წამის შემდეგ გავაჩეროთ
setTimeout(function () {
  clearInterval(consoleClockId);
}, 20000);

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

3. BONUS: Create a function 'delayedGreet' that takes a name and a delay
   in milliseconds. It should use setTimeout to log
   "Hello, <name>!" after the given delay.

TEST DATA: delayedGreet("Giorgi", 2000) — should log "Hello, Giorgi!" after 2 seconds

HINT: repeatNTimes needs a counter variable and clearInterval when counter reaches n
HINT: delayedGreet simply wraps console.log inside setTimeout

GOOD LUCK :)
*/

const repeatNTimes = function (callback, n, intervalMs) {
  let count = 0;
  const id = setInterval(function () {
    count++;
    callback(count);
    if (count >= n) {
      clearInterval(id);
    }
  }, intervalMs);
  return id;
};

// კომენტარი მოხსენით სატესტოდ:
repeatNTimes(
  function (i) {
    console.log("Tick " + i);
  },
  5,
  1000,
);

const delayedGreet = function (name, delayMs) {
  setTimeout(function () {
    console.log("Hello, " + name + "!");
  }, delayMs);
};

// კომენტარი მოხსენით სატესტოდ:
delayedGreet("Giorgi", 2000); // "Hello, Giorgi!" — 2 წამის შემდეგ

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

// document ობიექტი — DOM-ის შესვლის წერტილი (entry point)
console.log("Document:", document);
console.log("Document type:", typeof document); // 'object'

// document.documentElement — <html> ელემენტი
console.log("HTML element:", document.documentElement);

// document.head და document.body — პირდაპირი წვდომა
console.log("Head:", document.head);
console.log("Body:", document.body);

// document.title — გვერდის სათაური (წაკითხვა და შეცვლა)
console.log("Page title:", document.title);
// document.title = 'New Title'; // ბრაუზერის ტაბში სათაურს შეცვლის

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

// მაგალითი 1: ელემენტის ტექსტის წაკითხვა
const demoText = document.getElementById("demo-text");
console.log("Demo text content:", demoText.textContent);

// მაგალითი 2: ელემენტის ტექსტის შეცვლა
const outputDisplay = document.getElementById("output-display");
outputDisplay.textContent = "Text changed by JavaScript!";

// მაგალითი 3: innerHTML — HTML-ის ჩასმა
outputDisplay.innerHTML =
  "This text is <strong>bold</strong> and <em>italic</em>";

// მაგალითი 4: სტილის შეცვლა (.style)
const demoBox = document.getElementById("demo-box");
demoBox.style.backgroundColor = "#1565c0";
demoBox.style.borderRadius = "50%";

// მაგალითი 5: classList — CSS კლასების მართვა
// .classList.add('className')     — კლასის დამატება
// .classList.remove('className')  — კლასის მოხსნა
// .classList.toggle('className')  — კლასის გადართვა (თუ აქვს, მოხსნის; თუ არ აქვს, დაამატებს)
// .classList.contains('className') — შეამოწმებს, აქვს თუ არა კლასი

console.log("Has 'demo-box' class:", demoBox.classList.contains("demo-box"));
// true

// კომენტარი მოხსენით სატესტოდ:
demoBox.classList.toggle("highlight");

// მაგალითი 6: ელემენტის ჩვენება/დამალვა
const statusBadge = document.getElementById("status-badge");
// statusBadge.classList.add('hidden');    // დამალვა
// statusBadge.classList.remove('hidden'); // ჩვენება

statusBadge.textContent = "Status: Active";
statusBadge.style.backgroundColor = "#26a69a";
statusBadge.style.color = "white";

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

// მაგალითი 1: querySelector — id-ით (იგივე შედეგი რაც getElementById-ს)
const demoTextByQuery = document.querySelector("#demo-text");
console.log("querySelector #demo-text:", demoTextByQuery.textContent);

// მაგალითი 2: querySelector — კლასით (პირველი შესაბამისი)
const firstListItem = document.querySelector(".list-item");
console.log("First list item:", firstListItem.textContent);

// მაგალითი 3: querySelectorAll — ყველა შესაბამისი ელემენტი
const allListItems = document.querySelectorAll(".list-item");
console.log("Total list items:", allListItems.length); // 5

// NodeList-ზე forEach-ით იტერაცია
allListItems.forEach(function (item, index) {
  console.log(`Item ${index}: ${item.textContent}`);
});

// მაგალითი 4: NodeList-ის Array-ად გადაქცევა map/filter-ისთვის
const itemTexts = Array.from(allListItems).map(function (item) {
  return item.textContent;
});
console.log("Item texts as array:", itemTexts);

const longItems = Array.from(allListItems).filter(function (item) {
  return item.textContent.length > 3;
});
console.log(
  "Items with 4+ chars:",
  longItems.map(function (el) {
    return el.textContent;
  }),
);

// მაგალითი 5: ატრიბუტის სელექტორი
const statusElement = document.querySelector('[data-role="status"]');
console.log("Status element:", statusElement.textContent);

// მაგალითი 6: ჩალაგებული სელექტორი (nested selector)
const sectionTitle = document.querySelector(".section-card h2");
console.log("First section title:", sectionTitle.textContent);

// მაგალითი 7: ყველა სექციის სათაური
const allTitles = document.querySelectorAll(".section-card h2");
allTitles.forEach(function (title) {
  console.log("Section:", title.textContent);
});

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

// 1.
const countdownEl = document.getElementById("countdown-display");
console.log("Challenge 3.1 — Countdown text:", countdownEl.textContent);

// 2.
const allButtons = document.querySelectorAll(".demo-btn");
console.log("Challenge 3.2 — Total buttons:", allButtons.length);
allButtons.forEach(function (btn) {
  console.log("  Button:", btn.textContent);
});

// 3.
const statusEl = document.querySelector('[data-role="status"]');
statusEl.textContent = "Status: Challenge Complete";
statusEl.style.backgroundColor = "#4caf50";
statusEl.style.color = "white";

// 4.
const listItems = document.querySelectorAll(".list-item");
const filtered = Array.from(listItems).filter(function (item) {
  return item.textContent.length > 3;
});
console.log(
  "Challenge 3.4 — Filtered items:",
  filtered.map(function (el) {
    return el.textContent;
  }),
);

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
const btnAlert = document.getElementById("btn-alert");
btnAlert.addEventListener("click", function () {
  console.log("Alert button clicked!");
  outputDisplay.textContent = "Alert button was clicked!";
});

// მაგალითი 2: სახელობითი callback (named callback)
const toggleBox = function () {
  demoBox.classList.toggle("highlight");
  console.log("Box toggled!");
};

const btnToggle = document.getElementById("btn-toggle");
btnToggle.addEventListener("click", toggleBox);

// მაგალითი 3: Event ობიექტის გამოყენება
btnAlert.addEventListener("click", function (e) {
  console.log("Event type:", e.type);
  console.log("Target element:", e.target);
  console.log("Target tag:", e.target.tagName);
});

// მაგალითი 4: input მოვლენა — ტექსტის ველის მონიტორინგი რეალურ დროში
const textInput = document.getElementById("text-input");
const inputMirror = document.getElementById("input-mirror");

textInput.addEventListener("input", function (e) {
  inputMirror.textContent = e.target.value || "Your text will appear here";
});

// მაგალითი 5: mouseover/mouseout — hover ეფექტი JavaScript-ით
const hoverZone = document.getElementById("hover-zone");

hoverZone.addEventListener("mouseover", function () {
  hoverZone.style.backgroundColor = "#00897b";
  hoverZone.style.color = "white";
  hoverZone.textContent = "Mouse is over!";
});

hoverZone.addEventListener("mouseout", function () {
  hoverZone.style.backgroundColor = "#e0f2f1";
  hoverZone.style.color = "#263238";
  hoverZone.textContent = "Hover over me!";
});

// მაგალითი 6: removeEventListener — მსმენელის მოხსნა
// შენიშვნა: ანონიმური ფუნქციის მოხსნა შეუძლებელია!
// removeEventListener-ისთვის callback სახელით უნდა იყოს განსაზღვრული.

const oneTimeClick = function () {
  console.log("This handler runs only once, then removes itself!");
  btnAlert.removeEventListener("click", oneTimeClick);
};

// კომენტარი მოხსენით სატესტოდ:
btnAlert.addEventListener("click", oneTimeClick);

////////////////////////////////////
// 9. ტაიმერები + DOM — ინტერაქტიული მაგალითები
////////////////////////////////////

// ტაიმერების, callback-ებისა და DOM-ის კომბინაცია
// საშუალებას გვაძლევს ინტერაქტიული, დინამიური ფუნქციონალი შევქმნათ.

// --- 9.1 Live Clock ---
// setInterval-ით ყოველ წამს ვანახლებთ საათის ელემენტს
const liveClock = document.getElementById("live-clock");

const updateClock = function () {
  liveClock.textContent = new Date().toLocaleTimeString();
};

updateClock();
setInterval(updateClock, 1000);

// --- 9.2 Countdown Timer with UI ---
const countdownDisplay = document.getElementById("countdown-display");
const btnStartCountdown = document.getElementById("btn-start-countdown");
const btnStopCountdown = document.getElementById("btn-stop-countdown");
const btnResetCountdown = document.getElementById("btn-reset-countdown");

let countdownSeconds = 10;
let countdownTimer = null;

const updateCountdownDisplay = function () {
  countdownDisplay.textContent = countdownSeconds;
  if (countdownSeconds <= 3 && countdownSeconds > 0) {
    countdownDisplay.classList.add("warning");
  } else {
    countdownDisplay.classList.remove("warning");
  }
};

btnStartCountdown.addEventListener("click", function () {
  if (countdownTimer) return;

  const tick = function () {
    if (countdownSeconds === 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      countdownDisplay.textContent = "Time!";
      countdownDisplay.classList.add("warning");
      return;
    }
    countdownSeconds--;
    updateCountdownDisplay();
  };

  countdownTimer = setInterval(tick, 1000);
});

btnStopCountdown.addEventListener("click", function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
});

btnResetCountdown.addEventListener("click", function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  countdownSeconds = 10;
  updateCountdownDisplay();
});

// --- 9.3 Click Counter with Auto-Reset ---
const btnClickCounter = document.getElementById("btn-click-counter");
const clickCountDisplay = document.getElementById("click-count");
const clickStatus = document.getElementById("click-status");

let clickCount = 0;
let resetTimerId = null;

btnClickCounter.addEventListener("click", function () {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  if (resetTimerId) {
    clearTimeout(resetTimerId);
  }

  clickStatus.textContent = "Auto-reset in 3 seconds...";

  resetTimerId = setTimeout(function () {
    clickCount = 0;
    clickCountDisplay.textContent = "0";
    clickStatus.textContent = "Counter was reset!";
    resetTimerId = null;

    setTimeout(function () {
      clickStatus.textContent = "";
    }, 2000);
  }, 3000);
});

// --- 9.4 Traffic Light Simulator ---
const trafficLight = document.getElementById("traffic-light");
const trafficLabel = document.getElementById("traffic-label");

const lightSequence = [
  { color: "#e53935", label: "Red", duration: 4000 },
  { color: "#fdd835", label: "Yellow", duration: 1500 },
  { color: "#43a047", label: "Green", duration: 3000 },
];

let currentLight = 0;

const changeLight = function () {
  const light = lightSequence[currentLight];
  trafficLight.style.backgroundColor = light.color;
  trafficLabel.textContent = light.label;

  currentLight = (currentLight + 1) % lightSequence.length;
  setTimeout(changeLight, light.duration);
};

changeLight();

// --- 9.5 Typewriter Effect ---
const typewriterOutput = document.getElementById("typewriter-output");
const btnTypewriter = document.getElementById("btn-typewriter");

const typewriterText =
  "JavaScript is the language of the web. It brings web pages to life!";
let typewriterIndex = 0;
let typewriterTimer = null;

btnTypewriter.addEventListener("click", function () {
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
  }
  typewriterOutput.textContent = "";
  typewriterIndex = 0;

  typewriterTimer = setInterval(function () {
    if (typewriterIndex >= typewriterText.length) {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
      return;
    }
    typewriterOutput.textContent += typewriterText[typewriterIndex];
    typewriterIndex++;
  }, 50);
});

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

const gameArea = document.getElementById("game-area");
const btnStartGame = document.getElementById("btn-start-game");
const reactionResult = document.getElementById("reaction-result");

let gameTimeoutId = null;
let gameStartTime = null;

btnStartGame.addEventListener("click", function () {
  if (gameTimeoutId) {
    clearTimeout(gameTimeoutId);
  }

  gameArea.classList.remove("ready", "too-early");
  gameArea.classList.add("waiting");
  gameArea.textContent = "Wait for green...";
  reactionResult.textContent = "-- ms";
  gameStartTime = null;

  const randomDelay = Math.random() * 3000 + 2000;

  gameTimeoutId = setTimeout(function () {
    gameArea.classList.remove("waiting");
    gameArea.classList.add("ready");
    gameArea.textContent = "CLICK NOW!";
    gameStartTime = Date.now();
    gameTimeoutId = null;
  }, randomDelay);
});

gameArea.addEventListener("click", function () {
  if (gameArea.classList.contains("ready")) {
    const reactionTime = Date.now() - gameStartTime;
    reactionResult.textContent = reactionTime + " ms";
    gameArea.classList.remove("ready");
    gameArea.textContent = "Done! Click Start Game to try again.";
    gameStartTime = null;
  } else if (gameArea.classList.contains("waiting")) {
    clearTimeout(gameTimeoutId);
    gameTimeoutId = null;
    gameArea.classList.remove("waiting");
    gameArea.classList.add("too-early");
    gameArea.textContent = "Too early! Click Start to try again.";
  }
});
