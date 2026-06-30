"use strict";

// ========================================================
// თავი 17 — Events, Promises & Fetch (Starter)
// ========================================================
// გახსენით კონსოლი (F12 → Console) რომ ნახოთ შედეგები.
// თითოეული TODO სექცია თანმიმდევრულად შეავსეთ.
// ========================================================

// ─── 1. addEventListener / removeEventListener ──────────
// counter-ზე click listener-ის ჩართვა/გამორთვა
//
// ცვლადები უკვე მზადაა:

let count = 0;
const counterEl = document.getElementById("counter");
const addListenerBtn = document.getElementById("add-listener-btn");
const removeListenerBtn = document.getElementById("remove-listener-btn");

// ეს ფუნქცია count-ს ზრდის და counterEl-ში აჩვენებს
function increment() {
  count++;
  counterEl.textContent = count;
}

// TODO: addListenerBtn-ზე click listener
// — counterEl-ზე დაამატეთ click → increment
// — counterEl-ს classList-ით დაამატეთ "active"
// — addListenerBtn.disabled = true, removeListenerBtn.disabled = false

// TODO: removeListenerBtn-ზე click listener
// — counterEl-ზე removeEventListener-ით წაშალეთ increment
// — counterEl-ს classList-ით წაშალეთ "active"
// — removeListenerBtn.disabled = true, addListenerBtn.disabled = false

// ─── 2. Keyboard Events ─────────────────────────────────
// კლავიატურის ღილაკის ინფორმაცია გამოაჩინეთ გვერდზე
//
// ელემენტები:

const keyValue = document.getElementById("key-value");
const codeValue = document.getElementById("code-value");
const modifierValue = document.getElementById("modifier-value");

// TODO: document-ზე keydown listener
// — keyValue.textContent = e.key
// — codeValue.textContent = e.code
// — modifierValue: Ctrl, Shift, Alt, Meta — ვინც ჩართულია, მათი ტექსტი

// ─── 3. Dynamic DOM & Style ─────────────────────────────

// --- Dark Mode ---
const toggleDarkBtn = document.getElementById("toggle-dark");

// TODO: toggleDarkBtn-ზე click listener
// — document.body.classList.toggle("dark")

// --- Hover Box ---
const hoverBox = document.getElementById("hover-box");

// TODO: hoverBox-ზე mouseover listener
// — background → "#c8e6c9", textContent → "კურსორი შიგნითაა!"

// TODO: hoverBox-ზე mouseout listener
// — background → "#ffcdd2", textContent → "მაუსი მოიტანეთ"

// --- Dynamic List ---
const addItemBtn = document.getElementById("add-item-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// TODO: addItemBtn-ზე click listener
// 1. itemInput.value.trim() — ცარიელი სტრინგისას return
// 2. createElement("li") — span ტექსტით + delete button
// 3. delete button-ზე click listener → li.remove()
// 4. li-ს appendChild-ით დაამატეთ span და button
// 5. itemList-ს appendChild-ით დაამატეთ li
// 6. itemInput.value = "" და .focus()

// TODO: itemInput-ზე keydown listener — Enter-ით დამატება
// — if (e.key === "Enter") addItemBtn.click()

// ─── 4. Promise ─────────────────────────────────────────

// delay ფუნქცია — ms მილიწამის შემდეგ resolve-ს აკეთებს
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

const promiseOutput = document.getElementById("promise-output");
const promiseBtn = document.getElementById("promise-btn");
const promiseAllBtn = document.getElementById("promise-all-btn");

// helper — promiseOutput-ში ტექსტის ხაზის დამატება
function appendLine(text) {
  var line = document.createElement("div");
  line.textContent = text;
  promiseOutput.appendChild(line);
}

// TODO: promiseBtn-ზე click listener — Promise chaining
// 1. promiseOutput.innerHTML = "" (გასუფთავება)
// 2. promiseBtn.disabled = true
// 3. appendLine("დაიწყო...")
// 4. delay(1000).then → appendLine("ნაბიჯი 1 ✔") → return delay(1000)
//    .then → appendLine("ნაბიჯი 2 ✔") → return delay(1000)
//    .then → appendLine("ნაბიჯი 3 ✔") + appendLine("დასრულდა!") + promiseBtn.disabled = false

// TODO: promiseAllBtn-ზე click listener — Promise.all
// 1. promiseOutput.innerHTML = "", promiseAllBtn.disabled = true
// 2. var start = Date.now()
// 3. p1 = delay(1000) → "ოპერაცია A", p2 = delay(2000) → "ოპერაცია B", p3 = delay(1500) → "ოპერაცია C"
// 4. Promise.all([p1, p2, p3]).then → თითოეული result-ისთვის appendLine
//    + elapsed = ((Date.now() - start) / 1000).toFixed(1)
//    + appendLine("ყველა დასრულდა " + elapsed + " წამში")

// ─── 5. Fetch API ───────────────────────────────────────

var fetchOutput = document.getElementById("fetch-output");
// fetch("https://jsonplaceholder.typicსსode.com/users")
//   .then(function (response) {
//     console.log(response); // Response ობიექტი
//     console.log(response.ok); // true (200-299)
//     console.log(response.status); // 200
//     return response.json(); // JSON → JS ობიექტი (ესეც Promise-ს აბრუნებს!)
//   })
//   .then(function (data) {
//     console.log(data); // მომხმარებლების მასივი
//   })
//   .catch(function (error) {
//     console.log("ქსელის შეცდომა:", error);
//   });
fetch("https://jsonplaceholder.typicode.com/users/999")
  .then(function (response) {
    if (!response.ok) {
      console.log(response);

      throw new Error("HTTP შეცდომა: " + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);

    console.log("შეცდომა:", error.message);
  });
// TODO: #load-users-btn click listener
// 1. fetchOutput.innerHTML = '<div class="loading">იტვირთება...</div>'
// 2. fetch("https://jsonplaceholder.typicode.com/users")
// 3. .then → if (!response.ok) throw new Error(...); return response.json()
// 4. .then → fetchOutput.innerHTML = ""; users.forEach → createElement card, appendChild
// 5. .catch → fetchOutput.innerHTML = '<div class="error">შეცდომა: ' + error.message + '</div>'

// TODO: #load-post-btn click listener
// 1. fetch("https://jsonplaceholder.typicode.com/posts/1")
// 2. response.ok შეამოწმეთ
// 3. პოსტის title და body აჩვენეთ card-ში

// TODO: #load-error-btn click listener — 404 ტესტი
// 1. fetch("https://jsonplaceholder.typicode.com/users/999")
// 2. response.ok → false იქნება (404)
// 3. throw new Error → catch-ში აჩვენეთ შეცდომა

// ─── 6. async/await ─────────────────────────────────────

var asyncOutput = document.getElementById("async-output");

// TODO: #async-users-btn click listener — async function!
// 1. asyncOutput.innerHTML = '<div class="loading">იტვირთება...</div>'
// 2. try { var response = await fetch("...users"); var users = await response.json(); }
// 3. users.forEach → card შექმნა, asyncOutput-ში დამატება
// 4. catch → შეცდომის ჩვენება

// TODO: #async-parallel-btn click listener — async function!
// 1. var results = await Promise.all([fetch(users), fetch(posts)])
// 2. results[0] = users, results[1] = posts
// 3. card-ში აჩვენეთ რაოდენობა და დრო

// ─── 7. POST / PUT / DELETE ─────────────────────────────

var crudOutput = document.getElementById("crud-output");

function crudLog(text) {
  var line = document.createElement("div");
  line.textContent = text;
  crudOutput.appendChild(line);
}

// TODO: #create-post-btn click listener — async function!
// 1. post-title და post-body input-ებიდან value წაიკითხეთ
// 2. fetch("https://jsonplaceholder.typicode.com/posts", {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify({ title, body, userId: 1 })
//    })
// 3. var newPost = await response.json()
// 4. crudLog("შეიქმნა! ID: " + newPost.id)

// TODO: #update-post-btn click listener — async function!
// 1. fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "PUT", ... })
// 2. crudLog("განახლდა!")

// TODO: #delete-post-btn click listener — async function!
// 1. fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" })
// 2. crudLog("წაიშალა!")
