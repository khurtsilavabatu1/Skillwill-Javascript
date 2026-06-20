'use strict';

////////////////////////////////////
// ფუნქციები
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ჯავშნის სისტემა
// (ნაგულისხმევი პარამეტრები)

/*
ააწყვეთ ჯავშნის სისტემის ფუნქცია, რომელიც ნაგულისხმევ პარამეტრებს
იყენებს მოქნილი დაჯავშნის სცენარებისთვის.

1. შექმენით ფუნქცია 'createBooking', რომელიც სამ პარამეტრს იღებს:
   - flightNum (სავალდებულო)
   - numPassengers (ნაგულისხმევი: 1)
   - price (ნაგულისხმევი: 199 * numPassengers)
2. ფუნქციამ უნდა შექმნას ჯავშნის ობიექტი ამ სამი თვისებით
   და ჩაამატოს 'bookings' მასივში. დალოგეთ ობიექტი.
3. გამოიძახეთ createBooking მხოლოდ 'A9123'-ით
4. გამოიძახეთ createBooking 'A9123'-ით და 3 მგზავრით
5. გამოიძახეთ createBooking 'A9123'-ით, 5 მგზავრით და ფასით 500
6. გამოიძახეთ createBooking 'A9123'-ით, undefined-ით (გამოსატოვებლად)
   და ფასით 1000 — numPassengers უნდა დაბრუნდეს ნაგულისხმევ მნიშვნელობაზე 1
7. ბოლოს დალოგეთ bookings მასივი ყველა ჯავშნის შესამოწმებლად

სატესტო მონაცემები:
  გამოძახება 1: createBooking('A9123')
  გამოძახება 2: createBooking('A9123', 3)
  გამოძახება 3: createBooking('A9123', 5, 500)
  გამოძახება 4: createBooking('A9123', undefined, 1000)

მინიშნება: ნაგულისხმევ პარამეტრებს შეუძლიათ წინა პარამეტრების მნიშვნელობების გამოყენება
მინიშნება: undefined-ის გადაცემა იწვევს ნაგულისხმევი მნიშვნელობის გამოყენებას — null კი არა
მინიშნება: ნაგულისხმევი მნიშვნელობები მარცხნიდან მარჯვნივ ფასდება

წარმატებები 😀
*/

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('A9123');
// // { flightNum: 'A9123', numPassengers: 1, price: 199 }

// createBooking('A9123', 3);
// // { flightNum: 'A9123', numPassengers: 3, price: 597 }

// createBooking('A9123', 5, 500);
// // { flightNum: 'A9123', numPassengers: 5, price: 500 }

// createBooking('A9123', undefined, 1000);
// // { flightNum: 'A9123', numPassengers: 1, price: 1000 }

// console.log('ყველა ჯავშანი:', bookings);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - მონაცემთა ტრანსფორმატორი
// (მაღალი რიგის ფუნქციები და callback-ები)

/*
შექმენით მონაცემთა ტრანსფორმატორი, რომელიც სტრინგსა და callback
ფუნქციას იღებს და ტრანსფორმაციას ახდენს.

1. შექმენით ფუნქცია 'transformer', რომელიც ორ არგუმენტს იღებს:
   - str (სტრინგი)
   - fn (callback ფუნქცია)
   ფუნქციამ უნდა:
   - დალოგოს ორიგინალი სტრინგი
   - დალოგოს ტრანსფორმირებული სტრინგი (fn(str)-ის შედეგი)
   - დალოგოს callback ფუნქციის სახელი (fn.name)
2. შექმენით callback ფუნქცია 'toUpperFirst', რომელიც სტრინგს იღებს,
   სიტყვებად ყოფს, პირველ სიტყვას მთლიანად ზედა რეგისტრში გადაიყვანს
   და ისევ აერთიანებს. მაგ., 'javascript is fun' → 'JAVASCRIPT is fun'
3. შექმენით callback ფუნქცია 'removeSpaces', რომელიც სტრინგიდან ყველა
   სფეისს შლის. მაგ., 'javascript is fun' → 'javascriptisfun'
4. შექმენით callback ფუნქცია 'countWords', რომელიც აბრუნებს სტრინგს
   თუ რამდენი სიტყვაა შემავალ ტექსტში.
   მაგ., 'javascript is fun' → '3 words'
5. გამოიძახეთ transformer სატესტო სტრინგითა და თითოეული callback-ით
6. სცადეთ transformer-ის გამოძახება inline ანონიმური ფუნქციით,
   რომელიც სტრინგს ატრიალებს (reverse)

სატესტო მონაცემები: 'javascript is absolutely amazing'

მინიშნება: str.split(' ') სტრინგს სიტყვების მასივად ყოფს
მინიშნება: str.split('').reverse().join('') სტრინგს ატრიალებს
მინიშნება: fn.name ფუნქციის სახელს აბრუნებს
მინიშნება: ფუნქციები უბრალოდ მნიშვნელობებია — შეგიძლიათ არგუმენტად გადასცეთ

წარმატებები 😀
*/

// const toUpperFirst = function (str) {
//   const words = str.split(' ');
//   words[0] = words[0].toUpperCase();
//   return words.join(' ');
// };

// const removeSpaces = function (str) {
//   return str.split(' ').join('');
// };

// const countWords = function (str) {
//   return `${str.split(' ').length} words`;
// };

// const transformer = function (str, fn) {
//   console.log(`ორიგინალი სტრინგი: ${str}`);
//   console.log(`ტრანსფორმირებული სტრინგი: ${fn(str)}`);
//   console.log(`ტრანსფორმირებულია: ${fn.name}`);
//   console.log('---');
// };

// transformer('javascript is absolutely amazing', toUpperFirst);
// // ორიგინალი სტრინგი: javascript is absolutely amazing
// // ტრანსფორმირებული სტრინგი: JAVASCRIPT is absolutely amazing
// // ტრანსფორმირებულია: toUpperFirst

// transformer('javascript is absolutely amazing', removeSpaces);
// // ორიგინალი სტრინგი: javascript is absolutely amazing
// // ტრანსფორმირებული სტრინგი: javascriptisabsolutelyamazing
// // ტრანსფორმირებულია: removeSpaces

// transformer('javascript is absolutely amazing', countWords);
// // ორიგინალი სტრინგი: javascript is absolutely amazing
// // ტრანსფორმირებული სტრინგი: 4 words
// // ტრანსფორმირებულია: countWords

// transformer('javascript is absolutely amazing', function (str) {
//   return str.split('').reverse().join('');
// });
// // ტრანსფორმირებული სტრინგი: gnizama yletulosba si tpircsavaj


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - მისალმების გენერატორი
// (ფუნქციები, რომლებიც ფუნქციებს აბრუნებენ)

/*
შექმენით მისალმების გენერატორი ფუნქციების გამოყენებით,
რომლებიც ახალ ფუნქციებს აბრუნებენ.

1. შექმენით ფუნქცია 'makeGreeter', რომელიც იღებს 'greeting' სტრინგს
   და აბრუნებს ახალ ფუნქციას. დაბრუნებული ფუნქცია იღებს 'name'
   პარამეტრს და ლოგავს '{greeting}, {name}!'
2. გამოიყენეთ makeGreeter შემდეგის შესაქმნელად:
   - greeterGamarjoba მისალმებით 'გამარჯობა'
   - greeterSalami მისალმებით 'სალამი'
   - greeterDila მისალმებით 'დილა მშვიდობისა'
3. გამოიძახეთ თითოეული greeter სხვადასხვა სახელით
4. ასევე სცადეთ makeGreeter-ის პირდაპირ ერთ ხაზზე გამოძახება:
   makeGreeter('მოგესალმებით')('გიორგი')
5. გადაწერეთ makeGreeter arrow ფუნქციის ვერსიად, სახელით
   makeGreeterArrow — მთლიანი ფუნქცია უნდა იყოს ერთ ხაზზე
   arrow სინტაქსით: const makeGreeterArrow = greeting => name => ...
6. შეამოწმეთ რომ makeGreeterArrow იდენტურად მუშაობს makeGreeter-ის მსგავსად

სატესტო მონაცემები:
  greeterGamarjoba('გიორგი'), greeterGamarjoba('ნინო')
  greeterSalami('დათო'), greeterSalami('ანა')
  greeterDila('ლუკა')

მინიშნება: ფუნქციას შეუძლია სხვა ფუნქციის დაბრუნება (closure)
მინიშნება: დაბრუნებული ფუნქცია „ახსოვრებს" greeting ცვლადს
მინიშნება: Arrow ფუნქციის ვერსია: greeting => name => console.log(...)
მინიშნება: ეს პატერნი აუცილებელია closure-ების გასაგებად

წარმატებები 😀
*/

// const makeGreeter = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}!`);
//   };
// };

// const greeterGamarjoba = makeGreeter('გამარჯობა');
// const greeterSalami = makeGreeter('სალამი');
// const greeterDila = makeGreeter('დილა მშვიდობისა');

// greeterGamarjoba('გიორგი');    // გამარჯობა, გიორგი!
// greeterGamarjoba('ნინო');      // გამარჯობა, ნინო!
// greeterSalami('დათო');         // სალამი, დათო!
// greeterSalami('ანა');          // სალამი, ანა!
// greeterDila('ლუკა');           // დილა მშვიდობისა, ლუკა!

// // პირდაპირ ერთ ხაზზე გამოძახება
// makeGreeter('მოგესალმებით')('გიორგი'); // მოგესალმებით, გიორგი!

// // Arrow ფუნქციის ვერსია
// const makeGreeterArrow = greeting => name =>
//   console.log(`${greeting}, ${name}!`);

// makeGreeterArrow('მოგესალმებით')('გიორგი');  // მოგესალმებით, გიორგი!
// makeGreeterArrow('მოგესალმებით')('ნინო');    // მოგესალმებით, ნინო!


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - ავიაკომპანიის ჯავშანი
// (call, apply, bind)

/*
შექმენით ავიაკომპანიის ჯავშნის სისტემა, რომელიც call, apply და bind-ის
გამოყენებას ადემონსტრირებს 'this' საკვანძო სიტყვის სამართავად.

1. შექმენით ობიექტი 'georgianAirways':
   - airline: 'Georgian Airways'
   - iataCode: 'A9'
   - bookings: [] (ცარიელი მასივი)
   - book: მეთოდი, რომელიც იღებს flightNum-ს და passengerName-ს, ლოგავს
     შეტყობინებას, მაგ.: 'გიორგი-მ დაჯავშნა ადგილი Georgian Airways რეისზე A9234',
     და bookings მასივში ამატებს { flight: `${this.iataCode}${flightNum}`, name }
2. გამოიძახეთ book მეთოდი georgianAirways-ზე:
   book(234, 'გიორგი'), book(635, 'ნინო')
3. შექმენით სხვა ობიექტი 'flyTbilisi':
   - airline: 'FlyTbilisi'
   - iataCode: 'FT'
   - bookings: []
   (book მეთოდის გარეშე!)
4. შეინახეთ book მეთოდი ცვლადში: const book = georgianAirways.book
5. გამოიყენეთ call flyTbilisi-ზე დასაჯავშნად: book.call(flyTbilisi, 23, 'დათო')
6. გამოიყენეთ call georgianAirways-ზე: book.call(georgianAirways, 777, 'ანა')
7. გამოიყენეთ apply flyTbilisi-ზე მასივით: book.apply(flyTbilisi, [101, 'ლუკა'])
8. გამოიყენეთ bind flyTbilisi-სთვის მუდმივი ფუნქციის შესაქმნელად:
   const bookFT = book.bind(flyTbilisi)
   გამოიძახეთ bookFT(555, 'ნინო')
9. შექმენით ნაწილობრივად გამოყენებული ფუნქცია bind-ით:
   const bookA9234 = book.bind(georgianAirways, 234)
   გამოიძახეთ bookA9234('ირაკლი') — მხოლოდ სახელია საჭირო!
10. დალოგეთ ორივე ავიაკომპანიის bookings მასივები

სატესტო მონაცემები: იხილეთ ნაბიჯების ნომრები კონკრეტული რეისი/სახელი კომბინაციებისთვის

მინიშნება: მეთოდის ცვლადში ამოღებისას this-ის კონტექსტი იკარგება
მინიშნება: call(thisArg, arg1, arg2) — არგუმენტები ცალ-ცალკე ჩამოწერილი
მინიშნება: apply(thisArg, [arg1, arg2]) — არგუმენტები მასივში
მინიშნება: bind ახალ ფუნქციას აბრუნებს, სადაც this მუდმივად დაფიქსირებულია
მინიშნება: bind-ს ასევე შეუძლია არგუმენტების წინასწარ დაყენება (partial application)

წარმატებები 😀
*/

// const georgianAirways = {
//   airline: 'Georgian Airways',
//   iataCode: 'A9',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name}-მ დაჯავშნა ადგილი ${this.airline} რეისზე ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// georgianAirways.book(234, 'გიორგი');
// georgianAirways.book(635, 'ნინო');

// const flyTbilisi = {
//   airline: 'FlyTbilisi',
//   iataCode: 'FT',
//   bookings: [],
// };

// const book = georgianAirways.book;

// // call-ის გამოყენება
// book.call(flyTbilisi, 23, 'დათო');
// book.call(georgianAirways, 777, 'ანა');

// // apply-ის გამოყენება
// book.apply(flyTbilisi, [101, 'ლუკა']);

// // bind-ის გამოყენება
// const bookFT = book.bind(flyTbilisi);
// bookFT(555, 'ნინო');

// // ნაწილობრივი გამოყენება bind-ით
// const bookA9234 = book.bind(georgianAirways, 234);
// bookA9234('ირაკლი');
// bookA9234('მარიამი');

// console.log('Georgian Airways ჯავშნები:', georgianAirways.bookings);
// console.log('FlyTbilisi ჯავშნები:', flyTbilisi.bookings);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - გადასახადის კალკულატორი
// (bind და ნაწილობრივი გამოყენება)

/*
შექმენით გადასახადის გამოთვლის სისტემა bind-ის ნაწილობრივი გამოყენებით,
შემდეგ ამოხსენით ალტერნატიულად ფუნქცია-აბრუნებს-ფუნქციას მიდგომით.

1. შექმენით ფუნქცია 'addTax', რომელიც იღებს rate-სა და value-ს,
   და აბრუნებს value + value * rate.
   მაგალითი: addTax(0.1, 200) → 220
2. გამოიყენეთ bind ნაწილობრივად გამოყენებული ფუნქცია 'addVAT'-ის შესაქმნელად,
   სადაც rate წინასწარ 0.2-ზეა (20% დღგ) დაყენებული. bind-ის პირველი არგუმენტი
   null-ია (this არ გვჭირდება), მეორე კი rate-ს აყენებს.
3. გამოიყენეთ bind 'addServiceTax'-ის შესაქმნელად rate-ით 0.1 (10%)
4. გამოიყენეთ bind 'addLuxuryTax'-ის შესაქმნელად rate-ით 0.35 (35%)
5. შეამოწმეთ ყველა კალკულატორი მნიშვნელობებით: 100, 200, 500
6. ახლა ამოხსენით იგივე ამოცანა ფუნქცია-აბრუნებს-ფუნქციას მიდგომით:
   შექმენით 'createTaxCalculator', რომელიც იღებს rate-ს და აბრუნებს
   ფუნქციას, რომელიც იღებს value-ს და აბრუნებს value + value * rate.
7. შექმენით addVAT2, addServiceTax2, addLuxuryTax2 createTaxCalculator-ით
8. შეამოწმეთ რომ იგივე შედეგებს იძლევიან

სატესტო მონაცემები:
  addVAT(100)        → 120
  addVAT(200)        → 240
  addServiceTax(500) → 550
  addLuxuryTax(100)  → 135

მინიშნება: bind(null, presetArg) — null, რადგან this არ გვჭირდება
მინიშნება: bind არგუმენტებს მარცხნიდან მარჯვნივ აყენებს
მინიშნება: closure მიდგომა ხშირად უფრო სუფთაა ვიდრე bind ამ შემთხვევაში
მინიშნება: ორივე მიდგომა ერთსა და იმავე შედეგს აღწევს — ნაწილობრივი გამოყენება

წარმატებები 😀
*/

// // მიდგომა 1: bind-ის გამოყენება ნაწილობრივი გამოყენებისთვის
// const addTax = function (rate, value) {
//   return value + value * rate;
// };

// console.log(addTax(0.1, 200)); // 220

// const addVAT = addTax.bind(null, 0.2);
// const addServiceTax = addTax.bind(null, 0.1);
// const addLuxuryTax = addTax.bind(null, 0.35);

// console.log('--- bind მიდგომა ---');
// console.log('დღგ 100-ზე:', addVAT(100));               // 120
// console.log('დღგ 200-ზე:', addVAT(200));               // 240
// console.log('მომსახურების გადასახადი 500-ზე:', addServiceTax(500)); // 550
// console.log('ფუფუნების გადასახადი 100-ზე:', addLuxuryTax(100));     // 135

// // მიდგომა 2: ფუნქციები, რომლებიც ფუნქციებს აბრუნებენ
// const createTaxCalculator = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = createTaxCalculator(0.2);
// const addServiceTax2 = createTaxCalculator(0.1);
// const addLuxuryTax2 = createTaxCalculator(0.35);

// console.log('--- closure მიდგომა ---');
// console.log('დღგ 100-ზე:', addVAT2(100));                 // 120
// console.log('დღგ 200-ზე:', addVAT2(200));                 // 240
// console.log('მომსახურების გადასახადი 500-ზე:', addServiceTax2(500));   // 550
// console.log('ფუფუნების გადასახადი 100-ზე:', addLuxuryTax2(100));       // 135


////////////////////////////////////
// სავარჯიშო ჩელენჯი #6 - მთვლელის ფაბრიკა
// (IIFE და Closure-ები)

/*
გამოიყენეთ IIFE (Immediately Invoked Function Expression) პრივატული
მთვლელის შესაქმნელად, რომელიც გარედან მიუწვდომელია.

1. შექმენით IIFE, რომელიც:
   - აცხადებს პრივატულ ცვლადს 'count', ინიციალიზებულს 0-ზე
   - აბრუნებს ობიექტს სამი მეთოდით:
     ა) increment: ზრდის count-ს 1-ით და ლოგავს ახალ მნიშვნელობას
     ბ) decrement: ამცირებს count-ს 1-ით და ლოგავს ახალ მნიშვნელობას
     გ) getCount: აბრუნებს count-ის მიმდინარე მნიშვნელობას
2. შეინახეთ დაბრუნებული ობიექტი ცვლადში 'counter'
3. გამოიძახეთ counter.increment() სამჯერ
4. გამოიძახეთ counter.decrement() ერთხელ
5. დალოგეთ counter.getCount() — უნდა იყოს 2
6. სცადეთ 'count'-ის პირდაპირ წვდომა გარედან — ეს უნდა იყოს
   შეუძლებელი! ცვლადი პრივატულია IIFE closure-ის წყალობით.
7. შექმენით მეორე მთვლელი (counter2) სხვა IIFE-ით.
   აჩვენეთ რომ counter და counter2 ცალ-ცალკე count-ებს ინახავენ.

სატესტო მონაცემები:
  counter.increment() x3 → count = 3
  counter.decrement() x1 → count = 2
  counter.getCount()      → 2
  counter2 უნდა დაიწყოს 0-დან დამოუკიდებლად

მინიშნება: (function() { ... })() — ეს არის IIFE
მინიშნება: IIFE-ს შიგნით ცვლადები გარედან მიუწვდომელია
მინიშნება: დაბრუნებული მეთოდები closure-ს ქმნიან 'count'-ზე
მინიშნება: თითოეული IIFE საკუთარ scope-ს ქმნის — ცალკეული closure-ები

წარმატებები 😀
*/

// const counter = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(`მთვლელი: ${count}`);
//     },
//     decrement() {
//       count--;
//       console.log(`მთვლელი: ${count}`);
//     },
//     getCount() {
//       return count;
//     },
//   };
// })();

// counter.increment(); // მთვლელი: 1
// counter.increment(); // მთვლელი: 2
// counter.increment(); // მთვლელი: 3
// counter.decrement(); // მთვლელი: 2
// console.log('მიმდინარე მთვლელი:', counter.getCount()); // 2

// // count-ის პირდაპირ წვდომის მცდელობა — შეუძლებელია!
// // console.log(count); // ReferenceError: count is not defined

// // მეორე დამოუკიდებელი მთვლელი
// const counter2 = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(`მთვლელი2: ${count}`);
//     },
//     decrement() {
//       count--;
//       console.log(`მთვლელი2: ${count}`);
//     },
//     getCount() {
//       return count;
//     },
//   };
// })();

// counter2.increment(); // მთვლელი2: 1
// counter2.increment(); // მთვლელი2: 2
// console.log('მთვლელი1:', counter.getCount()); // 2 (უცვლელი)
// console.log('მთვლელი2:', counter2.getCount()); // 2 (დამოუკიდებელი)


////////////////////////////////////
// სავარჯიშო ჩელენჯი #7 - დაცული პაროლების მენეჯერი
// (Closure-ები)

/*
შექმენით პაროლების მენეჯერი, რომელიც closure-ებს იყენებს პაროლების
პრივატულად შესანახად — ისინი არასოდეს უნდა იყოს პირდაპირ ხელმისაწვდომი.

1. შექმენით ფუნქცია 'createPasswordManager', რომელიც:
   - აცხადებს პრივატულ ობიექტს 'passwords' (ცარიელი: {})
   - აბრუნებს ობიექტს ოთხი მეთოდით:
     ა) addPassword(site, password): ინახავს პაროლს მოცემული საიტისთვის.
        ლოგავს 'პაროლი დაემატა {site}-სთვის'. თუ საიტი უკვე არსებობს,
        ლოგავს 'პაროლი განახლდა {site}-სთვის'.
     ბ) getPassword(site): აბრუნებს პაროლს მოცემული საიტისთვის.
        თუ ვერ მოიძებნა, აბრუნებს 'პაროლი ვერ მოიძებნა {site}-სთვის'.
     გ) removePassword(site): შლის პაროლს მოცემული საიტისთვის.
        ლოგავს 'პაროლი წაიშალა {site}-სთვის'. თუ ვერ მოიძებნა,
        ლოგავს 'პაროლი ვერ მოიძებნა {site}-სთვის'.
     დ) listSites(): აბრუნებს ყველა შენახული საიტის სახელების მასივს.
2. შექმენით მენეჯერის ინსტანცია: const myPasswords = createPasswordManager()
3. დაამატეთ პაროლები: 'gmail' ('abc123'), 'github' ('securePass!'),
   'facebook' ('myFBpass')
4. ამოიღეთ და დალოგეთ 'gmail'-ის პაროლი
5. დალისტეთ ყველა საიტი და დალოგეთ
6. წაშალეთ 'facebook'-ის პაროლი
7. ხელახლა დალისტეთ საიტები — 'facebook' აღარ უნდა იყოს
8. სცადეთ 'passwords' ობიექტის პირდაპირ წვდომა გარედან —
   ეს უნდა იყოს შეუძლებელი!
9. შექმენით მეორე მენეჯერი (workPasswords) და აჩვენეთ რომ
   საკუთარ ცალკეულ პაროლების საცავს ინახავს.

სატესტო მონაცემები:
  addPassword('gmail', 'abc123')
  addPassword('github', 'securePass!')
  addPassword('facebook', 'myFBpass')
  getPassword('gmail')     → 'abc123'
  getPassword('unknown')   → 'პაროლი ვერ მოიძებნა unknown-სთვის'
  listSites()              → ['gmail', 'github', 'facebook']

მინიშნება: passwords ობიექტი პრივატულია — მხოლოდ დაბრუნებულ მეთოდებს აქვთ წვდომა
მინიშნება: გამოიყენეთ 'delete obj[key]' ობიექტიდან თვისების წასაშლელად
მინიშნება: Object.keys(obj) ობიექტის გასაღებების მასივს აბრუნებს
მინიშნება: შეამოწმეთ საიტის არსებობა: site in passwords ან passwords[site]
მინიშნება: ეს არის Module Pattern — closure-ები მონაცემთა კონფიდენციალურობისთვის

წარმატებები 😀
*/

// const createPasswordManager = function () {
//   const passwords = {};

//   return {
//     addPassword(site, password) {
//       if (passwords[site]) {
//         console.log(`პაროლი განახლდა ${site}-სთვის`);
//       } else {
//         console.log(`პაროლი დაემატა ${site}-სთვის`);
//       }
//       passwords[site] = password;
//     },

//     getPassword(site) {
//       if (passwords[site]) {
//         return passwords[site];
//       }
//       return `პაროლი ვერ მოიძებნა ${site}-სთვის`;
//     },

//     removePassword(site) {
//       if (passwords[site]) {
//         delete passwords[site];
//         console.log(`პაროლი წაიშალა ${site}-სთვის`);
//       } else {
//         console.log(`პაროლი ვერ მოიძებნა ${site}-სთვის`);
//       }
//     },

//     listSites() {
//       return Object.keys(passwords);
//     },
//   };
// };

// const myPasswords = createPasswordManager();

// myPasswords.addPassword('gmail', 'abc123');
// // პაროლი დაემატა gmail-სთვის
// myPasswords.addPassword('github', 'securePass!');
// // პაროლი დაემატა github-სთვის
// myPasswords.addPassword('facebook', 'myFBpass');
// // პაროლი დაემატა facebook-სთვის

// console.log('Gmail-ის პაროლი:', myPasswords.getPassword('gmail'));
// // abc123
// console.log('უცნობი:', myPasswords.getPassword('unknown'));
// // პაროლი ვერ მოიძებნა unknown-სთვის

// console.log('ყველა საიტი:', myPasswords.listSites());
// // ['gmail', 'github', 'facebook']

// myPasswords.removePassword('facebook');
// // პაროლი წაიშალა facebook-სთვის

// console.log('წაშლის შემდეგ:', myPasswords.listSites());
// // ['gmail', 'github']

// // passwords ობიექტის პირდაპირ წვდომის მცდელობა — შეუძლებელია!
// // console.log(passwords); // ReferenceError

// // მეორე დამოუკიდებელი მენეჯერი
// const workPasswords = createPasswordManager();
// workPasswords.addPassword('slack', 'workPass1');
// workPasswords.addPassword('jira', 'workPass2');

// console.log('სამუშაო საიტები:', workPasswords.listSites());
// // ['slack', 'jira']
// console.log('პირადი საიტები:', myPasswords.listSites());
// // ['gmail', 'github'] — ცალკე და დამოუკიდებელი
