////////////////////////////////////
// Callback-ები, ტაიმერები და DOM
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. CALLBACK ფუნქციები (CALLBACK FUNCTIONS)
═══════════════════════════════════════════════════════════════

Callback ფუნქცია — ეს არის ფუნქცია, რომელიც სხვა ფუნქციას
არგუმენტად გადაეცემა და მოგვიანებით (ან პირობის შესრულებისას)
გამოიძახება.

JavaScript-ში ფუნქციები "პირველი კლასის მოქალაქეები" არიან
(first-class citizens), ანუ:
  - ფუნქცია შეგვიძლია ცვლადში შევინახოთ
  - სხვა ფუნქციას არგუმენტად გადავცეთ
  - ფუნქციიდან დავაბრუნოთ

რატომ არის callback-ები მნიშვნელოვანი?
  - ისინი JavaScript-ის ასინქრონული მოდელის საფუძველია
  - ყოველი event listener, ტაიმერი, მასივის მეთოდი callback-ს იყენებს
  - საშუალებას გვაძლევს კოდი მოქნილი და მრავალჯერადი გამოყენებადი გავხადოთ
*/

'use strict';

// --- მარტივი callback მაგალითი ---

// greet ფუნქცია — მოგვიანებით callback-ად გამოვიყენებთ
const greet = function (name) {
  console.log(`გამარჯობა, ${name}!`);
};

// processUser არის "მაღალი რიგის ფუნქცია" (higher-order function),
// რადგან სხვა ფუნქციას იღებს არგუმენტად
const processUser = function (userName, callback) {
  console.log('მომხმარებლის დამუშავება...');
  callback(userName); // callback-ის გამოძახება
};

processUser('Nino', greet);
// 'მომხმარებლის დამუშავება...'
// 'გამარჯობა, Nino!'

// --- ანონიმური ფუნქციის გადაცემა callback-ად ---
// ფუნქციის ცვლადში შენახვა სავალდებულო არ არის —
// შეგვიძლია უშუალოდ გადავცეთ
processUser('Giorgi', function (name) {
  console.log(`კეთილი იყოს შენი მობრძანება, ${name}!`);
});

// --- callback-ებით კოდის მოქნილობა ---
// ერთი და იგივე ფუნქცია, სხვადასხვა callback-ით, სხვადასხვა შედეგს იძლევა
const processWithLog = function (value, callback) {
  console.log(`შემავალი მნიშვნელობა: ${value}`);
  const result = callback(value);
  console.log(`შედეგი: ${result}`);
  return result;
};

processWithLog(5, function (n) {
  return n * 2;
}); // შედეგი: 10

processWithLog(5, function (n) {
  return n * n;
}); // შედეგი: 25


/*
═══════════════════════════════════════════════════════════════
2. მაღალი რიგის ფუნქციები პრაქტიკაში
   (HIGHER-ORDER FUNCTIONS IN PRACTICE)
═══════════════════════════════════════════════════════════════

მაღალი რიგის ფუნქცია (Higher-order function) — ფუნქცია, რომელიც:
  1) სხვა ფუნქციას იღებს არგუმენტად (callback), ან
  2) ფუნქციას აბრუნებს შედეგად.

ყველაზე გავრცელებული მაგალითები:
  - მასივის მეთოდები: forEach, map, filter, reduce
  - Event listener-ები
  - ტაიმერები (setTimeout, setInterval)
*/

// --- მასივის მეთოდები — ყველაზე გავრცელებული callback-ის გამოყენება ---

const numbers = [1, 2, 3, 4, 5];

// forEach — callback ყოველ ელემენტზე გამოიძახება
numbers.forEach(function (num) {
  console.log(`რიცხვი: ${num}`);
});

// map — callback-ის შედეგით ახალი მასივი იქმნება
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log('გაორმაგებული:', doubled); // [2, 4, 6, 8, 10]

// filter — callback-ით შერჩეული ელემენტების მასივი
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log('ლუწი რიცხვები:', evens); // [2, 4]

// --- ფუნქციის, როგორც არგუმენტის, გადაცემა სახელით ---
// callback აუცილებლად ანონიმური არ უნდა იყოს

const add = function (x, y) {
  return x + y;
};

const multiply = function (x, y) {
  return x * y;
};

const calculate = function (a, b, operation) {
  const result = operation(a, b);
  console.log(`შედეგი: ${result}`);
  return result;
};

calculate(10, 5, add);      // 'შედეგი: 15'
calculate(10, 5, multiply); // 'შედეგი: 50'

// ანონიმური callback-ითაც მუშაობს
calculate(10, 3, function (x, y) {
  return x - y;
}); // 'შედეგი: 7'

// --- ტრანსფორმაციის ჯაჭვი (Pipeline) ---
// ერთი ფუნქციის შედეგი მეორის შესავალი ხდება

const transformer = function (value, fn1, fn2) {
  const step1 = fn1(value);
  const step2 = fn2(step1);
  return step2;
};

const toUpperCase = function (str) {
  return str.toUpperCase();
};

const addExclamation = function (str) {
  return str + '!!!';
};

console.log(transformer('hello', toUpperCase, addExclamation));
// 'HELLO!!!'

// --- ვალიდაციის callback ---
// callback-ები საშუალებას გვაძლევს ლოგიკა პარამეტრიზებული გავხადოთ

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
  'გამარჯობა',
  isNotEmpty,
  function (val) {
    console.log(`სწორი შეყვანა: "${val}"`);
  },
  function (val) {
    console.log(`არასწორი შეყვანა: "${val}"`);
  }
);

// --- forEach-ის ხელით იმპლემენტაცია ---
// გვეხმარება გავიგოთ, როგორ მუშაობს callback-ები "კულისებში"

const myForEach = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

myForEach(['ა', 'ბ', 'გ'], function (item, index) {
  console.log(`${index}: ${item}`);
});
// 0: ა
// 1: ბ
// 2: გ

// --- map-ის ხელით იმპლემენტაცია ---

const myMap = function (arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
};

const squared = myMap([1, 2, 3, 4], function (n) {
  return n * n;
});
console.log('კვადრატები:', squared); // [1, 4, 9, 16]


/*
═══════════════════════════════════════════════════════════════
3. setTimeout — ერთჯერადი დაყოვნება
═══════════════════════════════════════════════════════════════

setTimeout(callback, delay, ...args)

პარამეტრები:
  - callback: ფუნქცია, რომელიც delay-ის შემდეგ ერთხელ გამოიძახება
  - delay: დაყოვნება მილიწამებში (1000ms = 1 წამი)
  - ...args: დამატებითი არგუმენტები, რომლებიც callback-ს გადაეცემა

setTimeout აბრუნებს timer ID-ს (რიცხვს), რომლითაც
clearTimeout-ს გამოვიძახებთ ტაიმერის გასაუქმებლად.

მნიშვნელოვანი: setTimeout ასინქრონულია — კოდის შესრულება
არ ჩერდება delay-ის განმავლობაში. შემდეგი სტრიქონი
მაშინვე სრულდება.
*/

// --- მარტივი setTimeout ---

const timeoutId = setTimeout(function () {
  console.log('ეს შეტყობინება 2 წამის შემდეგ გამოჩნდება');
}, 2000);

// ეს სტრიქონი setTimeout-ის წინ დაიბეჭდება!
console.log('ეს იბეჭდება setTimeout-ის შეტყობინებამდე (ასინქრონული ქცევა)');

// --- დამატებითი არგუმენტების გადაცემა callback-ისთვის ---
// setTimeout-ის მესამე, მეოთხე და ა.შ. არგუმენტები callback-ს გადაეცემა

setTimeout(
  function (greeting, name) {
    console.log(`${greeting}, ${name}!`);
  },
  1500,
  'გამარჯობა',
  'Nino'
);

// --- clearTimeout — მომლოდინე timeout-ის გაუქმება ---
// თუ ტაიმერი ჯერ არ გასრულებულა, clearTimeout გააუქმებს მას

const cancelableTimeout = setTimeout(function () {
  console.log('ამ შეტყობინებას ვერასოდეს ნახავ!');
}, 5000);

clearTimeout(cancelableTimeout);
console.log('Timeout გაუქმდა სანამ გასროლდებოდა');

// --- setTimeout(fn, 0) — მინიმალური დაყოვნება ---
// 0 მილიწამიც კი ასინქრონულია!
// callback მხოლოდ call stack-ის გასუფთავების შემდეგ სრულდება.

console.log('1 - setTimeout(fn, 0)-მდე');
setTimeout(function () {
  console.log('3 - setTimeout(fn, 0)-ის შიგნით');
}, 0);
console.log('2 - setTimeout(fn, 0)-ის შემდეგ');
// თანმიმდევრობა: 1, 2, 3

// --- თანმიმდევრული შეტყობინებები ---
// რამდენიმე setTimeout სხვადასხვა დაყოვნებით

setTimeout(function () {
  console.log('ნაბიჯი 1 — 1 წამის შემდეგ');
}, 1000);
setTimeout(function () {
  console.log('ნაბიჯი 2 — 2 წამის შემდეგ');
}, 2000);
setTimeout(function () {
  console.log('ნაბიჯი 3 — 3 წამის შემდეგ');
}, 3000);

// --- პრაქტიკული მაგალითი: დაყოვნებული მისალმება ---

const delayedGreet = function (name, delayMs) {
  setTimeout(function () {
    console.log('გამარჯობა, ' + name + '!');
  }, delayMs);
};

delayedGreet('Giorgi', 2000); // 'გამარჯობა, Giorgi!' — 2 წამის შემდეგ


/*
═══════════════════════════════════════════════════════════════
4. setInterval და clearInterval
═══════════════════════════════════════════════════════════════

setInterval(callback, interval)
  - callback ფუნქციას განმეორებით ასრულებს ფიქსირებული
    ინტერვალით (მილიწამებში)
  - აბრუნებს interval ID-ს clearInterval-ისთვის

clearInterval(id)
  - ინტერვალს აჩერებს

setInterval vs setTimeout:
  - setTimeout: ერთხელ სრულდება delay-ის შემდეგ
  - setInterval: განმეორებით სრულდება ყოველ interval-ზე,
    სანამ clearInterval-ით არ გავაჩერებთ
*/

// --- მარტივი counter ---
// setInterval ყოველ წამს ზრდის counter-ს და 5-ზე ჩერდება

let counter = 0;
const intervalId = setInterval(function () {
  counter++;
  console.log(`ინტერვალის ტიკი #${counter}`);
  if (counter >= 5) {
    clearInterval(intervalId);
    console.log('ინტერვალი გაჩერდა 5 ტიკის შემდეგ');
  }
}, 1000);

// --- Countdown ტაიმერი (კონსოლის ვერსია) ---

const startCountdown = function (seconds) {
  console.log(`Countdown დაიწყო: ${seconds}`);

  const tick = function () {
    if (seconds === 0) {
      clearInterval(timer);
      console.log('დრო ამოიწურა!');
      return;
    }
    console.log(`${seconds} წამი დარჩა...`);
    seconds--;
  };

  tick(); // პირველი ტიკი მაშინვე
  const timer = setInterval(tick, 1000);
  return timer;
};

startCountdown(5);

// --- ციფრული საათი კონსოლში ---
// setInterval-ით ყოველ 5 წამში ვბეჭდავთ მიმდინარე დროს

const consoleClockId = setInterval(function () {
  console.log('საათი:', new Date().toLocaleTimeString());
}, 5000);

// 20 წამის შემდეგ ვაჩერებთ
setTimeout(function () {
  clearInterval(consoleClockId);
  console.log('კონსოლის საათი გაჩერდა');
}, 20000);

// --- N-ჯერ გამეორება ---
// შევქმნათ ფუნქცია, რომელიც callback-ს N-ჯერ გამოიძახებს ინტერვალით

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

repeatNTimes(
  function (i) {
    console.log('ტიკი ' + i);
  },
  3,
  1000
);
// 'ტიკი 1' (1 წამის შემდეგ)
// 'ტიკი 2' (2 წამის შემდეგ)
// 'ტიკი 3' (3 წამის შემდეგ, შემდეგ ჩერდება)


/*
═══════════════════════════════════════════════════════════════
5. DOM — კონცეფცია და ხის სტრუქტურა
   (DOCUMENT OBJECT MODEL)
═══════════════════════════════════════════════════════════════

DOM (Document Object Model) — ბრაუზერის მიერ HTML დოკუმენტის
ობიექტური წარმოდგენა.

როცა ბრაუზერი HTML ფაილს იტვირთავს:
  1) HTML-ს აანალიზებს (parses)
  2) ქმნის DOM ხეს (tree) — ობიექტების იერარქიას
  3) JavaScript-ს ამ ხის მანიპულაციის საშუალებას აძლევს

DOM ხის სტრუქტურა:

  document
    └── html
          ├── head
          │     ├── meta
          │     ├── title
          │     └── style
          └── body
                ├── header
                ├── div.section-card
                │     ├── h2
                │     ├── p#demo-text
                │     └── ...
                └── script

ყოველი HTML ელემენტი არის DOM-ის კვანძი (node).
კვანძების ტიპები: Element, Text, Comment, Document და სხვა.

მნიშვნელოვანი: DOM არ არის JavaScript-ის ნაწილი!
DOM არის Web API, რომელსაც ბრაუზერი უზრუნველყოფს.
ამიტომ DOM-ის კოდი მხოლოდ ბრაუზერში მუშაობს, Node.js-ში არა.
*/

// --- document ობიექტი — DOM-ის შესვლის წერტილი (entry point) ---

console.log('Document:', document);
console.log('Document-ის ტიპი:', typeof document); // 'object'

// document.documentElement — <html> ელემენტი (მთელი გვერდი)
console.log('HTML ელემენტი:', document.documentElement);

// document.head და document.body — პირდაპირი წვდომა
console.log('Head:', document.head);
console.log('Body:', document.body);

// document.title — გვერდის სათაური (წაკითხვა და შეცვლა)
console.log('გვერდის სათაური:', document.title);
// document.title = 'ახალი სათაური'; // ბრაუზერის ტაბში სათაურს შეცვლის


/*
═══════════════════════════════════════════════════════════════
6. document.getElementById()
═══════════════════════════════════════════════════════════════

getElementById(id) — ელემენტის მოძებნა id ატრიბუტით.

  - აბრუნებს ერთ Element ობიექტს, ან null-ს თუ ვერ იპოვა
  - id უნიკალური უნდა იყოს მთელ HTML დოკუმენტში

ელემენტის ძირითადი თვისებები (properties):
  .textContent   — ელემენტის ტექსტური შიგთავსი (HTML ტეგების გარეშე)
  .innerHTML     — ელემენტის HTML შიგთავსი (ტეგების ჩათვლით)
  .style.prop    — inline CSS სტილის შეცვლა
  .classList     — CSS კლასების მართვა (.add, .remove, .toggle, .contains)
*/

// --- ელემენტის ტექსტის წაკითხვა ---

const demoText = document.getElementById('demo-text');
console.log('ტექსტის შიგთავსი:', demoText.textContent);

// --- ელემენტის ტექსტის შეცვლა ---

const outputDisplay = document.getElementById('output-display');
outputDisplay.textContent = 'ტექსტი JavaScript-ით შეიცვალა!';

// --- innerHTML — HTML-ის ჩასმა ---
// textContent მხოლოდ ტექსტს ათავსებს, innerHTML კი HTML ტეგებსაც ამუშავებს

outputDisplay.innerHTML =
  'ეს ტექსტი არის <strong>მუქი</strong> და <em>დახრილი</em>';

// --- სტილის შეცვლა (.style) ---
// JavaScript-ში CSS თვისებები camelCase-ით იწერება

const demoBox = document.getElementById('demo-box');
demoBox.style.backgroundColor = '#1565c0';
demoBox.style.borderRadius = '50%';
demoBox.style.width = '100px';
demoBox.style.height = '100px';

// --- classList — CSS კლასების მართვა ---
// .classList.add('className')      — კლასის დამატება
// .classList.remove('className')   — კლასის მოხსნა
// .classList.toggle('className')   — კლასის გადართვა
//     (თუ აქვს — მოხსნის; თუ არ აქვს — დაამატებს)
// .classList.contains('className') — შეამოწმებს, აქვს თუ არა კლასი

console.log("აქვს 'demo-box' კლასი:", demoBox.classList.contains('demo-box'));
// true

demoBox.classList.toggle('highlight');

// --- ელემენტის ჩვენება/დამალვა ---

const statusBadge = document.getElementById('status-badge');
// statusBadge.classList.add('hidden');    // დამალვა
// statusBadge.classList.remove('hidden'); // ჩვენება

statusBadge.textContent = 'სტატუსი: აქტიური';
statusBadge.style.backgroundColor = '#26a69a';
statusBadge.style.color = 'white';


/*
═══════════════════════════════════════════════════════════════
7. querySelector და querySelectorAll
═══════════════════════════════════════════════════════════════

querySelector(selector)
  - CSS სელექტორით პირველი შესაბამისი ელემენტის მოძებნა
  - აბრუნებს Element ობიექტს ან null-ს

querySelectorAll(selector)
  - ყველა შესაბამისი ელემენტის NodeList-ის დაბრუნება

CSS სელექტორები:
  '#id'            — id-ით
  '.class'         — კლასით
  'tag'            — ტეგით
  'parent > child' — პირდაპირი შვილი
  '[attribute]'    — ატრიბუტით
  'tag.class'      — ტეგი + კლასი

querySelector vs getElementById:
  - querySelector უფრო მოქნილია (მხარს უჭერს ნებისმიერ CSS სელექტორს)
  - getElementById მარტივია და ოდნავ უფრო სწრაფი

NodeList vs Array:
  - NodeList-ს აქვს forEach, მაგრამ არ აქვს map/filter/reduce
  - Array.from(nodeList) — NodeList-ის მასივად გადაქცევა
*/

// --- querySelector — id-ით (იგივე შედეგი რაც getElementById-ს) ---

const demoTextByQuery = document.querySelector('#demo-text');
console.log('querySelector #demo-text:', demoTextByQuery.textContent);

// --- querySelector — კლასით (პირველი შესაბამისი) ---

const firstListItem = document.querySelector('.list-item');
console.log('პირველი სიის ელემენტი:', firstListItem.textContent);

// --- querySelectorAll — ყველა შესაბამისი ელემენტი ---

const allListItems = document.querySelectorAll('.list-item');
console.log('სიის ელემენტების რაოდენობა:', allListItems.length);

// NodeList-ზე forEach-ით იტერაცია
allListItems.forEach(function (item, index) {
  console.log(`ელემენტი ${index}: ${item.textContent}`);
});

// --- NodeList-ის Array-ად გადაქცევა map/filter-ისთვის ---
// NodeList-ს არ აქვს map და filter, ამიტომ Array.from() გვჭირდება

const itemTexts = Array.from(allListItems).map(function (item) {
  return item.textContent;
});
console.log('ელემენტების ტექსტები მასივად:', itemTexts);

const longItems = Array.from(allListItems).filter(function (item) {
  return item.textContent.length > 3;
});
console.log(
  '4+ სიმბოლოიანი ელემენტები:',
  longItems.map(function (el) {
    return el.textContent;
  })
);

// --- სხვადასხვა CSS სელექტორების მაგალითები ---

// ტეგით
document.querySelectorAll('p');       // ყველა <p> ელემენტი
document.querySelector('h2');         // პირველი <h2>

// პირდაპირი შვილი
document.querySelectorAll('ul > li'); // <ul>-ის პირდაპირი <li> შვილები

// ატრიბუტით
document.querySelector('[disabled]');         // პირველი disabled ელემენტი
document.querySelector('[type="text"]');      // პირველი input type="text"
document.querySelectorAll('[data-role="status"]'); // ყველა data-role="status"

// ტეგი + კლასი
document.querySelectorAll('button.demo-btn'); // ყველა <button> კლასით "demo-btn"

// --- ჩალაგებული სელექტორი (nested selector) ---

const sectionTitle = document.querySelector('.section-card h2');
console.log('სექციის სათაური:', sectionTitle.textContent);

// ყველა სექციის სათაური
const allTitles = document.querySelectorAll('.section-card h2');
allTitles.forEach(function (title) {
  console.log('სექცია:', title.textContent);
});

// --- ატრიბუტის სელექტორი ---

const statusElement = document.querySelector('[data-role="status"]');
console.log('სტატუსის ელემენტი:', statusElement.textContent);


/*
═══════════════════════════════════════════════════════════════
8. Event Listeners (Callback-ები + DOM)
═══════════════════════════════════════════════════════════════

addEventListener(eventType, callback)
  - ელემენტზე მოვლენის მსმენელის (event listener) დამატება
  - callback ფუნქცია მოვლენის მოხდენისას ავტომატურად გამოიძახება
  - callback-ს ავტომატურად გადაეცემა Event ობიექტი (e)

Event ობიექტის მნიშვნელოვანი თვისებები:
  e.target — ელემენტი, რომელზეც მოვლენა მოხდა
  e.type   — მოვლენის ტიპი ('click', 'input', 'keydown' და ა.შ.)

ხშირი მოვლენები:
  click, input, change, keydown, keyup, mouseover, mouseout, submit

removeEventListener(eventType, callback)
  - მსმენელის მოხსნა
  - callback სახელით უნდა იყოს განსაზღვრული (არა ანონიმური!)
*/

// --- click მოვლენა ---

const btnAlert = document.getElementById('btn-alert');
btnAlert.addEventListener('click', function () {
  console.log('ღილაკზე დაჭერილია!');
  outputDisplay.textContent = 'ღილაკზე დაჭერილია!';
});

// --- სახელობითი callback (named callback) ---
// სახელობითი ფუნქცია საშუალებას გვაძლევს მოგვიანებით
// removeEventListener-ით მოვხსნათ

const toggleBox = function () {
  demoBox.classList.toggle('highlight');
  console.log('ყუთი გადაირთო!');
};

const btnToggle = document.getElementById('btn-toggle');
btnToggle.addEventListener('click', toggleBox);

// --- Event ობიექტის გამოყენება ---
// callback-ის პირველი პარამეტრი ავტომატურად Event ობიექტია

btnAlert.addEventListener('click', function (e) {
  console.log('მოვლენის ტიპი:', e.type);       // 'click'
  console.log('სამიზნე ელემენტი:', e.target);    // <button> ელემენტი
  console.log('სამიზნის ტეგი:', e.target.tagName); // 'BUTTON'
});

// --- input მოვლენა — ტექსტის ველის მონიტორინგი რეალურ დროში ---
// input მოვლენა ყოველ ასოზე ეშვება (keydown-ისგან განსხვავებით)

const textInput = document.getElementById('text-input');
const inputMirror = document.getElementById('input-mirror');

textInput.addEventListener('input', function (e) {
  inputMirror.textContent = e.target.value || 'თქვენი ტექსტი აქ გამოჩნდება';
});

// --- mouseover/mouseout — hover ეფექტი JavaScript-ით ---

const hoverZone = document.getElementById('hover-zone');

hoverZone.addEventListener('mouseover', function () {
  hoverZone.style.backgroundColor = '#00897b';
  hoverZone.style.color = 'white';
  hoverZone.textContent = 'მაუსი ზემოთაა!';
});

hoverZone.addEventListener('mouseout', function () {
  hoverZone.style.backgroundColor = '#e0f2f1';
  hoverZone.style.color = '#263238';
  hoverZone.textContent = 'მაუსი მომიტანე!';
});

// --- removeEventListener — მსმენელის მოხსნა ---
// ანონიმური ფუნქციის მოხსნა შეუძლებელია!
// removeEventListener-ისთვის callback სახელით უნდა იყოს განსაზღვრული.

const oneTimeClick = function () {
  console.log('ეს handler მხოლოდ ერთხელ მუშაობს, შემდეგ თავის თავს მოხსნის!');
  btnAlert.removeEventListener('click', oneTimeClick);
};

btnAlert.addEventListener('click', oneTimeClick);


/*
═══════════════════════════════════════════════════════════════
9. ტაიმერები + DOM — კომბინირებული მაგალითები
═══════════════════════════════════════════════════════════════

ტაიმერების (setTimeout, setInterval), callback-ებისა და DOM-ის
კომბინაცია საშუალებას გვაძლევს ინტერაქტიული, დინამიური
ფუნქციონალი შევქმნათ ვებ-გვერდზე.
*/

// --- 9.1 ცოცხალი საათი (Live Clock) ---
// setInterval-ით ყოველ წამს ვანახლებთ საათის ელემენტს

const liveClock = document.getElementById('live-clock');

const updateClock = function () {
  liveClock.textContent = new Date().toLocaleTimeString();
};

updateClock(); // პირველი განახლება მაშინვე
setInterval(updateClock, 1000); // შემდეგ ყოველ წამს

// --- 9.2 Countdown ტაიმერი UI-ით ---
// ღილაკები აკონტროლებენ ტაიმერის დაწყებას, შეჩერებას და გადატვირთვას

const countdownDisplay = document.getElementById('countdown-display');
const btnStartCountdown = document.getElementById('btn-start-countdown');
const btnStopCountdown = document.getElementById('btn-stop-countdown');
const btnResetCountdown = document.getElementById('btn-reset-countdown');

let countdownSeconds = 10;
let countdownTimer = null;

const updateCountdownDisplay = function () {
  countdownDisplay.textContent = countdownSeconds;
  // 3 წამი ან ნაკლები რომ დარჩეს, გაფრთხილების კლასს ვამატებთ
  if (countdownSeconds <= 3 && countdownSeconds > 0) {
    countdownDisplay.classList.add('warning');
  } else {
    countdownDisplay.classList.remove('warning');
  }
};

// დაწყების ღილაკი
btnStartCountdown.addEventListener('click', function () {
  if (countdownTimer) return; // უკვე მუშაობს — ხელმეორედ არ დავიწყოთ

  const tick = function () {
    if (countdownSeconds === 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      countdownDisplay.textContent = 'დრო!';
      countdownDisplay.classList.add('warning');
      return;
    }
    countdownSeconds--;
    updateCountdownDisplay();
  };

  countdownTimer = setInterval(tick, 1000);
});

// შეჩერების ღილაკი
btnStopCountdown.addEventListener('click', function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
});

// გადატვირთვის ღილაკი
btnResetCountdown.addEventListener('click', function () {
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  countdownSeconds = 10;
  updateCountdownDisplay();
});

// --- 9.3 დაჭერის მთვლელი ავტომატური გადატვირთვით ---
// ყოველი დაჭერა ზრდის counter-ს, 3 წამის უმოქმედობის შემდეგ
// counter ავტომატურად ნულდება (setTimeout + clearTimeout)

const btnClickCounter = document.getElementById('btn-click-counter');
const clickCountDisplay = document.getElementById('click-count');
const clickStatus = document.getElementById('click-status');

let clickCount = 0;
let resetTimerId = null;

btnClickCounter.addEventListener('click', function () {
  clickCount++;
  clickCountDisplay.textContent = clickCount;

  // წინა ტაიმერის გაუქმება (თუ არსებობს)
  if (resetTimerId) {
    clearTimeout(resetTimerId);
  }

  clickStatus.textContent = 'ავტო-გადატვირთვა 3 წამში...';

  // 3 წამის შემდეგ გადავტვირთოთ
  resetTimerId = setTimeout(function () {
    clickCount = 0;
    clickCountDisplay.textContent = '0';
    clickStatus.textContent = 'მთვლელი გადაიტვირთა!';
    resetTimerId = null;

    // სტატუსის შეტყობინების გაწმენდა 2 წამის შემდეგ
    setTimeout(function () {
      clickStatus.textContent = '';
    }, 2000);
  }, 3000);
});

// --- 9.4 შუქნიშანი (Traffic Light Simulator) ---
// setTimeout-ით ვქმნით შუქნიშნის ციკლს — წითელი, ყვითელი, მწვანე
// ყოველ ფერს სხვადასხვა ხანგრძლივობა აქვს

const trafficLight = document.getElementById('traffic-light');
const trafficLabel = document.getElementById('traffic-label');

const lightSequence = [
  { color: '#e53935', label: 'წითელი', duration: 4000 },
  { color: '#fdd835', label: 'ყვითელი', duration: 1500 },
  { color: '#43a047', label: 'მწვანე', duration: 3000 },
];

let currentLight = 0;

const changeLight = function () {
  const light = lightSequence[currentLight];
  trafficLight.style.backgroundColor = light.color;
  trafficLabel.textContent = light.label;

  // შემდეგ ფერზე გადასვლა (ციკლურად)
  currentLight = (currentLight + 1) % lightSequence.length;
  setTimeout(changeLight, light.duration);
};

changeLight(); // ციკლის დაწყება

// --- 9.5 საბეჭდი მანქანის ეფექტი (Typewriter Effect) ---
// setInterval-ით ტექსტს ასო-ასო ვაჩვენებთ

const typewriterOutput = document.getElementById('typewriter-output');
const btnTypewriter = document.getElementById('btn-typewriter');

const typewriterText =
  'JavaScript არის ვების ენა. ის ვებ-გვერდებს სიცოცხლეს აძლევს!';
let typewriterIndex = 0;
let typewriterTimer = null;

btnTypewriter.addEventListener('click', function () {
  // წინა ანიმაციის გაჩერება (თუ მიმდინარეობს)
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
  }
  typewriterOutput.textContent = '';
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


/*
═══════════════════════════════════════════════════════════════
შეჯამება — Callback-ები, ტაიმერები და DOM
═══════════════════════════════════════════════════════════════

CALLBACK ფუნქციები:
- Callback არის ფუნქცია, რომელიც სხვა ფუნქციას არგუმენტად გადაეცემა
- JavaScript-ში ფუნქციები "პირველი კლასის მოქალაქეები" არიან
- Higher-order function: ფუნქცია, რომელიც callback-ს იღებს ან ფუნქციას აბრუნებს
- მასივის მეთოდები (forEach, map, filter, reduce) callback-ებს იყენებენ

SETTIMEOUT:
- setTimeout(callback, delay) — callback-ს ერთხელ გამოიძახებს delay-ის შემდეგ
- აბრუნებს timer ID-ს → clearTimeout(id) აუქმებს
- ასინქრონულია: კოდის შესრულება არ ჩერდება delay-ის განმავლობაში
- setTimeout(fn, 0) მაინც ასინქრონულია (call stack-ის გასუფთავებას ელოდება)

SETINTERVAL:
- setInterval(callback, interval) — callback-ს განმეორებით ასრულებს
- clearInterval(id) — ინტერვალს აჩერებს
- setTimeout vs setInterval: ერთჯერადი vs განმეორებადი

DOM (Document Object Model):
- ბრაუზერის მიერ HTML დოკუმენტის ობიექტური წარმოდგენა
- DOM არ არის JavaScript-ის ნაწილი — ეს Web API-ა
- document ობიექტი — DOM-ის შესვლის წერტილი
- ყოველი HTML ელემენტი არის DOM-ის კვანძი (node)

DOM ელემენტების მოძებნა:
- document.getElementById('id') — id-ით, ერთ ელემენტს აბრუნებს
- document.querySelector('.class') — CSS სელექტორით, პირველს აბრუნებს
- document.querySelectorAll('.class') — CSS სელექტორით, NodeList-ს აბრუნებს
- Array.from(nodeList) — NodeList-ის მასივად გადაქცევა

ელემენტის თვისებები:
- .textContent — ტექსტური შიგთავსი
- .innerHTML — HTML შიგთავსი
- .style.propertyName — inline CSS სტილი (camelCase-ით)
- .classList.add/remove/toggle/contains — CSS კლასების მართვა

EVENT LISTENERS:
- element.addEventListener('event', callback) — მსმენელის დამატება
- element.removeEventListener('event', namedCallback) — მოხსნა
- Event ობიექტი (e): e.target, e.type
- ხშირი მოვლენები: click, input, change, keydown, mouseover, mouseout

ტაიმერები + DOM:
- setInterval-ით ცოცხალი საათი, countdown ტაიმერი
- setTimeout-ით ავტო-გადატვირთვა, შუქნიშანი
- clearTimeout/clearInterval-ით ტაიმერების კონტროლი
- Event listener-ები + ტაიმერები = ინტერაქტიული ვებ-აპლიკაციები
*/
