'use strict';

////////////////////////////////////
// ობიექტზე ორიენტირებული პროგრამირება (OOP)
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ცხოველთა სამეფო
// (Constructor ფუნქციები + new ოპერატორი)

/*
თქვენ აწყობთ მარტივ ცხოველების რეესტრს ზოოპარკისთვის. თითოეული ცხოველი
უნდა იყოს წარმოდგენილი ობიექტის სახით, რომელიც შექმნილია constructor ფუნქციით.

1. შექმენით constructor ფუნქცია 'Animal', რომელიც იღებს სამ პარამეტრს:
   species, name და sound
2. constructor-ის შიგნით მიანიჭეთ სამივე პარამეტრი ახალ ობიექტს
   თვისებებად 'this'-ის გამოყენებით
3. შექმენით სამი ცხოველის ინსტანცია 'new' ოპერატორის გამოყენებით:
   - ძაღლი სახელად 'Rex', რომელიც ამბობს 'Woof'
   - კატა სახელად 'Whiskers', რომელიც ამბობს 'Meow'
   - თუთიყუში სახელად 'Polly', რომელიც ამბობს 'Squawk'
4. დალოგეთ სამივე ცხოველის ობიექტი კონსოლში
5. გამოიყენეთ 'instanceof' იმის გადასამოწმებლად, რომ თითოეული ცხოველი
   Animal-ის ინსტანციაა, და დალოგეთ შედეგები
6. შექმენით ჩვეულებრივი ობიექტი { species: 'Fish', name: 'Nemo', sound: 'Blub' }
   და შეამოწმეთ, არის თუ არა ის Animal-ის instanceof (უნდა იყოს false!)
7. კომენტარში ახსენით 4 ნაბიჯი, რომელიც კულისებში ხდება, როდესაც
   ფუნქციას 'new'-ით იძახებთ

სატესტო მონაცემები: Dog 'Rex' 'Woof', Cat 'Whiskers' 'Meow', Parrot 'Polly' 'Squawk'

მინიშნება: Constructor ფუნქციის სახელები კონვენციით დიდი ასოით იწყება
მინიშნება: Arrow ფუნქციები ვერ გამოიყენება constructor-ად, რადგან მათ
      საკუთარი 'this' არ აქვთ

წარმატებები 😀
*/

// const Animal = function (species, name, sound) {
//   this.species = species;
//   this.name = name;
//   this.sound = sound;
// };

// const dog = new Animal('Dog', 'Rex', 'Woof');
// const cat = new Animal('Cat', 'Whiskers', 'Meow');
// const parrot = new Animal('Parrot', 'Polly', 'Squawk');

// console.log(dog);    // Animal { species: 'Dog', name: 'Rex', sound: 'Woof' }
// console.log(cat);    // Animal { species: 'Cat', name: 'Whiskers', sound: 'Meow' }
// console.log(parrot); // Animal { species: 'Parrot', name: 'Polly', sound: 'Squawk' }

// // instanceof შემოწმებები
// console.log(dog instanceof Animal);    // true
// console.log(cat instanceof Animal);    // true
// console.log(parrot instanceof Animal); // true

// // ჩვეულებრივი ობიექტი - Animal constructor-ით არ არის შექმნილი
// const fish = { species: 'Fish', name: 'Nemo', sound: 'Blub' };
// console.log(fish instanceof Animal); // false

// // 4 ნაბიჯი, რომელიც კულისებში ხდება 'new'-ის გამოძახებისას:
// // ნაბიჯი 1: იქმნება ახალი ცარიელი ობიექტი {}
// // ნაბიჯი 2: ფუნქცია გამოიძახება და 'this' მიენიჭება ახალ ცარიელ ობიექტს {}
// // ნაბიჯი 3: ახალი ობიექტი უკავშირდება constructor-ის პროტოტიპს
// //         ({}.__proto__ = Animal.prototype)
// // ნაბიჯი 4: ფუნქცია ავტომატურად აბრუნებს ახალ ობიექტს {}


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - პროტოტიპის ძალა
// (პროტოტიპები + პროტოტიპის ჯაჭვი)

/*
თქვენ იკვლევთ, როგორ მუშაობს პროტოტიპები JavaScript-ში, 'Smartphone'
constructor-ის აწყობით და საზიარო მეთოდების მის პროტოტიპზე მიბმით.

1. შექმენით constructor ფუნქცია 'Smartphone', რომელიც იღებს brand, model
   და batteryLevel (რიცხვი 0-დან 100-მდე)
2. დაამატეთ მეთოდი 'call' Smartphone.prototype-ზე, რომელიც იღებს კონტაქტის
   სახელს და ლოგავს: "Calling <contact> from <brand> <model>..."
3. დაამატეთ მეთოდი 'checkBattery' Smartphone.prototype-ზე, რომელიც ლოგავს:
   "Battery at <batteryLevel>%" თუ 20-ზე მეტია, ან "Low battery! Only <batteryLevel>% left!" თუ 20 ან ნაკლებია
4. შექმენით ორი ინსტანცია: ('Apple', 'iPhone 15', 85) და ('Samsung', 'Galaxy S24', 15)
5. გამოიძახეთ 'call' მეთოდი ორივე ტელეფონზე სხვადასხვა კონტაქტის სახელით
6. გამოიძახეთ 'checkBattery' ორივე ტელეფონზე და დააკვირდით სხვადასხვა შეტყობინებებს
7. გამოიყენეთ 'hasOwnProperty' იმის საჩვენებლად, რომ 'brand' არის თითოეული
   ინსტანციის საკუთარი თვისება, მაგრამ 'call' არ არის (რადგან ის პროტოტიპზე ცხოვრობს)
8. დალოგეთ phone1.__proto__ და შეამოწმეთ, რომ ის ტოლია Smartphone.prototype-ის === ოპერატორით

სატესტო მონაცემები: ტელეფონი 1: 'Apple', 'iPhone 15', 85  |  ტელეფონი 2: 'Samsung', 'Galaxy S24', 15

მინიშნება: პროტოტიპზე განთავსებული მეთოდები საზიაროა და არ კოპირდება თითოეულ ინსტანციაში.
      ეს მეხსიერების თვალსაზრისით ეფექტურია, რადგან ყველა ინსტანცია ერთსა და იმავე ფუნქციას მიმართავს.
მინიშნება: hasOwnProperty აბრუნებს true-ს მხოლოდ ობიექტზე უშუალოდ განთავსებული თვისებებისთვის

წარმატებები 😀
*/

// const Smartphone = function (brand, model, batteryLevel) {
//   this.brand = brand;
//   this.model = model;
//   this.batteryLevel = batteryLevel;
// };

// Smartphone.prototype.call = function (contact) {
//   console.log(`Calling ${contact} from ${this.brand} ${this.model}...`);
// };

// Smartphone.prototype.checkBattery = function () {
//   if (this.batteryLevel > 20) {
//     console.log(`Battery at ${this.batteryLevel}%`);
//   } else {
//     console.log(`Low battery! Only ${this.batteryLevel}% left!`);
//   }
// };

// const phone1 = new Smartphone('Apple', 'iPhone 15', 85);
// const phone2 = new Smartphone('Samsung', 'Galaxy S24', 15);

// // კონტაქტებზე დარეკვა
// phone1.call('Alice');  // Calling Alice from Apple iPhone 15...
// phone2.call('Bob');    // Calling Bob from Samsung Galaxy S24...

// // ბატარეის შემოწმება
// phone1.checkBattery(); // Battery at 85%
// phone2.checkBattery(); // Low battery! Only 15% left!

// // hasOwnProperty შემოწმებები
// console.log(phone1.hasOwnProperty('brand'));  // true  (საკუთარი თვისება)
// console.log(phone1.hasOwnProperty('call'));   // false (პროტოტიპზეა)
// console.log(phone2.hasOwnProperty('model'));  // true  (საკუთარი თვისება)
// console.log(phone2.hasOwnProperty('checkBattery')); // false (პროტოტიპზეა)

// // პროტოტიპის ვერიფიკაცია
// console.log(phone1.__proto__);
// console.log(phone1.__proto__ === Smartphone.prototype); // true


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - სატრანსპორტო ქარხანა
// (Constructor + პროტოტიპები კომბინირებული)

/*
თქვენ აწყობთ სატრანსპორტო საშუალებების რბოლის სიმულატორს. შექმენით
სატრანსპორტო საშუალებები constructor ფუნქციით, დაამატეთ ქცევა პროტოტიპების
მეშვეობით და შემდეგ გაამართეთ რბოლა!

1. შექმენით constructor ფუნქცია 'Vehicle' თვისებებით: make, model
   და speed (საწყისი სიჩქარე კმ/სთ-ში)
2. დაამატეთ 'accelerate' მეთოდი Vehicle.prototype-ზე, რომელიც ზრდის სიჩქარეს
   20-ით და ლოგავს: "<make> <model> accelerates to <speed> km/h"
3. დაამატეთ 'brake' მეთოდი Vehicle.prototype-ზე, რომელიც ამცირებს სიჩქარეს 15-ით
   (მაგრამ არასდროს 0-ზე ქვემოთ) და ლოგავს: "<make> <model> brakes to <speed> km/h"
4. დაამატეთ 'status' მეთოდი Vehicle.prototype-ზე, რომელიც ლოგავს:
   "<make> <model> is going <speed> km/h"
5. შექმენით სამი სატრანსპორტო საშუალება:
   - 'Toyota', 'Supra', 0
   - 'BMW', 'M3', 0
   - 'Tesla', 'Model S', 0
6. გაამართეთ მინი რბოლა: აჩქარეთ თითოეული სატრანსპორტო საშუალება 3-ჯერ,
   შემდეგ დაამუხრუჭეთ ერთხელ, შემდეგ გამოიძახეთ status თითოეულზე
7. შეამოწმეთ პროტოტიპის ჯაჭვი: დალოგეთ vehicle.__proto__ (უნდა იყოს Vehicle.prototype),
   vehicle.__proto__.__proto__ (უნდა იყოს Object.prototype) და
   vehicle.__proto__.__proto__.__proto__ (უნდა იყოს null)

სატესტო მონაცემები: Toyota Supra, BMW M3, Tesla Model S - ყველა იწყებს 0 კმ/სთ-ზე

მინიშნება: მუხრუჭის დროს გამოიყენეთ Math.max(0, this.speed - 15) უარყოფითი სიჩქარის თავიდან ასაცილებლად
მინიშნება: პროტოტიპის ჯაჭვი მიდის: ინსტანცია -> Constructor.prototype -> Object.prototype -> null

წარმატებები 😀
*/

// const Vehicle = function (make, model, speed) {
//   this.make = make;
//   this.model = model;
//   this.speed = speed;
// };

// Vehicle.prototype.accelerate = function () {
//   this.speed += 20;
//   console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
// };

// Vehicle.prototype.brake = function () {
//   this.speed = Math.max(0, this.speed - 15);
//   console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
// };

// Vehicle.prototype.status = function () {
//   console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
// };

// const car1 = new Vehicle('Toyota', 'Supra', 0);
// const car2 = new Vehicle('BMW', 'M3', 0);
// const car3 = new Vehicle('Tesla', 'Model S', 0);

// // მინი რბოლა - აჩქარება 3-ჯერ თითოეულისთვის
// console.log('--- რბოლის დაწყება ---');
// car1.accelerate(); // 20
// car1.accelerate(); // 40
// car1.accelerate(); // 60

// car2.accelerate(); // 20
// car2.accelerate(); // 40
// car2.accelerate(); // 60

// car3.accelerate(); // 20
// car3.accelerate(); // 40
// car3.accelerate(); // 60

// // ერთხელ დამუხრუჭება
// console.log('--- მუხრუჭი ---');
// car1.brake(); // 45
// car2.brake(); // 45
// car3.brake(); // 45

// // საბოლოო სტატუსი
// console.log('--- საბოლოო სტატუსი ---');
// car1.status(); // Toyota Supra is going 45 km/h
// car2.status(); // BMW M3 is going 45 km/h
// car3.status(); // Tesla Model S is going 45 km/h

// // პროტოტიპის ჯაჭვის ვერიფიკაცია
// console.log('--- პროტოტიპის ჯაჭვი ---');
// console.log(car1.__proto__);                    // Vehicle.prototype
// console.log(car1.__proto__ === Vehicle.prototype); // true
// console.log(car1.__proto__.__proto__);           // Object.prototype
// console.log(car1.__proto__.__proto__ === Object.prototype); // true
// console.log(car1.__proto__.__proto__.__proto__); // null (ჯაჭვის ბოლო)


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - სტატიკური vs ინსტანციის მეთოდები
// (სტატიკური მეთოდები)

/*
თქვენ უნდა ააწყოთ 'MathHelper' უტილიტა, რომელიც აჩვენებს განსხვავებას
სტატიკურ მეთოდებს (რომლებიც constructor-ს ეკუთვნის) და ინსტანციის
მეთოდებს (რომლებიც ინსტანციებისთვისაა ხელმისაწვდომი პროტოტიპის მეშვეობით) შორის.

1. შექმენით constructor ფუნქცია 'MathHelper', რომელიც იღებს ერთ პარამეტრს
   'value' და ინახავს მას თვისებად
2. დაამატეთ სტატიკური მეთოდი 'isEven' თავად MathHelper-ზე (არა პროტოტიპზე),
   რომელიც იღებს რიცხვს და აბრუნებს true-ს თუ ის ლუწია, წინააღმდეგ შემთხვევაში false-ს
3. დაამატეთ სტატიკური მეთოდი 'celsiusToFahrenheit' თავად MathHelper-ზე,
   რომელიც იღებს ცელსიუსის მნიშვნელობას და აბრუნებს ფარენჰაიტის ეკვივალენტს
   (ფორმულა: C * 9/5 + 32)
4. დაამატეთ სტატიკური მეთოდი 'factorial' თავად MathHelper-ზე, რომელიც იღებს
   რიცხვს და აბრუნებს მის ფაქტორიალს (მაგ., 5! = 5 * 4 * 3 * 2 * 1 = 120).
   გამოიყენეთ for ციკლი.
5. დაამატეთ ინსტანციის მეთოდი 'double' MathHelper.prototype-ზე, რომელიც
   აბრუნებს this.value * 2
6. დაამატეთ ინსტანციის მეთოდი 'isPositive' MathHelper.prototype-ზე, რომელიც
   აბრუნებს true-ს თუ this.value > 0
7. შექმენით ინსტანცია: new MathHelper(7). გამოიძახეთ ინსტანციის მეთოდები მასზე.
8. გამოიძახეთ სტატიკური მეთოდები პირდაპირ MathHelper-ზე (არა ინსტანციაზე).
   შემდეგ სცადეთ სტატიკური მეთოდის გამოძახება ინსტანციაზე და აჩვენეთ, რომ ვერ მუშაობს.

სატესტო მონაცემები: სტატიკური: isEven(4), isEven(7), celsiusToFahrenheit(100), factorial(5)
           ინსტანცია: new MathHelper(7) -> double(), isPositive()

მინიშნება: სტატიკური მეთოდები ემატება პირდაპირ constructor-ს: MathHelper.isEven = function() {}
მინიშნება: ინსტანციის მეთოდები ემატება პროტოტიპს: MathHelper.prototype.double = function() {}
მინიშნება: სტატიკური მეთოდები 'this'-ს იყენებენ constructor-ზე მისათითებლად, არა ინსტანციებზე

წარმატებები 😀
*/

// const MathHelper = function (value) {
//   this.value = value;
// };

// // სტატიკური მეთოდები - ეკუთვნის თავად constructor-ს
// MathHelper.isEven = function (num) {
//   return num % 2 === 0;
// };

// MathHelper.celsiusToFahrenheit = function (celsius) {
//   return celsius * 9 / 5 + 32;
// };

// MathHelper.factorial = function (n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// };

// // ინსტანციის მეთოდები - პროტოტიპზე, ხელმისაწვდომი ყველა ინსტანციისთვის
// MathHelper.prototype.double = function () {
//   return this.value * 2;
// };

// MathHelper.prototype.isPositive = function () {
//   return this.value > 0;
// };

// // სტატიკური მეთოდების გამოყენება (გამოძახება constructor-ზე)
// console.log('--- სტატიკური მეთოდები ---');
// console.log(`არის 4 ლუწი? ${MathHelper.isEven(4)}`);           // true
// console.log(`არის 7 ლუწი? ${MathHelper.isEven(7)}`);           // false
// console.log(`100°C ფარენჰაიტში: ${MathHelper.celsiusToFahrenheit(100)}`); // 212
// console.log(`5! = ${MathHelper.factorial(5)}`);               // 120

// // ინსტანციის მეთოდების გამოყენება (გამოძახება ინსტანციაზე)
// const helper = new MathHelper(7);
// console.log('--- ინსტანციის მეთოდები ---');
// console.log(`მნიშვნელობა: ${helper.value}`);           // 7
// console.log(`გაორმაგებული: ${helper.double()}`);      // 14
// console.log(`დადებითია? ${helper.isPositive()}`); // true

// // დამტკიცება, რომ სტატიკური მეთოდები ინსტანციებზე არ მუშაობს
// console.log('--- სტატიკური vs ინსტანცია ---');
// console.log(typeof MathHelper.isEven);   // 'function' (არსებობს constructor-ზე)
// console.log(typeof helper.isEven);       // 'undefined' (არ არსებობს ინსტანციაზე)
// // helper.isEven(4); // TypeError: helper.isEven is not a function

// // დამტკიცება, რომ ინსტანციის მეთოდები constructor-ზე არ მუშაობს
// console.log(typeof helper.double);       // 'function' (არსებობს ინსტანციაზე)
// console.log(typeof MathHelper.double);   // 'undefined' (არ არსებობს constructor-ზე)


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - კლასით რეფაქტორინგი
// (ES6 კლასები)

/*
აიღეთ მე-3 ჩელენჯის Vehicle constructor და გადააკეთეთ ES6 კლასად.
შემდეგ დაამტკიცეთ, რომ ES6 კლასები მხოლოდ "სინტაქსური შაქარია"
constructor ფუნქციებზე — შიდა პროტოტიპის მექანიზმი იდენტურია.

1. შექმენით ES6 კლასი 'VehicleCl' constructor-ით, რომელიც იღებს make,
   model და speed
2. დაამატეთ 'accelerate' მეთოდი კლასის სხეულში, რომელიც ზრდის სიჩქარეს
   20-ით და ლოგავს: "<make> <model> accelerates to <speed> km/h"
3. დაამატეთ 'brake' მეთოდი კლასის სხეულში, რომელიც ამცირებს სიჩქარეს 15-ით
   (არასდროს 0-ზე ქვემოთ) და ლოგავს: "<make> <model> brakes to <speed> km/h"
4. დაამატეთ 'status' მეთოდი კლასის სხეულში, რომელიც ლოგავს:
   "<make> <model> is going <speed> km/h"
5. შექმენით ორი ინსტანცია: ('Honda', 'Civic', 0) და ('Ford', 'Mustang', 0)
6. აჩქარეთ ორივე სატრანსპორტო საშუალება ორჯერ, დაამუხრუჭეთ ერთხელ, შემდეგ
   დაბეჭდეთ სტატუსი
7. შეამოწმეთ, რომ კლასი კულისებში პროტოტიპებით მუშაობს:
   - დალოგეთ civic.__proto__ === VehicleCl.prototype (უნდა იყოს true)
   - დალოგეთ, რომ 'accelerate' ინსტანციის საკუთარი თვისება არ არის
     (hasOwnProperty უნდა დააბრუნოს false)
   - დალოგეთ, რომ 'make' ინსტანციის საკუთარი თვისებაა
8. შეადარეთ: შექმენით იგივე სატრანსპორტო საშუალება მე-3 ჩელენჯის ძველი
   Vehicle constructor-ით და აჩვენეთ, რომ ორივე __proto__ ჯაჭვი ერთნაირად
   გამოიყურება (ინსტანცია -> Constructor.prototype -> Object.prototype -> null)

სატესტო მონაცემები: Honda Civic, Ford Mustang - ორივე იწყებს 0 კმ/სთ-ზე

მინიშნება: კლასის სხეულში განსაზღვრული მეთოდები (constructor-ის გარეთ) ავტომატურად
      ემატება კლასის პროტოტიპს, და არა თითოეულ ინსტანციას
მინიშნება: ES6 კლასები არ ხვდება hoisting-ში — მათი გამოცხადება გამოყენებამდე უნდა მოხდეს
მინიშნება: კლასები ყოველთვის strict mode-ში სრულდება

წარმატებები 😀
*/

// class VehicleCl {
//   constructor(make, model, speed) {
//     this.make = make;
//     this.model = model;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 20;
//     console.log(`${this.make} ${this.model} accelerates to ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed = Math.max(0, this.speed - 15);
//     console.log(`${this.make} ${this.model} brakes to ${this.speed} km/h`);
//   }

//   status() {
//     console.log(`${this.make} ${this.model} is going ${this.speed} km/h`);
//   }
// }

// const civic = new VehicleCl('Honda', 'Civic', 0);
// const mustang = new VehicleCl('Ford', 'Mustang', 0);

// // აჩქარება ორჯერ, მუხრუჭი ერთხელ
// console.log('--- ES6 კლასის რბოლა ---');
// civic.accelerate();   // 20
// civic.accelerate();   // 40
// civic.brake();        // 25

// mustang.accelerate(); // 20
// mustang.accelerate(); // 40
// mustang.brake();      // 25

// // საბოლოო სტატუსი
// console.log('--- საბოლოო სტატუსი ---');
// civic.status();   // Honda Civic is going 25 km/h
// mustang.status(); // Ford Mustang is going 25 km/h

// // დამტკიცება, რომ ES6 კლასები კულისებში პროტოტიპებს იყენებს
// console.log('--- პროტოტიპის ვერიფიკაცია ---');
// console.log(civic.__proto__ === VehicleCl.prototype);     // true
// console.log(civic.hasOwnProperty('accelerate'));          // false (პროტოტიპზეა)
// console.log(civic.hasOwnProperty('make'));                // true  (საკუთარი თვისება)

// // პროტოტიპის ჯაჭვი იდენტურია constructor ფუნქციის პატერნისა
// console.log('--- პროტოტიპის ჯაჭვი (ES6 კლასი) ---');
// console.log(civic.__proto__);                    // VehicleCl.prototype
// console.log(civic.__proto__.__proto__);           // Object.prototype
// console.log(civic.__proto__.__proto__.__proto__); // null

// // შედარება constructor ფუნქციის ვერსიასთან (მე-3 ჩელენჯიდან)
// // მე-3 ჩელენჯის ამოხსნის დაკომენტარების მოხსნა საჭიროა ამ შედარების გასაშვებად
// // const supra = new Vehicle('Toyota', 'Supra', 0);
// // console.log('--- პროტოტიპის ჯაჭვი (Constructor ფუნქცია) ---');
// // console.log(supra.__proto__);                    // Vehicle.prototype
// // console.log(supra.__proto__.__proto__);           // Object.prototype
// // console.log(supra.__proto__.__proto__.__proto__); // null
// // ორივე ჯაჭვი: ინსტანცია -> Constructor.prototype -> Object.prototype -> null
// // ES6 კლასები მხოლოდ სინტაქსური შაქარია — მექანიზმი იგივეა!
