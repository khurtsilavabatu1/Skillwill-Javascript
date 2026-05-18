"use strict";

////////////////////////////////////
// Pig Game - მოწინავე DOM მანიპულირება
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////

////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ქვა ქაღალდი მაკრატელი
// (ორი მოთამაშე, DOM განახლებები, ქულების თვალყურის დევნება, რესეტი)

/*
ააწყვეთ ქვა ქაღალდი მაკრატელის თამაში ორი მოთამაშისთვის, რომელიც კონსოლში
მუშაობს, Pig Game-ის თამაშის მდგომარეობის მართვის პატერნების გამოყენებით.

1. გამოაცხადეთ თამაშის მდგომარეობის ცვლადები 'let'-ით (საწყისი მნიშვნელობების გარეშე):
   scores (მასივი 2 მოთამაშისთვის), activePlayer, playing, roundCount

2. შექმენით init ფუნქცია, რომელიც:
   - აყენებს scores-ს [0, 0]-ზე
   - აყენებს activePlayer-ს 0-ზე
   - აყენებს playing-ს true-ზე
   - აყენებს roundCount-ს 0-ზე
   - ლოგავს "თამაში განახლდა! ქვა ქაღალდი მაკრატელი - პირველი 3 მოგებამდე!"
   გამოიძახეთ init() დაუყოვნებლივ.

3. შექმენით ფუნქცია 'getChoice', რომელიც იღებს მოთამაშის ნომერს (0 ან 1) და
   აბრუნებს შემთხვევით არჩევანს: 'rock', 'paper', ან 'scissors'
   მინიშნება: გამოიყენეთ Math.random() და if/else ან მასივი ინდექსით

4. შექმენით ფუნქცია 'determineWinner', რომელიც იღებს ორ არჩევანს და აბრუნებს:
   - 0 თუ მე-1 მოთამაშე იმარჯვებს
   - 1 თუ მე-2 მოთამაშე იმარჯვებს
   - -1 თუ ფრეა

5. შექმენით ფუნქცია 'playRound', რომელიც:
   - ჯერ ამოწმებს 'playing' ფლაგს (ადრეულად აბრუნებს თუ false-ია)
   - იღებს არჩევანს ორივე მოთამაშისთვის getChoice-ით
   - ადგენს გამარჯვებულს
   - განაახლებს scores მასივს
   - ზრდის roundCount-ს
   - ლოგავს რაუნდის შედეგს: "რაუნდი 1: rock vs scissors - მოთამაშე 1 იმარჯვებს!"
   - ამოწმებს, მიაღწია თუ არა რომელიმე მოთამაშემ 3 მოგებას
   - თუ კი: აყენებს playing-ს false-ზე და ლოგავს საბოლოო გამარჯვებულს
   - იყენებს template literal-ებს activePlayer-ით დინამიური შეტყობინებებისთვის

6. სიმულირეთ სრული თამაში playRound()-ის while ციკლში გამოძახებით
   (სანამ playing true-ა, მაქსიმუმ 20 რაუნდი უსასრულო ციკლის თავიდან ასაცილებლად)

სატესტო მონაცემები: შემთხვევითი - შედეგები ყოველ გაშვებაზე განსხვავებული იქნება
მოსალოდნელი: თამაში ითამაშებს რაუნდებს სანამ ვინმე 3 მოგებას მიაღწევს

მინიშნება: შემთხვევითი არჩევანისთვის შექმენით მასივი ['rock', 'paper', 'scissors']
      და გამოიყენეთ Math.trunc(Math.random() * 3) როგორც ინდექსი
მინიშნება: გამოიყენეთ playing ფლაგის პატერნი Pig Game-იდან

წარმატებები 😀
*/

// let scores, activePlayer, playing, roundCount;

// const init = function () {
//   scores = [0, 0];
//   activePlayer = 0;
//   playing = true;
//   roundCount = 0;
//   console.log('თამაში განახლდა! ქვა ქაღალდი მაკრატელი - პირველი 3 მოგებამდე!');
// };
// init();

// const getChoice = function (player) {
//   const choices = ['rock', 'paper', 'scissors'];
//   const randomIndex = Math.trunc(Math.random() * 3);
//   return choices[randomIndex];
// };

// const determineWinner = function (choice1, choice2) {
//   if (choice1 === choice2) return -1;
//   if (
//     (choice1 === 'rock' && choice2 === 'scissors') ||
//     (choice1 === 'paper' && choice2 === 'rock') ||
//     (choice1 === 'scissors' && choice2 === 'paper')
//   ) {
//     return 0;
//   } else {
//     return 1;
//   }
// };

// const playRound = function () {
//   if (!playing) return;

//   const choice0 = getChoice(0);
//   const choice1 = getChoice(1);
//   const winner = determineWinner(choice0, choice1);

//   roundCount++;

//   if (winner === -1) {
//     console.log(`რაუნდი ${roundCount}: ${choice0} vs ${choice1} - ფრე!`);
//   } else {
//     scores[winner]++;
//     console.log(
//       `რაუნდი ${roundCount}: ${choice0} vs ${choice1} - მოთამაშე ${
//         winner + 1
//       } იმარჯვებს! (ქულა: ${scores[0]}-${scores[1]})`
//     );
//   }

//   if (scores[0] >= 3) {
//     playing = false;
//     console.log(
//       `თამაში დასრულდა! მოთამაშე 1 იმარჯვებს მატჩში ${scores[0]}-${scores[1]}!`
//     );
//   } else if (scores[1] >= 3) {
//     playing = false;
//     console.log(
//       `თამაში დასრულდა! მოთამაშე 2 იმარჯვებს მატჩში ${scores[0]}-${scores[1]}!`
//     );
//   }
// };

// // სრული თამაშის სიმულაცია
// let safetyCounter = 0;
// while (playing && safetyCounter < 20) {
//   playRound();
//   safetyCounter++;
// }
