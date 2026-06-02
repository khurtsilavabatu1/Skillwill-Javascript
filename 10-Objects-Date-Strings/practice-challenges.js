'use strict';

////////////////////////////////////
// Objects, Date & Strings
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Student Profile Manager
// (Objects -- Creation, Properties, Methods)

/*
Build a student profile system using objects with properties and methods.

1. Create an object 'student1' with these properties:
   - firstName: 'Ana'
   - lastName: 'Kvirikashvili'
   - age: 21
   - course: 'Computer Science'
   - grades: [85, 92, 78, 95, 88]
   - A method 'getFullName' that returns the full name using 'this'
   - A method 'calcAverage' that uses a for loop to calculate and return the
     average of the grades array
   - A method 'getStatus' that returns:
     "Excellent" if average >= 90
     "Good" if average >= 75 and < 90
     "Needs Improvement" if average < 75
   - A method 'getSummary' that returns a string like:
     "Ana Kvirikashvili (21) - Computer Science | Average: 87.6 - Good"

2. Create a second object 'student2' with:
   - firstName: 'Luka'
   - lastName: 'Beridze'
   - age: 23
   - course: 'Mathematics'
   - grades: [92, 96, 89, 94, 91]
   - The same methods as student1

3. Log the full name of each student using getFullName()
4. Log the average of each student using calcAverage()
5. Log the full summary of each student using getSummary()
6. Compare both students and log who has the higher average
7. Add a new property 'email' to student1 using dot notation
8. Add a new property 'year' to student2 using bracket notation
9. Use Object.keys() to list all property names of student1
10. Use Object.values() to list all values of student2

TEST DATA: Use the data described above

HINT: In object methods, use 'this' to access the object's own properties
HINT: this.grades.length gives you the number of grades
HINT: getSummary can call this.calcAverage() and this.getStatus() internally

GOOD LUCK :)
*/

// const student1 = {
//   firstName: 'Ana',
//   lastName: 'Kvirikashvili',
//   age: 21,
//   course: 'Computer Science',
//   grades: [85, 92, 78, 95, 88],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   calcAverage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
//   getStatus: function () {
//     const avg = this.calcAverage();
//     if (avg >= 90) return 'Excellent';
//     else if (avg >= 75) return 'Good';
//     else return 'Needs Improvement';
//   },
//   getSummary: function () {
//     return `${this.getFullName()} (${this.age}) - ${this.course} | Average: ${this.calcAverage()} - ${this.getStatus()}`;
//   },
// };

// const student2 = {
//   firstName: 'Luka',
//   lastName: 'Beridze',
//   age: 23,
//   course: 'Mathematics',
//   grades: [92, 96, 89, 94, 91],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   calcAverage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
//   getStatus: function () {
//     const avg = this.calcAverage();
//     if (avg >= 90) return 'Excellent';
//     else if (avg >= 75) return 'Good';
//     else return 'Needs Improvement';
//   },
//   getSummary: function () {
//     return `${this.getFullName()} (${this.age}) - ${this.course} | Average: ${this.calcAverage()} - ${this.getStatus()}`;
//   },
// };

// // Full names
// console.log(student1.getFullName());
// console.log(student2.getFullName());

// // Averages
// console.log(`${student1.firstName}'s average: ${student1.calcAverage()}`);
// console.log(`${student2.firstName}'s average: ${student2.calcAverage()}`);

// // Summaries
// console.log(student1.getSummary());
// console.log(student2.getSummary());

// // Compare
// const avg1 = student1.calcAverage();
// const avg2 = student2.calcAverage();
// if (avg1 > avg2) {
//   console.log(`${student1.getFullName()} has the higher average!`);
// } else if (avg2 > avg1) {
//   console.log(`${student2.getFullName()} has the higher average!`);
// } else {
//   console.log("Both students have the same average!");
// }

// // Add new properties
// student1.email = 'ana.k@university.ge';
// student2['year'] = 3;

// // Object.keys and Object.values
// console.log('Student1 keys:', Object.keys(student1));
// console.log('Student2 values:', Object.values(student2));


////////////////////////////////////
// Practice Challenge #2 - Product Catalog
// (Array of Objects -- Data Processing)

/*
Build a product catalog system using an array of objects and array methods.

1. Create an array 'products' with these product objects:
   { name: 'Laptop', category: 'Electronics', price: 2500, inStock: true }
   { name: 'Headphones', category: 'Electronics', price: 150, inStock: true }
   { name: 'Desk Chair', category: 'Furniture', price: 450, inStock: false }
   { name: 'Keyboard', category: 'Electronics', price: 80, inStock: true }
   { name: 'Bookshelf', category: 'Furniture', price: 320, inStock: true }
   { name: 'Monitor', category: 'Electronics', price: 600, inStock: false }
   { name: 'Desk Lamp', category: 'Furniture', price: 45, inStock: true }

2. Use find() to locate the product named 'Keyboard' and log it
3. Use filter() to get all products in the 'Electronics' category
4. Use filter() to get all products that are in stock
5. Use map() to create an array of product names only
6. Use map() to create an array of objects with name and discounted price
   (20% off): { name: '...', discountPrice: ... }
7. Use reduce() to calculate the total price of all products
8. Use reduce() to find the most expensive product
9. Sort the products by price (ascending) using sort()
10. Sort the products by price (descending) using sort()
11. Use forEach() to log each product as: "Laptop - $2500 (Electronics)"
12. Chain filter and map: get names of in-stock Electronics products

TEST DATA: Use the products listed above

HINT: find() returns the first matching element, filter() returns all matches
HINT: reduce() takes (accumulator, currentValue) => ... and an initial value
HINT: sort() modifies the original array — use [...products].sort() for a copy
HINT: For chaining, you can do products.filter(...).map(...)

GOOD LUCK :)
*/

// const products = [
//   { name: 'Laptop', category: 'Electronics', price: 2500, inStock: true },
//   { name: 'Headphones', category: 'Electronics', price: 150, inStock: true },
//   { name: 'Desk Chair', category: 'Furniture', price: 450, inStock: false },
//   { name: 'Keyboard', category: 'Electronics', price: 80, inStock: true },
//   { name: 'Bookshelf', category: 'Furniture', price: 320, inStock: true },
//   { name: 'Monitor', category: 'Electronics', price: 600, inStock: false },
//   { name: 'Desk Lamp', category: 'Furniture', price: 45, inStock: true },
// ];

// // 2. Find keyboard
// const keyboard = products.find(p => p.name === 'Keyboard');
// console.log('Found:', keyboard);

// // 3. Filter by category
// const electronics = products.filter(p => p.category === 'Electronics');
// console.log('Electronics:', electronics);

// // 4. Filter in-stock
// const inStockProducts = products.filter(p => p.inStock);
// console.log('In stock:', inStockProducts);

// // 5. Map to names only
// const productNames = products.map(p => p.name);
// console.log('Product names:', productNames);

// // 6. Map to discounted prices
// const discounted = products.map(p => ({
//   name: p.name,
//   discountPrice: p.price * 0.8,
// }));
// console.log('Discounted:', discounted);

// // 7. Reduce total price
// const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
// console.log('Total price:', totalPrice);

// // 8. Reduce to find most expensive
// const mostExpensive = products.reduce((max, p) =>
//   p.price > max.price ? p : max
// );
// console.log('Most expensive:', mostExpensive);

// // 9. Sort ascending
// const sortedAsc = [...products].sort((a, b) => a.price - b.price);
// console.log('Sorted ascending:', sortedAsc);

// // 10. Sort descending
// const sortedDesc = [...products].sort((a, b) => b.price - a.price);
// console.log('Sorted descending:', sortedDesc);

// // 11. forEach log
// products.forEach(p =>
//   console.log(`${p.name} - $${p.price} (${p.category})`)
// );

// // 12. Chain filter + map
// const inStockElectronicsNames = products
//   .filter(p => p.category === 'Electronics' && p.inStock)
//   .map(p => p.name);
// console.log('In-stock Electronics:', inStockElectronicsNames);


////////////////////////////////////
// Practice Challenge #3 - Event Countdown
// (Date Object)

/*
Build an event countdown calculator that works with Date objects.

1. Create a function 'createEventDate' that takes a date string
   (e.g., '2026-12-31') and returns a new Date object

2. Create a function 'getEventDetails' that takes a Date object and returns
   an object with:
   - year: using getFullYear()
   - month: using getMonth() + 1 (since getMonth is 0-indexed)
   - day: using getDate()
   - hours: using getHours()
   - minutes: using getMinutes()
   - dayOfWeek: using getDay() converted to a name
     (0=Sunday, 1=Monday, ..., 6=Saturday)

3. Create a function 'calcCountdown' that takes an event date string and
   returns an object with days, hours, and minutes remaining until the event.
   - Create a Date for "now" and a Date for the event
   - Calculate the difference in milliseconds
   - Convert to days, hours, and minutes
   - If the event has passed, return { passed: true }

4. Create a function 'formatDate' that takes a Date object and returns
   a nicely formatted string using toLocaleDateString() and toLocaleTimeString()
   Example: "December 31, 2026, 12:00:00 AM"

5. Create a function 'compareDates' that takes two date strings and returns
   which one comes first
   Example: "2026-06-15 comes before 2026-12-31"

6. Test all functions with these dates:
   - Event 1: '2026-12-31T23:59:59' (New Year's Eve)
   - Event 2: '2026-07-04T12:00:00' (July 4th)
7. Log the details, countdown, and formatted version of each event
8. Compare the two dates

TEST DATA: Use the event dates described above

HINT: Difference in ms: eventDate - now (dates can be subtracted)
HINT: 1 day = 24 * 60 * 60 * 1000 milliseconds
HINT: Use Math.floor() to get whole numbers for days/hours/minutes
HINT: getDay() returns 0 for Sunday — use an array of day names

GOOD LUCK :)
*/

// const createEventDate = function (dateStr) {
//   return new Date(dateStr);
// };

// const getEventDetails = function (date) {
//   const dayNames = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   return {
//     year: date.getFullYear(),
//     month: date.getMonth() + 1,
//     day: date.getDate(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     dayOfWeek: dayNames[date.getDay()],
//   };
// };

// const calcCountdown = function (eventDateStr) {
//   const now = new Date();
//   const eventDate = new Date(eventDateStr);
//   const diffMs = eventDate - now;

//   if (diffMs < 0) {
//     return { passed: true };
//   }

//   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//   return { days, hours, minutes };
// };

// const formatDate = function (date) {
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }) + ', ' + date.toLocaleTimeString('en-US');
// };

// const compareDates = function (dateStr1, dateStr2) {
//   const date1 = new Date(dateStr1);
//   const date2 = new Date(dateStr2);
//   if (date1 < date2) {
//     return `${dateStr1} comes before ${dateStr2}`;
//   } else if (date1 > date2) {
//     return `${dateStr2} comes before ${dateStr1}`;
//   } else {
//     return `Both dates are the same`;
//   }
// };

// // Test with events
// const event1Str = '2026-12-31T23:59:59';
// const event2Str = '2026-07-04T12:00:00';

// const event1 = createEventDate(event1Str);
// const event2 = createEventDate(event2Str);

// // Event details
// console.log('--- Event 1: New Year\'s Eve ---');
// console.log('Details:', getEventDetails(event1));
// console.log('Countdown:', calcCountdown(event1Str));
// console.log('Formatted:', formatDate(event1));

// console.log('\n--- Event 2: July 4th ---');
// console.log('Details:', getEventDetails(event2));
// console.log('Countdown:', calcCountdown(event2Str));
// console.log('Formatted:', formatDate(event2));

// // Compare
// console.log('\n' + compareDates(event1Str, event2Str));


////////////////////////////////////
// Practice Challenge #4 - Text Analyzer
// (String Methods)

/*
Build a text analysis tool using string methods.

1. Create a variable 'paragraph' with this text:
   "JavaScript is a versatile programming language. JavaScript is used for
   web development, server-side applications, and mobile apps. Learning
   JavaScript opens many doors for developers around the world."

2. Create a function 'countWords' that takes a string, splits it by spaces,
   and returns the word count

3. Create a function 'findLongestWord' that takes a string, splits into words,
   and uses a for loop to find and return the longest word
   HINT: Remove punctuation with replace(/[.,!?;:]/g, '') before comparing

4. Create a function 'countChar' that takes a string and a character,
   converts both to lowercase, and counts occurrences using a for loop
   with indexOf and a starting position

5. Create a function 'replaceWord' that takes a string, an old word, and a
   new word, and returns the string with ALL occurrences replaced
   Use split(oldWord).join(newWord) or replaceAll()

6. Create a function 'toTitleCase' that takes a string and converts it to
   title case (first letter of each word capitalized, rest lowercase)
   Use: split, loop with slice/toUpperCase/toLowerCase, join

7. Create a function 'extractEmails' that takes a string and returns an
   array of email addresses found in it
   HINT: Split by spaces, filter words that include '@' and '.'

8. Create a function 'truncateText' that takes a string and a max length,
   and returns the string truncated with '...' if it exceeds the max length
   Use: slice

9. Test all functions and log the results

TEST DATA: Use the paragraph described above
TEST DATA for emails: "Contact us at info@example.com or support@test.org for help"

HINT: str.split(' ') splits a string into an array of words
HINT: str.indexOf(char, startPos) finds next occurrence after startPos
HINT: word[0].toUpperCase() + word.slice(1).toLowerCase() capitalizes first letter

GOOD LUCK :)
*/

// const paragraph =
//   'JavaScript is a versatile programming language. JavaScript is used for web development, server-side applications, and mobile apps. Learning JavaScript opens many doors for developers around the world.';

// // Count words
// const countWords = function (str) {
//   return str.split(' ').length;
// };

// // Find longest word
// const findLongestWord = function (str) {
//   const words = str.split(' ');
//   let longest = '';
//   for (let i = 0; i < words.length; i++) {
//     const cleaned = words[i].replace(/[.,!?;:]/g, '');
//     if (cleaned.length > longest.length) {
//       longest = cleaned;
//     }
//   }
//   return longest;
// };

// // Count character occurrences
// const countChar = function (str, char) {
//   const lowerStr = str.toLowerCase();
//   const lowerChar = char.toLowerCase();
//   let count = 0;
//   let pos = lowerStr.indexOf(lowerChar);
//   while (pos !== -1) {
//     count++;
//     pos = lowerStr.indexOf(lowerChar, pos + 1);
//   }
//   return count;
// };

// // Replace word
// const replaceWord = function (str, oldWord, newWord) {
//   return str.split(oldWord).join(newWord);
// };

// // Title case
// const toTitleCase = function (str) {
//   const words = str.toLowerCase().split(' ');
//   const titled = [];
//   for (let i = 0; i < words.length; i++) {
//     titled.push(words[i][0].toUpperCase() + words[i].slice(1));
//   }
//   return titled.join(' ');
// };

// // Extract emails
// const extractEmails = function (str) {
//   const words = str.split(' ');
//   const emails = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes('@') && words[i].includes('.')) {
//       emails.push(words[i]);
//     }
//   }
//   return emails;
// };

// // Truncate text
// const truncateText = function (str, maxLen) {
//   if (str.length <= maxLen) return str;
//   return str.slice(0, maxLen) + '...';
// };

// // Test all functions
// console.log('--- Text Analyzer ---');
// console.log(`Word count: ${countWords(paragraph)}`);
// console.log(`Longest word: ${findLongestWord(paragraph)}`);
// console.log(`Count of 'a': ${countChar(paragraph, 'a')}`);
// console.log(`Count of 'e': ${countChar(paragraph, 'e')}`);
// console.log(`Replace 'JavaScript' with 'JS': ${replaceWord(paragraph, 'JavaScript', 'JS')}`);
// console.log(`Title case: ${toTitleCase('hello world from javascript')}`);

// const emailText = 'Contact us at info@example.com or support@test.org for help';
// console.log(`Emails found: ${extractEmails(emailText)}`);
// console.log(`Truncated: ${truncateText(paragraph, 50)}`);


////////////////////////////////////
// Practice Challenge #5 - Contact Book App
// (Objects + Arrays + Date + Strings Combined)

/*
Build a complete contact book application combining objects, arrays, Date,
and string methods.

1. Create an array 'contacts' with these contact objects:
   {
     name: 'Ana Kvirikashvili',
     email: 'ana.k@email.com',
     phone: '+995-555-12-34-56',
     birthday: new Date(2000, 2, 15),  // March 15, 2000
     tags: ['friend', 'university']
   }
   {
     name: 'Luka Beridze',
     email: 'luka.b@email.com',
     phone: '+995-555-98-76-54',
     birthday: new Date(1998, 6, 22),  // July 22, 1998
     tags: ['colleague', 'developer']
   }
   {
     name: 'Nino Lomidze',
     email: 'nino.l@email.com',
     phone: '+995-555-11-22-33',
     birthday: new Date(2001, 11, 5),  // December 5, 2001
     tags: ['friend', 'neighbor']
   }
   {
     name: 'Giorgi Tsiklauri',
     email: 'giorgi.t@email.com',
     phone: '+995-555-44-55-66',
     birthday: new Date(1999, 0, 30),  // January 30, 1999
     tags: ['colleague', 'friend']
   }

2. Create a function 'searchContacts' that takes the contacts array and a
   search term, and returns all contacts whose name includes the search term
   (case-insensitive). Use filter() and toLowerCase()/includes()

3. Create a function 'getUpcomingBirthdays' that takes the contacts array
   and returns contacts whose birthday is within the next 30 days.
   - Get today's date
   - For each contact, create a "this year's birthday" date
   - Calculate the difference in days
   - If 0 <= diff <= 30, include that contact
   HINT: Set the birthday year to the current year for comparison

4. Create a function 'formatContactInfo' that takes a contact object and
   returns a formatted multi-line string:
   "Name:     Ana Kvirikashvili
    Email:    ana.k@email.com
    Phone:    +995-555-12-34-56
    Birthday: March 15, 2000
    Tags:     friend, university"
   Use padEnd() for alignment and toLocaleDateString() for the birthday

5. Create a function 'addContact' that takes the contacts array and a new
   contact object, validates that name and email are not empty strings
   (using trim()), and pushes the contact to the array. Return true if
   added, false if validation failed.

6. Create a function 'removeContact' that takes the contacts array and a
   name, finds the contact by name (case-insensitive), removes it using
   splice(), and returns the removed contact (or null if not found)

7. Create a function 'getContactStats' that takes the contacts array and
   returns an object with:
   - totalContacts: number of contacts
   - averageAge: average age calculated from birthdays
   - allTags: array of all unique tags (use a loop and includes to avoid duplicates)
   - emailDomains: array of unique email domains (split email at '@', take second part)

8. Test all functions and log results

TEST DATA: Use the contacts listed above

HINT: To check if birthday is within 30 days, set the year to current year
      and compare with today
HINT: Use new Date().getFullYear() to get the current year
HINT: For age calculation: currentYear - birthYear (simplified)
HINT: For unique arrays, check with includes() before pushing

GOOD LUCK :)
*/

// const contacts = [
//   {
//     name: 'Ana Kvirikashvili',
//     email: 'ana.k@email.com',
//     phone: '+995-555-12-34-56',
//     birthday: new Date(2000, 2, 15),
//     tags: ['friend', 'university'],
//   },
//   {
//     name: 'Luka Beridze',
//     email: 'luka.b@email.com',
//     phone: '+995-555-98-76-54',
//     birthday: new Date(1998, 6, 22),
//     tags: ['colleague', 'developer'],
//   },
//   {
//     name: 'Nino Lomidze',
//     email: 'nino.l@email.com',
//     phone: '+995-555-11-22-33',
//     birthday: new Date(2001, 11, 5),
//     tags: ['friend', 'neighbor'],
//   },
//   {
//     name: 'Giorgi Tsiklauri',
//     email: 'giorgi.t@email.com',
//     phone: '+995-555-44-55-66',
//     birthday: new Date(1999, 0, 30),
//     tags: ['colleague', 'friend'],
//   },
// ];

// // Search contacts
// const searchContacts = function (contactsArr, searchTerm) {
//   return contactsArr.filter(c =>
//     c.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

// // Upcoming birthdays
// const getUpcomingBirthdays = function (contactsArr) {
//   const today = new Date();
//   const upcoming = [];

//   for (let i = 0; i < contactsArr.length; i++) {
//     const bday = contactsArr[i].birthday;
//     const thisYearBday = new Date(
//       today.getFullYear(),
//       bday.getMonth(),
//       bday.getDate()
//     );
//     const diffMs = thisYearBday - today;
//     const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

//     if (diffDays >= 0 && diffDays <= 30) {
//       upcoming.push(contactsArr[i]);
//     }
//   }

//   return upcoming;
// };

// // Format contact info
// const formatContactInfo = function (contact) {
//   const bdayFormatted = contact.birthday.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
//   return (
//     `${'Name:'.padEnd(10)}${contact.name}\n` +
//     `${'Email:'.padEnd(10)}${contact.email}\n` +
//     `${'Phone:'.padEnd(10)}${contact.phone}\n` +
//     `${'Birthday:'.padEnd(10)}${bdayFormatted}\n` +
//     `${'Tags:'.padEnd(10)}${contact.tags.join(', ')}`
//   );
// };

// // Add contact
// const addContact = function (contactsArr, newContact) {
//   if (!newContact.name || newContact.name.trim() === '') return false;
//   if (!newContact.email || newContact.email.trim() === '') return false;
//   contactsArr.push(newContact);
//   return true;
// };

// // Remove contact
// const removeContact = function (contactsArr, name) {
//   for (let i = 0; i < contactsArr.length; i++) {
//     if (contactsArr[i].name.toLowerCase() === name.toLowerCase()) {
//       const removed = contactsArr.splice(i, 1);
//       return removed[0];
//     }
//   }
//   return null;
// };

// // Contact stats
// const getContactStats = function (contactsArr) {
//   const currentYear = new Date().getFullYear();
//   let totalAge = 0;
//   const allTags = [];
//   const emailDomains = [];

//   for (let i = 0; i < contactsArr.length; i++) {
//     const c = contactsArr[i];

//     // Age
//     totalAge += currentYear - c.birthday.getFullYear();

//     // Tags
//     for (let j = 0; j < c.tags.length; j++) {
//       if (!allTags.includes(c.tags[j])) {
//         allTags.push(c.tags[j]);
//       }
//     }

//     // Email domains
//     const domain = c.email.split('@')[1];
//     if (!emailDomains.includes(domain)) {
//       emailDomains.push(domain);
//     }
//   }

//   return {
//     totalContacts: contactsArr.length,
//     averageAge: totalAge / contactsArr.length,
//     allTags,
//     emailDomains,
//   };
// };

// // --- Test all functions ---
// console.log('=== Contact Book App ===\n');

// // Search
// console.log('--- Search "ana" ---');
// const searchResults = searchContacts(contacts, 'ana');
// searchResults.forEach(c => console.log(c.name));

// // Upcoming birthdays
// console.log('\n--- Upcoming Birthdays (next 30 days) ---');
// const upcoming = getUpcomingBirthdays(contacts);
// if (upcoming.length === 0) {
//   console.log('No upcoming birthdays in the next 30 days.');
// } else {
//   upcoming.forEach(c =>
//     console.log(`${c.name} - ${c.birthday.toLocaleDateString()}`)
//   );
// }

// // Format contact
// console.log('\n--- Formatted Contact ---');
// console.log(formatContactInfo(contacts[0]));

// // Add contact
// console.log('\n--- Adding Contact ---');
// const added = addContact(contacts, {
//   name: 'Tamar Javakhishvili',
//   email: 'tamar.j@email.com',
//   phone: '+995-555-77-88-99',
//   birthday: new Date(2002, 4, 10),
//   tags: ['friend'],
// });
// console.log(`Contact added: ${added}, Total contacts: ${contacts.length}`);

// // Remove contact
// console.log('\n--- Removing Contact ---');
// const removed = removeContact(contacts, 'Nino Lomidze');
// console.log(`Removed: ${removed ? removed.name : 'Not found'}`);
// console.log(`Remaining contacts: ${contacts.length}`);

// // Stats
// console.log('\n--- Contact Stats ---');
// const stats = getContactStats(contacts);
// console.log(`Total contacts: ${stats.totalContacts}`);
// console.log(`Average age: ${stats.averageAge}`);
// console.log(`All tags: ${stats.allTags.join(', ')}`);
// console.log(`Email domains: ${stats.emailDomains.join(', ')}`);
