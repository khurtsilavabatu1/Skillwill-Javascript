////////////////////////////////////
// მოდალური ფანჯარის პროექტი
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. querySelector VS querySelectorAll
═══════════════════════════════════════════════════════════════

querySelector ირჩევს ერთ ელემენტს — პირველ შესაბამისობას.
querySelectorAll ირჩევს ყველა შესაბამის ელემენტს და აბრუნებს
NodeList-ს (მასივის მსგავსი კოლექცია).
*/

'use strict';

// 📌 querySelector — აბრუნებს ერთ ელემენტს (ან null-ს თუ ვერ იპოვა)
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

console.log(modal);        // <div class="modal hidden">...</div>
console.log(btnCloseModal); // <button class="close-modal">×</button>

// 📌 querySelectorAll — აბრუნებს ყველა შესაბამისი ელემენტის NodeList-ს
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); // NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
console.log(btnsOpenModal.length); // 3

// 📌 რა არის NodeList?
// - გამოიყურება მასივივით, მაგრამ არ არის ნამდვილი მასივი
// - აქვს .length თვისება
// - ელემენტებზე წვდომა ინდექსით: btnsOpenModal[0], btnsOpenModal[1]
// - მაგრამ არ აქვს მასივის უმეტესი მეთოდები (push, pop, indexOf და სხვა)

// 📌 გავრცელებული შეცდომა: querySelector-ის გამოყენება როცა querySelectorAll გჭირდება
// document.querySelector('.show-modal') — იღებს მხოლოდ პირველ ღილაკს!
// document.querySelectorAll('.show-modal') — იღებს სამივე ღილაკს!

// 📌 სხვა სელექტორებიც მუშაობს:
// document.querySelector('#myId')         — ID-ით მოძებნა
// document.querySelector('h1')            — ტეგის სახელით მოძებნა
// document.querySelector('.parent .child') — ჩადგმული ელემენტების მოძებნა


/*
═══════════════════════════════════════════════════════════════
2. classList — add, remove, contains, toggle
═══════════════════════════════════════════════════════════════

classList არის DOM ელემენტების თვისება, რომელიც საშუალებას
გაძლევთ მანიპულირებდეთ CSS კლასებს className სტრინგის
პირდაპირ შეცვლის გარეშე. მას აქვს ოთხი ძირითადი მეთოდი.
*/

// 📌 classList.add() — ამატებს ერთ ან მეტ კლასს ელემენტს
modal.classList.add('hidden');
console.log(modal.className); // "modal hidden"

// შეგიძლიათ ერთდროულად რამდენიმე კლასი დაამატოთ
// modal.classList.add('hidden', 'fade-out');

// 📌 classList.remove() — შლის ერთ ან მეტ კლასს ელემენტიდან
modal.classList.remove('hidden');
console.log(modal.className); // "modal"

// შეგიძლიათ ერთდროულად რამდენიმე კლასი წაშალოთ
// modal.classList.remove('hidden', 'fade-out');

// 📌 classList.contains() — ამოწმებს, აქვს თუ არა ელემენტს კონკრეტული კლასი
const isHidden = modal.classList.contains('hidden');
console.log(isHidden); // false (რადგან ახლახან წავშალეთ)

if (modal.classList.contains('hidden')) {
  console.log('მოდალი დამალულია');
} else {
  console.log('მოდალი ხილვადია');
}

// 📌 classList.toggle() — ამატებს კლასს თუ არ არის, შლის თუ უკვე არის
modal.classList.toggle('hidden');
// თუ 'hidden' არ იყო -> ახლა დაემატა
// თუ 'hidden' იყო -> ახლა წაიშალა

// 📌 რატომ არ ვიყენებთ className-ს პირდაპირ?
// modal.className = 'hidden';  // გადაწერს ყველა კლასს! 'modal' კლასი დაიკარგება!
// classList.add('hidden');      // ამატებს 'hidden'-ს 'modal' კლასის შენარჩუნებით

// 📌 შეჯამების ცხრილი:
// მეთოდი               | რას აკეთებს                       | რას აბრუნებს
// ----------------------|-----------------------------------|----------
// classList.add()       | ამატებს კლას(ებ)ს ელემენტს        | undefined
// classList.remove()    | შლის კლას(ებ)ს ელემენტიდან        | undefined
// classList.contains()  | ამოწმებს კლასის არსებობას         | true/false
// classList.toggle()    | ამატებს/შლის კლასს                | true/false


/*
═══════════════════════════════════════════════════════════════
3. HIDDEN კლასის პატერნი (THE HIDDEN CLASS PATTERN)
═══════════════════════════════════════════════════════════════

ძალიან გავრცელებული პატერნი ვებ-დეველოპმენტში: CSS კლასის
გამოყენება ელემენტების დამალვა/გამოჩენისთვის JavaScript-ში
სტილის პირდაპირ მანიპულირების ნაცვლად.
*/

// 📌 CSS-ში განვსაზღვრავთ:
// .hidden {
//   display: none;
// }

// 📌 HTML-ში ელემენტები იწყება 'hidden' კლასით:
// <div class="modal hidden">...</div>
// <div class="overlay hidden"></div>

// 📌 ელემენტის გამოჩენა — 'hidden' კლასის წაშლა:
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');

// 📌 ელემენტის დამალვა — 'hidden' კლასის დამატება:
// modal.classList.add('hidden');
// overlay.classList.add('hidden');

// 📌 რატომ ეს პატერნი და არა style.display?
//
// ცუდი მიდგომა (inline სტილები):
// modal.style.display = 'none';   // რთული სამართავი
// modal.style.display = 'block';  // რა იყო ორიგინალური display მნიშვნელობა?
//
// კარგი მიდგომა (CSS კლასი):
// modal.classList.add('hidden');    // სუფთა, მარტივი
// modal.classList.remove('hidden'); // აღადგენს ორიგინალურ CSS display-ს
//
// 📌 კლასის მიდგომის უპირატესობები:
// 1. სტილები რჩება CSS-ში, სადაც მათ ადგილი აქვთ
// 2. მარტივია ტრანზიციების/ანიმაციების დამატება
// 3. მუშაობს ორიგინალური display მნიშვნელობის მიუხედავად (block, flex, grid...)
// 4. ელემენტის დამალვა/გამოჩენა ერთი ხაზით
// 5. მარტივია მდგომარეობის შემოწმება: modal.classList.contains('hidden')


/*
═══════════════════════════════════════════════════════════════
4. მრავალ ელემენტთან მუშაობა (NodeList-ზე ციკლით გავლა)
   (WORKING WITH MULTIPLE ELEMENTS)
═══════════════════════════════════════════════════════════════

როცა querySelectorAll რამდენიმე ელემენტს აბრუნებს, for
ციკლი გვჭირდება თითოეულზე ივენთ ლისენერის დასამაგრებლად.
*/

// 📌 გვაქვს 3 ღილაკი 'show-modal' კლასით
const buttons = document.querySelectorAll('.show-modal');
console.log(buttons.length); // 3

// 📌 ციკლი ყველა ღილაკზე და კლიკის ივენთ ლისენერის დამატება
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(`ღილაკი ${i + 1} დაიკლიკა!`);
    // მოდალის გახსნა
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// 📌 როგორ მუშაობს:
// i = 0 -> buttons[0].addEventListener('click', ...)  -> პირველი ღილაკი
// i = 1 -> buttons[1].addEventListener('click', ...)  -> მეორე ღილაკი
// i = 2 -> buttons[2].addEventListener('click', ...)  -> მესამე ღილაკი

// 📌 ასევე შეგიძლიათ თითოეული ღილაკის ტექსტი წაიკითხოთ:
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].textContent);
  // "Show modal 1", "Show modal 2", "Show modal 3"
}

// 📌 მნიშვნელოვანი: ციკლის გარეშე მხოლოდ ერთი ღილაკი იმუშავებს
// buttons.addEventListener('click', ...) -> შეცდომა! NodeList-ს არ აქვს addEventListener
// აუცილებლად უნდა გაიაროთ NodeList ციკლით და ლისენერი ცალკე დაამატოთ


/*
═══════════════════════════════════════════════════════════════
5. კლავიატურის ივენთები (KEYBOARD EVENTS)
   (keydown, keyup, keypress, ივენთ ობიექტი, e.key)
═══════════════════════════════════════════════════════════════

JavaScript-ს შეუძლია კლავიატურის ივენთების მოსმენა. ეს არის
"გლობალური" ივენთები, რაც ნიშნავს რომ მთელ დოკუმენტზე ხდება,
არა კონკრეტულ ელემენტზე.
*/

// 📌 კლავიატურის ივენთების სამი ტიპი:
// keydown  -> ირთვება როცა ღილაკს დააჭერთ (ყველაზე ხშირად გამოიყენება)
// keyup    -> ირთვება როცა ღილაკს აუშვებთ
// keypress -> ირთვება როცა ღილაკს დააჭერთ (მოძველებული — არ გამოიყენოთ!)

// 📌 კლავიატურის ივენთები document-ზე ემატება, არა კონკრეტულ ელემენტზე
document.addEventListener('keydown', function (e) {
  // 'e' არის ივენთ ობიექტი — ბრაუზერი ავტომატურად გადმოსცემს
  // ის შეიცავს ინფორმაციას იმის შესახებ, რა მოხდა

  console.log(e);       // KeyboardEvent ობიექტი ბევრი თვისებით
  console.log(e.key);   // დაჭერილი ღილაკის სახელი
  console.log(e.code);  // ფიზიკური ღილაკის კოდი

  // 📌 e.key მნიშვნელობების მაგალითები:
  // 'Escape', 'Enter', 'ArrowUp', 'ArrowDown', 'a', 'b', ' ' (space)

  // 📌 e.code მნიშვნელობების მაგალითები:
  // 'Escape', 'Enter', 'ArrowUp', 'KeyA', 'KeyB', 'Space'
});

// 📌 პრაქტიკული მაგალითი: მოდალის დახურვა Escape ღილაკით
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('Escape დაიჭირა!');
    // მოდალის დახურვა
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// 📌 რამდენიმე პირობის შემოწმება:
// მოდალის დახურვა მხოლოდ იმ შემთხვევაში, თუ ის ამჟამად ხილვადია
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// 📌 ივენთ ობიექტი (e):
// - e.key      -> ღილაკის მნიშვნელობა: 'Escape', 'Enter', 'a' და სხვა
// - e.code     -> ფიზიკური ღილაკის კოდი: 'Escape', 'Enter', 'KeyA' და სხვა
// - e.type     -> ივენთის ტიპი: 'keydown', 'keyup' და სხვა
// - e.repeat   -> true თუ ღილაკი დაჭერილია (ავტო-განმეორება)
// - e.altKey   -> true თუ Alt დაჭერილი იყო ივენთის დროს
// - e.ctrlKey  -> true თუ Ctrl დაჭერილი იყო ივენთის დროს
// - e.shiftKey -> true თუ Shift დაჭერილი იყო ივენთის დროს


/*
═══════════════════════════════════════════════════════════════
6. ოვერლეის პატერნი (OVERLAY PATTERN)
   (მოდალი + ოვერლეის კომბინაცია)
═══════════════════════════════════════════════════════════════

ოვერლეის პატერნი ორ ელემენტს ერთად იყენებს:
- მოდალური ფანჯარა (კონტენტის ამომხტარი ფანჯარა)
- ოვერლეი (ბნელი/ბუნდოვანი ფონი მოდალის უკან)

ორივე ერთად უნდა ჩანდეს და იმალებოდეს.
*/

// 📌 HTML სტრუქტურა:
// <div class="modal hidden">
//   <button class="close-modal">&times;</button>
//   <h1>I'm a modal window</h1>
//   <p>მოდალის კონტენტი აქ...</p>
// </div>
// <div class="overlay hidden"></div>

// 📌 CSS ოვერლეისთვის:
// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.6);
//   backdrop-filter: blur(3px);
//   z-index: 5;
// }
//
// .modal {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 10;    /* ოვერლეიზე მაღალი! */
// }

// 📌 მოდალს უფრო მაღალი z-index უნდა ჰქონდეს ვიდრე ოვერლეის,
// რათა ბნელი ფონის ზემოთ გამოჩნდეს.

// 📌 მოდალის დახურვის სამი გზა:
// 1. დახურვის ღილაკზე (X) დაკლიკება
// 2. ოვერლეიზე (ბნელ ფონზე) დაკლიკება
// 3. Escape ღილაკის დაჭერა

// 📌 ოვერლეიზე დაკლიკებით დახურვა:
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// 📌 X ღილაკზე დაკლიკებით დახურვა:
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// 📌 რატომ ვაჩვენებთ/ვმალავთ ორივეს ერთად?
// თუ მხოლოდ მოდალს დამალავთ, მაგრამ ოვერლეის არა,
// ბნელი ფონი დარჩება და მომხმარებელი ვერ იმოქმედებს
// მის უკან მდებარე გვერდთან!


/*
═══════════════════════════════════════════════════════════════
7. მრავალჯერადად გამოყენებადი ფუნქციები (REUSABLE FUNCTIONS)
   (openModal, closeModal — DRY პრინციპი)
═══════════════════════════════════════════════════════════════

DRY = Don't Repeat Yourself (არ გაიმეორო თავი). როცა ერთი
და იგივე კოდი რამდენიმე ადგილას მეორდება, ამოიღეთ ის
მრავალჯერადად გამოყენებად ფუნქციაში.
*/

// 📌 DRY-ის გარეშე — კოდი 5-ჯერ მეორდება! (ცუდი)
//
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');      // მეორდება
//     overlay.classList.remove('hidden');     // მეორდება
//   });
//
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');           // მეორდება
//   overlay.classList.add('hidden');         // მეორდება
// });
//
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');           // მეორდება
//   overlay.classList.add('hidden');         // მეორდება
// });
//
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     modal.classList.add('hidden');         // მეორდება
//     overlay.classList.add('hidden');       // მეორდება
//   }
// });

// 📌 DRY-ით — ამოვიღოთ მრავალჯერადად გამოყენებად ფუნქციებში (კარგი)

const openModal2 = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal2 = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 📌 ახლა ეს ფუნქციები ყველგან გამოვიყენოთ:
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal2);
  // შენიშვნა: ვაწვდით ფუნქციის რეფერენსს (openModal2)
  // არა ფუნქციის გამოძახებას (openModal2())

btnCloseModal.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal2();
  }
});

// 📌 მნიშვნელოვანი: ფუნქციის რეფერენსი vs ფუნქციის გამოძახება
//
// addEventListener('click', closeModal2)    სწორი
// -> აწვდის თავად ფუნქციას. ბრაუზერი გამოიძახებს კლიკისას.
//
// addEventListener('click', closeModal2())  არასწორი!
// -> იძახებს ფუნქციას დაუყოვნებლივ და აწვდის მის დაბრუნებულ მნიშვნელობას (undefined)
// -> ფუნქცია ერთხელ ეშვება კოდის ჩატვირთვისას, არა კლიკისას

// 📌 DRY-ის უპირატესობები:
// 1. ნაკლები კოდი დასაწერად და მოსავლელად
// 2. ცვლილებები მხოლოდ ერთ ადგილას უნდა გაკეთდეს
// 3. ნაკლები ბაგები — ერთ ფუნქციას ასწორებ, არა რამდენიმე ასლს
// 4. კოდი უფრო წაკითხვადი და ორგანიზებულია

// 📌 მაგალითი: თუ მოგვიანებით ანიმაციის დამატება მოგვინდება დახურვისას,
// მხოლოდ closeModal-ს ვცვლით — სამივე დახურვის ტრიგერი განახლდება!


/*
═══════════════════════════════════════════════════════════════
შეჯამება — მოდალური ფანჯარის პროექტი
═══════════════════════════════════════════════════════════════

querySelector vs querySelectorAll:
- querySelector: აბრუნებს ერთ ელემენტს (პირველ შესაბამისობას)
- querySelectorAll: აბრუნებს ყველა შესაბამისობის NodeList-ს
- NodeList-ს აქვს .length და ინდექსით წვდომა, მაგრამ არ არის მასივი

classList მეთოდები:
- .add('class')      — ამატებს CSS კლასს
- .remove('class')   — შლის CSS კლასს
- .contains('class') — ამოწმებს კლასის არსებობას (true/false)
- .toggle('class')   — ამატებს თუ არ არის, შლის თუ უკვე არის

Hidden კლასის პატერნი:
- CSS: .hidden { display: none; }
- გამოჩენა: element.classList.remove('hidden')
- დამალვა: element.classList.add('hidden')
- უკეთესია ვიდრე style.display-ის პირდაპირი გამოყენება

მრავალ ელემენტთან მუშაობა:
- querySelectorAll აბრუნებს NodeList-ს
- for ციკლი იტერაციისთვის და ივენთ ლისენერების დასამატებლად
- ლისენერი თითოეულ ელემენტს ცალკე უნდა დაემატოს

კლავიატურის ივენთები:
- keydown: ყველაზე გავრცელებული, ირთვება ღილაკის დაჭერისას
- keyup: ირთვება ღილაკის აშვებისას
- document-ზე ემატება, არა ინდივიდუალურ ელემენტებზე
- ივენთ ობიექტი (e): e.key, e.code, e.type

ოვერლეის პატერნი:
- მოდალი (კონტენტი) + ოვერლეი (ბნელი ფონი)
- ორივე ერთად უნდა ჩანდეს/იმალებოდეს
- მოდალის z-index > ოვერლეის z-index
- დახურვა: X ღილაკი, ოვერლეიზე კლიკი, Escape ღილაკი

DRY პრინციპი:
- განმეორებადი კოდის ამოღება ფუნქციებში
- addEventListener-ს ფუნქციის რეფერენსი გადაეცემა, არა გამოძახება
- openModal და closeModal — ყველგან მრავალჯერადად გამოყენებადი
*/
