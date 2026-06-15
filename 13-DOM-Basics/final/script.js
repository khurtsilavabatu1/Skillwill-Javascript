"use strict";

////////////////////////////////////
// 1. DOM-ის ცნება და DOM ხე
////////////////////////////////////

// DOM (Document Object Model) — ეს არის ბრაუზერის მიერ შექმნილი
// HTML დოკუმენტის ობიექტური წარმოდგენა. ბრაუზერი HTML-ს
// პარსავს და ქმნის ხისებურ სტრუქტურას (DOM Tree), სადაც
// ყოველი HTML ტეგი, ტექსტი და ატრიბუტი ცალკეული კვანძია (Node).
//
// DOM Tree-ს სტრუქტურა:
//   document
//     └── html (documentElement)
//           ├── head
//           │     ├── title
//           │     └── ...
//           └── body
//                 ├── div
//                 │     ├── h1 (ტექსტური კვანძი)
//                 │     └── p  (ტექსტური კვანძი)
//                 └── ...
//
// document — ეს არის DOM-ის entry point, მთავარი ობიექტი,
// რომლითაც ვწვდებით HTML-ის ნებისმიერ ელემენტს.

console.log(document); // მთელი DOM ხე
console.log(document.documentElement); // <html> ელემენტი
console.log(document.head); // <head> ელემენტი
console.log(document.body); // <body> ელემენტი
console.log(document.title); // გვერდის სათაური


////////////////////////////////////
// 2. getElementById
////////////////////////////////////

// document.getElementById('id') — ეძებს ელემენტს უნიკალური id-ით.
// აბრუნებს ერთ ელემენტს ან null-ს თუ ვერ იპოვა.
// ყველაზე სწრაფი DOM selection მეთოდია.

const greetingEl = document.getElementById("greeting-text");
console.log(greetingEl); // <p id="greeting-text">...</p>
console.log(greetingEl.textContent); // "Hello, welcome to DOM Basics!"

greetingEl.textContent = "Hello, DOM World!";

// --- Counter Demo ---
const counterDisplay = document.getElementById("counter-display");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");
const output1 = document.getElementById("output-1");

let count = 0;

btnIncrement.addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

btnDecrement.addEventListener("click", function () {
  if (count > 0) count--;
  counterDisplay.textContent = count;
});

btnReset.addEventListener("click", function () {
  count = 0;
  counterDisplay.textContent = count;
});

output1.innerHTML =
  "<strong>getElementById</strong> — ელემენტს ეძებს <em>id</em> ატრიბუტით";

// getElementById არ არსებული id-სთვის null-ს აბრუნებს
const nonExistent = document.getElementById("does-not-exist");
console.log(nonExistent); // null


////////////////////////////////////
// 3. querySelector
////////////////////////////////////

// document.querySelector(selector) — CSS სელექტორით ეძებს
// პირველ ემთხვევას. შეუძლია: #id, .class, tag, [attr],
// კომბინირებული სელექტორები (div.class, ul > li, და ა.შ.)
// აბრუნებს ერთ ელემენტს ან null-ს.

// --- კლასით ---
const profileName = document.querySelector(".profile-name");
console.log(profileName.textContent); // "Nino Beridze"
profileName.textContent = "Giorgi Lomidze";

const profileRole = document.querySelector(".profile-role");
profileRole.textContent = "Full Stack Developer";

// --- id-ით ---
const avatar = document.querySelector("#avatar");
avatar.textContent = "G";
avatar.style.background = "#1e88e5";

// --- კომბინირებული სელექტორი ---
const profileEmail = document.querySelector(".profile-info .profile-email");
console.log(profileEmail.textContent); // "nino@example.com"

// --- Update Profile Button ---
const btnUpdateProfile = document.getElementById("btn-update-profile");
btnUpdateProfile.addEventListener("click", function () {
  document.querySelector(".profile-email").textContent = "giorgi@skillwill.ge";
});

// --- Highlight Info Button ---
const btnHighlightInfo = document.getElementById("btn-highlight-info");
btnHighlightInfo.addEventListener("click", function () {
  const profileInfo = document.querySelector(".profile-info");
  profileInfo.style.background = "#fff9c4";
  profileInfo.style.padding = "10px";
  profileInfo.style.borderRadius = "8px";
});


////////////////////////////////////
// 4. querySelectorAll
////////////////////////////////////

// document.querySelectorAll(selector) — CSS სელექტორით ეძებს
// ყველა ემთხვევას. აბრუნებს NodeList-ს (მასივის მსგავსს).
// NodeList-ზე მუშაობს forEach, length, ინდექსით წვდომა.
// ცარიელ NodeList-ს აბრუნებს თუ ვერაფერი იპოვა (არა null-ს).

const allTasks = document.querySelectorAll(".task-item");
console.log("Total tasks:", allTasks.length); // 5
console.log(allTasks); // NodeList(5) [li, li, li, li, li]

// forEach-ით გადავლა
allTasks.forEach(function (task, index) {
  console.log(`Task ${index + 1}:`, task.textContent.trim());
});

// --- Count Tasks Button ---
const output2 = document.getElementById("output-2");
document.getElementById("btn-count-tasks").addEventListener("click", function () {
  const tasks = document.querySelectorAll(".task-item");
  output2.textContent = `Total tasks: ${tasks.length}`;
});

// --- Complete First Button ---
document.getElementById("btn-complete-first").addEventListener("click", function () {
  const firstTask = document.querySelector(".task-item");
  if (firstTask) {
    firstTask.classList.add("completed");
  }
});

// --- Highlight High Priority Button ---
document.getElementById("btn-highlight-high").addEventListener("click", function () {
  const highPriority = document.querySelectorAll(".priority-high");
  for (let i = 0; i < highPriority.length; i++) {
    highPriority[i].parentElement.style.background = "#fff3e0";
  }
});


////////////////////////////////////
// 5. getElementsByClassName
////////////////////////////////////

// document.getElementsByClassName('class') — კლასის სახელით
// ეძებს ელემენტებს. აბრუნებს HTMLCollection-ს (ცოცხალ კოლექციას).
//
// HTMLCollection vs NodeList:
//   - HTMLCollection არის "live" — DOM-ის ცვლილებისას ავტომატურად განახლდება
//   - NodeList (querySelectorAll-დან) არის "static" — არ განახლდება
//   - HTMLCollection-ზე forEach არ მუშაობს (for ციკლი გამოიყენეთ)

const colorBoxes = document.getElementsByClassName("color-box");
console.log("Color boxes:", colorBoxes.length); // 8
console.log(colorBoxes); // HTMLCollection(8) [div, div, ...]

const output3 = document.getElementById("output-3");

// --- Count Boxes Button ---
document.getElementById("btn-count-boxes").addEventListener("click", function () {
  const boxes = document.getElementsByClassName("color-box");
  output3.textContent = `Total color boxes: ${boxes.length}`;
});

// --- Fade & Restore Buttons ---
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
// 6. getElementsByTagName
////////////////////////////////////

// document.getElementsByTagName('tag') — ტეგის სახელით
// ეძებს ელემენტებს. აბრუნებს HTMLCollection-ს.
// შეიძლება გამოიძახოთ კონკრეტულ ელემენტზეც, არა მხოლოდ document-ზე.

// --- ლინკების სელექცია ნავიგაციაში ---
const mainNav = document.getElementById("main-nav");
const navLinks = mainNav.getElementsByTagName("a");
console.log("Nav links:", navLinks.length); // 4

// --- Count Links Button ---
document.getElementById("btn-count-links").addEventListener("click", function () {
  const nav = document.getElementById("main-nav");
  const links = nav.getElementsByTagName("a");
  output3.textContent = `Navigation links: ${links.length}`;
});

// --- Uppercase Links Button ---
document.getElementById("btn-uppercase-links").addEventListener("click", function () {
  const nav = document.getElementById("main-nav");
  const links = nav.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].textContent = links[i].textContent.toUpperCase();
  }
});

// --- ცხრილის რიგების სელექცია ---
const studentTable = document.getElementById("student-table");
const allRows = studentTable.getElementsByTagName("tr");
console.log("All rows (with header):", allRows.length); // 5

// tbody-ს რიგები ცალკე
const tbody = studentTable.getElementsByTagName("tbody")[0];
const dataRows = tbody.getElementsByTagName("tr");
console.log("Data rows:", dataRows.length); // 4

// --- Count Rows Button ---
document.getElementById("btn-count-rows").addEventListener("click", function () {
  const table = document.getElementById("student-table");
  const tb = table.getElementsByTagName("tbody")[0];
  const rows = tb.getElementsByTagName("tr");
  output3.textContent = `Data rows in table: ${rows.length}`;
});

// --- Highlight Top Students Button ---
document.getElementById("btn-highlight-top").addEventListener("click", function () {
  const table = document.getElementById("student-table");
  const tb = table.getElementsByTagName("tbody")[0];
  const rows = tb.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    const grade = Number(cells[1].textContent);
    if (grade >= 90) {
      rows[i].style.background = "#e8f5e9";
    }
  }
});


////////////////////////////////////
// 7. innerHTML vs textContent
////////////////////////////////////

// innerHTML — ელემენტის HTML კონტენტი სტრინგად (HTML ტეგების ჩათვლით).
//   კითხვისას: აბრუნებს HTML-ს
//   ჩაწერისას: პარსავს HTML-ს და რენდერავს
//   გამოყენება: დინამიური HTML-ის შექმნა
//   საფრთხე: XSS — არასანდო მონაცემებს არ ჩასვათ innerHTML-ით!
//
// textContent — ელემენტის მხოლოდ ტექსტური კონტენტი (HTML ტეგების გარეშე).
//   კითხვისას: აბრუნებს მხოლოდ ტექსტს (ტეგების გარეშე)
//   ჩაწერისას: ტეგებს ტექსტად აჩვენებს, არ პარსავს
//   გამოყენება: უსაფრთხო ტექსტის ჩასმა

const contentArea = document.getElementById("content-area");
const output4 = document.getElementById("output-4");

// --- Show innerHTML ---
document.getElementById("btn-show-inner").addEventListener("click", function () {
  output4.textContent = "innerHTML: " + contentArea.innerHTML;
});

// --- Show textContent ---
document.getElementById("btn-show-text").addEventListener("click", function () {
  output4.textContent = "textContent: " + contentArea.textContent;
});

// --- Set innerHTML ---
document.getElementById("btn-set-inner").addEventListener("click", function () {
  contentArea.innerHTML =
    "<h3 style='color: #3949ab'>Updated!</h3><p>This was set with <code>innerHTML</code></p>";
});

// --- Set textContent ---
document.getElementById("btn-set-text").addEventListener("click", function () {
  contentArea.textContent =
    "This was set with textContent — HTML tags won't render here";
});


////////////////////////////////////
// 8. style თვისება
////////////////////////////////////

// element.style — inline CSS-ის წაკითხვა/ჩაწერა.
// CSS property-ის სახელი camelCase-ით იწერება:
//   background-color → style.backgroundColor
//   font-size → style.fontSize
//   border-radius → style.borderRadius
//
// element.style.cssText — მთელი inline style სტრინგად.
// style.cssText = '' — ყველა inline style-ის წაშლა.

const styleTarget = document.getElementById("style-target");

document.getElementById("btn-style-color").addEventListener("click", function () {
  styleTarget.style.color = "#e53935";
});

document.getElementById("btn-style-bg").addEventListener("click", function () {
  styleTarget.style.backgroundColor = "#1a237e";
  styleTarget.style.color = "#fff";
});

document.getElementById("btn-style-size").addEventListener("click", function () {
  styleTarget.style.fontSize = "2rem";
});

document.getElementById("btn-style-reset").addEventListener("click", function () {
  styleTarget.style.cssText = "";
});

// --- getComputedStyle ---
// element.style მხოლოდ inline style-ს კითხულობს.
// CSS ფაილის ან <style> ტეგის სტილების წასაკითხად გამოიყენეთ:
const computedStyle = getComputedStyle(styleTarget);
console.log("Computed font-size:", computedStyle.fontSize);
console.log("Computed background:", computedStyle.backgroundColor);


////////////////////////////////////
// 9. innerHTML-ით დინამიური კონტენტი
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

document.getElementById("btn-add-info").addEventListener("click", function () {
  notificationArea.innerHTML +=
    '<div class="notification info">Here is some useful information.</div>';
});

document.getElementById("btn-clear-notifications").addEventListener("click", function () {
  notificationArea.innerHTML = "";
});


////////////////////////////////////
// 10. სელექტორების შედარება — შეჯამება
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
//   - querySelector / querySelectorAll — ყველაზე მოქნილი, CSS სელექტორები
//   - getElementsByClassName / getElementsByTagName — live კოლექცია თუ გჭირდება
