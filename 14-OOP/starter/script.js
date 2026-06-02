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
