"use strict";

// ========================================================
// თავი 17 — ჩელენჯები
// ========================================================
// შეავსეთ ფუნქციები. გახსენით ბრაუზერში და console-ში
// ნახეთ შედეგები. პასუხები: challenges.js
// ========================================================

// ─────────────────────────────────────────────────────────
// ჩელენჯი 1: addEventListener + removeEventListener
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია setupOneTimeClick, რომელიც იღებს element-ს
// და callback-ს. callback მხოლოდ ერთხელ უნდა გაეშვას,
// შემდეგ listener ავტომატურად წაიშალოს.
// ⚠️ { once: true } არ გამოიყენოთ — ხელით removeEventListener.
//
// მინიშნება: named function handler შექმენით, callback-ს გამოიძახეთ
// და removeEventListener-ით handler წაშალეთ.

function setupOneTimeClick(element, callback) {
  // TODO
}

console.log("--- ჩელენჯი 1 ---");
console.log("setupOneTimeClick — ბრაუზერში გატესტეთ");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 2: Keyboard Event
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია describeKey, რომელიც იღებს KeyboardEvent-ს
// და აბრუნებს სტრინგს: "Key: a | Code: KeyA | Shift: false"
//
// მინიშნება: e.key, e.code, e.shiftKey

function describeKey(e) {
  // TODO
}

console.log("\n--- ჩელენჯი 2 ---");
var fakeEvent = { key: "a", code: "KeyA", shiftKey: false };
console.log(describeKey(fakeEvent));
// "Key: a | Code: KeyA | Shift: false"

var fakeEvent2 = { key: "A", code: "KeyA", shiftKey: true };
console.log(describeKey(fakeEvent2));
// "Key: A | Code: KeyA | Shift: true"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 3: Dynamic Element Creation — Todo List
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია createTodoItem, რომელიც იღებს ტექსტს
// და აბრუნებს <li> ელემენტს, რომელსაც აქვს:
// - <span> ტექსტით
// - <button> "წაშლა" — click-ზე li-ს წაშლის (li.remove())
//
// მინიშნება: createElement, appendChild, addEventListener

function createTodoItem(text) {
  // TODO
}

console.log("\n--- ჩელენჯი 3 ---");
var todo = createTodoItem("სწავლა");
console.log(todo.outerHTML);
// <li><span>სწავლა</span><button>წაშლა</button></li>

// ─────────────────────────────────────────────────────────
// ჩელენჯი 4: classList.toggle — Dark Mode
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია toggleTheme, რომელიც:
// 1. body-ზე "dark" კლასს toggle-ს აკეთებს
// 2. აბრუნებს ახალ მდგომარეობას: "dark" ან "light"
//
// მინიშნება: classList.toggle(), classList.contains()

function toggleTheme() {
  // TODO
}

console.log("\n--- ჩელენჯი 4 ---");
console.log(toggleTheme()); // "dark"
console.log(toggleTheme()); // "light"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 5: Style Manipulation
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია applyStyles, რომელიც იღებს element-ს
// და styles ობიექტს, და ყველა სტილს ელემენტზე ადებს.
// მაგ: applyStyles(el, { color: "red", fontSize: "20px" })
//
// მინიშნება: for...in ციკლი, element.style[prop] = value

function applyStyles(element, styles) {
  // TODO
}

console.log("\n--- ჩელენჯი 5 ---");
var testDiv = document.createElement("div");
applyStyles(testDiv, {
  color: "red",
  fontSize: "20px",
  backgroundColor: "#f0f0f0",
});
console.log(testDiv.style.color); // "red"
console.log(testDiv.style.fontSize); // "20px"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 6: Promise — setTimeout-ით
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია waitAndReturn, რომელიც იღებს ms და value.
// ms მილიწამის შემდეგ value-ს resolve-ს აკეთებს.
//
// მინიშნება: new Promise(function(resolve) { setTimeout(function() { resolve(value); }, ms); })

function waitAndReturn(ms, value) {
  // TODO
}

console.log("\n--- ჩელენჯი 6 ---");
// waitAndReturn(1000, "გამარჯობა").then(function(result) { console.log(result); });
// "გამარჯობა" — 1 წამის შემდეგ

// ─────────────────────────────────────────────────────────
// ჩელენჯი 7: Promise Chaining
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია countdownPromise, რომელიც იღებს start რიცხვს
// და ჯაჭვური Promise-ებით 1 წამიანი ინტერვალით ითვლის
// start-იდან 0-მდე. ყოველ ნაბიჯზე console.log-ით ბეჭდავს.
// ბოლოს resolve-ს აკეთებს "დასრულდა!".
//
// მინიშნება: for ციკლი + chain = chain.then(...)
// IIFE (immediately invoked function expression) ან closure
// გამოიყენეთ ცვლადის "ჩაჭერისთვის"

function countdownPromise(start) {
  // TODO
}

console.log("\n--- ჩელენჯი 7 ---");
// countdownPromise(3).then(function(msg) { console.log(msg); });
// 3 → 2 → 1 → 0 → "დასრულდა!"
console.log("countdownPromise — კომენტარი მოხსენით გასატესტად");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 8: Promise.all
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია loadAllData, რომელიც იღებს URL-ების მასივს,
// ყველას პარალელურად fetch-ავს და აბრუნებს JSON მონაცემების მასივს.
//
// მინიშნება: urls.map(function(url) { return fetch(url).then(...) })
// → Promise.all(promises)

function loadAllData(urls) {
  // TODO
}

console.log("\n--- ჩელენჯი 8 ---");
// loadAllData([
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/users/2",
// ]).then(function(users) {
//   users.forEach(function(u) { console.log(u.name); });
// });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 9: fetch GET — მომხმარებლების ძებნა
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია findUserByName, რომელიც:
// 1. ჩატვირთავს ყველა მომხმარებელს JSONPlaceholder-იდან
// 2. მოძებნის მომხმარებელს სახელით (case-insensitive, .includes())
// 3. აბრუნებს ნაპოვნს ან null-ს
//
// მინიშნება: fetch → .json() → users.find(...)

function findUserByName(searchName) {
  // TODO
}

console.log("\n--- ჩელენჯი 9 ---");
// findUserByName("lean").then(function(user) {
//   console.log(user ? user.name : "ვერ მოიძებნა");
// });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 10: ყველაფერი ერთად — პოსტების რენდერი
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია renderPosts, რომელიც:
// 1. containerId-ით იპოვის კონტეინერ ელემენტს
// 2. "იტვირთება..." აჩვენებს
// 3. fetch-ით ჩატვირთავს პოსტებს (?_limit=5)
// 4. თითოეულისთვის შექმნის div.user-card (createElement)
//    — h3 სათაურით, p ტექსტით (პირველი 80 სიმბოლო)
// 5. card-ზე click listener: console.log("Post #id: title")
// 6. catch-ში შეცდომა აჩვენებს
//
// URL: "https://jsonplaceholder.typicode.com/posts?_limit=5"

function renderPosts(containerId) {
  // TODO
}

console.log("\n--- ჩელენჯი 10 ---");
// ბრაუზერში: renderPosts("fetch-output");
console.log("renderPosts — ბრაუზერში გატესტეთ");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 11: async/await — ძირითადი
// ─────────────────────────────────────────────────────────
// ქვემოთ მოცემულია loadUserThen — then/catch ვერსია.
// გადაწერეთ async/await სინტაქსით (loadUserAsync).
// try/catch გამოიყენეთ შეცდომის დასაჭერად.
//
// მინიშნება: async function, await fetch(...), await response.json()

function loadUserThen() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function (user) {
      return user.name;
    })
    .catch(function (error) {
      return "შეცდომა: " + error.message;
    });
}

async function loadUserAsync() {
  // TODO
}

console.log("\n--- ჩელენჯი 11 ---");
// loadUserAsync().then(function(name) { console.log(name); });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 12: async/await + Promise.all
// ─────────────────────────────────────────────────────────
// შექმენით async ფუნქცია getUserWithPosts, რომელიც:
// 1. პარალელურად ჩატვირთავს user-ს და მის პოსტებს (Promise.all + await)
// 2. აბრუნებს ობიექტს: { name, email, postCount }
//
// URLs:
//   users: "https://jsonplaceholder.typicode.com/users/" + userId
//   posts: "https://jsonplaceholder.typicode.com/posts?userId=" + userId
//
// მინიშნება: var results = await Promise.all([...])

async function getUserWithPosts(userId) {
  // TODO
}

console.log("\n--- ჩელენჯი 12 ---");
// getUserWithPosts(1).then(function(info) {
//   console.log(info.name + " — " + info.postCount + " პოსტი");
// });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 13: POST — ახალი პოსტის შექმნა
// ─────────────────────────────────────────────────────────
// შექმენით async ფუნქცია createPost, რომელიც:
// 1. იღებს title და body პარამეტრებს
// 2. POST მოთხოვნით აგზავნის JSONPlaceholder-ზე
// 3. აბრუნებს შექმნილ პოსტს (ობიექტი id-ით)
//
// მინიშნება: fetch(url, { method: "POST", headers: {...}, body: JSON.stringify({...}) })

async function createPost(title, body) {
  // TODO
}

console.log("\n--- ჩელენჯი 13 ---");
// createPost("ტესტი", "ტექსტი").then(function(post) {
//   console.log("ID:", post.id);
// });

// ─────────────────────────────────────────────────────────
// ჩელენჯი 14: PUT + DELETE
// ─────────────────────────────────────────────────────────
// შექმენით ორი async ფუნქცია:
// 1. updatePost(id, newTitle) — PUT მოთხოვნა, აბრუნებს განახლებულ ობიექტს
// 2. deletePost(id) — DELETE მოთხოვნა, აბრუნებს true/false
//
// მინიშნება:
//   PUT: fetch(url, { method: "PUT", headers: {...}, body: JSON.stringify({...}) })
//   DELETE: fetch(url, { method: "DELETE" })

async function updatePost(id, newTitle) {
  // TODO
}

async function deletePost(id) {
  // TODO
}

console.log("\n--- ჩელენჯი 14 ---");
// updatePost(1, "ახალი სათაური").then(function(post) { console.log(post); });
// deletePost(1).then(function(ok) { console.log(ok); });
