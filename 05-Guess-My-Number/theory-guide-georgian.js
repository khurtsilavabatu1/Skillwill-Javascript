////////////////////////////////////
// DOM და Guess My Number თამაში
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. რა არის DOM? (Document Object Model)
═══════════════════════════════════════════════════════════════

DOM არის HTML დოკუმენტის სტრუქტურირებული წარმოდგენა, რომელსაც
ბრაუზერი ქმნის გვერდის ჩატვირთვისას. ის JavaScript-ს
საშუალებას აძლევს მიწვდეს, შეცვალოს და ურთიერთქმედოს
HTML კონტენტთან.

📌 წარმოიდგინეთ DOM როგორც ობიექტების ხე. თითოეული HTML
ელემენტი ხდება "კვანძი" (node) ამ ხეში, და JavaScript-ს
შეუძლია წაიკითხოს ან შეცვალოს ნებისმიერი კვანძი.

   document
      |
    <html>
    /    \
 <head>  <body>
   |      /    \
 <title> <h1>  <p>

📌 'document' ობიექტი არის DOM-ში შესვლის წერტილი. ის
ავტომატურად ხელმისაწვდომია ნებისმიერ ბრაუზერის JavaScript კოდში.

📌 მნიშვნელოვანი: DOM არ არის JavaScript ენის ნაწილი.
ის არის Web API, რომელსაც ბრაუზერი უზრუნველყოფს. JavaScript
უბრალოდ იყენებს ამ API-ს ვებგვერდთან ურთიერთქმედებისთვის.
*/

'use strict';


/*
═══════════════════════════════════════════════════════════════
2. ელემენტების მოძიება querySelector-ით
   (SELECTING ELEMENTS WITH querySelector)
═══════════════════════════════════════════════════════════════

📌 გვერდზე ელემენტთან ურთიერთქმედებისთვის, ჯერ უნდა
ავირჩიოთ (SELECT) ის. ყველაზე გავრცელებული მეთოდია
document.querySelector().

📌 ის იღებს CSS სელექტორის სტრინგს და აბრუნებს პირველ
შესაბამის ელემენტს.
*/

// კლასის სახელით მოძიება (წერტილით, ისევე როგორც CSS-ში)
document.querySelector('.message');
// არჩევს: <p class="message">Start guessing...</p>

document.querySelector('.score');
// არჩევს: <span class="score">20</span>

document.querySelector('.number');
// არჩევს: <div class="number">?</div>

// ელემენტის/თეგის სახელით მოძიება (პრეფიქსის გარეშე)
document.querySelector('body');
// არჩევს: <body> ელემენტს

// ID-ით მოძიება (ჰეშით, ისევე როგორც CSS-ში)
// document.querySelector('#myId');

// სელექტორი მუშაობს ზუსტად ისე, როგორც CSS სელექტორები:
// '.className'   -> კლასი
// '#idName'      -> id
// 'tagName'      -> HTML თეგი
// '.parent .child' -> ჩადგმული ელემენტები

// თუ ვერცერთი ელემენტი ვერ მოიძებნა, querySelector აბრუნებს null-ს
const noElement = document.querySelector('.nonexistent');
console.log(noElement); // null

// 📌 დაიმახსოვრეთ: querySelector აბრუნებს მხოლოდ პირველ შედეგს.
// გამოიყენეთ querySelectorAll() ყველა შესაბამისი ელემენტის მისაღებად (აბრუნებს NodeList-ს).


/*
═══════════════════════════════════════════════════════════════
3. კონტენტის წაკითხვა და შეცვლა
   (READING AND CHANGING CONTENT)
═══════════════════════════════════════════════════════════════

📌 ელემენტის არჩევის შემდეგ, შეგვიძლია წავიკითხოთ ან
შევცვალოთ მისი კონტენტი textContent-ის და value-ს გამოყენებით.
*/

// ---- textContent ----
// გამოიყენება HTML ელემენტებისთვის (p, span, div, h1 და ა.შ.)

// კონტენტის წაკითხვა გვერდიდან
console.log(document.querySelector('.message').textContent);
// გამოსავალი: "Start guessing..."

// კონტენტის შეცვლა (დაყენება) გვერდზე
document.querySelector('.message').textContent = 'Correct Number!';
// ტექსტი გვერდზე მაშინვე იცვლება!

document.querySelector('.number').textContent = 13;
// "?" ყუთი ახლა 13-ს აჩვენებს

document.querySelector('.score').textContent = 10;
// ქულის ეკრანი განახლდება 10-ით

// ---- value ----
// გამოიყენება სპეციალურად INPUT ელემენტებისთვის (<input>, <textarea>, <select>)

// ინფუთ ველიდან მნიშვნელობის წაკითხვა
console.log(document.querySelector('.guess').value);
// აბრუნებს იმას, რაც მომხმარებელმა აკრიფა ინფუთში

// ინფუთ ველის მნიშვნელობის დაყენება
document.querySelector('.guess').value = 23;
// ინფუთ ველი ახლა 23-ს აჩვენებს

// 📌 მთავარი განსხვავება:
// textContent -> ტექსტის საჩვენებლად ჩვეულებრივ ელემენტებში (p, div, span)
// value -> ინფუთ ველების მნიშვნელობის წასაკითხად/დასაყენებლად


/*
═══════════════════════════════════════════════════════════════
4. მოვლენის მსმენელები (EVENT LISTENERS)
═══════════════════════════════════════════════════════════════

📌 მოვლენა (event) არის რაღაც, რაც ხდება გვერდზე (დაკლიკება,
კლავიშზე დაჭერა, მაუსის გადაადგილება და ა.შ.). მოვლენის
მსმენელი (event listener) ელოდება მოვლენას და ამუშავებს
ფუნქციას, როცა ეს მოვლენა ხდება.

addEventListener(მოვლენისტიპი, ფუნქციაჰენდლერი)
- მოვლენისტიპი: სტრინგი, მაგ. 'click', 'keydown', 'mouseover'
- ფუნქციაჰენდლერი: ფუნქცია, რომელიც ეშვება მოვლენის დროს
  (ასევე ეწოდება "callback ფუნქცია")
*/

// მოვლენის მსმენელის ძირითადი სტრუქტურა
document.querySelector('.check').addEventListener('click', function () {
  console.log('Button was clicked!');
});

// რა ხდება ეტაპობრივად:
// 1. querySelector('.check') არჩევს "Check!" ღილაკს
// 2. addEventListener('click', ...) ამაგრებს მსმენელს click მოვლენისთვის
// 3. ღილაკზე დაკლიკებისას ანონიმური ფუნქცია ეშვება
// 4. ფუნქციას ეწოდება "callback", რადგან ჩვენ არ ვიძახებთ —
//    ბრაუზერი იძახებს ჩვენ მაგივრად, როცა მოვლენა ხდება

// კიდევ ერთი მაგალითი: "Again!" ღილაკი
document.querySelector('.again').addEventListener('click', function () {
  console.log('Game reset!');
});

// ასევე შეგიძლიათ სახელიან ფუნქციას გადასცეთ ჰენდლერად:
const handleClick = function () {
  console.log('Check button clicked!');
};
document.querySelector('.check').addEventListener('click', handleClick);

// 📌 გავრცელებული მოვლენის ტიპები:
// 'click'     -> მომხმარებელი აკლიკებს ელემენტს
// 'keydown'   -> მომხმარებელი აჭერს კლავიშს
// 'keyup'     -> მომხმარებელი უშვებს კლავიშს
// 'mouseover' -> მაუსის კურსორი ელემენტზე შედის
// 'submit'    -> ფორმა იგზავნება


/*
═══════════════════════════════════════════════════════════════
5. CSS სტილების მანიპულირება JavaScript-ით
   (MANIPULATING CSS STYLES WITH JAVASCRIPT)
═══════════════════════════════════════════════════════════════

📌 შეგვიძლია ელემენტის ნებისმიერი CSS თვისება შევცვალოთ
JavaScript-ით. ეს აყენებს INLINE სტილებს ელემენტზე
(უმაღლესი პრიორიტეტი CSS-ში).

📌 სინტაქსი: element.style.propertyName = 'value';

📌 CSS თვისებების სახელები JavaScript-ში camelCase-ია
kebab-case-ის ნაცვლად:
  CSS: background-color  ->  JS: backgroundColor
  CSS: font-size         ->  JS: fontSize
  CSS: border-radius     ->  JS: borderRadius
*/

// მთელი გვერდის ფონის ფერის შეცვლა
document.querySelector('body').style.backgroundColor = '#60b347';
// გვერდი მწვანე ხდება (როცა მოთამაშე იმარჯვებს)

// რიცხვის ეკრანის სიგანის შეცვლა
document.querySelector('.number').style.width = '30rem';
// "?" ყუთი უფრო ფართო ხდება (რიცხვის გამოჩენისთვის)

// სტილების თავდაპირველ მდგომარეობაში დაბრუნება
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';

// 📌 მნიშვნელოვანი შენიშვნები:
// 1. მნიშვნელობები სტრინგები უნდა იყოს (ზომებისთვის ერთეულებით): '30rem', '#60b347'
// 2. ეს არის INLINE სტილები, ამიტომ ისინი CSS ფაილის სტილებს გადაფარავენ
// 3. მრავალსიტყვიანი თვისებებისთვის camelCase გამოიყენეთ

// გამოთვლილი სტილების წაკითხვა (რეალურად რა ჩანს):
// const bgColor = getComputedStyle(document.querySelector('body')).backgroundColor;
// console.log(bgColor); // "rgb(34, 34, 34)"


/*
═══════════════════════════════════════════════════════════════
6. შემთხვევითი რიცხვები (RANDOM NUMBERS)
═══════════════════════════════════════════════════════════════

📌 Math ობიექტი მათემატიკურ ფუნქციებს უზრუნველყოფს.
Guess My Number თამაშისთვის Math.random() გვჭირდება
საიდუმლო რიცხვის გენერირებისთვის.
*/

// Math.random() გენერირებს შემთხვევით ათწილადს 0 (ჩათვლით) და 1 (გარდა) შორის
console.log(Math.random()); // მაგ., 0.7253462891...

// დიაპაზონში რიცხვის მისაღებად, გაამრავლეთ დიაპაზონზე:
console.log(Math.random() * 20); // 0-დან 19.999...-მდე

// Math.trunc() შლის ათწილად ნაწილს (არ ამრგვალებს)
console.log(Math.trunc(4.7));    // 4
console.log(Math.trunc(0.999));  // 0

// 📌 შემთხვევითი მთელი რიცხვის გენერირება 1-დან 20-მდე:
// ეტაპობრივად:
// 1. Math.random()           -> 0-დან 0.999...-მდე
// 2. Math.random() * 20      -> 0-დან 19.999...-მდე
// 3. Math.trunc(...)         -> 0-დან 19-მდე (მთელი რიცხვი)
// 4. ... + 1                 -> 1-დან 20-მდე (მთელი რიცხვი)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber); // შემთხვევითი რიცხვი 1-დან 20-მდე

// 📌 ზოგადი ფორმულა შემთხვევითი მთელი რიცხვისთვის MIN-დან MAX-მდე:
// Math.trunc(Math.random() * (MAX - MIN + 1)) + MIN

// მაგალითები:
// 1-დან 6-მდე (კამათელი):  Math.trunc(Math.random() * 6) + 1
// 1-დან 100-მდე:           Math.trunc(Math.random() * 100) + 1
// 5-დან 10-მდე:            Math.trunc(Math.random() * 6) + 5


/*
═══════════════════════════════════════════════════════════════
7. თამაშის მდგომარეობის მართვა (GAME STATE MANAGEMENT)
═══════════════════════════════════════════════════════════════

📌 თამაშში (ან ნებისმიერ ინტერაქტიულ აპლიკაციაში) საჭიროა
მიმდინარე მდგომარეობის თვალყურის დევნება — ქულები, საიდუმლო
მნიშვნელობები, მოგებულია თუ წაგებული თამაში და ა.შ.

📌 ეს state ცვლადები განისაზღვრება მოვლენის ჰენდლერების
გარეთ, რათა ისინი შენარჩუნდეს ღილაკზე მრავალჯერ დაკლიკებისას.
*/

// Guess My Number თამაშის state ცვლადები:
// ისინი სკრიპტის ზედა დონეზე არის გამოცხადებული

// საიდუმლო რიცხვი, რომელიც მოთამაშემ უნდა გამოიცნოს
let gameSecretNumber = Math.trunc(Math.random() * 20) + 1;

// მოთამაშის მიმდინარე ქულა (იწყება 20-დან, მცირდება არასწორი ვარაუდებით)
let score = 20;

// ყველაზე მაღალი ქულა მრავალ თამაშში
let highscore = 0;

// 📌 რატომ ვინახავთ state-ს ცვლადებში (და არა მხოლოდ DOM-ში)?
// იმიტომ რომ DOM მხოლოდ ვიზუალური წარმოდგენაა.
// ჩვენს კოდის ლოგიკას საკუთარი მონაცემები ესაჭიროება გადაწყვეტილებების მისაღებად.
// მაგალითი: ვარაუდის secretNumber-თან შედარება მხოლოდ მაშინ შეგვიძლია,
// თუ secretNumber ცვლადშია შენახული.

// მოვლენის ჰენდლერი იყენებს ამ state ცვლადებს
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // თამაშის ლოგიკა იყენებს state ცვლადებს
  if (guess === gameSecretNumber) {
    // მოთამაშე იმარჯვებს!
    if (score > highscore) {
      highscore = score; // highscore state-ის განახლება
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    score--; // ქულის state-ის შემცირება
    document.querySelector('.score').textContent = score;
  }
});

// state-ის გადატვირთვა "Again!" ღილაკზე დაკლიკებისას
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // ქულის გადატვირთვა
  gameSecretNumber = Math.trunc(Math.random() * 20) + 1; // ახალი საიდუმლო რიცხვი

  // DOM-ის განახლება გადატვირთული state-ის ასახვისთვის
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// 📌 ძირითადი კონცეფცია: State ცვლადები მოქმედებენ როგორც
// "ჭეშმარიტების ერთადერთი წყარო" თქვენი აპლიკაციისთვის.
// DOM მხოლოდ აჩვენებს იმას, რასაც state ამბობს.


/*
═══════════════════════════════════════════════════════════════
8. რეფაქტორინგი - DRY პრინციპი
   (REFACTORING - THE DRY PRINCIPLE)
═══════════════════════════════════════════════════════════════

📌 DRY = Don't Repeat Yourself (ნუ გაიმეორებ საკუთარ თავს)

📌 როცა აღმოაჩენთ, რომ ერთსა და იმავე კოდს რამდენჯერმე
წერთ, ეს ნიშანია, რომ უნდა ამოიღოთ ის ფუნქციაში.

📌 Guess My Number თამაშში, შეტყობინების ტექსტს ბევრ
ადგილას ვანახლებთ. querySelector-ის ყოველ ჯერზე წერის
ნაცვლად, ვქმნით დამხმარე ფუნქციას.
*/

// რეფაქტორინგამდე (განმეორებადი):
// document.querySelector('.message').textContent = 'No number!';
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.message').textContent = 'Too high!';
// document.querySelector('.message').textContent = 'Too low!';
// document.querySelector('.message').textContent = 'You lost the game!';
// document.querySelector('.message').textContent = 'Start guessing...';

// რეფაქტორინგის შემდეგ (DRY):
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// ახლა შეგვიძლია დამხმარე ფუნქცია ყველგან გამოვიყენოთ:
displayMessage('No number!');
displayMessage('Correct Number!');
displayMessage('Too high!');
displayMessage('Too low!');
displayMessage('You lost the game!');
displayMessage('Start guessing...');

// 📌 რეფაქტორინგის სარგებელი:
// 1. ნაკლები კოდი საწერი და მოსავლელი
// 2. თუ სელექტორი შეიცვლება (.message -> .msg), ერთ ადგილას ასწორებ
// 3. კოდი უფრო ადვილი წასაკითხი და გასაგებია
// 4. ამცირებს ბეჭდური შეცდომებისა და ბაგების შანსს

// თამაშიდან რეფაქტორინგის კიდევ ერთი მაგალითი:
// წინათ (ორი ცალკე ბლოკი ზედმეტად მაღალი და ზედმეტად დაბალისთვის):
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost!';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'You lost!';
//     document.querySelector('.score').textContent = 0;
//   }
// }

// შემდეგ (გაერთიანებული ერთ ბლოკში ternary-ით):
// } else if (guess !== secretNumber) {
//   if (score > 1) {
//     displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     displayMessage('You lost the game!');
//     document.querySelector('.score').textContent = 0;
//   }
// }

// 📌 ternary ოპერატორი (პირობა ? მნიშვნელობაTrue : მნიშვნელობაFalse)
// გვეხმარება ავირიდოთ მთლიანი ბლოკის დუბლირება high/low შემთხვევებისთვის.


/*
═══════════════════════════════════════════════════════════════
შეჯამება - DOM და GUESS MY NUMBER თამაში
═══════════════════════════════════════════════════════════════

DOM:
- HTML-ის ხისებური წარმოდგენა, შექმნილი ბრაუზერის მიერ
- 'document' არის შესვლის წერტილი ობიექტი
- JavaScript იყენებს Web API-ს (არა ენის თავისებურებებს) მასთან ურთიერთქმედებისთვის

ელემენტების მოძიება:
- document.querySelector('.class') -> კლასით
- document.querySelector('#id')    -> id-ით
- document.querySelector('tag')    -> თეგის სახელით
- აბრუნებს პირველ შედეგს, ან null-ს თუ ვერაფერი მოიძებნა

კონტენტის წაკითხვა და შეცვლა:
- textContent: ჩვეულებრივი ელემენტებისთვის (p, div, span, h1 და ა.შ.)
- value: ინფუთ ველებისთვის (input, textarea, select)

მოვლენის მსმენელები:
- element.addEventListener('მოვლენისტიპი', callbackფუნქცია)
- callback ეშვება მოვლენის დადგომისას
- გავრცელებული მოვლენები: 'click', 'keydown', 'mouseover'

CSS მანიპულირება:
- element.style.propertyName = 'value'
- CSS თვისებებისთვის camelCase გამოიყენეთ
- მნიშვნელობები სტრინგები უნდა იყოს (ერთეულებით)
- აყენებს inline სტილებს (CSS-ის უმაღლესი პრიორიტეტი)

შემთხვევითი რიცხვები:
- Math.random(): 0-დან 0.999...-მდე
- Math.trunc(): შლის ათწილად ნაწილს
- დიაპაზონი 1-დან N-მდე: Math.trunc(Math.random() * N) + 1

თამაშის მდგომარეობა:
- state ცვლადების განსაზღვრა მოვლენის ჰენდლერების გარეთ
- State = მონაცემები, რომლებიც პროგრამას ესაჭიროება გადაწყვეტილებებისთვის
- DOM აჩვენებს იმას, რასაც state ამბობს

DRY პრინციპი:
- ნუ გაიმეორებ საკუთარ თავს
- ამოიღეთ განმეორებადი კოდი მრავალჯერადად გამოყენებად ფუნქციებში
- კოდს ხდის მოკლეს, სუფთას და ადვილად მოსავლელს
*/
