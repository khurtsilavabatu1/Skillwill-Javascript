////////////////////////////////////
// Object-Oriented Programming (OOP) With JavaScript
// Comprehensive Theory Guide with Examples
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. WHAT IS OBJECT-ORIENTED PROGRAMMING (OOP)?
═══════════════════════════════════════════════════════════════

OOP is a programming paradigm (style of code) based on the concept
of "objects". We use objects to model (describe) real-world or
abstract features (e.g. a user, a todo item, a HTML component, etc.).

Objects may contain data (properties) and code (methods).
By using objects, we pack data and the corresponding behavior
into one block. Objects are self-contained pieces of code,
like small applications on their own.

Objects are building blocks of applications, and they interact
with one another. These interactions happen through a public
interface (API): methods that code outside the object can access
and use to communicate with the object.

OOP was developed with the goal of organizing code, making it
more flexible and easier to maintain (avoid "spaghetti code").
*/


/*
═══════════════════════════════════════════════════════════════
2. THE 4 FUNDAMENTAL PRINCIPLES OF OOP
═══════════════════════════════════════════════════════════════

These 4 principles guide how we design and implement classes/objects:
*/

// 1. ABSTRACTION
// Ignoring or hiding details that DON'T MATTER, allowing us to get
// an overview perspective of what we're implementing, instead of
// messing with details that don't really matter to our implementation.
//
// Example: A phone. We don't need to know HOW the phone connects
// to a cell tower. We just use the "call" button. The complex details
// are abstracted away.
//
// In code: We hide internal implementation and expose only what's
// necessary through a simple interface.

// 2. ENCAPSULATION
// Keeping properties and methods PRIVATE inside the class, so they
// are NOT accessible from outside the class. Some methods can be
// exposed as a public interface (API).
//
// WHY? Prevents external code from accidentally manipulating
// internal state. Allows us to change internal implementation
// without breaking external code.
//
// Example:
// - Private: password, balance (internal data)
// - Public: login(), deposit() (the interface)

// 3. INHERITANCE
// Making all properties and methods of a certain class AVAILABLE
// to a child class, forming a hierarchical relationship.
// This allows us to REUSE common logic and to model real-world
// relationships.
//
// Example:
// - Parent class: User (login, logout)
// - Child class: Admin (deleteUser) — inherits login/logout from User
//
// The child class EXTENDS the parent class.

// 4. POLYMORPHISM
// A child class can OVERWRITE a method it inherited from a parent class.
// The word comes from Greek: "poly" = many, "morph" = form.
//
// Example:
// - User has login() that checks password
// - Admin has login() that checks password + 2FA
// - Both have login(), but they behave differently


/*
═══════════════════════════════════════════════════════════════
3. OOP IN JAVASCRIPT: PROTOTYPAL INHERITANCE
═══════════════════════════════════════════════════════════════

JavaScript OOP works differently from "classical" OOP (Java, C++, etc.).
In JS, we have PROTOTYPAL INHERITANCE (also called "delegation").
*/

// In "classical" OOP:
// Class → (instantiation) → Object
// A class is like a blueprint, and objects are created from that blueprint.

// In JavaScript:
// Prototype → (delegation) → Object
// Objects are linked to a prototype object. The prototype contains
// methods and properties that all linked objects can access.
// This is called PROTOTYPAL INHERITANCE / DELEGATION.

// KEY DIFFERENCE:
// - Classical OOP: methods are COPIED from class to instances
// - JavaScript: objects DELEGATE behavior to their prototype
//   (methods are NOT copied — they are looked up via the prototype chain)

// 3 ways to implement prototypal inheritance in JavaScript:
//
// ┌──────────────────────────────────┬────────────────────────────────┐
// │ Method                          │ Notes                          │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 1. Constructor functions        │ Traditional way, used since    │
// │                                 │ the beginning of JS            │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 2. ES6 Classes                  │ Modern syntax. "Syntactic      │
// │                                 │ sugar" over constructor fns.   │
// │                                 │ Still uses prototypes!         │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 3. Object.create()              │ Most straightforward way to    │
// │                                 │ link an object to a prototype. │
// │                                 │ Not used as often in practice. │
// └──────────────────────────────────┴────────────────────────────────┘


/*
═══════════════════════════════════════════════════════════════
4. CONSTRUCTOR FUNCTIONS AND THE new OPERATOR
═══════════════════════════════════════════════════════════════

Constructor functions are regular functions that we call with the
`new` operator. By convention, constructor function names start
with a capital letter.

Arrow functions do NOT work as constructors because they don't
have their own `this` keyword.
*/

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER create methods inside constructor functions!
  // Each instance would get its own copy — terrible for performance.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }

// What happens behind the scenes when we call `new`:
//
// STEP 1: A new empty object {} is created
// STEP 2: The function is called, and `this` = the new empty object {}
// STEP 3: The new object {} is linked to the constructor's prototype
//         ({}.__proto__ = Person.prototype)
// STEP 4: The function automatically returns the new object {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true
console.log({} instanceof Person);    // false

// Static methods — belong to the constructor, NOT to instances
Person.hey = function () {
  console.log('Hey there!');
  console.log(this); // Person constructor function
};
Person.hey();      // Works
// jonas.hey();    // TypeError! Not inherited by instances


/*
═══════════════════════════════════════════════════════════════
5. PROTOTYPES
═══════════════════════════════════════════════════════════════

Every function in JavaScript has a property called `prototype`.
Objects created by a constructor function get access to all
methods and properties defined on the constructor's prototype.
*/

// Adding a method to the prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Now ALL instances can use calcAge
jonas.calcAge();   // 46
matilda.calcAge(); // 20

// The method is NOT on the object itself — it's on the prototype
console.log(jonas);
// Person { firstName: 'Jonas', birthYear: 1991 }
// No calcAge here! But we can still call it because of the prototype chain.

// Every object has a special property __proto__ that points to its prototype
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true!

// IMPORTANT: Person.prototype is NOT the prototype OF Person.
// It's the prototype that will be used for objects CREATED BY Person.
// Better name would have been: Person.prototypeOfLinkedObjects

console.log(Person.prototype.isPrototypeOf(jonas));  // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person));  // false!

// Adding properties to prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

// hasOwnProperty — checks if property is directly on the object (not inherited)
console.log(jonas.hasOwnProperty('firstName')); // true (own property)
console.log(jonas.hasOwnProperty('species'));    // false (inherited from prototype)


/*
═══════════════════════════════════════════════════════════════
6. PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN
═══════════════════════════════════════════════════════════════

When we access a property or method on an object, JavaScript first
looks for it on the object itself. If it doesn't find it, it looks
up the prototype chain — checking the prototype, then the prototype's
prototype, and so on, until it reaches null.
*/

// The prototype chain for jonas:
//
// jonas → Person.prototype → Object.prototype → null
//
// ┌──────────────────────┐
// │   jonas              │
// │   firstName: 'Jonas' │
// │   birthYear: 1991    │
// │   __proto__: ────────┼──┐
// └──────────────────────┘  │
//                           ▼
// ┌──────────────────────────────┐
// │   Person.prototype           │
// │   calcAge: function          │
// │   species: 'Homo Sapiens'    │
// │   constructor: Person        │
// │   __proto__: ────────────────┼──┐
// └──────────────────────────────┘  │
//                                   ▼
// ┌──────────────────────────────┐
// │   Object.prototype           │
// │   hasOwnProperty: function   │
// │   toString: function         │
// │   constructor: Object        │
// │   __proto__: null ← END      │
// └──────────────────────────────┘

// When we call jonas.calcAge():
// 1. JS looks for calcAge on jonas → NOT found
// 2. JS looks on jonas.__proto__ (Person.prototype) → FOUND! Execute it.

// When we call jonas.hasOwnProperty('firstName'):
// 1. JS looks for hasOwnProperty on jonas → NOT found
// 2. JS looks on Person.prototype → NOT found
// 3. JS looks on Object.prototype → FOUND! Execute it.

console.log(jonas.__proto__);                    // Person.prototype
console.log(jonas.__proto__.__proto__);           // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__);  // null (end of chain)


/*
═══════════════════════════════════════════════════════════════
7. PROTOTYPE CHAIN ON BUILT-IN OBJECTS
═══════════════════════════════════════════════════════════════

This is WHY every data type in JavaScript has methods!
Arrays, strings, numbers — they all inherit methods from
their respective prototypes through the prototype chain.
*/

// ARRAYS
const arr = [3, 6, 6, 5, 6, 9, 9]; // same as: new Array(3, 6, ...)

console.log(arr.__proto__);                 // Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// Array.prototype contains: push, pop, map, filter, reduce, etc.
// That's why we can call arr.map(), arr.filter(), etc.!

console.log(arr.__proto__.__proto__);       // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// Prototype chain for arrays:
// arr → Array.prototype → Object.prototype → null

// We can even ADD methods to Array.prototype (but DON'T do this in practice!)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [3, 6, 5, 9]

// STRINGS (autoboxing)
// When we call a method on a string primitive, JavaScript temporarily
// wraps it in a String object (boxing), calls the method, then unwraps it.
const str = 'hello';
console.log(str.toUpperCase()); // 'HELLO'
// Behind the scenes: new String('hello').toUpperCase()
// String.prototype contains: toUpperCase, slice, split, etc.

// NUMBERS (autoboxing)
const num = 23;
console.log(num.toFixed(2)); // '23.00'
// Behind the scenes: new Number(23).toFixed(2)
// Number.prototype contains: toFixed, toString, etc.

// FUNCTIONS
console.dir(x => x + 1);
// Functions also have a prototype: Function.prototype
// It contains: call, apply, bind, etc.

// THE BIG PICTURE:
// ┌────────────────────────────────────────────────────────────┐
// │  Everything in JS inherits from Object.prototype           │
// │                                                            │
// │  Array  →  Array.prototype  →  Object.prototype  →  null   │
// │  String →  String.prototype →  Object.prototype  →  null   │
// │  Number →  Number.prototype →  Object.prototype  →  null   │
// │  Person →  Person.prototype →  Object.prototype  →  null   │
// └────────────────────────────────────────────────────────────┘


/*
═══════════════════════════════════════════════════════════════
8. ES6 CLASSES
═══════════════════════════════════════════════════════════════

ES6 classes are "syntactic sugar" over constructor functions.
They do EXACTLY the same thing behind the scenes, but with a
nicer, more modern syntax.

IMPORTANT things about classes:
1. Classes are NOT hoisted (even class declarations)
2. Classes are first-class citizens (can be passed/returned from functions)
3. Classes are always executed in strict mode
*/

// Class declaration (recommended)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods written here are added to PersonCl.prototype
  // NOT to the instances themselves
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
jessica.calcAge(); // 41
jessica.greet();   // Hey Jessica Davis

// Proving it uses prototypes under the hood:
console.log(jessica.__proto__ === PersonCl.prototype); // true

// We can still add methods to the prototype manually
// PersonCl.prototype.anotherMethod = function () { ... };

// Class expression (also valid, less common)
// const PersonCl2 = class { ... };


/*
═══════════════════════════════════════════════════════════════
9. GETTERS AND SETTERS
═══════════════════════════════════════════════════════════════

Accessor properties — they look like regular properties but are
actually functions that run when we get or set a value.
Every object can have getter and setter properties.
*/

// In a regular object:
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);     // 300 (used as property, not method call!)
account.latest = 50;             // Triggers the setter
console.log(account.movements);  // [200, 530, 120, 300, 50]

// In a class:
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // This triggers the setter!
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Useful for validation
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jess = new PersonCl2('Jessica Davis', 1996);
console.log(jess.age);       // 41 (getter — accessed as property)
console.log(jess.fullName);  // 'Jessica Davis' (getter)

// NOTE: When a setter has the same name as a constructor property,
// we use _propertyName convention to avoid infinite recursion.
// The setter sets this._fullName, and the getter returns this._fullName.


/*
═══════════════════════════════════════════════════════════════
10. STATIC METHODS
═══════════════════════════════════════════════════════════════

Static methods are attached to the constructor/class itself,
NOT to the prototype. Therefore, instances cannot access them.
They are often used as helper/utility functions.
*/

// Built-in examples:
// Array.from() — static method on Array constructor
// Number.parseFloat() — static method on Number constructor
// These are NOT available on array/number instances:
// [1,2,3].from() — TypeError!
// (23).parseFloat() — TypeError!

// In constructor functions:
Person.hey = function () {
  console.log('Hey there!');
};
Person.hey();    // Works
// jonas.hey();  // TypeError! Not on the prototype

// In classes:
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  static compareSpeed(car1, car2) {
    return car1.speed - car2.speed;
  }
}

const bmw = new Car('BMW', 120);
const tesla = new Car('Tesla', 150);
console.log(Car.compareSpeed(bmw, tesla)); // -30
// bmw.compareSpeed(tesla); // TypeError!


/*
═══════════════════════════════════════════════════════════════
11. Object.create()
═══════════════════════════════════════════════════════════════

The most straightforward way to set the prototype of an object.
No constructor function, no `new` operator, no `.prototype` property.
We manually set the prototype of an object to any other object.
*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // Not a constructor! Just a regular method for initialization
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Create a new object with PersonProto as its prototype
const steven = Object.create(PersonProto);
console.log(steven); // {} (empty object, but linked to PersonProto)

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35 (found on prototype via delegation)

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); // Using the init method for cleaner initialization
sarah.calcAge(); // 58

// Prototype chain:
// steven → PersonProto → Object.prototype → null
//
// ┌────────────────┐      ┌────────────────┐      ┌──────────────────┐
// │  steven         │      │  PersonProto    │      │ Object.prototype │
// │  name: 'Steven'│─────▶│  calcAge()     │─────▶│  toString()      │──▶ null
// │  birthYear: 2002│      │  init()        │      │  hasOwnProperty()│
// └────────────────┘      └────────────────┘      └──────────────────┘


/*
═══════════════════════════════════════════════════════════════
12. INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS
═══════════════════════════════════════════════════════════════

A child constructor function can inherit from a parent by linking
their prototypes. This allows us to reuse common functionality.
*/

// Parent
const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Child
const Student = function (firstName, birthYear, course) {
  // Call parent constructor with correct `this`
  // Without .call(this, ...), `this` inside Person3 would be undefined
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

// IMPORTANT: Link prototypes BEFORE adding methods to Student.prototype
// Student.prototype = Person3.prototype; // WRONG! Would make them the same object
Student.prototype = Object.create(Person3.prototype);

// Now add methods specific to Student
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge();   // 17 (inherited from Person3.prototype!)

console.log(mike instanceof Student); // true
console.log(mike instanceof Person3); // true
console.log(mike instanceof Object);  // true

// Fix constructor property (it points to Person3 after Object.create)
Student.prototype.constructor = Student;

// Prototype chain:
// mike → Student.prototype → Person3.prototype → Object.prototype → null
//
// ┌──────────────┐     ┌───────────────────┐     ┌───────────────────┐
// │  mike         │     │ Student.prototype  │     │ Person3.prototype │
// │  firstName    │────▶│ introduce()       │────▶│ calcAge()         │──▶ Object.prototype
// │  birthYear    │     │ constructor: Stud. │     │ constructor: Pers.│
// │  course       │     └───────────────────┘     └───────────────────┘
// └──────────────┘


/*
═══════════════════════════════════════════════════════════════
13. INHERITANCE BETWEEN "CLASSES": ES6 CLASSES
═══════════════════════════════════════════════════════════════

Much simpler syntax! Use `extends` and `super` keywords.
Behind the scenes, it does exactly the same thing as section 12.
*/

class PersonCl3 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
}

class StudentCl extends PersonCl3 {
  constructor(fullName, birthYear, course) {
    // super() calls the parent's constructor
    // MUST happen FIRST before using `this`!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // POLYMORPHISM: Overriding parent's calcAge method
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce(); // My name is Martha Jones and I study Computer Science
martha.calcAge();   // I'm 25 years old, but as a student I feel more like 35
martha.greet();     // Hey Martha Jones (inherited from PersonCl3!)

// NOTE: If the child class doesn't need any new properties,
// you can omit the constructor entirely — super() is called automatically:
// class StudentCl extends PersonCl3 {
//   introduce() { ... }
// }


/*
═══════════════════════════════════════════════════════════════
14. INHERITANCE BETWEEN "CLASSES": Object.create()
═══════════════════════════════════════════════════════════════

Using Object.create() to create a chain of prototypes.
This is the most "pure" form of prototypal inheritance.
*/

const PersonProto2 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// StudentProto inherits from PersonProto2
const StudentProto = Object.create(PersonProto2);

StudentProto.init = function (firstName, birthYear, course) {
  // Call parent's init
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// jay inherits from StudentProto, which inherits from PersonProto2
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge();   // 27 (found on PersonProto2 via chain)

// Prototype chain:
// jay → StudentProto → PersonProto2 → Object.prototype → null


/*
═══════════════════════════════════════════════════════════════
15. ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
═══════════════════════════════════════════════════════════════

Encapsulation means keeping some properties and methods PRIVATE
inside a class, preventing external code from accidentally
manipulating internal state.

JavaScript didn't have true privacy until recently.
The convention was to prefix "protected" properties with underscore (_).
*/

// Convention: _ prefix means "don't touch from outside"
class Account1 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;             // "Protected" by convention
    this._movements = [];        // "Protected" by convention

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API) for accessing movements
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val); // Uses deposit internally
  }

  _approveLoan(val) {  // "Protected" helper method
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account1('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements()); // [250, -140, 1000]

// These still work — _ is just a convention, not enforcement:
// acc1._movements.push(999);  // ⚠️ Still accessible, but DON'T do this!
// console.log(acc1._pin);     // ⚠️ Still accessible, but DON'T do this!


/*
═══════════════════════════════════════════════════════════════
16. ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS
═══════════════════════════════════════════════════════════════

ES2022 introduced true private class fields and methods using the # syntax.
Private fields are truly inaccessible from outside the class.

There are 4 kinds of fields/methods:
1. Public fields
2. Private fields (#)
3. Public methods
4. Private methods (#)

(There are also static versions of each)
*/

class Account {
  // 1) Public fields — on every instance, NOT on prototype
  locale = navigator.language;

  // 2) Private fields — truly private, inaccessible from outside
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods — the public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // For chaining
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  // 4) Private methods — truly private
  #approveLoan(val) {
    return true;
  }

  // Static method (public)
  static helper() {
    console.log('Helper');
  }
}

const acc = new Account('Jonas', 'EUR', 1111);

acc.deposit(250);
acc.withdraw(140);
acc.requestLoan(1000);
console.log(acc.getMovements()); // [250, -140, 1000]

// These will throw SyntaxError:
// console.log(acc.#movements);     // SyntaxError! Truly private
// console.log(acc.#pin);           // SyntaxError! Truly private
// acc.#approveLoan(100);           // SyntaxError! Truly private

console.log(acc);
// The # fields exist on the object but cannot be accessed from outside


/*
═══════════════════════════════════════════════════════════════
17. CHAINING METHODS
═══════════════════════════════════════════════════════════════

We can chain method calls (like arr.filter().map().reduce())
by returning `this` from each method. This works because
returning `this` gives back the object itself, so we can
immediately call another method on it.
*/

// Using the Account class from section 16 (which returns `this`):
acc
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);

console.log(acc.getMovements());
// [250, -140, 1000, 300, 500, -35, 25000, -4000]

// How it works:
// acc.deposit(300) returns acc → acc.deposit(500) returns acc → ...
// Each method call modifies the object and returns it for the next call.

// To enable chaining in your own classes, simply add `return this;`
// at the end of methods that should be chainable.


/*
═══════════════════════════════════════════════════════════════
SUMMARY — KEY TAKEAWAYS
═══════════════════════════════════════════════════════════════

OOP PRINCIPLES:
- Abstraction: Hide complexity, expose simple interface
- Encapsulation: Keep internals private, expose public API
- Inheritance: Child classes extend parent classes
- Polymorphism: Child can override parent's methods

PROTOTYPAL INHERITANCE:
- Objects delegate behavior to their prototype (not copied!)
- Prototype chain: object → prototype → prototype → ... → null
- This is WHY arrays have .push(), strings have .toUpperCase(), etc.
- Every chain ends at Object.prototype → null

3 WAYS TO CREATE "CLASSES":
- Constructor functions + new: traditional, prototype is explicit
- ES6 Classes: modern syntax, "syntactic sugar" over constructors
- Object.create(): manual prototype linking, least common

ES6 CLASSES:
- constructor() for initialization
- Methods go on the prototype automatically
- extends + super for inheritance
- NOT hoisted, always in strict mode, first-class citizens

ENCAPSULATION:
- Convention: _property (protected by naming convention)
- ES2022: #property (truly private, enforced by JS engine)

USEFUL PATTERNS:
- Static methods: utility functions on the class itself (not instances)
- Getters/Setters: accessor properties for validation
- Method chaining: return this from methods
- Polymorphism: override parent methods in child class
*/
