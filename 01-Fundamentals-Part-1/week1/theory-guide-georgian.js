////////////////////////////////////
// JavaScript ფუნდამენტური საფუძვლები - ნაწილი 1
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////

/*
═══════════════════════════════════════════════════════════════
1. მნიშვნელობები და ცვლადები (VALUES AND VARIABLES)
═══════════════════════════════════════════════════════════════

ცვლადები არის კონტეინერები, რომლებიც ინახავენ მონაცემთა
მნიშვნელობებს. ისინი საშუალებას გვაძლევენ დავასახელოთ და
ხელახლა გამოვიყენოთ მონაცემები პროგრამაში.
*/

// ცვლადების გამოცხადება და გამოყენება
let firstName = "Sarah";
let age = 25;
let isStudent = true;

console.log(firstName); // შედეგი: Sarah
console.log(age); // შედეგი: 25

// ცვლადების დასახელების კონვენციები და წესები:
// ✅ ᲙᲐᲠᲒᲘ:
let myFirstJob = "Programmer";    // camelCase (რეკომენდებული ცვლადებისთვის)
let my_first_job = "Programmer";  // snake_case (ვალიდურია, მაგრამ არაა გავრცელებული JS-ში)
let $price = 19.99;               // შეიძლება იწყებოდეს $-ით
let _private = "data";            // შეიძლება იწყებოდეს _-ით
let PI = 3.14159;                 // ALL_CAPS კონსტანტებისთვის

// ❌ ცუდი / ᲐᲠᲐᲕᲐᲚᲘᲓᲣᲠᲘ:
// let 3years = 3;                // არ შეიძლება რიცხვით დაიწყოს
// let my-job = "teacher";        // არ შეიძლება გამოიყენოს ტირეები
// let class = "Math";            // არ შეიძლება რეზერვირებული სიტყვები
// let function = 5;              // არ შეიძლება რეზერვირებული სიტყვები


/*
═══════════════════════════════════════════════════════════════
2. მონაცემთა ტიპები (DATA TYPES)
═══════════════════════════════════════════════════════════════

JavaScript-ს აქვს 7 პრიმიტიული მონაცემთა ტიპი:
1. Number - ათწილადებისა და მთელი რიცხვებისთვის
2. String - ტექსტისთვის
3. Boolean - true/false მნიშვნელობებისთვის
4. Undefined - ჯერ განუსაზღვრელი ცვლადის მნიშვნელობა
5. Null - ცარიელი მნიშვნელობა
6. Symbol - უნიკალური და შეუცვლელი (ES6)
7. BigInt - Number-ისთვის ზედმეტად დიდი რიცხვებისთვის (ES2020)
*/

// NUMBER - ყველა რიცხვი არის floating point
let integer = 23;
let decimal = 23.5;
let negative = -15;

console.log(typeof integer);  // "number"
console.log(typeof decimal);  // "number"

// STRING - სიმბოლოების თანმიმდევრობა
let name1 = "Jonas";
let name2 = 'Sarah';
let message = `Hello ${name1}!`; // Template literal

console.log(typeof name1);    // "string"

// BOOLEAN - ლოგიკური ტიპი (true/false)
let isAdult = true;
let hasLicense = false;

console.log(typeof isAdult);  // "boolean"

// UNDEFINED - ცვლადი გამოცხადებულია, მაგრამ არ აქვს მინიჭებული მნიშვნელობა
let children;
console.log(children);        // undefined
console.log(typeof children); // "undefined"

// NULL - განზრახ ცარიელი მნიშვნელობა
let emptyValue = null;
console.log(typeof emptyValue); // "object" (ეს არის ბაგი JS-ში!)

// DYNAMIC TYPING - ცვლადებს შეუძლიათ ტიპის შეცვლა
let x = 23;           // x არის number
console.log(typeof x); // "number"
x = "hello";          // ახლა x არის string
console.log(typeof x); // "string"


/*
═══════════════════════════════════════════════════════════════
3. LET, CONST და VAR
═══════════════════════════════════════════════════════════════

სამი გზა ცვლადების გამოსაცხადებლად, თითოეული განსხვავებული
მახასიათებლებით.
*/

// LET - ცვლადებისთვის, რომლებიც შეიცვლება (block-scoped, ES6)
let currentAge = 30;
currentAge = 31;      // ✅ შეიძლება ხელახლა მინიჭება
console.log(currentAge); // 31

// CONST - ცვლადებისთვის, რომლებიც არ შეიცვლება (block-scoped, ES6)
const birthYear = 1991;
// birthYear = 1990;  // ❌ შეცდომა! const-ს ვერ შეცვლი
// const job;         // ❌ შეცდომა! const უნდა ინიციალიზდეს

const GRAVITY = 9.81; // გამოიყენე const კონსტანტებისთვის
const API_KEY = "abc123";

// VAR - ძველი გზა (function-scoped, არ გამოიყენო)
var oldWay = "programmer";
oldWay = "teacher";   // შეიძლება ხელახლა მინიჭება

// საუკეთესო პრაქტიკა:
// - გამოიყენე CONST ნაგულისხმევად
// - გამოიყენე LET მხოლოდ როცა გჭირდება ხელახლა მინიჭება
// - თავი აარიდე VAR-ს თანამედროვე JavaScript-ში


/*
═══════════════════════════════════════════════════════════════
4. ძირითადი ოპერატორები (BASIC OPERATORS)
═══════════════════════════════════════════════════════════════
*/

// მათემატიკური ოპერატორები
console.log(10 + 5);    // 15 (შეკრება)
console.log(10 - 5);    // 5  (გამოკლება)
console.log(10 * 5);    // 50 (გამრავლება)
console.log(10 / 5);    // 2  (გაყოფა)
console.log(10 % 3);    // 1  (ნაშთი/modulo)
console.log(2 ** 3);    // 8  (ხარისხში აყვანა: 2^3)

// სტრინგების კონკატენაცია (შეერთება)
const firstName2 = "John";
const lastName2 = "Doe";
console.log(firstName2 + " " + lastName2); // "John Doe"

// მინიჭების ოპერატორები
let points = 10;
points += 5;    // points = points + 5  (15)
points -= 3;    // points = points - 3  (12)
points *= 2;    // points = points * 2  (24)
points /= 4;    // points = points / 4  (6)
points++;       // points = points + 1  (7)
points--;       // points = points - 1  (6)

// შედარების ოპერატორები (აბრუნებს boolean-ს)
console.log(5 > 3);     // true  (მეტია)
console.log(5 < 3);     // false (ნაკლებია)
console.log(5 >= 5);    // true  (მეტი ან ტოლი)
console.log(5 <= 4);    // false (ნაკლები ან ტოლი)
console.log(5 == 5);    // true  (ტოლი - ზუსტი არა)
console.log(5 === 5);   // true  (ტოლი - ზუსტი)
console.log(5 != 3);    // true  (არ არის ტოლი - ზუსტი არა)
console.log(5 !== 3);   // true  (არ არის ტოლი - ზუსტი)


/*
═══════════════════════════════════════════════════════════════
5. ოპერატორების პრიორიტეტი (OPERATOR PRECEDENCE)
═══════════════════════════════════════════════════════════════

ოპერატორები სრულდება განსაზღვრული თანმიმდევრობით.
უფრო მაღალი პრიორიტეტი = ჯერ სრულდება.
*/

// მაგალითი 1: მათემატიკური ოპერატორები
const result1 = 2 + 3 * 4;  // გამრავლება ჯერ: 2 + 12 = 14
console.log(result1);       // 14

const result2 = (2 + 3) * 4; // ფრჩხილები ჯერ: 5 * 4 = 20
console.log(result2);        // 20

// მაგალითი 2: მინიჭება
let a, b;
a = b = 10 + 5;  // მინიჭება მარჯვნიდან მარცხნივ
console.log(a, b); // 15, 15
// შესრულება: 10 + 5 = 15, b = 15, a = 15

// მაგალითი 3: შედარება და მათემატიკა
const ageJohn = 30;
const ageSarah = 25;
console.log(2040 - ageJohn > 2040 - ageSarah);
// გამოკლება ჯერ ხდება: 2010 > 2015 = false


/*
═══════════════════════════════════════════════════════════════
6. სტრინგები და Template Literals
═══════════════════════════════════════════════════════════════
*/

// ძველი გზა - სტრინგების კონკატენაცია
const person = "Alice";
const job2 = "developer";
const birthYear2 = 1995;
const year2 = 2026;

const intro1 = "I'm " + person + ", a " + (year2 - birthYear2) +
               " year old " + job2 + "!";
console.log(intro1);

// თანამედროვე გზა - Template literals (ES6) - რეკომენდებული
const intro2 = `I'm ${person}, a ${year2 - birthYear2} year old ${job2}!`;
console.log(intro2);

// ჩვეულებრივი სტრინგებიც შეიძლება გამოიყენოს backticks
const simple = `Just a regular string`;

// მრავალხაზიანი სტრინგები - ძველი გზა
console.log("ხაზი 1\n\
ხაზი 2\n\
ხაზი 3");

// მრავალხაზიანი სტრინგები - თანამედროვე გზა
console.log(`ხაზი 1
ხაზი 2
ხაზი 3`);


/*
═══════════════════════════════════════════════════════════════
7. IF / ELSE განცხადებები
═══════════════════════════════════════════════════════════════

გამოიყენება გადაწყვეტილებების მისაღებად კოდში პირობების საფუძველზე.
*/

// ძირითადი if/else
const userAge = 16;

if (userAge >= 18) {
  console.log("შეგიძლიათ ხმის მიცემა! 🗳️");
} else {
  console.log("ძალიან ახალგაზრდა ხართ ხმის მისაცემად");
}

// if/else ცვლადის გამოცხადებით
const birthYear3 = 1995;
let century;

if (birthYear3 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`დაიბადა ${century}-ე საუკუნეში`);

// მრავალი პირობა else if-ით
const score = 75;

if (score >= 90) {
  console.log("შეფასება: A");
} else if (score >= 80) {
  console.log("შეფასება: B");
} else if (score >= 70) {
  console.log("შეფასება: C");
} else if (score >= 60) {
  console.log("შეფასება: D");
} else {
  console.log("შეფასება: F");
}


/*
═══════════════════════════════════════════════════════════════
8. ტიპის კონვერტაცია და Coercion
═══════════════════════════════════════════════════════════════
*/

// ტიპის კონვერტაცია (მანუალური) - ჩვენ აშკარად ვცვლით ტიპებს
const inputYear = "1991";
console.log(Number(inputYear));      // 1991 (number)
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Hello"));   // NaN (Not a Number - არ არის რიცხვი)
console.log(typeof NaN);        // "number" (NaN არის number ტიპი!)

console.log(String(23));        // "23" (string)
console.log(Boolean(0));        // false

// ტიპის Coercion (ავტომატური) - JS ავტომატურად გარდაქმნის ტიპებს
console.log("მე ვარ " + 23 + " წლის");  // "მე ვარ 23 წლის"
// რიცხვი 23 გარდაიქმნება სტრინგად "23"

console.log("23" - "10" - 3);   // 10 (სტრინგები გარდაიქმნება რიცხვებად)
console.log("23" * "2");        // 46 (სტრინგები გარდაიქმნება რიცხვებად)
console.log("23" / "2");        // 11.5

// რთული მაგალითი
let n = "1" + 1;    // "11" (სტრინგების კონკატენაცია)
n = n - 1;          // 10 (სტრინგი "11" გარდაიქმნება რიცხვად)
console.log(n);     // 10


/*
═══════════════════════════════════════════════════════════════
9. Truthy და Falsy მნიშვნელობები
═══════════════════════════════════════════════════════════════

Falsy მნიშვნელობები: მნიშვნელობები რომლებიც false-ად გარდაიქმნება
boolean-ში კონვერტაციისას
მხოლოდ 5 falsy მნიშვნელობა არსებობს: 0, "", undefined, null, NaN
ყველა სხვა არის truthy!
*/

// Falsy მნიშვნელობების ტესტირება
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false (ცარიელი სტრინგი)
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false

// Truthy მნიშვნელობების ტესტირება
console.log(Boolean("Hello"));    // true (ნებისმიერი არაცარიელი სტრინგი)
console.log(Boolean(20));         // true (ნებისმიერი არანულოვანი რიცხვი)
console.log(Boolean({}));         // true (ნებისმიერი ობიექტი)
console.log(Boolean([]));         // true (ნებისმიერი მასივი)

// პრაქტიკული გამოყენება if განცხადებებში
const money = 0;
if (money) {
  console.log("ნუ გამოხარჯავ ყველაფერს!");
} else {
  console.log("უნდა იშოვო სამსახური!"); // ეს სრულდება (0 არის falsy)
}

// გავრცელებული ბაგი: 0-ის შემოწმება
let height = 0;
if (height) {
  console.log("სიმაღლე განსაზღვრულია");
} else {
  console.log("სიმაღლე არ არის განსაზღვრული"); // ბაგი! 0 არის ვალიდური სიმაღლე
}


/*
═══════════════════════════════════════════════════════════════
10. თანასწორობის ოპერატორები: == vs ===
═══════════════════════════════════════════════════════════════
*/

// ზუსტი თანასწორობა (===) - არ ახდენს ტიპის coercion-ს
// როგორც მნიშვნელობა, ასევე ტიპი უნდა იყოს იდენტური
console.log(18 === 18);      // true
console.log(18 === "18");    // false (განსხვავებული ტიპები)
console.log(18 === 19);      // false (განსხვავებული მნიშვნელობები)

// არაზუსტი თანასწორობა (==) - ახდენს ტიპის coercion-ს
// მხოლოდ მნიშვნელობა უნდა ემთხვეოდეს (ტიპები გარდაიქმნება)
console.log(18 == 18);       // true
console.log(18 == "18");     // true (სტრინგი "18" გარდაიქმნება 18-ად)
console.log(18 == 19);       // false

// საუკეთესო პრაქტიკა: ყოველთვის გამოიყენე === (ზუსტი) ბაგების თავიდან ასაცილებლად
const favNumber = 23;

if (favNumber === 23) {
  console.log("23 არის საოცარი რიცხვი!");
}

// ზუსტი არ-ტოლობა (!==) vs არაზუსტი არ-ტოლობა (!=)
console.log(18 !== 19);      // true
console.log(18 !== "18");    // true (განსხვავებული ტიპები)
console.log(18 != "18");     // false (არაზუსტი შედარება)

// პრაქტიკული მაგალითი მომხმარებლის შეყვანით
// const favorite = Number(prompt("რა არის თქვენი საყვარელი რიცხვი?"));
// if (favorite === 7) {
//   console.log("7 არის იღბლიანი რიცხვი!");
// } else if (favorite === 23) {
//   console.log("23 არის კარგი!");
// }


/*
═══════════════════════════════════════════════════════════════
11. ლოგიკური ოპერატორები (LOGICAL OPERATORS)
═══════════════════════════════════════════════════════════════

გამოიყენება მრავალი boolean პირობის შესაერთებლად
*/

// AND (&&) - true მხოლოდ მაშინ როცა ყველა პირობა true-ა
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

// OR (||) - true როცა მინიმუმ ერთი პირობა true-ა
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

// NOT (!) - გადაბრუნებს boolean მნიშვნელობას
console.log(!true);             // false
console.log(!false);            // true

// პრაქტიკული მაგალითი
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

// ყველა პირობა უნდა იყოს true
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("სარა შეუძლია მართოს! ✅");
} else {
  console.log("სხვამ უნდა იმართოს");
}

// მინიმუმ ერთი პირობა უნდა იყოს true
const hasCar = false;
const hasBike = true;

if (hasCar || hasBike) {
  console.log("შეუძლია სამსახურში მისვლა");
}

// კომპლექსური პირობები
const age3 = 20;
const hasTicket = true;

if (age3 >= 18 && hasTicket) {
  console.log("შეუძლია კონცერტზე შესვლა");
} else if (age3 >= 18 && !hasTicket) {
  console.log("უნდა იყიდოს ბილეთი");
} else {
  console.log("ძალიან ახალგაზრდაა შესასვლელად");
}


/*
═══════════════════════════════════════════════════════════════
12. SWITCH განცხადება
═══════════════════════════════════════════════════════════════

ალტერნატივა მრავალი if/else განცხადებისთვის, როცა ამოწმებთ ერთ
მნიშვნელობას მრავალი შესაძლებლობის წინააღმდეგ.
*/

const day = "ორშაბათი";

switch (day) {
  case "ორშაბათი":  // day === "ორშაბათი"
    console.log("კვირის დაგეგმვა");
    console.log("შეხვედრაზე წასვლა");
    break;  // break-ის გარეშე, შესრულება გაგრძელდება!
  case "სამშაბათი":
    console.log("პრეზენტაციის მომზადება");
    break;
  case "ოთხშაბათი":
  case "ხუთშაბათი":  // მრავალ case-ს შეუძლია კოდის გაზიარება
    console.log("კოდის წერა");
    break;
  case "პარასკევი":
    console.log("Pull Request-ების რევიუ");
    break;
  case "შაბათი":
  case "კვირა":
    console.log("შაბათ-კვირის გატარება!");
    break;
  default:  // როგორც else if/else-ში
    console.log("არავალიდური დღე");
}

// ეკვივალენტური if/else
if (day === "ორშაბათი") {
  console.log("კვირის დაგეგმვა");
  console.log("შეხვედრაზე წასვლა");
} else if (day === "სამშაბათი") {
  console.log("პრეზენტაციის მომზადება");
} else if (day === "ოთხშაბათი" || day === "ხუთშაბათი") {
  console.log("კოდის წერა");
} else if (day === "პარასკევი") {
  console.log("Pull Request-ების რევიუ");
} else if (day === "შაბათი" || day === "კვირა") {
  console.log("შაბათ-კვირის გატარება!");
} else {
  console.log("არავალიდური დღე");
}


/*
═══════════════════════════════════════════════════════════════
13. განცხადებები vs გამოსახულებები (STATEMENTS VS EXPRESSIONS)
═══════════════════════════════════════════════════════════════
*/

// გამოსახულება (EXPRESSION) - აწარმოებს მნიშვნელობას
3 + 4              // გამოსახულება (აწარმოებს 7)
2026              // გამოსახულება (აწარმოებს 2026)
true && false     // გამოსახულება (აწარმოებს false)

// განცხადება (STATEMENT) - ასრულებს მოქმედებას (არ აწარმოებს მნიშვნელობას)
if (23 > 10) {
  const str = "23 უფრო დიდია";  // განცხადება
}

// შეგიძლიათ გამოიყენოთ გამოსახულებები template literals-ში
const myAge = 30;
console.log(`მე ვარ ${2026 - 1996} წლის`);  // გამოსახულება ${}-ში

// მაგრამ ვერ გამოიყენებთ განცხადებებს template literals-ში
// console.log(`მე ვარ ${if (myAge >= 18) { "ზრდასრული" }}`);  // ❌ შეცდომა!


/*
═══════════════════════════════════════════════════════════════
14. ტერნარული (პირობითი) ოპერატორი (TERNARY OPERATOR)
═══════════════════════════════════════════════════════════════

if/else-ის შემოკლებული ფორმა, რომელიც აბრუნებს მნიშვნელობას
(ეს არის გამოსახულება!)
სინტაქსი: პირობა ? მნიშვნელობაRომTrue : მნიშვნელობაRომFalse
*/

// ძირითადი მაგალითი
const userAge2 = 23;
const beverage = userAge2 >= 18 ? "ღვინო 🍷" : "წყალი 💧";
console.log(beverage);  // "ღვინო 🍷"

// ეკვივალენტური if/else
let beverage2;
if (userAge2 >= 18) {
  beverage2 = "ღვინო 🍷";
} else {
  beverage2 = "წყალი 💧";
}

// შეიძლება გამოყენებულ იქნას template literals-ში (რადგან ეს გამოსახულებაა!)
console.log(`მე მიყვარს ${userAge2 >= 18 ? "ღვინო 🍷" : "წყალი 💧"}`);

// პრაქტიკული მაგალითი - ჩაის გამოთვლა
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`ანგარიში: $${bill}, ჩაი: $${tip}, სულ: $${bill + tip}`);

// შეიძლება იყოს ჩადგმული (მაგრამ ფრთხილად, შეიძლება რთულად წასაკითხი გახდეს!)
const temperature = 25;
const weather = temperature > 30 ? "ცხელი" :
                temperature > 20 ? "თბილი" :
                temperature > 10 ? "გრილი" : "ცივი";
console.log(weather);  // "თბილი"


/*
═══════════════════════════════════════════════════════════════
შეჯამება - როდის რა გამოვიყენოთ
═══════════════════════════════════════════════════════════════

ცვლადები:
- გამოიყენე CONST ნაგულისხმევად
- გამოიყენე LET როცა გჭირდება ხელახლა მინიჭება
- არასოდეს გამოიყენო VAR

სტრინგები:
- გამოიყენე template literals (`...`) კონკატენაციის ნაცვლად

თანასწორობა:
- ყოველთვის გამოიყენე === და !== (ზუსტი)
- თავი აარიდე == და != (არაზუსტი)

პირობები:
- მარტივი true/false მინიჭება → ტერნარული ოპერატორი
- კომპლექსური ლოგიკა ან მრავალი განცხადება → if/else
- ერთი მნიშვნელობის შემოწმება მრავალი ვარიანტის წინააღმდეგ → switch

ტიპის შემოწმება:
- გამოიყენე typeof ტიპების შესამოწმებლად
- დაიმახსოვრე: typeof null არის "object" (ბაგი!)
- დაიმახსოვრე: typeof NaN არის "number"

კონვერტაცია:
- Number() - string → number
- String() - ნებისმიერი → string
- Boolean() - truthy/falsy შესამოწმებლად
- ან დაეყრდენი coercion-ს სადაც უსაფრთხოა
*/
