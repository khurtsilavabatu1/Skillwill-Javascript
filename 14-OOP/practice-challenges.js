'use strict';

////////////////////////////////////
// Object-Oriented Programming (OOP)
// Practice Challenges - With Solutions
////////////////////////////////////


////////////////////////////////////
// Practice Challenge #1 - Animal Kingdom
// (Constructor Functions + new Operator)

/*
You are building a simple animal registry for a zoo. Each animal
needs to be represented as an object created from a constructor function.

1. Create a constructor function 'Animal' that takes three parameters:
   species, name, and sound
2. Inside the constructor, assign all three parameters as properties
   on the new object using 'this'
3. Create three animal instances using the 'new' operator:
   - A dog named 'Rex' that says 'Woof'
   - A cat named 'Whiskers' that says 'Meow'
   - A parrot named 'Polly' that says 'Squawk'
4. Log all three animal objects to the console
5. Use 'instanceof' to verify that each animal is an instance of Animal,
   and log the results
6. Create a plain object { species: 'Fish', name: 'Nemo', sound: 'Blub' }
   and check if it is an instanceof Animal (it should be false!)
7. In a comment, explain the 4 steps that happen behind the scenes when
   you call a function with 'new'

TEST DATA: Dog 'Rex' 'Woof', Cat 'Whiskers' 'Meow', Parrot 'Polly' 'Squawk'

HINT: Constructor function names start with a capital letter by convention
HINT: Arrow functions cannot be used as constructors because they don't have
      their own 'this'

GOOD LUCK 😀
*/

// const Animal = function (species, name, sound) {
//   this.species = species;
//   this.name = name;
//   this.sound = sound;
// };

// const dog = new Animal('Dog', 'Rex', 'Woof');
// const cat = new Animal('Cat', 'Whiskers', 'Meow');
// const parrot = new Animal('Parrot', 'Polly', 'Squawk');

// console.log(dog);    // Animal { species: 'Dog', name: 'Rex', sound: 'Woof' }
// console.log(cat);    // Animal { species: 'Cat', name: 'Whiskers', sound: 'Meow' }
// console.log(parrot); // Animal { species: 'Parrot', name: 'Polly', sound: 'Squawk' }

// // instanceof checks
// console.log(dog instanceof Animal);    // true
// console.log(cat instanceof Animal);    // true
// console.log(parrot instanceof Animal); // true

// // Plain object - NOT created with the Animal constructor
// const fish = { species: 'Fish', name: 'Nemo', sound: 'Blub' };
// console.log(fish instanceof Animal); // false

// // The 4 steps behind the scenes when 'new' is called:
// // Step 1: A new empty object {} is created
// // Step 2: The function is called, and 'this' is set to the new empty object {}
// // Step 3: The new object is linked to the constructor's prototype
// //         ({}.__proto__ = Animal.prototype)
// // Step 4: The function automatically returns the new object {}


////////////////////////////////////
// Practice Challenge #2 - Prototype Power
// (Prototypes + Prototype Chain)

/*
You are exploring how prototypes work in JavaScript by building a
'Smartphone' constructor and attaching shared methods to its prototype.

1. Create a constructor function 'Smartphone' that takes brand, model,
   and batteryLevel (a number from 0 to 100)
2. Add a method 'call' to Smartphone.prototype that takes a contact name
   and logs: "Calling <contact> from <brand> <model>..."
3. Add a method 'checkBattery' to Smartphone.prototype that logs:
   "Battery at <batteryLevel>%" if above 20, or "Low battery! Only <batteryLevel>% left!" if 20 or below
4. Create two instances: ('Apple', 'iPhone 15', 85) and ('Samsung', 'Galaxy S24', 15)
5. Call the 'call' method on both phones with different contact names
6. Call 'checkBattery' on both phones and observe the different messages
7. Use 'hasOwnProperty' to show that 'brand' is an OWN property of each
   instance, but 'call' is NOT (because it lives on the prototype)
8. Log phone1.__proto__ and verify it equals Smartphone.prototype using ===

TEST DATA: Phone 1: 'Apple', 'iPhone 15', 85  |  Phone 2: 'Samsung', 'Galaxy S24', 15

HINT: Methods on the prototype are shared, not copied to each instance.
      This is memory-efficient because all instances reference the same function.
HINT: hasOwnProperty returns true only for properties directly on the object

GOOD LUCK 😀
*/

// const Smartphone = function (brand, model, batteryLevel) {
//   this.brand = brand;
//   this.model = model;
//   this.batteryLevel = batteryLevel;
// };

// Smartphone.prototype.call = function (contact) {
//   console.log(`Calling ${contact} from ${this.brand} ${this.model}...`);
// };

// Smartphone.prototype.checkBattery = function () {
//   if (this.batteryLevel > 20) {
//     console.log(`Battery at ${this.batteryLevel}%`);
//   } else {
//     console.log(`Low battery! Only ${this.batteryLevel}% left!`);
//   }
// };

// const phone1 = new Smartphone('Apple', 'iPhone 15', 85);
// const phone2 = new Smartphone('Samsung', 'Galaxy S24', 15);

// // Calling contacts
// phone1.call('Alice');  // Calling Alice from Apple iPhone 15...
// phone2.call('Bob');    // Calling Bob from Samsung Galaxy S24...

// // Battery checks
// phone1.checkBattery(); // Battery at 85%
// phone2.checkBattery(); // Low battery! Only 15% left!

// // hasOwnProperty checks
// console.log(phone1.hasOwnProperty('brand'));  // true  (own property)
// console.log(phone1.hasOwnProperty('call'));   // false (on prototype)
// console.log(phone2.hasOwnProperty('model'));  // true  (own property)
// console.log(phone2.hasOwnProperty('checkBattery')); // false (on prototype)

// // Prototype verification
// console.log(phone1.__proto__);
// console.log(phone1.__proto__ === Smartphone.prototype); // true


////////////////////////////////////
// Practice Challenge #3 - Vehicle Factory
// (Constructor + Prototypes Combined)

/*
You are building a vehicle racing simulator. Create vehicles with a
constructor function, add behavior through prototypes, and then race them!

1. Create a constructor function 'Vehicle' with properties: make, model,
   and speed (starting speed in km/h)
2. Add an 'accelerate' method to Vehicle.prototype that increases speed
   by 20 and logs: "<make> <model> accelerates to <speed> km/h"
3. Add a 'brake' method to Vehicle.prototype that decreases speed by 15
   (but never below 0) and logs: "<make> <model> brakes to <speed> km/h"
4. Add a 'status' method to Vehicle.prototype that logs:
   "<make> <model> is going <speed> km/h"
5. Create three vehicles:
   - 'Toyota', 'Supra', 0
   - 'BMW', 'M3', 0
   - 'Tesla', 'Model S', 0
6. Simulate a mini race: accelerate each vehicle 3 times, then brake once,
   then call status on each
7. Verify the prototype chain: log vehicle.__proto__ (should be Vehicle.prototype),
   vehicle.__proto__.__proto__ (should be Object.prototype), and
   vehicle.__proto__.__proto__.__proto__ (should be null)

TEST DATA: Toyota Supra, BMW M3, Tesla Model S - all starting at 0 km/h

HINT: When braking, use Math.max(0, this.speed - 15) to prevent negative speed
HINT: The prototype chain goes: instance -> Constructor.prototype -> Object.prototype -> null

GOOD LUCK 😀
*/

// const Vehicle = function (make, model, speed) {
//   this.make = make;
//   this.model = model;
//   this.speed = speed;
// };

// Vehicle.prototype.accelerate = function () {
//   this.speed += 20;
//   console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
// };

// Vehicle.prototype.brake = function () {
//   this.speed = Math.max(0, this.speed - 15);
//   console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
// };

// Vehicle.prototype.status = function () {
//   console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
// };

// const car1 = new Vehicle('Toyota', 'Supra', 0);
// const car2 = new Vehicle('BMW', 'M3', 0);
// const car3 = new Vehicle('Tesla', 'Model S', 0);

// // Mini race - accelerate 3 times each
// console.log('--- Race Start ---');
// car1.accelerate(); // 20
// car1.accelerate(); // 40
// car1.accelerate(); // 60

// car2.accelerate(); // 20
// car2.accelerate(); // 40
// car2.accelerate(); // 60

// car3.accelerate(); // 20
// car3.accelerate(); // 40
// car3.accelerate(); // 60

// // Brake once each
// console.log('--- Braking ---');
// car1.brake(); // 45
// car2.brake(); // 45
// car3.brake(); // 45

// // Final status
// console.log('--- Final Status ---');
// car1.status(); // Toyota Supra is going 45 km/h
// car2.status(); // BMW M3 is going 45 km/h
// car3.status(); // Tesla Model S is going 45 km/h

// // Prototype chain verification
// console.log('--- Prototype Chain ---');
// console.log(car1.__proto__);                    // Vehicle.prototype
// console.log(car1.__proto__ === Vehicle.prototype); // true
// console.log(car1.__proto__.__proto__);           // Object.prototype
// console.log(car1.__proto__.__proto__ === Object.prototype); // true
// console.log(car1.__proto__.__proto__.__proto__); // null (end of chain)


////////////////////////////////////
// Practice Challenge #4 - Static vs Instance
// (Static Methods)

/*
You need to build a 'MathHelper' utility that demonstrates the difference
between static methods (belonging to the constructor) and instance methods
(available on instances through the prototype).

1. Create a constructor function 'MathHelper' that takes a single parameter
   'value' and stores it as a property
2. Add a STATIC method 'isEven' on MathHelper itself (not on prototype) that
   takes a number and returns true if it is even, false otherwise
3. Add a STATIC method 'celsiusToFahrenheit' on MathHelper itself that takes
   a Celsius value and returns the Fahrenheit equivalent (formula: C * 9/5 + 32)
4. Add a STATIC method 'factorial' on MathHelper itself that takes a number
   and returns its factorial (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).
   Use a for loop.
5. Add an INSTANCE method 'double' on MathHelper.prototype that returns
   this.value * 2
6. Add an INSTANCE method 'isPositive' on MathHelper.prototype that returns
   true if this.value > 0
7. Create an instance: new MathHelper(7). Call the instance methods on it.
8. Call the static methods directly on MathHelper (not on the instance).
   Then try calling a static method on the instance and show it fails.

TEST DATA: Static: isEven(4), isEven(7), celsiusToFahrenheit(100), factorial(5)
           Instance: new MathHelper(7) -> double(), isPositive()

HINT: Static methods are added directly to the constructor: MathHelper.isEven = function() {}
HINT: Instance methods are added to the prototype: MathHelper.prototype.double = function() {}
HINT: Static methods use 'this' to refer to the constructor, not to instances

GOOD LUCK 😀
*/

// const MathHelper = function (value) {
//   this.value = value;
// };

// // Static methods - belong to the constructor itself
// MathHelper.isEven = function (num) {
//   return num % 2 === 0;
// };

// MathHelper.celsiusToFahrenheit = function (celsius) {
//   return celsius * 9 / 5 + 32;
// };

// MathHelper.factorial = function (n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };

// // Instance methods - on the prototype, available to all instances
// MathHelper.prototype.double = function () {
//   return this.value * 2;
// };

// MathHelper.prototype.isPositive = function () {
//   return this.value > 0;
// };

// // Using static methods (called on the constructor)
// console.log('--- Static Methods ---');
// console.log(`Is 4 even? ${MathHelper.isEven(4)}`);           // true
// console.log(`Is 7 even? ${MathHelper.isEven(7)}`);           // false
// console.log(`100°C in Fahrenheit: ${MathHelper.celsiusToFahrenheit(100)}`); // 212
// console.log(`5! = ${MathHelper.factorial(5)}`);               // 120

// // Using instance methods (called on the instance)
// const helper = new MathHelper(7);
// console.log('--- Instance Methods ---');
// console.log(`Value: ${helper.value}`);           // 7
// console.log(`Doubled: ${helper.double()}`);      // 14
// console.log(`Is positive? ${helper.isPositive()}`); // true

// // Proving static methods do NOT work on instances
// console.log('--- Static vs Instance ---');
// console.log(typeof MathHelper.isEven);   // 'function' (exists on constructor)
// console.log(typeof helper.isEven);       // 'undefined' (does NOT exist on instance)
// // helper.isEven(4); // TypeError: helper.isEven is not a function

// // Proving instance methods do NOT work on the constructor
// console.log(typeof helper.double);       // 'function' (exists on instance)
// console.log(typeof MathHelper.double);   // 'undefined' (does NOT exist on constructor)


////////////////////////////////////
// Practice Challenge #5 - Class Refactor
// (ES6 Classes)

/*
Take the Vehicle constructor from Challenge #3 and refactor it into an
ES6 class. Then prove that ES6 classes are just "syntactic sugar" over
constructor functions — the underlying prototype mechanism is identical.

1. Create an ES6 class 'VehicleCl' with a constructor that takes make,
   model, and speed
2. Add an 'accelerate' method inside the class body that increases speed
   by 20 and logs: "<make> <model> accelerates to <speed> km/h"
3. Add a 'brake' method inside the class body that decreases speed by 15
   (never below 0) and logs: "<make> <model> brakes to <speed> km/h"
4. Add a 'status' method inside the class body that logs:
   "<make> <model> is going <speed> km/h"
5. Create two instances: ('Honda', 'Civic', 0) and ('Ford', 'Mustang', 0)
6. Accelerate both vehicles twice, brake once, then print status
7. Verify that the class works through prototypes behind the scenes:
   - Log civic.__proto__ === VehicleCl.prototype (should be true)
   - Log that 'accelerate' is NOT an own property of the instance
     (hasOwnProperty should return false)
   - Log that 'make' IS an own property of the instance
8. Compare: create the same vehicle with the old Vehicle constructor from
   Challenge #3 and show both __proto__ chains look the same
   (instance -> Constructor.prototype -> Object.prototype -> null)

TEST DATA: Honda Civic, Ford Mustang - both starting at 0 km/h

HINT: Methods defined inside a class body (outside the constructor) are
      automatically added to the class's prototype, not to each instance
HINT: ES6 classes are NOT hoisted — you must declare them before using them
HINT: Classes always execute in strict mode

GOOD LUCK 😀
*/

// class VehicleCl {
//   constructor(make, model, speed) {
//     this.make = make;
//     this.model = model;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 20;
//     console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed = Math.max(0, this.speed - 15);
//     console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
//   }

//   status() {
//     console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
//   }
// }

// const civic = new VehicleCl('Honda', 'Civic', 0);
// const mustang = new VehicleCl('Ford', 'Mustang', 0);

// // Accelerate twice, brake once
// console.log('--- ES6 Class Race ---');
// civic.accelerate();   // 20
// civic.accelerate();   // 40
// civic.brake();        // 25

// mustang.accelerate(); // 20
// mustang.accelerate(); // 40
// mustang.brake();      // 25

// // Final status
// console.log('--- Final Status ---');
// civic.status();   // Honda Civic is going 25 km/h
// mustang.status(); // Ford Mustang is going 25 km/h

// // Proving ES6 classes use prototypes behind the scenes
// console.log('--- Prototype Verification ---');
// console.log(civic.__proto__ === VehicleCl.prototype);     // true
// console.log(civic.hasOwnProperty('accelerate'));          // false (on prototype)
// console.log(civic.hasOwnProperty('make'));                // true  (own property)

// // Prototype chain is identical to constructor function pattern
// console.log('--- Prototype Chain (ES6 Class) ---');
// console.log(civic.__proto__);                    // VehicleCl.prototype
// console.log(civic.__proto__.__proto__);           // Object.prototype
// console.log(civic.__proto__.__proto__.__proto__); // null

// // Compare with constructor function version (from Challenge #3)
// // Uncomment Challenge #3 solution to run this comparison
// // const supra = new Vehicle('Toyota', 'Supra', 0);
// // console.log('--- Prototype Chain (Constructor Function) ---');
// // console.log(supra.__proto__);                    // Vehicle.prototype
// // console.log(supra.__proto__.__proto__);           // Object.prototype
// // console.log(supra.__proto__.__proto__.__proto__); // null
// // Both chains: instance -> Constructor.prototype -> Object.prototype -> null
// // ES6 classes are just syntactic sugar — the mechanism is the same!
