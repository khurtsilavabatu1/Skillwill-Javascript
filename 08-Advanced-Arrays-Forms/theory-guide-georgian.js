////////////////////////////////////
// გაფართოებული მასივები და ფორმები
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. ბრაუზერის I/O მეთოდები
   (document.write, alert, prompt, confirm)
═══════════════════════════════════════════════════════════════

JavaScript გვთავაზობს რამდენიმე ჩაშენებულ მეთოდს მომხმარებელთან
ურთიერთობისთვის ბრაუზერის მეშვეობით:

- document.write() — წერს HTML კონტენტს პირდაპირ გვერდზე
- alert() — აჩვენებს popup შეტყობინებას
- prompt() — აჩვენებს popup-ს, რომელიც მომხმარებლისგან შეყვანას ითხოვს
- confirm() — აჩვენებს popup-ს OK/Cancel ღილაკებით

ეს მეთოდები ძირითადად სწავლისა და დებაგინგისთვის გამოიყენება.
რეალურ აპლიკაციებში ნაცვლად მათ DOM-ს ვიყენებთ.
*/

// document.write — წერს პირდაპირ HTML გვერდზე
// document.write("<h2>გამარჯობა, JavaScript!</h2>");
// document.write("<p>ეს ტექსტი document.write()-ით დაიწერა</p>");

// alert — აჩვენებს შეტყობინების popup-ს
// alert("გამარჯობა!");
// alert("ეს არის alert ფანჯარა");

// prompt — ეკითხება მომხმარებელს, აბრუნებს შეყვანილ სტრინგს (ან null გაუქმებისას)
// const name = prompt("შეიყვანეთ თქვენი სახელი:");
// console.log(name); // რაც მომხმარებელმა აკრიფა

// confirm — სვამს დიახ/არა კითხვას, აბრუნებს true (OK) ან false (Cancel)
// const agreed = confirm("ეთანხმებით?");
// console.log(agreed); // true ან false


/*
═══════════════════════════════════════════════════════════════
2. WHILE ციკლი
═══════════════════════════════════════════════════════════════

while ციკლი ასრულებს კოდის ბლოკს მანამ, სანამ
მითითებული პირობა არის true.

სინტაქსი:
  while (პირობა) {
    // შესასრულებელი კოდი
  }

პირობა მოწმდება ყოველი იტერაციის წინ.
თუ პირობა თავიდანვე false-ია, ციკლის სხეული
არასოდეს შესრულდება.
*/

// ძირითადი while ციკლი
let counter = 1;
while (counter <= 5) {
  console.log(`დათვლა: ${counter}`);
  counter++;
}
// დათვლა: 1, დათვლა: 2, ... დათვლა: 5

// while ციკლი, რომელიც არ შესრულდება (პირობა თავიდანვე false)
let x = 10;
while (x < 5) {
  console.log("ეს არასოდეს დაილოგება");
  x++;
}


/*
═══════════════════════════════════════════════════════════════
3. DO-WHILE ციკლი
═══════════════════════════════════════════════════════════════

do-while ციკლი while-ის მსგავსია, მაგრამ პირობა
მოწმდება ყოველი იტერაციის შემდეგ. ეს ნიშნავს, რომ
კოდის ბლოკი ყოველთვის შესრულდება მინიმუმ ერთხელ.

სინტაქსი:
  do {
    // შესასრულებელი კოდი
  } while (პირობა);
*/

// do-while ყოველთვის სრულდება მინიმუმ ერთხელ, თუნდაც პირობა false იყოს
let y = 10;
do {
  console.log("do-while: ეს დაილოგება ერთხელ");
  y++;
} while (y < 5);

// პრაქტიკული მაგალითი: შემთხვევითი მენიუს არჩევანი
const menuOptions = ["პიცა", "ბურგერი", "სალათი", "გასვლა"];
let choice;
do {
  choice = Math.trunc(Math.random() * menuOptions.length);
  console.log(`არჩეულია: ${menuOptions[choice]}`);
} while (menuOptions[choice] !== "გასვლა");
console.log("მენიუდან გამოსვლა");


/*
═══════════════════════════════════════════════════════════════
4. FOR ციკლი (მასივებზე იტერაცია)
═══════════════════════════════════════════════════════════════

for ციკლი ყველაზე გავრცელებული ციკლია მასივებზე
იტერაციისთვის. ის იყენებს მთვლელ ცვლადს (ჩვეულებრივ i),
რომელიც იწყება 0-დან და იზრდება მასივის სიგრძემდე.

სინტაქსი:
  for (let i = 0; i < array.length; i++) {
    // array[i] თითოეულ ელემენტზე წვდომისთვის
  }
*/

const fruits = ["Apple", "Banana", "Orange", "Grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
// 1. Apple, 2. Banana, 3. Orange, 4. Grape


/*
═══════════════════════════════════════════════════════════════
5. forEach() მეთოდი
═══════════════════════════════════════════════════════════════

forEach() არის მასივის მეთოდი, რომელიც იძახებს ფუნქციას
მასივის ყოველი ელემენტისთვის.

სინტაქსი:
  array.forEach(function(ელემენტი, ინდექსი, მასივი) {
    // კოდი თითოეული ელემენტისთვის
  });

პარამეტრები:
  - ელემენტი: მიმდინარე ელემენტი
  - ინდექსი: მიმდინარე ინდექსი (არასავალდებულო)
  - მასივი: ორიგინალი მასივი (არასავალდებულო, იშვიათად გამოიყენება)

forEach არ აბრუნებს ახალ მასივს (map-ისგან განსხვავებით).
გამოიყენება, როცა გინდათ რაღაც გააკეთოთ თითოეულ ელემენტთან
(მაგ. დალოგვა), და არა როცა ახალი მასივის შექმნა გინდათ.
*/

// ძირითადი forEach
const colors = ["Red", "Green", "Blue"];
colors.forEach(function (color) {
  console.log(color);
});

// forEach arrow ფუნქციით
colors.forEach((color) => console.log(color));

// forEach ინდექსით
colors.forEach((color, i) => {
  console.log(`${i + 1}. ${color}`);
});

// პრაქტიკული მაგალითი: ბანკის ტრანზაქციები
const transactions = [200, -150, 400, -50, 100, -200];
transactions.forEach(function (transaction, index) {
  const type = transaction > 0 ? "შემოსავალი" : "ხარჯი";
  console.log(
    `ტრანზაქცია ${index + 1}: ${type} - ${Math.abs(transaction)} USD`
  );
});


/*
═══════════════════════════════════════════════════════════════
6. სტრინგის მეთოდები (STRING METHODS)
═══════════════════════════════════════════════════════════════

სტრინგებს ბევრი ჩაშენებული მეთოდი აქვს მანიპულაციისთვის.
მნიშვნელოვანი: სტრინგები არის IMMUTABLE (შეუცვლელი) —
მეთოდები აბრუნებენ ახალ სტრინგს, ორიგინალს არ ცვლიან.
*/

const airline = "Georgian Airways";

// --- length ---
console.log(airline.length); // 16

// --- indexOf / lastIndexOf ---
console.log(airline.indexOf("o"));      // 2 (პირველი შემთხვევა)
console.log(airline.lastIndexOf("a"));  // 13 (ბოლო შემთხვევა)
console.log(airline.indexOf("Airways")); // 9
console.log(airline.indexOf("xyz"));    // -1 (ვერ იპოვა)

// --- slice(დასაწყისი, დასასრული) ---
console.log(airline.slice(9));     // "Airways" (ინდექსი 9-დან ბოლომდე)
console.log(airline.slice(0, 8));  // "Georgian" (0-დან 7-მდე)
console.log(airline.slice(-7));    // "Airways" (ბოლო 7 სიმბოლო)

// --- toUpperCase / toLowerCase ---
console.log(airline.toUpperCase()); // "GEORGIAN AIRWAYS"
console.log(airline.toLowerCase()); // "georgian airways"

// პირველი ასოს გადიდება
const passenger = "geoRgE";
const fixed = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(fixed); // "George"

// --- trim / trimStart / trimEnd ---
console.log("   Hello   ".trim());      // "Hello"
console.log("   Hello   ".trimStart()); // "Hello   "
console.log("   Hello   ".trimEnd());   // "   Hello"

// --- replace / replaceAll ---
const price = "350,99$";
console.log(price.replace(",", ".")); // "350.99$"

const text = "Gate 23! Gate 23!";
console.log(text.replace("Gate", "Door"));    // "Door 23! Gate 23!" (მხოლოდ პირველი)
console.log(text.replaceAll("Gate", "Door")); // "Door 23! Door 23!" (ყველა)

// --- includes / startsWith / endsWith ---
console.log(airline.includes("Airways")); // true
console.log(airline.startsWith("Geo"));   // true
console.log(airline.endsWith("ways"));    // true

// --- split / join ---
console.log("a+b+c".split("+"));         // ["a", "b", "c"]
console.log("Jonas Schmedtmann".split(" ")); // ["Jonas", "Schmedtmann"]

const elements = ["Fire", "Air", "Water"];
console.log(elements.join(" - ")); // "Fire - Air - Water"
console.log(elements.join(", ")); // "Fire, Air, Water"

// --- repeat ---
console.log("ha ".repeat(3)); // "ha ha ha "

// --- padStart / padEnd ---
const msg = "Hello";
console.log(msg.padStart(10, "*")); // "*****Hello"
console.log(msg.padEnd(10, "-"));   // "Hello-----"

// პრაქტიკული: საკრედიტო ბარათის ნომრის დამალვა
const maskCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCard(4337846386429012)); // "************9012"


/*
═══════════════════════════════════════════════════════════════
7. ARRAY.MAP() მეთოდი
═══════════════════════════════════════════════════════════════

map() ქმნის ახალ მასივს, ყოველ ელემენტზე ფუნქციის გამოძახებით.

სინტაქსი:
  const newArr = arr.map(function(ელემენტი, ინდექსი) {
    return გარდაქმნილიელემენტი;
  });

მთავარი პუნქტები:
  - map() ყოველთვის აბრუნებს ახალ მასივს იგივე სიგრძის
  - ორიგინალი მასივი არ იცვლება
  - callback-ში აუცილებლად უნდა გამოიყენოთ return
  - გამოიყენეთ map როცა გინდათ ელემენტების ტრანსფორმაცია
*/

// თითოეული რიცხვის გაორმაგება
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] — ორიგინალი არ შეცვლილა

// Arrow ფუნქციით
const tripled = numbers.map((num) => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// პრაქტიკული: EUR-ის USD-ში გადაყვანა
const eurPrices = [10, 25, 50, 100];
const rate = 1.1;
const usdPrices = eurPrices.map((price) =>
  Number((price * rate).toFixed(2))
);
console.log(usdPrices); // [11, 27.5, 55, 110]

// სახელების პირველი ასოს გადიდება
const names = ["george", "nino", "david"];
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalized); // ["George", "Nino", "David"]

// ცელსიუსიდან ფარენჰეიტში
const celsius = [0, 15, 25, 100];
const fahrenheit = celsius.map((c) => (c * 9) / 5 + 32);
console.log(fahrenheit); // [32, 59, 77, 212]


/*
═══════════════════════════════════════════════════════════════
8. ARRAY.FILTER() მეთოდი
═══════════════════════════════════════════════════════════════

filter() ქმნის ახალ მასივს მხოლოდ იმ ელემენტებით,
რომლებიც აკმაყოფილებენ პირობას (callback-დან true აბრუნებენ).

სინტაქსი:
  const filtered = arr.filter(function(ელემენტი) {
    return პირობა; // true = დატოვე, false = გამოტოვე
  });

მთავარი პუნქტები:
  - აბრუნებს ახალ მასივს (შეიძლება უფრო მოკლე ან ცარიელი)
  - ორიგინალი მასივი არ იცვლება
  - callback-მა უნდა დააბრუნოს true ან false
  - გამოიყენეთ filter როცა გინდათ გარკვეული ელემენტების ამორჩევა
*/

// ლუწი რიცხვების გაფილტვრა
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// ობიექტების გაფილტვრა
const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Tablet", price: 450, inStock: true },
];
const inStock = products.filter((p) => p.inStock);
console.log(inStock); // [{name: "Laptop"...}, {name: "Tablet"...}]

// filter + map ჩეინინგი
const movements = [200, -150, 400, -50, 100, -200];
const depositsInEur = movements
  .filter((mov) => mov > 0)
  .map((mov) => Number((mov / 2.95).toFixed(1)));
console.log(depositsInEur); // დეპოზიტები ევროში გადაყვანილი


/*
═══════════════════════════════════════════════════════════════
9. ARRAY.FIND() და findIndex() / indexOf()
═══════════════════════════════════════════════════════════════

find() აბრუნებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას.
findIndex() აბრუნებს პირველი შესაბამისი ელემენტის ინდექსს.
indexOf() აბრუნებს კონკრეტული მნიშვნელობის ინდექსს.

მთავარი განსხვავებები:
  - find() აბრუნებს თვითონ ელემენტს (ან undefined)
  - findIndex() აბრუნებს ინდექსს (ან -1)
  - indexOf() ეძებს ზუსტი მნიშვნელობით (callback გარეშე)
  - filter() აბრუნებს ყველა შესაბამისს, find() მხოლოდ პირველს
*/

// find — აბრუნებს პირველ შესაბამისს
const arr = [10, 20, 30, 40, 50];
const firstBig = arr.find((num) => num > 25);
console.log(firstBig); // 30

// indexOf — ეძებს ინდექსს ზუსტი მნიშვნელობით
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(99)); // -1 (ვერ იპოვა)

// find ობიექტებთან
const accounts = [
  { owner: "George", balance: 5000 },
  { owner: "Nino", balance: 1200 },
  { owner: "David", balance: 8500 },
];
const david = accounts.find((acc) => acc.owner === "David");
console.log(david); // { owner: "David", balance: 8500 }

// findIndex — აბრუნებს პირველი შესაბამისის ინდექსს
const davidIndex = accounts.findIndex((acc) => acc.owner === "David");
console.log(davidIndex); // 2


/*
═══════════════════════════════════════════════════════════════
10. ARRAY.SORT() მეთოდი
═══════════════════════════════════════════════════════════════

sort() ასორტირებს მასივის ელემენტებს ადგილზე (ცვლის
ორიგინალ მასივს).

კომპარატორის გარეშე sort ელემენტებს სტრინგებად გარდაქმნის
და ანბანურად ასორტირებს (Unicode-ით). ეს პრობლემას ქმნის
რიცხვებთან: [3, 1, 100] სორტდება [1, 100, 3], რადგან
"100" < "3" სტრინგებად.

რიცხვების სწორად დასასორტირებლად გამოიყენეთ კომპარატორი:
  arr.sort((a, b) => a - b)  // ზრდადობით
  arr.sort((a, b) => b - a)  // კლებადობით

როგორ მუშაობს კომპარატორი:
  - აბრუნებს უარყოფითს: a პირველი მოდის
  - აბრუნებს დადებითს: b პირველი მოდის
  - აბრუნებს 0: თანმიმდევრობა იგივე რჩება
*/

// სტრინგების სორტირება — კომპარატორის გარეშე კარგად მუშაობს
const owners = ["David", "Nino", "George", "Ana"];
owners.sort();
console.log(owners); // ["Ana", "David", "George", "Nino"]

// რიცხვების სორტირება — არასწორი კომპარატორის გარეშე
const nums = [3, 1, 100, 25, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 25, 3] — არასწორი!

// რიცხვების სორტირება — სწორი კომპარატორით
const numbers2 = [3, 1, 100, 25, 10];
numbers2.sort((a, b) => a - b); // ზრდადობით
console.log(numbers2); // [1, 3, 10, 25, 100]

numbers2.sort((a, b) => b - a); // კლებადობით
console.log(numbers2); // [100, 25, 10, 3, 1]

// ობიექტების სორტირება თვისების მიხედვით
const students = [
  { name: "Ana", grade: 85 },
  { name: "David", grade: 92 },
  { name: "Nino", grade: 78 },
  { name: "George", grade: 95 },
];
students.sort((a, b) => a.grade - b.grade); // ქულის ზრდადობით
console.log(students);

// არამუტაციური სორტირება — ჯერ slice()-ით ასლის შექმნა
const original = [5, 2, 8, 1];
const sorted = original.slice().sort((a, b) => a - b);
console.log(original); // [5, 2, 8, 1] — არ შეცვლილა
console.log(sorted);   // [1, 2, 5, 8]


/*
═══════════════════════════════════════════════════════════════
11. ARRAY.REDUCE() მეთოდი
═══════════════════════════════════════════════════════════════

reduce() "ამცირებს" მთელ მასივს ერთ მნიშვნელობამდე.
ის ამუშავებს ყოველ ელემენტს და აგროვებს შედეგს.

სინტაქსი:
  arr.reduce(function(აკუმულატორი, მიმდინარე) {
    return განახლებულიაკუმულატორი;
  }, საწყისიმნიშვნელობა);

პარამეტრები:
  - აკუმულატორი (acc): მიმდინარე ჯამი / შედეგი
  - მიმდინარე (cur): მიმდინარე ელემენტი
  - საწყისი მნიშვნელობა: აკუმულატორის საწყისი მნიშვნელობა
    (თუ არ მიუთითებთ, პირველი ელემენტი გამოიყენება)

გავრცელებული გამოყენებები:
  - ყველა ელემენტის ჯამი
  - მაქსიმუმის/მინიმუმის პოვნა
  - შემთხვევების დათვლა
*/

// ყველა ელემენტის ჯამი
const amounts = [100, 200, 300, 400];
const total = amounts.reduce((acc, cur) => acc + cur, 0);
console.log(total); // 1000

// როგორ მუშაობს ეტაპობრივად:
// acc = 0,   cur = 100 → აბრუნებს 100
// acc = 100, cur = 200 → აბრუნებს 300
// acc = 300, cur = 300 → აბრუნებს 600
// acc = 600, cur = 400 → აბრუნებს 1000

// მაქსიმალური მნიშვნელობის პოვნა
const scores = [42, 88, 15, 73, 99, 56];
const maxScore = scores.reduce((max, cur) => (cur > max ? cur : max), scores[0]);
console.log(maxScore); // 99

// საწყისი მნიშვნელობის გარეშე (პირველი ელემენტი ხდება აკუმულატორი)
const total2 = amounts.reduce((acc, cur) => acc + cur);
console.log(total2); // 1000 (იგივე შედეგი)


/*
═══════════════════════════════════════════════════════════════
შეჯამება
═══════════════════════════════════════════════════════════════

• ბრაუზერის I/O: document.write(), alert(), prompt(), confirm()
  — მომხმარებელთან ურთიერთობის მარტივი გზები

• ციკლები:
  - while: პირობას ამოწმებს ყოველი იტერაციის წინ
  - do-while: პირობას ამოწმებს შემდეგ (სრულდება მინიმუმ ერთხელ)
  - for: კლასიკური მთვლელზე დაფუძნებული იტერაცია

• forEach(): მასივის ელემენტებზე იტერაცია (ახალ მასივს არ აბრუნებს)

• სტრინგის მეთოდები: trim, slice, toUpperCase, toLowerCase,
  replace, includes, split, join, repeat, padStart, padEnd

• map(): თითოეული ელემენტის ტრანსფორმაცია → ახალი მასივი (იგივე სიგრძის)
• filter(): ელემენტების ამორჩევა პირობით → ახალი მასივი (უფრო მოკლე)
• find(): პირველი შესაბამისი ელემენტი → ერთი ელემენტი ან undefined
• findIndex(): პირველი შესაბამისის ინდექსი → რიცხვი ან -1
• sort(): ადგილზე სორტირება (მუტაცია!) — რიცხვებისთვის კომპარატორი
• reduce(): ყველა ელემენტის ერთ მნიშვნელობამდე დაყვანა

მთავარი წესი: map, filter, find არ ცვლიან ორიგინალს.
sort ცვლის — ჯერ slice() გამოიყენეთ ორიგინალის შესანარჩუნებლად.
*/
