'use strict';

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


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - მეხსიერების ბარათის თამაში (გამარტივებული)
// (ბარათების გადაბრუნება, წყვილების პოვნა, მცდელობების თვალყურის დევნება)

/*
ააწყვეთ მეხსიერების ბარათის გამარტივებული თამაში, რომელიც კონსოლში მუშაობს.
თამაშში რიცხვების წყვილები "დაფაზე" დამალულია და მოთამაშე ცდილობს
შესაბამისი წყვილების პოვნას.

1. შექმენით ფუნქცია 'createBoard', რომელიც:
   - იღებს size პარამეტრს (წყვილების რაოდენობა)
   - ქმნის წყვილების მასივს: [1,1,2,2,3,3,...] მოცემული ზომისთვის
   - არევს მასივს (გამოიყენეთ ქვემოთ მოცემული მარტივი არევის ალგორითმი)
   - აბრუნებს არეულ მასივს
   მინიშნება: არევისთვის გაიარეთ მასივი ბოლოდან დასაწყისისკენ,
         თითოეული ელემენტი გაცვალეთ შემთხვევით ადრინდელ ელემენტთან

2. გამოაცხადეთ თამაშის მდგომარეობის ცვლადები 'let'-ით:
   board, revealedBoard, attempts, matchesFound, totalPairs, playing

3. შექმენით init ფუნქცია, რომელიც:
   - აყენებს totalPairs-ს 4-ზე (4 წყვილი = 8 ბარათი)
   - ქმნის დაფას createBoard(totalPairs)-ით
   - ქმნის revealedBoard-ს როგორც false მნიშვნელობების მასივს (დაფის ტოლი სიგრძის)
   - აყენებს attempts-ს 0-ზე და matchesFound-ს 0-ზე
   - აყენებს playing-ს true-ზე
   - ლოგავს დაფის ზომას და "იპოვეთ ყველა წყვილი!"
   გამოიძახეთ init() დაუყოვნებლივ.

4. შექმენით ფუნქცია 'displayBoard', რომელიც:
   - ციკლით გადის დაფაზე
   - აჩვენებს რიცხვს თუ revealedBoard[i] არის true, წინააღმდეგ შემთხვევაში აჩვენებს '?'
   - ლოგავს ჩვენებას: "[ ? ? 3 ? ? 3 ? ? ]"

5. შექმენით ფუნქცია 'flipCard', რომელიც იღებს ინდექსს:
   - ჯერ ამოწმებს playing ფლაგს
   - ამოწმებს, უკვე გამოვლენილია თუ არა ბარათი (გამოტოვებს თუ კი)
   - ავლენს ბარათს (აყენებს revealedBoard[index]-ს true-ზე)
   - აბრუნებს board[index]-ის მნიშვნელობას

6. შექმენით ფუნქცია 'playTurn', რომელიც იღებს ორ ინდექსს:
   - ამოწმებს playing ფლაგს
   - აბრუნებს ორივე ბარათს
   - ზრდის attempts-ს
   - ამოწმებს ემთხვევა თუ არა მნიშვნელობები
   - თუ ემთხვევა: ლოგავს "წყვილი ნაპოვნია!", ზრდის matchesFound-ს
   - თუ არ ემთხვევა: მალავს ორივე ბარათს ხელახლა, ლოგავს "არ ემთხვევა!"
   - ამოწმებს ნაპოვნია თუ არა ყველა წყვილი (matchesFound === totalPairs)
   - თუ კი: აყენებს playing-ს false-ზე, ლოგავს გამარჯვებას მცდელობების რაოდენობით

სატესტო მონაცემები: გამოიყენეთ totalPairs = 4 (8 ბარათი)
მოსალოდნელი: დაფა შემთხვევითად არეული, იპოვეთ ყველა 4 წყვილი

მინიშნება: მარტივი არევა: for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.trunc(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // გაცვლა
      }

წარმატებები 😀
*/

// const createBoard = function (size) {
//   const board = [];
//   for (let i = 1; i <= size; i++) {
//     board.push(i);
//     board.push(i);
//   }
//   // არევა (Fisher-Yates)
//   for (let i = board.length - 1; i > 0; i--) {
//     const j = Math.trunc(Math.random() * (i + 1));
//     [board[i], board[j]] = [board[j], board[i]];
//   }
//   return board;
// };

// let board, revealedBoard, attempts, matchesFound, totalPairs, playing;

// const init = function () {
//   totalPairs = 4;
//   board = createBoard(totalPairs);
//   revealedBoard = new Array(board.length).fill(false);
//   attempts = 0;
//   matchesFound = 0;
//   playing = true;
//   console.log(`მეხსიერების თამაში: ${totalPairs} წყვილი (${board.length} ბარათი). იპოვეთ ყველა წყვილი!`);
// };
// init();

// const displayBoard = function () {
//   let display = '[ ';
//   for (let i = 0; i < board.length; i++) {
//     display += revealedBoard[i] ? `${board[i]} ` : '? ';
//   }
//   display += ']';
//   console.log(display);
// };

// const flipCard = function (index) {
//   if (!playing) return -1;
//   if (revealedBoard[index]) return -1;
//   revealedBoard[index] = true;
//   return board[index];
// };

// const playTurn = function (index1, index2) {
//   if (!playing) return;
//   if (index1 === index2) {
//     console.log('აირჩიეთ ორი განსხვავებული ბარათი!');
//     return;
//   }

//   const val1 = flipCard(index1);
//   const val2 = flipCard(index2);

//   if (val1 === -1 || val2 === -1) {
//     console.log('არასწორი ბარათის არჩევანი!');
//     return;
//   }

//   attempts++;

//   if (val1 === val2) {
//     console.log(`მცდელობა ${attempts}: წყვილი ნაპოვნია! (${val1} = ${val2})`);
//     matchesFound++;
//   } else {
//     console.log(`მცდელობა ${attempts}: არ ემთხვევა (${val1} vs ${val2})`);
//     revealedBoard[index1] = false;
//     revealedBoard[index2] = false;
//   }

//   displayBoard();

//   if (matchesFound === totalPairs) {
//     playing = false;
//     console.log(`გილოცავთ! ყველა წყვილი ნაპოვნია ${attempts} მცდელობაში!`);
//   }
// };

// // თამაშის სიმულაცია - სცადეთ რამდენიმე სვლა
// console.log('დამალული დაფა (მითითებისთვის):', board);
// displayBoard();
// // სვლების მაგალითები (პოზიციები დამოკიდებულია არეულ დაფაზე):
// playTurn(0, 1);
// playTurn(2, 3);
// playTurn(4, 5);
// playTurn(6, 7);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - სწრაფი აკრეფის თამაში
// (შემთხვევითი სიტყვის ჩვენება, სწორი/არასწორის თვალყურის დევნება, ტაიმერი თამაშის მდგომარეობით)

/*
ააწყვეთ სწრაფი აკრეფის თამაშის სიმულატორი, რომელიც კონსოლში მუშაობს.
თამაში აჩვენებს შემთხვევით სიტყვებს და მოთამაშე "აკრეფს" მათ (სიმულირებული).

1. შექმენით სიტყვების ბანკის მასივი მინიმუმ 10 სიტყვით:
   ['javascript', 'function', 'variable', 'array', 'object',
    'boolean', 'string', 'number', 'class', 'const']

2. გამოაცხადეთ თამაშის მდგომარეობის ცვლადები 'let'-ით:
   correctCount, wrongCount, currentWord, wordsPlayed, maxWords, playing

3. შექმენით init ფუნქცია, რომელიც:
   - აყენებს correctCount-ს და wrongCount-ს 0-ზე
   - აყენებს wordsPlayed-ს 0-ზე
   - აყენებს maxWords-ს 5-ზე (თამაში მთავრდება 5 სიტყვის შემდეგ)
   - აყენებს playing-ს true-ზე
   - აყენებს currentWord-ს შემთხვევით სიტყვაზე სიტყვების ბანკიდან
   - ლოგავს "სწრაფი აკრეფის თამაში! სწორად აკრიფეთ სიტყვები."
   გამოიძახეთ init() დაუყოვნებლივ.

4. შექმენით ფუნქცია 'getRandomWord', რომელიც:
   - აბრუნებს შემთხვევით სიტყვას სიტყვების ბანკიდან
   - იყენებს Math.trunc(Math.random() * wordBank.length)

5. შექმენით ფუნქცია 'showWord', რომელიც:
   - ლოგავს მიმდინარე სიტყვას აკრეფისთვის: "აკრიფეთ ეს სიტყვა: javascript"
   - აბრუნებს currentWord-ს

6. შექმენით ფუნქცია 'submitAnswer', რომელიც იღებს მოთამაშის შეყვანილ სტრინგს:
   - ჯერ ამოწმებს playing ფლაგს
   - ადარებს შეყვანილს currentWord-ს (რეგისტრის უგულებელყოფით toLowerCase-ით)
   - თუ სწორია: ზრდის correctCount-ს, ლოგავს "სწორია!"
   - თუ არასწორია: ზრდის wrongCount-ს, ლოგავს "არასწორია! სიტყვა იყო: [სიტყვა]"
   - ზრდის wordsPlayed-ს
   - ამოწმებს wordsPlayed >= maxWords თუ არა
   - თუ კი: აყენებს playing-ს false-ზე, იძახებს showResults ფუნქციას
   - თუ არა: აყენებს currentWord-ს ახალ შემთხვევით სიტყვაზე და აჩვენებს მას

7. შექმენით ფუნქცია 'showResults', რომელიც:
   - ლოგავს სიტყვების ჯამს, სწორი პასუხების რაოდენობას, არასწორი პასუხების რაოდენობას
   - ითვლის და ლოგავს სიზუსტის პროცენტს
   - იყენებს template literal-ებს ფორმატირებული გამოსატანისთვის:
     "შედეგები: 4/5 სწორი (80% სიზუსტე)"

სატესტო მონაცემები: სიმულირეთ სწორი და არასწორი პასუხებით
მოსალოდნელი: თამაში თვალყურს ადევნებს ქულას 5 სიტყვის განმავლობაში და აჩვენებს შედეგებს

მინიშნება: აკრეფის სიმულაციისთვის უბრალოდ გამოიძახეთ submitAnswer სტრინგებით
მინიშნება: რეგისტრის უგულებელმყოფელი შედარებისთვის: input.toLowerCase() === word.toLowerCase()

წარმატებები 😀
*/

// const wordBank = [
//   'javascript', 'function', 'variable', 'array', 'object',
//   'boolean', 'string', 'number', 'class', 'const'
// ];

// let correctCount, wrongCount, currentWord, wordsPlayed, maxWords, playing;

// const getRandomWord = function () {
//   return wordBank[Math.trunc(Math.random() * wordBank.length)];
// };

// const init = function () {
//   correctCount = 0;
//   wrongCount = 0;
//   wordsPlayed = 0;
//   maxWords = 5;
//   playing = true;
//   currentWord = getRandomWord();
//   console.log('სწრაფი აკრეფის თამაში! სწორად აკრიფეთ სიტყვები.');
//   console.log(`თქვენ გექნებათ ${maxWords} სიტყვა. წარმატებები!`);
// };
// init();

// const showWord = function () {
//   console.log(`\nაკრიფეთ ეს სიტყვა: "${currentWord}"`);
//   return currentWord;
// };

// const showResults = function () {
//   const accuracy = Math.round((correctCount / maxWords) * 100);
//   console.log('\n--- თამაში დასრულდა ---');
//   console.log(`შედეგები: ${correctCount}/${maxWords} სწორი (${accuracy}% სიზუსტე)`);
//   console.log(`სწორი: ${correctCount} | არასწორი: ${wrongCount}`);

//   if (accuracy >= 80) {
//     console.log('შესანიშნავი აკრეფა!');
//   } else if (accuracy >= 60) {
//     console.log('კარგი მცდელობა, განაგრძეთ ვარჯიში!');
//   } else {
//     console.log('განაგრძეთ ვარჯიში სიზუსტის გასაუმჯობესებლად!');
//   }
// };

// const submitAnswer = function (input) {
//   if (!playing) {
//     console.log('თამაში დასრულებულია! გამოიძახეთ init() თავიდან სათამაშოდ.');
//     return;
//   }

//   if (input.toLowerCase() === currentWord.toLowerCase()) {
//     correctCount++;
//     console.log('სწორია!');
//   } else {
//     wrongCount++;
//     console.log(`არასწორია! სიტყვა იყო: "${currentWord}"`);
//   }

//   wordsPlayed++;

//   if (wordsPlayed >= maxWords) {
//     playing = false;
//     showResults();
//   } else {
//     currentWord = getRandomWord();
//     showWord();
//   }
// };

// // თამაშის სიმულაცია
// showWord();
// submitAnswer(currentWord);           // სწორი (ნამდვილი სიტყვა)
// submitAnswer('wrong-answer');         // არასწორი
// submitAnswer(currentWord);           // სწორი (ნამდვილი სიტყვა)
// submitAnswer(currentWord);           // სწორი (ნამდვილი სიტყვა)
// submitAnswer('typo');                // არასწორი


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - სვლებიანი მათემატიკური თამაში
// (მოთამაშეები წყვეტენ შემთხვევით მათემატიკურ ამოცანებს, პირველი 5 სწორ პასუხამდე იმარჯვებს)

/*
ააწყვეთ სვლებიანი მათემატიკური თამაში ორი მოთამაშისთვის. ყოველ სვლაზე,
აქტიურ მოთამაშეს ეძლევა შემთხვევითი მათემატიკური ამოცანა. თუ სწორად
უპასუხებს, ქულას იღებს. პირველი მოთამაშე 5 სწორი პასუხით იმარჯვებს.

1. გამოაცხადეთ თამაშის მდგომარეობის ცვლადები 'let'-ით:
   scores, activePlayer, playing, currentProblem, currentAnswer

2. შექმენით init ფუნქცია, რომელიც:
   - აყენებს scores-ს [0, 0]-ზე
   - აყენებს activePlayer-ს 0-ზე
   - აყენებს playing-ს true-ზე
   - ლოგავს "მათემატიკური ბრძოლა! პირველი 5 სწორ პასუხამდე იმარჯვებს!"
   გამოიძახეთ init() დაუყოვნებლივ.

3. შექმენით ფუნქცია 'generateProblem', რომელიც:
   - გენერირებს ორ შემთხვევით რიცხვს (1-20)
   - შემთხვევით ირჩევს ოპერაციას: +, -, ან *
   - ითვლის სწორ პასუხს
   - ინახავს ამოცანის სტრინგს currentProblem-ში
   - ინახავს პასუხს currentAnswer-ში
   - აბრუნებს ამოცანის სტრინგს: "15 + 7 = ?"

4. შექმენით ფუნქცია 'switchPlayer', რომელიც:
   - გადართავს activePlayer-ს 0-სა და 1-ს შორის
   - ლოგავს "მოთამაშე [n]-ის სვლა!" template literal-ით activePlayer-ით

5. შექმენით ფუნქცია 'submitAnswer', რომელიც იღებს რიცხვს:
   - ჯერ ამოწმებს playing ფლაგს
   - ადარებს currentAnswer-ს
   - თუ სწორია: ზრდის scores[activePlayer]-ს, ლოგავს "სწორია!"
   - თუ არასწორია: ლოგავს "არასწორია! პასუხი იყო [currentAnswer]"
   - ლოგავს მიმდინარე ქულებს: "ქულები: მოთამაშე 1: 3 | მოთამაშე 2: 2"
   - ამოწმებს scores[activePlayer] >= 5 თუ არა
   - თუ კი: აყენებს playing-ს false-ზე, ლოგავს გამარჯვებულს template literal-ით:
     "მოთამაშე [n] იმარჯვებს მათემატიკურ ბრძოლაში!"
   - თუ არა: გადართავს მოთამაშეს და გენერირებს ახალ ამოცანას

6. სიმულირეთ სრული თამაში while ციკლის გამოყენებით:
   - გენერირეთ ამოცანა, აჩვენეთ, გააგზავნეთ სწორი პასუხი
     (სწორი პასუხის სიმულაციისთვის) ან არასწორი პასუხი შემთხვევითად
   - გააგრძელეთ სანამ playing true-ა (დაამატეთ უსაფრთხოების მთვლელი)

სატესტო მონაცემები: შემთხვევითი მათემატიკური ამოცანები
მოსალოდნელი: თამაში მონაცვლეობს მოთამაშეებს შორის სანამ ერთი 5-ს მიაღწევს

მინიშნება: გამოიყენეთ Math.trunc(Math.random() * 20) + 1 შემთხვევითი 1-20-სთვის
მინიშნება: გამოიყენეთ scores[activePlayer] Pig Game-ის მსგავსად
მინიშნება: შემთხვევითი ოპერაციისთვის გამოიყენეთ მასივი ['+', '-', '*'] შემთხვევითი ინდექსით

წარმატებები 😀
*/

const wordBankCh4 = ['+', '-', '*'];

let scoresCh4, activePlayerCh4, playingCh4, currentProblem, currentAnswer;

const initCh4 = function () {
  scoresCh4 = [0, 0];
  activePlayerCh4 = 0;
  playingCh4 = true;
  currentProblem = '';
  currentAnswer = 0;
  console.log('მათემატიკური ბრძოლა! პირველი 5 სწორ პასუხამდე იმარჯვებს!');
};
initCh4();

const generateProblem = function () {
  const num1 = Math.trunc(Math.random() * 20) + 1;
  const num2 = Math.trunc(Math.random() * 20) + 1;
  const opIndex = Math.trunc(Math.random() * 3);
  const op = wordBankCh4[opIndex];

  if (op === '+') {
    currentAnswer = num1 + num2;
  } else if (op === '-') {
    currentAnswer = num1 - num2;
  } else {
    currentAnswer = num1 * num2;
  }

  currentProblem = `${num1} ${op} ${num2}`;
  return `${currentProblem} = ?`;
};

const switchPlayerCh4 = function () {
  activePlayerCh4 = activePlayerCh4 === 0 ? 1 : 0;
  console.log(`მოთამაშე ${activePlayerCh4 + 1}-ის სვლა!`);
};

const submitAnswerCh4 = function (answer) {
  if (!playingCh4) return;

  if (answer === currentAnswer) {
    scoresCh4[activePlayerCh4]++;
    console.log(
      `მოთამაშე ${activePlayerCh4 + 1} პასუხობს ${currentProblem} = ${answer} - სწორია!`
    );
  } else {
    console.log(
      `მოთამაშე ${activePlayerCh4 + 1} პასუხობს ${currentProblem} = ${answer} - არასწორია! პასუხი იყო ${currentAnswer}`
    );
  }

  console.log(
    `ქულები: მოთამაშე 1: ${scoresCh4[0]} | მოთამაშე 2: ${scoresCh4[1]}`
  );

  if (scoresCh4[activePlayerCh4] >= 5) {
    playingCh4 = false;
    console.log(
      `\nმოთამაშე ${activePlayerCh4 + 1} იმარჯვებს მათემატიკურ ბრძოლაში! საბოლოო: ${scoresCh4[0]}-${scoresCh4[1]}`
    );
  } else {
    switchPlayerCh4();
    const problem = generateProblem();
    console.log(`ამოხსენით: ${problem}`);
  }
};

// სრული თამაშის სიმულაცია
console.log('\n--- მათემატიკური ბრძოლის სიმულაცია ---');
let problem = generateProblem();
console.log(`მოთამაშე 1-ის სვლა!`);
console.log(`ამოხსენით: ${problem}`);

let safetyCh4 = 0;
while (playingCh4 && safetyCh4 < 30) {
  // შემთხვევით გადაწყვეტს მოთამაშე სწორად უპასუხებს თუ არა (70% შანსი)
  const answersCorrectly = Math.random() < 0.7;
  const playerAnswer = answersCorrectly
    ? currentAnswer
    : currentAnswer + Math.trunc(Math.random() * 5) + 1;

  submitAnswerCh4(playerAnswer);
  safetyCh4++;
}
