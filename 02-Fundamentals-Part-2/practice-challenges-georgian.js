'use strict';

////////////////////////////////////
// JavaScript ფუნდამენტური საფუძვლები - ნაწილი 2
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - კალორიების ტრეკერი
// (ფუნქციები + Arrow ფუნქციები)

/*
გინდათ ააწყოთ მარტივი კალორიების ტრეკერი, რომელიც გამოთვლის ადამიანის
ბაზალურ მეტაბოლიზმის სიჩქარეს (BMR) - კალორიების რაოდენობას,
რომელიც სხეულს მოსვენებულ მდგომარეობაში ესაჭიროება.

1. შექმენით arrow ფუნქცია 'calcBMR', რომელიც იღებს წონას (კგ),
   სიმაღლეს (სმ), ასაკს (წლები) და სქესს ('M' ან 'F') პარამეტრებად
2. მამაკაცებისთვის ფორმულაა: BMR = 10 * წონა + 6.25 * სიმაღლე - 5 * ასაკი + 5
3. ქალებისთვის ფორმულაა: BMR = 10 * წონა + 6.25 * სიმაღლე - 5 * ასაკი - 161
4. ფუნქციამ უნდა დააბრუნოს BMR მნიშვნელობა
5. შექმენით მეორე ფუნქცია 'describeCalories', რომელიც იღებს სახელს და BMR
   მნიშვნელობას, და აბრუნებს სტრინგს, მაგალითად:
   "John-ს მოსვენებულ მდგომარეობაში დაახლოებით 1695 კალორია ესაჭიროება დღეში."
6. გამოიძახეთ ორივე ფუნქცია და დალოგეთ შედეგები template literal-ების გამოყენებით

სატესტო მონაცემები 1: მამაკაცი, 80კგ, 180სმ, 30 წლის, სახელი "John"
სატესტო მონაცემები 2: ქალი, 60კგ, 165სმ, 25 წლის, სახელი "Sarah"

მინიშნება: გამოიყენეთ if/else arrow ფუნქციის შიგნით სქესის განსხვავების დასამუშავებლად
მინიშნება: Arrow ფუნქციას დასჭირდება ფიგურული ფრჩხილები {}, რადგან რამდენიმე ხაზი აქვს

წარმატებები 😀
*/

// const calcBMR = (weight, height, age, gender) => {
//   if (gender === 'M') {
//     return 10 * weight + 6.25 * height - 5 * age + 5;
//   } else {
//     return 10 * weight + 6.25 * height - 5 * age - 161;
//   }
// };

// const describeCalories = function (name, bmr) {
//   return `${name}-ს მოსვენებულ მდგომარეობაში დაახლოებით ${bmr} კალორია ესაჭიროება დღეში.`;
// };

// // ტესტი 1 - მამაკაცი
// const bmrJohn = calcBMR(80, 180, 30, 'M');
// console.log(`John-ის BMR: ${bmrJohn}`);
// console.log(describeCalories('John', bmrJohn));

// // ტესტი 2 - ქალი
// const bmrSarah = calcBMR(60, 165, 25, 'F');
// console.log(`Sarah-ს BMR: ${bmrSarah}`);
// console.log(describeCalories('Sarah', bmrSarah));


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - სტუდენტის ნიშნების მენეჯერი
// (ფუნქციები + მასივები)

/*
მასწავლებელს სჭირდება პროგრამა სტუდენტების ნიშნების სამართავად და იმის
დასადგენად, ვინ აბარებს და ვინ ჭრის გამოცდას.

1. შექმენით ფუნქცია 'calcAverage', რომელიც იღებს ქულების მასივს და აბრუნებს
   საშუალოს. ამისთვის ციკლების გარეშე (ჯერ არ გვისწავლია), შეკრიბეთ ელემენტები
   ინდექსებით (arr[0] + arr[1] + ... ) და გაყავით მასივის სიგრძეზე
2. შექმენით მასივი 'studentScores' 5 სატესტო ქულით
3. შექმენით ფუნქცია 'getLetterGrade', რომელიც იღებს რიცხვით ნიშანს და აბრუნებს
   ასოით ნიშანს:
   - A: >= 90
   - B: >= 80 და < 90
   - C: >= 70 და < 80
   - D: >= 60 და < 70
   - F: < 60
4. შექმენით ფუნქცია 'isPassing', რომელიც იღებს საშუალო ქულას და აბრუნებს
   true თუ ქულა >= 60, წინააღმდეგ შემთხვევაში false
5. გამოიძახეთ ყველა ფუნქცია და დაბეჭდეთ შედეგები template literal-ებით:
   "სტუდენტის საშუალო: 86.6 (B) - აბარებს"

სატესტო მონაცემები 1: [85, 92, 78, 90, 88]
სატესტო მონაცემები 2: [45, 55, 62, 38, 50]

მინიშნება: საშუალოს მისაღებად ციკლის გარეშე, ხელით შეკრიბეთ თითოეული ელემენტი:
          (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / arr.length

წარმატებები 😀
*/

// const calcAverage = function (arr) {
//   return (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]) / arr.length;
// };

// const getLetterGrade = function (score) {
//   if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// };

// const isPassing = score => score >= 60;

// // ტესტი 1
// const studentScores1 = [85, 92, 78, 90, 88];
// const avg1 = calcAverage(studentScores1);
// const letter1 = getLetterGrade(avg1);
// const passing1 = isPassing(avg1);
// console.log(
//   `სტუდენტის საშუალო: ${avg1} (${letter1}) - ${passing1 ? 'აბარებს' : 'ჭრის'}`
// );

// // ტესტი 2
// const studentScores2 = [45, 55, 62, 38, 50];
// const avg2 = calcAverage(studentScores2);
// const letter2 = getLetterGrade(avg2);
// const passing2 = isPassing(avg2);
// console.log(
//   `სტუდენტის საშუალო: ${avg2} (${letter2}) - ${passing2 ? 'აბარებს' : 'ჭრის'}`
// );


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - სავაჭრო სიის მენეჯერი
// (მასივები + მასივის მეთოდები)

/*
აწყობთ მარტივ სავაჭრო სიის აპლიკაციას მასივებისა და ბაზისური მასივის
მეთოდების გამოყენებით.

1. შექმენით მასივი 'shoppingList' შემდეგი ელემენტებით:
   'bread', 'eggs', 'milk', 'butter', 'cheese'
2. დაამატეთ 'tomatoes' და 'pasta' სიის ბოლოში (push)
3. დაამატეთ 'water' სიის დასაწყისში (unshift)
4. ამოიღეთ ბოლო ელემენტი სიიდან (pop) და შეინახეთ ცვლადში
   სახელად 'removedLast'
5. ამოიღეთ პირველი ელემენტი სიიდან (shift) და შეინახეთ ცვლადში
   სახელად 'removedFirst'
6. შეამოწმეთ, არის თუ არა 'milk' ჯერ კიდევ სიაში (includes) და დალოგეთ შედეგი
7. იპოვეთ 'butter'-ის ინდექსის პოზიცია სიაში (indexOf) და დალოგეთ
8. დაბეჭდეთ საბოლოო სავაჭრო სია და ელემენტების საერთო რაოდენობა
9. დაბეჭდეთ რა ამოიღეთ: "ბოლოდან ამოღებული: ___, დასაწყისიდან ამოღებული: ___"

მინიშნება: push და unshift აბრუნებენ მასივის ახალ სიგრძეს
მინიშნება: pop და shift აბრუნებენ ამოღებულ ელემენტს

წარმატებები 😀
*/

// const shoppingList = ['bread', 'eggs', 'milk', 'butter', 'cheese'];
// console.log('საწყისი სია:', shoppingList);

// // ბოლოში დამატება
// shoppingList.push('tomatoes');
// shoppingList.push('pasta');
// console.log('push-ის შემდეგ:', shoppingList);

// // დასაწყისში დამატება
// shoppingList.unshift('water');
// console.log('unshift-ის შემდეგ:', shoppingList);

// // ბოლოს ამოღება
// const removedLast = shoppingList.pop();
// console.log('pop-ის შემდეგ:', shoppingList);

// // პირველის ამოღება
// const removedFirst = shoppingList.shift();
// console.log('shift-ის შემდეგ:', shoppingList);

// // milk-ის შემოწმება
// const hasMilk = shoppingList.includes('milk');
// console.log(`არის 'milk' სიაში? ${hasMilk}`);

// // butter-ის ინდექსის პოვნა
// const butterIndex = shoppingList.indexOf('butter');
// console.log(`'butter' არის ინდექსზე: ${butterIndex}`);

// // საბოლოო შეჯამება
// console.log(`საბოლოო სავაჭრო სია (${shoppingList.length} ელემენტი):`, shoppingList);
// console.log(`ბოლოდან ამოღებული: ${removedLast}, დასაწყისიდან ამოღებული: ${removedFirst}`);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - გუნდის ქულების ტრეკერი
// (ფუნქციები + მასივები + მასივის მეთოდები კომბინირებული)

/*
ორმა კალათბურთის გუნდმა თითო 3 თამაში ითამაშა. თქვენ უნდა გაანალიზოთ
მათი შედეგები.

1. შექმენით მასივები თითოეული გუნდის ქულებით 3 თამაშისთვის:
   - Eagles: [88, 95, 72]
   - Hawks: [90, 78, 85]
2. შექმენით ფუნქცია 'calcTeamAverage', რომელიც იღებს 3 ქულის მასივს
   და აბრუნებს საშუალოს (შეკრიბეთ ხელით, ციკლები არ გჭირდებათ)
3. შექმენით ფუნქცია 'getTeamStatus', რომელიც იღებს საშუალო ქულას და აბრუნებს:
   - "Excellent" თუ საშუალო >= 90
   - "Good" თუ საშუალო >= 80 და < 90
   - "Average" თუ საშუალო >= 70 და < 80
   - "Needs Improvement" თუ საშუალო < 70
4. შექმენით ფუნქცია 'determineWinner', რომელიც იღებს ორი გუნდის სახელს და მათ
   საშუალოებს, და აბრუნებს სტრინგს გამარჯვებულის ან ფრის გამოცხადებით.
   მაგალითად: "Eagles იმარჯვებს 85.0 vs 84.3!" ან "ფრეა!"
5. შექმენით ახალი მასივი 'allScores', რომელიც შეიცავს ორივე გუნდის ყველა ქულას.
   გამოიყენეთ push Hawks-ის ქულების სათითაოდ დასამატებლად Eagles-ის ქულების
   ასლში. (მინიშნება: დაიწყეთ allScores-ის შექმნით Eagles-ის მნიშვნელობებით)
6. იპოვეთ ყველაზე მაღალი ქულა ყველა თამაშში allScores მასივის გამოყენებით.
   ციკლების გარეშე, შეადარეთ თითოეული ელემენტი ხელით.
7. დაბეჭდეთ ყველაფრის სრული ანგარიში

სატესტო მონაცემები: Eagles [88, 95, 72], Hawks [90, 78, 85]

მინიშნება: მაქსიმუმის საპოვნელად ციკლის გარეშე, შეგიძლიათ გამოიყენოთ
ჩადგმული ternary ოპერატორები ან მრავალი if/else
მინიშნება: მასივის ასლის შესაქმნელად გამოიყენეთ: const copy = [arr[0], arr[1], arr[2]]

წარმატებები 😀
*/

// const eaglesScores = [88, 95, 72];
// const hawksScores = [90, 78, 85];

// const calcTeamAverage = function (scores) {
//   return (scores[0] + scores[1] + scores[2]) / scores.length;
// };

// const getTeamStatus = function (avg) {
//   if (avg >= 90) {
//     return 'Excellent';
//   } else if (avg >= 80) {
//     return 'Good';
//   } else if (avg >= 70) {
//     return 'Average';
//   } else {
//     return 'Needs Improvement';
//   }
// };

// const determineWinner = function (team1, avg1, team2, avg2) {
//   if (avg1 > avg2) {
//     return `${team1} იმარჯვებს ${avg1} vs ${avg2}!`;
//   } else if (avg2 > avg1) {
//     return `${team2} იმარჯვებს ${avg2} vs ${avg1}!`;
//   } else {
//     return `ფრეა!`;
//   }
// };

// // საშუალოების გამოთვლა
// const eaglesAvg = calcTeamAverage(eaglesScores);
// const hawksAvg = calcTeamAverage(hawksScores);

// // სტატუსების მიღება
// const eaglesStatus = getTeamStatus(eaglesAvg);
// const hawksStatus = getTeamStatus(hawksAvg);

// // ყველა ქულის გაერთიანება
// const allScores = [eaglesScores[0], eaglesScores[1], eaglesScores[2]];
// allScores.push(hawksScores[0]);
// allScores.push(hawksScores[1]);
// allScores.push(hawksScores[2]);

// // ყველაზე მაღალი ქულის პოვნა ციკლის გარეშე
// let highest = allScores[0];
// if (allScores[1] > highest) highest = allScores[1];
// if (allScores[2] > highest) highest = allScores[2];
// if (allScores[3] > highest) highest = allScores[3];
// if (allScores[4] > highest) highest = allScores[4];
// if (allScores[5] > highest) highest = allScores[5];

// // ანგარიშის ბეჭდვა
// console.log('--- გუნდის ქულების შეჯამება ---');
// console.log(
//   `Eagles: ${eaglesAvg} საშუალო (${eaglesStatus}) - ქულები: ${eaglesScores}`
// );
// console.log(
//   `Hawks: ${hawksAvg} საშუალო (${hawksStatus}) - ქულები: ${hawksScores}`
// );
// console.log(determineWinner('Eagles', eaglesAvg, 'Hawks', hawksAvg));
// console.log(`ყველა ქულა ერთად: ${allScores}`);
// console.log(`ყველაზე მაღალი ქულა: ${highest}`);


////////////////////////////////////
// ⚠️ დამატებითი ჩელენჯები - ჯერ არ გავლილი მასალა
// ქვემოთ მოცემული ამოცანები მოიცავს ობიექტებსა და ციკლებს,
// რომლებიც ჯერ არ შესწავლილა.
// ისინი ჩართულია მხოლოდ სამომავლო მითითებისთვის.
// ამ ამოცანების ამოხსნა ამ ეტაპზე არ მოეთხოვებათ.
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - კონტაქტების წიგნი (დამატებითი)
// (ობიექტები + Dot/Bracket Notation + ობიექტის მეთოდები)

/*
ააწყვეთ მარტივი კონტაქტების წიგნი ობიექტების გამოყენებით.

1. შექმენით ობიექტი 'contact1' შემდეგი თვისებებით:
   - firstName: 'Alice'
   - lastName: 'Johnson'
   - age: 28
   - email: 'alice@example.com'
   - friends: ['Bob', 'Charlie', 'Diana']
   - მეთოდი 'getFullName', რომელიც აბრუნებს სრულ სახელს 'this'-ის გამოყენებით
   - მეთოდი 'getSummary', რომელიც აბრუნებს სტრინგს, მაგალითად:
     "Alice Johnson (28) - alice@example.com - 3 მეგობარი"
2. შექმენით მეორე ობიექტი 'contact2':
   - firstName: 'Bob'
   - lastName: 'Smith'
   - age: 32
   - email: 'bob@example.com'
   - friends: ['Alice', 'Eve']
   - იგივე მეთოდები, რაც contact1-ს
3. დალოგეთ თითოეული კონტაქტის სრული სახელი getFullName მეთოდით
4. დალოგეთ თითოეული კონტაქტის ანგარიში getSummary მეთოდით
5. შეამოწმეთ, შეიცავს თუ არა contact1-ის მეგობრების სია contact2-ის სახელს
   dot notation-ისა და includes მეთოდის გამოყენებით
6. დაამატეთ ახალი თვისება 'phone' contact1-ს dot notation-ით
7. დაამატეთ ახალი თვისება 'city' contact2-ს bracket notation-ით
8. დალოგეთ ორივე კონტაქტის საბოლოო მდგომარეობა

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მონაცემები

მინიშნება: ობიექტის მეთოდებში გამოიყენეთ 'this' ობიექტის საკუთარ თვისებებზე წვდომისთვის
მინიშნება: this.friends.length გაძლევთ მეგობრების რაოდენობას

წარმატებები 😀
*/

// const contact1 = {
//   firstName: 'Alice',
//   lastName: 'Johnson',
//   age: 28,
//   email: 'alice@example.com',
//   friends: ['Bob', 'Charlie', 'Diana'],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} (${this.age}) - ${this.email} - ${this.friends.length} მეგობარი`;
//   },
// };

// const contact2 = {
//   firstName: 'Bob',
//   lastName: 'Smith',
//   age: 32,
//   email: 'bob@example.com',
//   friends: ['Alice', 'Eve'],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} (${this.age}) - ${this.email} - ${this.friends.length} მეგობარი`;
//   },
// };

// // სრული სახელები
// console.log(contact1.getFullName());
// console.log(contact2.getFullName());

// // ანგარიშები
// console.log(contact1.getSummary());
// console.log(contact2.getSummary());

// // მეგობრობის შემოწმება
// const areFriends = contact1.friends.includes(contact2.firstName);
// console.log(
//   `არიან ${contact1.firstName} და ${contact2.firstName} მეგობრები? ${areFriends}`
// );

// // ახალი თვისებების დამატება
// contact1.phone = '555-0101';
// contact2['city'] = 'New York';

// // საბოლოო მდგომარეობის ლოგირება
// console.log('კონტაქტი 1:', contact1);
// console.log('კონტაქტი 2:', contact2);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #6 - ვარჯიშის ტრეკერი (დამატებითი)
// (ობიექტები + ციკლები + მასივები)

/*
ააწყვეთ ვარჯიშის ტრეკერი, რომელიც აღრიცხავს სავარჯიშოებს და ითვლის სტატისტიკას.

1. შექმენით ობიექტი 'workout' შემდეგი თვისებებით:
   - type: 'Gym Session'
   - date: '2026-04-26'
   - exercises: ['Push-ups', 'Squats', 'Plank', 'Lunges', 'Burpees']
   - reps: [15, 20, 3, 12, 10]
   - მეთოდი 'logExercises', რომელიც for ციკლის გამოყენებით ბეჭდავს თითოეულ
     სავარჯიშოს მისი განმეორებებით: "Push-ups: 15 reps"
   - მეთოდი 'totalReps', რომელიც for ციკლით ჯამავს ყველა განმეორებას და
     აბრუნებს ჯამს
   - მეთოდი 'hardestExercise', რომელიც for ციკლით პოულობს ყველაზე მეტი
     განმეორების მქონე სავარჯიშოს და აბრუნებს მის სახელს

2. შექმენით მასივი 'weeklyWorkouts' 3 ვარჯიშის ობიექტით (დანარჩენი ორი
   შეგიძლიათ გაამარტივოთ - მხოლოდ type, date და reps მასივი)

3. გამოიყენეთ for ციკლი weeklyWorkouts-ზე გასავლელად და დასაბეჭდად:
   - ვარჯიშის ტიპი და თარიღი
   - თითოეული ვარჯიშის ჯამური განმეორებები (პირველისთვის გამოიძახეთ totalReps
     მეთოდი, გამარტივებულებისთვის ხელით შეკრიბეთ)

4. გამოიყენეთ while ციკლი "დასვენების ტაიმერის" სიმულაციისთვის: დაიწყეთ 10-დან
   და ჩამოთვალეთ 1-მდე, ბეჭდავთ "დასვენება: X წამი დარჩენილია..."
   როცა 0-ს მიაღწევს, დაბეჭდეთ "დროა ივარჯიშოთ!"

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მონაცემები

მინიშნება: ობიექტის მეთოდების for ციკლში გამოიყენეთ this.exercises[i] და
          this.reps[i] თითოეულ ელემენტზე წვდომისთვის
მინიშნება: მაქსიმუმის საპოვნელად თვალყური ადევნეთ მიმდინარე მაქსიმალურ
          მნიშვნელობას და მის ინდექსს

წარმატებები 😀
*/

const workout = {
  type: 'Gym Session',
  date: '2026-04-26',
  exercises: ['Push-ups', 'Squats', 'Plank', 'Lunges', 'Burpees'],
  reps: [15, 20, 3, 12, 10],

  logExercises: function () {
    for (let i = 0; i < this.exercises.length; i++) {
      console.log(`${this.exercises[i]}: ${this.reps[i]} reps`);
    }
  },

  totalReps: function () {
    let total = 0;
    for (let i = 0; i < this.reps.length; i++) {
      total += this.reps[i];
    }
    return total;
  },

  hardestExercise: function () {
    let maxReps = this.reps[0];
    let maxIndex = 0;
    for (let i = 1; i < this.reps.length; i++) {
      if (this.reps[i] > maxReps) {
        maxReps = this.reps[i];
        maxIndex = i;
      }
    }
    return this.exercises[maxIndex];
  },
};

// ყველა სავარჯიშოს ლოგირება
console.log(`--- ${workout.type} (${workout.date}) ---`);
workout.logExercises();
console.log(`ჯამური განმეორებები: ${workout.totalReps()}`);
console.log(`ყველაზე რთული სავარჯიშო: ${workout.hardestExercise()}`);

// კვირის ვარჯიშების მასივი
const weeklyWorkouts = [
  workout,
  { type: 'Cardio', date: '2026-04-27', reps: [30, 25, 20, 15] },
  { type: 'Yoga', date: '2026-04-28', reps: [10, 8, 12, 6, 10] },
];

// კვირის ვარჯიშებზე ციკლით გავლა
console.log('\n--- კვირის შეჯამება ---');
for (let i = 0; i < weeklyWorkouts.length; i++) {
  const w = weeklyWorkouts[i];
  let totalReps = 0;

  if (w.totalReps) {
    totalReps = w.totalReps();
  } else {
    for (let j = 0; j < w.reps.length; j++) {
      totalReps += w.reps[j];
    }
  }

  console.log(`${w.type} (${w.date}): ${totalReps} ჯამური განმეორება`);
}

// დასვენების ტაიმერი while ციკლით
console.log('\n--- დასვენების ტაიმერი ---');
let seconds = 10;
while (seconds > 0) {
  console.log(`დასვენება: ${seconds} წამი დარჩენილია...`);
  seconds--;
}
console.log('დროა ივარჯიშოთ!');
