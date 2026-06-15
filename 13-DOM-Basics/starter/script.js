"use strict";

////////////////////////////////////
// 1. DOM-ის ცნება და DOM ხე
////////////////////////////////////

// DOM (Document Object Model) — ბრაუზერის მიერ შექმნილი
// HTML დოკუმენტის ობიექტური წარმოდგენა (ხისებური სტრუქტურა).
// document — DOM-ის entry point, მთავარი ობიექტი.

console.log(document);
console.log(document.documentElement); // <html>
console.log(document.body); // <body>
console.log(document.title); // გვერდის სათაური

////////////////////////////////////
// 2. getElementById
////////////////////////////////////

// document.getElementById('id') — ეძებს ელემენტს უნიკალური id-ით.
// აბრუნებს ერთ ელემენტს ან null-ს.

const greetingEl = document.getElementById("greeting-text");
console.log(greetingEl.textContent);
greetingEl.textContent = "Hello, DOM World!";

// null თუ ვერ იპოვა
const nonExistent = document.getElementById("does-not-exist");
console.log(nonExistent); // null

// --- Counter Demo ---
const counterDisplay = document.getElementById("counter-display");
const btnIncrement = document.getElementById("btn-increment");
const btnReset = document.getElementById("btn-reset");
const output1 = document.getElementById("output-1");

let count = 0;

btnIncrement.addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

btnReset.addEventListener("click", function () {
  count = 0;
  counterDisplay.textContent = count;
});

output1.innerHTML =
  "<strong>getElementById</strong> — ელემენტს ეძებს <em>id</em> ატრიბუტით";

////////////////////////////////////
// 3. querySelector / querySelectorAll
////////////////////////////////////

// querySelector(selector) — CSS სელექტორით ეძებს პირველ ემთხვევას.
// querySelectorAll(selector) — ყველა ემთხვევას (NodeList).

// კლასით
const profileName = document.querySelector(".profile-name");
profileName.textContent = "Giorgi Lomidze";

// კომბინირებული სელექტორი
const profileEmail = document.querySelector(".profile-info .profile-email");
console.log(profileEmail.textContent);

// querySelectorAll + forEach
const allTasks = document.querySelectorAll(".task-item");
console.log("Total tasks:", allTasks.length);

allTasks.forEach(function (task, index) {
  console.log(`Task ${index + 1}:`, task.textContent.trim());
});

// --- ღილაკები ---
document
  .getElementById("btn-update-profile")
  .addEventListener("click", function () {
    document.querySelector(".profile-email").textContent =
      "giorgi@skillwill.ge";
    document.querySelector(".profile-role").textContent =
      "Full Stack Developer";
    document.querySelector("#avatar").textContent = "G";
    document.querySelector("#avatar").style.background = "#1e88e5";
  });

document
  .getElementById("btn-complete-first")
  .addEventListener("click", function () {
    const firstTask = document.querySelector(".task-item");
    if (firstTask) {
      firstTask.classList.add("completed");
    }
  });

////////////////////////////////////
// 4. getElementsByClassName
////////////////////////////////////

// getElementsByClassName('class') — აბრუნებს HTMLCollection-ს (live).
// HTMLCollection vs NodeList:
//   - HTMLCollection — "live", ავტომატურად განახლდება, forEach არ აქვს
//   - NodeList — "static", forEach აქვს

const colorBoxes = document.getElementsByClassName("color-box");
console.log("Color boxes:", colorBoxes.length);

document
  .getElementById("btn-fade-boxes")
  .addEventListener("click", function () {
    const boxes = document.getElementsByClassName("color-box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.opacity = "0.3";
    }
  });

document
  .getElementById("btn-restore-boxes")
  .addEventListener("click", function () {
    const boxes = document.getElementsByClassName("color-box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.opacity = "1";
    }
  });
