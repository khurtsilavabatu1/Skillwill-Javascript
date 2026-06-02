"use strict";

////////////////////////////////////
// 1. Object Literals
////////////////////////////////////

// ობიექტი — key-value წყვილების კოლექცია, იქმნება {}-ით
// Properties ინახავს მონაცემებს, methods ინახავს ფუნქციებს

const person = {
  firstName: "Giorgi",
  lastName: "Beridze",
  age: 28,
  isStudent: false,
  hobbies: ["reading", "coding", "hiking"],
};

// Properties-ზე წვდომა — dot notation (ყველაზე გავრცელებული)
console.log(person.firstName); // 'Giorgi'
console.log(person.age); // 28

// Properties-ზე წვდომა — bracket notation (სტრინგ გასაღები)
console.log(person["lastName"]); // 'Beridze'
console.log(person["hobbies"]); // ['reading', 'coding', 'hiking']

// Bracket notation საშუალებას იძლევა დინამიურად მივწვდეთ property-ს
const key = "firstName";
console.log(person[key]); // 'Giorgi'

// გასაღების აწყობა ნაწილებიდან — მხოლოდ bracket notation მუშაობს
const nameKey = "Name";
console.log(person["first" + nameKey]); // 'Giorgi'
console.log(person["last" + nameKey]); // 'Beridze'

// Properties-ის დამატება, შეცვლა და წაშლა
person.email = "giorgi@example.com";
person["phone"] = "+995 555 123456";
person.age = 29;
delete person.phone;
console.log(person.email); // 'giorgi@example.com'
console.log(person.phone); // undefined — deleted

// ჩადგმული ობიექტები
const student = {
  name: "Nino",
  address: {
    city: "Tbilisi",
    street: "Rustaveli Ave",
    zip: "0108",
  },
  grades: [95, 88, 92],
};

console.log(student.address.city); // 'Tbilisi'
console.log(student["address"]["street"]); // 'Rustaveli Ave'

// Destructuring — მნიშვნელობების ამოღება ცვლადებში
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // 'Giorgi' 'Beridze' 29

// Destructuring სახელის შეცვლით
const { firstName: name1, age: userAge } = person;
console.log(name1, userAge); // 'Giorgi' 29

// ჩადგმული ობიექტების destructuring
const {
  address: { city, street },
} = student;
console.log(city, street); // 'Tbilisi' 'Rustaveli Ave'

// გამოთვლითი property სახელები — გამოსახულებები გასაღებებად []-ში
const field = "score";
const playerNum = 7;

const gameData = {
  [field]: 100,
  [`player_${playerNum}`]: "Ronaldo",
  [field + "Bonus"]: 25,
};

console.log(gameData); // { score: 100, player_7: 'Ronaldo', scoreBonus: 25 }

// შემოკლებული property სინტაქსი — როცა ცვლადის სახელი ემთხვევა გასაღებს
const brand = "Toyota";
const model = "Camry";
const year = 2024;

const car = { brand, model, year };
console.log(car); // { brand: 'Toyota', model: 'Camry', year: 2024 }

// ობიექტის მეთოდები — ფუნქციები შენახული properties-ში
const calculator = {
  result: 0,

  // შემოკლებული მეთოდის სინტაქსი (თანამედროვე, სასურველი)
  add(a, b) {
    this.result = a + b;
    return this.result;
  },
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  },
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  },
  getResult() {
    return this.result;
  },
};

// 'this' მიუთითებს ობიექტზე, რომელმაც გამოიძახა მეთოდი
console.log(calculator.add(10, 5)); // 15
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.getResult()); // 12

// პრაქტიკული მაგალითი — user ობიექტი მეთოდებით, რომლებიც იყენებენ 'this'-ს
const user = {
  firstName: "Ana",
  lastName: "Kapanadze",
  birthYear: 1995,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  introduce() {
    return `Hi, I'm ${this.getFullName()}, age ${this.getAge()}.`;
  },
};

console.log(user.getFullName()); // 'Ana Kapanadze'
console.log(user.introduce()); // 'Hi, I'm Ana Kapanadze, age 31.'

// მეთოდების ჯაჭვური გამოძახება — 'this'-ის დაბრუნება ჯაჭვის საშუალებას იძლევა
const bankAccount = {
  owner: "Davit Maisuradze",
  balance: 1500,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount });
    console.log(`Deposited $${amount}. Balance: $${this.balance}`);
    return this;
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
      return this;
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdrawal", amount });
    console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
    return this;
  },
};

bankAccount.deposit(500).deposit(200).withdraw(100);
// Deposited $500. Balance: $2000
// Deposited $200. Balance: $2200
// Withdrew $100. Balance: $2100

////////////////////////////////////
// Coding Challenge: Objects
////////////////////////////////////

/*
Create a 'restaurant' object with the following:
  - name: 'Samikitno'
  - city: 'Tbilisi'
  - rating: 4.5
  - menu: an array of 3 dish names
  - A method 'describe()' that returns:
    "Samikitno in Tbilisi — rated 4.5/5. Serves 3 dishes."
  - A method 'addDish(dish)' that adds to the menu and returns this (for chaining)

1. Call describe() and log the result
2. Chain two addDish() calls to add 'Lobiani' and 'Pkhali'
3. Log the updated menu
4. Use destructuring to extract name and city into variables, log them
*/

const restaurant = {
  name: "Samikitno",
  city: "Tbilisi",
  rating: 4.5,
  menu: ["Khinkali", "Khachapuri", "Mtsvadi"],

  describe() {
    return `${this.name} in ${this.city} — rated ${this.rating}/5. Serves ${this.menu.length} dishes.`;
  },
  addDish(dish) {
    this.menu.push(dish);
    return this;
  },
};

console.log(restaurant.describe());
// 'Samikitno in Tbilisi — rated 4.5/5. Serves 3 dishes.'

restaurant.addDish("Lobiani").addDish("Pkhali");
console.log("Updated menu:", restaurant.menu);
// ['Khinkali', 'Khachapuri', 'Mtsvadi', 'Lobiani', 'Pkhali']

const { name: restName, city: restCity } = restaurant;
console.log(restName, restCity); // 'Samikitno' 'Tbilisi'

////////////////////////////////////
// 2. Object.keys(), Object.values(), Object.entries()
////////////////////////////////////

// Object.keys() — აბრუნებს property სახელების მასივს
const laptop = {
  brand: "Dell",
  model: "XPS 15",
  price: 2500,
  color: "silver",
};

console.log(Object.keys(laptop)); // ['brand', 'model', 'price', 'color']

// Object.values() — აბრუნებს property მნიშვნელობების მასივს
console.log(Object.values(laptop)); // ['Dell', 'XPS 15', 2500, 'silver']

// Object.entries() — აბრუნებს [key, value] წყვილების მასივს
console.log(Object.entries(laptop));
// [['brand','Dell'], ['model','XPS 15'], ['price',2500], ['color','silver']]

// იტერაცია for...of-ით და destructuring-ით
for (const [propKey, propValue] of Object.entries(laptop)) {
  console.log(`${propKey}: ${propValue}`);
}
// brand: Dell
// model: XPS 15
// price: 2500
// color: silver

// პრაქტიკული მაგალითი — სტუდენტის ნიშნები
const grades = {
  Math: 95,
  Physics: 82,
  Chemistry: 91,
  English: 88,
  History: 76,
};

// საშუალო ნიშნის გამოთვლა Object.values-ით
const gradeValues = Object.values(grades);
const average = gradeValues.reduce((sum, g) => sum + g, 0) / gradeValues.length;
console.log(`Average grade: ${average.toFixed(1)}`); // 86.4

// იპოვე საგნები, სადაც ნიშანი 85-ზე მეტია
const strongSubjects = Object.entries(grades)
  .filter(([, grade]) => grade > 85)
  .map(([subject]) => subject);
console.log("Strong subjects:", strongSubjects.join(", "));
// 'Strong subjects: Math, Chemistry, English'

// პრაქტიკული მაგალითი — პროდუქტის მარაგის დათვლა
const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45,
  grapes: 0,
  mangoes: 12,
};

const totalItems = Object.values(inventory).reduce((sum, qty) => sum + qty, 0);
console.log(`Total items in stock: ${totalItems}`); // 137

const outOfStock = Object.entries(inventory)
  .filter(([, qty]) => qty === 0)
  .map(([item]) => item);
console.log("Out of stock:", outOfStock.join(", ")); // 'grapes'

// for...in ციკლი — ასევე იტერირებს ობიექტის გასაღებებზე
for (const fruit in inventory) {
  console.log(`${fruit}: ${inventory[fruit]} units`);
}

////////////////////////////////////
// Coding Challenge: Object.keys/values/entries
////////////////////////////////////

/*
You have a 'scores' object representing a player's scores in different rounds:

const scores = { round1: 120, round2: 95, round3: 140, round4: 80, round5: 110 };

1. Use Object.values() + reduce() to calculate the total score
2. Use Object.entries() + filter() to find rounds where score > 100
   Result should be: ['round1', 'round3', 'round5']
3. Use Object.entries() + map() + join() to create a formatted report:
   "round1: 120 | round2: 95 | round3: 140 | round4: 80 | round5: 110"
4. Find the best round (highest score) using Object.entries() + reduce()
   Log: "Best round: round3 (140 points)"
*/

const scores = {
  round1: 120,
  round2: 95,
  round3: 140,
  round4: 80,
  round5: 110,
};

const totalScore = Object.values(scores).reduce((sum, s) => sum + s, 0);
console.log("Total score:", totalScore); // 545

const highRounds = Object.entries(scores)
  .filter(([, score]) => score > 100)
  .map(([round]) => round);
console.log("High rounds:", highRounds); // ['round1', 'round3', 'round5']

const report = Object.entries(scores)
  .map(([round, score]) => `${round}: ${score}`)
  .join(" | ");
console.log(report); // 'round1: 120 | round2: 95 | round3: 140 | round4: 80 | round5: 110'

const bestRound = Object.entries(scores).reduce((best, curr) =>
  curr[1] > best[1] ? curr : best,
);
console.log(`Best round: ${bestRound[0]} (${bestRound[1]} points)`);
// 'Best round: round3 (140 points)'

////////////////////////////////////
// 3. Arrays of Objects
////////////////////////////////////

// რეალურ მონაცემები ხშირად ობიექტების მასივების სახით მოდის
const employees = [
  { name: "Ana", department: "Engineering", salary: 75000, yearsExp: 5 },
  { name: "Davit", department: "Marketing", salary: 62000, yearsExp: 3 },
  { name: "Nino", department: "Engineering", salary: 88000, yearsExp: 8 },
  { name: "Giorgi", department: "Design", salary: 58000, yearsExp: 2 },
  { name: "Mariam", department: "Marketing", salary: 71000, yearsExp: 6 },
  { name: "Luka", department: "Engineering", salary: 95000, yearsExp: 10 },
  { name: "Elene", department: "Design", salary: 67000, yearsExp: 4 },
];

// find() — აბრუნებს პირველ შესაბამის ელემენტს
const seniorDev = employees.find((e) => e.yearsExp >= 10);
console.log("Senior dev:", seniorDev.name); // 'Luka'

// filter() — აბრუნებს ყველა შესაბამის ელემენტს
const engineers = employees.filter((e) => e.department === "Engineering");
console.log("Engineers:", engineers.map((e) => e.name).join(", "));
// 'Ana, Nino, Luka'

// map() — ყოველი ელემენტის ტრანსფორმაცია
const employeeCards = employees.map((e) => ({
  label: `${e.name} (${e.department})`,
  seniorLevel: e.yearsExp >= 5,
}));
console.log(employeeCards);

// reduce() — ერთი მნიშვნელობის გამოთვლა მასივიდან
const totalPayroll = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(`Total payroll: $${totalPayroll.toLocaleString()}`);
// 'Total payroll: $516,000'

// reduce დეპარტამენტის მიხედვით დაჯგუფებისთვის
const byDepartment = employees.reduce((groups, e) => {
  if (!groups[e.department]) groups[e.department] = [];
  groups[e.department].push(e.name);
  return groups;
}, {});
console.log("By department:", byDepartment);
// { Engineering: ['Ana','Nino','Luka'], Marketing: ['Davit','Mariam'], Design: ['Giorgi','Elene'] }

// sort() — ხელფასით კლებადობით დალაგება (spread მუტაციის ასაცილებლად)
const bySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log(
  "Highest paid:",
  bySalary.map((e) => `${e.name}($${e.salary})`).join(", "),
);

// ანბანის მიხედვით დალაგება სახელით
const byName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
console.log("Alphabetical:", byName.map((e) => e.name).join(", "));

// მეთოდების ჯაჭვური გამოძახება — ინჟინრების გაფილტვრა, გამოცდილებით დალაგება, ფორმატირება
const engineerRanking = employees
  .filter((e) => e.department === "Engineering")
  .sort((a, b) => b.yearsExp - a.yearsExp)
  .map((e, i) => `${i + 1}. ${e.name} — ${e.yearsExp} years`)
  .join("\n");
console.log("Engineering team ranking:\n" + engineerRanking);

// პრაქტიკული მაგალითი — სავაჭრო კალათა
const cart = [
  { product: "Laptop", price: 999, quantity: 1 },
  { product: "Mouse", price: 29, quantity: 2 },
  { product: "Keyboard", price: 79, quantity: 1 },
  { product: "Monitor", price: 349, quantity: 1 },
  { product: "USB Cable", price: 12, quantity: 3 },
];

const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
console.log(`Cart total: $${cartTotal}`); // $1,492

const expensiveItems = cart
  .filter((item) => item.price * item.quantity > 50)
  .map((item) => `${item.product}: $${item.price * item.quantity}`);
console.log("Expensive items:", expensiveItems.join(", "));

// პრაქტიკული მაგალითი — სტუდენტების ჩანაწერები ასოიანი ნიშნებით
const studentRecords = [
  { name: "Ana", score: 95 },
  { name: "Davit", score: 67 },
  { name: "Nino", score: 82 },
  { name: "Giorgi", score: 91 },
  { name: "Mariam", score: 55 },
];

const reportCards = studentRecords
  .map((s) => ({
    ...s,
    letter:
      s.score >= 90 ? "A" : s.score >= 80 ? "B" : s.score >= 70 ? "C" : "F",
    status: s.score >= 60 ? "Passed" : "Failed",
  }))
  .sort((a, b) => b.score - a.score);

reportCards.forEach((s) => {
  console.log(`${s.name}: ${s.score} (${s.letter}) — ${s.status}`);
});

////////////////////////////////////
// Coding Challenge: Arrays of Objects
////////////////////////////////////

/*
You manage a bookstore inventory:

const books = [
  { title: 'Clean Code', author: 'Robert Martin', price: 35, inStock: true, rating: 4.7 },
  { title: 'The Pragmatic Programmer', author: 'Andy Hunt', price: 42, inStock: true, rating: 4.8 },
  { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', price: 25, inStock: false, rating: 4.2 },
  { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', price: 30, inStock: true, rating: 4.5 },
  { title: 'You Don\'t Know JS', author: 'Kyle Simpson', price: 28, inStock: false, rating: 4.6 },
];

1. Use filter() to find only books that are in stock
2. Use map() to create an array of strings: "Clean Code by Robert Martin — $35"
3. Use reduce() to calculate the average rating of ALL books
4. Use sort() to sort books by rating (highest first), without mutating
5. Use find() to locate the cheapest in-stock book
6. Chain: filter in-stock → sort by price ascending → map to titles only
   Log the result
*/

const books = [
  {
    title: "Clean Code",
    author: "Robert Martin",
    price: 35,
    inStock: true,
    rating: 4.7,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    price: 42,
    inStock: true,
    rating: 4.8,
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 25,
    inStock: false,
    rating: 4.2,
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 30,
    inStock: true,
    rating: 4.5,
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    price: 28,
    inStock: false,
    rating: 4.6,
  },
];

const available = books.filter((b) => b.inStock);
console.log("In stock:", available.map((b) => b.title).join(", "));
// 'Clean Code, The Pragmatic Programmer, Eloquent JavaScript'

const catalog = books.map((b) => `${b.title} by ${b.author} — $${b.price}`);
console.log(catalog);

const avgRating = books.reduce((sum, b) => sum + b.rating, 0) / books.length;
console.log(`Average rating: ${avgRating.toFixed(2)}`); // 4.56

const byRating = [...books].sort((a, b) => b.rating - a.rating);
console.log("Top rated:", byRating[0].title); // 'The Pragmatic Programmer'

const cheapestInStock = [...available].sort((a, b) => a.price - b.price)[0];
console.log(
  `Cheapest in stock: ${cheapestInStock.title} ($${cheapestInStock.price})`,
);
// 'Eloquent JavaScript ($30)'

const affordableAvailable = books
  .filter((b) => b.inStock)
  .sort((a, b) => a.price - b.price)
  .map((b) => b.title);
console.log("Available by price:", affordableAvailable);
// ['Eloquent JavaScript', 'Clean Code', 'The Pragmatic Programmer']

////////////////////////////////////
// 4. Date Object
////////////////////////////////////

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
const diffDays = diffMs / (1000 * 60 * 60 * 24);
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

////////////////////////////////////
// Coding Challenge: Date Object
////////////////////////////////////

/*
Build a simple "event planner" using the Date object:

1. Create a date for your birthday this year (pick any date)
2. Create a date for today using new Date()
3. Calculate how many days until (or since) your birthday
4. Create an array of 3 event objects, each with { name, date (Date object) }
   Example events: "Conference" on Sep 15, "Exam" on Jul 10, "Trip" on Aug 20
5. Sort the events by date (earliest first)
6. For each event, log: "Conference — in 45 days" or "Exam — 12 days ago"
   (calculate the difference from today)

HINT: Use Math.abs() for the absolute difference,
      and check if the difference is positive or negative
*/

const myBirthday = new Date(2026, 7, 15); // August 15, 2026
const todayChallenge = new Date();

const daysUntilBirthday = Math.ceil(
  (myBirthday - todayChallenge) / (1000 * 60 * 60 * 24),
);
console.log(
  daysUntilBirthday > 0
    ? `Birthday is in ${daysUntilBirthday} days`
    : `Birthday was ${Math.abs(daysUntilBirthday)} days ago`,
);

const events = [
  { name: "Conference", date: new Date(2026, 8, 15) },
  { name: "Exam", date: new Date(2026, 6, 10) },
  { name: "Trip", date: new Date(2026, 7, 20) },
];

events.sort((a, b) => a.date - b.date);

events.forEach((event) => {
  const diffInDays = Math.ceil(
    (event.date - todayChallenge) / (1000 * 60 * 60 * 24),
  );
  if (diffInDays > 0) {
    console.log(`${event.name} — in ${diffInDays} days`);
  } else if (diffInDays < 0) {
    console.log(`${event.name} — ${Math.abs(diffInDays)} days ago`);
  } else {
    console.log(`${event.name} — TODAY!`);
  }
});

////////////////////////////////////
// 5. Date Formatting
////////////////////////////////////

const dateForFormat = new Date(2024, 11, 25, 14, 30, 0); // Dec 25, 2024, 2:30 PM
console.log(dateForFormat);

// toLocaleDateString() — თარიღის ნაწილის ფორმატირება ლოკალის მიხედვით
console.log(dateForFormat.toLocaleDateString("en-US")); // '12/25/2024'
console.log(dateForFormat.toLocaleDateString("en-GB")); // '25/12/2024'

// toLocaleTimeString() — დროის ნაწილის ფორმატირება
console.log(dateForFormat.toLocaleTimeString("en-US")); // '2:30:00 PM'
console.log(dateForFormat.toLocaleTimeString("en-GB")); // '14:30:00'

// toLocaleString() — თარიღისა და დროის ფორმატირება
console.log(dateForFormat.toLocaleString("en-US")); // '12/25/2024, 2:30:00 PM'

// toLocaleString ოფციებით — დეტალური კონტროლი გამოსავალზე
const longFormat = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
};
console.log(dateForFormat.toLocaleString("en-US", longFormat));
// 'Wednesday, December 25, 2024'

const shortFormat = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};
console.log(dateForFormat.toLocaleString("en-US", shortFormat));
// 'Dec 25, 2024, 14:30'

// toUTCString() — UTC ფორმატი, ხშირად სერვერებისთვის გამოიყენება
console.log(dateForFormat.toUTCString());
// 'Wed, 25 Dec 2024 ...:30:00 GMT'

// toISOString() — ISO 8601 ფორმატი, სტანდარტი API-ებისა და ბაზებისთვის
console.log(dateForFormat.toISOString());
// '2024-12-25T...:30:00.000Z'

// Intl.DateTimeFormat — მრავალჯერადი ფორმატირების ობიექტი
const formalFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
});
console.log(formalFormatter.format(dateForFormat));
// 'Wednesday, December 25, 2024 at 2:30 PM'

// Intl.RelativeTimeFormat — ადამიანისთვის გასაგები შედარებითი დრო
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log(rtf.format(-1, "day")); // 'yesterday'
console.log(rtf.format(2, "day")); // 'in 2 days'
console.log(rtf.format(-3, "month")); // '3 months ago'
console.log(rtf.format(1, "year")); // 'next year'

// პრაქტიკული მაგალითი — თარიღის ფორმატირების ფუნქცია
const formatDate = function (date, format) {
  const pad = (n) => String(n).padStart(2, "0");
  const replacements = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };
  let result = format;
  for (const [token, value] of Object.entries(replacements)) {
    result = result.replace(token, value);
  }
  return result;
};

console.log(formatDate(new Date(), "YYYY-MM-DD")); // e.g. '2026-06-02'
console.log(formatDate(new Date(), "DD/MM/YYYY HH:mm:ss")); // e.g. '02/06/2026 14:30:00'

////////////////////////////////////
// Coding Challenge: Date Formatting
////////////////////////////////////

/*
Create a function 'formatEventDate' that takes a Date object and returns
a nicely formatted string for an event invitation.

Format: "Saturday, June 15, 2026 at 7:30 PM"

1. Write the function using toLocaleString() with appropriate options
2. Test it with these dates:
   - new Date(2026, 5, 15, 19, 30)  → should show June 15 at 7:30 PM
   - new Date(2026, 11, 31, 23, 59) → should show December 31 at 11:59 PM
3. BONUS: Create a second version 'formatEventDateGE' that formats
   the same date in Georgian locale ('ka-GE')
*/

const formatEventDate = function (date) {
  return date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

console.log(formatEventDate(new Date(2026, 5, 15, 19, 30)));
// 'Monday, June 15, 2026 at 7:30 PM'

console.log(formatEventDate(new Date(2026, 11, 31, 23, 59)));
// 'Thursday, December 31, 2026 at 11:59 PM'

const formatEventDateGE = function (date) {
  return date.toLocaleString("ka-GE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

console.log(formatEventDateGE(new Date(2026, 5, 15, 19, 30)));

////////////////////////////////////
// 6. String Methods
////////////////////////////////////

// სტრინგები უცვლელია (immutable) — ყველა მეთოდი ახალ სტრინგს აბრუნებს

// --- length თვისება ---
const str = "Hello, World!";
console.log(str.length); // 13

// --- indexOf(), lastIndexOf(), includes() ---

const text = "JavaScript is awesome. JavaScript is everywhere.";

// indexOf() — პირველი შემთხვევის პოზიცია (-1 თუ ვერ იპოვა)
console.log(text.indexOf("JavaScript")); // 0
console.log(text.indexOf("Python")); // -1
console.log(text.indexOf("JavaScript", 1)); // 23 (search from index 1)

// lastIndexOf() — ბოლო შემთხვევის პოზიცია
console.log(text.lastIndexOf("JavaScript")); // 23

// includes() — აბრუნებს true/false
console.log(text.includes("awesome")); // true
console.log(text.includes("terrible")); // false

// --- slice(), substring() ---

const fullText = "Hello, World!";

// slice(start, end) — ამოიღებს start-დან end-მდე (end არ შედის)
console.log(fullText.slice(0, 5)); // 'Hello'
console.log(fullText.slice(7)); // 'World!' (from index 7 to end)
console.log(fullText.slice(-6)); // 'orld!' (negative counts from end)
console.log(fullText.slice(0, -1)); // 'Hello, World' (removes last char)

// substring(start, end) — მსგავსი, მაგრამ უარყოფითი ინდექსები არ მუშაობს
console.log(fullText.substring(0, 5)); // 'Hello'
console.log(fullText.substring(7, 12)); // 'World'

// --- toUpperCase(), toLowerCase() ---

console.log("hello".toUpperCase()); // 'HELLO'
console.log("HELLO".toLowerCase()); // 'hello'

// --- trim(), trimStart(), trimEnd() ---

const padded = "  Hello World  ";
console.log(padded.trim()); // 'Hello World'
console.log(padded.trimStart()); // 'Hello World  '
console.log(padded.trimEnd()); // '  Hello World'

// --- replace(), replaceAll() ---

const message = "I love cats. Cats are great!";

// replace() — ცვლის მხოლოდ პირველ შემთხვევას
console.log(message.replace("cats", "dogs"));
// 'I love dogs. Cats are great!'

// replace regex-ით და global ფლაგით — ცვლის ყველას, რეგისტრის მიუხედავად
console.log(message.replace(/cats/gi, "dogs"));
// 'I love dogs. dogs are great!'

// replaceAll() — ცვლის ყველა შემთხვევას (რეგისტრის გათვალისწინებით)
const csvLine = "Ana,95,Math,Passed";
console.log(csvLine.replaceAll(",", " | ")); // 'Ana | 95 | Math | Passed'

// --- split(), join() ორმხრივი გარდაქმნა ---

// split() — ყოფს სტრინგს მასივად
const csv = "Ana,Davit,Nino,Giorgi";
const names = csv.split(",");
console.log(names); // ['Ana', 'Davit', 'Nino', 'Giorgi']

const words = "Hello World JavaScript".split(" ");
console.log(words); // ['Hello', 'World', 'JavaScript']

// ცალკეულ სიმბოლოებად დაყოფა
console.log("Hello".split("")); // ['H', 'e', 'l', 'l', 'o']

// join() — აერთიანებს მასივს სტრინგად (split-ის საპირისპირო)
console.log(names.join(" - ")); // 'Ana - Davit - Nino - Giorgi'

// ორმხრივი: split → ტრანსფორმაცია → join
const titleCase = "hello world from javascript"
  .split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase); // 'Hello World From Javascript'

// --- startsWith(), endsWith() ---

console.log(text.startsWith("Java")); // true
console.log(text.startsWith("Script")); // false
console.log(text.endsWith(".")); // true
console.log(text.endsWith("everywhere.")); // true

// --- repeat(), padStart(), padEnd() ---

// repeat() — იმეორებს სტრინგს n-ჯერ
console.log("Ha".repeat(3)); // 'HaHaHa'
console.log("-".repeat(20)); // '--------------------'

// padStart() — ავსებს თავიდან სასურველ სიგრძემდე
console.log("5".padStart(3, "0")); // '005'
console.log("42".padStart(5, "0")); // '00042'

// padEnd() — ავსებს ბოლოდან
console.log("Hi".padEnd(10, ".")); // 'Hi........'

// პრაქტიკული გამოყენება — საკრედიტო ბარათის ნომრის დაფარვა
const maskCard = function (cardNumber) {
  const cardStr = String(cardNumber);
  const lastFour = cardStr.slice(-4);
  return lastFour.padStart(cardStr.length, "*");
};

console.log(maskCard("4532015112830366")); // '************0366'

// --- at(), charAt() ---

const greeting = "Gamarjoba";

// charAt() — აბრუნებს სიმბოლოს მითითებულ ინდექსზე
console.log(greeting.charAt(0)); // 'G'
console.log(greeting.charAt(4)); // 'r'

// at() — თანამედროვე მეთოდი, უარყოფით ინდექსებს უჭერს მხარს
console.log(greeting.at(0)); // 'G'
console.log(greeting.at(-1)); // 'a' (last character)
console.log(greeting.at(-2)); // 'b' (second to last)

// --- პრაქტიკული მაგალითი: ელფოსტის ვალიდატორი სტრინგ მეთოდებით ---

const validateEmail = function (email) {
  const trimmed = email.trim().toLowerCase();
  const errors = [];

  if (!trimmed.includes("@")) errors.push("Missing @ symbol");
  if (trimmed.indexOf("@") === 0) errors.push("No username before @");
  if (trimmed.indexOf("@") !== trimmed.lastIndexOf("@"))
    errors.push("Multiple @ symbols");
  if (trimmed.includes(" ")) errors.push("Contains spaces");

  if (
    !trimmed.endsWith(".com") &&
    !trimmed.endsWith(".org") &&
    !trimmed.endsWith(".net")
  ) {
    errors.push("Invalid domain extension");
  }

  return { email: trimmed, isValid: errors.length === 0, errors };
};

console.log(validateEmail("giorgi@example.com"));
// { email: 'giorgi@example.com', isValid: true, errors: [] }

console.log(validateEmail("bad@@email"));
// { ..., isValid: false, errors: ['Multiple @ symbols', 'Invalid domain extension'] }

// --- პრაქტიკული მაგალითი: slug გენერატორი ---

const generateSlug = function (title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

console.log(generateSlug("Hello World!")); // 'hello-world'
console.log(generateSlug("  JavaScript Tips & Tricks  ")); // 'javascript-tips--tricks'
console.log(generateSlug("10 Best Practices for Clean Code")); // '10-best-practices-for-clean-code'

////////////////////////////////////
// Coding Challenge: String Methods
////////////////////////////////////

/*
Build a 'textStats' function that analyzes a given text and returns an object:

const sampleText = "  Hello World! Hello JavaScript. hello everyone.  ";

textStats(sampleText) should return:
{
  original: 'Hello World! Hello JavaScript. hello everyone.',
  wordCount: 6,
  charCount: 46,    (after trim, no leading/trailing spaces)
  sentences: 3,
  uppercased: 'HELLO WORLD! HELLO JAVASCRIPT. HELLO EVERYONE.',
  reversed: '.enoyreve olleh .tpircSavaJ olleH !dlroW olleH',
  wordFrequency: { hello: 3, world: 1, javascript: 1, everyone: 1 }
}

Steps:
1. Trim the input first
2. Count words using split(' ')
3. Count characters (length of trimmed string)
4. Count sentences by splitting on '.', '!', or '?' (filter empty)
5. Create the uppercased version
6. Reverse the string using split('') + reverse() + join('')
7. Build a word frequency object:
   - split into words, lowercase each, remove punctuation
   - count how many times each word appears

HINT: To remove punctuation from a word, use replace(/[^a-z]/g, '')
*/

const textStats = function (input) {
  const trimmed = input.trim();
  const wordsArr = trimmed.split(/\s+/);
  const sentences = trimmed.split(/[.!?]/).filter((s) => s.trim().length > 0);
  const reversed = trimmed.split("").reverse().join("");

  const wordFrequency = {};
  wordsArr.forEach((w) => {
    const clean = w.toLowerCase().replace(/[^a-z]/g, "");
    if (clean) wordFrequency[clean] = (wordFrequency[clean] || 0) + 1;
  });

  return {
    original: trimmed,
    wordCount: wordsArr.length,
    charCount: trimmed.length,
    sentences: sentences.length,
    uppercased: trimmed.toUpperCase(),
    reversed,
    wordFrequency,
  };
};

const sampleText = "  Hello World! Hello JavaScript. hello everyone.  ";
const stats = textStats(sampleText);
console.log("Word count:", stats.wordCount); // 6
console.log("Sentences:", stats.sentences); // 3
console.log("Reversed:", stats.reversed);
console.log("Word frequency:", stats.wordFrequency);
// { hello: 3, world: 1, javascript: 1, everyone: 1 }
