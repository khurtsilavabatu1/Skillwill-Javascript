////////////////////////////////////
// DOM-ის საფუძვლები
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


'use strict';


/*
═══════════════════════════════════════════════════════════════
1. რა არის DOM? (DOCUMENT OBJECT MODEL)
═══════════════════════════════════════════════════════════════

DOM (Document Object Model) — ბრაუზერის მიერ HTML დოკუმენტის
ობიექტური წარმოდგენა. როცა ბრაუზერი HTML ფაილს იტვირთავს,
ის HTML-ის ტექსტს აანალიზებს (parses) და ქმნის ობიექტების
ხის სტრუქტურას (tree), რომელსაც DOM ხე ეწოდება.

DOM ხის სტრუქტურა:

  document
    └── html  (document.documentElement)
          ├── head  (document.head)
          └── body  (document.body)
                ├── h1#main-title
                ├── div.container
                │     ├── p.intro
                │     └── ul#student-list
                └── script

კვანძები vs ელემენტები:
  - კვანძი (Node) — DOM ხის ნებისმიერი წერტილი
    (ელემენტი, ტექსტი, კომენტარი, თავად document და სხვა)
  - ელემენტი (Element) — კვანძის ერთ-ერთი ტიპი, რომელიც
    HTML ტეგს წარმოადგენს (<div>, <p>, <h1> და ა.შ.)
  - ყოველი ელემენტი კვანძია, მაგრამ ყოველი კვანძი ელემენტი არ არის

მნიშვნელოვანი: DOM არ არის JavaScript-ის ნაწილი!
DOM არის Web API, რომელსაც ბრაუზერი უზრუნველყოფს.
*/

// --- document ობიექტი — DOM-ის შესვლის წერტილი (entry point) ---

console.log('Document ობიექტი:', document);
console.log('Document-ის ტიპი:', typeof document); // 'object'

// document.documentElement — <html> ელემენტი
console.log('HTML ელემენტი:', document.documentElement);

// document.head და document.body — პირდაპირი წვდომა
console.log('Head ელემენტი:', document.head);
console.log('Body ელემენტი:', document.body);

// document.title — გვერდის სათაური (<title> ტეგის შიგთავსი)
console.log('გვერდის სათაური:', document.title);

// --- კვანძების ტიპები ---
console.log('body-ის კვანძის ტიპი:', document.body.nodeType);  // 1 (ELEMENT_NODE)

// childNodes — ყველა შვილ კვანძს (ტექსტურის ჩათვლით)
// children — მხოლოდ ელემენტ-კვანძებს
console.log('შვილი კვანძები:', document.body.childNodes);
console.log('შვილი ელემენტები:', document.body.children);


/*
═══════════════════════════════════════════════════════════════
2. getElementById — ელემენტის მოძებნა ID-ით
═══════════════════════════════════════════════════════════════

document.getElementById(id)
  - არგუმენტად id-ის სტრიქონს ღებულობს (# სიმბოლის გარეშე)
  - აბრუნებს ერთ Element ობიექტს, ან null-ს თუ ვერ იპოვა
  - id უნიკალური უნდა იყოს მთელ HTML დოკუმენტში
  - ყველაზე სწრაფი მეთოდია ელემენტის მოსაძებნად
*/

// --- ელემენტის მოძებნა და ტექსტის წაკითხვა ---

const mainTitle = document.getElementById('main-title');
console.log('მთავარი სათაური:', mainTitle); // Element ან null

const studentName = document.getElementById('student-name');
console.log('სტუდენტის სახელი:', studentName.textContent);

// --- ტექსტის შეცვლა ---

const greeting = document.getElementById('greeting');
greeting.textContent = 'გამარჯობა, Giorgi!';

// --- null-ის შემოწმება (თუ ელემენტი ვერ მოიძებნა) ---

const nonExistent = document.getElementById('not-real-id');
console.log('არარსებული ელემენტი:', nonExistent); // null

if (nonExistent) {
  nonExistent.textContent = 'ტექსტი';
} else {
  console.log('ელემენტი ვერ მოიძებნა!');
}

// --- სტილის შეცვლა ---

const outputBox = document.getElementById('output-box');
outputBox.textContent = 'Nino წარმატებით დარეგისტრირდა!';
outputBox.style.backgroundColor = '#e8f5e9';
outputBox.style.color = '#2e7d32';

// --- input ველის წაკითხვა (.value) ---

const inputAge = document.getElementById('input-age');
console.log('შეყვანილი ასაკი:', inputAge.value);


/*
═══════════════════════════════════════════════════════════════
3. querySelector — CSS სელექტორით ელემენტის მოძებნა
═══════════════════════════════════════════════════════════════

document.querySelector(cssSelector)
  - არგუმენტად CSS სელექტორს ღებულობს (სტრიქონის სახით)
  - პირველ შესაბამის ელემენტს აბრუნებს, ან null-ს
  - უნივერსალურია — ნებისმიერი CSS სელექტორი მუშაობს

CSS სელექტორების ტიპები:
  '#myId'           — ID-ით (ჰეშის სიმბოლოთი)
  '.myClass'        — კლასით (წერტილით)
  'div'             — ტეგის სახელით
  'div.card'        — ტეგი + კლასი
  'div.card > p'    — პირდაპირი შვილი
  '[data-id="5"]'   — ატრიბუტით
*/

// --- ID-ით მოძებნა (# სიმბოლოთი) ---

const titleByQuery = document.querySelector('#main-title');
console.log('სათაური querySelector-ით:', titleByQuery.textContent);

// --- კლასით მოძებნა (. სიმბოლოთი) ---
// მხოლოდ პირველ ელემენტს აბრუნებს

const firstCard = document.querySelector('.card');
console.log('პირველი ბარათი:', firstCard);

// --- ტეგის სახელით ---

const firstParagraph = document.querySelector('p');
console.log('პირველი პარაგრაფი:', firstParagraph.textContent);

// --- კომბინირებული სელექტორი (ტეგი + კლასი) ---

const introText = document.querySelector('p.intro');
console.log('ინტრო ტექსტი:', introText.textContent);

// --- პირდაპირი შვილის სელექტორი (>) ---

const cardParagraph = document.querySelector('div.card > p');
console.log('ბარათის პარაგრაფი:', cardParagraph.textContent);

// --- ატრიბუტის სელექტორი ---

const emailInput = document.querySelector('[type="email"]');
console.log('ელ.ფოსტის ველი:', emailInput);

const dataElement = document.querySelector('[data-role="student"]');
console.log('სტუდენტის ელემენტი:', dataElement);

// --- n-ური შვილის სელექტორი ---

const secondLi = document.querySelector('ul li:nth-child(2)');
console.log('მეორე სიის ელემენტი:', secondLi.textContent);

// --- null შემოწმება ---

const maybeNull = document.querySelector('.nonexistent-class');
if (maybeNull) {
  maybeNull.textContent = 'ნაპოვნია!';
} else {
  console.log('ელემენტი ამ კლასით ვერ მოიძებნა');
}


/*
═══════════════════════════════════════════════════════════════
4. querySelectorAll — ყველა შესაბამისი ელემენტის მოძებნა
═══════════════════════════════════════════════════════════════

document.querySelectorAll(cssSelector)
  - CSS სელექტორს ღებულობს
  - აბრუნებს static NodeList-ს (ყველა შესაბამისი ელემენტი)
  - static: DOM-ის ცვლილება შემდგომ NodeList-ს არ ცვლის
  - NodeList-ს აქვს .forEach(), .length, ინდექსით წვდომა [i]
  - NodeList-ს არ აქვს .map(), .filter() — საჭიროა Array.from()
*/

// --- ყველა ელემენტის მოძებნა კლასით ---

const allCards = document.querySelectorAll('.card');
console.log('ბარათების რაოდენობა:', allCards.length);

// --- forEach ციკლი NodeList-ზე ---

allCards.forEach(function (card, index) {
  console.log(`ბარათი ${index + 1}:`, card.textContent);
});

// --- ინდექსით წვდომა ---

console.log('პირველი ბარათი:', allCards[0]);
console.log('ბოლო ბარათი:', allCards[allCards.length - 1]);

// --- ყველა სიის ელემენტი ---

const allListItems = document.querySelectorAll('#student-list li');
allListItems.forEach(function (item) {
  console.log('სტუდენტი:', item.textContent);
});

// --- NodeList-ის Array-ად გადაქცევა (map, filter გამოსაყენებლად) ---

const studentNames = Array.from(allListItems).map(function (item) {
  return item.textContent;
});
console.log('სახელები მასივად:', studentNames); // ['Giorgi', 'Nino', 'Dato', 'Ana']

// --- ცარიელი NodeList ---
// ვერ მოძებნის? — ცარიელ NodeList-ს აბრუნებს (არა null-ს!)

const noMatch = document.querySelectorAll('.nonexistent');
console.log('ცარიელი NodeList-ის სიგრძე:', noMatch.length); // 0


/*
═══════════════════════════════════════════════════════════════
5. getElementsByClassName — ელემენტების მოძებნა კლასით
═══════════════════════════════════════════════════════════════

document.getElementsByClassName(className)
  - კლასის სახელს ღებულობს (წერტილის გარეშე!)
  - აბრუნებს HTMLCollection-ს — live (ცოცხალ) კოლექციას
  - live: DOM-ში ელემენტის დამატება/წაშლა ავტომატურად განაახლებს
  - HTMLCollection-ზე forEach არ მუშაობს!
  - გამოიყენე for ციკლი ან Array.from()
*/

// --- კლასით მოძებნა ---

const cards = document.getElementsByClassName('card');
console.log('ბარათების რაოდენობა:', cards.length);

// --- for ციკლით იტერაცია (forEach არ მუშაობს!) ---

for (let i = 0; i < cards.length; i++) {
  console.log(`ბარათი ${i + 1}:`, cards[i].textContent);
}

// --- Array.from()-ით forEach-ის გამოყენება ---

Array.from(cards).forEach(function (card, index) {
  console.log(`ბარათი (forEach) ${index}:`, card.textContent);
});

// --- Live vs Static — მნიშვნელოვანი განსხვავება ---

const liveItems = document.getElementsByClassName('item');     // live
const staticItems = document.querySelectorAll('.item');         // static

console.log('ცვლილებამდე — live:', liveItems.length, 'static:', staticItems.length);

// DOM-ში ახალი ელემენტის დამატება
const newItem = document.createElement('div');
newItem.className = 'item';
newItem.textContent = 'ახალი ელემენტი';
document.body.appendChild(newItem);

console.log('ცვლილების შემდეგ — live:', liveItems.length, 'static:', staticItems.length);
// live რაოდენობა გაიზარდა! static იგივე დარჩა!

// --- forEach ცდა HTMLCollection-ზე (შეცდომა!) ---
// cards.forEach(function(card) { ... });
// TypeError: cards.forEach is not a function


/*
═══════════════════════════════════════════════════════════════
6. getElementsByTagName — ელემენტების მოძებნა ტეგით
═══════════════════════════════════════════════════════════════

document.getElementsByTagName(tagName)
  - ტეგის სახელს ღებულობს (მაგ. 'p', 'div', 'li')
  - აბრუნებს live HTMLCollection-ს
  - forEach არ მუშაობს — for ციკლი ან Array.from()
  - შეიძლება კონკრეტულ ელემენტზეც გამოძახდეს
*/

// --- ყველა პარაგრაფი გვერდზე ---

const allParagraphs = document.getElementsByTagName('p');
console.log('პარაგრაფების რაოდენობა:', allParagraphs.length);

for (let i = 0; i < allParagraphs.length; i++) {
  console.log(`პარაგრაფი ${i + 1}:`, allParagraphs[i].textContent);
}

// --- Array.from()-ით forEach ---

const allHeadings = document.getElementsByTagName('h2');
Array.from(allHeadings).forEach(function (heading) {
  console.log('სათაური:', heading.textContent);
});

// --- კონკრეტულ ელემენტში მოძებნა ---
// getElementsByTagName შეიძლება ნებისმიერ ელემენტზე გამოვიძახოთ

const container = document.getElementById('main-container');
const paragraphsInContainer = container.getElementsByTagName('p');
console.log('კონტეინერის პარაგრაფები:', paragraphsInContainer.length);
// მხოლოდ main-container-ის შიგნით არსებულ <p>-ებს იპოვის

// --- სიის ელემენტები კონკრეტულ ul-ში ---

const studentList = document.getElementById('student-list');
const studentsInList = studentList.getElementsByTagName('li');

for (let i = 0; i < studentsInList.length; i++) {
  console.log(`სტუდენტი ${i + 1}:`, studentsInList[i].textContent);
}


/*
═══════════════════════════════════════════════════════════════
7. innerHTML — HTML კონტენტის კითხვა და ჩაწერა
═══════════════════════════════════════════════════════════════

element.innerHTML
  - ელემენტის HTML შიგთავსს წაიკითხავს ან შეცვლის
  - HTML ტეგებს ამუშავებს — ტეგები რენდერ (გამოსახვა) ხდება
  - შეგიძლია მთელი HTML სტრუქტურა ჩაწერო ელემენტში

გაფრთხილება (XSS — Cross-Site Scripting):
  innerHTML-ის გამოყენება მომხმარებლის მონაცემებთან საშიშია!
  მომხმარებლის ტექსტისთვის ყოველთვის textContent გამოიყენე!
*/

// --- HTML შიგთავსის წაკითხვა ---

const cardElement = document.getElementById('info-card');
console.log('innerHTML (კითხვა):', cardElement.innerHTML);
// '<h3>Giorgi Beridze</h3><p>სტუდენტი, 22 წლის</p>'

// --- HTML შიგთავსის ჩაწერა ---

const resultDiv = document.getElementById('result');
resultDiv.innerHTML = '<h3>შედეგი</h3><p>Nino-ს ქულა: <strong>95</strong></p>';

// --- სიის შექმნა innerHTML-ით ---

const listContainer = document.getElementById('list-container');
listContainer.innerHTML = `
  <ul>
    <li>Giorgi — მათემატიკა</li>
    <li>Nino — ფიზიკა</li>
    <li>Dato — ქიმია</li>
  </ul>
`;

// --- innerHTML-ით დამატება (+= ოპერატორი) ---

const logDiv = document.getElementById('log');
logDiv.innerHTML += '<p>პირველი ჩანაწერი</p>';
logDiv.innerHTML += '<p><em>მეორე ჩანაწერი — დახრილი</em></p>';
// ყურადღება: += ხელახლა აანალიზებს მთელ innerHTML-ს — ნელია!

// --- XSS საფრთხე ---

const userInput = '<img src=x onerror="alert(\'hacked!\')">';

// ცუდი პრაქტიკა — მომხმარებლის ტექსტი innerHTML-ით:
// resultDiv.innerHTML = userInput; // მავნე კოდს გაუშვებს!

// კარგი პრაქტიკა — textContent:
resultDiv.textContent = userInput; // უბრალო ტექსტად აჩვენებს


/*
═══════════════════════════════════════════════════════════════
8. textContent — ტექსტის კითხვა და ჩაწერა
═══════════════════════════════════════════════════════════════

element.textContent
  - მხოლოდ ტექსტურ შიგთავსს წაიკითხავს ან შეცვლის
  - HTML ტეგებს არ ამუშავებს — ტექსტად გამოჩნდება (ესქეიფდება)
  - უსაფრთხოა მომხმარებლის შეყვანილი მონაცემებისთვის
*/

// --- ტექსტის წაკითხვა ---

const titleElement = document.getElementById('page-title');
console.log('ტექსტური შიგთავსი:', titleElement.textContent);

// --- ტექსტის ჩაწერა ---

const statusDisplay = document.getElementById('status');
statusDisplay.textContent = 'სტატუსი: აქტიური';

// --- ჩადგმული ელემენტებიდან ტექსტის წაკითხვა ---

const complexElement = document.getElementById('complex');
// <div id="complex"><strong>Dato</strong> — <em>პროგრამისტი</em></div>
console.log('textContent:', complexElement.textContent);
// 'Dato — პროგრამისტი' (ტეგების გარეშე)

// --- HTML ტეგების ესქეიფი ---

const safeDiv = document.getElementById('safe-output');
safeDiv.textContent = '<strong>ეს ტექსტია</strong>, არა HTML';
// ბრაუზერში: <strong>ეს ტექსტია</strong>, არა HTML — ტეგები არ ამუშავდება!

// --- მომხმარებლის input-ის უსაფრთხო ჩვენება ---

const userComment = '<script>alert("XSS!")</script>';
const commentDisplay = document.getElementById('comment');
commentDisplay.textContent = userComment;
// უბრალო ტექსტად აჩვენებს — სკრიპტი არ გაეშვება!

// --- template literal-ით ტექსტის კომბინაცია ---

const priceLabel = document.getElementById('price');
priceLabel.textContent = `${'ლეპტოპი'}: ${2500} ლარი`;


/*
═══════════════════════════════════════════════════════════════
9. innerHTML vs textContent — შედარება
═══════════════════════════════════════════════════════════════

innerHTML:                      textContent:
- ტეგებს ამუშავებს (რენდერავს)  - მხოლოდ ტექსტს ამუშავებს
- HTML ჩასმა შეიძლება           - ტეგებს ტექსტად აჩვენებს
- XSS-ის საფრთხე               - უსაფრთხოა
- ნელია (ხელახლა აანალიზებს)    - სწრაფია
*/

// --- გვერდიგვერდ შედარება: ჩაწერა ---

const box1 = document.getElementById('box-inner');
const box2 = document.getElementById('box-text');

// innerHTML — ტეგები ამუშავდება
box1.innerHTML = '<strong>Giorgi</strong> — <em>დეველოპერი</em>';
// ბრაუზერში: Giorgi (მუქი) — დეველოპერი (დახრილი)

// textContent — ტეგები ტექსტად გამოჩნდება
box2.textContent = '<strong>Giorgi</strong> — <em>დეველოპერი</em>';
// ბრაუზერში: <strong>Giorgi</strong> — <em>დეველოპერი</em>

// --- გვერდიგვერდ შედარება: წაკითხვა ---

const mixedContent = document.getElementById('mixed');
// <div id="mixed">სალამი, <strong>Ana</strong>!</div>

console.log('innerHTML:', mixedContent.innerHTML);
// 'სალამი, <strong>Ana</strong>!'  — HTML ტეგებიც ჩანს

console.log('textContent:', mixedContent.textContent);
// 'სალამი, Ana!'  — მხოლოდ ტექსტი, ტეგები გაქრა

// --- რომელი გამოვიყენოთ? ---

// HTML სტრუქტურის ჩასმა გჭირდება? → innerHTML
const profileCard = document.getElementById('profile');
profileCard.innerHTML = '<h4>Nino Kapanadze</h4><p>თბილისი</p>';

// უბრალო ტექსტი? → textContent
const scoreDisplay = document.getElementById('score');
scoreDisplay.textContent = 'ქულა: 87/100';

// მომხმარებლის input? → ყოველთვის textContent!
const searchQuery = document.getElementById('search-query');
searchQuery.textContent = `ძებნა: ${'<b>JavaScript</b>'}`;
// ბრაუზერში: ძებნა: <b>JavaScript</b> (უსაფრთხო)


/*
═══════════════════════════════════════════════════════════════
10. style თვისება — inline სტილები
═══════════════════════════════════════════════════════════════

element.style.propertyName
  - inline CSS სტილების კითხვა და ჩაწერა
  - CSS თვისებების სახელები camelCase-ით იწერება:
      background-color → backgroundColor
      font-size        → fontSize
      border-radius    → borderRadius
      margin-top       → marginTop
  - მნიშვნელობა ყოველთვის სტრიქონის სახითაა
  - .style მხოლოდ inline სტილებს კითხულობს!
    CSS ფაილიდან — getComputedStyle გამოიყენე
*/

// --- სტილის ჩაწერა ---

const demoBox = document.getElementById('demo-box');

demoBox.style.backgroundColor = '#1976d2';
demoBox.style.color = 'white';
demoBox.style.padding = '20px';
demoBox.style.borderRadius = '8px';
demoBox.style.fontSize = '18px';
demoBox.style.width = '300px';
demoBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';

// --- სტილის წაკითხვა (მხოლოდ inline) ---

console.log('ფონის ფერი:', demoBox.style.backgroundColor); // '#1976d2'
console.log('Font-size:', demoBox.style.fontSize);           // '18px'

// --- camelCase — CSS-დან JavaScript-ში ---

const exampleEl = document.getElementById('example');
exampleEl.style.fontWeight = 'bold';           // font-weight
exampleEl.style.borderBottom = '2px solid red'; // border-bottom

// --- style.cssText — რამდენიმე სტილის ერთბაშად ---
// ყურადღება: cssText ყველა არსებულ inline სტილს წაშლის!

const quickBox = document.getElementById('quick-box');
quickBox.style.cssText =
  'background-color: #ff9800; color: white; padding: 15px;';

// --- getComputedStyle — CSS ფაილიდან სტილის წაკითხვა ---
// .style მხოლოდ inline სტილებს კითხულობს
// getComputedStyle ყველა გამოთვლილ (computed) სტილს აბრუნებს

const styledElement = document.getElementById('styled-element');

console.log('style.color:', styledElement.style.color);
// '' — ცარიელი, თუ სტილი CSS ფაილშია

const computedStyles = getComputedStyle(styledElement);
console.log('გამოთვლილი ფერი:', computedStyles.color);         // 'rgb(33, 33, 33)'
console.log('გამოთვლილი font-size:', computedStyles.fontSize); // '16px'

// --- სტილის წაშლა (ცარიელი სტრიქონით) ---

const tempBox = document.getElementById('temp-box');
tempBox.style.backgroundColor = 'red';
tempBox.style.backgroundColor = ''; // inline სტილი მოიხსნება


/*
═══════════════════════════════════════════════════════════════
11. სელექტორების მეთოდების შედარების ცხრილი
═══════════════════════════════════════════════════════════════

მეთოდი                    | აბრუნებს              | live/static | forEach
--------------------------|----------------------|-------------|--------
getElementById            | Element ან null       | —           | —
querySelector             | Element ან null       | —           | —
querySelectorAll          | static NodeList       | static      | კი
getElementsByClassName    | live HTMLCollection   | live        | არა
getElementsByTagName      | live HTMLCollection   | live        | არა

მთავარი განსხვავებები:

1) getElementById vs querySelector('#id')
   - ორივე ერთ ელემენტს აბრუნებს; getElementById ოდნავ სწრაფია

2) querySelectorAll vs getElementsByClassName
   - querySelectorAll → static NodeList (forEach მუშაობს)
   - getElementsByClassName → live HTMLCollection (forEach არ მუშაობს)

3) live vs static
   - live: DOM-ის ცვლილება ავტომატურად აისახება
   - static: კოლექცია "ფოტოა" — ცვლილებები არ აისახება
*/

// --- შედარების პრაქტიკული დემონსტრაცია ---

// 1. getElementById — ერთი ელემენტი id-ით
const el1 = document.getElementById('student-name');
console.log('getElementById:', el1);

// 2. querySelector — ერთი ელემენტი CSS სელექტორით
const el2 = document.querySelector('#student-name');
console.log('querySelector:', el2); // იგივე შედეგი

// 3. querySelectorAll — static NodeList (forEach მუშაობს)
const el3 = document.querySelectorAll('.card');
console.log('querySelectorAll:', el3);
el3.forEach(function (el) {
  console.log('(forEach) ბარათი:', el.textContent);
});

// 4. getElementsByClassName — live HTMLCollection (forEach არ მუშაობს)
const el4 = document.getElementsByClassName('card');
console.log('getElementsByClassName:', el4);
for (let i = 0; i < el4.length; i++) {
  console.log('(for) ბარათი:', el4[i].textContent);
}

// 5. getElementsByTagName — live HTMLCollection
const el5 = document.getElementsByTagName('p');
console.log('getElementsByTagName:', el5);
Array.from(el5).forEach(function (p) {
  console.log('(Array.from) პარაგრაფი:', p.textContent);
});

// --- live vs static — ზემოთ სექცია 5-ში დეტალურადაა ახსნილი ---


/*
═══════════════════════════════════════════════════════════════
შეჯამება — DOM-ის საფუძვლები
═══════════════════════════════════════════════════════════════

ელემენტის მოძებნა:
- getElementById('id')           — ერთი ელემენტი, id-ით
- querySelector('selector')      — ერთი ელემენტი, CSS სელექტორით
- querySelectorAll('selector')   — ყველა, static NodeList (forEach მუშაობს)
- getElementsByClassName('cls')  — ყველა, live HTMLCollection
- getElementsByTagName('tag')    — ყველა, live HTMLCollection

კონტენტი: innerHTML (HTML, XSS საფრთხე) vs textContent (ტექსტი, უსაფრთხო)
სტილი: element.style.propName (camelCase), getComputedStyle(el)
*/
