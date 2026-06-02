////////////////////////////////////
// Objects, Date & Strings
// Practice Challenges - Conditions Only
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
