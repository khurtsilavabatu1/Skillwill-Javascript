"use strict";
// User (login,logout)
// Admin (deleteUser)
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda, jack);

console.log(jonas instanceof Person);
console.log({} instanceof Person);

Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};

Person.hey();
// jonas.hey();

Person.isValidEmail = function (email) {
  return email.includes("@");
};

// if(Person.isValidEmail('jonas@gmail.com')) {
// const jonas = new Person("Jonas", 1991)
// }

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// const batu = {
//   name: "batu",
// };
// console.log(batu);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5]; // new Array(1,2,3,4)
console.log(arr);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const str = "hello";
console.log(str);

console.log(str.toUpperCase()); // new String('hello').toUpperCase()

const num = 23;
console.log(num.toFixed(2)); //23.00
// new Number(23).toFixed(2)
console.log(Number.prototype);

console.dir((x) => x + 1);
console.log(Function.prototype);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2026 - this.birthYear);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
jessica.calcAge();
console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300], //[300]
  //   latest: this.movements[this.movements.length - 1],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  // latest: function () {
  //   return this.movements.slice(-1).pop();
  // },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account);

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jess = new PersonCl2("Jessica Davis", 1996);
console.log(jess);
console.log(jess.age);

Number.parseFloat("40.2");

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 30;
    console.log(`${this.make} going at ${this.speed} KM/H`);
  }

  static compareSpeed(car1, car2) {
    return car1.speed - car2.speed;
  }
}

const bmw = new Car("BMW", 120);
const tesla = new Car("Tesla", 150);

console.log(Car.compareSpeed(bmw, tesla));
// console.log(bmw.comparaSpeed(bmw, tesla));

const PersonProto = {
  calcAge() {
    console.log(2026 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
console.log(sarah);

const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person3.prototype);
Student.prototype.constructor = Student;
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person3);
console.log(mike instanceof Object);

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
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2026 - this.birthYear} years old, but as a student I feel more like ${2026 - this.birthYear + 10}`,
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
martha.greet();

class Account {
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
      return this;
    }
  }
}

const acc = new Account("Jonas", "EUR", 11111);
acc.deposit(250);
acc.withdraw(140);
acc.requestLoan(1000);
console.log(acc.getMovements());

// console.log(acc.#movements);
// console.log(acc.#pin);
// acc.#approveLoan(100);

console.log(acc);

acc.deposit(300).deposit(200).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc);
