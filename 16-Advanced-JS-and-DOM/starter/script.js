"use strict";

// ========================================================
// თავი 16 — Advanced JS & DOM (Starter)
// ========================================================
// გახსენით კონსოლი (F12 → Console) რომ ნახოთ შედეგები.
// თითოეული სექცია თანმიმდევრულად შეავსეთ.
// ========================================================

// ─── 1. Nullish Coalescing Operator (??) ─────────────────
// ?? მხოლოდ null და undefined-ზე რეაგირებს
// || ყველა falsy მნიშვნელობაზე რეაგირებს (0, "", false, null, undefined)

console.log("--- ?? ოპერატორი ---");

const userSettings = {
  theme: null,
  fontSize: 0,
  notifications: false,
  language: undefined,
};

// TODO: console.log-ით შეადარეთ || და ?? ოპერატორები
// userSettings.fontSize-ზე, userSettings.notifications-ზე, userSettings.theme-ზე

// ─── 2. Optional Chaining (?.) ───────────────────────────
// ?. ამოწმებს null/undefined-ს TypeError-ის ნაცვლად

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

// TODO: optional chaining-ით წაიკითხეთ:
// - restaurant.address?.city
console.log(restaurant.address.city);
console.log(restaurant.menu?.appetizers);
console.log(restaurant.openingHours?.sun?.open);

// - restaurant.menu?.appetizers (არ არსებობს)
// - restaurant.openingHours?.sun?.open (არ არსებობს)
// - restaurant.order?.("ხინკალი")
// - restaurant.deliver?.() (არ არსებობს)

// TODO: ?? და ?. ერთად — შაბათის საათების წაკითხვა, default: "დაკეტილია"

// ─── 3. Sets ─────────────────────────────────────────────
// Set — მხოლოდ უნიკალური მნიშვნელობების კოლექცია

console.log("\n--- Sets ---");

const ordersArr = ["პიცა", "ბურგერი", "პიცა", "სუშირა", "ბურგერი", "პიცა"];

// TODO: შექმენით Set ordersArr-იდან და დაბეჭდეთ

// TODO: გამოიყენეთ .size, .has(), .add(), .delete()

// TODO: Set → Array კონვერტაცია spread ოპერატორით

// TODO: for...of ციკლით გაიარეთ Set-ის ელემენტები

// ─── 4. Maps: საფუძვლები ─────────────────────────────────
// Map — key-value წყვილები, სადაც key ნებისმიერი ტიპისაა

console.log("\n--- Maps ---");

// TODO: შექმენით menu Map .set() მეთოდით:
// "პიცა" → 15, "ბურგერი" → 12, "სალათი" → 8

// TODO: გამოიყენეთ .get(), .has(), .size, .delete()

// TODO: method chaining-ით შექმენით ახალი Map

// TODO: მასივებით შექმნა:
// new Map([["key1", "val1"], ["key2", "val2"]])

// ─── 5. Maps: იტერაცია ───────────────────────────────────

console.log("\n--- Maps: იტერაცია ---");

// TODO: for...of + destructuring-ით გაიარეთ Map

// TODO: [...map.keys()] და [...map.values()]

// TODO: Object → Map: new Map(Object.entries(obj))

// TODO: Map → Object: Object.fromEntries(map)

// ─── 6-7. Event Propagation & Delegation ─────────────────

console.log("\n--- Event Propagation ---");

const propagationLog = document.getElementById("propagation-log");

function logEvent(name, color) {
  const line = document.createElement("div");
  line.classList.add("log-line");
  line.textContent = `→ ${name} (${color}) გაეშვა`;
  propagationLog.appendChild(line);
  propagationLog.scrollTop = propagationLog.scrollHeight;
}

// TODO: დაამატეთ click listener #outer, #inner, #deep-btn ელემენტებზე
// თითოეულში logEvent() გამოიძახეთ
// ღილაკზე click-ისას ლოგში სამივე უნდა გამოჩნდეს (bubbling!)

// TODO: clear ღილაკი
// document.getElementById("clear-propagation-log").addEventListener(...)
// propagationLog.textContent = ""
// არ დაგავიწყდეთ e.stopPropagation()!

// ─── Event Delegation — ნავიგაცია ────────────────────────
// TODO: #main-nav-ზე ერთი click listener
// e.target.closest(".nav-link") - იპოვეთ კლიკნილი ლინკი
// ყველა ლინკს active წაართვით, კლიკნილს დაამატეთ
// #nav-output-ში აჩვენეთ აქტიური გვერდი

// ─── Event Delegation — Tabs ─────────────────────────────
// TODO: #tabs-container-ზე ერთი click listener
// e.target.closest(".tab-btn") - იპოვეთ კლიკნილი ტაბი
// ყველა ტაბს და content-ს active წაართვით
// კლიკნილ ტაბსა და შესაბამის content-ს დაამატეთ

// ─── 8. Lifecycle DOM Events ─────────────────────────────

// TODO: document.addEventListener("DOMContentLoaded", ...)
// TODO: window.addEventListener("load", ...)
