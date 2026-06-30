"use strict";

// ========================================================
// თავი 16 — ჩელენჯები (პასუხებით)
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
  return {
    volume: config.volume ?? 50,
    brightness: config.brightness ?? 80,
    darkMode: config.darkMode ?? true,
    username: config.username ?? "Guest",
  };
}

// ტესტები:
console.log("--- ჩელენჯი 1 ---");
console.log(getConfig({ volume: 0, brightness: 100, darkMode: false, username: "" }));
// { volume: 0, brightness: 100, darkMode: false, username: "" }
// ↑ ყველა ვალიდურია — 0, false, "" არ უნდა შეიცვალოს

console.log(getConfig({ volume: null, darkMode: undefined }));
// { volume: 50, brightness: 80, darkMode: true, username: "Guest" }
// ↑ null და undefined default-ით შეიცვალა

console.log(getConfig({}));
// { volume: 50, brightness: 80, darkMode: true, username: "Guest" }

// ─────────────────────────────────────────────────────────
// ჩელენჯი 2: Optional Chaining
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია getUserCity, რომელიც იღებს user ობიექტს
// და აბრუნებს მის ქალაქს. თუ ნებისმიერი შუალედური
// თვისება არ არსებობს, დააბრუნეთ "ქალაქი უცნობია".
// გამოიყენეთ ?. და ??

function getUserCity(user) {
  return user?.address?.city ?? "ქალაქი უცნობია";
}

console.log("\n--- ჩელენჯი 2 ---");
console.log(getUserCity({ name: "ანა", address: { city: "თბილისი" } }));
// "თბილისი"
console.log(getUserCity({ name: "გიორგი" }));
// "ქალაქი უცნობია"
console.log(getUserCity(null));
// "ქალაქი უცნობია"
console.log(getUserCity({ name: "დავითი", address: {} }));
// "ქალაქი უცნობია"

// ─────────────────────────────────────────────────────────
// ჩელენჯი 3: Optional Chaining + Methods
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია callMethod, რომელიც იღებს ობიექტს და
// მეთოდის სახელს. თუ მეთოდი არსებობს, გამოიძახეთ და
// დააბრუნეთ შედეგი. თუ არ არსებობს, დააბრუნეთ "მეთოდი ვერ მოიძებნა".

function callMethod(obj, methodName) {
  return obj?.[methodName]?.() ?? "მეთოდი ვერ მოიძებნა";
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
// 1. იპოვეთ რამდენი უნიკალური სახელია
// 2. დააბრუნეთ უნიკალური სახელების დალაგებული მასივი

function getUniqueNames(names) {
  return [...new Set(names)].sort();
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
// ჩელენჯი 5: Set — საერთო ელემენტები (Intersection)
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია findCommon, რომელიც იღებს ორ მასივს
// და აბრუნებს მათ საერთო ელემენტებს (უნიკალურს).

function findCommon(arr1, arr2) {
  const set2 = new Set(arr2);
  return [...new Set(arr1)].filter(function (item) {
    return set2.has(item);
  });
}

console.log("\n--- ჩელენჯი 5 ---");
console.log(findCommon([1, 2, 3, 4, 2], [3, 4, 5, 6, 3])); // [3, 4]
console.log(findCommon(["ა", "ბ", "გ"], ["გ", "დ", "ა"])); // ["ა", "გ"]
console.log(findCommon([1, 2], [3, 4])); // []

// ─────────────────────────────────────────────────────────
// ჩელენჯი 6: Map — სიტყვების დათვლა
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია countWords, რომელიც იღებს სტრინგს
// და აბრუნებს Map-ს, სადაც key არის სიტყვა, value — რაოდენობა.

function countWords(text) {
  const words = text.toLowerCase().split(/\s+/);
  const wordMap = new Map();

  words.forEach(function (word) {
    wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
  });

  return wordMap;
}

console.log("\n--- ჩელენჯი 6 ---");
const result = countWords("the cat sat on the mat the cat");
console.log(result);
// Map(5) {"the" => 3, "cat" => 2, "sat" => 1, "on" => 1, "mat" => 1}
console.log(result.get("the")); // 3
console.log(result.get("cat")); // 2

// ─────────────────────────────────────────────────────────
// ჩელენჯი 7: Map — Object-თან კონვერტაცია
// ─────────────────────────────────────────────────────────
// 1. გადააკონვერტირეთ მოცემული Object Map-ად
// 2. Map-ზე დაამატეთ ახალი entry ("rating" → 4.9)
// 3. გადააკონვერტირეთ უკან Object-ად

console.log("\n--- ჩელენჯი 7 ---");

const shopObj = { name: "ტექნო", city: "თბილისი", employees: 25 };

const shopMap = new Map(Object.entries(shopObj));
shopMap.set("rating", 4.9);
const updatedObj = Object.fromEntries(shopMap);

console.log(shopMap);
// Map(4) {"name" => "ტექნო", "city" => "თბილისი", "employees" => 25, "rating" => 4.9}
console.log(updatedObj);
// { name: "ტექნო", city: "თბილისი", employees: 25, rating: 4.9 }

// ─────────────────────────────────────────────────────────
// ჩელენჯი 8: Map — Quiz
// ─────────────────────────────────────────────────────────
// შექმენით ფუნქცია runQuiz, რომელიც იღებს Map-ს
// (კითხვა → პასუხი) და პასუხების მასივს.
// დააბრუნეთ სწორი პასუხების რაოდენობა.

function runQuiz(questions, answers) {
  let correct = 0;
  let i = 0;

  for (const [, answer] of questions) {
    if (answers[i] === answer) correct++;
    i++;
  }

  return correct;
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
console.log("1. e.target — ელემენტი სადაც click მოხდა; e.currentTarget — ელემენტი სადაც listener-ია");
console.log("2. stopPropagation() აჩერებს event-ის bubbling-ს — მშობელ ელემენტებზე აღარ ადის");
console.log("3. Event Delegation — ერთი listener მშობელზე, ბევრი შვილის ნაცვლად. სასარგებლოა მეხსიერებისთვის და დინამიური ელემენტებისთვის");
console.log("4. defer — HTML-ის შემდეგ შესრულდება, თანმიმდევრობა დაცულია; async — ჩამოტვირთვისთანავე, თანმიმდევრობა არაა");
console.log("5. DOMContentLoaded — DOM მზადაა (სურათები ჯერ არა); load — ყველაფერი ჩატვირთულია");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 10: ყველაფერი ერთად
// ─────────────────────────────────────────────────────────
// მოცემულია მომხმარებლების მასივი. შექმენით ფუნქცია
// processUsers, რომელიც:
// 1. იღებს users მასივს
// 2. აბრუნებს Map-ს სადაც:
//    - key: უნიკალური ქალაქი
//    - value: იმ ქალაქის მომხმარებლების სახელების მასივი
// გამოიყენეთ ?. და ?? სადაც საჭიროა

function processUsers(users) {
  const cityMap = new Map();

  users.forEach(function (user) {
    const city = user?.address?.city ?? "უცნობი";
    const name = user?.name ?? "ანონიმი";

    if (!cityMap.has(city)) {
      cityMap.set(city, []);
    }
    cityMap.get(city).push(name);
  });

  return cityMap;
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
// Map(3) {
//   "თბილისი" => ["ანა", "მარიამი"],
//   "ბათუმი" => ["გიორგი"],
//   "უცნობი" => ["დავითი", "ნინო", "ანონიმი"]
// }

for (const [city, names] of cityGroups) {
  console.log(`${city}: ${names.join(", ")}`);
}
