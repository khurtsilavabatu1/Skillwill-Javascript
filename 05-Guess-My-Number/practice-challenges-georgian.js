'use strict';

////////////////////////////////////
// DOM და Guess My Number თამაში
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ფერების გამოცნობის თამაში
// (DOM მანიპულაცია + შემთხვევითი ფერები)

/*
ააწყვეთ მარტივი ფერების გამოცნობის თამაში, სადაც მოთამაშემ
უნდა დააჭიროს ღილაკს, რომელიც ემთხვევა შემთხვევითად
გენერირებულ RGB ფერის კოდს.

1. შექმენით HTML ფაილი:
   - <p> ელემენტი კლასით 'color-display' სამიზნე RGB ფერის სტრინგის საჩვენებლად
   - სამი <button> ელემენტი კლასით 'color-btn' (ესენი ფერის ნიმუშები იქნება)
   - <p> ელემენტი კლასით 'result-message' "სწორია!" ან "სცადე თავიდან!" საჩვენებლად
   - <button> კლასით 'new-game' ახალი ფერების გენერირებისთვის
2. JavaScript-ში შექმენით ფუნქცია 'generateRandomColor', რომელიც აბრუნებს
   შემთხვევით RGB სტრინგს, მაგალითად "rgb(123, 45, 200)"
   - გამოიყენეთ Math.trunc(Math.random() * 256) თითოეული არხისთვის (0-255)
3. შექმენით ფუნქცია 'startNewRound', რომელიც:
   - გენერირებს 3 შემთხვევით ფერს და ანიჭებს მათ 3 ღილაკს
     (element.style.backgroundColor-ის გამოყენებით)
   - შემთხვევით ირჩევს ერთ-ერთს "სწორ" პასუხად
   - აჩვენებს სწორი ფერის RGB სტრინგს color-display ელემენტში
   - ასუფთავებს შედეგის შეტყობინებას
4. დაამატეთ click მოვლენის მსმენელები თითოეულ ფერის ღილაკზე:
   - შეადარეთ დაკლიკებული ღილაკის backgroundColor სამიზნე ფერს
   - აჩვენეთ "სწორია!" ან "სცადე თავიდან!" result-message ელემენტში
   - თუ სწორია, შეცვალეთ body-ის ფონი გამარჯვებული ფერით
5. დაამატეთ click მოვლენის მსმენელი 'new-game' ღილაკზე startNewRound-ის გამოსაძახებლად

სატესტო მონაცემები: ფერები შემთხვევითია, უბრალოდ შეამოწმეთ:
- 3 განსხვავებული ფერი ჩანს ღილაკებზე
- სწორზე დაკლიკება აჩვენებს "სწორია!"
- არასწორზე დაკლიკება აჩვენებს "სცადე თავიდან!"

მინიშნება: Math.trunc(Math.random() * 256) გენერირებს 0-255
მინიშნება: შეინახეთ სწორი ფერი ცვლადში ჰენდლერის გარეთ
მინიშნება: შეადარეთ RGB სტრინგის ფორმატით

წარმატებები 😀
*/

// const generateRandomColor = function () {
//   const r = Math.trunc(Math.random() * 256);
//   const g = Math.trunc(Math.random() * 256);
//   const b = Math.trunc(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// };
//
// let correctColor = '';
//
// const startNewRound = function () {
//   const color1 = generateRandomColor();
//   const color2 = generateRandomColor();
//   const color3 = generateRandomColor();
//
//   const colors = [color1, color2, color3];
//   const correctIndex = Math.trunc(Math.random() * 3);
//   correctColor = colors[correctIndex];
//
//   document.querySelector('.color-display').textContent = correctColor;
//   document.querySelector('.result-message').textContent = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//
//   const buttons = document.querySelectorAll('.color-btn');
//   buttons[0].style.backgroundColor = color1;
//   buttons[1].style.backgroundColor = color2;
//   buttons[2].style.backgroundColor = color3;
// };
//
// // თითოეულ ფერის ღილაკზე click მსმენელის დამატება
// const buttons = document.querySelectorAll('.color-btn');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function () {
//     const clickedColor = this.style.backgroundColor;
//     if (clickedColor === correctColor) {
//       document.querySelector('.result-message').textContent = 'სწორია!';
//       document.querySelector('body').style.backgroundColor = correctColor;
//     } else {
//       document.querySelector('.result-message').textContent = 'სცადე თავიდან!';
//     }
//   });
// }
//
// document.querySelector('.new-game').addEventListener('click', startNewRound);
//
// // პირველი რაუნდის დაწყება
// startNewRound();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - მთვლელის აპლიკაცია
// (გაზრდა / შემცირება / გადატვირთვა DOM განახლებით)

/*
ააწყვეთ მთვლელის აპლიკაცია გაზრდის, შემცირების და გადატვირთვის ფუნქციონალით.

1. შექმენით HTML ფაილი:
   - <p> ელემენტი კლასით 'counter-value', რომელიც აჩვენებს "0"
   - სამი ღილაკი: კლასით 'btn-increment' (+), კლასით 'btn-decrement' (-),
     კლასით 'btn-reset' (Reset)
   - <p> ელემენტი კლასით 'counter-status' სტატუსის შეტყობინებებისთვის
2. შექმენით ცვლადი 'count' ინიციალიზებული 0-ით
3. შექმენით ფუნქცია 'updateDisplay', რომელიც:
   - აყენებს '.counter-value'-ის textContent-ს მიმდინარე count-ზე
   - ცვლის '.counter-value'-ის ფერს მნიშვნელობის მიხედვით:
     - დადებითი: მწვანე (#2ecc71)
     - უარყოფითი: წითელი (#e74c3c)
     - ნული: თეთრი (#ecf0f1)
   - ანახლებს სტატუსის შეტყობინებას:
     - count > 10: "მაღალი მნიშვნელობა!"
     - count < -10: "ძალიან დაბალი!"
     - count === 0: "ნულზე გადატვირთულია"
     - სხვა შემთხვევაში: ""
4. დაამატეთ click მოვლენის მსმენელები:
   - გაზრდის ღილაკი: count++ შემდეგ updateDisplay()
   - შემცირების ღილაკი: count-- შემდეგ updateDisplay()
   - გადატვირთვის ღილაკი: count = 0 შემდეგ updateDisplay()

სატესტო მონაცემები: დააჭირეთ გაზრდას 5-ჯერ -> აჩვენებს "5" მწვანეში
                     დააჭირეთ შემცირებას 10-ჯერ -> აჩვენებს "-5" წითელში
                     დააჭირეთ გადატვირთვას -> აჩვენებს "0" თეთრში

მინიშნება: გამოიყენეთ element.style.color ტექსტის ფერის შესაცვლელად
მინიშნება: count შეინახეთ state ცვლადად ჰენდლერების გარეთ

წარმატებები 😀
*/

// let count = 0;
//
// const updateDisplay = function () {
//   document.querySelector('.counter-value').textContent = count;
//
//   if (count > 0) {
//     document.querySelector('.counter-value').style.color = '#2ecc71';
//   } else if (count < 0) {
//     document.querySelector('.counter-value').style.color = '#e74c3c';
//   } else {
//     document.querySelector('.counter-value').style.color = '#ecf0f1';
//   }
//
//   if (count > 10) {
//     document.querySelector('.counter-status').textContent = 'მაღალი მნიშვნელობა!';
//   } else if (count < -10) {
//     document.querySelector('.counter-status').textContent = 'ძალიან დაბალი!';
//   } else if (count === 0) {
//     document.querySelector('.counter-status').textContent = 'ნულზე გადატვირთულია';
//   } else {
//     document.querySelector('.counter-status').textContent = '';
//   }
// };
//
// document.querySelector('.btn-increment').addEventListener('click', function () {
//   count++;
//   updateDisplay();
// });
//
// document.querySelector('.btn-decrement').addEventListener('click', function () {
//   count--;
//   updateDisplay();
// });
//
// document.querySelector('.btn-reset').addEventListener('click', function () {
//   count = 0;
//   updateDisplay();
// });
//
// updateDisplay();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - ქვიზ ბარათი
// (პასუხის ჩვენება/დამალვა სტილის მანიპულირებით)

/*
ააწყვეთ ფლეშქარდ ქვიზი, სადაც ღილაკზე დაკლიკება ჩვენს ან მალავს პასუხს.

1. შექმენით HTML ფაილი:
   - <div> კლასით 'card', რომელიც შეიცავს:
     - <p> კლასით 'question-text', რომელიც აჩვენებს შეკითხვას
     - <p> კლასით 'answer-text', რომელიც თავდაპირველად დამალულია
       (გამოიყენეთ style="display: none;" HTML-ში)
   - <button> კლასით 'toggle-btn', რომელიც აჩვენებს "პასუხის ჩვენება"
   - <p> კლასით 'card-counter', რომელიც აჩვენებს "ბარათი 1 / 3"
   - <button> კლასით 'next-card', რომელიც აჩვენებს "შემდეგი ბარათი"
2. შექმენით მასივი 'cards', რომელიც შეიცავს 3 ობიექტს, თითოეულს
   'question' და 'answer' თვისებებით:
   - { question: "რას ნიშნავს DOM?", answer: "Document Object Model" }
   - { question: "რომელი მეთოდი ირჩევს HTML ელემენტს?", answer: "document.querySelector()" }
   - { question: "როგორ ვამაგრებთ click ჰენდლერს?", answer: "element.addEventListener('click', fn)" }
3. შექმენით ცვლადი 'currentCard', რომელიც იწყება 0-დან
4. შექმენით ცვლადი 'isAnswerVisible', რომელიც იწყება false-დან
5. შექმენით ფუნქცია 'displayCard', რომელიც:
   - ანახლებს შეკითხვის ტექსტს cards მასივიდან
   - მალავს პასუხს (display-ს აყენებს 'none'-ზე)
   - ღილაკის ტექსტს აყენებს "პასუხის ჩვენება"-ზე
   - isAnswerVisible-ს აყენებს false-ზე
   - ანახლებს ბარათის მთვლელის ტექსტს
6. დაამატეთ click მსმენელი toggle ღილაკზე:
   - თუ პასუხი დამალულია, აჩვენეთ (display = 'block') და შეცვალეთ ღილაკი "პასუხის დამალვა"-ზე
   - თუ პასუხი ჩანს, დამალეთ (display = 'none') და შეცვალეთ ღილაკი "პასუხის ჩვენება"-ზე
   - შეცვალეთ isAnswerVisible ცვლადი
7. დაამატეთ click მსმენელი next-card ღილაკზე:
   - გაზარდეთ currentCard (ბოლო ბარათის შემდეგ დაბრუნდით 0-ზე)
   - გამოიძახეთ displayCard()

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი 3 ბარათის ობიექტი

მინიშნება: გამოიყენეთ element.style.display = 'none' დასამალად და 'block' საჩვენებლად
მინიშნება: გამოიყენეთ modulo ოპერატორი (%) ციკლისთვის: currentCard = (currentCard + 1) % cards.length

წარმატებები 😀
*/

// const cards = [
//   { question: 'რას ნიშნავს DOM?', answer: 'Document Object Model' },
//   {
//     question: 'რომელი მეთოდი ირჩევს HTML ელემენტს?',
//     answer: 'document.querySelector()',
//   },
//   {
//     question: 'როგორ ვამაგრებთ click ჰენდლერს?',
//     answer: "element.addEventListener('click', fn)",
//   },
// ];
//
// let currentCard = 0;
// let isAnswerVisible = false;
//
// const displayCard = function () {
//   document.querySelector('.question-text').textContent =
//     cards[currentCard].question;
//   document.querySelector('.answer-text').textContent =
//     cards[currentCard].answer;
//   document.querySelector('.answer-text').style.display = 'none';
//   document.querySelector('.toggle-btn').textContent = 'პასუხის ჩვენება';
//   isAnswerVisible = false;
//   document.querySelector('.card-counter').textContent = `ბარათი ${
//     currentCard + 1
//   } / ${cards.length}`;
// };
//
// document.querySelector('.toggle-btn').addEventListener('click', function () {
//   if (isAnswerVisible) {
//     document.querySelector('.answer-text').style.display = 'none';
//     document.querySelector('.toggle-btn').textContent = 'პასუხის ჩვენება';
//   } else {
//     document.querySelector('.answer-text').style.display = 'block';
//     document.querySelector('.toggle-btn').textContent = 'პასუხის დამალვა';
//   }
//   isAnswerVisible = !isAnswerVisible;
// });
//
// document.querySelector('.next-card').addEventListener('click', function () {
//   currentCard = (currentCard + 1) % cards.length;
//   displayCard();
// });
//
// displayCard();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - კამათლის თამაში
// (შემთხვევითი რიცხვი + ეკრანი + ქულის თვალყურის დევნება)

/*
ააწყვეთ კამათლის თამაში, სადაც ორი მოთამაშე რიგრიგობით აგორებს კამათელს.
პირველი მოთამაშე, რომელიც სამიზნე ქულას მიაღწევს, იმარჯვებს!

1. შექმენით HTML ფაილი:
   - <div> კლასით 'dice-display', რომელიც აჩვენებს "🎲"
   - <p> კლასით 'roll-result' გაგორების შედეგის საჩვენებლად
   - <button> კლასით 'roll-btn', რომელიც აჩვენებს "კამათლის გაგორება"
   - ორი ქულის ეკრანი:
     - <p> კლასით 'p1-score', რომელიც აჩვენებს "მოთამაშე 1: 0"
     - <p> კლასით 'p2-score', რომელიც აჩვენებს "მოთამაშე 2: 0"
   - <p> კლასით 'current-player', რომელიც აჩვენებს "მიმდინარე: მოთამაშე 1"
   - <p> კლასით 'winner-message' გამარჯვებულის გამოცხადებისთვის
   - <button> კლასით 'reset-btn', რომელიც აჩვენებს "ახალი თამაში"
2. შექმენით state ცვლადები:
   - p1Score = 0, p2Score = 0
   - currentPlayer = 1
   - targetScore = 20
   - gameOver = false
3. შექმენით ფუნქცია 'rollDice', რომელიც აბრუნებს შემთხვევით რიცხვს 1-6
4. შექმენით ფუნქცია 'updateScores', რომელიც ანახლებს ორივე ქულის ეკრანს
5. დაამატეთ click მსმენელი გაგორების ღილაკზე:
   - თუ თამაში დასრულებულია, არაფერი გააკეთო (return-ით გამოდი)
   - გააგორე კამათელი და აჩვენე შედეგი roll-result-ში
   - აჩვენე კამათლის ემოჯი dice-display-ში გაგორების მიხედვით:
     (1='⚀', 2='⚁', 3='⚂', 4='⚃', 5='⚄', 6='⚅')
   - დაამატე გაგორება მიმდინარე მოთამაშის ქულას
   - განაახლე ქულის ეკრანი
   - შეამოწმე, მიაღწია თუ არა მიმდინარე მოთამაშე სამიზნე ქულას:
     - თუ კი: აჩვენე გამარჯვებულის შეტყობინება და gameOver = true
     - თუ არა: გადაერთე მეორე მოთამაშეზე და განაახლე current-player
6. დაამატეთ click მსმენელი გადატვირთვის ღილაკზე:
   - გადააყენე ყველა state ცვლადი
   - გაასუფთავე ყველა ეკრანი
   - gameOver დააყენე false-ზე

სატესტო მონაცემები: შედეგები შემთხვევითია, მაგრამ შეამოწმე:
- გაგორება ემატება მიმდინარე მოთამაშის ქულას
- მოთამაშეები რიგრიგობით ცვლიან ერთმანეთს
- პირველი 20-მდე მისულთ იმარჯვებს
- გადატვირთვა ყველაფერს ასუფთავებს

მინიშნება: გამოიყენეთ მასივი კამათლის ემოჯებისთვის: ['⚀','⚁','⚂','⚃','⚄','⚅'][roll - 1]
მინიშნება: მოთამაშის გადართვა: currentPlayer = currentPlayer === 1 ? 2 : 1

წარმატებები 😀
*/

let p1Score = 0;
let p2Score = 0;
let currentPlayer = 1;
const targetScore = 20;
let gameOver = false;

const diceEmojis = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

const rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const updateScores = function () {
  document.querySelector('.p1-score').textContent = `მოთამაშე 1: ${p1Score}`;
  document.querySelector('.p2-score').textContent = `მოთამაშე 2: ${p2Score}`;
};

document.querySelector('.roll-btn').addEventListener('click', function () {
  if (gameOver) return;

  const roll = rollDice();
  document.querySelector('.dice-display').textContent = diceEmojis[roll - 1];
  document.querySelector('.roll-result').textContent = `გაგორდა: ${roll}`;

  if (currentPlayer === 1) {
    p1Score += roll;
  } else {
    p2Score += roll;
  }

  updateScores();

  if (
    (currentPlayer === 1 && p1Score >= targetScore) ||
    (currentPlayer === 2 && p2Score >= targetScore)
  ) {
    document.querySelector(
      '.winner-message'
    ).textContent = `მოთამაშე ${currentPlayer} იმარჯვებს!`;
    document.querySelector('body').style.backgroundColor = '#2ecc71';
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.querySelector(
      '.current-player'
    ).textContent = `მიმდინარე: მოთამაშე ${currentPlayer}`;
  }
});

document.querySelector('.reset-btn').addEventListener('click', function () {
  p1Score = 0;
  p2Score = 0;
  currentPlayer = 1;
  gameOver = false;

  updateScores();
  document.querySelector('.dice-display').textContent = '🎲';
  document.querySelector('.roll-result').textContent = '';
  document.querySelector('.current-player').textContent = 'მიმდინარე: მოთამაშე 1';
  document.querySelector('.winner-message').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
