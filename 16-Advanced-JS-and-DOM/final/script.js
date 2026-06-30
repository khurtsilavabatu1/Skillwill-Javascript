"use strict";

// ========================================================
// თავი 16 — Advanced JS & DOM
// ========================================================

// ─── 1. Nullish Coalescing Operator (??) ─────────────────

console.log("--- ?? ოპერატორი ---");

const userSettings = {
  theme: null,
  fontSize: 0,
  notifications: false,
  language: undefined,
  volume: "",
};

// || — ყველა falsy მნიშვნელობას ანაცვლებს
console.log(userSettings.fontSize || 16); // 16 — არასწორი! 0 ვალიდურია
console.log(userSettings.notifications || true); // true — არასწორი!
console.log(userSettings.volume || 50); // 50 — არასწორი! "" ვალიდურია

// ?? — მხოლოდ null/undefined-ს ანაცვლებს
console.log(userSettings.fontSize ?? 16); // 0 — სწორი!
console.log(userSettings.notifications ?? true); // false — სწორი!
console.log(userSettings.volume ?? 50); // "" — სწორი!
console.log(userSettings.theme ?? "light"); // "light" — null → default
console.log(userSettings.language ?? "ka"); // "ka" — undefined → default

// ─── 2. Optional Chaining (?.) ───────────────────────────

console.log("\n--- ?. ოპერატორი ---");

const restaurant = {
  name: "კახეთის კარი",
  address: {
    city: "თბილისი",
    street: "აღმაშენებლის 15",
  },
  openingHours: {
    mon: { open: 9, close: 22 },
    fri: { open: 10, close: 23 },
  },
  order(dish) {
    return `${dish} მზადდება...`;
  },
};

// ობიექტის თვისებებზე
console.log(restaurant.address?.city); // "თბილისი"
console.log(restaurant.address?.zip); // undefined
console.log(restaurant.menu?.appetizers); // undefined (არა TypeError)

// ჩალაგებული
console.log(restaurant.openingHours?.mon?.open); // 9
console.log(restaurant.openingHours?.sun?.open); // undefined

// მეთოდებზე
console.log(restaurant.order?.("ხინკალი")); // "ხინკალი მზადდება..."
console.log(restaurant.deliver?.()); // undefined

// მასივებზე
const users = [{ name: "ანა", email: "ana@mail.com" }];
console.log(users[0]?.email); // "ana@mail.com"
console.log(users[5]?.email); // undefined

// ?? და ?. ერთად
const weekday = "sun";
const hours = restaurant.openingHours?.[weekday]?.open ?? "დღეს დაკეტილია";
console.log(hours); // "დღეს დაკეტილია"

// ─── 3. Sets ─────────────────────────────────────────────

console.log("\n--- Sets ---");

const ordersArr = ["პიცა", "ბურგერი", "პიცა", "სუშირა", "ბურგერი", "პიცა"];
const uniqueOrders = new Set(ordersArr);
console.log(uniqueOrders); // Set(3) {"პიცა", "ბურგერი", "სუშირა"}
console.log(uniqueOrders.size); // 3

// მეთოდები
uniqueOrders.add("ხინკალი");
uniqueOrders.add("პიცა"); // დუბლიკატი — არაფერი ხდება
console.log(uniqueOrders.has("ხინკალი")); // true
console.log(uniqueOrders.has("ტაკო")); // false

uniqueOrders.delete("სუშირა");
console.log(uniqueOrders.size); // 3

// Set → Array
const uniqueArray = [...uniqueOrders];
console.log(uniqueArray); // ["პიცა", "ბურგერი", "ხინკალი"]

// პრაქტიკული: უნიკალური სიმბოლოების დათვლა
console.log(new Set("abracadabra").size); // 5

// იტერაცია
for (const item of uniqueOrders) {
  console.log("Set item:", item);
}

// ─── 4. Maps: საფუძვლები ─────────────────────────────────

console.log("\n--- Maps: საფუძვლები ---");

const menu = new Map();
menu.set("პიცა", 15);
menu.set("ბურგერი", 12);
menu.set("სალათი", 8);
menu.set(true, "გახსნილია");
menu.set(false, "დაკეტილია");
menu.set(1, "პირველი ელემენტი");

console.log(menu.get("პიცა")); // 15
console.log(menu.get(true)); // "გახსნილია"
console.log(menu.has("სალათი")); // true
console.log(menu.size); // 6

menu.delete(1);
console.log(menu.size); // 5
console.log(menu);

// method chaining
const info = new Map()
  .set("name", "კახეთის კარი")
  .set("city", "თბილისი")
  .set("rating", 4.8);

console.log(info.get("rating")); // 4.8

// მასივებით შექმნა
const schedule = new Map([
  ["ორშაბათი", "09:00 - 22:00"],
  ["პარასკევი", "10:00 - 23:00"],
  ["შაბათი", "11:00 - 24:00"],
]);

// ─── 5. Maps: იტერაცია ───────────────────────────────────

console.log("\n--- Maps: იტერაცია ---");

// for...of + destructuring
for (const [day, time] of schedule) {
  console.log(`${day}: ${time}`);
}

// keys, values
console.log([...schedule.keys()]); // ["ორშაბათი", "პარასკევი", "შაბათი"]
console.log([...schedule.values()]);

// Object → Map
const obj = { a: 1, b: 2, c: 3 };
const mapFromObj = new Map(Object.entries(obj));
console.log(mapFromObj); // Map(3) {"a" => 1, "b" => 2, "c" => 3}

// Map → Object
const backToObj = Object.fromEntries(mapFromObj);
console.log(backToObj); // { a: 1, b: 2, c: 3 }

// Quiz მაგალითი (console-ში)
const quiz = new Map([
  ["2 + 2 = ?", "4"],
  ["JavaScript-ის შემქმნელი?", "Brendan Eich"],
  ["JS-ის წელი?", "1995"],
]);

console.log("Quiz კითხვები:");
for (const [question] of quiz) {
  console.log(" ", question);
}

// ─── 6-7. Event Propagation — Bubbling & Delegation ──────

console.log("\n--- Event Propagation ---");

const propagationLog = document.getElementById("propagation-log");

function logEvent(name, color) {
  const line = document.createElement("div");
  line.classList.add("log-line");
  line.textContent = `→ ${name} (${color}) გაეშვა`;
  propagationLog.appendChild(line);
  propagationLog.scrollTop = propagationLog.scrollHeight;
}

// Bubbling demo — სამივე ელემენტი ისმენს click-ს
document.getElementById("outer").addEventListener("click", function (e) {
  console.log(
    "outer — target:",
    e.target.tagName,
    "currentTarget:",
    e.currentTarget.id,
  );
});

document.getElementById("inner").addEventListener("click", function (e) {
  console.log(
    "inner — target:",
    e.target.tagName,
    "currentTarget:",
    e.currentTarget.id,
  );
});

document.getElementById("deep-btn").addEventListener("click", function (e) {
  console.log(
    "button — target:",
    e.target.tagName,
    "currentTarget:",
    e.currentTarget.id,
  );
});

document
  .getElementById("clear-propagation-log")
  .addEventListener("click", function (e) {
    e.stopPropagation();
    propagationLog.textContent = "";
  });

// ─── Event Delegation — ნავიგაცია ────────────────────────

const mainNav = document.getElementById("main-nav");
const navOutput = document.getElementById("nav-output");
const navLinks = document.querySelectorAll(".nav-link");

mainNav.addEventListener("click", function (e) {
  const link = e.target.closest(".nav-link");
  if (!link) return;

  navLinks.forEach(function (l) {
    l.classList.remove("active");
  });
  link.classList.add("active");

  navOutput.innerHTML =
    "აქტიური გვერდი: <strong>" + link.dataset.page + "</strong>";
});

// ─── Event Delegation — Tabs ─────────────────────────────

const tabsContainer = document.getElementById("tabs-container");
const allTabs = document.querySelectorAll(".tab-btn");
const allContents = document.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");
  if (!clicked) return;

  allTabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  allContents.forEach(function (content) {
    content.classList.remove("active");
  });

  clicked.classList.add("active");
  document
    .getElementById("content-" + clicked.dataset.tab)
    .classList.add("active");
});

// ─── 8. Lifecycle DOM Events ─────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded — DOM მზადაა!");
});

window.addEventListener("load", function () {
  console.log("load — ყველაფერი (სურათები, CSS...) ჩატვირთულია!");
});

// beforeunload — მხოლოდ საჩვენებლად (კომენტარშია, რომ ყოველ გადატვირთვაზე არ აჩვენოს)
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
// });

// ─── 9. defer/async — აღწერილია HTML ფაილში ──────────────
// ამ ფაილის <script> ტეგს defer ატრიბუტი აქვს:
// <script defer src="script.js"></script>
//
// ეს ნიშნავს:
// 1. JS ჩამოიტვირთება HTML პარსინგის პარალელურად
// 2. JS შესრულდება HTML პარსინგის დასრულების შემდეგ
// 3. სკრიპტების თანმიმდევრობა დაცულია
