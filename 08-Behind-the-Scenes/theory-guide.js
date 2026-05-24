////////////////////////////////////
// How JavaScript Works Behind the Scenes
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. AN OVERVIEW OF JAVASCRIPT
═══════════════════════════════════════════════════════════════

JavaScript is a high-level, prototype-based object-oriented,
multi-paradigm, interpreted or just-in-time compiled, dynamic,
single-threaded, garbage-collected programming language with
first-class functions and a non-blocking event loop concurrency model.

Let's break down each of these characteristics:
*/

// HIGH-LEVEL
// We don't have to manage resources (memory) manually.
// Everything happens automatically. This makes the language
// easier to learn and use, but programs will never be as fast
// as low-level C/C++ programs.

// GARBAGE-COLLECTED
// Automatic garbage collection mechanism that removes old,
// unused objects from memory. We don't have to manage memory manually.

// INTERPRETED OR JUST-IN-TIME (JIT) COMPILED
// JavaScript used to be purely interpreted, but modern engines
// use just-in-time compilation for better performance.
// (More details in section 3)

// MULTI-PARADIGM
// JavaScript supports multiple programming paradigms:
// - Procedural programming (organizing code in a linear way)
// - Object-oriented programming (OOP)
// - Functional programming (FP)
// We can choose which approach to use, or combine them.

// PROTOTYPE-BASED OBJECT-ORIENTED
// Almost everything in JavaScript is an object (except primitives).
// Arrays, for example, are objects. That's why we can use methods
// like push, pop, etc. They are built from a prototype that
// contains all array methods.

// FIRST-CLASS FUNCTIONS
// Functions are treated as regular variables.
// We can pass them into other functions, return them from functions,
// and store them in variables. This enables functional programming.
const greet = () => console.log('Hey!');
const btnEl = { addEventListener: (event, fn) => fn() };
btnEl.addEventListener('click', greet);

// DYNAMIC
// JavaScript is dynamically-typed. We don't assign data types
// to variables. Types are determined automatically at runtime
// and can change when we reassign variables.
let x = 23;     // x is a number
x = 'hello';    // now x is a string — no error!

// SINGLE-THREADED
// JavaScript runs in one single thread, so it can only do
// one thing at a time.

// NON-BLOCKING EVENT LOOP
// Long-running tasks (like fetching data) are executed in the
// "background" using Web APIs. The event loop takes finished tasks
// from the callback queue and puts them in the call stack for execution.
// This is how JavaScript handles concurrency despite being single-threaded.


/*
═══════════════════════════════════════════════════════════════
2. THE JAVASCRIPT ENGINE
═══════════════════════════════════════════════════════════════

A JavaScript engine is a program that EXECUTES JavaScript code.
Every browser has its own engine.
*/

// The most well-known engine: V8 Engine
// - Powers Google Chrome and Node.js
// Other engines:
// - SpiderMonkey (Firefox)
// - JavaScriptCore / Nitro (Safari)
// - Chakra / now V8 (Edge)

// Every JavaScript engine has two main components:

// 1. CALL STACK
//    Where our code is actually executed, using execution contexts.
//    Think of it as a stack of "boxes" — each box is a function call.

// 2. HEAP
//    Where objects are stored in memory. It's an unstructured
//    memory pool that holds all the objects our program needs.

// Visual representation:
// ┌─────────────────────────────────────┐
// │           JS ENGINE                 │
// │  ┌──────────────┐ ┌──────────────┐  │
// │  │              │ │    ■  ●      │  │
// │  │  ▬▬▬▬▬▬▬▬▬▬  │ │  ▲  ◆       │  │
// │  │  ▬▬▬▬▬▬▬▬▬▬  │ │     ■  ●    │  │
// │  │  ▬▬▬▬▬▬▬▬▬▬  │ │  ◆     ▲    │  │
// │  │              │ │       ■      │  │
// │  │  CALL STACK  │ │    HEAP      │  │
// │  └──────────────┘ └──────────────┘  │
// └─────────────────────────────────────┘


/*
═══════════════════════════════════════════════════════════════
3. COMPILATION VS. INTERPRETATION
═══════════════════════════════════════════════════════════════

How is source code converted to machine code (0s and 1s)
that a computer can understand?
*/

// === COMPILATION ===
// Entire source code is converted into machine code at ONCE,
// and written to a portable binary file.
// The binary can be executed LATER — even much later.
//
// STEP 1: Source code → Compilation → Portable file (machine code)
// STEP 2: Portable file → Execution → Program running
//
// Key: Execution can happen WAY after compilation.

// === INTERPRETATION ===
// Interpreter runs through the source code and executes it LINE BY LINE.
// Code still needs to be converted to machine code, but it happens
// right before each line executes. No separate compilation step.
//
// STEP 1: Source code → Execution line by line → Program running
//
// Problem: Much slower than compiled code.

// === JUST-IN-TIME (JIT) COMPILATION ===
// The entire code is converted into machine code at once,
// then executed IMMEDIATELY.
// Unlike regular compilation, there is NO portable file —
// machine code is NOT saved to disk.
// This is what modern JavaScript engines use!
//
// STEP 1: Source code → Compilation → Machine code (NOT a portable file)
// STEP 2: Machine code → Execution → Program running (happens immediately)
//
// Key: Combines the speed of compilation with the convenience of interpretation.


/*
═══════════════════════════════════════════════════════════════
4. MODERN JIT COMPILATION OF JAVASCRIPT
═══════════════════════════════════════════════════════════════

When JavaScript code enters the engine, the following steps happen:
*/

// STEP 1: PARSING
// The code is parsed (read) into a data structure called AST
// (Abstract Syntax Tree). Each line of code is split into
// meaningful pieces (like const, variable names, values, etc.)
// and saved in a tree structure. Syntax errors are checked here.
//
// Note: The AST has NOTHING to do with the DOM tree!

// AST Example:
// const x = 23;
//
// VariableDeclaration {
//   kind: "const",
//   declarations: [
//     VariableDeclarator {
//       id: Identifier { name: "x" },
//       init: Literal { value: 23, raw: "23" }
//     }
//   ]
// }

// STEP 2: COMPILATION
// The AST is compiled into machine code (JIT compilation).

// STEP 3: EXECUTION
// The machine code is executed immediately in the Call Stack.

// STEP 4: OPTIMIZATION
// Modern engines first create a very UNOPTIMIZED version of machine code,
// just to start execution as fast as possible.
// Then, in the background, the code is re-compiled and re-optimized
// DURING execution. This happens in special threads that we can't
// access from our code. The optimization cycle can repeat multiple times.

// IMPORTANT: "JavaScript is an interpreted language" is NO LONGER accurate!
// Modern JavaScript uses JIT compilation, not pure interpretation.


/*
═══════════════════════════════════════════════════════════════
5. THE JAVASCRIPT RUNTIME
═══════════════════════════════════════════════════════════════

A JavaScript runtime is a "container" that includes everything
needed to execute JavaScript code.
The most common runtime is the BROWSER.
*/

// The JavaScript Runtime in the browser consists of:

// ┌────────────────────────────────────────────────────────┐
// │              JS RUNTIME IN THE BROWSER                 │
// │                                                        │
// │  ┌─────────────────────┐  ┌─────────────────────────┐  │
// │  │     JS ENGINE       │  │       WEB APIs           │  │
// │  │  ┌──────┐ ┌──────┐  │  │  ┌─────┐  ┌──────┐     │  │
// │  │  │CALL  │ │      │  │  │  │ DOM │  │Timers│     │  │
// │  │  │STACK │ │ HEAP │  │  │  ├─────┤  ├──────┤     │  │
// │  │  │      │ │      │  │  │  │Fetch│  │ ...  │     │  │
// │  │  └──────┘ └──────┘  │  │  └─────┘  └──────┘     │  │
// │  └─────────────────────┘  └─────────────────────────┘  │
// │                                                        │
// │  ┌──────────────────────────────────────────────────┐   │
// │  │ CALLBACK QUEUE:  click │ timer │ data │ ...      │   │
// │  └──────────────────────────────────────────────────┘   │
// │         ↑  EVENT LOOP  ↓                               │
// └────────────────────────────────────────────────────────┘

// 1. JS ENGINE (Call Stack + Heap)
// The heart of the runtime. Code is executed here (Call Stack)
// and objects are stored here (Heap).

// 2. WEB APIs
// Functionalities provided TO the engine, accessible on the window object.
// These are NOT part of the JavaScript language itself!
// Examples: DOM, Timers (setTimeout), Fetch API, Geolocation API, etc.
// The browser provides these APIs so JavaScript can interact with the outside world.

// 3. CALLBACK QUEUE
// A data structure that holds callback functions ready to be executed.
// Example: click event handler callback, timer callback, data callback, etc.

// 4. EVENT LOOP
// Essential for the non-blocking concurrency model.
// The event loop continuously checks if the call stack is empty.
// If it is, it takes the first callback from the callback queue
// and pushes it onto the call stack for execution.
// This is called an "event loop tick".

// Note: Node.js runtime works similarly, but instead of Web APIs,
// it has C++ Bindings & Thread Pool.


/*
═══════════════════════════════════════════════════════════════
6. EXECUTION CONTEXT
═══════════════════════════════════════════════════════════════

An execution context is an environment in which a piece of
JavaScript is executed. It stores all the necessary information
for some code to be executed.
Think of it as a "box" that holds everything the code needs to run.
*/

// How execution works after compilation:

// 1. CREATION OF GLOBAL EXECUTION CONTEXT (for top-level code)
//    Top-level code is code that is NOT inside any function.
//    Only top-level code is executed initially.
//    Function bodies are only executed when called!

// 2. EXECUTION OF TOP-LEVEL CODE (inside global EC)

// 3. EXECUTION OF FUNCTIONS AND WAITING FOR CALLBACKS
//    For each function call, a NEW execution context is created.
//    All execution contexts together make up the CALL STACK.

// Important:
// - There is exactly ONE global execution context (EC)
//   Default context, created for code that is not inside any function.
// - There is ONE execution context PER function call.

// Example:
const name = 'Jonas';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c;
}

// const result = first();

// Global EC knows: name = 'Jonas', first = <function>, second = <function>
// first() EC knows: a = 1, b = <unknown> (needs second() first)
// second() EC knows: c = 2, arguments = [7, 9]


/*
═══════════════════════════════════════════════════════════════
7. EXECUTION CONTEXT IN DETAIL
═══════════════════════════════════════════════════════════════

What's inside an execution context?
Generated during the "creation phase", right before execution.
*/

// 1. VARIABLE ENVIRONMENT
//    - let, const and var declarations
//    - Functions (function declarations)
//    - arguments object (array of passed arguments)
//
//    Note: arguments object is available in all "regular" functions,
//          NOT in arrow functions!
//    Note: Variable values only become known during execution.

// 2. SCOPE CHAIN
//    References to variables located outside of the current function.
//    This is how functions can access variables from their parent scopes.

// 3. this KEYWORD
//    Special variable created for every execution context (every function).
//    NOT available in arrow functions — they use parent scope's this.


/*
═══════════════════════════════════════════════════════════════
8. THE CALL STACK
═══════════════════════════════════════════════════════════════

The call stack is a "place" where execution contexts get stacked
on top of each other, to keep track of where we are in execution.
The execution context on TOP is the one currently running.
When it finishes, it's removed (popped) from the stack and
execution returns to the previous context.
*/

// Example of how the call stack works with the code above:

// Step 1: Global EC is created and pushed
//         CALL STACK: [Global]

// Step 2: first() is called — its EC is pushed
//         CALL STACK: [first(), Global]

// Step 3: Inside first(), second(7, 9) is called — its EC is pushed
//         CALL STACK: [second(), first(), Global]

// Step 4: second() returns c — its EC is popped off
//         CALL STACK: [first(), Global]

// Step 5: first() returns a — its EC is popped off
//         CALL STACK: [Global]

// Step 6: Program eventually finishes
//         CALL STACK: []

// Visual:
// ┌────────────────────┐
// │                    │
// │   ┌────────────┐   │
// │   │ second()   │ ← currently running
// │   ├────────────┤   │
// │   │ first()    │   │
// │   ├────────────┤   │
// │   │  Global    │   │
// │   └────────────┘   │
// │                    │
// │    CALL STACK      │
// └────────────────────┘


/*
═══════════════════════════════════════════════════════════════
9. SCOPING AND SCOPE IN JAVASCRIPT: CONCEPTS
═══════════════════════════════════════════════════════════════

Scope is one of the 3 components of an execution context
(along with Variable Environment and this keyword).
*/

// SCOPING: How our program's variables are organized and accessed.
// "Where do variables live?" or "Where can we access a certain variable,
// and where not?"

// LEXICAL SCOPING: Scoping is controlled by the PLACEMENT of functions
// and blocks in the code. A function written inside another function
// has access to the outer function's variables.

// SCOPE: Space or environment in which a certain variable is declared
// (variable environment in case of functions).

// SCOPE OF A VARIABLE: Region of our code where a certain variable
// can be accessed.


/*
═══════════════════════════════════════════════════════════════
10. THE 3 TYPES OF SCOPE
═══════════════════════════════════════════════════════════════
*/

// 1. GLOBAL SCOPE
// - Outside of ANY function or block
// - Variables declared in global scope are accessible EVERYWHERE
const me = 'Jonas';
const job = 'teacher';
const year = 1989;

// 2. FUNCTION SCOPE (also called "local scope")
// - Variables are accessible ONLY inside the function, NOT outside
// - Each function creates its own scope
function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}
// console.log(now); // ReferenceError! now is inside calcAge's scope

// 3. BLOCK SCOPE (ES6)
// - Variables are accessible ONLY inside the block { } (if block, for loop, etc.)
// - HOWEVER, this only applies to let and const variables!
// - var ignores block scope (it's function-scoped)
// - Functions are also block scoped (only in strict mode)

if (year >= 1981 && year <= 1996) {
  const millenial = true;   // block-scoped — NOT accessible outside
  const food = 'Avocado toast';   // block-scoped
  var oldVar = true;        // function-scoped — IS accessible outside!
}
// console.log(millenial);  // ReferenceError! (let/const are block-scoped)
// console.log(food);       // ReferenceError!
// console.log(oldVar);     // true (var ignores block scope!)


/*
═══════════════════════════════════════════════════════════════
11. THE SCOPE CHAIN
═══════════════════════════════════════════════════════════════

When a variable is not found in the current scope, the engine
looks up in the scope chain (to parent scopes) until it finds
the variable or reaches the global scope.
*/

// Example:
const myName = 'Jonas';

function outerFunction() {
  const outerVar = 'I am outer';

  function innerFunction() {
    const innerVar = 'I am inner';
    // Can access: innerVar (own scope)
    //             outerVar (parent scope — via scope chain)
    //             myName (global scope — via scope chain)
    console.log(`${innerVar}, ${outerVar}, ${myName}`);
  }
  innerFunction();

  // Can access: outerVar (own scope), myName (global scope)
  // CANNOT access: innerVar (child scope — scope chain only goes UP)
}
// outerFunction();

// Key rules:
// - A scope has access to variables from ALL parent (outer) scopes
// - A scope does NOT have access to variables from child (inner) scopes
// - Sibling scopes don't have access to each other's variables
// - The scope chain works ONE WAY: from inner to outer (looking up)
// - Variable lookup: if not in current scope → parent → parent's parent → ... → global


/*
═══════════════════════════════════════════════════════════════
12. SCOPING IN PRACTICE
═══════════════════════════════════════════════════════════════
*/

function calcAge2(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName2}, you are ${age}, born in ${birthYear}`;
    // firstName2 is found in global scope (via scope chain)
    // age is found in calcAge2's scope (parent scope)
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      // This does NOT modify the outer firstName2 — it creates a new one
      // in the block scope that "shadows" the outer variable
      const firstName2 = 'Steven';

      // Reassigning outer scope's variable — this DOES affect the outer scope
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName2}`;
      console.log(str); // Uses the block-scoped firstName2 = 'Steven'

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);       // ReferenceError! const is block-scoped
    console.log(millenial);    // Works! var is function-scoped, not block-scoped
    // console.log(add(2, 3)); // ReferenceError in strict mode!
    console.log(output);       // 'NEW OUTPUT!' — reassignment affected outer scope
  }
  printAge();

  return age;
}

const firstName2 = 'Jonas';
// calcAge2(1991);


/*
═══════════════════════════════════════════════════════════════
13. HOISTING IN JAVASCRIPT
═══════════════════════════════════════════════════════════════

Hoisting makes some types of variables accessible/usable
BEFORE they are actually declared in the code.
"Variables are lifted to the top of their scope."

Behind the scenes: Before execution, code is scanned for variable
declarations, and for each variable, a new property is created
in the Variable Environment Object.
*/

// How hoisting works for different types:
//
// ┌──────────────────────┬───────────┬────────────────────┬──────────────────┐
// │       Type           │  Hoisted? │  Initial Value     │     Scope        │
// ├──────────────────────┼───────────┼────────────────────┼──────────────────┤
// │ function declaration │    YES    │  Actual function   │  Block (strict)  │
// │ var                  │    YES    │  undefined         │  Function        │
// │ let / const          │    YES*   │  <uninitialized>   │  Block           │
// │ function expression  │    ---    │  Depends on var/   │  Depends on var/ │
// │ arrow function       │    ---    │  let/const used    │  let/const used  │
// └──────────────────────┴───────────┴────────────────────┴──────────────────┘
//
// * Technically hoisted, but NOT accessible before declaration = TDZ


/*
═══════════════════════════════════════════════════════════════
14. TEMPORAL DEAD ZONE (TDZ)
═══════════════════════════════════════════════════════════════

The TDZ is the region of a scope where a variable is declared
but cannot yet be accessed. It starts at the beginning of the
scope and ends at the line where the variable is declared.
*/

// Example:
const myName2 = 'Jonas';

if (myName2 === 'Jonas') {
  // ─── TDZ for 'job2' starts here ───
  // console.log(`Jonas is a ${job2}`);  // ReferenceError: Cannot access 'job2' before initialization
  // const age = 2037 - 1989;
  // console.log(age);
  // ─── TDZ for 'job2' ends here ───
  const job2 = 'teacher';
  // console.log(job2);                 // Works fine: 'teacher'
  // console.log(xx);                   // ReferenceError: xx is not defined
}

// Different error messages:
// - "Cannot access 'job2' before initialization" → variable is in TDZ (it exists but can't be used yet)
// - "xx is not defined" → variable doesn't exist at all

// WHY TDZ?
// - Makes it easier to avoid and catch errors: accessing variables
//   before declaration is bad practice and should be avoided
// - Makes const variables actually work (can't be set to undefined first,
//   then reassigned — that would defeat the purpose of const)


/*
═══════════════════════════════════════════════════════════════
15. HOISTING AND TDZ IN PRACTICE
═══════════════════════════════════════════════════════════════
*/

// Variables
console.log(me2);       // undefined (var is hoisted with value undefined)
// console.log(job3);   // ReferenceError! (let is in TDZ)
// console.log(year2);  // ReferenceError! (const is in TDZ)

var me2 = 'Jonas';
let job3 = 'teacher';
const year2 = 1991;

// Functions
console.log(addDecl(2, 3)); // 5 — function declarations are fully hoisted
// console.log(addExpr(2, 3)); // ReferenceError! (const is in TDZ)
console.log(addArrow2);       // undefined (var is hoisted)
// console.log(addArrow2(2, 3)); // TypeError! addArrow2 is undefined, not a function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow2 = (a, b) => a + b;

// PITFALL: var hoisting can cause real bugs!
console.log(undefined);
if (!numProducts) deleteShoppingCart();
// numProducts is undefined (falsy!) because of hoisting,
// so deleteShoppingCart() runs unexpectedly!

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// var creates property on the window object; let and const do NOT
var xx = 1;
let yy = 2;
const zz = 3;

// console.log(xx === window.xx); // true
// console.log(yy === window.yy); // false
// console.log(zz === window.zz); // false

// Best practices:
// - Use const and let, avoid var
// - Declare variables at the top of each scope
// - Declare functions before using them


/*
═══════════════════════════════════════════════════════════════
16. THE this KEYWORD
═══════════════════════════════════════════════════════════════

The this keyword is a special variable that is created for every
execution context (every function). It takes the value of (points to)
the "owner" of the function in which it is used.

Its value depends on HOW the function is called,
and is only assigned when the function is actually called.
*/

// this in different contexts:
//
// 1. METHOD CALL (obj.method()):
//    this = the object calling the method
//
// 2. SIMPLE FUNCTION CALL:
//    this = undefined (in strict mode)
//    this = window (in sloppy mode)
//
// 3. ARROW FUNCTION:
//    this = this of the surrounding/parent scope (lexical this)
//    Arrow functions do NOT get their own this!
//
// 4. EVENT LISTENER:
//    this = the DOM element the handler is attached to
//
// 5. new, call, apply, bind:
//    (covered in later sections)

// IMPORTANT:
// - this does NOT point to the function itself
// - this does NOT point to its variable environment

// Practice:

// Global scope
// console.log(this); // window object

// Regular function
const calcAge3 = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this); // undefined (strict mode)
};
// calcAge3(1991);

// Arrow function
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this); // window! (uses parent scope's this = global scope)
};
// calcAgeArrow(1980);

// Method call
const jonas = {
  year2: 1991,
  calcAge: function () {
    // console.log(this);           // jonas object
    console.log(2037 - this.year2);
  },
};
// jonas.calcAge(); // this = jonas

// Method borrowing
const matilda = { year2: 2017 };
matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); // this = matilda (NOT jonas!)
// this always points to the object CALLING the method

const f = jonas.calcAge;
// f(); // this = undefined (simple function call, no object)


/*
═══════════════════════════════════════════════════════════════
17. REGULAR FUNCTIONS VS. ARROW FUNCTIONS
═══════════════════════════════════════════════════════════════

Key differences:
1. Arrow functions do NOT get their own this — they use parent scope's this
2. Arrow functions do NOT get the arguments keyword
3. Never use arrow functions as methods in objects!
*/

// DANGER: Arrow function as method
const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    // PROBLEM: this is undefined inside a regular function
    // called within a method
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    //   // TypeError! this is undefined
    // };

    // SOLUTION 1 (old way): Store this in a variable
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // SOLUTION 2 (modern way): Use arrow function
    // Arrow function inherits this from parent scope (calcAge → jonas2)
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // BAD! Arrow function as method — this = window, NOT jonas2
  greet: () => {
    console.log(`Hey ${this.firstName}`); // Hey undefined
  },
};
// jonas2.greet();   // this.firstName = undefined!
// jonas2.calcAge(); // Works correctly

// arguments keyword — available ONLY in regular functions
const addExpr2 = function (a, b) {
  console.log(arguments); // Works! Shows all passed arguments
  return a + b;
};
// addExpr2(2, 5);
// addExpr2(2, 5, 8, 12); // Extra args accessible through arguments

// var addArrow3 = (a, b) => {
//   console.log(arguments); // ReferenceError! Arrow functions don't have arguments
//   return a + b;
// };


/*
═══════════════════════════════════════════════════════════════
18. PRIMITIVES VS. OBJECTS (REFERENCE TYPES)
═══════════════════════════════════════════════════════════════

Understanding how JavaScript stores different types in memory.
*/

// PRIMITIVES (stored in Call Stack):
// Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Each variable holds its OWN copy of the value.

let age1 = 30;
let oldAge = age1;  // oldAge gets its own COPY of 30
age1 = 31;
console.log(age1);    // 31
console.log(oldAge);  // 30 (unchanged! — its own copy)

// OBJECTS / REFERENCE TYPES (stored in Heap):
// Object literal, Array, Function, etc.
// Variables only store a REFERENCE (memory address) to the object in the Heap.
// When you "copy" an object, you only copy the REFERENCE, not the object itself!

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// Both point to the SAME object in the Heap!
function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');
console.log('Before:', jessica1);      // lastName: 'Davis' — CHANGED!
console.log('After:', marriedJessica); // lastName: 'Davis'
// They are the SAME object — changing one changes the other

// SHALLOW COPY — only copies the first level
// Nested objects still share the same reference!
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica };  // Spread operator = shallow copy
jessicaCopy.lastName = 'Davis';      // Only affects the copy (first level)
// jessicaCopy.family.push('Mary');  // Would affect BOTH! (nested = shared reference)

// DEEP COPY — creates a completely independent copy, including nested objects
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);    // family: ['Alice', 'Bob'] — unchanged!
console.log('Clone:', jessicaClone);  // family: ['Alice', 'Bob', 'Mary', 'John']


/*
═══════════════════════════════════════════════════════════════
SUMMARY — KEY TAKEAWAYS
═══════════════════════════════════════════════════════════════

JS ENGINE:
- Has Call Stack (code execution) and Heap (object storage)
- Uses JIT compilation, NOT pure interpretation

JS RUNTIME:
- Engine + Web APIs + Callback Queue + Event Loop
- Event loop enables non-blocking behavior

EXECUTION CONTEXT:
- Created for global code and each function call
- Contains: Variable Environment, Scope Chain, this keyword
- Stacked in the Call Stack (LIFO — Last In, First Out)

SCOPING:
- 3 types: Global, Function, Block (ES6)
- var is function-scoped; let/const are block-scoped
- Scope chain goes UP (inner → outer), never down

HOISTING:
- function declarations: fully hoisted
- var: hoisted as undefined (can cause bugs!)
- let/const: hoisted but in TDZ (not accessible before declaration)
- Best practice: use const/let, declare at top

this KEYWORD:
- Method: this = calling object
- Regular function: this = undefined (strict)
- Arrow function: this = parent scope's this (lexical)
- Never use arrow functions as object methods!

PRIMITIVES VS OBJECTS:
- Primitives: stored in stack, each variable has its own copy
- Objects: stored in heap, variables hold references
- Shallow copy (spread): only copies first level
- Deep copy (structuredClone): copies everything
*/
