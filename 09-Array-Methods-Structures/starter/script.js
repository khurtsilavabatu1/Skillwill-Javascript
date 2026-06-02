"use strict";
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);
console.log(combined);
const arr3 = [7, 8, 9];

const all = arr1.concat(arr2, arr3);
console.log(all);

const combined2 = [1, 2, 3, ...arr2, ...arr3];

// Spread — expands an array into individual elements
const original = [1, 2, 3];
const copy = [...original, 4, 5];
console.log(copy); // [1, 2, 3, 4, 5]

// Spread in function calls
const maxNum = Math.max(...original); //1,2,3
console.log(maxNum); // 3

// Rest operator — collects remaining elements into an array
// (looks the same as spread: ... but used on the LEFT side
// const arr = [10, 20, 30, 40, 50];
// const first = arr[0]; //10
// const second = arr[1]; //20
// const rest = arr.slice(2); // [30,40,50]
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// Rest in functions — collects all arguments into an array
const sumAll = function (...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
};
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100

// Spread vs Rest — key difference:
// Spread (RIGHT side) — unpacks: [...arr]   → expands elements
// Rest   (LEFT side)  — packs:   [...rest]  → collects elements

const deepNested = [1, [2, 3], [4, [5, 6]]];
console.log(deepNested.flat());
console.log(deepNested.flat(2));

// flatMap() — map() + flat(1) ერთ ნაბიჯში
// map რომ დააბრუნებს მასივს, flatMap ავტომატურად აბრტყელებს ერთი დონით

const phrases = ["Hello World", "Good Morning"];
const words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words); // ['Hello', 'World', 'Good', 'Morning']

// map-ით იგივეს რომ გაგვეკეთებინა:
const wordsWithMap = phrases.map((phrase) => phrase.split(" "));
console.log(wordsWithMap); // [['Hello', 'World'], ['Good', 'Morning']] — nested!
console.log(wordsWithMap.flat()); // ['Hello', 'World', 'Good', 'Morning']

// პრაქტიკული მაგალითი — ყველა სტუდენტის ყველა ქულა ერთ მასივში
const classes = [
  { teacher: "Ana", students: [85, 92, 78] },
  { teacher: "David", students: [90, 88, 95] },
  { teacher: "Nino", students: [70, 65, 80] },
];

const allScores = classes.flatMap((cls) => cls.students);
console.log(allScores); // [85, 92, 78, 90, 88, 95, 70, 65, 80]

const totalAvg = allScores.reduce((sum, s) => sum + s, 0) / allScores.length;
console.log(`Average across all classes: ${totalAvg.toFixed(1)}`);

////////////////////////////////////
// Coding Challenge: flat, rest, spread, concat
////////////////////////////////////

/*
სცენარი: შენ მართავ მუსიკალურ ფესტივალს. სამი სცენის ლაინაფი გაქვს:

const mainStage = ['Nirvana', 'Radiohead', 'Muse'];
const indieStage = ['Arctic Monkeys', 'Tame Impala'];
const electroStage = ['Daft Punk', 'Deadmau5', 'Skrillex'];

ნაბიჯ-ნაბიჯ შეასრულე:

--- ნაბიჯი 1: concat ---
შეაერთე სამივე სცენის ლაინაფი ერთ მასივში concat()-ით.
დალოგე: "All artists: Nirvana, Radiohead, Muse, ..."

--- ნაბიჯი 2: spread ---
დაამატე ახალი არტისტი ("Gorillaz") mainStage-ის თავში
და კიდევ ერთი ("Bonobo") electroStage-ის ბოლოში.
გამოიყენე spread ოპერატორი ახალი მასივების შესაქმნელად (ორიგინალი არ შეცვალო).
დალოგე ორივე განახლებული მასივი.

--- ნაბიჯი 3: rest ---
დაწერე ფუნქცია announceHeadliner(headliner, ...others)
რომელიც პირველ არტისტს ჰედლაინერად გამოაცხადებს, დანარჩენებს — support act-ებად.
დალოგე: "Headliner: Nirvana"
დალოგე: "Support acts: Radiohead, Muse"
გამოიძახე ფუნქცია spread-ით: announceHeadliner(...mainStage)

--- ნაბიჯი 4: flat ---
ფესტივალის მეორე დღეს სცენებს ახალი ჩადგმული მასივები აქვს:
const day2 = [['Pearl Jam', 'RHCP'], ['The xx', 'M83'], ['Aphex Twin']];
გააბრტყელე ერთ მასივში flat()-ით.
შემდეგ concat()-ით შეაერთე ნაბიჯი 1-ის მასივთან — ეს იქნება სრული ლაინაფი.
დალოგე: "Full festival lineup: ..." და "Total artists: X"

Expected output:
All artists: Nirvana, Radiohead, Muse, Arctic Monkeys, Tame Impala, Daft Punk, Deadmau5, Skrillex
Updated main: Gorillaz, Nirvana, Radiohead, Muse
Updated electro: Daft Punk, Deadmau5, Skrillex, Bonobo
Headliner: Gorillaz
Support acts: Nirvana, Radiohead, Muse
Full festival lineup: Nirvana, Radiohead, ..., Aphex Twin
Total artists: 13
*/

////////////////////////////////////
// Coding Challenge: Shallow Copy (Spread)
////////////////////////////////////

/*
სცენარი: შენ მართავ სტუდენტების რეგისტრაციის სისტემას.
მოცემულია სტუდენტის ობიექტი:

const student = {
  name: "Luka",
  age: 22,
  grades: [95, 87, 91],
  address: {
    city: "Tbilisi",
    street: "Rustaveli Ave",
  },
};

--- ნაბიჯი 1 ---
შექმენი student-ის ასლი spread ოპერატორით (studentCopy).
შეუცვალე studentCopy-ს name "Nino"-ზე და age 20-ზე.
დალოგე ორივე ობიექტის name და age.
კითხვა: შეიცვალა თუ არა ორიგინალის name და age? რატომ?

--- ნაბიჯი 2 ---
studentCopy.grades-ში დაამატე ახალი ქულა (78) push()-ით.
დალოგე ორივე ობიექტის grades.
კითხვა: რა მოხდა? რატომ შეიცვალა ორიგინალის grades-იც?

--- ნაბიჯი 3 ---
studentCopy.address.city შეუცვალე "Batumi"-ზე.
დალოგე ორივე ობიექტის address.
კითხვა: რატომ შეიცვალა ორიგინალის city-იც?

--- ნაბიჯი 4 ---
ახლა შექმენი ისეთი ასლი, სადაც grades და address-იც დამოუკიდებელია:
- grades დასპრედე ცალკე მასივში
- address დასპრედე ცალკე ობიექტში
შეუცვალე ამ ახალ ასლს grades-ში ქულა და address.city.
დალოგე და დარწმუნდი, რომ ორიგინალი აღარ იცვლება.

Expected output:
--- Step 1 ---
Original: Luka, 22
Copy: Nino, 20

--- Step 2 ---
Original grades: [95, 87, 91, 78]  ← ორიგინალიც შეიცვალა!
Copy grades: [95, 87, 91, 78]

--- Step 3 ---
Original city: Batumi  ← ორიგინალიც შეიცვალა!
Copy city: Batumi

--- Step 4 (fixed copy) ---
Original grades: [95, 87, 91, 78]  ← აღარ იცვლება
Deep copy grades: [95, 87, 91, 78, 100]
Original city: Batumi  ← აღარ იცვლება
Deep copy city: Kutaisi
*/
