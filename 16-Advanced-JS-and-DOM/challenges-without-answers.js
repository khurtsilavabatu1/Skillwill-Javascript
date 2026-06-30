"use strict";

// ========================================================
// თავი 16 — ჩელენჯები
// ========================================================
// შეავსეთ ფუნქციები. გახსენით ბრაუზერში და console-ში
// ნახეთ შედეგები. პასუხები: challenges.js
// ========================================================

// ─────────────────────────────────────────────────────────
// ჩელენჯი 1: ?? და || შედარება
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია getConfig, რომელიც იღებს config ობიექტს
// და აბრუნებს ობიექტს default მნიშვნელობებით.
// გამოიყენეთ ?? (არა ||), რომ 0, "", false ვალიდური დარჩეს.
//
// defaults: { volume: 50, brightness: 80, darkMode: true, username: "Guest" }

function getConfig(config) {
  // TODO
}

console.log("--- ჩელენჯი 1 ---");
console.log(getConfig({ volume: 0, brightness: 100, darkMode: false, username: "" }));
// უნდა იყოს: { volume: 0, brightness: 100, darkMode: false, username: "" }

console.log(getConfig({ volume: null, darkMode: undefined }));
// უნდა იყოს: { volume: 50, brightness: 80, darkMode: true, username: "Guest" }

console.log(getConfig({}));
// უნდა იყოს: { volume: 50, brightness: 80, darkMode: true, username: "Guest" }

// ─────────────────────────────────────────────────────────
// ჩელენჯი 2: Optional Chaining
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია getUserCity, რომელიც იღებს user ობიექტს
// და აბრუნებს მის ქალაქს. თუ ნებისმიერი შუალედური
// თვისება არ არსებობს, დააბრუნეთ "ქალაქი უცნობია".
// გამოიყენეთ ?. და ??

function getUserCity(user) {
  // TODO
}

console.log("\n--- ჩელენჯი 2 ---");
console.log(getUserCity({ name: "ანა", address: { city: "თბილისი" } })); // "თბილისი"
console.log(getUserCity({ name: "გიორგი" })); // "ქალაქი უცნობია"
console.log(getUserCity(null)); // "ქალაქი უცნობია"
console.log(getUserCity({ name: "დავითი", address: {} })); // "ქალაქი უცნობია"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 3: Optional Chaining + Methods
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია callMethod, რომელიც იღებს ობიექტს და
// მეთოდის სახელს. თუ მეთოდი არსებობს, გამოიძახეთ და
// დააბრუნეთ შედეგი. თუ არ არსებობს, დააბრუნეთ
// "მეთოდი ვერ მოიძებნა".
//
// მინიშნება: obj?.[methodName]?.()

function callMethod(obj, methodName) {
  // TODO
}

console.log("\n--- ჩელენჯი 3 ---");
const calculator = {
  getRandom() {
    return Math.floor(Math.random() * 100);
  },
  getZero() {
    return 0;
  },
};
console.log(callMethod(calculator, "getRandom")); // რიცხვი 0-100
console.log(callMethod(calculator, "multiply")); // "მეთოდი ვერ მოიძებნა"
console.log(callMethod(null, "test")); // "მეთოდი ვერ მოიძებნა"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 4: Set — უნიკალური მნიშვნელობები
// ─────────────────────────────────────────────────────────
// მოცემულია მასივი თანამშრომლების სახელებით.
// დააბრუნეთ უნიკალური სახელების ანბანურად დალაგებული მასივი.
//
// მინიშნება: new Set() → spread → .sort()

function getUniqueNames(names) {
  // TODO
}

console.log("\n--- ჩელენჯი 4 ---");
const employees = [
  "ანა",
  "გიორგი",
  "ანა",
  "მარიამი",
  "გიორგი",
  "დავითი",
  "ანა",
];
console.log(getUniqueNames(employees));
// ["ანა", "გიორგი", "დავითი", "მარიამი"]
console.log("უნიკალური:", new Set(employees).size); // 4

// ─────────────────────────────────────────────────────────
// ჩელენჯი 5: Set — საერთო ელემენტები
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია findCommon, რომელიც იღებს ორ მასივს
// და აბრუნებს მათ საერთო უნიკალურ ელემენტებს.
//
// მინიშნება: ერთი მასივი Set-ად, მეორეზე filter + .has()

function findCommon(arr1, arr2) {
  // TODO
}

console.log("\n--- ჩელენჯი 5 ---");
console.log(findCommon([1, 2, 3, 4, 2], [3, 4, 5, 6, 3])); // [3, 4]
console.log(findCommon(["ა", "ბ", "გ"], ["გ", "დ", "ა"])); // ["ა", "გ"]
console.log(findCommon([1, 2], [3, 4])); // []

// ─────────────────────────────────────────────────────────
// ჩელენჯი 6: Map — სიტყვების დათვლა
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია countWords, რომელიც იღებს სტრინგს
// და აბრუნებს Map-ს: key = სიტყვა, value = რაოდენობა.
//
// მინიშნება: split(/\s+/), map.get(word) ?? 0

function countWords(text) {
  // TODO
}

console.log("\n--- ჩელენჯი 6 ---");
const result = countWords("the cat sat on the mat the cat");
console.log(result);
// Map {"the" => 3, "cat" => 2, "sat" => 1, "on" => 1, "mat" => 1}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 7: Map — Object კონვერტაცია
// ─────────────────────────────────────────────────────────
// 1. shopObj გადააკონვერტირეთ Map-ად
// 2. Map-ზე დაამატეთ "rating" → 4.9
// 3. გადააკონვერტირეთ უკან Object-ად
//
// მინიშნება: Object.entries(), Object.fromEntries()

console.log("\n--- ჩელენჯი 7 ---");

const shopObj = { name: "ტექნო", city: "თბილისი", employees: 25 };

// TODO: const shopMap = ...
// TODO: shopMap.set(...)
// TODO: const updatedObj = ...

// console.log(shopMap);
// console.log(updatedObj);

// ─────────────────────────────────────────────────────────
// ჩელენჯი 8: Map — Quiz
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია runQuiz, რომელიც იღებს Map-ს
// (კითხვა → პასუხი) და პასუხების მასივს.
// დააბრუნეთ სწორი პასუხების რაოდენობა.

function runQuiz(questions, answers) {
  // TODO
}

console.log("\n--- ჩელენჯი 8 ---");
const quizQuestions = new Map([
  ["2 + 2 = ?", "4"],
  ["JS-ის წელი?", "1995"],
  ["typeof null?", "object"],
]);
console.log(runQuiz(quizQuestions, ["4", "1995", "object"])); // 3
console.log(runQuiz(quizQuestions, ["4", "2000", "null"])); // 1

// ─────────────────────────────────────────────────────────
// ჩელენჯი 9: Event Propagation — თეორია
// ─────────────────────────────────────────────────────────
// უპასუხეთ შეკითხვებს console.log-ით:
//
// 1. რა განსხვავებაა e.target და e.currentTarget-ს შორის?
// 2. რას აკეთებს e.stopPropagation()?
// 3. რა არის Event Delegation და რატომ არის სასარგებლო?
// 4. რა განსხვავებაა defer და async-ს შორის?
// 5. DOMContentLoaded vs load — რა განსხვავებაა?

console.log("\n--- ჩელენჯი 9 ---");
// console.log("1. ...");
// console.log("2. ...");
// console.log("3. ...");
// console.log("4. ...");
// console.log("5. ...");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 10: ყველაფერი ერთად
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია processUsers, რომელიც:
// 1. იღებს users მასივს
// 2. აბრუნებს Map-ს სადაც:
//    - key: უნიკალური ქალაქი
//    - value: იმ ქალაქის მომხმარებლების სახელების მასივი
// გამოიყენეთ ?. და ?? სადაც საჭიროა
// თუ address ან city არ არსებობს → ქალაქი = "უცნობი"
// თუ user null-ია → სახელი = "ანონიმი"

function processUsers(users) {
  // TODO
}

console.log("\n--- ჩელენჯი 10 ---");
const usersData = [
  { name: "ანა", address: { city: "თბილისი" } },
  { name: "გიორგი", address: { city: "ბათუმი" } },
  { name: "მარიამი", address: { city: "თბილისი" } },
  { name: "დავითი" },
  { name: "ნინო", address: {} },
  null,
];

const cityGroups = processUsers(usersData);
console.log(cityGroups);
// Map {
//   "თბილისი" => ["ანა", "მარიამი"],
//   "ბათუმი" => ["გიორგი"],
//   "უცნობი" => ["დავითი", "ნინო", "ანონიმი"]
// }
