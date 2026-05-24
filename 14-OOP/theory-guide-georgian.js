////////////////////////////////////
// ობიექტზე ორიენტირებული პროგრამირება (OOP) JavaScript-ში
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. რა არის ობიექტზე ორიენტირებული პროგრამირება (OOP)?
   (WHAT IS OBJECT-ORIENTED PROGRAMMING?)
═══════════════════════════════════════════════════════════════

OOP არის პროგრამირების პარადიგმა (კოდის წერის სტილი),
რომელიც "ობიექტების" კონცეფციას ეფუძნება. ობიექტებს ვიყენებთ
რეალური სამყაროს ან აბსტრაქტული ფუნქციონალის მოდელირებისთვის
(მაგ. მომხმარებელი, todo ელემენტი, HTML კომპონენტი და ა.შ.).

ობიექტები შეიძლება შეიცავდეს მონაცემებს (თვისებები) და კოდს (მეთოდები).
ობიექტების გამოყენებით ვაერთიანებთ მონაცემებს და შესაბამის ქცევას
ერთ ბლოკში. ობიექტები დამოუკიდებელი კოდის ნაწილებია,
თითქოს პატარა აპლიკაციები.

ობიექტები აპლიკაციების სამშენებლო ბლოკებია და ერთმანეთთან
ურთიერთობენ. ეს ურთიერთობა ხდება საჯარო ინტერფეისის (API) მეშვეობით:
მეთოდები, რომლებზეც გარე კოდს აქვს წვდომა.

OOP შეიქმნა კოდის ორგანიზების, მოქნილობის და მოვლის გაადვილების
მიზნით ("სპაგეტი კოდის" თავიდან ასაცილებლად).
*/


/*
═══════════════════════════════════════════════════════════════
2. OOP-ის 4 ფუნდამენტური პრინციპი
   (THE 4 FUNDAMENTAL PRINCIPLES OF OOP)
═══════════════════════════════════════════════════════════════

ეს 4 პრინციპი განსაზღვრავს, როგორ ვაპროექტებთ და ვქმნით კლასებს/ობიექტებს:
*/

// 1. აბსტრაქცია (ABSTRACTION)
// დეტალების იგნორირება ან დამალვა, რომლებიც არ არის მნიშვნელოვანი,
// რათა მივიღოთ იმის ზოგადი სურათი, რასაც ვქმნით, იმის ნაცვლად,
// რომ უმნიშვნელო დეტალებში ჩავიძიროთ.
//
// მაგალითი: ტელეფონი. არ გვჭირდება ვიცოდეთ, როგორ უკავშირდება
// ტელეფონი ანძას. უბრალოდ ვიყენებთ "დარეკვის" ღილაკს.
// კომპლექსური დეტალები აბსტრაქტირებულია.

// 2. ენკაფსულაცია (ENCAPSULATION)
// თვისებებისა და მეთოდების პრივატულად შენახვა კლასის შიგნით,
// რათა გარედან არ იყოს ხელმისაწვდომი. ზოგიერთი მეთოდი
// გაცხადებულია საჯარო ინტერფეისად (API).
//
// რატომ? იცავს გარე კოდს შიდა მდგომარეობის შემთხვევითი
// მანიპულაციისგან. საშუალებას გვაძლევს შიდა იმპლემენტაცია
// შევცვალოთ გარე კოდის დაზიანების გარეშე.
//
// მაგალითი:
// - პრივატული: პაროლი, ბალანსი (შიდა მონაცემები)
// - საჯარო: login(), deposit() (ინტერფეისი)

// 3. მემკვიდრეობა (INHERITANCE)
// გარკვეული კლასის ყველა თვისების და მეთოდის ხელმისაწვდომობა
// შვილი კლასისთვის, იერარქიული ურთიერთობის ფორმირებით.
// ეს საშუალებას გვაძლევს ხელახლა გამოვიყენოთ საერთო ლოგიკა
// და მოვახდინოთ რეალური სამყაროს ურთიერთობების მოდელირება.
//
// მაგალითი:
// - მშობელი კლასი: User (login, logout)
// - შვილი კლასი: Admin (deleteUser) — login/logout მემკვიდრეობით იღებს User-დან
//
// შვილი კლასი აფართოებს (extends) მშობელ კლასს.

// 4. პოლიმორფიზმი (POLYMORPHISM)
// შვილ კლასს შეუძლია გადაწეროს (override) მეთოდი, რომელიც
// მშობელი კლასიდან მიიღო მემკვიდრეობით.
// სიტყვა ბერძნულიდან: "poly" = ბევრი, "morph" = ფორმა.
//
// მაგალითი:
// - User-ს აქვს login(), რომელიც ამოწმებს პაროლს
// - Admin-ს აქვს login(), რომელიც ამოწმებს პაროლს + 2FA
// - ორივეს აქვს login(), მაგრამ განსხვავებულად მუშაობს


/*
═══════════════════════════════════════════════════════════════
3. OOP JAVASCRIPT-ში: პროტოტიპული მემკვიდრეობა
   (OOP IN JAVASCRIPT: PROTOTYPAL INHERITANCE)
═══════════════════════════════════════════════════════════════

JavaScript-ის OOP განსხვავებულად მუშაობს "კლასიკური" OOP-ისგან
(Java, C++ და ა.შ.). JS-ში გვაქვს პროტოტიპული მემკვიდრეობა
(ასევე ცნობილი როგორც "დელეგირება").
*/

// "კლასიკურ" OOP-ში:
// კლასი → (ინსტანცირება) → ობიექტი
// კლასი არის ნახაზი (blueprint), ობიექტები კი ამ ნახაზიდან იქმნება.

// JavaScript-ში:
// პროტოტიპი → (დელეგირება) → ობიექტი
// ობიექტები დაკავშირებულია პროტოტიპ ობიექტთან. პროტოტიპი შეიცავს
// მეთოდებსა და თვისებებს, რომლებზეც ყველა დაკავშირებულ ობიექტს
// აქვს წვდომა. ამას ეწოდება პროტოტიპული მემკვიდრეობა / დელეგირება.

// მთავარი განსხვავება:
// - კლასიკური OOP: მეთოდები კოპირდება კლასიდან ინსტანციებში
// - JavaScript: ობიექტები ქცევას ადელეგირებენ პროტოტიპს
//   (მეთოდები არ კოპირდება — ისინი პროტოტიპის ჯაჭვით მოიძებნება)

// პროტოტიპული მემკვიდრეობის 3 გზა JavaScript-ში:
//
// ┌──────────────────────────────────┬────────────────────────────────┐
// │ მეთოდი                          │ შენიშვნა                       │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 1. Constructor ფუნქციები        │ ტრადიციული გზა, JS-ის         │
// │                                 │ დასაწყისიდან გამოიყენება       │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 2. ES6 კლასები                  │ თანამედროვე სინტაქსი.          │
// │                                 │ "სინტაქსური შაქარი"            │
// │                                 │ constructor ფუნქციებზე.       │
// │                                 │ მაინც პროტოტიპებს იყენებს!    │
// ├──────────────────────────────────┼────────────────────────────────┤
// │ 3. Object.create()              │ ყველაზე პირდაპირი გზა          │
// │                                 │ ობიექტის პროტოტიპთან          │
// │                                 │ დასაკავშირებლად.               │
// │                                 │ პრაქტიკაში ნაკლებად გამოიყენება│
// └──────────────────────────────────┴────────────────────────────────┘


/*
═══════════════════════════════════════════════════════════════
4. CONSTRUCTOR ფუნქციები და new ოპერატორი
   (CONSTRUCTOR FUNCTIONS AND THE new OPERATOR)
═══════════════════════════════════════════════════════════════

Constructor ფუნქციები ჩვეულებრივი ფუნქციებია, რომლებსაც
`new` ოპერატორით ვიძახებთ. კონვენციით, constructor ფუნქციის
სახელი იწყება დიდი ასოთი.

Arrow ფუნქციები არ მუშაობს constructor-ად, რადგან საკუთარი
`this` საკვანძო სიტყვა არ აქვთ.
*/

const Person = function (firstName, birthYear) {
  // ინსტანციის თვისებები
  this.firstName = firstName;
  this.birthYear = birthYear;

  // არასდროს შექმნათ მეთოდები constructor ფუნქციის შიგნით!
  // ყოველი ინსტანცია მიიღებს საკუთარ ასლს — საშინლად ცუდია წარმადობისთვის.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }

// რა ხდება კულისებს მიღმა, როცა `new`-ს ვიძახებთ:
//
// ნაბიჯი 1: ახალი ცარიელი ობიექტი {} იქმნება
// ნაბიჯი 2: ფუნქცია გამოიძახება და `this` = ახალი ცარიელი ობიექტი {}
// ნაბიჯი 3: ახალი ობიექტი {} უკავშირდება constructor-ის პროტოტიპს
//           ({}.__proto__ = Person.prototype)
// ნაბიჯი 4: ფუნქცია ავტომატურად აბრუნებს ახალ ობიექტს {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person); // true
console.log({} instanceof Person);    // false

// სტატიკური მეთოდები — ეკუთვნის constructor-ს, არა ინსტანციებს
Person.hey = function () {
  console.log('Hey there!');
  console.log(this); // Person constructor ფუნქცია
};
Person.hey();      // მუშაობს
// jonas.hey();    // TypeError! ინსტანციებს არ მემკვიდრეობს


/*
═══════════════════════════════════════════════════════════════
5. პროტოტიპები (PROTOTYPES)
═══════════════════════════════════════════════════════════════

JavaScript-ში ყველა ფუნქციას აქვს თვისება სახელად `prototype`.
Constructor ფუნქციით შექმნილ ობიექტებს აქვთ წვდომა ყველა
მეთოდსა და თვისებაზე, რომლებიც constructor-ის prototype-ზეა
განსაზღვრული.
*/

// მეთოდის დამატება პროტოტიპზე
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// ახლა ყველა ინსტანციას შეუძლია calcAge-ის გამოყენება
jonas.calcAge();   // 46
matilda.calcAge(); // 20

// მეთოდი არ არის თავად ობიექტზე — ის პროტოტიპზეა
console.log(jonas);
// Person { firstName: 'Jonas', birthYear: 1991 }
// calcAge აქ არ არის! მაგრამ მაინც შეგვიძლია გამოძახება პროტოტიპის ჯაჭვის წყალობით.

// ყველა ობიექტს აქვს სპეციალური __proto__ თვისება, რომელიც მის პროტოტიპზე მიუთითებს
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true!

// მნიშვნელოვანი: Person.prototype არ არის Person-ის პროტოტიპი.
// ის არის პროტოტიპი, რომელიც გამოიყენება Person-ით შექმნილი ობიექტებისთვის.
// უკეთესი სახელი იქნებოდა: Person.prototypeOfLinkedObjects

console.log(Person.prototype.isPrototypeOf(jonas));  // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person));  // false!

// თვისების დამატება პროტოტიპზე
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

// hasOwnProperty — ამოწმებს, თვისება პირდაპირ ობიექტზეა თუ მემკვიდრეობითია
console.log(jonas.hasOwnProperty('firstName')); // true (საკუთარი თვისება)
console.log(jonas.hasOwnProperty('species'));    // false (პროტოტიპიდან მემკვიდრეობით)


/*
═══════════════════════════════════════════════════════════════
6. პროტოტიპული მემკვიდრეობა და პროტოტიპის ჯაჭვი
   (PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN)
═══════════════════════════════════════════════════════════════

როცა ობიექტზე თვისებას ან მეთოდს ვეძებთ, JavaScript ჯერ
ეძებს თავად ობიექტზე. თუ ვერ იპოვის, ეძებს პროტოტიპის ჯაჭვში —
პროტოტიპზე, შემდეგ პროტოტიპის პროტოტიპზე და ა.შ.,
სანამ null-ს არ მიაღწევს.
*/

// jonas-ის პროტოტიპის ჯაჭვი:
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
// │   __proto__: null ← დასასრული│
// └──────────────────────────────┘

// როცა jonas.calcAge()-ს ვიძახებთ:
// 1. JS ეძებს calcAge-ს jonas-ზე → ვერ იპოვა
// 2. JS ეძებს jonas.__proto__-ზე (Person.prototype) → იპოვა! ასრულებს.

// როცა jonas.hasOwnProperty('firstName')-ს ვიძახებთ:
// 1. JS ეძებს hasOwnProperty-ს jonas-ზე → ვერ იპოვა
// 2. JS ეძებს Person.prototype-ზე → ვერ იპოვა
// 3. JS ეძებს Object.prototype-ზე → იპოვა! ასრულებს.

console.log(jonas.__proto__);                    // Person.prototype
console.log(jonas.__proto__.__proto__);           // Object.prototype
console.log(jonas.__proto__.__proto__.__proto__);  // null (ჯაჭვის დასასრული)


/*
═══════════════════════════════════════════════════════════════
7. პროტოტიპის ჯაჭვი ჩაშენებულ ობიექტებზე
   (PROTOTYPE CHAIN ON BUILT-IN OBJECTS)
═══════════════════════════════════════════════════════════════

სწორედ ამის გამო აქვს JavaScript-ში ყველა მონაცემთა ტიპს მეთოდები!
მასივები, სტრინგები, რიცხვები — ყველა მემკვიდრეობით იღებს მეთოდებს
შესაბამისი პროტოტიპებიდან, პროტოტიპის ჯაჭვის მეშვეობით.
*/

// მასივები (ARRAYS)
const arr = [3, 6, 6, 5, 6, 9, 9]; // იგივეა რაც: new Array(3, 6, ...)

console.log(arr.__proto__);                 // Array.prototype
console.log(arr.__proto__ === Array.prototype); // true

// Array.prototype შეიცავს: push, pop, map, filter, reduce და ა.შ.
// სწორედ ამიტომ შეგვიძლია arr.map(), arr.filter() და ა.შ. გამოძახება!

console.log(arr.__proto__.__proto__);       // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null

// მასივების პროტოტიპის ჯაჭვი:
// arr → Array.prototype → Object.prototype → null

// შეგვიძლია Array.prototype-ზე მეთოდების დამატებაც (მაგრამ ნუ გააკეთებთ პრაქტიკაში!)
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique()); // [3, 6, 5, 9]

// სტრინგები (STRINGS) — ავტობოქსინგი
// როცა სტრინგ პრიმიტივზე მეთოდს ვიძახებთ, JavaScript დროებით
// ახვევს მას String ობიექტში (boxing), იძახებს მეთოდს, შემდეგ ახსნის.
const str = 'hello';
console.log(str.toUpperCase()); // 'HELLO'
// კულისებს მიღმა: new String('hello').toUpperCase()
// String.prototype შეიცავს: toUpperCase, slice, split და ა.შ.

// რიცხვები (NUMBERS) — ავტობოქსინგი
const num = 23;
console.log(num.toFixed(2)); // '23.00'
// კულისებს მიღმა: new Number(23).toFixed(2)
// Number.prototype შეიცავს: toFixed, toString და ა.შ.

// ფუნქციები (FUNCTIONS)
console.dir(x => x + 1);
// ფუნქციებსაც აქვთ პროტოტიპი: Function.prototype
// შეიცავს: call, apply, bind და ა.შ.

// სრული სურათი:
// ┌────────────────────────────────────────────────────────────┐
// │  ყველაფერი JS-ში მემკვიდრეობით იღებს Object.prototype-დან │
// │                                                            │
// │  Array  →  Array.prototype  →  Object.prototype  →  null   │
// │  String →  String.prototype →  Object.prototype  →  null   │
// │  Number →  Number.prototype →  Object.prototype  →  null   │
// │  Person →  Person.prototype →  Object.prototype  →  null   │
// └────────────────────────────────────────────────────────────┘


/*
═══════════════════════════════════════════════════════════════
8. ES6 კლასები (ES6 CLASSES)
═══════════════════════════════════════════════════════════════

ES6 კლასები არის "სინტაქსური შაქარი" constructor ფუნქციებზე.
კულისებს მიღმა ზუსტად იგივეს აკეთებენ, მაგრამ უფრო ლამაზი,
თანამედროვე სინტაქსით.

მნიშვნელოვანი კლასების შესახებ:
1. კლასები არ ჰოისტდება (class declarations-ც კი)
2. კლასები პირველი კლასის მოქალაქეებია (შეიძლება გადაცემა/დაბრუნება ფუნქციებიდან)
3. კლასები ყოველთვის strict mode-ში სრულდება
*/

// კლასის დეკლარაცია (რეკომენდებული)
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // აქ დაწერილი მეთოდები ემატება PersonCl.prototype-ს
  // არა თავად ინსტანციებს
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

// დამტკიცება, რომ კულისებს მიღმა პროტოტიპებს იყენებს:
console.log(jessica.__proto__ === PersonCl.prototype); // true

// კლასის გამოსახულება (ასევე ვალიდურია, ნაკლებად გავრცელებული)
// const PersonCl2 = class { ... };


/*
═══════════════════════════════════════════════════════════════
9. GETTERS და SETTERS
═══════════════════════════════════════════════════════════════

აქსესორ თვისებები — ჰგავს ჩვეულებრივ თვისებებს, მაგრამ
სინამდვილეში ფუნქციებია, რომლებიც მნიშვნელობის წაკითხვისას
ან მინიჭებისას სრულდება.
ყველა ობიექტს შეიძლება ჰქონდეს getter და setter თვისებები.
*/

// ჩვეულებრივ ობიექტში:
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

console.log(account.latest);     // 300 (გამოიყენება როგორც თვისება, არა მეთოდის გამოძახება!)
account.latest = 50;             // იწვევს setter-ს
console.log(account.movements);  // [200, 530, 120, 300, 50]

// კლასში:
class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // ეს იწვევს setter-ს!
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // სასარგებლოა ვალიდაციისთვის
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jess = new PersonCl2('Jessica Davis', 1996);
console.log(jess.age);       // 41 (getter — წვდომა როგორც თვისება)
console.log(jess.fullName);  // 'Jessica Davis' (getter)

// შენიშვნა: როცა setter-ს იგივე სახელი აქვს, რაც constructor-ის თვისებას,
// ვიყენებთ _propertyName კონვენციას უსასრულო რეკურსიის თავიდან ასაცილებლად.
// setter აყენებს this._fullName-ს, getter კი აბრუნებს this._fullName-ს.


/*
═══════════════════════════════════════════════════════════════
10. სტატიკური მეთოდები (STATIC METHODS)
═══════════════════════════════════════════════════════════════

სტატიკური მეთოდები მიმაგრებულია თავად constructor-ზე/კლასზე,
არა პროტოტიპზე. ამიტომ ინსტანციებს არ აქვთ მათზე წვდომა.
ხშირად გამოიყენება დამხმარე/უტილიტ ფუნქციებად.
*/

// ჩაშენებული მაგალითები:
// Array.from() — სტატიკური მეთოდი Array constructor-ზე
// Number.parseFloat() — სტატიკური მეთოდი Number constructor-ზე
// ინსტანციებზე არ არის ხელმისაწვდომი:
// [1,2,3].from() — TypeError!
// (23).parseFloat() — TypeError!

// Constructor ფუნქციებში:
Person.hey = function () {
  console.log('Hey there!');
};
Person.hey();    // მუშაობს
// jonas.hey();  // TypeError! პროტოტიპზე არ არის

// კლასებში:
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

ყველაზე პირდაპირი გზა ობიექტის პროტოტიპის დასაყენებლად.
არც constructor ფუნქცია, არც `new` ოპერატორი, არც `.prototype` თვისება.
ხელით ვაყენებთ ობიექტის პროტოტიპს ნებისმიერ სხვა ობიექტად.
*/

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // ეს constructor არ არის! ჩვეულებრივი მეთოდი ინიციალიზაციისთვის
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// ახალი ობიექტის შექმნა PersonProto-თი როგორც პროტოტიპით
const steven = Object.create(PersonProto);
console.log(steven); // {} (ცარიელი ობიექტი, მაგრამ დაკავშირებული PersonProto-სთან)

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // 35 (ნაპოვნია პროტოტიპზე დელეგირებით)

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979); // init მეთოდის გამოყენება უფრო სუფთა ინიციალიზაციისთვის
sarah.calcAge(); // 58

// პროტოტიპის ჯაჭვი:
// steven → PersonProto → Object.prototype → null
//
// ┌────────────────┐      ┌────────────────┐      ┌──────────────────┐
// │  steven         │      │  PersonProto    │      │ Object.prototype │
// │  name: 'Steven'│─────▶│  calcAge()     │─────▶│  toString()      │──▶ null
// │  birthYear: 2002│      │  init()        │      │  hasOwnProperty()│
// └────────────────┘      └────────────────┘      └──────────────────┘


/*
═══════════════════════════════════════════════════════════════
12. მემკვიდრეობა "კლასებს" შორის: CONSTRUCTOR ფუნქციები
    (INHERITANCE BETWEEN "CLASSES": CONSTRUCTOR FUNCTIONS)
═══════════════════════════════════════════════════════════════

შვილი constructor ფუნქცია მშობლისგან შეიძლება მემკვიდრეობით
მიიღოს პროტოტიპების დაკავშირებით. ეს საერთო ფუნქციონალის
ხელახლა გამოყენების საშუალებას გვაძლევს.
*/

// მშობელი
const Person3 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// შვილი
const Student = function (firstName, birthYear, course) {
  // მშობელი constructor-ის გამოძახება სწორი `this`-ით
  // .call(this, ...)-ის გარეშე, Person3-ში `this` undefined იქნებოდა
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

// მნიშვნელოვანი: პროტოტიპების დაკავშირება Student.prototype-ზე მეთოდების დამატებამდე
// Student.prototype = Person3.prototype; // არასწორი! ერთსა და იმავე ობიექტს გახდიდა
Student.prototype = Object.create(Person3.prototype);

// Student-ისთვის სპეციფიკური მეთოდების დამატება
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge();   // 17 (მემკვიდრეობით Person3.prototype-დან!)

console.log(mike instanceof Student); // true
console.log(mike instanceof Person3); // true
console.log(mike instanceof Object);  // true

// constructor თვისების გასწორება (Object.create-ის შემდეგ Person3-ზე მიუთითებს)
Student.prototype.constructor = Student;

// პროტოტიპის ჯაჭვი:
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
13. მემკვიდრეობა "კლასებს" შორის: ES6 კლასები
    (INHERITANCE BETWEEN "CLASSES": ES6 CLASSES)
═══════════════════════════════════════════════════════════════

გაცილებით მარტივი სინტაქსი! ვიყენებთ `extends` და `super` საკვანძო სიტყვებს.
კულისებს მიღმა ზუსტად იგივეს აკეთებს, რაც მე-12 სექცია.
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
    // super() იძახებს მშობლის constructor-ს
    // აუცილებლად პირველი უნდა იყოს `this`-ის გამოყენებამდე!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // პოლიმორფიზმი: მშობლის calcAge მეთოდის გადაწერა
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
martha.greet();     // Hey Martha Jones (მემკვიდრეობით PersonCl3-დან!)

// შენიშვნა: თუ შვილ კლასს ახალი თვისებები არ სჭირდება,
// constructor-ის გამოტოვება შეიძლება — super() ავტომატურად გამოიძახება:
// class StudentCl extends PersonCl3 {
//   introduce() { ... }
// }


/*
═══════════════════════════════════════════════════════════════
14. მემკვიდრეობა "კლასებს" შორის: Object.create()
    (INHERITANCE BETWEEN "CLASSES": Object.create())
═══════════════════════════════════════════════════════════════

Object.create()-ის გამოყენება პროტოტიპების ჯაჭვის შესაქმნელად.
ეს არის პროტოტიპული მემკვიდრეობის ყველაზე "წმინდა" ფორმა.
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

// StudentProto მემკვიდრეობით იღებს PersonProto2-დან
const StudentProto = Object.create(PersonProto2);

StudentProto.init = function (firstName, birthYear, course) {
  // მშობლის init-ის გამოძახება
  PersonProto2.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// jay მემკვიდრეობით იღებს StudentProto-დან, რომელიც მემკვიდრეობით იღებს PersonProto2-დან
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce(); // My name is Jay and I study Computer Science
jay.calcAge();   // 27 (ნაპოვნია PersonProto2-ზე ჯაჭვით)

// პროტოტიპის ჯაჭვი:
// jay → StudentProto → PersonProto2 → Object.prototype → null


/*
═══════════════════════════════════════════════════════════════
15. ენკაფსულაცია: დაცული თვისებები და მეთოდები
    (ENCAPSULATION: PROTECTED PROPERTIES AND METHODS)
═══════════════════════════════════════════════════════════════

ენკაფსულაცია ნიშნავს ზოგიერთი თვისების და მეთოდის პრივატულად
შენახვას კლასის შიგნით, გარე კოდის შიდა მდგომარეობის
შემთხვევითი მანიპულაციის თავიდან ასაცილებლად.

JavaScript-ს ნამდვილი პრივატულობა ბოლო დრომდე არ ჰქონდა.
კონვენცია იყო "დაცული" თვისებების პრეფიქსად ქვედა ტირის (_) გამოყენება.
*/

// კონვენცია: _ პრეფიქსი ნიშნავს "გარედან ნუ შეეხებით"
class Account1 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;             // "დაცული" კონვენციით
    this._movements = [];        // "დაცული" კონვენციით

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // საჯარო ინტერფეისი (API) movements-ზე წვდომისთვის
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val); // შიგნით deposit-ს იყენებს
  }

  _approveLoan(val) {  // "დაცული" დამხმარე მეთოდი
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

// ეს ჯერ კიდევ მუშაობს — _ მხოლოდ კონვენციაა, არა იძულება:
// acc1._movements.push(999);  // ⚠️ ჯერ კიდევ ხელმისაწვდომია, მაგრამ არ გააკეთოთ!
// console.log(acc1._pin);     // ⚠️ ჯერ კიდევ ხელმისაწვდომია, მაგრამ არ გააკეთოთ!


/*
═══════════════════════════════════════════════════════════════
16. ენკაფსულაცია: პრივატული კლასის ველები და მეთოდები
    (ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS)
═══════════════════════════════════════════════════════════════

ES2022-მა შემოიღო ნამდვილი პრივატული კლასის ველები და მეთოდები
# სინტაქსის გამოყენებით. პრივატული ველები ნამდვილად
მიუწვდომელია კლასის გარედან.

არსებობს ველების/მეთოდების 4 სახეობა:
1. საჯარო ველები
2. პრივატული ველები (#)
3. საჯარო მეთოდები
4. პრივატული მეთოდები (#)

(ყოველ მათგანს აქვს სტატიკური ვერსიაც)
*/

class Account {
  // 1) საჯარო ველები — ყოველ ინსტანციაზე, არა პროტოტიპზე
  locale = navigator.language;

  // 2) პრივატული ველები — ნამდვილად პრივატული, გარედან მიუწვდომელი
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) საჯარო მეთოდები — საჯარო ინტერფეისი (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // ჯაჭვის (chaining) გამოყენებისთვის
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

  // 4) პრივატული მეთოდები — ნამდვილად პრივატული
  #approveLoan(val) {
    return true;
  }

  // სტატიკური მეთოდი (საჯარო)
  static helper() {
    console.log('Helper');
  }
}

const acc = new Account('Jonas', 'EUR', 1111);

acc.deposit(250);
acc.withdraw(140);
acc.requestLoan(1000);
console.log(acc.getMovements()); // [250, -140, 1000]

// ეს SyntaxError-ს გამოაგდებს:
// console.log(acc.#movements);     // SyntaxError! ნამდვილად პრივატული
// console.log(acc.#pin);           // SyntaxError! ნამდვილად პრივატული
// acc.#approveLoan(100);           // SyntaxError! ნამდვილად პრივატული

console.log(acc);
// # ველები ობიექტზე არსებობს, მაგრამ გარედან მათზე წვდომა შეუძლებელია


/*
═══════════════════════════════════════════════════════════════
17. მეთოდების ჯაჭვი (CHAINING METHODS)
═══════════════════════════════════════════════════════════════

შეგვიძლია მეთოდების ჯაჭვური გამოძახება (როგორც arr.filter().map().reduce())
ყოველი მეთოდიდან `this`-ის დაბრუნებით. ეს მუშაობს, რადგან
`this`-ის დაბრუნება თავად ობიექტს გვაძლევს უკან, ამიტომ
შეგვიძლია მაშინვე სხვა მეთოდი გამოვიძახოთ.
*/

// Account კლასის გამოყენებით მე-16 სექციიდან (რომელიც `this`-ს აბრუნებს):
acc
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);

console.log(acc.getMovements());
// [250, -140, 1000, 300, 500, -35, 25000, -4000]

// როგორ მუშაობს:
// acc.deposit(300) აბრუნებს acc → acc.deposit(500) აბრუნებს acc → ...
// ყოველი მეთოდის გამოძახება ცვლის ობიექტს და აბრუნებს მას შემდეგი გამოძახებისთვის.

// საკუთარ კლასებში chaining-ის ჩასართავად, უბრალოდ დაამატეთ `return this;`
// ყოველი მეთოდის ბოლოს, რომელიც ჯაჭვით უნდა იძახებოდეს.


/*
═══════════════════════════════════════════════════════════════
შეჯამება — ძირითადი საკითხები (SUMMARY — KEY TAKEAWAYS)
═══════════════════════════════════════════════════════════════

OOP-ის პრინციპები:
- აბსტრაქცია: კომპლექსურობის დამალვა, მარტივი ინტერფეისის გამოვლენა
- ენკაფსულაცია: შიდა ნაწილის პრივატულად შენახვა, საჯარო API-ის გამოვლენა
- მემკვიდრეობა: შვილი კლასები აფართოებენ მშობელ კლასებს
- პოლიმორფიზმი: შვილს შეუძლია მშობლის მეთოდების გადაწერა

პროტოტიპული მემკვიდრეობა:
- ობიექტები ქცევას ადელეგირებენ პროტოტიპს (არ კოპირდება!)
- პროტოტიპის ჯაჭვი: ობიექტი → პროტოტიპი → პროტოტიპი → ... → null
- სწორედ ამიტომ აქვს მასივებს .push(), სტრინგებს .toUpperCase() და ა.შ.
- ყველა ჯაჭვი მთავრდება Object.prototype → null

"კლასების" შექმნის 3 გზა:
- Constructor ფუნქციები + new: ტრადიციული, პროტოტიპი ექსპლიციტურია
- ES6 კლასები: თანამედროვე სინტაქსი, "სინტაქსური შაქარი" constructor-ებზე
- Object.create(): ხელით პროტოტიპის დაკავშირება, ნაკლებად გავრცელებული

ES6 კლასები:
- constructor() ინიციალიზაციისთვის
- მეთოდები ავტომატურად პროტოტიპზე ემატება
- extends + super მემკვიდრეობისთვის
- არ ჰოისტდება, ყოველთვის strict mode-ში, პირველი კლასის მოქალაქეები

ენკაფსულაცია:
- კონვენცია: _property (დაცული სახელდების კონვენციით)
- ES2022: #property (ნამდვილად პრივატული, JS ძრავის მიერ აღსრულებული)

სასარგებლო პატერნები:
- სტატიკური მეთოდები: უტილიტ ფუნქციები თავად კლასზე (არა ინსტანციებზე)
- Getters/Setters: აქსესორ თვისებები ვალიდაციისთვის
- მეთოდების ჯაჭვი: return this მეთოდებიდან
- პოლიმორფიზმი: მშობლის მეთოდების გადაწერა შვილ კლასში
*/
