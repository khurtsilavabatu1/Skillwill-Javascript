////////////////////////////////////
// JavaScript ფუნდამენტური საფუძვლები - ნაწილი 2
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. მკაცრი რეჟიმი (STRICT MODE)
═══════════════════════════════════════════════════════════════

მკაცრი რეჟიმი არის სპეციალური რეჟიმი, რომლის გააქტიურებაც
შეგვიძლია JavaScript-ში. ის აადვილებს უსაფრთხო კოდის წერას:
- კრძალავს გარკვეულ მოქმედებებს, რომლებიც სხვა შემთხვევაში "ჩუმია"
- აჩვენებს ხილულ შეცდომებს გავრცელებული კოდირების შეცდომებისთვის
- ინახავს გარკვეულ საკვანძო სიტყვებს მომავალი JavaScript ფუნქციებისთვის

ყოველთვის ჩასვით 'use strict'; თქვენი სკრიპტის ფაილის თავში.
*/

'use strict';

// მაგალითი 1: იჭერს არასწორად დაწერილ ცვლადის სახელებს
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // მკაცრი რეჟიმის გარეშე, შეცდომა როგორიცაა
// hasDriverLicense = true; ჩუმად შექმნიდა ახალ ცვლადს
// მკაცრი რეჟიმში კი გამოაგდებს ReferenceError-ს

if (hasDriversLicense) console.log("I can drive :D");

// მაგალითი 2: დარეზერვირებული საკვანძო სიტყვები
// const interface = "Audio";  // შეცდომა მკაცრ რეჟიმში! დარეზერვირებულია მომავალი გამოყენებისთვის
// const private = 534;        // შეცდომა მკაცრ რეჟიმში! დარეზერვირებულია მომავალი გამოყენებისთვის
// const if = 23;              // შეცდომა! უკვე არსებული საკვანძო სიტყვაა

// რატომ ვიყენებთ მკაცრ რეჟიმს?
// - იჭერს გავრცელებულ ბაგებს, რომლებიც სხვა შემთხვევაში ჩუმი იქნებოდა
// - ხელს უშლის გლობალური ცვლადების შემთხვევით შექმნას
// - გეხმარება უფრო სუფთა, პროგნოზირებადი კოდის დაწერაში
// - ყოველთვის გამოიყენე!


/*
═══════════════════════════════════════════════════════════════
2. ფუნქციები (FUNCTIONS)
═══════════════════════════════════════════════════════════════

ფუნქცია არის კოდის მრავალჯერადად გამოყენებადი ნაწილი.
წარმოიდგინეთ როგორც მანქანა: აძლევთ შეყვანას (არგუმენტებს),
ის ამუშავებს მონაცემებს და შეუძლია დააბრუნოს გამოსავალი
(დაბრუნებული მნიშვნელობა).
*/

// მარტივი ფუნქცია - პარამეტრების და დაბრუნების გარეშე
function logger() {
  console.log("My name is Jonas");
}

// ფუნქციის გამოძახება / გაშვება / ინვოკაცია
logger(); // "My name is Jonas"
logger(); // "My name is Jonas"
logger(); // "My name is Jonas"

// ფუნქცია პარამეტრებით და დასაბრუნებელი მნიშვნელობით
function fruitProcessor(apples, oranges) {
  // apples და oranges არის პარამეტრები (ადგილმჭერები)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // შედეგის დაბრუნება იქ, საიდანაც ფუნქცია გამოიძახეს
}

// 5 და 0 არის არგუმენტები (რეალური მნიშვნელობები გადაცემული პარამეტრებისთვის)
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // "Juice with 5 apples and 0 oranges."

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // "Juice with 2 apples and 4 oranges."

// ძირითადი კონცეფციები:
// პარამეტრები = ადგილმჭერები ფუნქციის განსაზღვრებაში (apples, oranges)
// არგუმენტები = რეალური მნიშვნელობები ფუნქციის გამოძახებისას (5, 0)
// RETURN = აბრუნებს მნიშვნელობას და გამოდის ფუნქციიდან
// return-ის გარეშე, ფუნქცია აბრუნებს undefined

// ჩაშენებული ფუნქციებიც ასევე მუშაობს
const num = Number("23"); // Number() არის ჩაშენებული ფუნქცია


/*
═══════════════════════════════════════════════════════════════
3. ფუნქციის დეკლარაცია vs გამოსახულება (DECLARATIONS VS EXPRESSIONS)
═══════════════════════════════════════════════════════════════

ფუნქციების დაწერის ორი განსხვავებული გზა, ერთი მთავარი
განსხვავებით: ფუნქციის დეკლარაციის გამოძახება შესაძლებელია
მათ განსაზღვრამდე კოდში (hoisting). ფუნქციის გამოსახულება ვერ.
*/

// ფუნქციის დეკლარაცია - იყენებს function საკვანძო სიტყვას სახელით
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1); // 46

// ფუნქციის გამოსახულება - ფუნქცია შენახულია ცვლადში
// თავად ფუნქციას სახელი არ აქვს (ანონიმური ფუნქცია)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2); // 46

// მთავარი განსხვავება: Hoisting (აწევა)
// დეკლარაციის გამოძახება შესაძლებელია კოდში მათ გამოჩენამდე:

// greet("Jonas"); // ეს იმუშავებს! (hoisting)
// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// მაგრამ გამოსახულებების გამოძახება ვერ მოხდება მათ განსაზღვრამდე:
// sayHello("Jonas"); // შეცდომა! ვერ მიწვდება ინიციალიზაციამდე
// const sayHello = function(name) {
//   console.log(`Hello, ${name}!`);
// };

// ორივე ერთნაირ შედეგს იძლევა - ეს პირადი პრეფერენციის საკითხია
console.log(age1, age2); // 46 46


/*
═══════════════════════════════════════════════════════════════
4. ისრიანი ფუნქციები (ARROW FUNCTIONS)
═══════════════════════════════════════════════════════════════

ისრიანი ფუნქციები არის ფუნქციის გამოსახულებების მოკლე
სინტაქსი, შემოღებული ES6-ში. შესანიშნავია მარტივი ერთხაზიანი
ფუნქციებისთვის.
*/

// ერთხაზიანი: ფიგურული ფრჩხილები არ არის საჭირო, return იმპლიციტურია
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46

// სამივე ფორმის შედარება:
// დეკლარაცია:    function calcAge(birthYear) { return 2037 - birthYear; }
// გამოსახულება:  const calcAge = function(birthYear) { return 2037 - birthYear; };
// ისრიანი:       const calcAge = birthYear => 2037 - birthYear;

// მრავალი პარამეტრი: პარამეტრების ირგვლივ ფრჩხილები საჭიროა
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
// "Jonas retires in 19 years"
console.log(yearsUntilRetirement(1980, "Bob"));
// "Bob retires in -8 years"

// ისრიანი ფუნქციის წესები:
// - ერთი პარამეტრი: ფრჩხილები არჩევითია      birthYear => ...
// - პარამეტრების გარეშე: ცარიელი ფრჩხილები    () => ...
// - მრავალი პარამეტრი: ფრჩხილები საჭიროა      (a, b) => ...
// - ერთხაზიანი ტანი: {} ან return არ არის საჭირო  x => x * 2
// - მრავალხაზიანი ტანი: {} და return საჭიროა      (x) => { ... return ...; }

// მნიშვნელოვანი: ისრიან ფუნქციებს არ აქვთ საკუთარი 'this' საკვანძო სიტყვა
// (ეს მნიშვნელოვანი იქნება მოგვიანებით, როცა ობიექტებს და მეთოდებს ვისწავლით)


/*
═══════════════════════════════════════════════════════════════
5. ფუნქციები, რომლებიც სხვა ფუნქციებს იძახებენ
   (FUNCTIONS CALLING OTHER FUNCTIONS)
═══════════════════════════════════════════════════════════════

ფუნქციებს შეუძლიათ სხვა ფუნქციების გამოძახება თავიანთ ტანში.
ეს ძალიან გავრცელებულია და ეხმარება კოდის მოდულურობასა და
მრავალჯერადად გამოყენებას.
*/

// დამხმარე ფუნქცია, რომელიც ხილს ნაჭრებად ჭრის
function cutFruitPieces(fruit) {
  return fruit * 4; // თითოეული ხილი 4 ნაჭრად იჭრება
}

// მთავარი ფუნქცია, რომელიც იყენებს დამხმარე ფუნქციას
function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);   // დამხმარეს გამოძახება
  const orangePieces = cutFruitPieces(oranges);  // დამხმარეს გამოძახება

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor2(2, 3));
// "Juice with 8 pieces of apple and 12 pieces of orange."

// მონაცემთა ნაკადი:
// 1. fruitProcessor2(2, 3) გამოიძახება
// 2. შიგნით, cutFruitPieces(2) გამოიძახება -> აბრუნებს 8-ს
// 3. შემდეგ cutFruitPieces(3) გამოიძახება -> აბრუნებს 12-ს
// 4. fruitProcessor2 აშენებს სტრინგს და აბრუნებს მას

// კიდევ ერთი მაგალითი
function convertCtoF(celsius) {
  return celsius * 9 / 5 + 32;
}

function printTemperature(celsius) {
  const fahrenheit = convertCtoF(celsius); // სხვა ფუნქციის გამოძახება
  console.log(`${celsius}C is ${fahrenheit}F`);
}

printTemperature(0);   // "0C is 32F"
printTemperature(100); // "100C is 212F"


/*
═══════════════════════════════════════════════════════════════
6. ფუნქციების მიმოხილვა (REVIEWING FUNCTIONS)
═══════════════════════════════════════════════════════════════

გადავხედოთ ყველა კონცეფციას უფრო სრული მაგალითის
საშუალებით, მრავალი დაბრუნების წერტილით და ფუნქციის
გამოძახებებით.
*/

// ფუნქციის ანატომია
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear); // სხვა ფუნქციის გამოძახება
  const retirement = 65 - age;

  // მრავალი დაბრუნების წერტილი if/else-ით
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement; // ფუნქცია აქ გამოდის თუ retirement > 0
  } else {
    console.log(`${firstName} has already retired`);
    return -1; // ფუნქცია აქ გამოდის სხვა შემთხვევაში
  }
};

console.log(yearsUntilRetirement2(1991, "Jonas")); // 19
console.log(yearsUntilRetirement2(1950, "Mike"));  // -1

// ფუნქციის ანატომიის შეჯამება:
//
// function functionName(parameter1, parameter2) {  <-- ფუნქციის სახელი და პარამეტრები
//   // ფუნქციის ტანი - კოდი რომელიც შესრულდება     <-- ტანი
//   const result = parameter1 + parameter2;
//   return result;                                   <-- დასაბრუნებელი მნიშვნელობა
// }
//
// const output = functionName(arg1, arg2);           <-- გამოძახება არგუმენტებით

// ფუნქციის სამი ტიპი:
// 1. ფუნქციის დეკლარაცია: function name(params) { ... }
//    - შეიძლება გამოიძახო დეკლარაციამდე (hoisted)
//
// 2. ფუნქციის გამოსახულება: const name = function(params) { ... };
//    - ინახება ცვლადში, არ არის hoisted
//
// 3. ისრიანი ფუნქცია: const name = (params) => { ... };
//    - მოკლე სინტაქსი, არ აქვს საკუთარი 'this' საკვანძო სიტყვა


/*
═══════════════════════════════════════════════════════════════
7. მასივების შესავალი (INTRODUCTION TO ARRAYS)
═══════════════════════════════════════════════════════════════

მასივები არის მონაცემთა სტრუქტურები, რომლებიც საშუალებას
გვაძლევს შევინახოთ მრავალი მნიშვნელობა ერთ ცვლადში.
ელემენტები დალაგებულია და მათზე წვდომა ხდება ინდექსით
(იწყება 0-დან).
*/

// მასივების გარეშე - არეულობა!
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// მასივით - ბევრად უკეთესი!
// მეთოდი 1: მასივის ლიტერალი (ყველაზე გავრცელებული)
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ["Michael", "Steven", "Peter"]

// მეთოდი 2: new Array() კონსტრუქტორის გამოყენება
const years = new Array(1991, 1984, 2008, 2020);

// ელემენტებზე წვდომა ინდექსით (0-დან იწყება!)
console.log(friends[0]); // "Michael" (პირველი ელემენტი)
console.log(friends[1]); // "Steven"  (მეორე ელემენტი)
console.log(friends[2]); // "Peter"   (მესამე ელემენტი)

// .length თვისება - ელემენტების რაოდენობა
console.log(friends.length); // 3

// ბოლო ელემენტის მიღება
console.log(friends[friends.length - 1]); // "Peter"

// მასივების მუტაცია (const-ითაც კი!)
friends[2] = "Jay"; // მესამე ელემენტის ჩანაცვლება
console.log(friends); // ["Michael", "Steven", "Jay"]

// რატომ შეგვიძლია const მასივის მუტაცია?
// იმიტომ რომ const მხოლოდ ხელს უშლის მთელი ცვლადის ხელახლა მინიჭებას,
// არა მისი შიგთავსის შეცვლას. მასივები არის ობიექტები (reference ტიპები).
// friends = ["Bob", "Alice"]; // შეცდომა! const-ის ხელახლა მინიჭება ვერ ხდება

// მასივებს შეუძლიათ შეიცავდნენ შერეული ტიპები
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
// ["Jonas", "Schmedtmann", 46, "teacher", ["Michael", "Steven", "Jay"]]

// ფუნქციების გამოყენება მასივებთან
const calcAgeArr = function (birthYear) {
  return 2037 - birthYear;
};

const birthYears = [1990, 1967, 2002, 2010, 2018];

const ageFirst = calcAgeArr(birthYears[0]);           // 47
const ageSecond = calcAgeArr(birthYears[1]);           // 70
const ageLast = calcAgeArr(birthYears[birthYears.length - 1]); // 19

const ages = [
  calcAgeArr(birthYears[0]),
  calcAgeArr(birthYears[1]),
  calcAgeArr(birthYears[birthYears.length - 1]),
];
console.log(ages); // [47, 70, 19]


/*
═══════════════════════════════════════════════════════════════
8. მასივის ძირითადი ოპერაციები - მეთოდები
   (BASIC ARRAY OPERATIONS - METHODS)
═══════════════════════════════════════════════════════════════

მეთოდები არის ჩაშენებული ფუნქციები, რომლებიც შეგვიძლია
მასივებზე გამოვიძახოთ მათი შიგთავსის მანიპულირებისთვის.
*/

const myFriends = ["Michael", "Steven", "Peter"];

// ---- ელემენტების დამატება ----

// push() - ამატებს ელემენტს ბოლოში, აბრუნებს ახალ სიგრძეს
const newLength = myFriends.push("Jay");
console.log(myFriends);   // ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength);   // 4

// unshift() - ამატებს ელემენტს დასაწყისში, აბრუნებს ახალ სიგრძეს
myFriends.unshift("John");
console.log(myFriends);   // ["John", "Michael", "Steven", "Peter", "Jay"]

// ---- ელემენტების წაშლა ----

// pop() - შლის ბოლო ელემენტს, აბრუნებს წაშლილ ელემენტს
const removedLast = myFriends.pop();
console.log(removedLast);  // "Jay"
console.log(myFriends);    // ["John", "Michael", "Steven", "Peter"]

// shift() - შლის პირველ ელემენტს, აბრუნებს წაშლილ ელემენტს
const removedFirst = myFriends.shift();
console.log(removedFirst); // "John"
console.log(myFriends);    // ["Michael", "Steven", "Peter"]

// ---- ელემენტების ძიება ----

// indexOf() - აბრუნებს ელემენტის ინდექსს (-1 თუ ვერ იპოვა)
console.log(myFriends.indexOf("Steven")); // 1
console.log(myFriends.indexOf("Bob"));    // -1 (ვერ იპოვა)

// includes() - აბრუნებს true/false არსებობს თუ არა ელემენტი (ES6)
// იყენებს მკაცრ თანასწორობას (===)
console.log(myFriends.includes("Steven")); // true
console.log(myFriends.includes("Bob"));    // false

myFriends.push(23);
console.log(myFriends.includes("23")); // false (მკაცრი: "23" !== 23)
console.log(myFriends.includes(23));   // true

// პრაქტიკული მაგალითი: პირობითი შემოწმება includes-ით
if (myFriends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// შეჯამების ცხრილი:
// მეთოდი     | სად             | რას აბრუნებს         | ცვლის მასივს?
// ------------|-----------------|----------------------|---------------
// push()      | ბოლო (დამატება) | ახალ სიგრძეს         | დიახ
// unshift()   | დასაწყისი (დამ.)| ახალ სიგრძეს         | დიახ
// pop()       | ბოლო (წაშლა)   | წაშლილ ელემენტს      | დიახ
// shift()     | დასაწყისი (წაშ.)| წაშლილ ელემენტს      | დიახ
// indexOf()   | ძიება           | ინდექსს ან -1        | არა
// includes()  | ძიება           | true/false           | არა


/*
╔══════════════════════════════════════════════════════════════╗
║  დამატებითი სექცია - ჯერ არ გავლილი მასალა                  ║
║  ქვემოთ მოცემული თემები ჯერ არ შესწავლილა.                   ║
║  ისინი ჩართულია მხოლოდ სამომავლო მითითებისთვის.              ║
║  ამ მასალის ცოდნა ამ ეტაპზე არ მოეთხოვებათ.                  ║
║                                                              ║
║  ADVANCED SECTION - NOT YET COVERED                          ║
║  The topics below have not been studied yet.                 ║
║  They are included here for future reference only.           ║
║  You are NOT expected to know this material right now.        ║
╚══════════════════════════════════════════════════════════════╝
*/


/*
═══════════════════════════════════════════════════════════════
9. ობიექტების შესავალი (INTRODUCTION TO OBJECTS)
═══════════════════════════════════════════════════════════════

ობიექტები საშუალებას გვაძლევს შევინახოთ მონაცემები
გასაღები-მნიშვნელობის წყვილებში, დალაგებული სიის ნაცვლად.
მონაცემთა თითოეულ ნაწილს აქვს სახელი (გასაღები/თვისება).

განსხვავება მასივებისგან:
- მასივები: დალაგებული, წვდომა ინდექსის ნომრით
- ობიექტები: არადალაგებული, წვდომა თვისების სახელით
*/

// მონაცემების წარმოდგენა მასივად (დალაგებული, ლეიბლების გარეშე)
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// იგივე მონაცემები ობიექტად (სახელდებული თვისებებით)
const jonasObj = {
  firstName: "Jonas",        // გასაღები: მნიშვნელობა
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// ობიექტის ლიტერალის სინტაქსი: { გასაღები: მნიშვნელობა, გასაღები: მნიშვნელობა }
// გასაღებებს ასევე თვისებებს (properties) ეძახიან
// თვისებების თანმიმდევრობას მნიშვნელობა არ აქვს

// როდის გამოვიყენოთ მასივები vs ობიექტები:
// - მასივები: მსგავსი ელემენტების დალაგებული სიებისთვის
// - ობიექტები: დაკავშირებული მონაცემების აღწერითი სახელებით დაჯგუფებისთვის


/*
═══════════════════════════════════════════════════════════════
10. წერტილოვანი vs ფრჩხილოვანი ნოტაცია (DOT VS BRACKET NOTATION)
═══════════════════════════════════════════════════════════════

ობიექტის თვისებებზე წვდომისა და მოდიფიცირების ორი გზა.
*/

const person = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// წერტილოვანი ნოტაცია - გამოიყენე როცა ზუსტ თვისების სახელს იცნობ
console.log(person.lastName);    // "Schmedtmann"
console.log(person.age);        // 46

// ფრჩხილოვანი ნოტაცია - გამოიყენე გამოთვლილი/დინამიური თვისების სახელებისთვის
console.log(person["lastName"]); // "Schmedtmann"

// ფრჩხილების ძალა: გამოთვლილი თვისების სახელები
const nameKey = "Name";
console.log(person["first" + nameKey]); // "Jonas" (გამოთვლილი: "firstName")
console.log(person["last" + nameKey]);  // "Schmedtmann" (გამოთვლილი: "lastName")

// ეს წერტილოვანი ნოტაციით ვერ იმუშავებს:
// console.log(person."first" + nameKey); // შეცდომა!

// დინამიური წვდომა თვისებებზე (მაგ., მომხმარებლის შეყვანიდან)
// const interestedIn = prompt("რა გინდათ იცოდეთ? firstName, lastName, age, job, friends");
// if (person[interestedIn]) {
//   console.log(person[interestedIn]);
// } else {
//   console.log("არასწორი მოთხოვნა!");
// }

// ახალი თვისებების დამატება
person.location = "Portugal";
person["twitter"] = "@jonasschmedtman";
console.log(person);

// გამოწვევის მაგალითი
console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`
);
// "Jonas has 3 friends, and his best friend is called Michael"

// როდის რომელი გამოვიყენოთ:
// წერტილოვანი ნოტაცია: მარტივი, სუფთა, როცა თვისების სახელი ცნობილია
// ფრჩხილოვანი ნოტაცია: როცა თვისების სახელი გამოთვლილი/დინამიურია


/*
═══════════════════════════════════════════════════════════════
11. ობიექტის მეთოდები (OBJECT METHODS)
═══════════════════════════════════════════════════════════════

ობიექტებს ასევე შეუძლიათ ფუნქციების შენახვა თვისებებად.
ამ ფუნქციებს მეთოდებს ეძახიან. მეთოდის შიგნით, 'this'
საკვანძო სიტყვა მიუთითებს ობიექტზე, რომელსაც მეთოდი ეკუთვნის.
*/

const student = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // მეთოდი: ფუნქცია როგორც თვისების მნიშვნელობა
  calcAge: function () {
    // 'this' მიუთითებს ობიექტზე, რომელიც მეთოდს იძახებს (student)
    this.age = 2037 - this.birthYear; // შედეგის შენახვა ახალ თვისებად
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// მეთოდების გამოძახება
console.log(student.calcAge());  // 46

// calcAge()-ის გამოძახების შემდეგ, age თვისება უკვე არსებობს ობიექტზე
console.log(student.age); // 46 (შენახული თვისება, ხელახლა გამოთვლა არ ხდება)
console.log(student.age); // 46 (ეფექტური - ერთხელ გამოითვალა, ბევრჯერ გამოიყენა)

// getSummary-ს გამოყენება
console.log(student.getSummary());
// "Jonas is a 46-year old teacher, and he has a driver's license."

// რატომ ვიყენებთ 'this'-ს ობიექტის სახელის ნაცვლად?
// - 'this' დინამიურია: მუშაობს ცვლადის სახელის შეცვლის შემთხვევაშიც
// - student.birthYear მუშაობს, მაგრამ მყიფეა (ხისტად დაფიქსირებული სახელი)
// - this.birthYear მოქნილია და თვითმიმართვითია

// შენიშვნა: ისრიან ფუნქციებს არ აქვთ საკუთარი 'this' საკვანძო სიტყვა
// ამიტომ არ გამოიყენო ისრიანი ფუნქციები ობიექტის მეთოდებად!


/*
═══════════════════════════════════════════════════════════════
12. FOR ციკლი (THE FOR LOOP)
═══════════════════════════════════════════════════════════════

ციკლები საშუალებას გვაძლევს კოდი განმეორდეს ხელახლა და
ხელახლა დაწერის გარეშე. for ციკლი გამოიყენება როცა ვიცით
რამდენჯერ გვინდა განმეორება.

სინტაქსი: for (მთვლელი; პირობა; ზრდა) { კოდი }
*/

// ციკლის გარეშე - განმეორებითი!
// console.log("Lifting weights rep 1");
// console.log("Lifting weights rep 2");
// ... კიდევ 10-ჯერ

// for ციკლით - სუფთა და მასშტაბირებადი!
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// როგორ მუშაობს:
// 1. მთვლელი: let rep = 1        -> მთვლელის ინიციალიზაცია
// 2. პირობა: rep <= 10            -> შემოწმება ყოველი იტერაციის წინ
// 3. ტანი: console.log(...)       -> შესრულება თუ პირობა true-ა
// 4. ზრდა: rep++                  -> მთვლელის განახლება ყოველი იტერაციის შემდეგ
// 5. დაბრუნება მე-2 ნაბიჯზე

// შესრულების მიმდინარეობა:
// rep = 1 -> 1 <= 10? დიახ -> log "...rep 1" -> rep ხდება 2
// rep = 2 -> 2 <= 10? დიახ -> log "...rep 2" -> rep ხდება 3
// ...
// rep = 10 -> 10 <= 10? დიახ -> log "...rep 10" -> rep ხდება 11
// rep = 11 -> 11 <= 10? არა -> ციკლი მთავრდება

// განსხვავებული ციკლის მაგალითები
// 0-დან 4-მდე თვლა
for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

// 2-ით თვლა
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}


/*
═══════════════════════════════════════════════════════════════
13. მასივების ციკლი, BREAK და CONTINUE
    (LOOPING ARRAYS, BREAK AND CONTINUE)
═══════════════════════════════════════════════════════════════

for ციკლის ერთ-ერთი ყველაზე გავრცელებული გამოყენება არის
მასივის გავლა თითოეული ელემენტის წაკითხვის ან დამუშავებისთვის.
*/

const jonasInfo = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// მასივის გავლა ციკლით
const types = [];

for (let i = 0; i < jonasInfo.length; i++) {
  // მასივიდან წაკითხვა
  console.log(jonasInfo[i], typeof jonasInfo[i]);

  // ახალი მასივის შექმნა ორიგინალის საფუძველზე
  types.push(typeof jonasInfo[i]);
}
console.log(types);
// ["string", "string", "number", "string", "object", "boolean"]

// პრაქტიკული მაგალითი: ასაკების გამოთვლა დაბადების წლებიდან
const birthYearsArr = [1991, 2007, 1969, 2020];
const agesArr = [];

for (let i = 0; i < birthYearsArr.length; i++) {
  agesArr.push(2037 - birthYearsArr[i]);
}
console.log(agesArr); // [46, 30, 68, 17]

// ---- CONTINUE ----
// გამოტოვებს მიმდინარე იტერაციას და გადადის შემდეგზე

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasInfo.length; i++) {
  if (typeof jonasInfo[i] !== "string") continue; // არა-სტრინგების გამოტოვება

  console.log(jonasInfo[i], typeof jonasInfo[i]);
}
// მხოლოდ იბეჭდება: "Jonas", "Schmedtmann", "teacher"

// ---- BREAK ----
// მთლიანად გამოდის ციკლიდან

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasInfo.length; i++) {
  if (typeof jonasInfo[i] === "number") break; // გაჩერება პირველ რიცხვზე

  console.log(jonasInfo[i], typeof jonasInfo[i]);
}
// მხოლოდ იბეჭდება: "Jonas", "Schmedtmann" (ჩერდება რიცხვ 46-მდე)


/*
═══════════════════════════════════════════════════════════════
14. უკუღმა ციკლი და ჩადგმული ციკლები
    (LOOPING BACKWARDS AND NESTED LOOPS)
═══════════════════════════════════════════════════════════════
*/

const jonasData = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// ---- უკუღმა ციკლი ----
// დაწყება ბოლო ინდექსიდან, მთვლელის შემცირება

for (let i = jonasData.length - 1; i >= 0; i--) {
  console.log(i, jonasData[i]);
}
// 5 true
// 4 ["Michael", "Peter", "Steven"]
// 3 "teacher"
// 2 46
// 1 "Schmedtmann"
// 0 "Jonas"

// ---- ჩადგმული ციკლები (ციკლი ციკლის შიგნით) ----
// შიდა ციკლი მთლიანად სრულდება გარე ციკლის თითოეული იტერაციისთვის

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
// Exercise 1: გამეორებები 1-5
// Exercise 2: გამეორებები 1-5
// Exercise 3: გამეორებები 1-5
// შიდა ციკლის მთლიანი იტერაციები: 3 * 5 = 15

// კიდევ ერთი მაგალითი: გამრავლების ცხრილი
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}


/*
═══════════════════════════════════════════════════════════════
15. WHILE ციკლი (THE WHILE LOOP)
═══════════════════════════════════════════════════════════════

while ციკლი უფრო მოქნილია ვიდრე for. გამოიყენეთ როცა
არ იცით რამდენი იტერაცია დაგჭირდებათ - მხოლოდ პირობა
გაქვთ შესამოწმებელი.

სინტაქსი: while (პირობა) { კოდი }
*/

// იგივე რაც for ციკლი, მაგრამ while-ით
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

// როდის გამოვიყენოთ while vs for:
// - for: როცა იცით რამდენი იტერაციაა (მთვლელზე დაფუძნებული)
// - while: როცა მხოლოდ პირობა გაქვთ, არა მთვლელი

// მაგალითი: კამათლის გაგორება სანამ 6-ს არ მიიღებთ
// ეს არის while-ის სრულყოფილი გამოყენების შემთხვევა -
// არ ვიცით რამდენი გაგორება დასჭირდება!

let dice = Math.trunc(Math.random() * 6) + 1;
// Math.random() იძლევა 0-დან 0.999...-მდე
// * 6 იძლევა 0-დან 5.999...-მდე
// Math.trunc() შლის ათწილადებს: 0-დან 5-მდე
// + 1 იძლევა 1-დან 6-მდე

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// ციკლმა შეიძლება 0-ჯერ იმუშაოს (თუ პირველი გაგორება 6-ია)
// ან შეიძლება 100-ჯერ იმუშაოს - არ ვიცით!

// while-ის კიდევ ერთი მაგალითი: უკუთვლა
let countdown = 5;
while (countdown > 0) {
  console.log(`${countdown}...`);
  countdown--;
}
console.log("Liftoff!");

// მნიშვნელოვანი: ყოველთვის დარწმუნდით რომ პირობა საბოლოოდ
// false გახდება, წინააღმდეგ შემთხვევაში უსასრულო ციკლს შექმნით!
// let x = 1;
// while (x > 0) { x++; } // უსასრულო ციკლი! x ვერასოდეს იქნება <= 0


/*
═══════════════════════════════════════════════════════════════
შეჯამება - JAVASCRIPT ფუნდამენტური საფუძვლები ნაწილი 2
═══════════════════════════════════════════════════════════════

მკაცრი რეჟიმი:
- ყოველთვის გამოიყენე 'use strict'; ფაილების თავში
- იჭერს ჩუმ შეცდომებს და ინახავს მომავალ საკვანძო სიტყვებს

ფუნქციები:
- კოდის მრავალჯერადად გამოყენებადი ბლოკები
- პარამეტრები (ადგილმჭერები) vs არგუმენტები (რეალური მნიშვნელობები)
- return აბრუნებს მნიშვნელობას და გამოდის ფუნქციიდან
- სამი ტიპი: დეკლარაცია, გამოსახულება, ისრიანი

ფუნქციის ტიპები:
- დეკლარაცია: function name(params) { }  -> hoisted
- გამოსახულება: const name = function(params) { }  -> არ არის hoisted
- ისრიანი: const name = (params) => { }  -> მოკლე სინტაქსი, არ აქვს 'this'

მასივები:
- დალაგებული კოლექცია: [item1, item2, item3]
- 0-დან ინდექსაცია: arr[0] არის პირველი ელემენტი
- .length იძლევა ელემენტების რაოდენობას
- მუტაბელურია const-ითაც კი (reference ტიპი)
- push/pop (ბოლო), unshift/shift (დასაწყისი)
- indexOf (პოზიციის პოვნა), includes (არსებობის შემოწმება)

ობიექტები (სამომავლო მითითება):
- გასაღები-მნიშვნელობის წყვილები: { key: value }
- წერტილოვანი ნოტაცია: obj.key
- ფრჩხილოვანი ნოტაცია: obj["key"] (გამოთვლილი სახელებისთვის)
- მეთოდები: ფუნქციები თვისებებად, იყენებს 'this'-ს

ციკლები:
- for: როცა იცით რაოდენობას -> for (let i = 0; i < n; i++)
- while: როცა მხოლოდ პირობა გაქვთ -> while (cond) { }
- continue: მიმდინარე იტერაციის გამოტოვება
- break: ციკლიდან მთლიანად გამოსვლა
*/
