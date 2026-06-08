////////////////////////////////////
// Objects, Dates & Strings
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. OBJECT LITERALS
═══════════════════════════════════════════════════════════════

An object is a collection of key-value pairs enclosed in {}.
Properties store data, methods store functions.
Objects let us group related data with descriptive names,
unlike arrays which use numeric indices.
*/

'use strict';

// Creating an object with the object literal syntax
const person = {
  firstName: 'Giorgi',
  lastName: 'Beridze',
  age: 28,
  isStudent: false,
  hobbies: ['reading', 'coding', 'hiking'],
};

// --- Accessing properties ---

// Dot notation — the most common, use when you know the exact property name
console.log(person.firstName); // 'Giorgi'
console.log(person.age); // 28

// Bracket notation — use with dynamic/computed property names
console.log(person['lastName']); // 'Beridze'
console.log(person['hobbies']); // ['reading', 'coding', 'hiking']

// Dynamic access — only bracket notation works here
const key = 'firstName';
console.log(person[key]); // 'Giorgi'

// Building a key from parts
const nameKey = 'Name';
console.log(person['first' + nameKey]); // 'Giorgi'
console.log(person['last' + nameKey]); // 'Beridze'

// --- Adding, modifying and deleting properties ---

person.email = 'giorgi@example.com'; // Add with dot notation
person['phone'] = '+995 555 123456'; // Add with bracket notation
person.age = 29; // Modify existing property
delete person.phone; // Delete a property
console.log(person.email); // 'giorgi@example.com'
console.log(person.phone); // undefined — deleted

// --- Nested objects ---

const student = {
  name: 'Nino',
  address: {
    city: 'Tbilisi',
    street: 'Rustaveli Ave',
    zip: '0108',
  },
  grades: [95, 88, 92],
};

console.log(student.address.city); // 'Tbilisi'
console.log(student['address']['street']); // 'Rustaveli Ave'


/*
═══════════════════════════════════════════════════════════════
2. DESTRUCTURING
═══════════════════════════════════════════════════════════════

Destructuring lets us extract values from objects (or arrays)
into separate variables in a single, clean statement.
*/

// Basic destructuring — variable names must match property names
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // 'Giorgi' 'Beridze' 29

// Renaming during destructuring — when you want different variable names
const { firstName: name1, age: userAge } = person;
console.log(name1, userAge); // 'Giorgi' 29

// Nested destructuring — reach into nested objects
const {
  address: { city, street },
} = student;
console.log(city, street); // 'Tbilisi' 'Rustaveli Ave'

// Default values — if the property doesn't exist
const { nickname = 'Unknown' } = person;
console.log(nickname); // 'Unknown'


/*
═══════════════════════════════════════════════════════════════
3. COMPUTED PROPERTY NAMES & SHORTHAND SYNTAX
═══════════════════════════════════════════════════════════════

ES6 introduced two convenient features for object literals:
- Computed property names: use expressions as keys with []
- Property shorthand: skip the value when the variable name
  matches the key
*/

// Computed property names — expressions inside [] become keys
const field = 'score';
const playerNum = 7;

const gameData = {
  [field]: 100,
  [`player_${playerNum}`]: 'Ronaldo',
  [field + 'Bonus']: 25,
};

console.log(gameData); // { score: 100, player_7: 'Ronaldo', scoreBonus: 25 }

// Property shorthand — no need to write brand: brand
const brand = 'Toyota';
const model = 'Camry';
const year = 2024;

const car = { brand, model, year };
console.log(car); // { brand: 'Toyota', model: 'Camry', year: 2024 }


/*
═══════════════════════════════════════════════════════════════
4. OBJECT METHODS AND `this`
═══════════════════════════════════════════════════════════════

When a function is stored as a property of an object, it is
called a method. Inside a method, the `this` keyword refers
to the object that called the method.
*/

const calculator = {
  result: 0,

  // Shorthand method syntax (modern, preferred)
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

// 'this' points to the object that called the method
console.log(calculator.add(10, 5)); // 15
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.getResult()); // 12

// Practical example — user object with methods using 'this'
const user = {
  firstName: 'Ana',
  lastName: 'Kapanadze',
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

// --- Method chaining ---
// Returning 'this' from a method allows chaining calls together

const bankAccount = {
  owner: 'Davit Maisuradze',
  balance: 1500,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
    console.log(`Deposited $${amount}. Balance: $${this.balance}`);
    return this; // Returning this enables chaining
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds!');
      return this;
    }
    this.balance -= amount;
    this.transactions.push({ type: 'withdrawal', amount });
    console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
    return this;
  },
};

bankAccount.deposit(500).deposit(200).withdraw(100);
// Deposited $500. Balance: $2000
// Deposited $200. Balance: $2200
// Withdrew $100. Balance: $2100

// Why use 'this' instead of the object name?
// - 'this' is dynamic: works even if the variable name changes
// - bankAccount.balance works but is fragile (hardcoded name)
// - this.balance is flexible and self-referencing

// NOTE: Arrow functions do NOT get their own 'this' keyword
// So do NOT use arrow functions as object methods!


/*
═══════════════════════════════════════════════════════════════
5. Object.keys(), Object.values(), Object.entries()
═══════════════════════════════════════════════════════════════

These static methods let us convert an object's properties
into arrays so we can loop, filter, map, and reduce them.
*/

const laptop = {
  brand: 'Dell',
  model: 'XPS 15',
  price: 2500,
  color: 'silver',
};

// Object.keys() — returns an array of property names (keys)
console.log(Object.keys(laptop)); // ['brand', 'model', 'price', 'color']

// Object.values() — returns an array of property values
console.log(Object.values(laptop)); // ['Dell', 'XPS 15', 2500, 'silver']

// Object.entries() — returns an array of [key, value] pairs
console.log(Object.entries(laptop));
// [['brand','Dell'], ['model','XPS 15'], ['price',2500], ['color','silver']]

// Iterating with for...of and destructuring
for (const [propKey, propValue] of Object.entries(laptop)) {
  console.log(`${propKey}: ${propValue}`);
}
// brand: Dell
// model: XPS 15
// price: 2500
// color: silver

// Practical example — student grades
const grades = {
  Math: 95,
  Physics: 82,
  Chemistry: 91,
  English: 88,
  History: 76,
};

// Calculate average using Object.values
const gradeValues = Object.values(grades);
const average =
  gradeValues.reduce((sum, g) => sum + g, 0) / gradeValues.length;
console.log(`Average grade: ${average.toFixed(1)}`); // 86.4

// Find subjects with grade > 85 using Object.entries
const strongSubjects = Object.entries(grades)
  .filter(([, grade]) => grade > 85)
  .map(([subject]) => subject);
console.log('Strong subjects:', strongSubjects.join(', '));
// 'Strong subjects: Math, Chemistry, English'

// for...in loop — also iterates over an object's keys
const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45,
  grapes: 0,
  mangoes: 12,
};

for (const fruit in inventory) {
  console.log(`${fruit}: ${inventory[fruit]} units`);
}


/*
═══════════════════════════════════════════════════════════════
6. ARRAYS OF OBJECTS
═══════════════════════════════════════════════════════════════

Real-world data often comes as arrays of objects. We combine
array methods (find, filter, map, reduce, sort) with object
property access to process this data.
*/

const employees = [
  { name: 'Ana', department: 'Engineering', salary: 75000, yearsExp: 5 },
  { name: 'Davit', department: 'Marketing', salary: 62000, yearsExp: 3 },
  { name: 'Nino', department: 'Engineering', salary: 88000, yearsExp: 8 },
  { name: 'Giorgi', department: 'Design', salary: 58000, yearsExp: 2 },
  { name: 'Mariam', department: 'Marketing', salary: 71000, yearsExp: 6 },
  { name: 'Luka', department: 'Engineering', salary: 95000, yearsExp: 10 },
  { name: 'Elene', department: 'Design', salary: 67000, yearsExp: 4 },
];

// find() — returns the first matching element
const seniorDev = employees.find(e => e.yearsExp >= 10);
console.log('Senior dev:', seniorDev.name); // 'Luka'

// filter() — returns all matching elements
const engineers = employees.filter(e => e.department === 'Engineering');
console.log('Engineers:', engineers.map(e => e.name).join(', '));
// 'Ana, Nino, Luka'

// map() — transforms each element
const employeeCards = employees.map(e => ({
  label: `${e.name} (${e.department})`,
  seniorLevel: e.yearsExp >= 5,
}));
console.log(employeeCards);

// reduce() — compute a single value from the array
const totalPayroll = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(`Total payroll: $${totalPayroll.toLocaleString()}`);
// 'Total payroll: $516,000'

// reduce to group by department
const byDepartment = employees.reduce((groups, e) => {
  if (!groups[e.department]) groups[e.department] = [];
  groups[e.department].push(e.name);
  return groups;
}, {});
console.log('By department:', byDepartment);
// { Engineering: ['Ana','Nino','Luka'], Marketing: ['Davit','Mariam'], Design: ['Giorgi','Elene'] }

// sort() — sort by salary descending (spread to avoid mutating original)
const bySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log(
  'Highest paid:',
  bySalary.map(e => `${e.name}($${e.salary})`).join(', ')
);

// Alphabetical sort by name
const byName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
console.log('Alphabetical:', byName.map(e => e.name).join(', '));

// Method chaining — filter engineers, sort by experience, format
const engineerRanking = employees
  .filter(e => e.department === 'Engineering')
  .sort((a, b) => b.yearsExp - a.yearsExp)
  .map((e, i) => `${i + 1}. ${e.name} — ${e.yearsExp} years`)
  .join('\n');
console.log('Engineering team ranking:\n' + engineerRanking);

// Practical example — shopping cart
const cart = [
  { product: 'Laptop', price: 999, quantity: 1 },
  { product: 'Mouse', price: 29, quantity: 2 },
  { product: 'Keyboard', price: 79, quantity: 1 },
  { product: 'Monitor', price: 349, quantity: 1 },
  { product: 'USB Cable', price: 12, quantity: 3 },
];

const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
console.log(`Cart total: $${cartTotal}`); // $1,492

const expensiveItems = cart
  .filter(item => item.price * item.quantity > 50)
  .map(item => `${item.product}: $${item.price * item.quantity}`);
console.log('Expensive items:', expensiveItems.join(', '));


/*
═══════════════════════════════════════════════════════════════
7. DATE OBJECT
═══════════════════════════════════════════════════════════════

JavaScript's built-in Date object represents a single moment
in time. It stores the number of milliseconds since
January 1, 1970 (Unix epoch).
*/

// --- Creating dates: four ways ---

// 1. Current date and time
const now = new Date();
console.log('Now:', now);

// 2. From a date string
const christmas = new Date('2024-12-25');
console.log('Christmas 2024:', christmas);

// 3. From arguments (year, month, day, hour, minute, second)
// IMPORTANT: Month is 0-indexed! (0 = January, 11 = December)
const newYear = new Date(2025, 0, 1, 0, 0, 0);
console.log('New Year 2025:', newYear);

// 4. From a timestamp (milliseconds since Jan 1, 1970)
console.log('Epoch:', new Date(0)); // Jan 1, 1970
console.log('Timestamp now:', Date.now()); // current timestamp

// --- Getter methods ---

const today = new Date();

console.log('Full year:', today.getFullYear()); // e.g. 2026
console.log('Month (0-indexed):', today.getMonth()); // 0-11
console.log('Date (day of month):', today.getDate()); // 1-31
console.log('Day of week:', today.getDay()); // 0=Sunday, 6=Saturday
console.log('Hours:', today.getHours()); // 0-23
console.log('Minutes:', today.getMinutes()); // 0-59
console.log('Seconds:', today.getSeconds()); // 0-59

// Converting getMonth() and getDay() to readable names
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday',
];

console.log(
  `Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]}`
);

// --- Setter methods ---

const someDate = new Date(2024, 5, 15); // June 15, 2024
console.log('Original:', someDate);

someDate.setFullYear(2025);
console.log('After setFullYear(2025):', someDate);

someDate.setMonth(11); // December
console.log('After setMonth(11):', someDate);

someDate.setDate(25);
console.log('After setDate(25):', someDate); // December 25, 2025

// --- Date arithmetic ---

// Difference between two dates (in milliseconds, then convert)
const startDate = new Date(2024, 0, 1);
const endDate = new Date(2024, 11, 31);

const diffMs = endDate - startDate;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(`Days between Jan 1 and Dec 31, 2024: ${Math.round(diffDays)}`);

// Helper function: add days to a date
const addDays = function (date, numDays) {
  const result = new Date(date);
  result.setDate(result.getDate() + numDays);
  return result;
};

console.log('One week from now:', addDays(new Date(), 7));
console.log('30 days from now:', addDays(new Date(), 30));

// Practical example — age calculator
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

console.log(`Age for 1995-06-15: ${calculateAge('1995-06-15')}`);
console.log(`Age for 2000-01-01: ${calculateAge('2000-01-01')}`);

// Practical example — days until an event
const daysUntil = function (eventDateStr) {
  const eventDate = new Date(eventDateStr);
  const diff = eventDate - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const nextNewYear = `${new Date().getFullYear() + 1}-01-01`;
console.log(`Days until New Year: ${daysUntil(nextNewYear)}`);


/*
═══════════════════════════════════════════════════════════════
8. DATE FORMATTING
═══════════════════════════════════════════════════════════════

JavaScript provides multiple ways to format dates for display.
The Intl (Internationalization) API is the modern, recommended
approach for locale-aware formatting.
*/

const dateForFormat = new Date(2024, 11, 25, 14, 30, 0); // Dec 25, 2024, 2:30 PM
console.log(dateForFormat);

// toLocaleDateString() — formats the date part based on locale
console.log(dateForFormat.toLocaleDateString('en-US')); // '12/25/2024'
console.log(dateForFormat.toLocaleDateString('en-GB')); // '25/12/2024'

// toLocaleTimeString() — formats the time part
console.log(dateForFormat.toLocaleTimeString('en-US')); // '2:30:00 PM'
console.log(dateForFormat.toLocaleTimeString('en-GB')); // '14:30:00'

// toLocaleString() — formats both date and time
console.log(dateForFormat.toLocaleString('en-US')); // '12/25/2024, 2:30:00 PM'

// toLocaleString with options — detailed control over output
const longFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
console.log(dateForFormat.toLocaleString('en-US', longFormat));
// 'Wednesday, December 25, 2024'

const shortFormat = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};
console.log(dateForFormat.toLocaleString('en-US', shortFormat));
// 'Dec 25, 2024, 14:30'

// toUTCString() — UTC format, often used for servers
console.log(dateForFormat.toUTCString());

// toISOString() — ISO 8601 format, standard for APIs and databases
console.log(dateForFormat.toISOString());
// '2024-12-25T...:30:00.000Z'

// Intl.DateTimeFormat — reusable formatter object
const formalFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
});
console.log(formalFormatter.format(dateForFormat));
// 'Wednesday, December 25, 2024 at 2:30 PM'

// Intl.RelativeTimeFormat — human-readable relative time
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day')); // 'yesterday'
console.log(rtf.format(2, 'day')); // 'in 2 days'
console.log(rtf.format(-3, 'month')); // '3 months ago'
console.log(rtf.format(1, 'year')); // 'next year'

// Practical example — custom date formatting function
const formatDate = function (date, format) {
  const pad = n => String(n).padStart(2, '0');
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

console.log(formatDate(new Date(), 'YYYY-MM-DD')); // e.g. '2026-06-08'
console.log(formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss'));


/*
═══════════════════════════════════════════════════════════════
9. STRING METHODS
═══════════════════════════════════════════════════════════════

Strings are immutable in JavaScript — every string method
returns a NEW string without modifying the original.
Strings are also iterable and have a .length property.
*/

// --- length property ---
const str = 'Hello, World!';
console.log(str.length); // 13

// --- indexOf(), lastIndexOf(), includes() ---

const text = 'JavaScript is awesome. JavaScript is everywhere.';

// indexOf() — position of the first occurrence (-1 if not found)
console.log(text.indexOf('JavaScript')); // 0
console.log(text.indexOf('Python')); // -1
console.log(text.indexOf('JavaScript', 1)); // 23 (search from index 1)

// lastIndexOf() — position of the last occurrence
console.log(text.lastIndexOf('JavaScript')); // 23

// includes() — returns true/false
console.log(text.includes('awesome')); // true
console.log(text.includes('terrible')); // false

// --- slice(), substring() ---

const fullText = 'Hello, World!';

// slice(start, end) — extracts from start to end (end not included)
console.log(fullText.slice(0, 5)); // 'Hello'
console.log(fullText.slice(7)); // 'World!' (from index 7 to end)
console.log(fullText.slice(-6)); // 'orld!' (negative counts from end)
console.log(fullText.slice(0, -1)); // 'Hello, World' (removes last char)

// substring(start, end) — similar, but negative indices don't work
console.log(fullText.substring(0, 5)); // 'Hello'
console.log(fullText.substring(7, 12)); // 'World'

// --- toUpperCase(), toLowerCase() ---

console.log('hello'.toUpperCase()); // 'HELLO'
console.log('HELLO'.toLowerCase()); // 'hello'

// --- trim(), trimStart(), trimEnd() ---

const padded = '  Hello World  ';
console.log(padded.trim()); // 'Hello World'
console.log(padded.trimStart()); // 'Hello World  '
console.log(padded.trimEnd()); // '  Hello World'

// --- replace(), replaceAll() ---

const message = 'I love cats. Cats are great!';

// replace() — replaces only the first occurrence
console.log(message.replace('cats', 'dogs'));
// 'I love dogs. Cats are great!'

// replace with regex and global flag — replaces all, case-insensitive
console.log(message.replace(/cats/gi, 'dogs'));
// 'I love dogs. dogs are great!'

// replaceAll() — replaces all occurrences (case-sensitive)
const csvLine = 'Ana,95,Math,Passed';
console.log(csvLine.replaceAll(',', ' | ')); // 'Ana | 95 | Math | Passed'

// --- split() and join() — bidirectional conversion ---

// split() — splits a string into an array
const csv = 'Ana,Davit,Nino,Giorgi';
const names = csv.split(',');
console.log(names); // ['Ana', 'Davit', 'Nino', 'Giorgi']

const words = 'Hello World JavaScript'.split(' ');
console.log(words); // ['Hello', 'World', 'JavaScript']

// Split into individual characters
console.log('Hello'.split('')); // ['H', 'e', 'l', 'l', 'o']

// join() — joins an array into a string (opposite of split)
console.log(names.join(' - ')); // 'Ana - Davit - Nino - Giorgi'

// Round-trip: split → transform → join
const titleCase = 'hello world from javascript'
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(titleCase); // 'Hello World From Javascript'

// --- startsWith(), endsWith() ---

console.log(text.startsWith('Java')); // true
console.log(text.startsWith('Script')); // false
console.log(text.endsWith('.')); // true
console.log(text.endsWith('everywhere.')); // true

// --- repeat(), padStart(), padEnd() ---

// repeat() — repeats the string n times
console.log('Ha'.repeat(3)); // 'HaHaHa'
console.log('-'.repeat(20)); // '--------------------'

// padStart() — pads from the beginning to the desired length
console.log('5'.padStart(3, '0')); // '005'
console.log('42'.padStart(5, '0')); // '00042'

// padEnd() — pads from the end
console.log('Hi'.padEnd(10, '.')); // 'Hi........'

// Practical use — credit card masking
const maskCard = function (cardNumber) {
  const cardStr = String(cardNumber);
  const lastFour = cardStr.slice(-4);
  return lastFour.padStart(cardStr.length, '*');
};

console.log(maskCard('4532015112830366')); // '************0366'

// --- at(), charAt() ---

const greeting = 'Gamarjoba';

// charAt() — returns the character at the given index
console.log(greeting.charAt(0)); // 'G'
console.log(greeting.charAt(4)); // 'r'

// at() — modern method, supports negative indices
console.log(greeting.at(0)); // 'G'
console.log(greeting.at(-1)); // 'a' (last character)
console.log(greeting.at(-2)); // 'b' (second to last)


/*
═══════════════════════════════════════════════════════════════
10. PRACTICAL EXAMPLES
═══════════════════════════════════════════════════════════════

Combining objects, dates, and strings in real-world scenarios.
*/

// --- Email validator using string methods ---

const validateEmail = function (email) {
  const trimmed = email.trim().toLowerCase();
  const errors = [];

  if (!trimmed.includes('@')) errors.push('Missing @ symbol');
  if (trimmed.indexOf('@') === 0) errors.push('No username before @');
  if (trimmed.indexOf('@') !== trimmed.lastIndexOf('@'))
    errors.push('Multiple @ symbols');
  if (trimmed.includes(' ')) errors.push('Contains spaces');

  if (
    !trimmed.endsWith('.com') &&
    !trimmed.endsWith('.org') &&
    !trimmed.endsWith('.net')
  ) {
    errors.push('Invalid domain extension');
  }

  return { email: trimmed, isValid: errors.length === 0, errors };
};

console.log(validateEmail('giorgi@example.com'));
// { email: 'giorgi@example.com', isValid: true, errors: [] }

console.log(validateEmail('bad@@email'));
// { ..., isValid: false, errors: ['Multiple @ symbols', 'Invalid domain extension'] }

// --- Slug generator ---

const generateSlug = function (title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

console.log(generateSlug('Hello World!')); // 'hello-world'
console.log(generateSlug('  JavaScript Tips & Tricks  ')); // 'javascript-tips--tricks'
console.log(generateSlug('10 Best Practices for Clean Code'));
// '10-best-practices-for-clean-code'

// --- Text statistics analyzer ---

const textStats = function (input) {
  const trimmed = input.trim();
  const wordsArr = trimmed.split(/\s+/);
  const sentences = trimmed.split(/[.!?]/).filter(s => s.trim().length > 0);
  const reversed = trimmed.split('').reverse().join('');

  const wordFrequency = {};
  wordsArr.forEach(w => {
    const clean = w.toLowerCase().replace(/[^a-z]/g, '');
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

const sampleText = '  Hello World! Hello JavaScript. hello everyone.  ';
const stats = textStats(sampleText);
console.log('Word count:', stats.wordCount); // 6
console.log('Sentences:', stats.sentences); // 3
console.log('Word frequency:', stats.wordFrequency);
// { hello: 3, world: 1, javascript: 1, everyone: 1 }


/*
═══════════════════════════════════════════════════════════════
SUMMARY — OBJECTS, DATES & STRINGS
═══════════════════════════════════════════════════════════════

OBJECTS:
- Key-value pairs: { key: value }
- Dot notation: obj.key (simple, when key is known)
- Bracket notation: obj["key"] (for computed/dynamic keys)
- Destructuring: const { a, b } = obj (extract to variables)
- Computed keys: { [expression]: value }
- Shorthand: { variable } when key name matches variable name
- Methods: functions stored as properties, use 'this'
- Chaining: return 'this' from methods to allow .a().b().c()

OBJECT STATIC METHODS:
- Object.keys(obj) → array of keys
- Object.values(obj) → array of values
- Object.entries(obj) → array of [key, value] pairs

ARRAYS OF OBJECTS:
- find() → first match
- filter() → all matches
- map() → transform each element
- reduce() → compute single value
- sort() → order elements (use [...arr] to avoid mutating)
- Chain: arr.filter().sort().map().join()

DATES:
- Create: new Date(), new Date("2024-12-25"), new Date(y, m, d)
- Month is 0-indexed (0 = January)
- Getters: getFullYear(), getMonth(), getDate(), getDay()
- Setters: setFullYear(), setMonth(), setDate()
- Arithmetic: date2 - date1 gives milliseconds
- Formatting: toLocaleDateString(), toLocaleString(),
  Intl.DateTimeFormat, Intl.RelativeTimeFormat

STRINGS:
- Immutable: all methods return new strings
- Search: indexOf(), lastIndexOf(), includes()
- Extract: slice(), substring()
- Case: toUpperCase(), toLowerCase()
- Clean: trim(), trimStart(), trimEnd()
- Replace: replace(), replaceAll()
- Convert: split() → array, join() → string
- Check: startsWith(), endsWith()
- Format: repeat(), padStart(), padEnd()
- Access: charAt(), at() (at supports negative indices)
*/
