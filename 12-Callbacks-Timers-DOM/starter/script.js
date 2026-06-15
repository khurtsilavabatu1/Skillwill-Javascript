"use strict";
// const greet = function (name) {
//   console.log(`Hello, ${name}!`);
// };

// const processUser = function (userName, callback) {
//   console.log("Processing user...");
//   callback(userName);
//   return "David leave me alone";
// };

// processUser("Nino", greet);
// // 'Processing user...'
// // 'Hello, Nino!'

// // ანონიმური ფუნქციის გადაცემა callback-ად
// processUser("Giorgi", function (name) {
//   console.log(`Welcome aboard, ${name}!`);
// });

// console.log(
//   processUser("Giorgi", function (name) {
//     console.log(`Welcome aboard, ${name}!`);
//   }),
// );

// function processArray(arr, callback) {
//   const result = [];

//   for (const item of arr) {
//     result.push(callback(item));
//   }

//   return result;
// }
// ///////////////////////////////////////////
// function double(num) {
//   return num * 2;
// }

// function square(num) {
//   return num * num;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }
// ////////////////////////////////////////////
// const data = [1, 2, 3, 4, 5];

// console.log(processArray(data, double));
// console.log(processArray(data, square));
// console.log(processArray(data, isEven));

// /////////////////////////////////////////////
// // BONUS

// function pipeline(initialValue) {
//   let result = initialValue;

//   for (let i = 1; i < arguments.length; i++) {
//     result = arguments[i](result);
//   }
//   console.log(result);

//   return result;
// }

// pipeline(5, double, square, double, square);

// const timeoutId = setTimeout(function () {
//   console.log("This message appears after 2 seconds");
// }, 2000);

// console.log(timeoutId);

// console.log("This logs BEFORE the timeout message (async behavior)");

// const timeoutId2 = setTimeout(
//   function (greeting, name) {
//     console.log(`${greeting}, ${name}!`);
//   },
//   1500,
//   "Gamarjoba",
//   "Nino",
// );

// console.log(timeoutId2);

// const cancelableTimeout = setTimeout(function () {
//   console.log("You will never see this message!");
// }, 5000);

// clearTimeout(cancelableTimeout);
// console.log("Timeout was cancelled before it fired");

// მაინც ასინქრონულია! callback მხოლოდ call stack-ის გასუფთავების შემდეგ სრულდება.
// console.log("1 - Before setTimeout(fn, 0)");
// setTimeout(function () {
//   console.log("3 - Inside setTimeout(fn, 0)");
// }, 0);
// console.log("2 - After setTimeout(fn, 0)");
// თანმიმდევრობა: 1, 2, 3

// let counter = 0;
// const intervalId = setInterval(function () {
//   counter++;
//   console.log(`Interval tick #${counter}`);
//   if (counter >= 5) {
//     clearInterval(intervalId);
//     console.log("Interval stopped after 5 ticks");
//   }
// }, 1000);

// მაგალითი 2: Countdown ტაიმერი (კონსოლის ვერსია)
// const startCountdown = function (seconds) {
//   console.log(`Countdown started: ${seconds}`);

//   const tick = function () {
//     if (seconds === 0) {
//       clearInterval(timer);
//       console.log("Time is up!");
//       return;
//     }
//     console.log(`${seconds} seconds remaining...`);
//     seconds--;
//   };

//   tick();
//   const timer = setInterval(tick, 1000);
//   return timer;
// };

// // კომენტარი მოხსენით სატესტოდ:
// startCountdown(5);

// const consoleClockId = setInterval(function () {
//   console.log("Console clock:", new Date().toLocaleTimeString());
// }, 5000);

// setTimeout(function () {
//   clearInterval(consoleClockId);
// }, 20000);

// ///////////////////
// // console.log(consoleClockId);
// // clearInterval(consoleClockId);

// function repeatNTimes(callback, n, intervalMs) {
//   let counter = 0;
//   const intervalId = setInterval(() => {
//     counter++;
//     callback(counter);
//     if (counter === n) {
//       clearInterval(intervalId);
//     }
//   }, intervalMs);
// }

// repeatNTimes(
//   function (i) {
//     console.log("Tick " + i);
//   },
//   5,
//   1000,
// );

// function delayedGreet(name, delay) {
//   setTimeout(() => {
//     console.log("Hello, " + name + "!");
//   }, delay);
// }

// delayedGreet("Giorgi", 2000);

// console.log("Document:", document);
// console.log("Document type:", typeof document); // 'object'

// const demoText = document.getElementById("demo-text");

// console.log("Demo text content:", demoText.textContent);

// // მაგალითი 2: ელემენტის ტექსტის შეცვლა
// const outputDisplay = document.getElementById("output-display");
// outputDisplay.textContent = "Text changed by JavaScript!";

// // მაგალითი 3: innerHTML — HTML-ის ჩასმა
// outputDisplay.innerHTML =
//   "This text is <strong>bold</strong> and <em>italic</em>";

const demoBox = document.getElementById("demo-box");
// console.log(demoBox.style);

// demoBox.style.backgroundColor = "#1565c0";
// demoBox.style.borderRadius = "50%";

// მაგალითი 5: classList — CSS კლასების მართვა
// .classList.add('className')     — კლასის დამატება
// .classList.remove('className')  — კლასის მოხსნა
// .classList.toggle('className')  — კლასის გადართვა (თუ აქვს, მოხსნის; თუ არ აქვს, დაამატებს)
// .classList.contains('className') — შეამოწმებს, აქვს თუ არა კლასი

// console.log("Has 'demo-box' class:", demoBox.classList.contains("demo-box"));
// // true

// // კომენტარი მოხსენით სატესტოდ:
// demoBox.classList.toggle("highlight");

// // მაგალითი 6: ელემენტის ჩვენება/დამალვა
// const statusBadge = document.getElementById("status-badge");
// // statusBadge.classList.add('hidden');    // დამალვა
// // statusBadge.classList.remove('hidden'); // ჩვენება

// statusBadge.textContent = "Status: Active";
// statusBadge.style.backgroundColor = "#26a69a";
// statusBadge.style.color = "white";

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
