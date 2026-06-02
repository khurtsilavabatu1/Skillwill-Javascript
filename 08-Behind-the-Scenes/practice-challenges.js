'use strict';

////////////////////////////////////
// How JavaScript Works Behind the Scenes
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Scope Detective
// (Scope + Scope Chain)

/*
You are a "scope detective" — your job is to figure out which variables
are accessible where, and what values they hold.

1. Create a global variable 'appName' with value 'ScopeApp'
2. Create a function 'outerFunction' that:
   a) Declares a variable 'outerVar' with value 'I am outer'
   b) Contains an inner function 'innerFunction' that:
      - Declares a variable 'innerVar' with value 'I am inner'
      - Logs all three variables: innerVar, outerVar, appName
   c) Calls innerFunction
   d) Tries to log innerVar (this should cause an error — comment it out
      and write a comment explaining why it fails)
3. Call outerFunction
4. Outside both functions, try to log outerVar and innerVar
   (comment these out and explain why they fail)

TEST DATA: Use the values described above

HINT: The scope chain only goes UP (from inner to outer), never down
HINT: Each function creates its own scope — variables inside are not
      accessible from outside

GOOD LUCK 😀
*/

// const appName = 'ScopeApp';

// function outerFunction() {
//   const outerVar = 'I am outer';

//   function innerFunction() {
//     const innerVar = 'I am inner';
//     console.log(innerVar);  // own scope
//     console.log(outerVar);  // parent scope (scope chain)
//     console.log(appName);   // global scope (scope chain)
//   }
//   innerFunction();

//   // console.log(innerVar);
//   // ReferenceError! innerVar is in innerFunction's scope.
//   // The scope chain goes UP, not DOWN — parent can't access child's variables.
// }

// outerFunction();

// // console.log(outerVar);
// // ReferenceError! outerVar is in outerFunction's scope, not accessible globally.

// // console.log(innerVar);
// // ReferenceError! innerVar is even more nested — not accessible here either.


////////////////////////////////////
// Practice Challenge #2 - var vs let vs const
// (Block Scope + Function Scope)

/*
Demonstrate the difference between var, let, and const when used
inside a block (if statement).

1. Create a variable 'temperature' with value 30
2. Write an if statement that checks if temperature > 25
3. Inside the if block:
   a) Declare a variable with var: var weather = 'sunny'
   b) Declare a variable with let: let advice = 'Wear sunscreen'
   c) Declare a variable with const: const uvIndex = 8
   d) Log all three variables inside the block
4. Outside the if block:
   a) Try to log 'weather' — will it work? Why?
   b) Try to log 'advice' — will it work? Why?
   c) Try to log 'uvIndex' — will it work? Why?
5. Write comments explaining the behavior of each

TEST DATA: temperature = 30

HINT: var is function-scoped (ignores block scope)
HINT: let and const are block-scoped

GOOD LUCK 😀
*/

// const temperature = 30;

// if (temperature > 25) {
//   var weather = 'sunny';
//   let advice = 'Wear sunscreen';
//   const uvIndex = 8;
//   console.log(weather);  // 'sunny'
//   console.log(advice);   // 'Wear sunscreen'
//   console.log(uvIndex);  // 8
// }

// console.log(weather);  // 'sunny' — var ignores block scope!
// // console.log(advice);  // ReferenceError! let is block-scoped
// // console.log(uvIndex); // ReferenceError! const is block-scoped


////////////////////////////////////
// Practice Challenge #3 - Hoisting Puzzles
// (Hoisting + TDZ)

/*
Predict and verify what happens when you try to use variables and
functions BEFORE their declarations.

1. Before any declarations, try to:
   a) Call a function declaration 'greetDecl' — does it work?
   b) Log a var variable 'myVar' — what value does it have?
   c) Log a let variable 'myLet' — what happens?
   d) Call a function expression stored in const 'greetExpr' — what happens?
2. Now declare all of them:
   a) function greetDecl() { return 'Hello from declaration!'; }
   b) var myVar = 'I am var';
   c) let myLet = 'I am let';
   d) const greetExpr = function() { return 'Hello from expression!'; };
3. After declarations, call/log everything again to confirm it works
4. Write comments explaining why each behaves differently before declaration

HINT: Function declarations are fully hoisted (can be called before declaration)
HINT: var is hoisted as undefined
HINT: let/const are in the TDZ (Temporal Dead Zone) until their declaration line

GOOD LUCK 😀
*/

// // Before declarations:
// console.log(greetDecl());  // 'Hello from declaration!' — function declarations are fully hoisted
// console.log(myVar);        // undefined — var is hoisted but with value undefined
// // console.log(myLet);     // ReferenceError! let is in the TDZ (Temporal Dead Zone)
// // console.log(greetExpr); // ReferenceError! const is in the TDZ

// // Declarations:
// function greetDecl() {
//   return 'Hello from declaration!';
// }
// var myVar = 'I am var';
// let myLet = 'I am let';
// const greetExpr = function () {
//   return 'Hello from expression!';
// };

// // After declarations — everything works:
// console.log(greetDecl());   // 'Hello from declaration!'
// console.log(myVar);         // 'I am var'
// console.log(myLet);         // 'I am let'
// console.log(greetExpr());   // 'Hello from expression!'


////////////////////////////////////
// Practice Challenge #4 - The this Detective
// (this Keyword in Different Contexts)

/*
Explore how the 'this' keyword behaves in different contexts.

1. Create an object 'player' with:
   - name: 'Mario'
   - lives: 3
   - A method 'showStatus' (regular function) that logs:
     "Mario has 3 lives" using this.name and this.lives
   - A method 'loseLife' (regular function) that:
     a) Decreases this.lives by 1
     b) Logs: "Mario lost a life! Lives remaining: 2"
2. Call player.showStatus() and player.loseLife()
3. Create a standalone function 'showThis' that logs 'this'.
   Call it as a regular function (not as a method).
   Write a comment: what is 'this' in strict mode?
4. Create an object 'enemy' with name: 'Bowser'
   Copy the showStatus method from player to enemy using:
   enemy.showStatus = player.showStatus
   Call enemy.showStatus() — what name does it show? Why?
5. Create an object 'archer' with:
   - name: 'Legolas'
   - arrows: 20
   - A method 'shoot' (regular function) that:
     a) Decreases this.arrows by 1
     b) Uses an arrow function inside to log a message after 0ms delay:
        setTimeout(() => console.log(`${this.name} has ${this.arrows} arrows left`), 0)
   Call archer.shoot() — does the arrow function correctly access 'this'?

TEST DATA: Use the data described above

HINT: 'this' in a method refers to the object CALLING the method
HINT: Arrow functions don't have their own 'this' — they use the parent scope's 'this'

GOOD LUCK 😀
*/

// const player = {
//   name: 'Mario',
//   lives: 3,
//   showStatus: function () {
//     console.log(`${this.name} has ${this.lives} lives`);
//   },
//   loseLife: function () {
//     this.lives--;
//     console.log(`${this.name} lost a life! Lives remaining: ${this.lives}`);
//   },
// };

// player.showStatus(); // Mario has 3 lives
// player.loseLife();   // Mario lost a life! Lives remaining: 2

// // Standalone function — this = undefined in strict mode
// function showThis() {
//   console.log(this); // undefined (strict mode)
// }
// showThis();

// // Method borrowing — this refers to the CALLING object
// const enemy = { name: 'Bowser' };
// enemy.showStatus = player.showStatus;
// enemy.showStatus(); // Bowser has undefined lives
// // 'this' is now enemy, which has no 'lives' property

// const archer = {
//   name: 'Legolas',
//   arrows: 20,
//   shoot: function () {
//     this.arrows--;
//     // Arrow function inherits 'this' from parent scope (shoot method → archer)
//     setTimeout(
//       () =>
//         console.log(`${this.name} has ${this.arrows} arrows left`),
//       0
//     );
//   },
// };

// archer.shoot(); // Legolas has 19 arrows left


////////////////////////////////////
// Practice Challenge #5 - Primitives vs Objects
// (Reference Types + Shallow Copy + Deep Copy)

/*
Demonstrate how primitives and objects behave differently in memory.

1. Create two primitive variables:
   - let score = 100
   - let scoreCopy = score
   Change score to 200. Log both — did scoreCopy change?

2. Create an object 'originalCar':
   { brand: 'Tesla', model: 'Model 3', specs: { hp: 283, range: 358 } }
   Create 'carRef' by assigning: const carRef = originalCar
   Change carRef.model to 'Model Y'
   Log both objects — did originalCar change? Why?

3. Create a shallow copy of originalCar using spread:
   const shallowCopy = { ...originalCar }
   Change shallowCopy.brand to 'BMW'
   Log both — did originalCar.brand change?
   Now change shallowCopy.specs.hp to 500
   Log both — did originalCar.specs.hp change? Why?

4. Create a deep copy using structuredClone:
   const deepCopy = structuredClone(originalCar)
   Change deepCopy.specs.range to 600
   Log both — did originalCar.specs.range change?

5. Write comments explaining:
   - Why primitives are independent copies
   - Why object assignment shares the same reference
   - Why shallow copy fails on nested objects
   - Why structuredClone creates a fully independent copy

TEST DATA: Use the data described above

HINT: Primitives are stored in the call stack — each variable gets its own copy
HINT: Objects are stored in the heap — variables hold a reference (address) to the object

GOOD LUCK 😀
*/

// // 1. Primitives — independent copies
// let score = 100;
// let scoreCopy = score;
// score = 200;
// console.log('score:', score);         // 200
// console.log('scoreCopy:', scoreCopy); // 100 — independent copy!

// // 2. Object assignment — same reference
// const originalCar = {
//   brand: 'Tesla',
//   model: 'Model 3',
//   specs: { hp: 283, range: 358 },
// };
// const carRef = originalCar;
// carRef.model = 'Model Y';
// console.log('originalCar:', originalCar.model); // 'Model Y' — same object!
// console.log('carRef:', carRef.model);            // 'Model Y'

// // 3. Shallow copy with spread
// const shallowCopy = { ...originalCar };
// shallowCopy.brand = 'BMW';
// console.log('originalCar.brand:', originalCar.brand); // 'Tesla' — first level is independent
// console.log('shallowCopy.brand:', shallowCopy.brand); // 'BMW'

// shallowCopy.specs.hp = 500;
// console.log('originalCar.specs.hp:', originalCar.specs.hp); // 500 — nested object is shared!
// console.log('shallowCopy.specs.hp:', shallowCopy.specs.hp); // 500

// // 4. Deep copy with structuredClone
// const deepCopy = structuredClone(originalCar);
// deepCopy.specs.range = 600;
// console.log('originalCar.specs.range:', originalCar.specs.range); // 358 — fully independent!
// console.log('deepCopy.specs.range:', deepCopy.specs.range);       // 600
