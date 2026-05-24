////////////////////////////////////
// Advanced Arrays & Forms
// Practice Challenges - Conditions Only
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Text Formatter
// (String Methods)

/*
You have messy user input that needs to be cleaned and formatted.

1. Create a variable 'rawInput' with the value "   hElLo jAvAsCrIpT   "
2. Remove the extra spaces from both sides using trim()
3. Convert the entire string to lowercase using toLowerCase()
4. Capitalize the first letter of each word:
   - Split the string into an array of words using split(' ')
   - Use a for loop to capitalize the first letter of each word:
     word[0].toUpperCase() + word.slice(1)
   - Join the array back into a string using join(' ')
5. Log the cleaned result: "Hello Javascript"
6. Check if the result includes "Javascript" using includes() and log true/false
7. Replace "Javascript" with "World" using replace() and log the result

TEST DATA: "   hElLo jAvAsCrIpT   "

HINT: To capitalize a word: word[0].toUpperCase() + word.slice(1)
HINT: split(' ') splits by spaces, join(' ') joins with spaces

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #2 - Price Converter
// (Array.map())

/*
A Georgian online store needs to display prices in both GEL and USD.

1. Create an array 'pricesGEL' with these prices: [15, 45, 120, 8, 250]
2. The exchange rate is 1 GEL = 0.37 USD. Store this in a variable 'rate'
3. Use map() to create a new array 'pricesUSD' that converts each price to USD
4. Round each converted price to 2 decimal places using toFixed(2)
   and convert back to a number with Number()
5. Use map() to create a 'descriptions' array with strings like:
   "15 GEL = 5.55 USD"
6. Log all three arrays: pricesGEL, pricesUSD, and descriptions

TEST DATA: prices [15, 45, 120, 8, 250], rate 0.37

HINT: map() returns a NEW array — it does not change the original
HINT: Number((price * rate).toFixed(2)) rounds and converts back to number

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #3 - Student Results
// (Array.filter() + forEach())

/*
A teacher needs to separate passing and failing students.

1. Create an array of student objects:
   [
     { name: 'Ana', grade: 85 },
     { name: 'David', grade: 55 },
     { name: 'Nino', grade: 92 },
     { name: 'George', grade: 43 },
     { name: 'Mariam', grade: 78 },
     { name: 'Luka', grade: 67 }
   ]
2. Use filter() to create an array 'passing' with students whose grade >= 60
3. Use filter() to create an array 'failing' with students whose grade < 60
4. Use forEach() on the passing array to log each student:
   "✓ Ana: 85 - Passed"
5. Use forEach() on the failing array to log each student:
   "✗ George: 43 - Failed"
6. Log the total counts: "Passed: X, Failed: Y"

TEST DATA: Use the student array above

HINT: filter() returns a new array with elements that pass the test
HINT: You can access object properties inside the callback: student.name

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #4 - Employee Directory
// (Array.find() + findIndex())

/*
Build a simple employee search tool.

1. Create an array of employee objects:
   [
     { id: 101, name: 'Alice', department: 'Engineering' },
     { id: 102, name: 'Bob', department: 'Marketing' },
     { id: 103, name: 'Charlie', department: 'Engineering' },
     { id: 104, name: 'Diana', department: 'HR' },
     { id: 105, name: 'Eve', department: 'Marketing' }
   ]
2. Use find() to locate the employee with name 'Charlie' — log the result
3. Use find() to locate the employee with id 104 — log the result
4. Use findIndex() to find the index of 'Bob' in the array — log it
5. Try to find an employee with name 'Frank' — log the result
   (should be undefined)
6. Log whether Frank was found or not using a simple if/else

TEST DATA: Use the employee array above

HINT: find() returns the first element that matches, or undefined if none match
HINT: findIndex() returns the index, or -1 if not found

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #5 - Game Leaderboard
// (Array.sort())

/*
Create a game leaderboard that sorts players by score.

1. Create an array of player objects:
   [
     { name: 'Alex', score: 340 },
     { name: 'Bella', score: 520 },
     { name: 'Carlos', score: 180 },
     { name: 'Dana', score: 450 },
     { name: 'Erik', score: 290 }
   ]
2. Create a COPY of the array using slice() — call it 'leaderboard'
3. Sort 'leaderboard' by score from highest to lowest (descending)
4. Log the sorted leaderboard
5. Log the top 3 players using slice(0, 3)
6. Log the player with the lowest score (last element)
7. Verify the original array is unchanged — log it

TEST DATA: Use the player array above

HINT: To sort descending: sort((a, b) => b.score - a.score)
HINT: slice() without arguments creates a copy of the array
HINT: sort() mutates the original array — that's why we copy first!

GOOD LUCK 😀
*/


////////////////////////////////////
// ⚠️ ADVANCED CHALLENGES
// The challenges below combine multiple array methods
// and require a deeper understanding of the material.
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #6 - Budget Tracker (ADVANCED)
// (Array.reduce())

/*
Track your monthly expenses and calculate totals.

1. Create an array of expense objects:
   [
     { description: 'Rent', amount: 800 },
     { description: 'Food', amount: 350 },
     { description: 'Transport', amount: 120 },
     { description: 'Entertainment', amount: 200 },
     { description: 'Utilities', amount: 150 }
   ]
2. Use reduce() to calculate the total of all expenses
3. Use reduce() to find the most expensive item
   (compare each item's amount with the accumulator)
4. Log: "Total expenses: $1620"
5. Log: "Biggest expense: Rent ($800)"

TEST DATA: Use the expense array above

HINT: For total: reduce((acc, cur) => acc + cur.amount, 0)
HINT: For max: reduce((max, cur) => cur.amount > max.amount ? cur : max)

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #7 - Data Pipeline (ADVANCED)
// (Chaining: filter + map + sort)

/*
Process a list of products using method chaining.

1. Create an array of product objects:
   [
     { name: 'Laptop', price: 1200, inStock: true },
     { name: 'Phone', price: 800, inStock: true },
     { name: 'Tablet', price: 450, inStock: false },
     { name: 'Monitor', price: 350, inStock: true },
     { name: 'Keyboard', price: 75, inStock: true },
     { name: 'Mouse', price: 25, inStock: true }
   ]
2. Chain these methods in a single expression:
   - filter() to keep only products that are in stock
   - map() to create strings like "Laptop - $1200"
   - sort() to sort alphabetically
3. Log the result
4. In a separate chain:
   - filter() products in stock
   - map() to get just the prices
   - reduce() to calculate the total price of in-stock products
5. Log: "Total value of in-stock products: $___"

TEST DATA: Use the product array above

HINT: You can chain methods: arr.filter(...).map(...).sort(...)
HINT: Each method returns a new array, which the next method works on

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #8 - Number Guessing Game (ADVANCED)
// (while Loop + do-while Loop)

/*
Create a simple number guessing game simulation using loops.

1. Generate a random target number between 1 and 10:
   const target = Math.floor(Math.random() * 10) + 1
2. Create a variable 'guess' initialized to 0
3. Create a variable 'attempts' initialized to 0
4. Use a while loop that runs as long as guess !== target:
   a) Generate a random guess between 1 and 10
   b) Increment attempts
   c) If guess is too high, log "Attempt X: Y — Too high!"
   d) If guess is too low, log "Attempt X: Y — Too low!"
5. After the loop, log: "Correct! The number was X. Found in Y attempts!"
6. BONUS: Use a do-while loop for a countdown from 5 to 1,
   logging "Next round in: X..." then "Go!"

TEST DATA: Random (results will vary each time)

HINT: Math.floor(Math.random() * 10) + 1 gives a number from 1 to 10
HINT: The while loop stops when guess === target

GOOD LUCK 😀
*/
