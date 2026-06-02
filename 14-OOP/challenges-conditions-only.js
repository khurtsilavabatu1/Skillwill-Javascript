////////////////////////////////////
// Object-Oriented Programming (OOP)
// Practice Challenges - Conditions Only
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
