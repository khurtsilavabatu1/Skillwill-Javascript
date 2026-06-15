'use strict';

////////////////////////////////////
// Callback-ები, ტაიმერები და DOM
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - მასივის დამმუშავებელი
// (Callback-ები)

/*
გინდათ ააწყოთ მინი მონაცემთა დამუშავების ბიბლიოთეკა callback-ების გამოყენებით.
თქვენი ფუნქციები მასივის ელემენტებს callback-ების საშუალებით დაამუშავებს.

1. შექმენით ფუნქცია 'processArray', რომელიც იღებს მასივს და callback-ს.
   ფუნქციამ უნდა გამოიძახოს callback ყოველ ელემენტზე და დააბრუნოს
   ახალი მასივი შედეგებით.
2. შექმენით ფუნქცია 'filterArray', რომელიც იღებს მასივს და პრედიკატ
   callback-ს. ფუნქციამ უნდა დააბრუნოს ახალი მასივი მხოლოდ იმ
   ელემენტებით, რომლებზეც callback true-ს აბრუნებს.
3. შექმენით ფუნქცია 'reduceArray', რომელიც იღებს მასივს,
   callback(accumulator, current) ფუნქციას და initialValue-ს.
   ფუნქციამ უნდა დააგროვოს ერთი შედეგი callback-ის თანმიმდევრული
   გამოძახებით ყოველ ელემენტზე.
4. შექმენით შემდეგი callback ფუნქციები:
   - 'double' — რიცხვს 2-ზე ამრავლებს (n * 2)
   - 'isPositive' — აბრუნებს true-ს, თუ რიცხვი 0-ზე მეტია (n > 0)
   - 'sumReducer' — აჯამებს ორ მნიშვნელობას (acc + curr)
5. აჩვენეთ ყველა ფუნქციის მუშაობა სატესტო მონაცემებზე:
   - processArray-ს გამოიყენეთ double callback-ით
   - filterArray-ს გამოიყენეთ isPositive callback-ით
   - reduceArray-ს გამოიყენეთ sumReducer callback-ით, initialValue = 0
   - ყოველი შედეგი დალოგეთ
6. BONUS: შექმენით ფუნქცია 'compose', რომელიც იღებს ორ ფუნქციას
   და აბრუნებს ახალ ფუნქციას, რომელიც მათ მარჯვნიდან მარცხნივ ასრულებს.
   მაგალითი: compose(double, double)(3) → 12 (3*2=6, 6*2=12)

სატესტო მონაცემები: [3, -1, 4, -5, 2, -3, 6]

მინიშნება: processArray ფაქტობრივად Array.map()-ის გამარტივებული ვერსიაა
მინიშნება: filterArray ფაქტობრივად Array.filter()-ის გამარტივებული ვერსიაა
მინიშნება: reduceArray ფაქტობრივად Array.reduce()-ის გამარტივებული ვერსიაა
მინიშნება: compose(f, g) აბრუნებს ფუნქციას, რომელიც x-ზე f(g(x))-ს ასრულებს

წარმატებები 😀
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

// // Callback ფუნქციები
// const double = function (n) {
//   return n * 2;
// };

// const isPositive = function (n) {
//   return n > 0;
// };

// const sumReducer = function (acc, curr) {
//   return acc + curr;
// };

// // დემონსტრაცია
// const testData = [3, -1, 4, -5, 2, -3, 6];
// console.log('--- მასივის დამმუშავებელი ---');
// console.log('საწყისი მასივი:', testData);

// const doubled = processArray(testData, double);
// console.log('გაორმაგებული:', doubled);
// // [6, -2, 8, -10, 4, -6, 12]

// const positives = filterArray(testData, isPositive);
// console.log('მხოლოდ დადებითები:', positives);
// // [3, 4, 2, 6]

// const sum = reduceArray(testData, sumReducer, 0);
// console.log('ჯამი:', sum);
// // 6

// // BONUS: compose
// const compose = function (f, g) {
//   return function (x) {
//     return f(g(x));
//   };
// };

// const doubleDouble = compose(double, double);
// console.log('\ncompose(double, double)(3):', doubleDouble(3));
// // 12 (3*2=6, 6*2=12)

// console.log('compose(double, double)(5):', doubleDouble(5));
// // 20 (5*2=10, 10*2=20)


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - დაგვიანებული ლოგერი
// (setTimeout)

/*
ააწყვეთ შეტყობინებების სისტემა დაგვიანებული ნოტიფიკაციებით,
რომელიც setTimeout-ს გამოიყენებს სხვადასხვა დაყოვნების სცენარებისთვის.

1. შექმენით ფუნქცია 'delayedLog', რომელიც იღებს შეტყობინებას და
   დაყოვნებას მილიწამებში. ფუნქციამ უნდა დალოგოს შეტყობინება
   მითითებული დაყოვნების შემდეგ და დააბრუნოს timer ID.
2. შექმენით ფუნქცია 'cancelableDelay', რომელიც იღებს შეტყობინებას
   და დაყოვნებას. ფუნქციამ უნდა დააბრუნოს ობიექტი { timerId, cancel() },
   სადაც cancel() მეთოდი ტაიმერს გააუქმებს clearTimeout-ის გამოყენებით.
3. შექმენით ფუნქცია 'sequentialMessages', რომელიც იღებს
   შეტყობინებების მასივს და გაპს (დაყოვნება მილიწამებში).
   ფუნქციამ უნდა დალოგოს ყოველი შეტყობინება თანმიმდევრულად,
   გაპით დაშორებული. პირველი შეტყობინება — გაპის შემდეგ,
   მეორე — 2*გაპის შემდეგ, და ა.შ.
4. შექმენით ფუნქცია 'delayedCallback', რომელიც იღებს callback-ს,
   არგუმენტების მასივს (args) და დაყოვნებას. ფუნქციამ უნდა
   გამოიძახოს callback მითითებული არგუმენტებით დაყოვნების შემდეგ.
5. აჩვენეთ ყველა ფუნქციის მუშაობა:
   - delayedLog-ით დალოგეთ შეტყობინება 1 წამის შემდეგ
   - cancelableDelay-ით შექმენით ტაიმერი და მაშინვე გააუქმეთ
   - sequentialMessages-ით დალოგეთ 3 შეტყობინება 1.5 წამის გაპით
   - delayedCallback-ით გამოიძახეთ ფუნქცია 2 წამის შემდეგ
6. BONUS: შექმენით ფუნქცია 'debounce', რომელიც იღებს ფუნქციას
   და დაყოვნებას. ფუნქციამ უნდა დააბრუნოს ახალი ფუნქცია,
   რომელიც მხოლოდ მაშინ შესრულდება, თუ ბოლო გამოძახებიდან
   მითითებული დრო გავიდა.

სატესტო მონაცემები:
  შეტყობინებები: ['გამარჯობა!', 'როგორ ხარ?', 'ნახვამდის!']
  გაპი: 1500ms

მინიშნება: setTimeout აბრუნებს timer ID-ს, რომელიც clearTimeout-ს გადაეცემა
მინიშნება: sequentialMessages-ში i-ური შეტყობინებისთვის დაყოვნება არის (i+1) * gap
მინიშნება: delayedCallback-ში callback-ს args მასივის ელემენტები გადაეცემა
მინიშნება: debounce-ში ყოველ გამოძახებაზე წინა ტაიმერი უნდა გაუქმდეს

წარმატებები 😀
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
//       console.log('ტაიმერი გაუქმებულია:', message);
//     },
//   };
// };

// const sequentialMessages = function (messages, gap) {
//   for (let i = 0; i < messages.length; i++) {
//     setTimeout(function () {
//       console.log(`შეტყობინება ${i + 1}: ${messages[i]}`);
//     }, (i + 1) * gap);
//   }
// };

// const delayedCallback = function (callback, args, delay) {
//   setTimeout(function () {
//     callback.apply(null, args);
//   }, delay);
// };

// // დემონსტრაცია
// console.log('--- დაგვიანებული ლოგერი ---');

// // delayedLog
// console.log('delayedLog გაშვებულია...');
// delayedLog('ეს შეტყობინება 1 წამის შემდეგ გამოჩნდა!', 1000);

// // cancelableDelay
// const cancelable = cancelableDelay('ეს შეტყობინება არ უნდა გამოჩნდეს!', 3000);
// cancelable.cancel(); // მაშინვე გაუქმება

// // sequentialMessages
// console.log('თანმიმდევრული შეტყობინებები გაშვებულია...');
// sequentialMessages(['გამარჯობა!', 'როგორ ხარ?', 'ნახვამდის!'], 1500);

// // delayedCallback
// const sayHello = function (name, greeting) {
//   console.log(`${greeting}, ${name}!`);
// };
// delayedCallback(sayHello, ['ნინო', 'გამარჯობა'], 2000);

// // BONUS: debounce
// const debounce = function (fn, delay) {
//   let timerId = null;
//   return function () {
//     if (timerId) {
//       clearTimeout(timerId);
//     }
//     const args = arguments;
//     const context = this;
//     timerId = setTimeout(function () {
//       fn.apply(context, args);
//       timerId = null;
//     }, delay);
//   };
// };

// const debouncedLog = debounce(function (msg) {
//   console.log('Debounced:', msg);
// }, 500);

// // სწრაფი გამოძახებები — მხოლოდ ბოლო შესრულდება
// debouncedLog('პირველი');
// debouncedLog('მეორე');
// debouncedLog('მესამე'); // მხოლოდ ეს დაილოგება 500ms შემდეგ


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - განმეორებადი მთვლელი
// (setInterval)

/*
ააწყვეთ კონფიგურირებადი მთვლელის სისტემა, რომელიც setInterval-ს
გამოიყენებს განმეორებადი ოპერაციებისთვის.

1. შექმენით ფუნქცია 'createCounter', რომელიც იღებს პარამეტრებს:
   start, end, step, intervalMs. ფუნქციამ უნდა:
   ა) დაიწყოს start მნიშვნელობიდან
   ბ) ყოველ intervalMs მილიწამში გაიზარდოს step-ით
   გ) დალოგოს მიმდინარე მნიშვნელობა ყოველ ინტერვალზე
   დ) გაჩერდეს, როცა end-ს მიაღწევს ან გადააჭარბებს
   ე) გაჩერებისას დალოგოს "მთვლელი დასრულდა!"
   ვ) დააბრუნოს interval ID
2. შექმენით ფუნქცია 'countdown', რომელიც იღებს წამების რაოდენობას
   და callback ფუნქციას. ფუნქციამ უნდა:
   ა) ყოველ წამში დალოგოს დარჩენილი წამები
   ბ) 0-ზე მისვლისას გამოიძახოს callback და დალოგოს "დასრულდა!"
   გ) დააბრუნოს interval ID
3. შექმენით ფუნქცია 'repeater', რომელიც იღებს callback-ს და
   intervalMs-ს. ფუნქციამ უნდა დააბრუნოს ობიექტი { stop() } მეთოდით,
   რომელიც ინტერვალს გააჩერებს clearInterval-ით.
4. აჩვენეთ ყველა ფუნქციის მუშაობა:
   - createCounter-ით დათვალეთ 1-დან 10-მდე 2-ის ბიჯით, 800ms ინტერვალით
   - countdown-ით დათვალეთ 5-დან 0-მდე
   - repeater-ით გაუშვით ფუნქცია და 5 წამის შემდეგ გააჩერეთ

სატესტო მონაცემები:
  მთვლელი: start=1, end=10, step=2, interval=800ms
  Countdown: 5 წამი

მინიშნება: setInterval-ით გამოიძახეთ callback განმეორებით, clearInterval-ით გააჩერეთ
მინიშნება: createCounter-ში შეამოწმეთ, მიაღწია თუ არა მთვლელმა end მნიშვნელობას
მინიშნება: countdown-ში ყოველ ინტერვალზე შეამცირეთ მთვლელი 1-ით
მინიშნება: repeater-ში stop() მეთოდმა clearInterval უნდა გამოიძახოს

წარმატებები 😀
*/

// const createCounter = function (start, end, step, intervalMs) {
//   let current = start;
//   console.log(`მთვლელი დაწყებულია: ${current}`);
//
//   const intervalId = setInterval(function () {
//     current += step;
//     if (current >= end) {
//       console.log(`მთვლელი: ${end}`);
//       clearInterval(intervalId);
//       console.log('მთვლელი დასრულდა!');
//       return;
//     }
//     console.log(`მთვლელი: ${current}`);
//   }, intervalMs);
//
//   return intervalId;
// };

// const countdown = function (seconds, callback) {
//   let remaining = seconds;
//   console.log(`ათვლა დაწყებულია: ${remaining}`);
//
//   const intervalId = setInterval(function () {
//     remaining--;
//     if (remaining === 0) {
//       clearInterval(intervalId);
//       console.log('დასრულდა!');
//       callback();
//       return;
//     }
//     console.log(`დარჩენილია: ${remaining} წამი`);
//   }, 1000);
//
//   return intervalId;
// };

// const repeater = function (callback, intervalMs) {
//   const intervalId = setInterval(callback, intervalMs);
//   return {
//     stop: function () {
//       clearInterval(intervalId);
//       console.log('რეპიტერი გაჩერებულია.');
//     },
//   };
// };

// // დემონსტრაცია
// console.log('--- განმეორებადი მთვლელი ---');

// // createCounter: 1-დან 10-მდე, ბიჯი 2, ინტერვალი 800ms
// console.log('\n--- createCounter ---');
// createCounter(1, 10, 2, 800);

// // countdown: 5 წამი
// // შენიშვნა: setTimeout-ით გადავდოთ, რომ createCounter-ს არ გადაფაროს
// setTimeout(function () {
//   console.log('\n--- countdown ---');
//   countdown(5, function () {
//     console.log('ათვლის callback გამოიძახა!');
//   });
// }, 6000);

// // repeater: ყოველ 1 წამში, 5 წამის შემდეგ გაჩერება
// setTimeout(function () {
//   console.log('\n--- repeater ---');
//   let tick = 0;
//   const myRepeater = repeater(function () {
//     tick++;
//     console.log(`რეპიტერის ტიკი: ${tick}`);
//   }, 1000);
//
//   // 5 წამის შემდეგ გაჩერება
//   setTimeout(function () {
//     myRepeater.stop();
//   }, 5000);
// }, 12000);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - DOM მკვლევარი
// (DOM-ის შერჩევა და მანიპულაცია)

/*
შენიშვნა: ეს ჩელენჯი ბრაუზერში HTML გვერდით უნდა გაეშვას.

ააწყვეთ DOM-ის მკვლევარი, რომელიც სხვადასხვა მეთოდებით ელემენტებს
შეარჩევს და მანიპულაციას მოახდენს.

1. გამოიყენეთ document.getElementById ელემენტის id-ით მოსაძებნად.
   წაიკითხეთ ნაპოვნი ელემენტის textContent და დალოგეთ.
2. გამოიყენეთ document.querySelector CSS კლასის სელექტორით ('.class-name')
   ელემენტის მოსაძებნად. შეუცვალეთ სტილი:
   - style.color, style.backgroundColor, style.padding
3. გამოიყენეთ document.querySelectorAll რომ მოძებნოთ ყველა ელემენტი
   გარკვეული კლასით. forEach-ით გაიარეთ ყოველი ელემენტი და დალოგეთ
   მისი textContent და index.
4. გამოიყენეთ Array.from() რომ NodeList მასივად გადააქციოთ.
   შემდეგ გამოიყენეთ .filter() რომ შეარჩიოთ ელემენტები, რომლების
   textContent-ის სიგრძე 3-ზე მეტია. დალოგეთ გაფილტრული ელემენტების ტექსტი.
5. გამოიყენეთ classList ელემენტის კლასების სამართავად:
   - .classList.toggle('className') — კლასის გადართვა
   - .classList.contains('className') — შეამოწმეთ, აქვს თუ არა კლასი
   - დალოგეთ შედეგი
6. გამოიყენეთ innerHTML რომ ელემენტში ფორმატირებული HTML ჩასვათ.
   მაგალითად: "<strong>გამუქებული</strong> და <em>დახრილი</em> ტექსტი"

სატესტო მონაცემები: გამოიყენეთ HTML გვერდზე უკვე არსებული ელემენტები

მინიშნება: getElementById აბრუნებს ერთ ელემენტს ან null-ს
მინიშნება: querySelector აბრუნებს პირველ შესაბამის ელემენტს
მინიშნება: querySelectorAll აბრუნებს NodeList-ს — forEach-ით იტერაცია შეიძლება
მინიშნება: Array.from(nodeList) ნოუდლისტს ნამდვილ მასივად გარდაქმნის

წარმატებები 😀
*/

// // 1. getElementById — ელემენტის textContent-ის წაკითხვა
// const demoText = document.getElementById('demo-text');
// console.log('--- DOM მკვლევარი ---');
// console.log('getElementById შედეგი:', demoText.textContent);

// // 2. querySelector — სტილის შეცვლა
// const firstItem = document.querySelector('.list-item');
// firstItem.style.color = '#1565c0';
// firstItem.style.backgroundColor = '#e3f2fd';
// firstItem.style.padding = '8px';
// console.log('querySelector-ით ნაპოვნი ელემენტი:', firstItem.textContent);

// // 3. querySelectorAll — forEach იტერაცია
// const allItems = document.querySelectorAll('.list-item');
// console.log(`\nსულ ელემენტი: ${allItems.length}`);
// allItems.forEach(function (item, index) {
//   console.log(`  ელემენტი ${index}: ${item.textContent}`);
// });

// // 4. Array.from() — NodeList-ის მასივად გადაქცევა და filter
// const itemsArray = Array.from(allItems);
// const longItems = itemsArray.filter(function (item) {
//   return item.textContent.length > 3;
// });
// console.log('\nგაფილტრული (სიგრძე > 3):', longItems.map(function (el) {
//   return el.textContent;
// }));

// // 5. classList — toggle და contains
// const demoBox = document.getElementById('demo-box');
// console.log('\nclassList.contains("demo-box"):', demoBox.classList.contains('demo-box'));
// demoBox.classList.toggle('highlight');
// console.log('highlight გადართვის შემდეგ, contains("highlight"):', demoBox.classList.contains('highlight'));

// // 6. innerHTML — ფორმატირებული HTML
// const outputDisplay = document.getElementById('output-display');
// outputDisplay.innerHTML = '<strong>გამუქებული</strong> და <em>დახრილი</em> ტექსტი JavaScript-იდან';
// console.log('innerHTML განახლებულია.');


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - ინტერაქტიული ტაიმერი
// (Callback-ები + ტაიმერები + DOM)

/*
შენიშვნა: ეს ჩელენჯი ბრაუზერში HTML გვერდით უნდა გაეშვას.

ააწყვეთ ინტერაქტიული წამზომი (stopwatch), რომელიც callback-ებს,
ტაიმერებს და DOM მანიპულაციას აერთიანებს.

1. გამოიყენეთ document.getElementById რომ შეარჩიოთ ელემენტები:
   - ეკრანი (display), სადაც დრო გამოჩნდება
   - "Start" ღილაკი
   - "Stop" ღილაკი
   - "Reset" ღილაკი
2. შექმენით ცვლადები:
   - 'elapsedSeconds' — გასული წამების რაოდენობა (საწყისი: 0)
   - 'timerInterval' — ინტერვალის ID (საწყისი: null)
3. შექმენით ფუნქცია 'formatTime', რომელიც იღებს წამებს და აბრუნებს
   ფორმატირებულ სტრინგს "MM:SS" ფორმატში.
   მაგალითი: formatTime(65) → "01:05", formatTime(0) → "00:00"
   მინიშნება: Math.floor(seconds / 60) — წუთები, seconds % 60 — წამები.
   გამოიყენეთ .toString().padStart(2, '0') ნულებით შესავსებად.
4. შექმენით ფუნქცია 'updateDisplay', რომელიც ეკრანის ელემენტის
   textContent-ს formatTime(elapsedSeconds)-ის შედეგით განაახლებს.
5. დაამატეთ "Start" ღილაკზე click ივენთის მსმენელი:
   - თუ timerInterval უკვე მუშაობს, არაფერი არ გააკეთოს (return)
   - წინააღმდეგ შემთხვევაში, გაუშვით setInterval, რომელიც ყოველ 1000ms-ში:
     ა) elapsedSeconds-ს 1-ით გაზრდის
     ბ) updateDisplay-ს გამოიძახებს
   - შეინახეთ interval ID timerInterval-ში
6. დაამატეთ "Stop" ღილაკზე click ივენთის მსმენელი:
   - თუ timerInterval მუშაობს, გააჩერეთ clearInterval-ით
   - timerInterval-ს null-ად დააყენეთ
7. დაამატეთ "Reset" ღილაკზე click ივენთის მსმენელი:
   - გააჩერეთ ინტერვალი (თუ მუშაობს)
   - elapsedSeconds-ს 0-ზე დააბრუნეთ
   - განაახლეთ ეკრანი updateDisplay-ით
8. BONUS: დაამატეთ "Lap" ღილაკი, რომელიც მიმდინარე დროს ცალკე
   სიაში ჩაწერს (დალოგეთ ან DOM ელემენტში ჩაამატეთ)

სატესტო მონაცემები: ხელით შეამოწმეთ ღილაკებზე დაჭერით

მინიშნება: setInterval ყოველ 1000ms-ში callback-ს გამოიძახებს
მინიშნება: clearInterval(timerInterval) ინტერვალს გააჩერებს
მინიშნება: padStart(2, '0') ერთციფრიან რიცხვს წინ ნულს დაუმატებს
მინიშნება: Lap-ისთვის მასივში შეინახეთ ყოველი Lap-ის დრო

წარმატებები 😀
*/

// // 1. ელემენტების შერჩევა
// const timerDisplay = document.getElementById('timer-display');
// const btnStart = document.getElementById('btn-start');
// const btnStop = document.getElementById('btn-stop');
// const btnReset = document.getElementById('btn-reset');

// // 2. ცვლადები
// let elapsedSeconds = 0;
// let timerInterval = null;

// // 3. formatTime ფუნქცია
// const formatTime = function (seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = seconds % 60;
//   return mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
// };

// // 4. updateDisplay ფუნქცია
// const updateDisplay = function () {
//   timerDisplay.textContent = formatTime(elapsedSeconds);
// };

// // საწყისი ეკრანის განახლება
// updateDisplay();

// // 5. Start ღილაკი
// btnStart.addEventListener('click', function () {
//   if (timerInterval) return; // უკვე მუშაობს

//   timerInterval = setInterval(function () {
//     elapsedSeconds++;
//     updateDisplay();
//   }, 1000);
//   console.log('ტაიმერი დაწყებულია.');
// });

// // 6. Stop ღილაკი
// btnStop.addEventListener('click', function () {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//     console.log('ტაიმერი გაჩერებულია.');
//   }
// });

// // 7. Reset ღილაკი
// btnReset.addEventListener('click', function () {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//   }
//   elapsedSeconds = 0;
//   updateDisplay();
//   console.log('ტაიმერი დარესეტებულია.');
// });

// // BONUS: Lap ღილაკი
// const btnLap = document.getElementById('btn-lap');
// const laps = [];

// if (btnLap) {
//   btnLap.addEventListener('click', function () {
//     if (elapsedSeconds > 0) {
//       laps.push(formatTime(elapsedSeconds));
//       console.log(`Lap ${laps.length}: ${formatTime(elapsedSeconds)}`);
//       console.log('ყველა Lap:', laps);
//     }
//   });
// }
