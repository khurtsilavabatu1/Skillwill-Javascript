'use strict';

///////////////////////////////////////
// 1. document.write() და alert()
///////////////////////////////////////

// document.write() — წერს ტექსტს პირდაპირ HTML გვერდზე
// ის ჩასვავს კონტენტს იქ, სადაც სკრიპტი მდებარეობს

document.write('<h2>გამარჯობა, JavaScript!</h2>');
document.write('<p>ეს ტექსტი document.write()-ით დაიწერა</p>');

// შეგიძლიათ HTML ტეგებიც ჩასვათ
document.write('<ul><li>პირველი</li><li>მეორე</li></ul>');

// ⚠️ ყურადღება: თუ document.write()-ს გამოიძახებთ გვერდის ჩატვირთვის
// შემდეგ (მაგ. ღილაკზე დაკლიკებისას), ის მთელ გვერდს გადაწერს!
// ამიტომ პრაქტიკაში იშვიათად გამოიყენება.

// alert() — აჩვენებს popup ფანჯარას შეტყობინებით
// alert('გამარჯობა!');

// alert აჩერებს კოდის შესრულებას სანამ მომხმარებელი OK-ს არ დააჭერს
// alert('პირველი შეტყობინება');
// alert('მეორე შეტყობინება'); // ეს მხოლოდ პირველის დახურვის შემდეგ გამოჩნდება

// prompt() — popup, სადაც მომხმარებელს შეყვანა შეუძლია
// const name = prompt('შეიყვანეთ თქვენი სახელი:');
// alert(`გამარჯობა, ${name}!`);

// confirm() — Yes/No popup, აბრუნებს true ან false
// const isAdult = confirm('18 წელი შეგისრულდათ?');
// console.log(isAdult); // true ან false

// 📌 შეჯამება:
// console.log()    — კონსოლში ბეჭდავს (დეველოპერისთვის)
// document.write() — გვერდზე წერს HTML-ს (იშვიათად გამოიყენება)
// alert()          — popup ფანჯარა (აჩერებს კოდს)
// prompt()         — popup შეყვანის ველით (აბრუნებს სტრინგს)
// confirm()        — popup Yes/No (აბრუნებს boolean-ს)


///////////////////////////////////////
// 2. while ციკლი
///////////////////////////////////////

// while ციკლი მუშაობს სანამ პირობა true-ა
// სინტაქსი: while (პირობა) { კოდი }

// 📌 ძირითადი მაგალითი — მრიცხველი
let counter = 1;
while (counter <= 5) {
  console.log(`while ციკლი: ${counter}`);
  counter++; // აუცილებელია! თორემ უსასრულო ციკლია
}
// გამოიტანს: 1, 2, 3, 4, 5

// 📌 while vs for — როდის რომელი?
// for — როცა ზუსტად ვიცით რამდენჯერ უნდა გაეშვას
// while — როცა არ ვიცით რამდენჯერ, დამოკიდებულია პირობაზე

// 📌 პრაქტიკული მაგალითი: კამათლის გაგორება სანამ 6 არ გააგორებ
let dice = Math.trunc(Math.random() * 6) + 1;
let rollCount = 0;

while (dice !== 6) {
  console.log(`გააგორე: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  rollCount++;
}
console.log(`6 გააგორე! სულ ${rollCount} გაგორება დასჭირდა`);

// 📌 while ციკლი მასივით
const colors = ['წითელი', 'ლურჯი', 'მწვანე', 'ყვითელი'];
let i = 0;
while (i < colors.length) {
  console.log(`ფერი ${i + 1}: ${colors[i]}`);
  i++;
}

// 📌 break — ციკლის ვადაზე ადრე შეწყვეტა
let num = 0;
while (num < 100) {
  num += Math.trunc(Math.random() * 10) + 1;
  if (num > 50) {
    console.log(`50-ს გადააჭარბა: ${num}, ციკლი წყდება`);
    break;
  }
  console.log(`ჯამი: ${num}`);
}

// 📌 continue — მიმდინარე იტერაციის გამოტოვება
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) continue; // ლუწებს გამოტოვებს
  console.log(`კენტი: ${j}`);
}
// გამოიტანს: 1, 3, 5, 7, 9


///////////////////////////////////////
// 3. do-while ციკლი
///////////////////////////////////////

// do-while ციკლი — ჯერ ასრულებს კოდს, მერე ამოწმებს პირობას
// ეს ნიშნავს, რომ კოდი ყოველთვის მინიმუმ ერთხელ შესრულდება!

// სინტაქსი:
// do {
//   კოდი
// } while (პირობა);

// 📌 ძირითადი მაგალითი
let count = 1;
do {
  console.log(`do-while: ${count}`);
  count++;
} while (count <= 5);
// გამოიტანს: 1, 2, 3, 4, 5

// 📌 მთავარი განსხვავება while-სგან:
// while — ჯერ ამოწმებს, მერე ასრულებს (შეიძლება 0-ჯერ შესრულდეს)
// do-while — ჯერ ასრულებს, მერე ამოწმებს (მინიმუმ 1-ჯერ ყოველთვის)

// მაგალითი სადაც განსხვავება ჩანს:
let x = 10;

// while — პირობა false-ა თავიდანვე, არ შესრულდება
while (x < 5) {
  console.log('while: ეს არ დაიბეჭდება');
  x++;
}

// do-while — პირობა false-ა, მაგრამ ერთხელ მაინც შესრულდება!
let y = 10;
do {
  console.log('do-while: ეს ერთხელ დაიბეჭდება!');
  y++;
} while (y < 5);

// 📌 პრაქტიკული მაგალითი: მენიუ (სიმულაცია)
// ეს კარგი მაგალითია do-while-ისთვის, რადგან მენიუ
// მინიმუმ ერთხელ უნდა ჩანდეს
const menuOptions = ['პიცა', 'ბურგერი', 'სალათი', 'გასვლა'];
let choice = 0; // სიმულაცია — რეალურში prompt() იქნებოდა

do {
  choice = Math.trunc(Math.random() * menuOptions.length);
  console.log(`არჩეული: ${menuOptions[choice]}`);
} while (menuOptions[choice] !== 'გასვლა');
console.log('მენიუდან გამოსვლა!');

// 📌 მაგალითი: შემთხვევითი რიცხვის გენერაცია, სანამ 7-ს არ მიიღებ
let randomNum;
let attempts = 0;
do {
  randomNum = Math.trunc(Math.random() * 10) + 1;
  attempts++;
  console.log(`მცდელობა ${attempts}: ${randomNum}`);
} while (randomNum !== 7);
console.log(`7 მოიძებნა ${attempts} მცდელობის შემდეგ!`);


///////////////////////////////////////
// 4. forEach ციკლი
///////////////////////////////////////

// forEach — მასივის მეთოდი, რომელიც callback ფუნქციას
// იძახებს მასივის ყველა ელემენტისთვის

// სინტაქსი: array.forEach(function(element, index, array) { ... })

// 📌 ძირითადი მაგალითი
const fruits = ['ვაშლი', 'ბანანი', 'ფორთოხალი', 'ყურძენი'];

fruits.forEach(function (fruit) {
  console.log(`მე მიყვარს ${fruit}`);
});
// გამოიტანს:
// მე მიყვარს ვაშლი
// მე მიყვარს ბანანი
// მე მიყვარს ფორთოხალი
// მე მიყვარს ყურძენი

// 📌 forEach ინდექსითურთ
fruits.forEach(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});
// 1. ვაშლი
// 2. ბანანი
// 3. ფორთოხალი
// 4. ყურძენი

// 📌 arrow ფუნქციით (მოკლე ჩაწერა)
fruits.forEach((fruit, i) => console.log(`${i}: ${fruit}`));

// 📌 forEach vs for ციკლი — შედარება

// for ციკლით:
for (let i = 0; i < fruits.length; i++) {
  console.log(`for: ${fruits[i]}`);
}

// forEach-ით (უფრო სუფთა და წასაკითხი):
fruits.forEach(fruit => console.log(`forEach: ${fruit}`));

// 📌 მნიშვნელოვანი განსხვავებები:
// 1. forEach-ში break და continue არ მუშაობს!
// 2. forEach ყოველთვის მთელ მასივს გაივლის
// 3. forEach არაფერს აბრუნებს (undefined)
// 4. for ციკლი უფრო მოქნილია, forEach — უფრო სუფთა

// 📌 პრაქტიკული მაგალითი — ბანკის ტრანზაქციები
const transactions = [200, -150, 400, -50, 100, -200];

transactions.forEach(function (transaction, index) {
  const type = transaction > 0 ? 'შემოსავალი' : 'ხარჯი';
  console.log(
    `ტრანზაქცია ${index + 1}: ${type} — ${Math.abs(transaction)} ლარი`
  );
});


///////////////////////////////////////
// 5. სტრინგის მეთოდები (String Methods)
///////////////////////////////////////

const airline = 'Georgian Airways';
const plane = 'A320';

// 📌 length — სტრინგის სიგრძე
console.log(airline.length); // 16
console.log('Hello'.length); // 5

// 📌 indexOf / lastIndexOf — სიმბოლოს ან ქვესტრინგის პოზიცია
console.log(airline.indexOf('o')); // 2 (პირველი 'o')
console.log(airline.lastIndexOf('a')); // 14 (ბოლო 'a')
console.log(airline.indexOf('Airways')); // 9
console.log(airline.indexOf('xyz')); // -1 (ვერ იპოვა)

// 📌 slice() — სტრინგის ნაწილის ამოჭრა (ახალი სტრინგი, ორიგინალი არ იცვლება)
console.log(airline.slice(9)); // 'Airways' (მე-9 ინდექსიდან ბოლომდე)
console.log(airline.slice(0, 8)); // 'Georgian' (0-დან 8-მდე, 8 არ შედის)
console.log(airline.slice(-7)); // 'Airways' (ბოლოდან 7 სიმბოლო)
console.log(airline.slice(1, -1)); // 'eorgian Airway' (პირველის და ბოლოს გარეშე)

// 📌 toUpperCase / toLowerCase — რეგისტრის შეცვლა
console.log(airline.toUpperCase()); // 'GEORGIAN AIRWAYS'
console.log(airline.toLowerCase()); // 'georgian airways'

// პრაქტიკული მაგალითი: სახელის ფორმატირება
const passenger = '  gEoRgE  ';
const formatted =
  passenger.trim().toLowerCase().slice(0, 1).toUpperCase() +
  passenger.trim().toLowerCase().slice(1);
console.log(formatted); // 'George'

// 📌 trim() — შუალედების წაშლა დასაწყისიდან და ბოლოდან
console.log('  Hello  '.trim()); // 'Hello'
console.log('  Hello  '.trimStart()); // 'Hello  '
console.log('  Hello  '.trimEnd()); // '  Hello'

// 📌 replace() — სტრინგში ჩანაცვლება
const priceGe = '350,99₾';
const priceUS = priceGe.replace('₾', '$').replace(',', '.');
console.log(priceUS); // '350.99$'

// replace მხოლოდ პირველ დამთხვევას ცვლის
const announcement = 'გთხოვთ, გადით კარი 23-დან! კარი 23!';
console.log(announcement.replace('კარი', 'ჭიშკარი'));
// 'გთხოვთ, გადით ჭიშკარი 23-დან! კარი 23!' — მხოლოდ პირველი შეიცვალა

// replaceAll — ყველა დამთხვევას ცვლის
console.log(announcement.replaceAll('კარი', 'ჭიშკარი'));
// 'გთხოვთ, გადით ჭიშკარი 23-დან! ჭიშკარი 23!'

// 📌 includes / startsWith / endsWith — შემოწმება (აბრუნებს boolean)
console.log(airline.includes('Airways')); // true
console.log(airline.includes('xyz')); // false
console.log(airline.startsWith('Geo')); // true
console.log(airline.endsWith('ways')); // true

// პრაქტიკული მაგალითი: ბარგის შემოწმება
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('დანა') || baggage.includes('იარაღი')) {
    console.log('თქვენ არ გაქვთ აფრენის უფლება!');
  } else {
    console.log('კეთილი იყოს თქვენი ფრენა!');
  }
};

checkBaggage('ლეპტოპი, საკვები, წიგნი');
checkBaggage('წინდები, დანა, სათვალე');

// 📌 split() — სტრინგის გაყოფა მასივად
console.log('a+very+nice+string'.split('+')); // ['a', 'very', 'nice', 'string']
console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName); // 'Jonas'
console.log(lastName); // 'Schmedtmann'

// 📌 join() — მასივის გაერთიანება სტრინგად (split-ის საპირისპირო)
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(' - ')); // 'Fire - Air - Water'
console.log(elements.join(', ')); // 'Fire, Air, Water'

// 📌 repeat() — სტრინგის გამეორება
console.log('ha '.repeat(3)); // 'ha ha ha '
console.log('⭐'.repeat(5)); // '⭐⭐⭐⭐⭐'

// პრაქტიკული მაგალითი
const planesInLine = function (n) {
  console.log(`რიგშია ${n} თვითმფრინავი ${'✈️'.repeat(n)}`);
};
planesInLine(3);
planesInLine(7);

// 📌 padStart / padEnd — სტრინგის შევსება სასურველ სიგრძემდე
const message = 'Hello';
console.log(message.padStart(10, '*')); // '*****Hello'
console.log(message.padEnd(10, '-')); // 'Hello-----'
console.log(message.padStart(10, '*').padEnd(15, '*')); // '*****Hello*****'

// პრაქტიკული მაგალითი: საბანკო ბარათის ნომრის დამალვა
const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4337846386647890)); // '************7890'
console.log(maskCreditCard('3345622289901287')); // '************1287'


///////////////////////////////////////
// 6. მასივის მეთოდი: map()
///////////////////////////////////////

// map() — ქმნის ახალ მასივს, ყოველ ელემენტზე ფუნქციის გამოყენებით
// ორიგინალი მასივი არ იცვლება!

// სინტაქსი: const newArray = array.map(function(element, index, array) { return ... })

// 📌 ძირითადი მაგალითი — რიცხვების გაორმაგება
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] — ორიგინალი არ შეცვლილა!

// 📌 arrow ფუნქციით (მოკლე ფორმა)
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// 📌 პრაქტიკული მაგალითი — ევროდან ლარში გადაყვანა
const eurPrices = [10, 25, 50, 100];
const exchangeRate = 2.95;
const gelPrices = eurPrices.map(price => price * exchangeRate);
console.log(gelPrices); // [29.5, 73.75, 147.5, 295]

// 📌 map ინდექსით
const descriptions = eurPrices.map(
  (price, i) => `ნივთი ${i + 1}: ${price}€ = ${(price * exchangeRate).toFixed(2)}₾`
);
console.log(descriptions);

// 📌 map vs forEach — მთავარი განსხვავება:
// map() — აბრუნებს ახალ მასივს
// forEach() — არაფერს აბრუნებს (undefined), მხოლოდ side effect-ებისთვის

// 📌 სტრინგების ტრანსფორმაცია
const names = ['george', 'nino', 'david'];
const capitalized = names.map(
  name => name[0].toUpperCase() + name.slice(1)
);
console.log(capitalized); // ['George', 'Nino', 'David']


///////////////////////////////////////
// 7. მასივის მეთოდი: filter()
///////////////////////////////////////

// filter() — ქმნის ახალ მასივს მხოლოდ იმ ელემენტებით,
// რომლებიც აკმაყოფილებენ პირობას

// სინტაქსი: const filtered = array.filter(function(element) { return condition })

// 📌 ძირითადი მაგალითი — ლუწი რიცხვების გაფილტვრა
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allNumbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 📌 რიცხვები, რომლებიც 5-ზე მეტია
const bigNumbers = allNumbers.filter(num => num > 5);
console.log(bigNumbers); // [6, 7, 8, 9, 10]

// 📌 პრაქტიკული მაგალითი — ბანკის ტრანზაქციები
const movements = [200, -150, 400, -50, 100, -200, 300];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits); // [200, 400, 100, 300]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // [-150, -50, -200]

// 📌 სტრინგების ფილტრაცია
const words = ['hello', 'world', 'hi', 'hey', 'JavaScript', 'code'];
const longWords = words.filter(word => word.length > 4);
console.log(longWords); // ['hello', 'world', 'JavaScript']

// 📌 filter + map ერთად (ჩეინინგი / chaining)
// ჯერ ვფილტრავთ შემოსავლებს, მერე ვაკონვერტირებთ ლარიდან ევროში
const depositsInEur = movements
  .filter(mov => mov > 0)
  .map(mov => mov / 2.95);
console.log(depositsInEur);


///////////////////////////////////////
// 8. მასივის მეთოდი: find() და indexOf()
///////////////////////////////////////

// find() — აბრუნებს პირველ ელემენტს, რომელიც აკმაყოფილებს პირობას
// indexOf() — აბრუნებს ელემენტის ინდექსს (პოზიციას)

// 📌 indexOf — პრიმიტიული მნიშვნელობებისთვის
const arr = [10, 20, 30, 40, 50];
console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(99)); // -1 (ვერ იპოვა)

// 📌 find — პირველი ელემენტი, რომელიც აკმაყოფილებს პირობას
const firstBig = arr.find(num => num > 25);
console.log(firstBig); // 30 (პირველი, რომელიც > 25)

// 📌 find vs filter:
// find() — აბრუნებს ერთ ელემენტს (პირველს)
// filter() — აბრუნებს მასივს ყველა შესაბამისი ელემენტით

// 📌 find ობიექტების მასივში (ყველაზე ხშირი გამოყენება)
const accounts = [
  { owner: 'George', balance: 5000 },
  { owner: 'Nino', balance: 1200 },
  { owner: 'David', balance: 8500 },
  { owner: 'Mariam', balance: 300 },
];

const david = accounts.find(acc => acc.owner === 'David');
console.log(david); // { owner: 'David', balance: 8500 }

const richAccount = accounts.find(acc => acc.balance > 5000);
console.log(richAccount); // { owner: 'David', balance: 8500 }

// 📌 findIndex — ელემენტის ინდექსი პირობით (indexOf-ის ანალოგი, მაგრამ callback-ით)
const davidIndex = accounts.findIndex(acc => acc.owner === 'David');
console.log(davidIndex); // 2

// 📌 includes vs find vs indexOf:
// includes — boolean: არის თუ არა (true/false)
// indexOf — რიცხვი: რომელ პოზიციაზეა (-1 თუ არ არის)
// find — ელემენტი: რომელი ელემენტი აკმაყოფილებს პირობას


///////////////////////////////////////
// 9. მასივის მეთოდი: sort()
///////////////////////////////////////

// sort() — ალაგებს მასივს ადგილზე (ცვლის ორიგინალ მასივს!)

// ⚠️ ყურადღება: sort() ორიგინალ მასივს ცვლის (mutates)!

// 📌 სტრინგების სორტირება (ნაგულისხმევად ანბანის მიხედვით)
const owners = ['David', 'Nino', 'George', 'Ana'];
owners.sort();
console.log(owners); // ['Ana', 'David', 'George', 'Nino']

// 📌 რიცხვების სორტირება — ⚠️ ნაგულისხმევი sort არ მუშაობს!
const nums = [3, 1, 100, 25, 10];
nums.sort();
console.log(nums); // [1, 10, 100, 25, 3] — არასწორი! სტრინგებად ადარებს!

// 📌 რიცხვების სწორი სორტირება — compare ფუნქცია
const numbers2 = [3, 1, 100, 25, 10];

// ზრდადობით (ascending)
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 3, 10, 25, 100]

// კლებადობით (descending)
numbers2.sort((a, b) => b - a);
console.log(numbers2); // [100, 25, 10, 3, 1]

// 📌 როგორ მუშაობს compare ფუნქცია:
// (a, b) => a - b
// თუ შედეგი < 0: a წინ მოდის
// თუ შედეგი > 0: b წინ მოდის
// თუ შედეგი === 0: თანმიმდევრობა არ იცვლება

// 📌 ობიექტების სორტირება
const students = [
  { name: 'Ana', grade: 85 },
  { name: 'David', grade: 92 },
  { name: 'Nino', grade: 78 },
  { name: 'George', grade: 95 },
];

// ქულის მიხედვით ზრდადობით
students.sort((a, b) => a.grade - b.grade);
console.log(students);
// [{Nino, 78}, {Ana, 85}, {David, 92}, {George, 95}]

// ქულის მიხედვით კლებადობით
students.sort((a, b) => b.grade - a.grade);
console.log(students);
// [{George, 95}, {David, 92}, {Ana, 85}, {Nino, 78}]

// 📌 ორიგინალის შენარჩუნება — slice() + sort()
const original = [5, 2, 8, 1];
const sorted = original.slice().sort((a, b) => a - b);
console.log(original); // [5, 2, 8, 1] — არ შეცვლილა
console.log(sorted); // [1, 2, 5, 8]


///////////////////////////////////////
// 10. მასივის მეთოდი: reduce()
///////////////////////////////////////

// reduce() — მასივს "ამცირებს" ერთ მნიშვნელობამდე
// (ჯამი, საშუალო, მაქსიმუმი, სტრინგი, ობიექტი — ნებისმიერი)

// სინტაქსი: array.reduce(function(accumulator, current, index, array) { }, initialValue)

// 📌 ძირითადი მაგალითი — ჯამი
const amounts = [100, 200, 300, 400];
const total = amounts.reduce(function (acc, cur) {
  console.log(`acc: ${acc}, cur: ${cur}`);
  return acc + cur;
}, 0);
console.log(`ჯამი: ${total}`); // 1000

// ეტაპობრივად:
// acc=0,   cur=100 → return 100
// acc=100, cur=200 → return 300
// acc=300, cur=300 → return 600
// acc=600, cur=400 → return 1000

// 📌 arrow ფუნქციით (მოკლე ფორმა)
const sum = amounts.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 1000

// 📌 მაქსიმუმის პოვნა
const values = [23, 11, 64, 18, 45];
const max = values.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  values[0]
);
console.log(`მაქსიმუმი: ${max}`); // 64

// 📌 მინიმუმის პოვნა
const min = values.reduce(
  (acc, cur) => (cur < acc ? cur : acc),
  values[0]
);
console.log(`მინიმუმი: ${min}`); // 11

// 📌 საშუალოს გამოთვლა
const grades = [85, 90, 78, 92, 88];
const average = grades.reduce((acc, cur) => acc + cur, 0) / grades.length;
console.log(`საშუალო: ${average}`); // 86.6

// 📌 ელემენტების დათვლა
const votes = ['კი', 'არა', 'კი', 'კი', 'არა', 'კი'];
const voteCounts = votes.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(voteCounts); // { კი: 4, არა: 2 }

// 📌 filter + map + reduce — ჩეინინგი
// ყველა შემოსავლის ჯამი ევროში
const totalDepositsEur = movements
  .filter(mov => mov > 0)
  .map(mov => mov / 2.95)
  .reduce((acc, cur) => acc + cur, 0);
console.log(`ჯამური შემოსავალი ევროში: ${totalDepositsEur.toFixed(2)}`);


///////////////////////////////////////
// 11. მასივის მეთოდები: concat() და join()
///////////////////////////////////////

// concat() — აერთიანებს ორ ან მეტ მასივს ახალ მასივში
// (ორიგინალი მასივები არ იცვლება)

// 📌 ძირითადი მაგალითი
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
console.log(arr1); // [1, 2, 3] — არ შეცვლილა

// 📌 რამდენიმე მასივის გაერთიანება
const arr3 = [7, 8, 9];
const all = arr1.concat(arr2, arr3);
console.log(all); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 📌 spread ოპერატორით იგივე შედეგი (თანამედროვე ხერხი)
const combined2 = [...arr1, ...arr2, ...arr3];
console.log(combined2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 📌 join() — მასივს სტრინგად გარდაქმნის, ელემენტებს შორის სეპარატორით
const letters = ['H', 'e', 'l', 'l', 'o'];
console.log(letters.join('')); // 'Hello'
console.log(letters.join('-')); // 'H-e-l-l-o'
console.log(letters.join(' ')); // 'H e l l o'

// 📌 split + join კომბინაცია — სტრინგის ტრანსფორმაცია
const sentence = 'hello world from javascript';
const titleCase = sentence
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(titleCase); // 'Hello World From Javascript'

// 📌 პრაქტიკული მაგალითი — CSV ფორმატის შექმნა
const studentData = [
  ['სახელი', 'ქულა', 'სტატუსი'],
  ['ანა', '95', 'ჩაბარებული'],
  ['დავითი', '82', 'ჩაბარებული'],
  ['ნინო', '55', 'ჩაჭრილი'],
];

const csv = studentData.map(row => row.join(',')).join('\n');
console.log(csv);
// სახელი,ქულა,სტატუსი
// ანა,95,ჩაბარებული
// დავითი,82,ჩაბარებული
// ნინო,55,ჩაჭრილი


///////////////////////////////////////
// 12. მასივებზე დაფუძნებული სტრუქტურები
///////////////////////////////////////

// მასივი შეიძლება გამოვიყენოთ სხვადასხვა მონაცემთა სტრუქტურის
// სიმულაციისთვის

// 📌 Stack (სტეკი) — LIFO (Last In, First Out)
// ბოლოს დამატებული პირველი ამოდის
// push() — ამატებს ზემოდან
// pop() — ამოიღებს ზემოდან

console.log('--- Stack ---');
const stack = [];
stack.push('წიგნი 1');
stack.push('წიგნი 2');
stack.push('წიგნი 3');
console.log(stack); // ['წიგნი 1', 'წიგნი 2', 'წიგნი 3']

const topBook = stack.pop(); // ბოლო დამატებული = პირველი ამოსული
console.log(topBook); // 'წიგნი 3'
console.log(stack); // ['წიგნი 1', 'წიგნი 2']

// 📌 წარმოიდგინეთ: წიგნების გროვა — ზემოდან დებ, ზემოდან იღებ

// 📌 Queue (რიგი) — FIFO (First In, First Out)
// პირველი დამატებული პირველი ამოდის
// push() — ამატებს ბოლოში (რიგის ბოლოს დგება)
// shift() — ამოიღებს დასაწყისიდან (რიგიდან პირველი გამოდის)

console.log('--- Queue ---');
const queue = [];
queue.push('მომხმარებელი 1');
queue.push('მომხმარებელი 2');
queue.push('მომხმარებელი 3');
console.log(queue); // ['მომხმარებელი 1', 'მომხმარებელი 2', 'მომხმარებელი 3']

const firstInLine = queue.shift(); // პირველი დამატებული = პირველი ამოსული
console.log(firstInLine); // 'მომხმარებელი 1'
console.log(queue); // ['მომხმარებელი 2', 'მომხმარებელი 3']

// 📌 წარმოიდგინეთ: მაღაზიის რიგი — პირველი ვინც დადგა, პირველი ემსახურება

// 📌 პრაქტიკული მაგალითი: Undo ისტორია (Stack)
const history = [];
const addAction = action => {
  history.push(action);
  console.log(`შესრულდა: ${action}`);
};
const undo = () => {
  const lastAction = history.pop();
  console.log(`გაუქმდა: ${lastAction}`);
};

addAction('ტექსტი დაწერე');
addAction('ფერი შეცვალე');
addAction('სურათი ჩასვი');
undo(); // გაუქმდა: სურათი ჩასვი
undo(); // გაუქმდა: ფერი შეცვალე
console.log(history); // ['ტექსტი დაწერე']

// 📌 პრაქტიკული მაგალითი: ამოცანების რიგი (Queue)
const taskQueue = [];
const addTask = task => {
  taskQueue.push(task);
  console.log(`დაემატა: ${task}`);
};
const processNext = () => {
  const task = taskQueue.shift();
  console.log(`მუშავდება: ${task}`);
};

addTask('მეილის გაგზავნა');
addTask('ფაილის შენახვა');
addTask('მონაცემების სინქრონიზაცია');
processNext(); // მუშავდება: მეილის გაგზავნა
processNext(); // მუშავდება: ფაილის შენახვა
console.log(taskQueue); // ['მონაცემების სინქრონიზაცია']


///////////////////////////////////////
// 13. ჩელენჯები
///////////////////////////////////////


////////////////////////////////////
// ჩელენჯი #1 — სტრინგების ტრანსფორმატორი
////////////////////////////////////

/*
შექმენით ფუნქცია 'transformString', რომელიც იღებს სტრინგს და:
1. შლის თავსა და ბოლოში ზედმეტ შუალედებს (trim)
2. პირველ ასოს ზედა რეგისტრში აქცევს
3. ყოველ სიტყვას შორის ზუსტად ერთ შუალედს ტოვებს
4. აბრუნებს ტრანსფორმირებულ სტრინგს

სატესტო მონაცემები:
'  hello   world  ' → 'Hello world'
'  javaScript   is   GREAT  ' → 'Javascript is great'

მინიშნება: გამოიყენეთ trim(), toLowerCase(), split(), filter(), join()
split(' ') ცარიელ სტრინგებსაც მოგცემთ — filter-ით გაფილტრეთ

წარმატებები!
*/

// const transformString = function (str) {
//   const words = str.trim().toLowerCase().split(' ').filter(w => w !== '');
//   words[0] = words[0][0].toUpperCase() + words[0].slice(1);
//   return words.join(' ');
// };
// console.log(transformString('  hello   world  '));
// console.log(transformString('  javaScript   is   GREAT  '));


////////////////////////////////////
// ჩელენჯი #2 — სტუდენტების ანალიზი
////////////////////////////////////

/*
გაქვთ სტუდენტების ქულების მასივი:
const scores = [45, 82, 90, 55, 73, 61, 95, 38, 88, 70];

1. გამოიყენეთ filter(), რომ მიიღოთ ჩაბარებული (>= 60) სტუდენტების ქულები
2. გამოიყენეთ map(), რომ თითოეულ ჩაბარებულ ქულას ასოითი შეფასება მისცეთ:
   >= 90: 'A', >= 80: 'B', >= 70: 'C', >= 60: 'D'
3. გამოიყენეთ reduce(), რომ გამოთვალოთ ჩაბარებულთა საშუალო ქულა
4. დაბეჭდეთ: "ჩაბარებულთა რაოდენობა: X, საშუალო: Y, შეფასებები: [A, B, ...]"

წარმატებები!
*/

// const scores = [45, 82, 90, 55, 73, 61, 95, 38, 88, 70];
// const passing = scores.filter(s => s >= 60);
// const letterGrades = passing.map(s => {
//   if (s >= 90) return 'A';
//   if (s >= 80) return 'B';
//   if (s >= 70) return 'C';
//   return 'D';
// });
// const avg = passing.reduce((acc, cur) => acc + cur, 0) / passing.length;
// console.log(`ჩაბარებულთა რაოდენობა: ${passing.length}, საშუალო: ${avg.toFixed(1)}, შეფასებები: [${letterGrades.join(', ')}]`);


////////////////////////////////////
// ჩელენჯი #3 — მასივების დამუშავება
////////////////////////////////////

/*
გაქვთ ორი მაღაზიის პროდუქტების მასივი:
const shop1 = ['პური', 'რძე', 'ყველი', 'კარაქი'];
const shop2 = ['ვაშლი', 'რძე', 'წყალი', 'პური', 'ბანანი'];

1. გააერთიანეთ ორი მასივი concat()-ით
2. sort()-ით დაალაგეთ ანბანის მიხედვით
3. filter()-ით ამოიღეთ დუბლიკატები (მინიშნება: indexOf-ის პოზიცია
   უნდა ემთხვეოდეს მიმდინარე ინდექსს)
4. map()-ით თითოეულს დაუმატეთ ნომერი: "1. პური"
5. join()-ით გააერთიანეთ სტრინგად ახალ ხაზებზე ('\n')
6. console.log-ით დაბეჭდეთ საბოლოო სია

წარმატებები!
*/

// const shop1 = ['პური', 'რძე', 'ყველი', 'კარაქი'];
// const shop2 = ['ვაშლი', 'რძე', 'წყალი', 'პური', 'ბანანი'];
// const result = shop1
//   .concat(shop2)
//   .sort()
//   .filter((item, index, arr) => arr.indexOf(item) === index)
//   .map((item, i) => `${i + 1}. ${item}`)
//   .join('\n');
// console.log(result);


////////////////////////////////////
// ჩელენჯი #4 — do-while თამაში
////////////////////////////////////

/*
შექმენით "გამოიცანი რიცხვი" თამაშის სიმულაცია:

1. შექმენით საიდუმლო რიცხვი 1-დან 10-მდე
2. გამოიყენეთ do-while ციკლი "გამოცნობისთვის":
   - ყოველ იტერაციაში შექმენით შემთხვევითი guess 1-დან 10-მდე
   - დაბეჭდეთ: "მცდელობა X: გამოიცანა Y"
   - თუ guess === secret, ციკლი შეჩერდება
3. ბოლოს დაბეჭდეთ: "გამოცანა! საიდუმლო რიცხვი Z იყო! X მცდელობა დასჭირდა"

მინიშნება: do-while ამ შემთხვევაში სწორი არჩევანია, რადგან
მინიმუმ ერთხელ მაინც უნდა "გამოცნო"

წარმატებები!
*/

// const secret = Math.trunc(Math.random() * 10) + 1;
// let guess;
// let tries = 0;
// do {
//   guess = Math.trunc(Math.random() * 10) + 1;
//   tries++;
//   console.log(`მცდელობა ${tries}: გამოიცანა ${guess}`);
// } while (guess !== secret);
// console.log(`გამოცანა! საიდუმლო რიცხვი ${secret} იყო! ${tries} მცდელობა დასჭირდა`);
