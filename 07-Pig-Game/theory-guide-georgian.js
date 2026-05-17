////////////////////////////////////
// Pig Game - გაფართოებული DOM მანიპულაცია
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. getElementById VS querySelector
═══════════════════════════════════════════════════════════════

📌 DOM ელემენტების არჩევის ორი გზა. getElementById ოდნავ
უფრო სწრაფია, რადგან მხოლოდ ID-ით ეძებს, ხოლო querySelector-ს
შეუძლია ნებისმიერი CSS სელექტორის გამოყენება (კლასი, ID, ტეგი და ა.შ.).

📌 Pig Game-ში ორივე გამოიყენება:
*/

'use strict';

// getElementById - არჩევა მხოლოდ ID-ით (# არ არის საჭირო)
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// querySelector - იყენებს CSS სელექტორის სინტაქსს (# ID-სთვის, . კლასისთვის)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// 📌 როდის რომელი გამოვიყენოთ:
// getElementById:
//   - როცა ID-ით ვარჩევთ
//   - ოდნავ უფრო სწრაფი შესრულება
//   - არ მოითხოვს # სიმბოლოს
//   - აბრუნებს null-ს თუ ვერ იპოვა

// querySelector:
//   - როცა კლასით, ტეგით ან რთული CSS სელექტორით ვარჩევთ
//   - უფრო მოქნილი
//   - მოითხოვს # ID-სთვის, . კლასისთვის
//   - აბრუნებს null-ს თუ ვერ იპოვა (მხოლოდ პირველ დამთხვევას)

// 📌 შესრულების შედარება:
// getElementById('score--0')     -> სწრაფი, პირდაპირი ძიება
// querySelector('#score--0')     -> ოდნავ ნელი, ჯერ CSS სელექტორს აანალიზებს

// ორივე კარგად მუშაობს აპლიკაციების უმეტესობისთვის. გამოიყენეთ
// getElementById როცა ID-ით ირჩევთ, მცირე შესრულების სარგებლისთვის.
// გამოიყენეთ querySelector კლასებისთვის ან CSS სელექტორის ძალის საჭიროებისას.

// 📌 გავრცელებული შეცდომა: არ ჩასვათ # getElementById-ში!
// document.getElementById('#score--0');  // არასწორი - ვერ იპოვის
// document.getElementById('score--0');   // სწორი


/*
═══════════════════════════════════════════════════════════════
2. თამაშის მდგომარეობის მართვა (GAME STATE MANAGEMENT)
═══════════════════════════════════════════════════════════════

📌 თამაშის მდგომარეობა = ყველა მონაცემი, რომელიც აღწერს
თამაშის მიმდინარე სიტუაციას ნებისმიერ მომენტში. Pig Game-ში
მდგომარეობა ინახება ოთხ ცვლადში, რომლებიც 'let'-ით არის
გამოცხადებული (რადგან ისინი იცვლება).
*/

// ოთხი მდგომარეობის ცვლადი:
let scores;        // მასივი: ორივე მოთამაშის ჯამური ქულები [მოთამაშე0, მოთამაშე1]
let currentScore;  // რიცხვი: მიმდინარე რაუნდის დაგროვილი ქულა
let activePlayer;  // რიცხვი: 0 ან 1, რომელი მოთამაშე თამაშობს ახლა
let playing;       // ბულეანი: თამაში ჯერ კიდევ აქტიურია?

// 📌 რატომ 'let' და არა 'const'?
// იმიტომ რომ ეს მნიშვნელობები იცვლება თამაშის განმავლობაში:
// - scores იცვლება როცა მოთამაშე აჰოლდებს
// - currentScore იცვლება ყოველი კამათლის გაგორებისას
// - activePlayer გადართავს 0-სა და 1-ს შორის
// - playing ხდება false როცა ვიღაც იმარჯვებს

// 📌 რატომ არის გამოცხადებული საწყისი მნიშვნელობის გარეშე?
// იმიტომ რომ init() ფუნქცია ანიჭებს მათ. ამ გზით, იგივე init
// ფუნქცია შეიძლება გამოყენებულ იქნას თამაშის დასაწყებად და გადასატვირთად.

// 📌 scores მასივის პატერნი:
// scores = [0, 0];
// scores[0] = მოთამაშე 1-ის ჯამური ქულა
// scores[1] = მოთამაშე 2-ის ჯამური ქულა
// scores[activePlayer] = მიმდინარე მოთამაშის ქულა (დინამიური!)

// ეს ძლიერია, რადგან activePlayer არის 0 ან 1,
// რაც სრულყოფილად ემთხვევა მასივის ინდექსებს:
// scores[0] -> მოთამაშე 1-ის ქულა
// scores[1] -> მოთამაშე 2-ის ქულა

// 📌 მდგომარეობის მაგალითი სხვადასხვა მომენტში:
// თამაშის დასაწყისი: scores=[0,0],  currentScore=0, activePlayer=0, playing=true
// 5-ის გაგორება:     scores=[0,0],  currentScore=5, activePlayer=0, playing=true
// 3-ის გაგორება:     scores=[0,0],  currentScore=8, activePlayer=0, playing=true
// ჰოლდის შემდეგ:    scores=[8,0],  currentScore=0, activePlayer=1, playing=true
// 1-ის გაგორება:     scores=[8,0],  currentScore=0, activePlayer=0, playing=true
// მოთამაშე იმარჯვ.: scores=[102,0],currentScore=0, activePlayer=0, playing=false


/*
═══════════════════════════════════════════════════════════════
3. classList.toggle
═══════════════════════════════════════════════════════════════

📌 classList გვაწვდის მეთოდებს CSS კლასების დასამატებლად,
წასაშლელად და გადასართავად ელემენტზე. toggle მეთოდი
განსაკუთრებით სასარგებლოა ვიზუალური მდგომარეობების
წინ-უკან გადართვისთვის.

📌 Pig Game-ში toggle გამოიყენება აქტიური მოთამაშის
ვიზუალური ხაზგასმის გადასართავად.
*/

// classList მეთოდები:
// element.classList.add('className')     - ამატებს კლასს
// element.classList.remove('className')  - შლის კლასს
// element.classList.toggle('className')  - ამატებს თუ არ აქვს, შლის თუ აქვს
// element.classList.contains('className') - აბრუნებს true/false

// 📌 Pig Game-ში toggle-ის გამოყენება აქტიური მოთამაშისთვის:
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');

// 📌 როგორ მუშაობს toggle ნაბიჯ-ნაბიჯ:
// საწყისი მდგომარეობა: player0-ს აქვს 'player--active', player1-ს არ აქვს

// პირველი toggle-ის შემდეგ:
// player0El.classList.toggle('player--active');
// -> player0-ს ჰქონდა, ამიტომ წაიშალა. player0 ახლა ვიზუალურად არააქტიურია.

// player1El.classList.toggle('player--active');
// -> player1-ს არ ჰქონდა, ამიტომ დაემატა. player1 ახლა ვიზუალურად აქტიურია.

// მეორე toggle-ის შემდეგ (უკან გადართვა):
// player0El.classList.toggle('player--active');
// -> player0-ს არ აქვს, ამიტომ დაემატა. player0 ისევ აქტიურია.

// player1El.classList.toggle('player--active');
// -> player1-ს აქვს, ამიტომ წაიშალა. player1 ისევ არააქტიურია.

// 📌 ეს ბევრად უფრო სუფთაა ვიდრე if/else-ის გამოყენება:
// ცუდი მიდგომა:
// if (activePlayer === 0) {
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// } else {
//   player0El.classList.remove('player--active');
//   player1El.classList.add('player--active');
// }

// კარგი მიდგომა (რასაც Pig Game იყენებს):
// player0El.classList.toggle('player--active');
// player1El.classList.toggle('player--active');
// მხოლოდ ორი ხაზი! მუშაობს რადგან ერთს ყოველთვის აქვს და მეორეს არა.

// 📌 სხვა classList მაგალითები:
// diceEl.classList.add('hidden');     // კამათლის სურათის დამალვა
// diceEl.classList.remove('hidden');  // კამათლის სურათის ჩვენება


/*
═══════════════════════════════════════════════════════════════
4. დინამიური ელემენტის არჩევა Template Literal-ებით
   (DYNAMIC ELEMENT SELECTION WITH TEMPLATE LITERALS)
═══════════════════════════════════════════════════════════════

📌 Template literal-ები შეიძლება გამოყენებულ იქნას
getElementById-ის შიგნით ელემენტების დინამიურად არჩევისთვის
ცვლადების საფუძველზე. ეს ძლიერი პატერნია, რომელიც
Pig Game-ში გამოიყენება სწორი მოთამაშის ელემენტების დასამიზნებლად.
*/

// 📌 Pig Game-ს სჭირდება მიმდინარე მოთამაშის ქულის ჩვენების განახლება.
// if/else-ის ნაცვლად სწორი ელემენტის ასარჩევად:

// ცუდი მიდგომა:
// if (activePlayer === 0) {
//   document.getElementById('current--0').textContent = currentScore;
// } else {
//   document.getElementById('current--1').textContent = currentScore;
// }

// კარგი მიდგომა template literal-ების გამოყენებით:
// document.getElementById(`current--${activePlayer}`).textContent = currentScore;

// 📌 როგორ მუშაობს:
// როცა activePlayer არის 0: `current--${0}` → 'current--0'
// როცა activePlayer არის 1: `current--${1}` → 'current--1'

// 📌 ეს პატერნი გამოიყენება მთელ Pig Game-ში:

// მიმდინარე ქულის ჩვენების განახლება:
// document.getElementById(`current--${activePlayer}`).textContent = currentScore;

// ჯამური ქულის ჩვენების განახლება:
// document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

// აქტიური მოთამაშის სექციის არჩევა:
// document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

// 📌 მთავარი ხედვა: activePlayer ყოველთვის 0 ან 1-ია, და HTML
// ელემენტები დასახელებულია --0 და --1 სუფიქსებით, რაც ამ
// დინამიურ არჩევას შესაძლებელს ხდის.

// HTML სტრუქტურა, რომელიც ამ პატერნს შესაძლებელს ხდის:
// <p id="score--0">0</p>     <p id="score--1">0</p>
// <p id="current--0">0</p>   <p id="current--1">0</p>
// <section class="player--0"> <section class="player--1">

// ეს გავრცელებული პატერნია თამაშებსა და აპლიკაციებში მრავალი
// მსგავსი ელემენტით (მოთამაშეები, ბარათები, ელემენტები და ა.შ.)


/*
═══════════════════════════════════════════════════════════════
5. სურათის წყაროს მანიპულაცია (IMAGE SOURCE MANIPULATION)
═══════════════════════════════════════════════════════════════

📌 JavaScript-ით შეგიძლიათ შეცვალოთ ნებისმიერი HTML ატრიბუტი,
მათ შორის <img> ელემენტის 'src' ატრიბუტი. Pig Game-ში
ასე ხდება კამათლის სახის განახლება.
*/

// კამათლის სურათი HTML-ში:
// <img src="dice-5.png" alt="Playing dice" class="dice" />

// 📌 კამათლის სახის შესაცვლელად ვცვლით src ატრიბუტს:
// diceEl.src = `dice-${dice}.png`;

// თუ dice = 1: src ხდება "dice-1.png"
// თუ dice = 2: src ხდება "dice-2.png"
// თუ dice = 3: src ხდება "dice-3.png"
// თუ dice = 4: src ხდება "dice-4.png"
// თუ dice = 5: src ხდება "dice-5.png"
// თუ dice = 6: src ხდება "dice-6.png"

// 📌 ეს მუშაობს რადგან გვაქვს 6 სურათის ფაილი თანმიმდევრული სახელებით:
// dice-1.png, dice-2.png, dice-3.png, dice-4.png, dice-5.png, dice-6.png

// 📌 სრული კონტექსტი Pig Game-ში:
// const dice = Math.trunc(Math.random() * 6) + 1;  // შემთხვევითი 1-6
// diceEl.classList.remove('hidden');                   // კამათლის ჩვენება
// diceEl.src = `dice-${dice}.png`;                    // სწორი სახის დაყენება

// 📌 სხვა ატრიბუტის მანიპულაციები, რისი გაკეთებაც შეგიძლიათ:
// element.src = 'new-image.png';       // სურათის წყაროს შეცვლა
// element.href = 'https://...';        // ბმულის URL-ის შეცვლა
// element.alt = 'New description';     // alt ტექსტის შეცვლა
// element.id = 'new-id';               // ელემენტის ID-ის შეცვლა

// 📌 კამათლის ჩვენება და დამალვა:
// diceEl.classList.add('hidden');    // კამათლის დამალვა (თამაშის დასაწყისი, მოგების შემდეგ)
// diceEl.classList.remove('hidden'); // კამათლის ჩვენება (გაგორების შემდეგ)

// 'hidden' კლასი CSS-ში უბრალოდ:
// .hidden { display: none; }


/*
═══════════════════════════════════════════════════════════════
6. Init / Reset პატერნი (THE INIT / RESET PATTERN)
═══════════════════════════════════════════════════════════════

📌 თამაშის ინიციალიზაციის ცენტრალიზაცია ერთ ფუნქციაში
აადვილებს როგორც თამაშის დაწყებას, ასევე გადატვირთვას.
ერთი და იგივე ფუნქცია ორივე შემთხვევას ამუშავებს.
*/

// 📌 Init ფუნქცია Pig Game-ში:
const init = function () {
  // 1. ყველა მდგომარეობის ცვლადის გადატვირთვა
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // 2. ყველა DOM ელემენტის საწყის მდგომარეობაში დაბრუნება
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // 3. ყველა ვიზუალური მდგომარეობის გადატვირთვა
  diceEl.classList.add('hidden');                  // კამათლის დამალვა
  player0El.classList.remove('player--winner');     // გამარჯვებულის სტილის წაშლა
  player1El.classList.remove('player--winner');     // გამარჯვებულის სტილის წაშლა
  player0El.classList.add('player--active');        // მოთამაშე 1 იწყებს
  player1El.classList.remove('player--active');     // მოთამაშე 2 არააქტიური
};

// 📌 init()-ის მყისიერი გამოძახება თამაშის დასაწყებად
init();

// ასევე init-ის გამოყენება "ახალი თამაშის" ღილაკის ჰენდლერად:
// btnNew.addEventListener('click', init);

// 📌 რატომ არის ეს პატერნი ძლიერი:
// 1. DRY (Don't Repeat Yourself) - ერთი ფუნქცია დაწყებისა და გადატვირთვისთვის
// 2. ერთი ჭეშმარიტების წყარო - ყველა საწყისი მნიშვნელობა ერთ ადგილას
// 3. ადვილად მოდიფიცირებადი - საწყისი პირობების შეცვლა ერთ ადგილას
// 4. ბაგების პრევენცია - წინა თამაშის მდგომარეობა არ რჩება

// 📌 გავრცელებული შეცდომა: ყველაფრის არ გადატვირთვა
// თუ 'playing' ფლაგის გადატვირთვას დაგავიწყდებათ, თამაში ვერ
// იმუშავებს პირველი მოგების შემდეგ. თუ 'player--winner'-ის წაშლას
// დაგავიწყდებათ, გამარჯვებულის სტილი ხილული დარჩება.

// 📌 პატერნის სტრუქტურა:
// 1. function init() { /* მდგომარეობის + DOM-ის გადატვირთვა */ }
// 2. init();  // გამოძახება გვერდის ჩატვირთვისას
// 3. resetButton.addEventListener('click', init);  // გამოძახება გადატვირთვისას


/*
═══════════════════════════════════════════════════════════════
7. რთული თამაშის ლოგიკა (COMPLEX GAME LOGIC)
═══════════════════════════════════════════════════════════════

📌 Pig Game აერთიანებს მრავალ კონცეფციას: შემთხვევითი რიცხვის
გენერაციას, პირობით ლოგიკას, DOM განახლებებს და მდგომარეობის
მართვას ერთიან თამაშის მოქმედებებში.
*/

// === კამათლის გაგორება ===
// 1. შემთხვევითი რიცხვის გენერაცია (1-6)
// 2. კამათლის ჩვენება
// 3. თუ არ არის 1: დაამატე მიმდინარე ქულას და აჩვენე
// 4. თუ 1-ია: გადართე შემდეგ მოთამაშეზე

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;  // გადართვა 0-სა და 1-ს შორის
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. შემთხვევითი კამათლის გაგორების გენერაცია
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Math.random() -> 0-დან 0.999...-მდე
    // * 6           -> 0-დან 5.999...-მდე
    // Math.trunc()  -> 0-დან 5-მდე (ათწილადების წაშლა)
    // + 1           -> 1-დან 6-მდე

    // 2. კამათლის ჩვენება
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. 1-ის გაგორების შემოწმება
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// === ქულის დაჰოლდვა ===
// 1. მიმდინარე ქულის დამატება აქტიური მოთამაშის ჯამურ ქულაზე
// 2. ქულის ჩვენების განახლება
// 3. შემოწმება, მოიგო თუ არა მოთამაშემ (>= 100)
// 4. თუ კი: თამაშის დასრულება, გამარჯვებულის ჩვენება
// 5. თუ არა: გადართვა შემდეგ მოთამაშეზე

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. მიმდინარე ქულის დამატება აქტიური მოთამაშის ჯამურზე
    scores[activePlayer] += currentScore;

    // 2. ქულის ჩვენების განახლება
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 3. მოგების პირობის შემოწმება
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// === მოთამაშის გადართვის ლოგიკა ===
// 📌 switchPlayer ფუნქცია 4 რამეს აკეთებს:
// 1. მიმდინარე მოთამაშის ნაჩვენები მიმდინარე ქულის 0-ზე გადატვირთვა
// 2. currentScore ცვლადის 0-ზე გადატვირთვა
// 3. activePlayer-ის გადართვა 0-სა და 1-ს შორის ternary ოპერატორით
// 4. ორივე მოთამაშისთვის ვიზუალური აქტიური მდგომარეობის გადართვა

// 📌 ternary ოპერატორი გადასართავად:
// activePlayer = activePlayer === 0 ? 1 : 0;
// ეს იკითხება: "თუ activePlayer არის 0, დააყენე 1, წინააღმდეგ შემთხვევაში დააყენე 0"
// ეკვივალენტურია:
// if (activePlayer === 0) { activePlayer = 1; } else { activePlayer = 0; }


/*
═══════════════════════════════════════════════════════════════
8. "playing" ფლაგის პატერნი (THE "playing" FLAG PATTERN)
═══════════════════════════════════════════════════════════════

📌 ბულეანი ფლაგის ცვლადი, რომელიც აკონტროლებს, უნდა
დამუშავდეს თუ არა თამაშის მოქმედებები. ეს ხელს უშლის
მოთამაშეებს გაგორებაში ან დაჰოლდვაში თამაშის დასრულების შემდეგ.
*/

// 📌 'playing' ცვლადი გამოცხადებულია როგორც თამაშის მდგომარეობის ნაწილი:
// let playing;

// init()-ში ის true-ზე დგება:
// playing = true;

// 📌 ყოველი მოქმედება ჯერ ფლაგს ამოწმებს:
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // ... კამათლის გაგორების ლოგიკა მხოლოდ მაშინ სრულდება, თუ თამაში აქტიურია
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // ... ჰოლდის ლოგიკა მხოლოდ მაშინ სრულდება, თუ თამაში აქტიურია
//   }
// });

// 📌 როცა მოთამაშე იმარჯვებს, ფლაგი false-ზე დგება:
// if (scores[activePlayer] >= 100) {
//   playing = false;
//   // ... გამარჯვებულის ჩვენების ლოგიკა
// }

// ამის შემდეგ, Roll-ზე ან Hold-ზე დაჭერა არაფერს აკეთებს,
// რადგან if(playing) შემოწმება ვერ გაივლის.

// 📌 ფლაგი ისევ true-ზე დგება ახალი თამაშის დაწყებისას:
// init() აყენებს playing = true;

// 📌 რატომ არის ეს პატერნი მნიშვნელოვანი:
// 1. თავიდან აცილება არასწორი თამაშის მოქმედებების თამაშის დასრულების შემდეგ
// 2. მარტივი ბულეანი შემოწმება რთული პირობების ნაცვლად
// 3. ადვილად გასაგები: playing = true ნიშნავს თამაში მიმდინარეობს
// 4. ცენტრალიზებული კონტროლი: ერთი ცვლადი აკონტროლებს ყველა მოქმედებას

// 📌 ფლაგის პატერნის გავრცელებული გამოყენებები:
// - თამაშის მდგომარეობა (playing, paused, gameOver)
// - ფორმის გაგზავნა (isSubmitting - ორმაგი გაგზავნის თავიდან აცილება)
// - ჩატვირთვის მდგომარეობა (isLoading - სპინერის ჩვენება)
// - ფუნქციების გადართვა (isDarkMode, isMuted)

// 📌 ახალი თამაში ყველაფერს გადატვირთავს:
btnNew.addEventListener('click', init);
// ეს იძახებს init()-ს, რომელიც აყენებს playing = true,
// ხელახლა ჩართავს ყველა თამაშის მოქმედებას.


/*
═══════════════════════════════════════════════════════════════
შეჯამება - PIG GAME კონცეფციები
═══════════════════════════════════════════════════════════════

getElementById vs querySelector:
- getElementById: სწრაფი, მხოლოდ ID, # არ არის საჭირო
- querySelector: მოქნილი, ნებისმიერი CSS სელექტორი, # და . საჭიროა

თამაშის მდგომარეობის მართვა:
- თამაშის მდგომარეობის შენახვა ცვლადებში (let ცვალებადი მდგომარეობისთვის)
- scores მასივი ინდექსირებული activePlayer-ით დინამიური წვდომისთვის
- currentScore, activePlayer, playing ფლაგი

classList.toggle:
- ამატებს კლასს თუ არ აქვს, შლის თუ აქვს
- სრულყოფილია ორ მდგომარეობას შორის გადართვისთვის
- გამოიყენება აქტიური მოთამაშის ვიზუალის გადასართავად

დინამიური არჩევა:
- Template literal-ები სელექტორებში: `current--${activePlayer}`
- საშუალებას იძლევა ერთი ხაზი კოდი მრავალ მოთამაშეს ემსახუროს
- მუშაობს როგორც getElementById-თან, ასევე querySelector-თან

სურათის მანიპულაცია:
- src ატრიბუტის შეცვლა: diceEl.src = `dice-${dice}.png`
- დამალვა/ჩვენება classList-ით: add('hidden') / remove('hidden')

Init/Reset პატერნი:
- ერთი ფუნქცია ინიციალიზაციისა და გადატვირთვისთვის
- გადატვირთავს როგორც მდგომარეობის ცვლადებს, ასევე DOM-ს
- გამოიძახება ჩატვირთვისას და "ახალი თამაშის" ღილაკის დაჭერისას

თამაშის ლოგიკა:
- გაგორება: შემთხვევითი რიცხვი, ჩვენება, დამატება ან გადართვა
- ჰოლდი: ჯამურზე დამატება, მოგების შემოწმება, გადართვა
- გადართვა: მიმდინარეს გადატვირთვა, მოთამაშის გადართვა, ვიზუალის გადართვა

playing ფლაგი:
- ბულეანი, რომელიც აკონტროლებს ყველა თამაშის მოქმედებას
- true init-ში, false მოგებისას
- ყოველი მოქმედების ჰენდლერი ჯერ if(playing)-ს ამოწმებს
*/
