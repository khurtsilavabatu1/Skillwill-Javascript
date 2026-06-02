"use strict";

// const greet = () => console.log("Hey");
// const btnEl = {
//   addEventListener: (event, fn) => fn(),
// };
// btnEl.addEventListener("click", greet);

const name = "jonass";

// const noArguments = (a, b) => {
//   console.log(arguments);
// };

function withArguments(a, b) {
  console.log(arguments.length);
}

// noArguments(1, 2);
withArguments(1, 2);

const me = "Jonas";
const job = "teacher";
const year = "1999";

function calcAge(birthYear) {
  const now = 2026;
  const age = now - birthYear;
  return age;
}

// console.log(now);

if (year >= 1996 && year <= 2000) {
  const millenial = true;
  const food = "Avocado toast";
  var oldVar = true;
}

// console.log(millenial);
// console.log(food);
// console.log(oldVar);

// function calcAge2(birthYear) {
//   const age = 2026 - birthYear;
//   var varVar = true;
//   function printAge() {
//     let output = `${firstName2}, you are ${age},bordn in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;

//       const firstName2 = "Steven";

//       output = "New Output";
//       const str = `Oh, and you're a millenial, ${firstName2}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// console.log(firstName2);

// const firstName2 = "Jonas";
// calcAge2(1995);
// console.log(varVar);

// function ownMap() {
//   console.log(arr);
// }
// ownMap();
// var arr = [1, 2, 3];

// console.log(me2);
// // console.log(job3);
// // console.log(year2);

// var me2 = "Jonas";
// let job3 = "teacher";
// const year2 = 1991;

// // console.log(addDec1(2, 3));
// // console.log(addExp(2, 3));

// // console.log(addArrow2);

// function addDec1(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// var addArrow2 = (a, b) => a + b;

// // if (!numProducts) deleteShoppingCart();

// var xx = 1;
// let yy = 2;
// console.log(window);

// console.log(xx == window.xx);

// const calcAge3 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge3(1999);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2000);

// document.querySelector("h1").addEventListener("click", () => {});

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// const matilda = { year: 2017 };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// // const f = function() {
// //     console.log(2037 - this.year);
// //   },
// const f = jonas.calcAge;
// f();

let age1 = 30;
let oldAge = age1;
age1 = 31;
console.log(age1);
console.log(oldAge);

const jessica1 = {
  firstName: "Jessica",
  lastName: "Wiilliams",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");
console.log("before", jessica1);
console.log("after", marriedJessica);

const jessica = {
  firstName: "Jessica",
  lastName: "Wiilliams",
  age: 27,
  family: ["Alice", "Bob"],
  child: {
    firstName: "Jessica",
    lastName: "Wiilliams",
    friends: {
      names: ["nick", "john"],
      firstName: "Jessica",
      friendParents: [],
    },
  },
};

// const jessicaCopy = { ...jessica };
const jessicaCopy = {
  ...jessica,
  family: [...jessica.family],
  child: {
    ...jessica.child,
    friends: {
      ...jessica.child.friends,
      names: [...jessica.child.friends.names],
    },
  },
};
jessicaCopy.lastName = "Davis";
console.log(jessica);
console.log(jessicaCopy);

// jessicaCopy.family.push("Mary");
console.log(jessica);
console.log(jessicaCopy);

const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("marry");

console.log("Original", jessica);
console.log("Clone", jessicaClone);
