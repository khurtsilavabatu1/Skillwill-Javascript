'use strict';

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); // "Jonas, you are 46, born in 1991" — firstName მოიძებნა გლობალურ scope-ში scope chain-ით

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // ახალი ცვლადი ბლოკის scope-ში, არ ცვლის გარეთა firstName-ს

      output = 'NEW OUTPUT!'; // გარეთა output-ის ხელახალი მინიჭება

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str); // "Oh, and you're a millenial, Steven" — ბლოკის scope-ში firstName = 'Steven'

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // ReferenceError — const ბლოკის scope-შია
    console.log(millenial); // true — var ფუნქციის scope-შია, ბლოკს არ ექვემდებარება
    // console.log(add(2, 3)); // ReferenceError strict mode-ში — ფუნქციაც ბლოკის scope-შია
    console.log(output); // "NEW OUTPUT!" — if ბლოკში output ხელახლა მიენიჭა
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // ReferenceError — age მხოლოდ calcAge-ის scope-შია
// printAge(); // ReferenceError — printAge მხოლოდ calcAge-ის scope-შია


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me); // undefined — var ჰოისტდება undefined-ით
// console.log(job); // ReferenceError — let TDZ-შია (ჰოისტდება მაგრამ არ ინიციალიზდება)
// console.log(year); // ReferenceError — const TDZ-შია

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); // 5 — function declaration სრულად ჰოისტდება
// console.log(addExpr(2, 3)); // ReferenceError — const TDZ-შია, ფუნქცია ჯერ არ არსებობს
console.log(addArrow); // undefined — var ჰოისტდება undefined-ით (ფუნქცია ჯერ არ არის)
// console.log(addArrow(2, 3)); // TypeError — undefined ფუნქცია არ არის, ვერ გამოიძახება

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined); // undefined — პირდაპირ undefined მნიშვნელობის ლოგი
if (!numProducts) deleteShoppingCart(); // numProducts undefined-ია (falsy) hoisting-ის გამო, ამიტომ ფუნქცია გაეშვება

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!'); // "All products deleted!" — var hoisting-ის გამო numProducts undefined იყო, !undefined = true
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true — var ქმნის window-ის თვისებას
console.log(y === window.y); // false — let არ ქმნის window-ის თვისებას
console.log(z === window.z); // false — const არ ქმნის window-ის თვისებას


///////////////////////////////////////
// The this Keyword in Practice
console.log(this); // Window {...} — გლობალურ scope-ში this = window ობიექტი

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear); // 46
  console.log(this); // undefined — strict mode-ში ჩვეულებრივი ფუნქციის this = undefined
};
calcAge2(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 57
  console.log(this); // Window {...} — arrow ფუნქცია მშობელი scope-ის (გლობალური) this-ს იყენებს
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // {year: 1991, calcAge: ƒ} — this = jonas, რადგან jonas-მა გამოიძახა მეთოდი
    console.log(2037 - this.year); // 46
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this = matilda: {year: 2017, calcAge: ƒ}, 2037-2017 = 20 — this მეძახილ ობიექტზე მიუთითებს

const f = jonas.calcAge;
f(); // this = undefined, TypeError this.year-ზე — ჩვეულებრივი გამოძახება, ობიექტი არ არის


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year); // 46

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self); // jonas2 ობიექტი — self-ით შევინახეთ this
    //   console.log(self.year >= 1981 && self.year <= 1996); // true
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this); // {firstName: 'Jonas', year: 1991, ...} — arrow-მა მშობლის this აიღო (calcAge → jonas2)
      console.log(this.year >= 1981 && this.year <= 1996); // true — 1991 მილენიალის დიაპაზონშია
    };
    isMillenial();
  },

  greet: () => {
    console.log(this); // Window {...} — arrow ფუნქცია მეთოდად, this = გლობალური scope (window)
    console.log(`Hey ${this.firstName}`); // "Hey undefined" — window.firstName არ არსებობს
  },
};
jonas2.greet();
jonas2.calcAge();

// arguments keyword
const addExpr2 = function (a, b) {
  console.log(arguments); // Arguments(2) [2, 5] — ჩვეულებრივ ფუნქციას აქვს arguments ობიექტი
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12); // Arguments(4) [2, 5, 8, 12] — ყველა გადაცემული არგუმენტი ჩანს, 4-იც კი

var addArrow2 = (a, b) => {
  console.log(arguments); // ReferenceError — arrow ფუნქციას arguments არ აქვს
  return a + b;
};
addArrow2(2, 5, 8);


///////////////////////////////////////
// Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1); // Before: {firstName: 'Jessica', lastName: 'Davis', age: 27} — ორიგინალიც შეიცვალა, ერთი ობიექტია მეხსიერებაში
console.log('After:', marriedJessica); // After: {firstName: 'Jessica', lastName: 'Davis', age: 27} — იგივე ობიექტი, იგივე მითითება

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica); // Original: {firstName: 'Jessica', lastName: 'Williams', ..., familiy: ['Alice', 'Bob']} — ორიგინალი უცვლელია, structuredClone ღრმა ასლს ქმნის
console.log('Clone:', jessicaClone); // Clone: {firstName: 'Jessica', lastName: 'Williams', ..., familiy: ['Alice', 'Bob', 'Mary', 'John']} — კლონში დამატებული ელემენტები მხოლოდ კლონშია
