'use strict';

////////////////////////////////////
// როგორ მუშაობს JavaScript კულისებს მიღმა
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - სქოუფ დეტექტივი
// (Scope + Scope Chain)

/*
თქვენ ხართ "სქოუფ დეტექტივი" — თქვენი ამოცანაა გაარკვიოთ, რომელი ცვლადები
არის ხელმისაწვდომი სად, და რა მნიშვნელობები აქვთ მათ.

1. შექმენით გლობალური ცვლადი 'appName' მნიშვნელობით 'ScopeApp'
2. შექმენით ფუნქცია 'outerFunction', რომელიც:
   a) აცხადებს ცვლადს 'outerVar' მნიშვნელობით 'I am outer'
   b) შეიცავს შიდა ფუნქციას 'innerFunction', რომელიც:
      - აცხადებს ცვლადს 'innerVar' მნიშვნელობით 'I am inner'
      - ლოგავს სამივე ცვლადს: innerVar, outerVar, appName
   c) იძახებს innerFunction-ს
   d) ცდილობს innerVar-ის დალოგვას (ეს უნდა გამოიწვიოს შეცდომა — დააკომენტარეთ
      და დაწერეთ კომენტარი, რომელიც ხსნის რატომ ვერ მუშაობს)
3. გამოიძახეთ outerFunction
4. ორივე ფუნქციის გარეთ, სცადეთ outerVar-ისა და innerVar-ის დალოგვა
   (დააკომენტარეთ ეს ხაზები და ახსენით რატომ ვერ მუშაობენ)

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მნიშვნელობები

მინიშნება: Scope chain მხოლოდ ზემოთ მიემართება (შიდადან გარეთკენ), არასოდეს ქვემოთ
მინიშნება: ყოველი ფუნქცია ქმნის საკუთარ scope-ს — შიგნით არსებული ცვლადები
           გარედან ხელმისაწვდომი არ არის

წარმატებები 😀
*/

// const appName = 'ScopeApp';

// function outerFunction() {
//   const outerVar = 'I am outer';

//   function innerFunction() {
//     const innerVar = 'I am inner';
//     console.log(innerVar);  // საკუთარი scope
//     console.log(outerVar);  // მშობლის scope (scope chain)
//     console.log(appName);   // გლობალური scope (scope chain)
//   }
//   innerFunction();

//   // console.log(innerVar);
//   // ReferenceError! innerVar არის innerFunction-ის scope-ში.
//   // Scope chain ზემოთ მიემართება, არა ქვემოთ — მშობელი ვერ წვდება შვილის ცვლადებს.
// }

// outerFunction();

// // console.log(outerVar);
// // ReferenceError! outerVar არის outerFunction-ის scope-ში, გლობალურად ხელმისაწვდომი არ არის.

// // console.log(innerVar);
// // ReferenceError! innerVar კიდევ უფრო ღრმადაა ჩადგმული — აქედანაც ხელმისაწვდომი არ არის.


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - var vs let vs const
// (Block Scope + Function Scope)

/*
აჩვენეთ განსხვავება var-ს, let-სა და const-ს შორის, როდესაც ისინი
ბლოკის (if statement) შიგნით გამოიყენება.

1. შექმენით ცვლადი 'temperature' მნიშვნელობით 30
2. დაწერეთ if statement, რომელიც ამოწმებს temperature > 25
3. if ბლოკის შიგნით:
   a) გამოაცხადეთ ცვლადი var-ით: var weather = 'sunny'
   b) გამოაცხადეთ ცვლადი let-ით: let advice = 'Wear sunscreen'
   c) გამოაცხადეთ ცვლადი const-ით: const uvIndex = 8
   d) დალოგეთ სამივე ცვლადი ბლოკის შიგნით
4. if ბლოკის გარეთ:
   a) სცადეთ 'weather'-ის დალოგვა — იმუშავებს? რატომ?
   b) სცადეთ 'advice'-ის დალოგვა — იმუშავებს? რატომ?
   c) სცადეთ 'uvIndex'-ის დალოგვა — იმუშავებს? რატომ?
5. დაწერეთ კომენტარები, რომლებიც ხსნიან თითოეულის ქცევას

სატესტო მონაცემები: temperature = 30

მინიშნება: var არის function-scoped (იგნორირებს block scope-ს)
მინიშნება: let და const არიან block-scoped

წარმატებები 😀
*/

// const temperature = 30;

// if (temperature > 25) {
//   var weather = 'sunny';
//   let advice = 'Wear sunscreen';
//   const uvIndex = 8;
//   console.log(weather);  // 'sunny'
//   console.log(advice);   // 'Wear sunscreen'
//   console.log(uvIndex);  // 8
// }

// console.log(weather);  // 'sunny' — var იგნორირებს block scope-ს!
// // console.log(advice);  // ReferenceError! let არის block-scoped
// // console.log(uvIndex); // ReferenceError! const არის block-scoped


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - Hoisting-ის თავსატეხები
// (Hoisting + TDZ)

/*
იწინასწარმეტყველეთ და გადაამოწმეთ, რა მოხდება როდესაც ცვლადებსა და
ფუნქციებს მათი გამოცხადებამდე გამოიყენებთ.

1. ნებისმიერი გამოცხადებამდე, სცადეთ:
   a) გამოიძახეთ function declaration 'greetDecl' — იმუშავებს?
   b) დალოგეთ var ცვლადი 'myVar' — რა მნიშვნელობა ექნება?
   c) დალოგეთ let ცვლადი 'myLet' — რა მოხდება?
   d) გამოიძახეთ function expression, რომელიც const-ში ინახება 'greetExpr' — რა მოხდება?
2. ახლა გამოაცხადეთ ყველა მათგანი:
   a) function greetDecl() { return 'Hello from declaration!'; }
   b) var myVar = 'I am var';
   c) let myLet = 'I am let';
   d) const greetExpr = function() { return 'Hello from expression!'; };
3. გამოცხადების შემდეგ, კვლავ გამოიძახეთ/დალოგეთ ყველაფერი, რომ დარწმუნდეთ რომ მუშაობს
4. დაწერეთ კომენტარები, რომლებიც ხსნიან რატომ იქცევა თითოეული სხვადასხვანაირად გამოცხადებამდე

მინიშნება: Function declaration-ები სრულად არიან hoisted (გამოძახება შესაძლებელია გამოცხადებამდე)
მინიშნება: var არის hoisted, მაგრამ undefined მნიშვნელობით
მინიშნება: let/const იმყოფებიან TDZ-ში (Temporal Dead Zone) მათი გამოცხადების ხაზამდე

წარმატებები 😀
*/

// // გამოცხადებამდე:
// console.log(greetDecl());  // 'Hello from declaration!' — function declaration-ები სრულად არიან hoisted
// console.log(myVar);        // undefined — var არის hoisted, მაგრამ undefined მნიშვნელობით
// // console.log(myLet);     // ReferenceError! let არის TDZ-ში (Temporal Dead Zone)
// // console.log(greetExpr); // ReferenceError! const არის TDZ-ში

// // გამოცხადებები:
// function greetDecl() {
//   return 'Hello from declaration!';
// }
// var myVar = 'I am var';
// let myLet = 'I am let';
// const greetExpr = function () {
//   return 'Hello from expression!';
// };

// // გამოცხადების შემდეგ — ყველაფერი მუშაობს:
// console.log(greetDecl());   // 'Hello from declaration!'
// console.log(myVar);         // 'I am var'
// console.log(myLet);         // 'I am let'
// console.log(greetExpr());   // 'Hello from expression!'


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - this-ის დეტექტივი
// (this სხვადასხვა კონტექსტში)

/*
გამოიკვლიეთ, როგორ იქცევა 'this' საკვანძო სიტყვა სხვადასხვა კონტექსტში.

1. შექმენით ობიექტი 'player' შემდეგით:
   - name: 'Mario'
   - lives: 3
   - მეთოდი 'showStatus' (ჩვეულებრივი ფუნქცია), რომელიც ლოგავს:
     "Mario-ს აქვს 3 სიცოცხლე" this.name-ისა და this.lives-ის გამოყენებით
   - მეთოდი 'loseLife' (ჩვეულებრივი ფუნქცია), რომელიც:
     a) ამცირებს this.lives-ს 1-ით
     b) ლოგავს: "Mario-მ დაკარგა სიცოცხლე! დარჩენილია: 2"
2. გამოიძახეთ player.showStatus() და player.loseLife()
3. შექმენით დამოუკიდებელი ფუნქცია 'showThis', რომელიც ლოგავს 'this'-ს.
   გამოიძახეთ ის ჩვეულებრივ ფუნქციად (არა მეთოდად).
   დაწერეთ კომენტარი: რა არის 'this' strict mode-ში?
4. შექმენით ობიექტი 'enemy' name-ით: 'Bowser'
   დააკოპირეთ showStatus მეთოდი player-დან enemy-ზე:
   enemy.showStatus = player.showStatus
   გამოიძახეთ enemy.showStatus() — რომელ სახელს აჩვენებს? რატომ?
5. შექმენით ობიექტი 'archer' შემდეგით:
   - name: 'Legolas'
   - arrows: 20
   - მეთოდი 'shoot' (ჩვეულებრივი ფუნქცია), რომელიც:
     a) ამცირებს this.arrows-ს 1-ით
     b) იყენებს arrow ფუნქციას შიგნით, რომ 0ms დაყოვნების შემდეგ დალოგოს შეტყობინება:
        setTimeout(() => console.log(`${this.name}-ს ${this.arrows} ისარი დარჩა`), 0)
   გამოიძახეთ archer.shoot() — arrow ფუნქცია სწორად წვდება 'this'-ს?

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მონაცემები

მინიშნება: 'this' მეთოდში მიუთითებს იმ ობიექტზე, რომელიც მეთოდს იძახებს
მინიშნება: Arrow ფუნქციებს არ აქვთ საკუთარი 'this' — ისინი იყენებენ მშობელი scope-ის 'this'-ს

წარმატებები 😀
*/

// const player = {
//   name: 'Mario',
//   lives: 3,
//   showStatus: function () {
//     console.log(`${this.name}-ს აქვს ${this.lives} სიცოცხლე`);
//   },
//   loseLife: function () {
//     this.lives--;
//     console.log(`${this.name}-მ დაკარგა სიცოცხლე! დარჩენილია: ${this.lives}`);
//   },
// };

// player.showStatus(); // Mario-ს აქვს 3 სიცოცხლე
// player.loseLife();   // Mario-მ დაკარგა სიცოცხლე! დარჩენილია: 2

// // დამოუკიდებელი ფუნქცია — this = undefined strict mode-ში
// function showThis() {
//   console.log(this); // undefined (strict mode)
// }
// showThis();

// // მეთოდის სესხება — this მიუთითებს გამომძახებელ ობიექტზე
// const enemy = { name: 'Bowser' };
// enemy.showStatus = player.showStatus;
// enemy.showStatus(); // Bowser-ს აქვს undefined სიცოცხლე
// // 'this' ახლა enemy-ა, რომელსაც 'lives' თვისება არ აქვს

// const archer = {
//   name: 'Legolas',
//   arrows: 20,
//   shoot: function () {
//     this.arrows--;
//     // Arrow ფუნქცია იღებს 'this'-ს მშობელი scope-დან (shoot მეთოდი → archer)
//     setTimeout(
//       () =>
//         console.log(`${this.name}-ს ${this.arrows} ისარი დარჩა`),
//       0
//     );
//   },
// };

// archer.shoot(); // Legolas-ს 19 ისარი დარჩა


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - პრიმიტივები vs ობიექტები
// (მითითების ტიპები + Shallow/Deep Copy)

/*
აჩვენეთ, როგორ იქცევიან პრიმიტივები და ობიექტები განსხვავებულად მეხსიერებაში.

1. შექმენით ორი პრიმიტიული ცვლადი:
   - let score = 100
   - let scoreCopy = score
   შეცვალეთ score 200-ზე. დალოგეთ ორივე — შეიცვალა scoreCopy?

2. შექმენით ობიექტი 'originalCar':
   { brand: 'Tesla', model: 'Model 3', specs: { hp: 283, range: 358 } }
   შექმენით 'carRef' მინიჭებით: const carRef = originalCar
   შეცვალეთ carRef.model 'Model Y'-ზე
   დალოგეთ ორივე ობიექტი — შეიცვალა originalCar? რატომ?

3. შექმენით originalCar-ის ზედაპირული ასლი spread-ის გამოყენებით:
   const shallowCopy = { ...originalCar }
   შეცვალეთ shallowCopy.brand 'BMW'-ზე
   დალოგეთ ორივე — შეიცვალა originalCar.brand?
   ახლა შეცვალეთ shallowCopy.specs.hp 500-ზე
   დალოგეთ ორივე — შეიცვალა originalCar.specs.hp? რატომ?

4. შექმენით ღრმა ასლი structuredClone-ის გამოყენებით:
   const deepCopy = structuredClone(originalCar)
   შეცვალეთ deepCopy.specs.range 600-ზე
   დალოგეთ ორივე — შეიცვალა originalCar.specs.range?

5. დაწერეთ კომენტარები, რომლებიც ხსნიან:
   - რატომ არიან პრიმიტივები დამოუკიდებელი ასლები
   - რატომ იზიარებს ობიექტის მინიჭება იმავე მითითებას
   - რატომ ვერ მუშაობს ზედაპირული ასლი ჩადგმულ ობიექტებზე
   - რატომ ქმნის structuredClone სრულად დამოუკიდებელ ასლს

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მონაცემები

მინიშნება: პრიმიტივები ინახება call stack-ში — ყოველი ცვლადი იღებს საკუთარ ასლს
მინიშნება: ობიექტები ინახება heap-ში — ცვლადები ინახავენ მითითებას (მისამართს) ობიექტზე

წარმატებები 😀
*/

// // 1. პრიმიტივები — დამოუკიდებელი ასლები
// let score = 100;
// let scoreCopy = score;
// score = 200;
// console.log('score:', score);         // 200
// console.log('scoreCopy:', scoreCopy); // 100 — დამოუკიდებელი ასლი!

// // 2. ობიექტის მინიჭება — იგივე მითითება
// const originalCar = {
//   brand: 'Tesla',
//   model: 'Model 3',
//   specs: { hp: 283, range: 358 },
// };
// const carRef = originalCar;
// carRef.model = 'Model Y';
// console.log('originalCar:', originalCar.model); // 'Model Y' — იგივე ობიექტია!
// console.log('carRef:', carRef.model);            // 'Model Y'

// // 3. ზედაპირული ასლი spread-ით
// const shallowCopy = { ...originalCar };
// shallowCopy.brand = 'BMW';
// console.log('originalCar.brand:', originalCar.brand); // 'Tesla' — პირველი დონე დამოუკიდებელია
// console.log('shallowCopy.brand:', shallowCopy.brand); // 'BMW'

// shallowCopy.specs.hp = 500;
// console.log('originalCar.specs.hp:', originalCar.specs.hp); // 500 — ჩადგმული ობიექტი გაზიარებულია!
// console.log('shallowCopy.specs.hp:', shallowCopy.specs.hp); // 500

// // 4. ღრმა ასლი structuredClone-ით
// const deepCopy = structuredClone(originalCar);
// deepCopy.specs.range = 600;
// console.log('originalCar.specs.range:', originalCar.specs.range); // 358 — სრულად დამოუკიდებელია!
// console.log('deepCopy.specs.range:', deepCopy.specs.range);       // 600
