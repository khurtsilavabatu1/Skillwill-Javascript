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
document.getElementById("btn-update-profile").addEventListener("click", function () {
  document.querySelector(".profile-email").textContent = "giorgi@skillwill.ge";
  document.querySelector(".profile-role").textContent = "Full Stack Developer";
  document.querySelector("#avatar").textContent = "G";
  document.querySelector("#avatar").style.background = "#1e88e5";
});

document.getElementById("btn-complete-first").addEventListener("click", function () {
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

document.getElementById("btn-fade-boxes").addEventListener("click", function () {
  const boxes = document.getElementsByClassName("color-box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.opacity = "0.3";
  }
});

document.getElementById("btn-restore-boxes").addEventListener("click", function () {
  const boxes = document.getElementsByClassName("color-box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.opacity = "1";
  }
});


////////////////////////////////////
// 5. getElementsByTagName
////////////////////////////////////

// getElementsByTagName('tag') — ტეგით ეძებს, აბრუნებს HTMLCollection-ს.
// შეიძლება კონკრეტულ ელემენტზეც გამოიძახო.

const mainNav = document.getElementById("main-nav");
const navLinks = mainNav.getElementsByTagName("a");
console.log("Nav links:", navLinks.length);

// ცხრილის მონაცემების წაკითხვა
const studentTable = document.getElementById("student-table");
const tbody = studentTable.getElementsByTagName("tbody")[0];
const dataRows = tbody.getElementsByTagName("tr");

document.getElementById("btn-highlight-top").addEventListener("click", function () {
  for (let i = 0; i < dataRows.length; i++) {
    const cells = dataRows[i].getElementsByTagName("td");
    const grade = Number(cells[1].textContent);
    if (grade >= 90) {
      dataRows[i].style.background = "#e8f5e9";
    }
  }
});


////////////////////////////////////
// 6. innerHTML vs textContent
////////////////////////////////////

// innerHTML — HTML კონტენტი ტეგებით. პარსავს და რენდერავს.
// textContent — მხოლოდ ტექსტი. ტეგებს ტექსტად აჩვენებს (უსაფრთხო).

const contentArea = document.getElementById("content-area");
const output4 = document.getElementById("output-4");

document.getElementById("btn-show-inner").addEventListener("click", function () {
  output4.textContent = "innerHTML: " + contentArea.innerHTML;
});

document.getElementById("btn-show-text").addEventListener("click", function () {
  output4.textContent = "textContent: " + contentArea.textContent;
});

document.getElementById("btn-set-inner").addEventListener("click", function () {
  contentArea.innerHTML =
    "<h3 style='color: #3949ab'>Updated!</h3><p>Set with <code>innerHTML</code></p>";
});

document.getElementById("btn-set-text").addEventListener("click", function () {
  contentArea.textContent = "Set with textContent — HTML tags won't render";
});


////////////////////////////////////
// 7. style თვისება
////////////////////////////////////

// element.style — inline CSS-ის წაკითხვა/ჩაწერა.
// CSS property camelCase-ით: background-color → backgroundColor
// style.cssText = '' — ყველა inline style-ის წაშლა.

const styleTarget = document.getElementById("style-target");

document.getElementById("btn-style-bg").addEventListener("click", function () {
  styleTarget.style.backgroundColor = "#1a237e";
  styleTarget.style.color = "#fff";
});

document.getElementById("btn-style-reset").addEventListener("click", function () {
  styleTarget.style.cssText = "";
});

// getComputedStyle — CSS ფაილის სტილების წასაკითხად
const computed = getComputedStyle(styleTarget);
console.log("Computed font-size:", computed.fontSize);


////////////////////////////////////
// 8. innerHTML-ით დინამიური კონტენტი
////////////////////////////////////

const notificationArea = document.getElementById("notification-area");

document.getElementById("btn-add-success").addEventListener("click", function () {
  notificationArea.innerHTML +=
    '<div class="notification success">Operation completed successfully!</div>';
});

document.getElementById("btn-add-error").addEventListener("click", function () {
  notificationArea.innerHTML +=
    '<div class="notification error">Something went wrong!</div>';
});

document.getElementById("btn-clear-notifications").addEventListener("click", function () {
  notificationArea.innerHTML = "";
});


////////////////////////////////////
// 9. სელექტორების შედარება — შეჯამება
////////////////////////////////////

// | მეთოდი                      | აბრუნებს         | Live? | CSS სელექტორი? |
// |-----------------------------|------------------|-------|---------------|
// | getElementById('id')        | Element / null   | —     | არა           |
// | querySelector('sel')        | Element / null   | —     | დიახ          |
// | querySelectorAll('sel')     | NodeList         | არა   | დიახ          |
// | getElementsByClassName('c') | HTMLCollection   | დიახ  | არა           |
// | getElementsByTagName('t')   | HTMLCollection   | დიახ  | არა           |
//
// რეკომენდაცია:
//   - getElementById — როცა ზუსტი id იცი (ყველაზე სწრაფი)
//   - querySelector / querySelectorAll — ყველაზე მოქნილი
//   - getElementsByClassName / getElementsByTagName — live კოლექცია თუ გჭირდება
