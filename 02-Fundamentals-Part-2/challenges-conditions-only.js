////////////////////////////////////
// JavaScript Fundamentals Part 2
// Practice Challenges - Conditions Only
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Calorie Tracker
// (Functions + Arrow Functions)

/*
You want to build a simple calorie tracker that calculates a person's
Basal Metabolic Rate (BMR) - the number of calories their body needs at rest.

1. Create an arrow function 'calcBMR' that takes weight (kg), height (cm),
   age (years), and gender ('M' or 'F') as parameters
2. For men the formula is: BMR = 10 * weight + 6.25 * height - 5 * age + 5
3. For women the formula is: BMR = 10 * weight + 6.25 * height - 5 * age - 161
4. The function should return the BMR value
5. Create a second function 'describeCalories' that takes a name and a BMR
   value, and returns a string like:
   "John needs approximately 1695 calories per day at rest."
6. Call both functions and log the results using template literals

TEST DATA 1: Male, 80kg, 180cm, 30 years old, name "John"
TEST DATA 2: Female, 60kg, 165cm, 25 years old, name "Sarah"

HINT: Use an if/else inside the arrow function to handle the gender difference
HINT: The arrow function will need curly braces {} since it has multiple lines

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #2 - Student Grade Manager
// (Functions + Arrays)

/*
A teacher needs a program to manage student grades and determine
who is passing and who is failing.

1. Create a function 'calcAverage' that takes an array of scores and returns
   the average. To do this WITHOUT loops (since we haven't learned them yet),
   add up elements by accessing them with their index positions
   (arr[0] + arr[1] + ... ) and divide by the array's length
2. Create an array 'studentScores' with 5 test scores
3. Create a function 'getLetterGrade' that takes a numeric grade and returns
   a letter grade:
   - A: >= 90
   - B: >= 80 and < 90
   - C: >= 70 and < 80
   - D: >= 60 and < 70
   - F: < 60
4. Create a function 'isPassing' that takes an average score and returns
   true if the score is >= 60, false otherwise
5. Call all the functions and print results using template literals like:
   "Student average: 86.6 (B) - PASSING"

TEST DATA 1: [85, 92, 78, 90, 88]
TEST DATA 2: [45, 55, 62, 38, 50]

HINT: To get the average without a loop, manually add each element:
      (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / arr.length

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #3 - Shopping List Manager
// (Arrays + Array Methods)

/*
You are building a simple shopping list app using arrays and basic array methods.

1. Create an array 'shoppingList' with these items:
   'bread', 'eggs', 'milk', 'butter', 'cheese'
2. Add 'tomatoes' and 'pasta' to the END of the list (push)
3. Add 'water' to the BEGINNING of the list (unshift)
4. Remove the LAST item from the list (pop) and store it in a variable
   called 'removedLast'
5. Remove the FIRST item from the list (shift) and store it in a variable
   called 'removedFirst'
6. Check if 'milk' is still in the list (includes) and log the result
7. Find the index position of 'butter' in the list (indexOf) and log it
8. Print the final shopping list and its total number of items
9. Print what was removed: "Removed from end: ___, Removed from start: ___"

HINT: push and unshift return the new length of the array
HINT: pop and shift return the removed element

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #4 - Team Score Tracker
// (Functions + Arrays + Array Methods Combined)

/*
Two basketball teams played 3 games each. You need to analyze their performance.

1. Create arrays for each team's scores across 3 games:
   - Eagles: [88, 95, 72]
   - Hawks: [90, 78, 85]
2. Create a function 'calcTeamAverage' that takes an array of 3 scores
   and returns the average (add them manually, no loops needed)
3. Create a function 'getTeamStatus' that takes an average score and returns:
   - "Excellent" if average >= 90
   - "Good" if average >= 80 and < 90
   - "Average" if average >= 70 and < 80
   - "Needs Improvement" if average < 70
4. Create a function 'determineWinner' that takes two team names and their
   averages, and returns a string announcing the winner or a draw.
   Example: "Eagles win with 85.0 vs 84.3!" or "It's a draw!"
5. Create a new array 'allScores' that contains all scores from both teams
   combined. Use push to add the Hawks' scores one by one to a copy of
   Eagles' scores. (Hint: start by creating allScores with the Eagles' values)
6. Find the single highest score across all games using the allScores array.
   Without loops, compare each element manually.
7. Print a full summary of everything

TEST DATA: Eagles [88, 95, 72], Hawks [90, 78, 85]

HINT: To find the max of values without a loop, you can use nested ternary
operators or multiple if/else statements
HINT: You can create a copy of an array using: const copy = [arr[0], arr[1], arr[2]]

GOOD LUCK 😀
*/


////////////////////////////////////
// ⚠️ ADVANCED CHALLENGES - NOT YET COVERED
// The challenges below involve Objects and Loops,
// which have not been studied yet.
// They are included for future reference only.
// You are NOT expected to solve these right now.
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #5 - Contact Book (ADVANCED)
// (Objects + Dot/Bracket Notation + Object Methods)

/*
Build a simple contact book using objects.

1. Create an object 'contact1' with these properties:
   - firstName: 'Alice'
   - lastName: 'Johnson'
   - age: 28
   - email: 'alice@example.com'
   - friends: ['Bob', 'Charlie', 'Diana']
   - A method 'getFullName' that returns the full name using 'this'
   - A method 'getSummary' that returns a string like:
     "Alice Johnson (28) - alice@example.com - 3 friends"
2. Create a second object 'contact2' with:
   - firstName: 'Bob'
   - lastName: 'Smith'
   - age: 32
   - email: 'bob@example.com'
   - friends: ['Alice', 'Eve']
   - The same methods as contact1
3. Log the full name of each contact using the getFullName method
4. Log the summary of each contact using the getSummary method
5. Check if contact1's friends include contact2's firstName using
   dot notation and the includes method
6. Add a new property 'phone' to contact1 using dot notation
7. Add a new property 'city' to contact2 using bracket notation
8. Log the final state of both contacts

TEST DATA: Use the data described above

HINT: In object methods, use 'this' to access the object's own properties
HINT: this.friends.length gives you the number of friends

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #6 - Workout Tracker (ADVANCED)
// (Objects + Loops + Arrays)

/*
Build a workout tracker that logs exercises and calculates stats.

1. Create an object 'workout' with these properties:
   - type: 'Gym Session'
   - date: '2026-04-26'
   - exercises: ['Push-ups', 'Squats', 'Plank', 'Lunges', 'Burpees']
   - reps: [15, 20, 3, 12, 10]
   - A method 'logExercises' that uses a for loop to print each exercise
     with its reps: "Push-ups: 15 reps"
   - A method 'totalReps' that uses a for loop to sum all reps and return
     the total
   - A method 'hardestExercise' that uses a for loop to find the exercise
     with the most reps and returns its name

2. Create an array 'weeklyWorkouts' with 3 workout objects (you can
   simplify the other two - just type, date, and reps array)

3. Use a for loop to go through weeklyWorkouts and print:
   - The workout type and date
   - Total reps for each workout (call totalReps method on first workout,
     manually sum for the simplified ones)

4. Use a while loop to simulate a "rest timer": start from 10 and count
   down to 1, printing "Rest: X seconds remaining..."
   When it reaches 0, print "Time to work out!"

TEST DATA: Use the data described above

HINT: In the for loop inside object methods, use this.exercises[i] and
      this.reps[i] to access each element
HINT: To find the max, keep track of the current max value AND its index

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #7 - Number Analyzer (ADVANCED)
// (for Loop)

/*
You are building a tool that analyzes an array of numbers using a for loop.

1. Create an array 'numbers' with these values:
   [12, -5, 0, 8, -3, 15, 0, -1, 22, 7]
2. Use a for loop to go through the array and:
   a) Count how many positive numbers, negative numbers, and zeros there are
   b) Calculate the total sum of all numbers
   c) Find the largest and smallest number in the array
3. After the loop, calculate the average (sum / length)
4. Print a full report:
   "Total numbers: 10"
   "Positive: 5, Negative: 3, Zeros: 2"
   "Sum: 55, Average: 5.5"
   "Max: 22, Min: -5"

TEST DATA: [12, -5, 0, 8, -3, 15, 0, -1, 22, 7]

HINT: Initialize max with the first element of the array, not with 0
HINT: Initialize min the same way — with the first element
HINT: Use let for all counters and accumulators before the loop

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #8 - Dice Roller Simulator (ADVANCED)
// (while Loop)

/*
Simulate rolling a dice repeatedly until you roll a 6.

1. Create a variable 'dice' and initialize it with 0
2. Create a variable 'rollCount' to track how many rolls it takes
3. Use a while loop that keeps running as long as dice is NOT 6
4. Inside the loop:
   a) Generate a random dice roll between 1 and 6 using:
      Math.floor(Math.random() * 6) + 1
   b) Increment rollCount
   c) Print each roll: "Roll #1: 🎲 3"
5. After the loop ends (you rolled a 6), print:
   "You rolled a 6 after X rolls!"
6. BONUS: After the first simulation, create another while loop that
   counts down from 5 to 1, printing "Next game starts in: X..."
   When it reaches 0, print "Let's play again!"

HINT: The while loop condition should be: dice !== 6
HINT: Make sure to assign the random value to 'dice' inside the loop,
      otherwise the loop will run forever!

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #9 - Movie Database (ADVANCED)
// (Objects + Dot/Bracket Notation + Object Methods)

/*
Build a mini movie database using objects.

1. Create an object 'movie1' with these properties:
   - title: 'Inception'
   - director: 'Christopher Nolan'
   - year: 2010
   - rating: 8.8
   - genres: ['Sci-Fi', 'Action', 'Thriller']
   - A method 'getSummary' that returns:
     "Inception (2010) - directed by Christopher Nolan, rated 8.8/10"
   - A method 'isHighlyRated' that returns true if rating >= 8.0

2. Create an object 'movie2' with:
   - title: 'The Matrix'
   - director: 'The Wachowskis'
   - year: 1999
   - rating: 8.7
   - genres: ['Sci-Fi', 'Action']
   - The same methods as movie1

3. Log the summary of each movie using getSummary()
4. Check if each movie is highly rated using isHighlyRated()
5. Access movie1's director using dot notation and log it
6. Create a variable 'prop' with value 'year', then use bracket notation
   to access that property from movie2: movie2[prop]
7. Add a new property 'sequel' to movie1 using dot notation (value: true)
8. Add a new property 'language' to movie2 using bracket notation
   (value: 'English')
9. Check if movie1's genres include 'Action' using the includes method
10. Print the final state of both movie objects

TEST DATA: Use the data described above

HINT: In getSummary, use template literals with this.title, this.year, etc.
HINT: this.rating >= 8.0 returns a boolean directly — no if/else needed

GOOD LUCK 😀
*/


////////////////////////////////////
// Practice Challenge #10 - Playlist Manager (ADVANCED)
// (Arrays + Array Methods + for Loop)

/*
Build a music playlist manager using arrays, array methods, and loops.

1. Create an array 'playlist' with these songs:
   'Bohemian Rhapsody', 'Hotel California', 'Stairway to Heaven',
   'Imagine', 'Smells Like Teen Spirit'
2. Add 'Yesterday' and 'Let It Be' to the END of the playlist (push)
3. Add 'Billie Jean' to the BEGINNING of the playlist (unshift)
4. Remove the LAST song from the playlist (pop) — store in 'removedLast'
5. Remove the FIRST song from the playlist (shift) — store in 'removedFirst'
6. Check if 'Imagine' is in the playlist using includes
7. Find the index of 'Hotel California' using indexOf
8. Use a for loop to print each song with its position:
   "1. Bohemian Rhapsody"
   "2. Hotel California"
   ... etc.
9. Use a for loop to create a new array 'uppercaseSongs' that contains
   all song names in uppercase. Inside the loop, use .toUpperCase()
   on each element and push it into the new array.
10. Print the final playlist, the removed songs, and the uppercase version

TEST DATA: Use the songs listed above

HINT: When printing position in step 8, use (i + 1) since arrays are 0-indexed
HINT: Create an empty array first, then push transformed elements in the loop

GOOD LUCK 😀
*/
