"use strict";

// const person = {
//   firstName: "Giorgi",
//   lastName: "Beridze",
//   age: 28,
//   isStudent: false,
//   hobbies: ["reading", "coding", "hiking"],
// };

// // Properties-ზე წვდომა — dot notation (ყველაზე გავრცელებული)
// console.log(person.firstName); // 'Giorgi'
// console.log(person.age); // 28

// // Properties-ზე წვდომა — bracket notation (სტრინგ გასაღები)
// console.log(person["lastName"]); // 'Beridze'
// console.log(person["hobbies"]); // ['reading', 'coding', 'hiking']

// // Bracket notation საშუალებას იძლევა დინამიურად მივწვდეთ property-ს
// const key = "firstName";
// console.log(person[key]); // 'Giorgi'

// // გასაღების აწყობა ნაწილებიდან — მხოლოდ bracket notation მუშაობს
// const nameKey = "Name";
// console.log(person["first" + nameKey]); // 'Giorgi'
// console.log(person["last" + nameKey]); // 'Beridze'

// // Properties-ის დამატება, შეცვლა და წაშლა
// person.email = "giorgi@example.com";
// person["phone"] = "+995 555 123456";
// person.age = 29;
// delete person.phone;
// console.log(person.email); // 'giorgi@example.com'
// console.log(person.phone); // undefined — deleted

// // ჩადგმული ობიექტები
// const student = {
//   name: "Nino",
//   address: {
//     city: "Tbilisi",
//     street: "Rustaveli Ave",
//     zip: "0108",
//   },
//   grades: [95, 88, 92],
// };

// console.log(student.address.city); // 'Tbilisi
// console.log(student["address"].city); // 'Rustaveli Ave'

// // const firstName = person.firstName;
// // const lastName = person.lastName;
// // const age = person.age;
// const arrInfo = ["Nino", "Tsilosani", 25];
// const { firstName, lastName, age } = person;
// const [arrFirstName, arrLastName, arrAge] = arrInfo;
// console.log(firstName, lastName, age); //'Giorgi' 'Beridze' 29

// // Destructuring სახელის შეცვლით
// const { firstName: name1, age: userAge } = person;
// console.log(name1, userAge); // 'Giorgi' 29

// const {
//   address: { city, street },
// } = student;
// // const { city, street } = address.city;
// console.log(street, city); // "Rustaveli Ave" "Tbilisi"

// const field = "score";
// const playerNum = 7;

// const gameData = {
//   [field]: 100,
//   [`player_${playerNum}`]: "Ronaldo",
//   [field + "Bonus"]: 25,
// };

// console.log(gameData); // {score: 100, player_7: 'Ronaldo', scoreBonus: 25}

// // შემოკლებული property სინტაქსი — როცა ცვლადის სახელი ემთხვევა გასაღებს
// const brand = "Toyota";
// const model = "Camry";
// const year = 2024;

// // car.brand = brand
// // car.model.model = model
// // car.year = year

// // const car = {
// //   brand: brand,
// //   model: model,
// //   year: year,
// // };

// const car = { brand, model, year };
// console.log(car);

// const calculator = {
//   result: 0,
//   // example: function() {
//   // },
//   // შემოკლებული მეთოდის სინტაქსი (თანამედროვე, სასურველი)
//   add(a, b) {
//     let result = a + b;
//     return this.result;
//   },
//   subtract(a, b) {
//     this.result = a - b;
//     return this.result;
//   },
//   multiply(a, b) {
//     this.result = a * b;
//     return this.result;
//   },
//   // get result() {
//   //   return this.result;
//   // },
//   // getResult() {
//   //   return this.result;
//   // },
// };

// console.log(calculator.add(10, 5)); // 15
// console.log(calculator.multiply(4, 3)); // 12
// console.log(calculator.result); // 12

// const user = {
//   firstName: "Ana",
//   lastName: "Kapanadze",
//   birthYear: 1995,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getAge() {
//     return new Date().getFullYear() - this.birthYear;
//   },
//   introduce() {
//     console.log(this);
//     return `Hi, I'm ${this.getFullName()}, age ${this.getAge()}.`;
//   },
// };

// console.log(user.getFullName()); // 'Ana Kapanadze'
// console.log(user.introduce()); // 'Hi, I'm Ana Kapanadze, age 31.'

// const bankAccount = {
//   owner: "Davit Maisuradze",
//   balance: 1500,
//   transactions: [],

//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push({ type: "deposit", amount });
//     console.log(`Deposited $${amount}. Balance: $${this.balance}`);
//     return this;
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Insufficient funds!");
//       return this;
//     }
//     this.balance -= amount;
//     this.transactions.push({ type: "withdrawal", amount });
//     console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
//     return this;
//   },
// };

// bankAccount.deposit(500).deposit(200).withdraw(100);
// console.log(bankAccount);

// /*
// Create a 'restaurant' object with the following:
//   - name: 'Samikitno'
//   - city: 'Tbilisi'
//   - rating: 4.5
//   - menu: an array of 3 dish names
//   - A method 'describe()' that returns:
//     "Samikitno in Tbilisi — rated 4.5/5. Serves 3 dishes."
//   - A method 'addDish(dish)' that adds to the menu and returns this (for chaining)

// 1. Call describe() and log the result
// 2. Chain two addDish() calls to add 'Lobiani' and 'Pkhali'
// 3. Log the updated menu
// 4. Use destructuring to extract name and city into variables, log them
// */

// const restaurant = {
//   name: "Samikitno",
//   city: "Tbilisi",
//   rating: 4.5,
//   menu: ["Khinkali", "Khachapuri", "Mtsvadi"],

//   describe() {
//     return `${this.name} in ${this.city} — rated ${this.rating}/5. Serves ${this.menu.length} dishes.`;
//   },
//   addDish(dish) {
//     this.menu.push(dish);
//     return this;
//   },
// };

// console.log(restaurant.describe());
// // 'Samikitno in Tbilisi — rated 4.5/5. Serves 3 dishes.'

// restaurant.addDish("Lobiani").addDish("Pkhali");
// console.log("Updated menu:", restaurant.menu);
// // ['Khinkali', 'Khachapuri', 'Mtsvadi', 'Lobiani', 'Pkhali']

// const { name: restName, city: restCity } = restaurant;
// console.log(restName, restCity); // 'Samikitno' 'Tbilisi'

// ////////////////////////////////////
// // 2. Object.keys(), Object.values(), Object.entries()
// ////////////////////////////////////

// // Object.keys() — აბრუნებს property სახელების მასივს
// const laptop = {
//   brand: "Dell",
//   model: "XPS 15",
//   price: 2500,
//   color: "silver",
// };
// console.log(laptop);

// console.log(Object.keys(laptop)); // ['brand', 'model', 'price', 'color']

// // Object.values() — აბრუნებს property მნიშვნელობების მასივს
// console.log(Object.values(laptop)); // ['Dell', 'XPS 15', 2500, 'silver']

// // Object.entries() — აბრუნებს [key, value] წყვილების მასივს
// console.log(Object.entries(laptop));
// // [['brand','Dell'], ['model','XPS 15'], ['price',2500], ['color','silver']]

// // იტერაცია for...of-ით და destructuring-ით
// // for (const el of arr) {
// //   console.log(el);
// // }

// for (const [propKey, propValue] of [
//   ["brand", "Dell"],
//   ["model", "XPS 15"],
//   ["price", 2500],
//   ["color", "silver"],
// ]) {
//   console.log(`${propKey}: ${propValue}`);
// }
// // arrEntries = Object.entries(laptop);
// for (const [propKey, propValue] of arrEntries) {
//   console.log(`${propKey}: ${propValue}`);
// }
// // brand: Dell
// // model: XPS 15
// // price: 2500
// // color: silver

// // პრაქტიკული მაგალითი — სტუდენტის ნიშნები
// const grades = {
//   Math: 95,
//   Physics: 82,
//   Chemistry: 91,
//   English: 88,
//   History: 76,
// };

// // საშუალო ნიშნის გამოთვლა Object.values-ით
// const gradeValues = Object.values(grades);
// // [95, 82, 91, 88, 76];
// console.log(gradeValues);

// const average = gradeValues.reduce((sum, g) => sum + g, 0) / gradeValues.length;
// console.log(`Average grade: ${average.toFixed(1)}`); // 86.4

// // იპოვე საგნები, სადაც ნიშანი 85-ზე მეტია
// console.log(Object.entries(grades));
// console.log(Object.entries(grades).filter(([, grade]) => grade > 85));
// console.log(
//   Object.entries(grades)
//     .filter(([, grade]) => grade > 85)
//     .map(([subject]) => subject),
// );

// const strongSubjects = Object.entries(grades)
//   .filter(([, grade]) => grade > 85)
//   .map(([subject]) => subject);
// console.log("Strong subjects:", strongSubjects.join(", "));
// // 'Strong subjects: Math, Chemistry, English'

// // პრაქტიკული მაგალითი — პროდუქტის მარაგის დათვლა
// const inventory = {
//   apples: 50,
//   bananas: 30,
//   oranges: 45,
//   grapes: 0,
//   mangoes: 12,
// };

// const totalItems = Object.values(inventory).reduce((sum, qty) => sum + qty, 0);
// console.log(`Total items in stock: ${totalItems}`); // 137

// const outOfStock = Object.entries(inventory)
//   .filter(([, qty]) => qty === 0)
//   .map(([item]) => item);
// console.log("Out of stock:", outOfStock.join(", ")); // 'grapes'

// // for...in ციკლი — ასევე იტერირებს ობიექტის გასაღებებზე
// for (const fruit in inventory) {
//   console.log(`${fruit}: ${inventory[fruit]} units`);
// }

////////////////////////////////////
// 4. Date Object
////////////////////////////////////

// თარიღების შექმნა — ოთხი გზა

// თარიღების შექმნა — ოთხი გზა

// 1. მიმდინარე თარიღი და დრო
const now = new Date();
console.log("Now:", now);

// 2. თარიღის სტრინგიდან
const christmas = new Date("2024-12-25");
console.log("Christmas 2024:", christmas);

// 3. არგუმენტებიდან (წელი, თვე, დღე, საათი, წუთი, წამი)
// მნიშვნელოვანი: თვე 0-იდან იწყება! (0 = იანვარი, 11 = დეკემბერი)
const newYear = new Date(2025, 0, 1, 0, 0, 0);
console.log("New Year 2025:", newYear);

// 4. Timestamp-იდან (მილიწამები 1970 წლის 1 იანვრიდან)
console.log("Epoch:", new Date(0)); // Jan 1, 1970
console.log("Timestamp now:", Date.now()); // milliseconds since epoch

// --- Getter მეთოდები ---

const today = new Date();

console.log("Full year:", today.getFullYear()); // e.g. 2026
console.log("Month (0-indexed):", today.getMonth()); // 0-11
console.log("Date (day of month):", today.getDate()); // 1-31
console.log("Day of week:", today.getDay()); // 0=Sunday, 6=Saturday
console.log("Hours:", today.getHours()); // 0-23
console.log("Minutes:", today.getMinutes()); // 0-59
console.log("Seconds:", today.getSeconds()); // 0-59
console.log(today);

// getMonth()-ის და getDay()-ის გარდაქმნა წაკითხვად სახელებად
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(
  `Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]}`,
);

// --- Setter მეთოდები ---

const someDate = new Date(2024, 5, 15); // June 15, 2024
console.log("Original:", someDate);

someDate.setFullYear(2025);
console.log("After setFullYear(2025):", someDate);

someDate.setMonth(11); // December
console.log("After setMonth(11):", someDate);

someDate.setDate(25);
console.log("After setDate(25):", someDate); // December 25, 2025

// --- თარიღის არითმეტიკა ---

// ორ თარიღს შორის სხვაობა (მილიწამებში, შემდეგ გარდაქმნა)
const startDate = new Date(2024, 0, 1);
const endDate = new Date(2024, 11, 31);

const diffMs = endDate - startDate;
console.log(diffMs);

const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays);

console.log(`Days between Jan 1 and Dec 31, 2024: ${Math.round(diffDays)}`);

// დამხმარე ფუნქცია: დღეების დამატება თარიღზე
const addDays = function (date, numDays) {
  const result = new Date(date);
  result.setDate(result.getDate() + numDays);
  return result;
};

console.log("One week from now:", addDays(new Date(), 7));
console.log("30 days from now:", addDays(new Date(), 30));

// პრაქტიკული მაგალითი — ასაკის კალკულატორი
const calculateAge = function (birthDateStr) {
  const birth = new Date(birthDateStr);
  const current = new Date();
  let calcAge = current.getFullYear() - birth.getFullYear();
  const monthDiff = current.getMonth() - birth.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && current.getDate() < birth.getDate())
  ) {
    calcAge--;
  }
  return calcAge;
};

console.log(`Age for 1995-06-15: ${calculateAge("1995-06-15")}`);
console.log(`Age for 2000-01-01: ${calculateAge("2000-01-01")}`);

// პრაქტიკული მაგალითი — დღეები მოვლენამდე
const daysUntil = function (eventDateStr) {
  const eventDate = new Date(eventDateStr);
  const diff = eventDate - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const nextNewYear = `${new Date().getFullYear() + 1}-01-01`;
console.log(`Days until New Year: ${daysUntil(nextNewYear)}`);
